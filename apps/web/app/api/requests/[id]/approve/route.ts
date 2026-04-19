import { NextResponse } from 'next/server';
import { updateRequestStatus } from '@/lib/store';

export async function PATCH(_: Request, { params }: { params: { id: string } }) {
  const updated = updateRequestStatus(params.id, 'approved');
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ request: updated, notification: 'Confirmation email + calendar event sent.' });
}
