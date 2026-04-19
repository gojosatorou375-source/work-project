'use client';

import { useEffect, useState } from 'react';

type RequestItem = {
  id: string;
  clientName: string;
  status: string;
  extraction: { summary: string; urgency: string; topic: string };
};

export function RequestBoard() {
  const [items, setItems] = useState<RequestItem[]>([]);

  async function refresh() {
    const response = await fetch('/api/requests');
    const json = await response.json();
    setItems(json.requests ?? []);
  }

  async function update(id: string, action: 'approve' | 'reject' | 'reschedule') {
    await fetch(`/api/requests/${id}/${action}`, { method: 'PATCH' });
    refresh();
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Pending Requests</h2>
        <button className="text-sm text-white/70" onClick={refresh}>
          Refresh
        </button>
      </div>
      <div className="space-y-3">
        {items.length === 0 ? <p className="text-sm text-white/60">No requests yet.</p> : null}
        {items.map((item) => (
          <article key={item.id} className="rounded-xl border border-white/10 p-4">
            <p className="text-sm text-white/60">{item.clientName}</p>
            <h3 className="mt-1 font-medium">{item.extraction.topic}</h3>
            <p className="mt-1 text-sm text-white/75">{item.extraction.summary}</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-accent">{item.extraction.urgency}</p>
            <div className="mt-3 flex gap-2 text-xs">
              <button onClick={() => update(item.id, 'approve')} className="rounded-full bg-white px-3 py-1 text-black">
                Approve
              </button>
              <button onClick={() => update(item.id, 'reschedule')} className="rounded-full border border-white/30 px-3 py-1">
                Reschedule
              </button>
              <button onClick={() => update(item.id, 'reject')} className="rounded-full border border-red-400/60 px-3 py-1 text-red-300">
                Reject
              </button>
            </div>
            <p className="mt-2 text-xs text-white/50">Status: {item.status}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
