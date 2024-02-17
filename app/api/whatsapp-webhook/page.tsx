// app/api/whatsapp-webhook/page.tsx

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    // Handle POST request
    const body = await req.text();
    console.log('Webhook received:', body);

    // Process the webhook data here

    return new NextResponse('EVENT_RECEIVED', { status: 200 });
  } else if (req.method === 'GET') {
    // Handle verification GET request from WhatsApp
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    const VERIFY_TOKEN = 'your-verify-token';

    if (mode && token) {
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        return new NextResponse(challenge, { status: 200 });
      } else {
        return new NextResponse('Forbidden', { status: 403 });
      }
    }
  }

  // For other HTTP methods, return 405 Method Not Allowed
  return new NextResponse('Method Not Allowed', { status: 405 });
}
