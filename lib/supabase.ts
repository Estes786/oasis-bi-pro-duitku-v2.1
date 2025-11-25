import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export type Order = {
  id: string;
  user_id: string;
  plan_type: 'starter' | 'professional' | 'business';
  amount: number;
  status: 'pending' | 'paid' | 'failed' | 'expired';
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  created_at: string;
  updated_at: string;
};

export type Transaction = {
  id: string;
  order_id: string;
  merchant_order_id: string;
  reference: string;
  amount: number;
  payment_method: string;
  payment_method_name: string;
  status: 'pending' | 'success' | 'failed';
  payment_url?: string;
  expired_at?: string;
  paid_at?: string;
  created_at: string;
  updated_at: string;
};

export type Subscription = {
  id: string;
  user_id: string;
  order_id: string;
  plan_type: 'starter' | 'professional' | 'business';
  status: 'active' | 'expired' | 'cancelled';
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
};

export type Invoice = {
  id: string;
  order_id: string;
  transaction_id: string;
  invoice_number: string;
  amount: number;
  tax: number;
  total: number;
  status: 'draft' | 'issued' | 'paid' | 'cancelled';
  issued_at?: string;
  paid_at?: string;
  created_at: string;
};
