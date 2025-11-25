'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const merchantOrderId = searchParams.get('merchantOrderId');
  const reference = searchParams.get('reference');
  
  const [loading, setLoading] = useState(true);
  const [transactionData, setTransactionData] = useState<any>(null);

  useEffect(() => {
    if (merchantOrderId) {
      checkPaymentStatus();
    }
  }, [merchantOrderId]);

  const checkPaymentStatus = async () => {
    try {
      const response = await axios.get(`/api/duitku/check-status?merchantOrderId=${merchantOrderId}`);
      if (response.data.success) {
        setTransactionData(response.data);
      }
    } catch (error) {
      console.error('Failed to check payment status:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary-600 border-t-transparent mb-4"></div>
          <p className="text-lg text-gray-600">Memverifikasi pembayaran...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Pembayaran Berhasil!
            </h1>
            <p className="text-lg text-gray-600">
              Terima kasih telah berlangganan OASIS BI PRO
            </p>
          </div>

          {/* Transaction Details */}
          {transactionData && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Detail Transaksi</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold">{transactionData.transaction.merchantOrderId}</span>
                </div>
                {transactionData.transaction.reference && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reference:</span>
                    <span className="font-semibold">{transactionData.transaction.reference}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Paket:</span>
                  <span className="font-semibold capitalize">
                    {transactionData.order?.planType || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Metode Pembayaran:</span>
                  <span className="font-semibold">{transactionData.transaction.paymentMethodName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jumlah:</span>
                  <span className="font-semibold text-primary-600">
                    Rp {transactionData.transaction.amount.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    Paid
                  </span>
                </div>
                {transactionData.transaction.paidAt && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tanggal Bayar:</span>
                    <span className="font-semibold">
                      {new Date(transactionData.transaction.paidAt).toLocaleString('id-ID')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Customer Info */}
          {transactionData?.order && (
            <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-bold text-lg mb-3">📧 Konfirmasi Email Terkirim</h3>
              <p className="text-gray-700">
                Kami telah mengirimkan konfirmasi pembayaran dan detail akun ke email:
              </p>
              <p className="font-semibold text-primary-600 mt-2">
                {transactionData.order.customerEmail}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/member/dashboard"
              className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Ke Dashboard Member
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Invoice
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Butuh bantuan? Hubungi kami di{' '}
              <a href="mailto:oasisbipro@gmail.com" className="text-primary-600 hover:text-primary-700">
                oasisbipro@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎉 Langkah Selanjutnya</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Akses Dashboard</h3>
                <p className="text-gray-600">
                  Login ke member dashboard untuk melihat subscription details dan mulai menggunakan OASIS BI PRO
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Setup Integrasi</h3>
                <p className="text-gray-600">
                  Connect data sources Anda untuk mulai menganalisis business intelligence
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Explore Features</h3>
                <p className="text-gray-600">
                  Jelajahi semua fitur analytics, AI insights, dan reporting tools yang tersedia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary-600 border-t-transparent mb-4"></div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
