"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-28 px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div
            className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.14),transparent_62%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.1),transparent_58%)] blur-2xl"
            aria-hidden
          />
          <div className="liquid-metal-frame relative">
            <div className="relative overflow-hidden rounded-[1.65rem] bg-cosmos-950/35 p-6 ring-1 ring-white/10 sm:p-8">
              <div className="noise-overlay rounded-[1.2rem]" aria-hidden />
              <div className="relative rounded-[1.2rem] bg-gradient-to-b from-white/[0.06] to-transparent p-6">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/logo-chrome-light.png"
                    alt="Anotherly mark"
                    width={420}
                    height={160}
                    className="h-auto w-full max-w-xs object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                  />
                </div>
                <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/70">
                  Liquid identity
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative lg:col-span-7">
          <div className="section-heading-glow">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/80">About</p>
            <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">Anotherly is a signal in the noise</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 space-y-5 text-sm leading-relaxed text-slate-300/90 sm:text-base"
          >
            <p>
              We believe the future belongs to brands with taste—precise typography, cinematic pacing, and interfaces
              that feel carved from light and metal. Anotherly exists to translate ambition into artifacts people want to
              live inside.
            </p>
            <p>
              Our process is quiet but relentless: research with rigor, design with restraint, and ship with pride. The
              result is work that feels inevitable—cosmic in scale, intimate in detail.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {[
              { k: "Orbit", v: "Global launches" },
              { k: "Velocity", v: "Studio sprint model" },
              { k: "Silence", v: "No noise policy" },
            ].map((x) => (
              <li key={x.k} className="glass-panel rounded-2xl px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{x.k}</p>
                <p className="mt-2 text-sm text-white">{x.v}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
