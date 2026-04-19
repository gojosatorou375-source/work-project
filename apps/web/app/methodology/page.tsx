export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold">SPI EDGE Methodology</h1>
      <p className="mt-4 text-white/75">
        Leadership Development, Operational Excellence, and Strategic Execution translated into practical systems.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ['Leadership', 'Adaptability, decision frameworks, accountability loops.'],
          ['Operations', 'Meeting cadence, scorecards, and bottleneck elimination.'],
          ['Execution', 'Priority architecture, ownership maps, and review rituals.']
        ].map(([title, text]) => (
          <article className="glass rounded-2xl p-6" key={title}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm text-white/75">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
