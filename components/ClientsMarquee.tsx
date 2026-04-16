"use client";

import { motion } from "framer-motion";
import { clientNames } from "@/lib/site";

export function ClientsMarquee() {
  const doubled = [...clientNames, ...clientNames];

  return (
    <section className="relative py-16 sm:py-20" aria-label="Clients">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="section-heading-glow relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/75">Trusted by teams</p>
            <h2 className="font-display mt-3 text-2xl text-white sm:text-3xl">Clients & collaborators</h2>
          </div>
          <p className="max-w-md text-sm text-slate-400/90">
            Logotypes shown as wordmarks—reflective, restrained, and built for motion.
          </p>
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="marquee-track">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="group relative flex h-16 min-w-[190px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(56,189,248,0.06)] backdrop-blur transition-shadow duration-500 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_40px_rgba(56,189,248,0.14),0_0_70px_rgba(129,140,248,0.08)]"
              >
                <span
                  className="font-display text-lg tracking-wide text-transparent transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.92) 35%, rgba(200,220,255,0.55) 55%, rgba(255,255,255,0.22) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  {name}
                </span>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.22) 48%, transparent 66%)",
                    mixBlendMode: "overlay",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
