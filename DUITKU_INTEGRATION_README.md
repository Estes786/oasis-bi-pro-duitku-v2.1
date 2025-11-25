# OASIS BI PRO - Duitku Payment Integration

## 🎉 Project Overview

**OASIS BI PRO** adalah platform Business Intelligence (BI) dengan integrasi pembayaran **Duitku Sandbox**. Proyek ini menambahkan fitur checkout lengkap dengan multiple payment methods untuk subscription plans.

**Repository**: https://github.com/Estes786/oasis-bi-pro-duitku-v2

---

## 💰 Pricing Plans (Updated)

| Plan | Harga | Harga Asli |
|------|-------|------------|
| **Starter** | Rp 99.000/bulan | ~~Rp 199.000~~ |
| **Professional** | Rp 299.000/bulan | - |
| **Business** | Rp 499.000/bulan | - |

---

## 🚀 Features Implemented

### ✅ 1. Payment Gateway Integration
- **Duitku Sandbox API** integration
- **API Key**: `78cb96d8cb9ea9dc40d1c77068a659f6`
- **Merchant Code**: `D22457`
- Multiple payment methods support:
  - Virtual Account (BCA, Mandiri, BNI, BRI, Permata)
  - E-Wallet (GoPay, DANA, OVO, ShopeePay, LinkAja)
  - Credit Card (Visa, Mastercard, JCB)
  - QRIS

### ✅ 2. Checkout Flow
**Multi-step checkout process** (`/checkout`):
1. **Step 1**: Plan Selection - Choose between Starter, Professional, Business
2. **Step 2**: Customer Information - Name, Email, Phone
3. **Step 3**: Payment Method Selection - Dynamic payment methods from Duitku

### ✅ 3. Payment API Endpoints
- **GET** `/api/duitku/payment-methods` - Fetch available payment methods
- **POST** `/api/duitku/create-payment` - Create payment transaction
- **POST** `/api/duitku/callback` - Handle Duitku callback (webhook)
- **GET** `/api/duitku/check-status` - Check transaction status

### ✅ 4. Payment Result Pages
- **Success Page** (`/payment/success`) - Payment successful confirmation
- **Pending Page** (`/payment/pending`) - Payment awaiting confirmation
- **Failed Page** (`/payment/failed`) - Payment failed handling

### ✅ 5. Member Dashboard
- **Dashboard** (`/member/dashboard`) - Overview of subscription and transactions
- **Transaction History** (`/member/transactions`) - Full transaction list with filtering
- Features:
  - Active subscription display
  - Recent transactions table
  - Stats cards (Total Spent, Transactions, Active Plans)
  - Download invoices
  - Search and filter transactions

### ✅ 6. Database Schema (Supabase)
Complete PostgreSQL schema with:
- `orders` - Order records
- `transactions` - Payment transactions
- `subscriptions` - Active subscriptions
- `invoices` - Invoice records
- Row-level security (RLS) policies
- Automatic timestamps

---

## 📁 Project Structure

```
oasis-bi-pro/
├── app/
│   ├── checkout/page.tsx           # 3-step checkout
│   ├── payment/
│   │   ├── success/page.tsx        # Payment success
│   │   ├── pending/page.tsx        # Payment pending
│   │   └── failed/page.tsx         # Payment failed
│   ├── member/
│   │   ├── dashboard/page.tsx      # Member dashboard
│   │   └── transactions/page.tsx   # Transaction history
│   ├── api/duitku/
│   │   ├── payment-methods/route.ts
│   │   ├── create-payment/route.ts
│   │   ├── callback/route.ts
│   │   └── check-status/route.ts
│   └── pricing/page.tsx            # Updated pricing
├── lib/
│   ├── duitku.ts                   # Duitku integration library
│   ├── supabase.ts                 # Supabase client
│   └── pricing.ts                  # Pricing constants
├── supabase/
│   └── schema.sql                  # Database schema
├── .env.local                      # Environment variables
└── package.json
```

---

## 🔧 Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://augohrpoogldvdvdaxxy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Duitku
DUITKU_MERCHANT_CODE=D22457
DUITKU_API_KEY=78cb96d8cb9ea9dc40d1c77068a659f6
DUITKU_SANDBOX_MODE=true
DUITKU_CALLBACK_URL=https://oasis-bi-pro.web.id/api/duitku/callback
DUITKU_RETURN_URL=https://oasis-bi-pro.web.id/payment/success

# Email
SMTP_EMAIL=oasisbipro@gmail.com

# App
NEXT_PUBLIC_APP_URL=https://oasis-bi-pro.web.id
```

---

## 🔄 Payment Flow

```
1. User visits /pricing
   ↓
2. Click "Beli Sekarang" → /checkout?plan=professional
   ↓
3. Step 1: Select plan (Starter/Professional/Business)
   ↓
4. Step 2: Enter customer info (Name, Email, Phone)
   ↓
5. Step 3: Choose payment method (VA/E-Wallet/Card/QRIS)
   ↓
6. Submit → API creates order & transaction
   ↓
7. Redirect to Duitku payment page
   ↓
8. User completes payment
   ↓
9. Duitku sends callback → /api/duitku/callback
   ↓
10. Update order & transaction status
    ↓
11. Create subscription & invoice
    ↓
12. Redirect to /payment/success
    ↓
13. User can access /member/dashboard
```

---

## 💾 Database Schema

### Orders Table
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  plan_type VARCHAR(20), -- 'starter' | 'professional' | 'business'
  amount DECIMAL(12, 2),
  status VARCHAR(20), -- 'pending' | 'paid' | 'failed' | 'expired'
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  customer_phone VARCHAR(20),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Transactions Table
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  merchant_order_id VARCHAR(100) UNIQUE,
  reference VARCHAR(100),
  amount DECIMAL(12, 2),
  payment_method VARCHAR(10),
  payment_method_name VARCHAR(100),
  status VARCHAR(20), -- 'pending' | 'success' | 'failed'
  payment_url TEXT,
  expired_at TIMESTAMP,
  paid_at TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Subscriptions Table
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  order_id UUID REFERENCES orders(id),
  plan_type VARCHAR(20),
  status VARCHAR(20), -- 'active' | 'expired' | 'cancelled'
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Invoices Table
```sql
CREATE TABLE invoices (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  transaction_id UUID REFERENCES transactions(id),
  invoice_number VARCHAR(50) UNIQUE,
  amount DECIMAL(12, 2),
  tax DECIMAL(12, 2),
  total DECIMAL(12, 2),
  status VARCHAR(20), -- 'draft' | 'issued' | 'paid' | 'cancelled'
  issued_at TIMESTAMP,
  paid_at TIMESTAMP,
  created_at TIMESTAMP
);
```

---

## 🧪 Testing with Duitku Sandbox

### Sandbox Testing Steps:
1. Visit `/checkout?plan=starter`
2. Fill customer information
3. Select payment method (e.g., BCA Virtual Account)
4. Complete payment on Duitku sandbox page
5. Use **Duitku Sandbox Testing Credentials** for simulation
6. Check callback at `/api/duitku/callback`
7. Verify success page at `/payment/success`

### Duitku Sandbox Documentation:
- **Docs**: https://docs.duitku.com/
- **Testing Guide**: https://docs.duitku.com/sandbox/testing

---

## 📦 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/Estes786/oasis-bi-pro-duitku-v2.git
cd oasis-bi-pro-duitku-v2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create `.env.local` file with the credentials provided above.

### 4. Setup Supabase Database
Run the schema SQL in Supabase SQL Editor:
```bash
# Copy content from supabase/schema.sql
# Execute in Supabase → SQL Editor
```

### 5. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000

### 6. Test Payment Flow
1. Visit http://localhost:3000/pricing
2. Click "Beli Sekarang"
3. Complete checkout process
4. Test with Duitku sandbox

---

## 🚀 Deployment

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Environment Variables to Set:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `DUITKU_MERCHANT_CODE`
- `DUITKU_API_KEY`
- `DUITKU_SANDBOX_MODE`
- `DUITKU_CALLBACK_URL` (Update with production URL)
- `DUITKU_RETURN_URL` (Update with production URL)
- `NEXT_PUBLIC_APP_URL` (Update with production URL)

---

## 📧 Support

- **Email**: oasisbipro@gmail.com
- **GitHub**: https://github.com/Estes786/oasis-bi-pro-duitku-v2
- **Duitku Support**: support@duitku.com

---

## ✅ Checklist Before Production

- [ ] Update `DUITKU_SANDBOX_MODE=false` for production
- [ ] Update callback URL with production domain
- [ ] Update return URL with production domain
- [ ] Test all payment methods in sandbox
- [ ] Verify callback signature handling
- [ ] Setup email notifications
- [ ] Configure Supabase Row Level Security
- [ ] Test member dashboard with real data
- [ ] Setup monitoring and logging
- [ ] Apply for Duitku production merchant account

---

## 🎯 Next Steps

1. **Test Payment Flow** - Test all payment methods in sandbox
2. **Setup Email** - Configure SMTP for payment confirmations
3. **Production Deployment** - Deploy to Vercel/Netlify
4. **Duitku Production** - Apply for production merchant account
5. **User Authentication** - Add Supabase Auth for member login
6. **Invoice Generation** - Implement PDF invoice generation
7. **Subscription Management** - Add renewal and cancellation features

---

## 📝 Changelog

### Version 1.0.0 (2025-01-25)
- ✅ Initial release with Duitku integration
- ✅ Multi-step checkout process
- ✅ Payment API endpoints
- ✅ Member dashboard
- ✅ Transaction history
- ✅ Payment result pages
- ✅ Database schema with RLS
- ✅ Updated pricing (Rp 99K, Rp 299K, Rp 499K)

---

**Built with ❤️ by OASIS Team**
