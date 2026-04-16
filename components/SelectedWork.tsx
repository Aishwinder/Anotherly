"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function SelectedWork() {
  return (
    <section id="projects" className="relative scroll-mt-28 px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="section-heading-glow relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200/85">Studio</p>
            <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">Projects</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/85 sm:text-base">
              A constellation of launches—identity systems, digital worlds, and campaigns engineered for gravity.
            </p>
          </div>
          <p className="text-sm text-slate-400/90">Branding · Websites · Campaigns</p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.li key={p.name} variants={item} className="group relative">
              <article className="glass-panel glass-card-hover relative overflow-hidden rounded-3xl">
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${p.gradient} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`}
                >
                  <div className="noise-overlay opacity-[0.12]" aria-hidden />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.35) 45%, transparent 65%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.85)]" />
                    {p.category}
                  </div>
                </div>

                <div className="relative border-t border-white/10 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg text-white">{p.name}</h3>
                      <p className="mt-1 text-sm text-slate-300/80">{p.category}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                      {p.year}
                    </span>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(167,139,250,0.14), transparent 55%)",
                  }}
                />
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
