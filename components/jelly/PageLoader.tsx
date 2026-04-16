"use client";

import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Wordmark appears solid (ink), then brand gradient fills upward with a soft wave — ~3s, then exit.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const progress = useMotionValue(0);

  const fillClipPath = useTransform(progress, (p) => {
    let top = (1 - p) * 100;
    const wave = Math.sin(p * Math.PI * 7) * 1.35 * Math.sin(p * Math.PI);
    const waveB = Math.cos(p * Math.PI * 4 + 0.5) * 0.65 * (1 - p);
    top = Math.min(100, Math.max(0, top - wave - waveB));
    return `inset(${top}% 0 0 0)`;
  });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(false);
      return;
    }

    const controls = animate(progress, 1, {
      duration: 3,
      ease: [0.22, 0.02, 0.16, 1],
      onComplete: () => {
        window.setTimeout(() => setVisible(false), 160);
      },
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="jelly-page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.33, 1, 0.32, 1] } }}
          aria-hidden
        >
          <div className="jelly-page-loader__wordmark">
            <div className="jelly-page-loader__layer">
              <span className="jelly-page-loader__word-solid">anotherly</span>
            </div>
            <motion.div className="jelly-page-loader__layer">
              <motion.span className="jelly-page-loader__word-gradient-fill" style={{ clipPath: fillClipPath }}>
                anotherly
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
