import { NextResponse } from 'next/server';
import { updateRequestStatus } from '@/lib/store';

export async function PATCH(_: Request, { params }: { params: { id: string } }) {
  const updated = updateRequestStatus(params.id, 'reschedule_proposed');
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({
    request: updated,
    slots: ['2026-04-22T10:00:00Z', '2026-04-23T14:00:00Z', '2026-04-24T08:30:00Z']
  });
}
