'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroScene() {
  const { scrollYProgress } = useScroll();
  const yLayerA = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yLayerB = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6">
      <motion.div style={{ y: yLayerA }} className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
      <motion.div style={{ y: yLayerB }} className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-xs uppercase tracking-[0.3em] text-white/70">
          Premium Mentorship Platform
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl"
        >
          Reimagine Performance. Build Your Edge.
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          SISU helps founders and operators build AI-era competitive systems through one-on-one mentorship with RATS.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="/book" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
            Book Your Session
          </a>
          <a href="/methodology" className="rounded-full border border-white/30 px-6 py-3 text-sm text-white/90 transition hover:border-white">
            Explore SPI EDGE
          </a>
        </div>
      </div>
    </section>
  );
}
