'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  CreditCard,
  Package,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function MemberDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    activeSubscription: {
      planType: 'professional',
      status: 'active',
      startDate: '2025-01-01',
      endDate: '2025-02-01',
      daysRemaining: 7,
    },
    recentTransactions: [
      {
        id: '1',
        merchantOrderId: 'OASIS-1234567890-ABC',
        amount: 299000,
        planType: 'professional',
        status: 'success',
        paidAt: '2025-01-01T10:30:00',
      },
    ],
    stats: {
      totalSpent: 299000,
      totalTransactions: 1,
      activeSubscriptions: 1,
    },
  });

  // In a real app, this would fetch from API
  // const fetchDashboardData = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get('/api/member/dashboard');
  //     setDashboardData(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch dashboard data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800',
      success: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const getPlanName = (planType: string) => {
    const plans: { [key: string]: string } = {
      starter: 'Starter',
      professional: 'Professional',
      business: 'Business',
    };
    return plans[planType] || planType;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Member Dashboard</h1>
              <p className="text-gray-600 mt-1">Kelola subscription dan transaksi Anda</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/pricing"
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Package className="w-5 h-5 mr-2" />
                Upgrade Plan
              </Link>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-sm text-gray-500">Total Spent</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              Rp {dashboardData.stats.totalSpent.toLocaleString('id-ID')}
            </p>
            <p className="text-sm text-gray-500 mt-2">Lifetime spending</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Transactions</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {dashboardData.stats.totalTransactions}
            </p>
            <p className="text-sm text-gray-500 mt-2">Completed payments</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Active Plans</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {dashboardData.stats.activeSubscriptions}
            </p>
            <p className="text-sm text-gray-500 mt-2">Current subscriptions</p>
          </div>
        </div>

        {/* Active Subscription */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Package className="w-6 h-6 mr-2 text-primary-600" />
            Subscription Aktif
          </h2>
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {getPlanName(dashboardData.activeSubscription.planType)}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(
                      dashboardData.activeSubscription.status
                    )}`}
                  >
                    {dashboardData.activeSubscription.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Unlimited access ke semua fitur Professional
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>
                      Start: {new Date(dashboardData.activeSubscription.startDate).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>
                      End: {new Date(dashboardData.activeSubscription.endDate).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{dashboardData.activeSubscription.daysRemaining} hari tersisa</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Link
                  href="/pricing"
                  className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Upgrade Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Renewal Notice */}
          {dashboardData.activeSubscription.daysRemaining <= 7 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Subscription Anda akan berakhir dalam {dashboardData.activeSubscription.daysRemaining} hari.{' '}
                    <Link href="/pricing" className="font-semibold underline">
                      Perpanjang sekarang
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Plan Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary-600 mb-1">10</p>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary-600 mb-1">250K</p>
              <p className="text-sm text-gray-600">Events/Month</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary-600 mb-1">90</p>
              <p className="text-sm text-gray-600">Days Retention</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-primary-600" />
              Transaksi Terbaru
            </h2>
            <Link
              href="/member/transactions"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Lihat Semua →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Plan
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dashboardData.recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">
                      {transaction.merchantOrderId}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700 capitalize">
                      {getPlanName(transaction.planType)}
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-900">
                      Rp {transaction.amount.toLocaleString('id-ID')}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
                          transaction.status
                        )}`}
                      >
                        {transaction.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      {new Date(transaction.paidAt).toLocaleDateString('id-ID')}
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                        <FileText className="w-4 h-4 inline mr-1" />
                        Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/member/transactions"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <FileText className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Riwayat Transaksi</h3>
            <p className="text-gray-600 text-sm">
              Lihat semua transaksi dan download invoice
            </p>
          </Link>

          <Link
            href="/pricing"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <TrendingUp className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Upgrade Plan</h3>
            <p className="text-gray-600 text-sm">
              Tingkatkan plan untuk fitur lebih lengkap
            </p>
          </Link>

          <Link
            href="/member/settings"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <Settings className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Account Settings</h3>
            <p className="text-gray-600 text-sm">
              Kelola profile dan payment methods
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
