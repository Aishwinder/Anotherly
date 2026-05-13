"use client";

import type { MotionValue } from "framer-motion";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { howWeWorkSteps } from "@/lib/home-content";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";

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
    reduce ? [0, 0] : [20, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), Math.min(1, start + 0.12)],
    reduce ? [1, 1] : [0.2, 1],
  );

  return (
    <motion.li className="jelly-how-work-step" style={{ x, opacity }}>
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

export function HomeHowWeWork() {
  const reduce = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.72", "end 0.28"],
  });

  const total = howWeWorkSteps.length;

  return (
    <section ref={sectionRef} className="scroll-mt-28" id="how-we-work" aria-labelledby="how-we-work-heading">
      <JellyGlassSlab className="relative overflow-hidden">
        <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
        <JellySectionGeo variant="orbit" />
        <div className="jelly-how-work-balanced relative z-[1]">
          <div className="jelly-how-work-main">
            <p className="jelly-section-eyebrow">How we work</p>
            <h2 id="how-we-work-heading" className="jelly-section-title max-w-2xl">
              We don&apos;t guess. We listen first.
            </h2>
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
        </div>
      </JellyGlassSlab>
    </section>
  );
}
