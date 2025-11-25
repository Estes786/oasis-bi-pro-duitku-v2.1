export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Kami siap membantu Anda. Hubungi kami melalui channel yang paling nyaman untuk Anda.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📞 Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                  <a href="mailto:support@oasisbipro.com" className="text-primary-600 hover:underline">
                    support@oasisbipro.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Response within 24 hours</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Business</h3>
                  <a href="https://wa.me/6285712658316" className="text-primary-600 hover:underline">
                    +62 857-1265-8316
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Mon-Fri 9 AM - 6 PM WIB</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sales Inquiries</h3>
                  <a href="mailto:sales@oasisbipro.com" className="text-primary-600 hover:underline">
                    sales@oasisbipro.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">For Enterprise & custom solutions</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Technical Support</h3>
                  <a href="mailto:tech@oasisbipro.com" className="text-primary-600 hover:underline">
                    tech@oasisbipro.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">For technical issues & integrations</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 Office Location</h2>
              <p className="text-gray-700 mb-2">
                <strong>OASIS BI PRO</strong><br/>
                Jakarta, Indonesia<br/>
                (Remote-first company)
              </p>
              <p className="text-sm text-gray-600 mt-4">
                We operate primarily remotely to serve customers across Indonesia efficiently.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">⏰ Business Hours</h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Email support available 24/7. We respond during business hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">✉️ Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Company (Optional)"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Pricing</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing & Payment</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-600 text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Need Immediate Help?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-blue-100 text-sm mb-3">
                Browse our comprehensive docs and tutorials
              </p>
              <a href="/docs" className="text-yellow-300 hover:underline text-sm">
                View Docs →
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💬</div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-blue-100 text-sm mb-3">
                Chat with our support team in real-time
              </p>
              <a href="/dashboard" className="text-yellow-300 hover:underline text-sm">
                Start Chat →
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎥</div>
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-blue-100 text-sm mb-3">
                Watch step-by-step tutorial videos
              </p>
              <a href="/tutorials" className="text-yellow-300 hover:underline text-sm">
                Watch Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
