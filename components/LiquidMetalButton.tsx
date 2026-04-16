"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function LiquidMetalButton({ href, children, className = "" }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`inline-flex ${className}`}>
      <Link
        href={href}
        className="liquid-metal group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide text-slate-950 shadow-[0_18px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(56,189,248,0.12)] ring-1 ring-white/25 transition-[box-shadow] duration-300 hover:shadow-[0_22px_80px_rgba(0,0,0,0.55),0_0_48px_rgba(56,189,248,0.28),0_0_90px_rgba(167,139,250,0.12)] md:w-auto"
      >
        <span className="relative">{children}</span>
      </Link>
    </motion.div>
  );
}
