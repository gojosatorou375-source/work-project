import { NextResponse } from 'next/server';
import { updateRequestStatus } from '@/lib/store';

export async function PATCH(_: Request, { params }: { params: { id: string } }) {
  const updated = updateRequestStatus(params.id, 'rejected');
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ request: updated, notification: 'RATS is currently unavailable. Please reschedule.' });
}
