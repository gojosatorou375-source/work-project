export function SectionBlock({ title, description, children }: { title: string; description: string; children?: React.ReactNode }) {
  return (
    <section className="story-section border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold md:text-5xl">{title}</h2>
          <p className="mt-4 text-white/75">{description}</p>
        </div>
        <div className="glass rounded-2xl p-6">{children}</div>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/90">{children}</div>;
}
