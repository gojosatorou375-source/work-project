import { NextResponse } from 'next/server';
import { listRequests } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') ?? undefined;
  return NextResponse.json({ requests: listRequests(status as never) });
}
