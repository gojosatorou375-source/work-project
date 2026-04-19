'use client';

import { useState } from 'react';

export function IntakeChat() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    setResult('');
    const response = await fetch('/api/intake', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientName: name || 'Client', message })
    });
    const json = await response.json();
    if (!response.ok) {
      setResult(json.error ?? 'Unable to submit request');
      setLoading(false);
      return;
    }
    setResult(`Submitted as pending. Topic: ${json.request.extraction.topic} · Urgency: ${json.request.extraction.urgency}`);
    setLoading(false);
    setMessage('');
  }

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-2xl font-semibold">AI Intake Chat</h2>
      <p className="mt-2 text-sm text-white/70">Write 150–200 words about your challenge. AI will structure it for RATS review.</p>
      <div className="mt-5 space-y-3">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2"
        />
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={8}
          placeholder="Describe your challenge, urgency, and desired outcomes..."
          className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2"
        />
        <button
          disabled={loading}
          onClick={submit}
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Submit for Approval'}
        </button>
      </div>
      {result ? <p className="mt-4 text-sm text-accent">{result}</p> : null}
    </div>
  );
}
