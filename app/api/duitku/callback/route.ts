import { NextRequest, NextResponse } from 'next/server';
import { verifyCallbackSignature } from '@/lib/duitku';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      merchantCode,
      amount,
      merchantOrderId,
      signature,
      statusCode,
      resultCode,
    } = body;

    console.log('Duitku callback received:', {
      merchantOrderId,
      statusCode,
      resultCode,
      amount,
    });

    // Verify signature for security
    const isValid = verifyCallbackSignature(
      merchantCode,
      amount,
      merchantOrderId,
      signature
    );

    if (!isValid) {
      console.error('Invalid signature');
      return NextResponse.json(
        { success: false, error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Find transaction by merchant order ID
    const { data: transaction, error: transactionError } = await supabase
      .from('transactions')
      .select('*, orders(*)')
      .eq('merchant_order_id', merchantOrderId)
      .single();

    if (transactionError || !transaction) {
      console.error('Transaction not found:', merchantOrderId);
      return NextResponse.json(
        { success: false, error: 'Transaction not found' },
        { status: 404 }
      );
    }

    // Determine transaction status based on statusCode
    let newStatus = 'pending';
    let orderStatus = 'pending';

    if (statusCode === '00' || statusCode === '01') {
      // Success
      newStatus = 'success';
      orderStatus = 'paid';
    } else if (statusCode === '02') {
      // Failed
      newStatus = 'failed';
      orderStatus = 'failed';
    }

    // Update transaction status
    const { error: updateTransactionError } = await supabase
      .from('transactions')
      .update({
        status: newStatus,
        reference: body.reference || transaction.reference,
        paid_at: newStatus === 'success' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', transaction.id);

    if (updateTransactionError) {
      console.error('Failed to update transaction:', updateTransactionError);
    }

    // Update order status
    const { error: updateOrderError } = await supabase
      .from('orders')
      .update({
        status: orderStatus,
        updated_at: new Date().toISOString(),
      })
      .eq('id', transaction.order_id);

    if (updateOrderError) {
      console.error('Failed to update order:', updateOrderError);
    }

    // If payment is successful, create subscription
    if (newStatus === 'success' && transaction.orders) {
      const order = transaction.orders;
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1); // 1 month subscription

      const { error: subscriptionError } = await supabase
        .from('subscriptions')
        .insert({
          user_id: order.user_id,
          order_id: order.id,
          plan_type: order.plan_type,
          status: 'active',
          start_date: startDate.toISOString().split('T')[0],
          end_date: endDate.toISOString().split('T')[0],
        });

      if (subscriptionError) {
        console.error('Failed to create subscription:', subscriptionError);
      }

      // Create invoice
      const invoiceNumber = `INV-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;
      const { error: invoiceError } = await supabase
        .from('invoices')
        .insert({
          order_id: order.id,
          transaction_id: transaction.id,
          invoice_number: invoiceNumber,
          amount: order.amount,
          tax: 0,
          total: order.amount,
          status: 'paid',
          issued_at: new Date().toISOString(),
          paid_at: new Date().toISOString(),
        });

      if (invoiceError) {
        console.error('Failed to create invoice:', invoiceError);
      }
    }

    // Return success response to Duitku
    return NextResponse.json({
      success: true,
      message: 'Callback processed successfully',
    });
  } catch (error: any) {
    console.error('Callback processing error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
