"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const textShadow =
  "0 2px 28px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.95), 0 0 1px rgba(0,0,0,1)";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.04]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100dvh] overflow-hidden pt-24 sm:pt-28"
      aria-label="Introduction"
    >
      <motion.div className="absolute inset-0 z-0 min-h-[100dvh]" style={{ y: bgY, scale: bgScale }}>
        <Image
          src="/assets/hero-text.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="select-none object-cover object-[72%_center] sm:object-[68%_50%] lg:object-[62%_50%]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-6xl flex-col justify-center px-4 pb-16 sm:px-6 sm:pb-20 lg:min-h-[calc(100dvh-7rem)]">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5 xl:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl lg:max-w-none"
            >
              <p
                className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-sky-200 sm:text-sm"
                style={{ textShadow }}
              >
                Anotherly
              </p>

              <h1
                className="font-display mt-4 text-balance text-2xl leading-[1.12] text-white sm:mt-5 sm:text-4xl md:text-[2.65rem]"
                style={{ textShadow }}
              >
                Crafting iconic brands in the digital cosmos
              </h1>

              <p
                className="mt-4 text-pretty text-sm leading-relaxed text-slate-100 sm:mt-5 sm:text-base"
                style={{ textShadow }}
              >
                We create bold visual identities, immersive digital experiences, and impactful marketing campaigns that
                resonate across the universe.
              </p>

              <motion.a
                href="#projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.35 }}
                className="group mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-slate-100 sm:mt-10"
                style={{ textShadow }}
              >
                <span className="transition-colors group-hover:text-white">Explore projects</span>
                <motion.span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          <div className="hidden lg:col-span-7 lg:block xl:col-span-8" aria-hidden />
        </div>
      </div>
    </section>
  );
}
