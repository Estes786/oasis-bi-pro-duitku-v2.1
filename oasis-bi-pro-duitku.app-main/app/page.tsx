import Link from "next/link";
import { BarChart3, Brain, Zap, Shield, Users, TrendingUp, Database, Eye, Clock, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Data Into <span className="text-yellow-300">Revenue</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Pure SaaS Business Intelligence Platform untuk Perusahaan Anda - Real-time Analytics, AI Insights & Revenue Optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Mulai Gratis 7 Hari
              </Link>
              <Link href="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Lihat Fitur
              </Link>
            </div>
            <p className="mt-6 text-blue-100">✓ No Credit Card Required  ✓ 7-Day Money Back Guarantee  ✓ Pure SaaS Model</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">10M+</div>
              <div className="text-gray-600 mt-2">Events Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">99.9%</div>
              <div className="text-gray-600 mt-2">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">&lt;2s</div>
              <div className="text-gray-600 mt-2">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">500+</div>
              <div className="text-gray-600 mt-2">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fitur Lengkap untuk Akselerasi Bisnis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platform Business Intelligence paling lengkap untuk digital business di Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Real-time Analytics"
              description="Monitor revenue, traffic, dan conversions dalam satu dashboard real-time dengan visualisasi interaktif"
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="AI-Powered Insights"
              description="Anomaly detection otomatis, revenue forecasting, dan recommendations berbasis AI"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Multi-Touch Attribution"
              description="Track customer journey dan attribution dari 5+ model (First-touch, Last-touch, Linear, Time-decay, Markov)"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Enterprise Security"
              description="Row-level security, data encryption, GDPR-compliant, dan SOC2 ready"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Team Collaboration"
              description="Role-based access control, shared dashboards, comments, dan team analytics"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Revenue Analytics"
              description="Track revenue by product, channel, customer segment dengan forecasting AI"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="Unlimited Integrations"
              description="Connect ke Google Analytics, Shopee, Tokopedia, Facebook Ads, dan 50+ data sources"
            />
            <FeatureCard
              icon={<Eye className="w-8 h-8" />}
              title="Custom Reports"
              description="Automated report generation, scheduled delivery, dan export ke PDF/Excel"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Real-time Alerts"
              description="Email dan dashboard alerts untuk anomalies, thresholds, dan critical events"
            />
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI yang Bekerja untuk Bisnis Anda
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Anomaly Detection</h3>
                    <p className="text-gray-600">AI otomatis detect sudden spikes atau drops di metrics Anda</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Revenue Forecasting</h3>
                    <p className="text-gray-600">Prediksi revenue next 7/30/90 days dengan Facebook Prophet</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Customer Segmentation</h3>
                    <p className="text-gray-600">K-Means clustering untuk identify high-value customer segments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Automated Recommendations</h3>
                    <p className="text-gray-600">AI recommendations untuk optimize marketing dan operations</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-sm text-gray-500 mb-2">AI Insight Example:</div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="font-semibold text-yellow-900">⚠️ Revenue Anomaly Detected</p>
                <p className="text-yellow-800 mt-2">Revenue dropped 23% in last 24 hours. Likely cause: reduced traffic from organic search (-31%).</p>
                <p className="text-yellow-900 mt-3 font-semibold">💡 Recommendation:</p>
                <p className="text-yellow-800">Increase paid ads budget by 15% to compensate for organic traffic drop.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dipercaya oleh 500+ Digital Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Dari startup hingga enterprise, OASIS BI PRO mengakselerasi growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              company="E-commerce Startup"
              text="Revenue tracking dan attribution analytics dari OASIS BI PRO membantu kami scale dari $10K ke $100K/month dalam 6 bulan."
              author="CEO, E-commerce Platform"
            />
            <TestimonialCard
              company="Digital Agency"
              text="Client kami sangat impressed dengan real-time dashboards dan automated reports. Retention rate naik 40%."
              author="Founder, Digital Marketing Agency"
            />
            <TestimonialCard
              company="SaaS Company"
              text="AI insights dari OASIS BI PRO detect churn risk 7 hari sebelumnya, saving us $50K+ annually."
              author="Head of Product, SaaS Platform"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Data Into Revenue?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ businesses yang sudah accelerate growth dengan OASIS BI PRO
          </p>
          <Link href="/pricing" className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Mulai Gratis 14 Hari →
          </Link>
          <p className="mt-6 text-blue-100">✓ No Credit Card Required  ✓ 14-Day Money Back Guarantee  ✓ Cancel Anytime</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ company, text, author }: { company: string; text: string; author: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="text-primary-600 font-bold mb-2">{company}</div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <p className="text-gray-600 text-sm">— {author}</p>
    </div>
  );
}
