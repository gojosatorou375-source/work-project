import { RequestBoard } from '@/components/request-board';

export default function RatsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold">RATS Dashboard</h1>
      <p className="mt-3 text-white/75">Review requests and manage approvals with session orchestration controls.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="glass rounded-xl p-5">
          <p className="text-sm text-white/60">Pending Queue</p>
          <p className="mt-2 text-2xl font-semibold">Live</p>
        </div>
        <div className="glass rounded-xl p-5">
          <p className="text-sm text-white/60">Calendar Sync</p>
          <p className="mt-2 text-2xl font-semibold">Connected</p>
        </div>
        <div className="glass rounded-xl p-5">
          <p className="text-sm text-white/60">AI Summaries</p>
          <p className="mt-2 text-2xl font-semibold">Enabled</p>
        </div>
      </div>
      <div className="mt-8">
        <RequestBoard />
      </div>
    </div>
  );
}
