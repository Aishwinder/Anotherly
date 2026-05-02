"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
type Props = {
  /** When true, header pill is visually stowed so only the FAB carries “Let’s talk”. */
  scrolledPast: boolean;
};

export function ScrollTalkFab({ scrolledPast }: Props) {
  const reduce = useReducedMotion();
  const spring = { type: "spring" as const, stiffness: 460, damping: 30, mass: 0.52 };
  const soft = { duration: 0.22, ease: [0.33, 1, 0.32, 1] as const };

  return (
    <AnimatePresence>
      {scrolledPast ? (
        <motion.div
          key="talk-fab"
          className="jelly-talk-fab-wrap"
          initial={{ opacity: 0, scale: 0.82, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 12 }}
          transition={reduce ? soft : spring}
        >
          <Link href="/contact" className="jelly-talk-fab" aria-label="Let’s talk — contact">
            <MessageCircle className="jelly-talk-fab__icon" strokeWidth={2} aria-hidden />
            <span className="sr-only">Let&apos;s talk</span>
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
