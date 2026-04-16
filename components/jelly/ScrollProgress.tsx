"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <motion.div
      className="jelly-scroll-progress"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      aria-hidden
    />
  );
}
