/**
 * DUITKU Payment Gateway Integration
 * API Documentation: https://docs.duitku.com/
 */

import crypto from 'crypto';
import axios from 'axios';

// Duitku Configuration
const DUITKU_CONFIG = {
  merchantCode: process.env.NEXT_PUBLIC_DUITKU_MERCHANT_CODE || 'D22457',
  apiKey: process.env.DUITKU_API_KEY || '78cb96d8cb9ea9dc40d1c77068a659f6',
  sandboxMode: process.env.DUITKU_SANDBOX_MODE === 'true' || true,
  sandboxUrl: 'https://sandbox.duitku.com/webapi/api',
  productionUrl: 'https://passport.duitku.com/webapi/api',
};

// Get base URL based on mode
export const getDuitkuBaseUrl = () => {
  return DUITKU_CONFIG.sandboxMode
    ? DUITKU_CONFIG.sandboxUrl
    : DUITKU_CONFIG.productionUrl;
};

// Generate signature for API requests
export const generateSignature = (params: {
  merchantCode: string;
  amount: string;
  merchantOrderId: string;
}) => {
  const { merchantCode, amount, merchantOrderId } = params;
  const signature = crypto
    .createHash('md5')
    .update(`${merchantCode}${amount}${merchantOrderId}${DUITKU_CONFIG.apiKey}`)
    .digest('hex');
  return signature;
};

// Duitku Payment Methods
export interface DuitkuPaymentMethod {
  paymentMethod: string;
  paymentName: string;
  paymentImage: string;
  totalFee: string;
}

// Payment Request Interface
export interface DuitkuPaymentRequest {
  merchantOrderId: string;
  productDetails: string;
  paymentAmount: number;
  paymentMethod: string;
  customerVaName: string;
  email: string;
  phoneNumber?: string;
  itemDetails?: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  customerDetail?: {
    firstName: string;
    lastName?: string;
    email: string;
    phoneNumber?: string;
  };
  callbackUrl: string;
  returnUrl: string;
  expiryPeriod?: number; // in minutes
}

// Payment Response Interface
export interface DuitkuPaymentResponse {
  merchantCode: string;
  reference: string;
  paymentUrl: string;
  vaNumber?: string;
  qrString?: string;
  statusCode: string;
  statusMessage: string;
}

/**
 * Get Available Payment Methods
 * Returns list of payment methods with fees
 */
export const getPaymentMethods = async (amount: number): Promise<DuitkuPaymentMethod[]> => {
  try {
    const merchantCode = DUITKU_CONFIG.merchantCode;
    const datetime = new Date().getTime();
    
    // Generate signature for inquiry
    const signature = crypto
      .createHash('md5')
      .update(`${merchantCode}${amount}${datetime}${DUITKU_CONFIG.apiKey}`)
      .digest('hex');

    const response = await axios.post(
      `${getDuitkuBaseUrl()}/merchant/paymentmethod/getpaymentmethod`,
      {
        merchantcode: merchantCode,
        amount: amount,
        datetime: datetime,
        signature: signature,
      }
    );

    if (response.data.responseCode === '00') {
      return response.data.paymentFee;
    }

    throw new Error(response.data.responseMessage || 'Failed to fetch payment methods');
  } catch (error: any) {
    console.error('Duitku Get Payment Methods Error:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Create Payment Transaction
 * Initiates payment and returns payment URL
 */
export const createPayment = async (
  paymentData: DuitkuPaymentRequest
): Promise<DuitkuPaymentResponse> => {
  try {
    const merchantCode = DUITKU_CONFIG.merchantCode;
    const {
      merchantOrderId,
      productDetails,
      paymentAmount,
      paymentMethod,
      customerVaName,
      email,
      phoneNumber,
      itemDetails,
      customerDetail,
      callbackUrl,
      returnUrl,
      expiryPeriod = 1440, // 24 hours default
    } = paymentData;

    // Generate signature
    const signature = generateSignature({
      merchantCode,
      amount: paymentAmount.toString(),
      merchantOrderId,
    });

    // Prepare request payload
    const payload = {
      merchantCode: merchantCode,
      paymentAmount: paymentAmount,
      paymentMethod: paymentMethod,
      merchantOrderId: merchantOrderId,
      productDetails: productDetails,
      customerVaName: customerVaName,
      email: email,
      phoneNumber: phoneNumber || '',
      itemDetails: itemDetails || [],
      customerDetail: customerDetail || {
        firstName: customerVaName,
        email: email,
      },
      callbackUrl: callbackUrl,
      returnUrl: returnUrl,
      signature: signature,
      expiryPeriod: expiryPeriod,
    };

    console.log('Creating Duitku Payment:', {
      merchantOrderId,
      amount: paymentAmount,
      method: paymentMethod,
    });

    const response = await axios.post(
      `${getDuitkuBaseUrl()}/merchant/v2/inquiry`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.statusCode === '00') {
      return response.data;
    }

    throw new Error(response.data.statusMessage || 'Payment creation failed');
  } catch (error: any) {
    console.error('Duitku Create Payment Error:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Check Transaction Status
 * Verify payment status from Duitku
 */
export const checkTransactionStatus = async (merchantOrderId: string) => {
  try {
    const merchantCode = DUITKU_CONFIG.merchantCode;
    
    // Generate signature
    const signature = crypto
      .createHash('md5')
      .update(`${merchantCode}${merchantOrderId}${DUITKU_CONFIG.apiKey}`)
      .digest('hex');

    const response = await axios.post(
      `${getDuitkuBaseUrl()}/merchant/transactionStatus`,
      {
        merchantCode: merchantCode,
        merchantOrderId: merchantOrderId,
        signature: signature,
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('Duitku Check Status Error:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Verify Callback Signature
 * Validate callback from Duitku to ensure authenticity
 */
export const verifyCallbackSignature = (
  merchantCode: string,
  amount: string,
  merchantOrderId: string,
  signature: string
): boolean => {
  const expectedSignature = crypto
    .createHash('md5')
    .update(`${merchantCode}${amount}${merchantOrderId}${DUITKU_CONFIG.apiKey}`)
    .digest('hex');

  return signature === expectedSignature;
};

/**
 * Payment Method Helpers
 */
export const PAYMENT_METHOD_CODES = {
  // Virtual Account
  BCA: 'BV',
  MANDIRI: 'VA',
  BNI: 'I1',
  BRI: 'BR',
  PERMATA: 'B1',
  CIMB: 'B2',
  DANAMON: 'DNA',
  
  // E-Wallet
  OVO: 'OV',
  DANA: 'DA',
  SHOPEE_PAY: 'SA',
  LINK_AJA: 'LA',
  
  // Credit Card
  CREDIT_CARD: 'CC',
  
  // Convenience Store
  ALFAMART: 'A1',
  INDOMARET: 'I1',
  
  // Others
  QRIS: 'NQ',
  PAYPAL: 'PP',
};

export const PAYMENT_METHOD_NAMES: Record<string, string> = {
  BV: 'BCA Virtual Account',
  VA: 'Mandiri Virtual Account',
  I1: 'BNI Virtual Account',
  BR: 'BRI Virtual Account',
  B1: 'Permata Virtual Account',
  B2: 'CIMB Niaga Virtual Account',
  DNA: 'Danamon Virtual Account',
  OV: 'OVO',
  DA: 'DANA',
  SA: 'ShopeePay',
  LA: 'LinkAja',
  CC: 'Credit/Debit Card',
  A1: 'Alfamart',
  I1: 'Indomaret',
  NQ: 'QRIS',
  PP: 'PayPal',
};

/**
 * Format Currency IDR
 */
export const formatIDR = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Generate Unique Order ID
 */
export const generateOrderId = (prefix: string = 'OASIS'): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `${prefix}-${timestamp}-${random}`;
};

export default {
  getPaymentMethods,
  createPayment,
  checkTransactionStatus,
  verifyCallbackSignature,
  generateSignature,
  generateOrderId,
  formatIDR,
  PAYMENT_METHOD_CODES,
  PAYMENT_METHOD_NAMES,
};
