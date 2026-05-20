"use client";

import type { MotionValue } from "framer-motion";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { howWeWorkSteps } from "@/lib/home-content";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { JellyDoodle } from "@/components/jelly/JellyDoodle";
import { JellyThemeDeco } from "@/components/jelly/JellyThemeDeco";

function HowWeWorkStep({
  step,
  index,
  total,
  scrollYProgress,
  reduce,
}: {
  step: (typeof howWeWorkSteps)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  reduce: boolean;
}) {
  const start = (index / total) * 0.9;
  const x = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.02), Math.min(1, start + 0.16)],
    reduce ? [0, 0] : [22, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), Math.min(1, start + 0.12)],
    reduce ? [1, 1] : [0.15, 1],
  );
  const rotate = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.04), Math.min(1, start + 0.18)],
    reduce ? [0, 0] : [-2.2, 0],
  );

  return (
    <motion.li className="jelly-how-work-step" style={{ x, opacity, rotate }}>
      <span className="jelly-how-work-step__index" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="jelly-how-work-step__body">
        <h3 className="jelly-how-work-step__title">{step.title}</h3>
        <p className="jelly-how-work-step__text">{step.body}</p>
      </div>
    </motion.li>
  );
}

const principles = [
  "Calm rooms, sharper thinking — fewer meetings, longer studio time.",
  "Strategy lives next to craft. No throw-overs between teams.",
  "We ship every two weeks, never wait for a “big reveal.”",
  "We measure with you: clarity, conversion, and brand fit.",
];

export function HomeHowWeWork() {
  const reduce = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.78", "end 0.22"],
  });

  const total = howWeWorkSteps.length;

  const asideY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, -24]);
  const asideYSpring = useSpring(asideY, { stiffness: 90, damping: 22, mass: 0.42 });
  const asideOpacity = useTransform(scrollYProgress, [0, 0.18, 0.92, 1], reduce ? [1, 1, 1, 1] : [0.35, 1, 1, 0.92]);

  const accentDash = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 1]);
  const accentDashSpring = useSpring(accentDash, { stiffness: 80, damping: 24, mass: 0.5 });

  return (
    <section ref={sectionRef} className="scroll-mt-28" id="how-we-work" aria-labelledby="how-we-work-heading">
      <JellyGlassSlab className="relative overflow-hidden">
        <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
        <JellySectionGeo variant="orbit" className="opacity-[0.04] dark:opacity-[0.09]" />

        <JellyThemeDeco preset="howWeWork" placement="bottom-left" />
        <JellyThemeDeco preset="howWeWorkStar" placement="top-right" className="hidden sm:block" />

        <div className="jelly-how-work-grid relative z-[1]">
          <div className="jelly-how-work-main min-w-0">
            <p className="jelly-section-eyebrow">How we work</p>
            <div className="jelly-section-title-row">
              <h2 id="how-we-work-heading" className="jelly-section-title max-w-2xl">
                We don&apos;t guess. We listen first.
              </h2>
              <JellyDoodle
                variant="sparkle"
                className="jelly-doodle jelly-doodle--purple jelly-doodle-twinkle jelly-section-title-doodle opacity-80"
              />
            </div>
            <p className="jelly-section-lead jelly-section-lead--relaxed mt-4 max-w-2xl text-[var(--text-muted)]">
              A single thread from discovery to launch — each phase glides in as you scroll.
            </p>

            <ol className="jelly-how-work-list jelly-how-work-list--grid mt-9 list-none space-y-0 pl-0 sm:mt-11">
              {howWeWorkSteps.map((step, i) => (
                <HowWeWorkStep
                  key={step.title}
                  step={step}
                  index={i}
                  total={total}
                  scrollYProgress={scrollYProgress}
                  reduce={reduce}
                />
              ))}
            </ol>
          </div>

          <motion.aside
            className="jelly-how-work-aside"
            style={reduce ? undefined : { y: asideYSpring, opacity: asideOpacity }}
          >
            <div className="jelly-how-work-aside__card relative overflow-hidden">
              <div className="jelly-how-work-aside__mesh" aria-hidden />
              <p className="jelly-how-work-aside__kicker relative">Studio principles</p>
              <div className="jelly-how-work-aside__rule" aria-hidden />
              <p className="jelly-how-work-aside__micro relative">
                A small, opinionated team — fewer handoffs, more continuity from{" "}
                <span className="jelly-script-accent">strategy</span> to launch. We hold the work close until it&apos;s
                ready to be loud.
              </p>
              <ul className="jelly-how-work-aside__ticks relative">
                {principles.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <svg
                className="pointer-events-none absolute -bottom-2 left-3 right-3 h-3 opacity-70"
                viewBox="0 0 320 14"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M4 9 C 60 1, 120 14, 180 6 S 290 12, 316 5"
                  fill="none"
                  stroke="url(#how-work-stroke)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="1 1"
                  style={reduce ? undefined : { pathLength: accentDashSpring }}
                />
                <defs>
                  <linearGradient id="how-work-stroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#ff7e3d" />
                    <stop offset="0.5" stopColor="#ff5fa8" />
                    <stop offset="1" stopColor="#8a4fff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="jelly-how-work-aside__card relative mt-5 overflow-hidden">
              <JellyThemeDeco preset="howWeWorkAside" placement="top-right" />
              <p className="jelly-how-work-aside__kicker relative">Typical engagement</p>
              <div className="jelly-how-work-aside__rule" aria-hidden />
              <dl className="relative mt-4 grid grid-cols-2 gap-4 text-[0.82rem]">
                <div>
                  <dt className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Kickoff
                  </dt>
                  <dd className="mt-1 font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-[var(--ink)]">
                    Week 1
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    First demo
                  </dt>
                  <dd className="mt-1 font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-[var(--ink)]">
                    Week 2
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Brand sprint
                  </dt>
                  <dd className="mt-1 font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-[var(--ink)]">
                    3–5 weeks
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Site launch
                  </dt>
                  <dd className="mt-1 font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-[var(--ink)]">
                    6–10 weeks
                  </dd>
                </div>
              </dl>
              <p className="jelly-how-work-aside__micro relative mt-5">
                Real-world ranges, not waterfall fantasy — we calibrate against your brief on the first call.
              </p>
            </div>
          </motion.aside>
        </div>
      </JellyGlassSlab>
    </section>
  );
}
