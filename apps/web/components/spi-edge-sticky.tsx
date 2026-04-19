'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { title: 'Leadership Development', detail: 'Build adaptive leadership systems for uncertainty and scale.' },
  { title: 'Operational Excellence', detail: 'Improve rhythm, accountability, and execution quality.' },
  { title: 'Strategic Execution', detail: 'Translate ambition into measurable, repeatable outcomes.' }
];

export function SpiEdgeSticky() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll('.pillar-card');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0.2, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="story-section border-t border-white/10 px-6">
      <div className="mx-auto max-w-6xl py-24">
        <h2 className="text-3xl font-semibold md:text-5xl">SPI EDGE Methodology</h2>
        <p className="mt-4 max-w-2xl text-white/75">A structured framework for leadership, operations, and strategic execution.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/75">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
