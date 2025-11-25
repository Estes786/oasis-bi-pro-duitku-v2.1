import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OASIS BI PRO - Enterprise Business Intelligence Platform",
  description: "Real-time Business Intelligence & Analytics Platform dengan AI-Powered Insights untuk akselerasi revenue bisnis Anda",
  keywords: ["business intelligence", "analytics", "data visualization", "AI insights", "Indonesia"],
  authors: [{ name: "OASIS Team" }],
  openGraph: {
    title: "OASIS BI PRO - Enterprise Business Intelligence Platform",
    description: "Platform Business Intelligence dengan AI-Powered Insights",
    type: "website",
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <nav className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary-600">OASIS BI PRO</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-700 hover:text-primary-600">Fitur</a>
                <a href="/pricing" className="text-gray-700 hover:text-primary-600">Harga</a>
                <a href="/payment-methods" className="text-gray-700 hover:text-primary-600">Pembayaran</a>
                <a href="/security" className="text-gray-700 hover:text-primary-600">Keamanan</a>
                <a href="/legal/contact" className="text-gray-700 hover:text-primary-600">Kontak</a>
                <a href="/dashboard" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {children}
        
        <footer className="bg-gray-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">OASIS BI PRO</h3>
                <p className="text-gray-400">Enterprise Business Intelligence Platform</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Produk</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-white">Fitur</a></li>
                  <li><a href="/pricing" className="hover:text-white">Harga</a></li>
                  <li><a href="/payment-methods" className="hover:text-white">Metode Pembayaran</a></li>
                  <li><a href="/security" className="hover:text-white">Keamanan</a></li>
                  <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/legal/privacy" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="/legal/terms" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="/legal/dpa" className="hover:text-white">Data Processing Agreement</a></li>
                  <li><a href="/legal/cookies" className="hover:text-white">Cookie Policy</a></li>
                  <li><a href="/legal/refund" className="hover:text-white">Refund Policy</a></li>
                  <li><a href="/legal/faq" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Kontak</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: support@oasisbipro.com</li>
                  <li>WhatsApp: +62 857-1265-8316</li>
                  <li><a href="/legal/contact" className="hover:text-white">Hubungi Kami</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 OASIS BI PRO. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
