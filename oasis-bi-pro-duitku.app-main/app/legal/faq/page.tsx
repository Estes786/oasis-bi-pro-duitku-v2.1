export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Temukan jawaban untuk pertanyaan umum tentang OASIS BI PRO</p>
        
        <div className="space-y-6">
          <FAQSection title="🚀 Getting Started">
            <FAQItem 
              question="Bagaimana cara memulai dengan OASIS BI PRO?"
              answer="Mudah! Daftar untuk 14-day free trial (tanpa credit card), connect data sources Anda (Google Analytics, Shopee, dll), dan dashboard analytics akan otomatis di-generate. Onboarding hanya memakan 5-10 menit."
            />
            <FAQItem 
              question="Apakah butuh technical knowledge?"
              answer="Tidak sama sekali! OASIS BI PRO dirancang untuk non-technical users. Interface intuitif, drag-and-drop dashboard builder, dan automated insights membuatnya mudah digunakan tanpa coding knowledge."
            />
            <FAQItem 
              question="Apa itu free trial dan bagaimana cara kerjanya?"
              answer="Free trial memberikan full access ke semua fitur paket yang dipilih selama 14 hari. No credit card required untuk signup. Anda bisa cancel kapan saja tanpa charge."
            />
          </FAQSection>

          <FAQSection title="💰 Pricing & Billing">
            <FAQItem 
              question="Berapa harga OASIS BI PRO?"
              answer="Kami punya 3 plans: Starter (Rp 299K/month), Professional (Rp 999K/month), dan Enterprise (Rp 3.999K/month). Semua plans include 14-day free trial dan 14-day money-back guarantee."
            />
            <FAQItem 
              question="Apa yang terjadi jika saya exceed event limits?"
              answer="Anda akan menerima notification via email. Anda bisa: 1) Upgrade ke paket lebih tinggi, 2) Purchase add-on events, atau 3) Wait sampai billing cycle reset. Service tidak akan dihentikan tiba-tiba."
            />
            <FAQItem 
              question="Bagaimana cara upgrade atau downgrade paket?"
              answer="Mudah! Masuk ke Account Settings > Billing > Change Plan. Perubahan berlaku segera. Upgrade: pay difference pro-rated. Downgrade: apply di next billing cycle."
            />
          </FAQSection>

          <FAQSection title="🔒 Security & Privacy">
            <FAQItem 
              question="Apakah data saya aman?"
              answer="Absolutely! Kami menggunakan encryption TLS 1.3 untuk data in-transit dan AES-256 untuk data at-rest. Plus SOC2 compliance, GDPR-compliant, dan regular security audits."
            />
            <FAQItem 
              question="Siapa yang bisa access data saya?"
              answer="Hanya team members yang Anda invite dengan permissions yang Anda set. OASIS BI PRO staff tidak pernah access customer data kecuali untuk support troubleshooting (dengan permission Anda)."
            />
            <FAQItem 
              question="Bagaimana dengan data retention?"
              answer="Data retention varies by plan: 7 days (Starter), 90 days (Professional), Unlimited (Enterprise). Anda bisa export data kapan saja. Setelah account cancellation, data disimpan 30 hari lalu dihapus permanen."
            />
          </FAQSection>

          <FAQSection title="🔌 Integrations & Data">
            <FAQItem 
              question="Data sources apa yang supported?"
              answer="Kami support 50+ platforms: Google Analytics, Facebook Ads, Shopee, Tokopedia, Instagram, TikTok, Stripe, PayPal, dan banyak lagi. Plus API untuk custom integrations (Enterprise)."
            />
            <FAQItem 
              question="Berapa lama setup integrasi?"
              answer="Most integrations hanya memakan 2-5 menit dengan OAuth flow. Tinggal authorize access, pilih metrics yang ingin ditrack, done! Data akan mulai flowing real-time."
            />
            <FAQItem 
              question="Bagaimana kalau data source saya tidak tersedia?"
              answer="Anda bisa: 1) Request connector (kami prioritize based on demand), 2) Use CSV upload feature, atau 3) Use our API untuk custom integration (Enterprise plan)."
            />
          </FAQSection>

          <FAQSection title="📊 Features & Functionality">
            <FAQItem 
              question="Apa itu AI-powered insights?"
              answer="AI kami automatically detect anomalies (sudden spikes/drops), forecast revenue, segment customers, dan provide actionable recommendations. Hemat 10-20 jam/minggu dari manual analysis!"
            />
            <FAQItem 
              question="Bagaimana cara kerja multi-touch attribution?"
              answer="Kami track customer journey across all touchpoints dan credit revenue ke channels menggunakan 5 models: First-touch, Last-touch, Linear, Time-decay, dan Markov Chains. Lihat exactly mana marketing channel yang paling profitable."
            />
            <FAQItem 
              question="Apakah bisa custom reports?"
              answer="Yes! Anda bisa create custom dashboards, scheduled automated reports (email PDF/Excel), dan share dengan team atau clients. Professional & Enterprise plans include automated report generation."
            />
          </FAQSection>

          <FAQSection title="👥 Team & Collaboration">
            <FAQItem 
              question="Berapa banyak team members yang bisa ditambahkan?"
              answer="Depends on plan: 1 (Starter), 5 (Professional), Unlimited (Enterprise). Setiap member bisa assigned role & permissions (Admin, Editor, Viewer)."
            />
            <FAQItem 
              question="Bagaimana permissions bekerja?"
              answer="Role-based access control (RBAC): Admins (full access), Editors (create/edit dashboards), Viewers (read-only). Anda bisa customize permissions per dashboard atau data source."
            />
          </FAQSection>

          <FAQSection title="🛠️ Support & Help">
            <FAQItem 
              question="Bagaimana cara mendapatkan support?"
              answer="Email (support@oasisbipro.com), WhatsApp (+62 857-1265-8316), atau in-app chat. Response time: Email support (Starter), Priority support 2-4 hours (Professional), Dedicated manager (Enterprise)."
            />
            <FAQItem 
              question="Apakah ada training atau onboarding?"
              answer="Yes! Kami provide: 1) Self-service documentation & video tutorials, 2) Live onboarding call untuk Professional plan, 3) Dedicated training sessions untuk Enterprise plan."
            />
          </FAQSection>

          <FAQSection title="🔄 Cancellation & Refunds">
            <FAQItem 
              question="Bagaimana cara cancel subscription?"
              answer="Masuk ke Account Settings > Billing > Cancel Subscription. Service continues sampai end of billing period. No penalties atau hidden fees."
            />
            <FAQItem 
              question="Apakah ada refund policy?"
              answer="Yes! 14-day money-back guarantee. Jika not satisfied, kami refund 100% dalam 7 hari kerja. No questions asked (kecuali feedback optional untuk improvement)."
            />
            <FAQItem 
              question="Apa yang terjadi dengan data saya setelah cancel?"
              answer="Data Anda retained for 30 days (grace period untuk re-activation). Anda bisa export sebelum atau selama period ini. After 30 days, data dihapus permanen dan tidak bisa di-recover."
            />
          </FAQSection>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mt-12">
            <h3 className="text-lg font-bold text-primary-900 mb-2">💡 Still Have Questions?</h3>
            <p className="text-primary-800 mb-4">
              Kami siap membantu! Contact support team kami:
            </p>
            <ul className="space-y-2 text-primary-800">
              <li><strong>Email:</strong> support@oasisbipro.com</li>
              <li><strong>WhatsApp:</strong> +62 857-1265-8316</li>
              <li><strong>Live Chat:</strong> Available in dashboard (Mon-Fri 9 AM - 6 PM WIB)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-l-4 border-primary-200 pl-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
