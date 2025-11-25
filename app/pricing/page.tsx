import Link from "next/link";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Harga yang Transparan dan Terjangkau
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket include 7-day money-back guarantee.
          </p>
          <p className="mt-4 text-lg text-primary-600 font-semibold">
            ✨ Pure SaaS Model - Direct Business Intelligence for YOUR Company
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter */}
          <PricingCard
            name="Starter"
            price="99.000"
            originalPrice="199.000"
            period="/bulan"
            description="Perfect untuk startup dan SMEs"
            features={[
              { text: "3 anggota team", included: true },
              { text: "50,000 events/bulan", included: true },
              { text: "5 integrasi data sources", included: true },
              { text: "Real-time analytics dashboard", included: true },
              { text: "Email support (48h response)", included: true },
              { text: "30-day data retention", included: true },
              { text: "Basic reporting", included: true },
              { text: "AI-powered insights", included: false },
              { text: "Multi-touch attribution", included: false },
              { text: "Priority support", included: false },
            ]}
            cta="Beli Sekarang"
            ctaLink="/checkout?plan=starter"
          />

          {/* Professional (Popular) */}
          <PricingCard
            name="Professional"
            price="299.000"
            period="/bulan"
            description="Paling populer untuk growing businesses"
            popular={true}
            features={[
              { text: "10 anggota team", included: true },
              { text: "250,000 events/bulan", included: true },
              { text: "Unlimited integrasi", included: true },
              { text: "Advanced analytics dashboard", included: true },
              { text: "Priority support (24h response)", included: true },
              { text: "90-day data retention", included: true },
              { text: "AI-powered insights & forecasting", included: true },
              { text: "Anomaly detection otomatis", included: true },
              { text: "Multi-touch attribution (5 models)", included: true },
              { text: "Automated custom reports", included: true },
              { text: "Team collaboration features", included: true },
              { text: "API access (rate-limited)", included: true },
            ]}
            cta="Beli Sekarang"
            ctaLink="/checkout?plan=professional"
          />

          {/* Business */}
          <PricingCard
            name="Business"
            price="499.000"
            period="/bulan"
            description="For large teams & enterprises"
            features={[
              { text: "Unlimited team members", included: true },
              { text: "Unlimited events", included: true },
              { text: "Unlimited integrations", included: true },
              { text: "Full analytics suite", included: true },
              { text: "Dedicated account manager", included: true },
              { text: "Unlimited data retention", included: true },
              { text: "Advanced AI/ML models", included: true },
              { text: "Custom dashboards", included: true },
              { text: "Custom integrations", included: true },
              { text: "Full API access (unlimited)", included: true },
              { text: "SLA guarantee 99.9%", included: true },
              { text: "SOC2 compliance support", included: true },
              { text: "On-premise deployment option", included: true },
              { text: "Custom training & onboarding", included: true },
            ]}
            cta="Beli Sekarang"
            ctaLink="/checkout?plan=business"
          />
        </div>

        {/* Annual Discount Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 mb-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">💰 Save 15% with Annual Billing</h3>
          <p className="text-lg">Pay annually and get 2 months FREE. All features included, no surprise fees.</p>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perbandingan Fitur Lengkap
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6">Fitur</th>
                  <th className="text-center py-4 px-6">Starter</th>
                  <th className="text-center py-4 px-6 bg-primary-50">Professional</th>
                  <th className="text-center py-4 px-6">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <ComparisonRow feature="Team Members" starter="3" professional="10" enterprise="Unlimited" />
                <ComparisonRow feature="Events per Month" starter="50,000" professional="250,000" enterprise="Unlimited" />
                <ComparisonRow feature="Data Integrations" starter="5" professional="Unlimited" enterprise="Unlimited + Custom" />
                <ComparisonRow feature="Data Retention" starter="30 days" professional="90 days" enterprise="Unlimited" />
                <ComparisonRow feature="Dashboard Analytics" starter="Real-time" professional="Advanced" enterprise="Full Suite" />
                <ComparisonRow feature="AI Insights" starter="❌" professional="✅" enterprise="✅ Advanced" />
                <ComparisonRow feature="Anomaly Detection" starter="❌" professional="✅" enterprise="✅" />
                <ComparisonRow feature="Revenue Forecasting" starter="❌" professional="✅" enterprise="✅" />
                <ComparisonRow feature="Customer Segmentation" starter="❌" professional="✅" enterprise="✅" />
                <ComparisonRow feature="Multi-Touch Attribution" starter="❌" professional="5 models" enterprise="All models + Custom" />
                <ComparisonRow feature="Automated Reports" starter="Basic" professional="✅" enterprise="✅ + Custom" />
                <ComparisonRow feature="Custom Dashboards" starter="❌" professional="Limited" enterprise="✅ Unlimited" />
                <ComparisonRow feature="API Access" starter="❌" professional="✅ Limited" enterprise="✅ Unlimited" />
                <ComparisonRow feature="Support" starter="Email 48h" professional="Priority 24h" enterprise="Dedicated Manager" />
                <ComparisonRow feature="SLA" starter="Best effort" professional="99% uptime" enterprise="99.9% + SLA" />
              </tbody>
            </table>
          </div>
        </div>

        {/* IMPORTANT: Pure SaaS Clarification */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 Pure SaaS Business Intelligence</h3>
          <p className="text-lg text-blue-800 mb-4">
            OASIS BI PRO adalah platform Business Intelligence untuk penggunaan LANGSUNG oleh perusahaan Anda.
          </p>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <Check className="w-6 h-6 mr-2 flex-shrink-0 text-green-600" />
              <span><strong>Direct Use:</strong> Anda membeli untuk tim Anda sendiri, bukan untuk dijual kembali</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 mr-2 flex-shrink-0 text-green-600" />
              <span><strong>Your Brand:</strong> Data analytics untuk keputusan bisnis internal Anda</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 mr-2 flex-shrink-0 text-green-600" />
              <span><strong>No Reselling:</strong> Bukan platform untuk white-label atau reselling</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 mr-2 flex-shrink-0 text-green-600" />
              <span><strong>Duitku Secure:</strong> Payment model yang secure dengan Duitku</span>
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="Apakah ada free trial?"
              answer="Ya! Semua paket include 7-day free trial. No credit card required untuk sign up. Coba full features tanpa risiko."
            />
            <FAQItem
              question="Bagaimana cara pembayaran?"
              answer="Kami support pembayaran via Duitku: Credit Card (Visa, Mastercard, JCB), Virtual Account (BCA, Mandiri, BNI, BRI, Permata), E-wallet (GoPay, DANA, OVO, ShopeePay, LinkAja), dan QRIS."
            />
            <FAQItem
              question="Apakah bisa refund?"
              answer="Ya, kami provide 7-day money-back guarantee. Jika tidak satisfied, kami akan refund 100% dalam 5-7 hari kerja sesuai metode pembayaran Anda."
            />
            <FAQItem
              question="Apakah bisa upgrade atau downgrade paket?"
              answer="Ya, Anda bisa upgrade atau downgrade paket kapan saja. Perubahan akan berlaku di billing cycle berikutnya. Tidak ada penalty untuk perubahan paket."
            />
            <FAQItem
              question="Apakah data saya aman?"
              answer="Absolutely! Kami menggunakan end-to-end encryption (TLS 1.3 + AES-256), Row-Level Security (RLS), SOC2 compliance, dan GDPR-compliant. Data Anda stored di server yang secure dengan automatic daily backups."
            />
            <FAQItem
              question="Apakah ini platform white-label atau reselling?"
              answer="TIDAK. OASIS BI PRO adalah Pure SaaS platform untuk penggunaan LANGSUNG oleh perusahaan Anda. Bukan untuk white-label, bukan untuk reselling, bukan untuk sub-merchant. Ini adalah Business Intelligence tool untuk tim Anda sendiri."
            />
            <FAQItem
              question="Apakah saya bisa custom branding?"
              answer="Business plan include custom dashboards dan personalisasi untuk tim internal Anda. Namun ini BUKAN white-label untuk dijual ke customer Anda. Semua branding adalah untuk internal use ONLY."
            />
            <FAQItem
              question="Berapa lama proses setup?"
              answer="Setup sangat cepat! Setelah sign up, Anda bisa langsung connect data sources dan lihat dashboard dalam 5-10 menit. Team kami akan bantu onboarding untuk Business plan."
            />
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            💳 Metode Pembayaran - Powered by Duitku
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Credit/Debit Card</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Visa</p>
                <p>• Mastercard</p>
                <p>• JCB</p>
                <p>• Instant approval</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Virtual Account</h3>
              <div className="space-y-2 text-gray-600">
                <p>• BCA</p>
                <p>• Mandiri</p>
                <p>• BNI</p>
                <p>• BRI</p>
                <p>• Permata</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">E-Wallet & QRIS</h3>
              <div className="space-y-2 text-gray-600">
                <p>• GoPay</p>
                <p>• DANA</p>
                <p>• OVO</p>
                <p>• ShopeePay</p>
                <p>• LinkAja</p>
                <p>• QRIS (All Banks)</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Siap Meningkatkan Revenue Bisnis Anda?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join ratusan bisnis yang sudah meningkatkan revenue dengan OASIS BI PRO
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-primary-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Mulai Gratis 7 Hari →
          </Link>
          <p className="mt-4 text-gray-500">No credit card required • 7-day money-back guarantee</p>
        </div>
      </div>
    </div>
  );
}

// Pricing Card Component
function PricingCard({
  name,
  price,
  originalPrice,
  period,
  description,
  features,
  cta,
  ctaLink,
  popular = false,
}: {
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 relative ${popular ? "ring-4 ring-primary-500" : ""}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
            PALING POPULER
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {originalPrice && (
          <div className="mb-2">
            <span className="text-lg text-gray-400 line-through">Rp {originalPrice}</span>
          </div>
        )}
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">Rp {price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaLink}
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-primary-600 text-white hover:bg-primary-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}

// Comparison Row Component
function ComparisonRow({
  feature,
  starter,
  professional,
  enterprise,
}: {
  feature: string;
  starter: string;
  professional: string;
  enterprise: string;
}) {
  return (
    <tr>
      <td className="py-4 px-6 font-medium text-gray-900">{feature}</td>
      <td className="py-4 px-6 text-center text-gray-600">{starter}</td>
      <td className="py-4 px-6 text-center text-gray-900 bg-primary-50 font-semibold">{professional}</td>
      <td className="py-4 px-6 text-center text-gray-600">{enterprise}</td>
    </tr>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
