'use client'

import { Shield, Lock, Eye, Database, FileText, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Kami berkomitmen melindungi privasi dan data Anda</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> November 15, 2025<br/>
            <strong>Last Updated:</strong> November 28, 2025
          </p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to OASIS BI PRO ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business intelligence platform.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, phone number, company name, business information</li>
            <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through Midtrans)</li>
            <li><strong>Business Data:</strong> Analytics data, metrics, custom reports that you upload or integrate</li>
            <li><strong>Communications:</strong> Support inquiries, feedback, and correspondence</li>
          </ul>

          <h3>2.2 Information Automatically Collected</h3>
          <ul>
            <li><strong>Usage Data:</strong> Features accessed, time spent, interactions with the platform</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
            <li><strong>Cookies:</strong> Session cookies, preference cookies, analytics cookies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process your transactions and manage subscriptions</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Generate analytics and insights about platform usage</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data:
          </p>
          <ul>
            <li><strong>Encryption:</strong> All data in transit is encrypted using TLS 1.3</li>
            <li><strong>Data at Rest:</strong> Encrypted using AES-256 encryption</li>
            <li><strong>Access Controls:</strong> Role-based access control (RBAC) and multi-factor authentication (MFA)</li>
            <li><strong>Regular Audits:</strong> Security audits and penetration testing</li>
            <li><strong>Compliance:</strong> SOC2, GDPR, and Indonesian data protection regulations</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide services and comply with legal obligations:
          </p>
          <ul>
            <li><strong>Account Data:</strong> Retained while your account is active</li>
            <li><strong>Analytics Data:</strong> 7 days (Starter), 90 days (Professional), unlimited (Enterprise)</li>
            <li><strong>Transaction Records:</strong> 7 years for accounting and tax purposes</li>
            <li><strong>Support Communications:</strong> 3 years</li>
          </ul>

          <h2>6. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Hosting (Vercel, Supabase), payment processing (Midtrans), analytics</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
            <li><strong>Business Transfers:</strong> In connection with merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you authorize us to share specific information</li>
          </ul>

          <h2>7. Your Rights (GDPR & Indonesian Law)</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request copies of your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Objection:</strong> Object to processing of your personal data</li>
            <li><strong>Restriction:</strong> Request restriction of processing</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
          </ul>
          <p>
            To exercise these rights, contact us at <strong>privacy@oasisbipro.com</strong>
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries other than Indonesia. We ensure adequate protection through:
          </p>
          <ul>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Data Processing Agreements (DPAs)</li>
            <li>Compliance with GDPR and applicable data protection laws</li>
          </ul>

          <h2>10. Cookies Policy</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Enable core functionality (required)</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            <li><strong>Analytics Cookies:</strong> Understand how you use our platform (with consent)</li>
            <li><strong>Marketing Cookies:</strong> Show relevant advertisements (with consent)</li>
          </ul>
          <p>You can control cookies through your browser settings.</p>

          <h2>11. Third-Party Links</h2>
          <p>
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these websites. Please review their privacy policies.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes by:
          </p>
          <ul>
            <li>Email notification to your registered email address</li>
            <li>Prominent notice on our platform</li>
            <li>Update to the "Last Updated" date at the top</li>
          </ul>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> privacy@oasisbipro.com</li>
            <li><strong>Support:</strong> support@oasisbipro.com</li>
            <li><strong>WhatsApp:</strong> +62 857-1265-8316</li>
            <li><strong>Address:</strong> Jakarta, Indonesia</li>
          </ul>

          <h2>14. Compliance</h2>
          <p>This Privacy Policy complies with:</p>
          <ul>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>Indonesian Law No. 27/2022 on Personal Data Protection</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>SOC2 Type II standards</li>
          </ul>

          <p className="mt-8 pt-8 border-t border-gray-200 text-gray-600">
            <strong>Acknowledgment:</strong> By using OASIS BI PRO, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </div>
  );
}
