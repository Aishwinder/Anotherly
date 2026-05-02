"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function JellyHeroHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blockY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -24]);
  const blockOpacity = useTransform(scrollYProgress, [0, 0.9], reduce ? [1, 1] : [1, 0.92]);

  return (
    <section
      ref={sectionRef}
      className="jelly-hero jelly-hero--home jelly-hero--16x9"
      aria-labelledby="jelly-hero-heading"
      data-jelly-hero
    >
      <div className="jelly-hero-craft-deco" aria-hidden>
        <svg className="jelly-hero-craft-deco__svg" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 96c32-48 88-72 140-72s108 24 140 72"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M48 24v28M62 38H34M320 88l18-18m0 0l18 18m-18-18v36"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.28"
          />
          <circle cx="200" cy="56" r="3" fill="currentColor" opacity="0.2" />
        </svg>
      </div>
      <div className="jelly-hero-craft-grid" aria-hidden />
      <motion.div
        className="jelly-hero-16x9-inner relative z-[1] mx-auto flex w-full max-w-[min(52rem,calc(100%-2rem))] flex-col items-center justify-center px-4 text-center"
        style={{ y: blockY, opacity: blockOpacity }}
      >
        <motion.h1
          id="jelly-hero-heading"
          className="jelly-hero-h1 font-display text-[clamp(2rem,6.5vw,3.75rem)] font-bold tracking-[-0.03em] text-[var(--ink)]"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          We do it{" "}
          <span className="jelly-hero-anotherly-gradient" data-text="anotherly!">
            anotherly!
          </span>
        </motion.h1>

        <motion.p
          className="jelly-hero-sub mt-9 max-w-md text-base leading-[1.75] text-[var(--text-muted)] sm:max-w-xl sm:text-[1.0625rem]"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Brand and digital craft for people who care how things feel — identity, interfaces, and launch moments with
          opinion and restraint.
        </motion.p>

        <motion.div
          className="jelly-hero-actions mt-12 flex flex-wrap items-center justify-center gap-4"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link href="/projects" className="jelly-cta-secondary" data-jelly-hero-secondary>
              Explore the Craft
            </Link>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link href="/contact" className="jelly-cta-primary" data-jelly-hero-cta>
              Begin the Dialogue
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
