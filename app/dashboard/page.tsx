"use client";

import { useState } from "react";
import { 
  BarChart3, TrendingUp, Users, DollarSign, 
  Activity, AlertCircle, Clock, Download,
  ArrowUp, ArrowDown, Plus
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Area, AreaChart
} from "recharts";

// Sample data untuk charts
const revenueData = [
  { name: "Jan", revenue: 45200, target: 50000 },
  { name: "Feb", revenue: 52800, target: 55000 },
  { name: "Mar", revenue: 48900, target: 52000 },
  { name: "Apr", revenue: 61500, target: 60000 },
  { name: "May", revenue: 72100, target: 70000 },
  { name: "Jun", revenue: 68900, target: 75000 },
];

const trafficData = [
  { name: "Mon", visits: 2400, conversions: 240 },
  { name: "Tue", visits: 2800, conversions: 290 },
  { name: "Wed", visits: 2200, conversions: 210 },
  { name: "Thu", visits: 3100, conversions: 340 },
  { name: "Fri", visits: 2900, conversions: 310 },
  { name: "Sat", visits: 2600, conversions: 270 },
  { name: "Sun", visits: 2400, conversions: 250 },
];

const sourceData = [
  { name: "Organic", value: 42, color: "#3b82f6" },
  { name: "Paid Ads", value: 28, color: "#f59e0b" },
  { name: "Social", value: 18, color: "#10b981" },
  { name: "Direct", value: 12, color: "#8b5cf6" },
];

const hourlyActivity = [
  { hour: "00:00", events: 45 },
  { hour: "04:00", events: 12 },
  { hour: "08:00", events: 89 },
  { hour: "12:00", events: 156 },
  { hour: "16:00", events: 203 },
  { hour: "20:00", events: 178 },
  { hour: "23:00", events: 92 },
];

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="mt-2 text-gray-600">Real-time analytics and insights for your business</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Revenue"
            value="Rp 72.1M"
            change="+18.2%"
            trend="up"
            icon={<DollarSign className="w-6 h-6" />}
            color="green"
          />
          <KPICard
            title="Active Users"
            value="2,847"
            change="+12.5%"
            trend="up"
            icon={<Users className="w-6 h-6" />}
            color="blue"
          />
          <KPICard
            title="Conversion Rate"
            value="3.8%"
            change="-0.3%"
            trend="down"
            icon={<TrendingUp className="w-6 h-6" />}
            color="purple"
          />
          <KPICard
            title="Total Events"
            value="156,892"
            change="+24.1%"
            trend="up"
            icon={<Activity className="w-6 h-6" />}
            color="orange"
          />
        </div>

        {/* AI Insights Banner */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-blue-900">AI Insight: Revenue Spike Detected</h3>
              <p className="mt-1 text-blue-800">
                Your revenue increased by 18.2% compared to last week, primarily driven by organic traffic (+31% from SEO optimization).
              </p>
              <div className="mt-3 flex items-center space-x-4">
                <span className="text-sm text-blue-700 font-medium">💡 Recommendation: Increase content production by 20% to capitalize on this trend.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Trend */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Revenue Trend</h2>
              <span className="text-sm text-gray-500">Last 6 months</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `Rp ${(value as number / 1000).toFixed(1)}K`} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  fill="url(#colorRevenue)"
                  name="Actual Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#f59e0b" 
                  strokeDasharray="5 5"
                  name="Target"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic & Conversions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Traffic & Conversions</h2>
              <span className="text-sm text-gray-500">Last 7 days</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visits" fill="#3b82f6" name="Visits" />
                <Bar dataKey="conversions" fill="#10b981" name="Conversions" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Traffic Sources</h2>
              <span className="text-sm text-gray-500">Distribution</span>
            </div>
            <div className="flex items-center justify-between">
              <ResponsiveContainer width="60%" height={250}>
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {sourceData.map((source) => (
                  <div key={source.name} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-sm text-gray-700">{source.name}</span>
                    <span className="ml-auto text-sm font-semibold text-gray-900">{source.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hourly Activity */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Hourly Activity</h2>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hourlyActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="events" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ fill: '#8b5cf6', r: 4 }}
                  name="Events"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>Peak activity: 16:00 - 20:00 (203 events/hour)</span>
            </div>
          </div>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <ActivityItem
                type="success"
                title="Revenue milestone reached"
                description="Monthly revenue exceeded Rp 70M"
                time="2 hours ago"
              />
              <ActivityItem
                type="info"
                title="New user signed up"
                description="Premium plan subscription from Jakarta"
                time="4 hours ago"
              />
              <ActivityItem
                type="warning"
                title="Conversion rate dropped"
                description="Down 0.3% from yesterday"
                time="6 hours ago"
              />
              <ActivityItem
                type="success"
                title="AI insight generated"
                description="New optimization recommendations available"
                time="8 hours ago"
              />
              <ActivityItem
                type="info"
                title="Data integration completed"
                description="Google Analytics connected successfully"
                time="12 hours ago"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <QuickActionButton
                icon={<BarChart3 className="w-5 h-5" />}
                label="View Full Analytics"
                color="blue"
              />
              <QuickActionButton
                icon={<Plus className="w-5 h-5" />}
                label="Connect Data Source"
                color="green"
              />
              <QuickActionButton
                icon={<Download className="w-5 h-5" />}
                label="Generate Report"
                color="purple"
              />
              <QuickActionButton
                icon={<Activity className="w-5 h-5" />}
                label="AI Insights"
                color="orange"
              />
            </div>
            
            {/* Integration Status */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Connected Data Sources</h3>
              <div className="space-y-2">
                <DataSourceStatus name="Google Analytics" status="connected" />
                <DataSourceStatus name="Facebook Ads" status="connected" />
                <DataSourceStatus name="Shopee" status="syncing" />
                <DataSourceStatus name="Tokopedia" status="disconnected" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to unlock more insights?</h3>
              <p className="text-blue-100">Upgrade to Professional plan for AI-powered forecasting and advanced analytics.</p>
            </div>
            <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ 
  title, 
  value, 
  change, 
  trend, 
  icon, 
  color 
}: { 
  title: string; 
  value: string; 
  change: string; 
  trend: "up" | "down"; 
  icon: React.ReactNode; 
  color: "green" | "blue" | "purple" | "orange";
}) {
  const colorClasses = {
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  const trendColor = trend === "up" ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600 text-sm font-medium">{title}</span>
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className={`flex items-center mt-2 text-sm font-semibold ${trendColor}`}>
            {trend === "up" ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
            {change}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ 
  type, 
  title, 
  description, 
  time 
}: { 
  type: "success" | "info" | "warning"; 
  title: string; 
  description: string; 
  time: string;
}) {
  const typeStyles = {
    success: "bg-green-100 text-green-600",
    info: "bg-blue-100 text-blue-600",
    warning: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`p-2 rounded-full ${typeStyles[type]}`}>
        <Activity className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}

function QuickActionButton({ 
  icon, 
  label, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  color: "blue" | "green" | "purple" | "orange";
}) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    green: "bg-green-50 text-green-600 hover:bg-green-100",
    purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
    orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  };

  return (
    <button className={`p-4 rounded-lg ${colorClasses[color]} transition-colors flex flex-col items-center justify-center text-center`}>
      {icon}
      <span className="text-xs font-medium mt-2">{label}</span>
    </button>
  );
}

function DataSourceStatus({ 
  name, 
  status 
}: { 
  name: string; 
  status: "connected" | "syncing" | "disconnected";
}) {
  const statusStyles = {
    connected: "bg-green-100 text-green-700",
    syncing: "bg-yellow-100 text-yellow-700",
    disconnected: "bg-gray-100 text-gray-700",
  };

  const statusText = {
    connected: "Connected",
    syncing: "Syncing...",
    disconnected: "Not Connected",
  };

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-700">{name}</span>
      <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyles[status]}`}>
        {statusText[status]}
      </span>
    </div>
  );
}
