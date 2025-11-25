# 🚀 OASIS BI PRO - Complete Deployment Guide

**Step-by-step panduan untuk deploy OASIS BI PRO ke production**

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### ✅ CRITICAL REQUIREMENTS

#### 1. Accounts & Credentials
- [ ] GitHub account (untuk repository)
- [ ] Vercel account (untuk frontend hosting)
- [ ] Supabase account (untuk database & backend)
- [ ] Midtrans account (untuk payment gateway)
- [ ] Domain name (optional - bisa pakai subdomain Vercel dulu)

#### 2. Legal Documents (MANDATORY untuk Midtrans Approval)
- [ ] KTP (untuk individual) ATAU Akta Pendirian (untuk PT/CV)
- [ ] NPWP (pribadi/perusahaan)
- [ ] Bukti mutasi rekening 3 bulan terakhir
- [ ] Business proposal (2-3 halaman)

#### 3. Technical Setup
- [ ] Node.js >= 18.0.0 installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)

---

## 🗄️ PHASE 1: DATABASE SETUP (SUPABASE)

### Step 1.1: Create Supabase Project

1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Fill in:
   - Project name: `oasis-bi-pro`
   - Database password: (strong password, SAVE THIS!)
   - Region: `Southeast Asia (Singapore)` (closest to Indonesia)
4. Wait 2-3 minutes for project creation

### Step 1.2: Run Database Migration

**Option A: Via Supabase Dashboard (Recommended)**
1. Go to SQL Editor in Supabase Dashboard
2. Copy entire content dari `/supabase/migrations/001_oasis_bi_pro_schema.sql`
3. Paste ke SQL Editor
4. Click "Run"
5. Verify tables created successfully (should see 20+ tables)

**Option B: Via Supabase CLI**
\`\`\`bash
# Install Supabase CLI
npm install -g supabase

# Login
npx supabase login

# Link to your project
npx supabase link --project-ref your-project-ref

# Push migrations
npx supabase db push
\`\`\`

### Step 1.3: Get Supabase Credentials

Go to **Settings → API**

Copy these values (SAVE untuk .env.local):
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

---

## 🔐 PHASE 2: MIDTRANS SETUP

### Step 2.1: Daftar Midtrans Sandbox (Testing)

1. Go to https://dashboard.sandbox.midtrans.com/register
2. Fill in registration form
3. Verify email
4. Login to sandbox dashboard

### Step 2.2: Get Midtrans Credentials

Go to **Settings → Access Keys**

Copy these values:
\`\`\`
Sandbox (for testing):
MIDTRANS_SERVER_KEY=SB-Mid-server-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-xxxxxxxxxxxxxxxx

Production (after approval):
MIDTRANS_SERVER_KEY=Mid-server-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=Mid-client-xxxxxxxxxxxxxxxx
\`\`\`

### Step 2.3: Midtrans Production Approval (CRITICAL!)

**📧 Email Template:**

\`\`\`
To: support@midtrans.com
Subject: [APPROVAL REQUEST] OASIS BI PRO - Enterprise BI Platform

Dear Midtrans Team,

Saya mengajukan approval untuk Midtrans Production untuk platform OASIS BI PRO.

BUSINESS DETAILS:
- Business Name: OASIS BI PRO
- Website: https://oasis-bi-pro.vercel.app (akan deployed)
- Business Type: SaaS - Business Intelligence & Analytics Platform
- Target Market: Digital businesses di Indonesia
- Projected Monthly GMV: Rp 50-100 juta

BUSINESS MODEL:
- Subscription-based (3 tiers)
- Starter: Rp 299K/month
- Professional: Rp 999K/month
- Enterprise: Rp 3.999K/month
- Target: 500 paying customers in 12 months

LEGAL COMPLIANCE:
✅ Privacy Policy: https://oasis-bi-pro.vercel.app/legal/privacy
✅ Terms of Service: https://oasis-bi-pro.vercel.app/legal/terms
✅ Refund Policy: https://oasis-bi-pro.vercel.app/legal/refund
✅ FAQ: https://oasis-bi-pro.vercel.app/legal/faq
✅ Contact: https://oasis-bi-pro.vercel.app/legal/contact

DOCUMENTS ATTACHED:
1. KTP/NPWP
2. Bukti Mutasi Rekening 3 bulan
3. Business Proposal
4. Website Screenshots (all legal pages)

PAYMENT METHODS REQUIRED:
- E-wallets: GoPay, DANA, OVO, ShopeePay
- Virtual Accounts: BCA, Mandiri, BNI, BRI, Permata
- QRIS
- Credit/Debit Card

Kami sudah melengkapi semua requirements dan siap untuk go-live.

Terima kasih,
[Your Name]
[Your Company]
[Your Email]
[Your Phone]
\`\`\`

**Expected Response Time:** 3-7 business days

---

## 🌐 PHASE 3: FRONTEND DEPLOYMENT (VERCEL)

### Step 3.1: Push to GitHub

\`\`\`bash
# If not already pushed
cd /home/user/oasis-bi-pro

# Add GitHub remote (replace with your repo)
git remote add origin https://github.com/Estes786/oasis-bi-pro-1.1.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

### Step 3.2: Deploy to Vercel

**Option A: Via Vercel Dashboard (Recommended)**

1. Go to https://vercel.com/new
2. Import GitHub repository `oasis-bi-pro-1.1`
3. Configure:
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Add Environment Variables:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-xxxxx
   MIDTRANS_SERVER_KEY=SB-Mid-server-xxxxx
   NEXT_PUBLIC_APP_URL=https://oasis-bi-pro.vercel.app
   NEXT_PUBLIC_CONTACT_EMAIL=support@oasisbipro.com
   NEXT_PUBLIC_CONTACT_PHONE=+6285712658316
   \`\`\`
5. Click "Deploy"
6. Wait 2-3 minutes
7. Get URL: `https://oasis-bi-pro.vercel.app`

**Option B: Via Vercel CLI**
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Follow prompts and add environment variables when asked
\`\`\`

### Step 3.3: Configure Custom Domain (Optional)

1. Buy domain (Namecheap, GoDaddy, Niagahoster)
2. Go to Vercel Dashboard → Settings → Domains
3. Add domain: `oasisbipro.com`
4. Configure DNS:
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   \`\`\`
5. Wait 24-48 hours for DNS propagation

---

## 🔧 PHASE 4: BACKEND SETUP (SUPABASE EDGE FUNCTIONS)

### Step 4.1: Create Edge Functions (TODO)

**These functions need to be implemented:**

1. **analytics-processor** - Process real-time events
2. **ai-insights-generator** - Generate AI insights
3. **payment-webhook** - Handle Midtrans callbacks
4. **report-generator** - Generate automated reports

\`\`\`bash
# Create function
npx supabase functions new analytics-processor

# Deploy function
npx supabase functions deploy analytics-processor

# Set secrets
npx supabase secrets set MIDTRANS_SERVER_KEY=your-key
\`\`\`

---

## 🧪 PHASE 5: TESTING

### Step 5.1: Frontend Testing

Test these pages:
- [ ] https://your-domain.com/ (Landing)
- [ ] https://your-domain.com/pricing (Pricing)
- [ ] https://your-domain.com/dashboard (Dashboard)
- [ ] https://your-domain.com/legal/privacy (Privacy)
- [ ] https://your-domain.com/legal/terms (Terms)
- [ ] https://your-domain.com/legal/refund (Refund)
- [ ] https://your-domain.com/legal/faq (FAQ)
- [ ] https://your-domain.com/legal/contact (Contact)

Verify:
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast loading (<3 seconds)

### Step 5.2: Midtrans Sandbox Testing

1. Create test subscription in dashboard
2. Use Midtrans test cards:
   \`\`\`
   Success: 4811 1111 1111 1114
   Decline: 4311 1111 1111 1114
   CVV: 123
   Exp: 01/30
   \`\`\`
3. Test payment methods:
   - [ ] Credit Card
   - [ ] GoPay (phone: 081234567890)
   - [ ] DANA
   - [ ] BCA VA
   - [ ] QRIS

---

## 🚦 PHASE 6: GO-LIVE CHECKLIST

### Pre-Launch (1 Week Before)
- [ ] All features tested end-to-end
- [ ] Midtrans Production APPROVED
- [ ] Update environment variables (sandbox → production)
- [ ] Load testing completed
- [ ] Backup plan ready
- [ ] Support email setup
- [ ] Social media accounts ready

### Launch Day
- [ ] Switch Midtrans to Production keys
- [ ] Monitor errors real-time
- [ ] Support team ready
- [ ] Announce on LinkedIn, Twitter
- [ ] Send email to beta users/waitlist
- [ ] Monitor analytics

### Post-Launch (First Week)
- [ ] Daily error check
- [ ] Respond to ALL support inquiries <24h
- [ ] Fix critical bugs immediately
- [ ] Collect user feedback
- [ ] Monitor Midtrans transactions

---

## 🆘 TROUBLESHOOTING

### Build Failed on Vercel
\`\`\`bash
# Test build locally
npm run build

# Check error messages
# Common issues:
# - Missing environment variables
# - TypeScript errors
# - Dependency issues
\`\`\`

### Midtrans Payment Failed
Check:
1. Correct API keys (sandbox vs production)
2. Webhook URL configured
3. Server key not exposed in frontend
4. Signature validation correct

### Supabase Connection Failed
Check:
1. Environment variables correct
2. RLS policies allow access
3. Anon key vs Service Role key
4. Network connectivity

---

## 📞 SUPPORT

**Technical Issues:**
- Email: elfaress2425@gmail.com
- GitHub Issues: https://github.com/Estes786/oasis-bi-pro-1.1/issues

**Midtrans Support:**
- Email: support@midtrans.com
- Phone: +62 21 5091 5200

---

## 🎉 CONGRATULATIONS!

Jika semua steps di atas selesai, **OASIS BI PRO is LIVE!** 🚀

**Next Steps:**
1. Start marketing & customer acquisition
2. Monitor metrics daily
3. Collect user feedback
4. Iterate and improve
5. Scale infrastructure as needed

**Revenue Target:**
- Month 1: Rp 5-10 juta
- Month 3: Rp 20-30 juta
- Month 6: Rp 50-70 juta
- Month 12: Rp 100+ juta

**You got this!** 💪

---

**Document Version:** 1.0  
**Last Updated:** November 15, 2025  
**Status:** Ready for deployment
