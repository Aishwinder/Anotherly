"use client";

import { motion } from "framer-motion";
import { Layers, Orbit, Radio, Sparkles } from "lucide-react";
import { services, type Service } from "@/lib/site";

const iconMap = {
  orbit: Orbit,
  spark: Sparkles,
  layers: Layers,
  signal: Radio,
} satisfies Record<Service["icon"], typeof Orbit>;

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading-glow relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/80">Capabilities</p>
          <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">Services</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300/85 sm:text-base">
            A disciplined studio practice—strategy, craft, and distribution woven into one luminous thread.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel glass-card-hover relative overflow-hidden rounded-3xl p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="liquid-metal inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/20">
                    <Icon className="relative h-5 w-5 text-slate-950" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300/85">{s.description}</p>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_62%)] blur-2xl"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
