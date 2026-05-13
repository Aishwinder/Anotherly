"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useMemo, useRef } from "react";

export type JellyRevealVariant = "default" | "lift" | "drift" | "zoom";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Max scroll-linked vertical drift (px) — tied to element scroll progress. */
  parallax?: number;
  /** Motion character — kept subtle for performance (transform + opacity only). */
  variant?: JellyRevealVariant;
};

/** Easier to trigger so scroll reveals read clearly on the page */
const viewportOpts = { once: true as const, margin: "0px 0px -10% 0px" as const, amount: 0.02 as const };

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-triggered reveal + optional scroll-linked Y drift (Framer useScroll → useTransform).
 */
export function JellyReveal({ children, className = "", delay = 0, parallax = 0, variant = "default" }: Props) {
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

  const preset = useMemo(() => {
    if (reduce) {
      return { initial: undefined, whileInView: undefined };
    }
    if (useParallaxMotion) {
      return {
        initial: { opacity: 0, y: 36, scale: 0.985 } as const,
        whileInView: { opacity: 1, y: 0, scale: 1 } as const,
      };
    }
    switch (variant) {
      case "lift":
        return {
          initial: { opacity: 0, y: 48, scale: 0.982 } as const,
          whileInView: { opacity: 1, y: 0, scale: 1 } as const,
        };
      case "drift":
        return {
          initial: { opacity: 0, y: 28, x: -18 } as const,
          whileInView: { opacity: 1, y: 0, x: 0 } as const,
        };
      case "zoom":
        return {
          initial: { opacity: 0, y: 20, scale: 0.958 } as const,
          whileInView: { opacity: 1, y: 0, scale: 1 } as const,
        };
      default:
        return {
          initial: { opacity: 0, y: 36, scale: 0.985 } as const,
          whileInView: { opacity: 1, y: 0, scale: 1 } as const,
        };
    }
  }, [reduce, useParallaxMotion, variant]);

  const duration = variant === "lift" ? 0.5 : variant === "zoom" ? 0.46 : 0.44;

  const inner = (
    <motion.div
      initial={preset.initial}
      whileInView={preset.whileInView}
      viewport={viewportOpts}
      transition={{
        duration,
        delay,
        ease: easeOut,
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
      initial={preset.initial}
      whileInView={preset.whileInView}
      viewport={viewportOpts}
      transition={{
        duration,
        delay,
        ease: easeOut,
      }}
      style={{ willChange: reduce ? undefined : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
