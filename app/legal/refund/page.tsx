'use client'

import { Banknote, CheckCircle } from 'lucide-react'

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
            <Banknote className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-lg text-gray-600">Garansi uang kembali 14 hari - No questions asked</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> November 15, 2025<br/>
            <strong>Last Updated:</strong> November 15, 2025
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="text-green-900 font-bold text-xl mb-2">✅ 14-Day Money-Back Guarantee</h3>
            <p className="text-green-800 m-0">
              We stand behind our product. If you're not completely satisfied with OASIS BI PRO, we'll refund 100% of your payment within 14 days of purchase.
            </p>
          </div>

          <h2>1. Eligibility for Refund</h2>
          <p>You are eligible for a full refund if:</p>
          <ul>
            <li>✅ You request refund within 14 days of initial purchase</li>
            <li>✅ You are a first-time customer (not applied refund before)</li>
            <li>✅ You provide valid reason for dissatisfaction</li>
            <li>✅ You have not violated our Terms of Service</li>
          </ul>

          <h2>2. What is Covered</h2>
          <p>Our refund policy covers:</p>
          <ul>
            <li><strong>Monthly Subscriptions:</strong> Full refund if canceled within 14 days</li>
            <li><strong>Annual Subscriptions:</strong> Pro-rated refund if canceled within 14 days</li>
            <li><strong>Upgrade Charges:</strong> Refund of upgrade difference within 14 days</li>
          </ul>

          <h2>3. What is NOT Covered</h2>
          <p>Refunds are NOT available for:</p>
          <ul>
            <li>❌ Requests after 14-day period</li>
            <li>❌ Renewals (only initial purchase eligible)</li>
            <li>❌ Free trial periods (no charge, no refund)</li>
            <li>❌ Abuse or violation of Terms of Service</li>
            <li>❌ Chargebacks filed without contacting support first</li>
            <li>❌ Custom development or consulting services</li>
          </ul>

          <h2>4. Refund Process</h2>
          <h3>4.1 How to Request</h3>
          <ol>
            <li><strong>Contact Support:</strong> Email support@oasisbipro.com with:
              <ul>
                <li>Your account email address</li>
                <li>Order ID or transaction ID</li>
                <li>Reason for refund request</li>
                <li>Brief feedback (helps us improve)</li>
              </ul>
            </li>
            <li><strong>Verification:</strong> We verify your eligibility (1-2 business days)</li>
            <li><strong>Approval:</strong> Refund approved if eligible</li>
            <li><strong>Processing:</strong> Refund processed to original payment method</li>
          </ol>

          <h3>4.2 Processing Time</h3>
          <ul>
            <li><strong>Approval:</strong> 1-2 business days</li>
            <li><strong>Refund Processing:</strong> 3-5 business days</li>
            <li><strong>Bank Processing:</strong> 5-10 business days (depends on bank)</li>
            <li><strong>Total Time:</strong> 7-15 business days from approval</li>
          </ul>

          <h2>5. Refund Methods</h2>
          <p>Refunds are issued to the original payment method:</p>
          <ul>
            <li><strong>Credit/Debit Card:</strong> Refund to card within 5-10 days</li>
            <li><strong>Virtual Account:</strong> Refund to bank account within 3-7 days</li>
            <li><strong>E-wallet (GoPay, DANA, OVO):</strong> Refund within 1-3 days</li>
            <li><strong>QRIS:</strong> Refund to linked account within 3-5 days</li>
          </ul>

          <h2>6. Partial Refunds</h2>
          <p>Partial refunds may apply for:</p>
          <ul>
            <li><strong>Downgrades:</strong> Pro-rated refund of difference</li>
            <li><strong>Annual Plans:</strong> Pro-rated refund for unused months (within 14 days)</li>
            <li><strong>Add-ons:</strong> Refund of unused add-on services</li>
          </ul>
          <p>
            <strong>Calculation:</strong> (Days Remaining / Total Days) × Payment Amount
          </p>

          <h2>7. Free Trial Policy</h2>
          <ul>
            <li><strong>Duration:</strong> 14 days free access</li>
            <li><strong>No Credit Card:</strong> Not required for trial signup</li>
            <li><strong>Full Features:</strong> Access to all plan features</li>
            <li><strong>Cancellation:</strong> Cancel anytime during trial - no charge</li>
            <li><strong>Auto-Conversion:</strong> Converts to paid after trial unless canceled</li>
          </ul>

          <h2>8. Cancellation vs Refund</h2>
          <h3>8.1 Cancellation (After 14 Days)</h3>
          <ul>
            <li>Cancel anytime via account settings</li>
            <li>Service continues until end of billing period</li>
            <li>No refund for unused time</li>
            <li>Data retained for 30 days after cancellation</li>
          </ul>

          <h3>8.2 Refund (Within 14 Days)</h3>
          <ul>
            <li>Full refund of payment</li>
            <li>Immediate account suspension</li>
            <li>Data export available for 7 days</li>
            <li>Cannot re-activate account</li>
          </ul>

          <h2>9. Disputed Charges & Chargebacks</h2>
          <p>
            <strong>⚠️ Important:</strong> Please contact support BEFORE filing a chargeback.
          </p>
          <ul>
            <li>Filing chargeback without contacting us may result in account termination</li>
            <li>Chargebacks incur processing fees which we may pursue</li>
            <li>We respond to all disputes within 24-48 hours</li>
            <li>Legitimate disputes are resolved quickly and fairly</li>
          </ul>

          <h2>10. Exceptions</h2>
          <p>Refunds may be denied if:</p>
          <ul>
            <li>Account used for illegal or fraudulent activity</li>
            <li>Violation of Terms of Service</li>
            <li>Excessive usage or abuse of platform</li>
            <li>Multiple refund requests from same entity</li>
            <li>Request made after 14-day period</li>
          </ul>

          <h2>11. Enterprise Plans</h2>
          <p>Custom refund terms may apply to Enterprise plans:</p>
          <ul>
            <li>Negotiated in service agreement</li>
            <li>May include custom refund windows</li>
            <li>Handled on case-by-case basis</li>
            <li>Contact dedicated account manager</li>
          </ul>

          <h2>12. Contact for Refund</h2>
          <p>To request a refund or ask questions:</p>
          <ul>
            <li><strong>Email:</strong> support@oasisbipro.com (Subject: "Refund Request")</li>
            <li><strong>WhatsApp:</strong> +62 857-1265-8316</li>
            <li><strong>Response Time:</strong> Within 24 hours (business days)</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <h3 className="text-blue-900 font-bold mb-2">💡 Need Help?</h3>
            <p className="text-blue-800 m-0">
              Before requesting a refund, let us help! Many issues can be resolved with support. Our team is here to ensure your success with OASIS BI PRO.
            </p>
          </div>

          <p className="mt-8 pt-8 border-t border-gray-200 text-gray-600">
            <strong>Policy Changes:</strong> We reserve the right to modify this Refund Policy. Changes will be posted on this page with updated date.
          </p>
        </div>
      </div>
    </div>
  );
}
