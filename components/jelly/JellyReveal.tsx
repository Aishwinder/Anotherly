"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Max scroll-linked vertical drift (px) — tied to element scroll progress. */
  parallax?: number;
};

/**
 * Scroll-triggered reveal + optional scroll-linked Y drift (Framer useScroll → useTransform).
 */
export function JellyReveal({ children, className = "", delay = 0, parallax = 0 }: Props) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce || !parallax ? [0, 0] : [parallax * 0.72, -parallax * 0.72],
  );
  const useParallaxMotion = Boolean(parallax) && !reduce;
  const initial = reduce
    ? undefined
    : useParallaxMotion
      ? { opacity: 0, scale: 0.985 }
      : { opacity: 0, y: 22, scale: 0.985 };
  const whileInView = reduce
    ? undefined
    : useParallaxMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, y: 0, scale: 1 };

  const inner = (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-12% 0px -12% 0px", amount: 0.1 }}
      transition={{
        duration: 0.58,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        willChange: reduce ? undefined : "transform, opacity",
        y: useParallaxMotion ? rawY : undefined,
      }}
    >
      {children}
    </motion.div>
  );

  if (useParallaxMotion) {
    return (
      <div ref={trackRef} className={className}>
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      ref={trackRef}
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-12% 0px -12% 0px", amount: 0.1 }}
      transition={{
        duration: 0.58,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: reduce ? undefined : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
