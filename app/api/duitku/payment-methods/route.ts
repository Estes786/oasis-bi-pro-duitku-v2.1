import { NextRequest, NextResponse } from 'next/server';
import { getPaymentMethods } from '@/lib/duitku';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const amount = searchParams.get('amount');

    if (!amount) {
      return NextResponse.json(
        { success: false, error: 'Amount is required' },
        { status: 400 }
      );
    }

    const paymentMethods = await getPaymentMethods(parseInt(amount));

    return NextResponse.json({
      success: true,
      paymentMethods,
    });
  } catch (error: any) {
    console.error('Error fetching payment methods:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch payment methods' },
      { status: 500 }
    );
  }
}
