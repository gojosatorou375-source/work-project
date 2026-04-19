export default function WorkshopsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Workshops & Structured Learning</h1>
      <p className="mt-4 text-white/75">Formats designed for private operators, scaling teams, and accelerator cohorts.</p>
      <div className="mt-10 space-y-4">
        {[
          'Founder Decision Architecture Workshop',
          'Team Operating Rhythm Intensive',
          'AI-Ready Competitive Edge Sprint'
        ].map((item) => (
          <div className="glass rounded-xl p-5" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
