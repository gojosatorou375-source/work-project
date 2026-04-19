import { HeroScene } from '@/components/hero-scene';
import { Pill, SectionBlock } from '@/components/sections';
import { SpiEdgeSticky } from '@/components/spi-edge-sticky';

export default function HomePage() {
  return (
    <>
      <HeroScene />
      <SectionBlock
        title="What is SISU"
        description="A premium mentorship program for founders and operators focused on long-term transformation via systems and execution discipline."
      >
        <div className="grid gap-3">
          <Pill>1:1 mentorship sessions led by RATS</Pill>
          <Pill>Strategic eagle-eye intervention when critical</Pill>
          <Pill>Team-level operating system upgrades</Pill>
        </div>
      </SectionBlock>
      <SpiEdgeSticky />
      <SectionBlock title="How It Works" description="From AI intake to structured execution in five steps.">
        <ol className="space-y-3 text-sm text-white/85">
          <li>1. Client submits a 150–200 word challenge.</li>
          <li>2. AI structures problem, urgency, and preferred time.</li>
          <li>3. RATS reviews in dashboard.</li>
          <li>4. Approve, reject, or reschedule.</li>
          <li>5. Session delivered with progress tracking.</li>
        </ol>
      </SectionBlock>
      <SectionBlock title="About Ratheesh Krishnan (RATS)" description="Mentor focused on strategic performance transformation in the AI era.">
        <div className="space-y-3 text-sm text-white/80">
          <p>Guides leaders to build resilient operating systems.</p>
          <p>Balances strategic perspective with practical interventions.</p>
          <p>Builds edge through structure, not theory.</p>
        </div>
      </SectionBlock>
      <SectionBlock title="Program Structure" description="Premium long-term engagement for measurable outcomes.">
        <div className="space-y-2 text-sm text-white/90">
          <p className="text-3xl font-semibold">₹15,000 / month</p>
          <p>2 one-on-one sessions each month.</p>
          <p>1-year commitment for system-level transformation.</p>
        </div>
      </SectionBlock>
      <SectionBlock title="Outcomes" description="Designed to compound across leadership, operations, and strategy.">
        <ul className="grid gap-2 text-sm text-white/80">
          <li>Decision velocity and quality</li>
          <li>Execution rhythm and accountability</li>
          <li>Leadership adaptability</li>
          <li>AI-era competitiveness</li>
        </ul>
      </SectionBlock>
      <SectionBlock title="Workshops & Learning" description="Structured sessions built for founders, operators, and team leadership. ">
        <div className="flex flex-wrap gap-2 text-sm">
          {['Private Mentoring', 'Team Workshops', 'Accelerator Programs', 'Remote / Hybrid / Onsite'].map((item) => (
            <span className="rounded-full border border-white/20 px-3 py-1" key={item}>
              {item}
            </span>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock title="AI-Powered Mentorship Experience" description="Chat-first intake routes requests into a structured decision workflow.">
        <div className="space-y-2 text-sm text-white/80">
          <p>Extracts: problem, topic, urgency, preferred time.</p>
          <p>Creates a pending request for dashboard review.</p>
          <p>Notifies client in real time on status changes.</p>
        </div>
      </SectionBlock>
      <section className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 rounded-3xl bg-white px-8 py-10 text-black">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">SISU Mentorship</p>
            <h3 className="mt-2 text-3xl font-semibold">Book Your Session</h3>
          </div>
          <a className="rounded-full bg-black px-6 py-3 text-white" href="/book">
            Start Intake
          </a>
        </div>
      </section>
      <footer className="px-6 py-10 text-center text-sm text-white/50">© {new Date().getFullYear()} SISU. Built for long-term edge.</footer>
    </>
  );
}
