import { NextResponse } from 'next/server';
import { createRequest } from '@/lib/store';

export async function POST(request: Request) {
  const body = (await request.json()) as { clientName?: string; message?: string };
  if (!body.message || body.message.trim().split(/\s+/).length < 20) {
    return NextResponse.json({ error: 'Please submit at least 20 words.' }, { status: 400 });
  }

  const created = createRequest(body.clientName ?? 'Client', body.message.trim());
  return NextResponse.json({ request: created }, { status: 201 });
}
