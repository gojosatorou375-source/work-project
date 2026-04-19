export default function ClientPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Client Dashboard</h1>
      <p className="mt-3 text-white/75">Track requests, upcoming sessions, and progress milestones.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="glass rounded-xl p-5">
          <p className="text-sm text-white/60">Appointment Status</p>
          <p className="mt-2 text-2xl font-semibold">Pending / Approved</p>
        </div>
        <div className="glass rounded-xl p-5">
          <p className="text-sm text-white/60">Upcoming Session</p>
          <p className="mt-2 text-2xl font-semibold">April 24, 2026</p>
        </div>
        <div className="glass rounded-xl p-5">
          <p className="text-sm text-white/60">Progress Cadence</p>
          <p className="mt-2 text-2xl font-semibold">Week 6 / 52</p>
        </div>
      </div>
    </div>
  );
}
