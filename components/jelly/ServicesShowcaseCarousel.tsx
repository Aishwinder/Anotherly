"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { serviceShowcaseSlides } from "@/lib/services-showcase-images";

const AUTO_INTERVAL_MS = 5200;

export function ServicesShowcaseCarousel({ className = "" }: { className?: string }) {
  const n = serviceShowcaseSlides.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => {
    setI((x) => (x - 1 + n) % n);
  }, [n]);

  const next = useCallback(() => {
    setI((x) => (x + 1) % n);
  }, [n]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || paused || n < 2) {
      return undefined;
    }
    const id = window.setInterval(next, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion, paused, n, next]);

  const slide = serviceShowcaseSlides[i]!;

  return (
    <div
      className={[
        "jelly-services-carousel group relative w-full overflow-hidden rounded-[clamp(14px,2.2vw,20px)] border border-[var(--glass-border)] bg-[color-mix(in_srgb,var(--bg-glass)_52%,transparent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:rounded-[clamp(16px,2.5vw,22px)]",
        className || "mt-8",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-roledescription="carousel"
      aria-label="Featured work previews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={(e) => {
        touchStart.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const x = e.changedTouches[0]?.clientX ?? touchStart.current;
        const dx = x - touchStart.current;
        touchStart.current = null;
        if (dx > 52) prev();
        else if (dx < -52) next();
      }}
    >
      <p className="sr-only" aria-live="polite">
        Slide {i + 1} of {n}: {slide.alt}
      </p>

      <div className="relative aspect-[16/10] w-full md:aspect-[21/10] lg:aspect-[21/9]">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className="relative z-0 object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none"
          sizes="(max-width: 768px) 100vw, min(1100px, 96vw)"
          priority={i === 0}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-[color-mix(in_srgb,var(--ink)_58%,transparent)] to-transparent pb-[4.5rem] pt-24 sm:pb-20 sm:pt-28"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-14 bg-gradient-to-r from-[color-mix(in_srgb,var(--ink)_22%,transparent)] to-transparent sm:w-20" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-14 bg-gradient-to-l from-[color-mix(in_srgb,var(--ink)_22%,transparent)] to-transparent sm:w-20" aria-hidden />

        <div className="absolute inset-y-0 left-2 z-[6] flex items-center sm:left-3">
          <button type="button" aria-label="Previous slide" className="jelly-carousel-btn jelly-carousel-btn--edge" onClick={() => prev()}>
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
        <div className="absolute inset-y-0 right-2 z-[6] flex items-center sm:right-3">
          <button type="button" aria-label="Next slide" className="jelly-carousel-btn jelly-carousel-btn--edge" onClick={() => next()}>
            <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-[6] flex items-end justify-between gap-3 px-4 pb-4 pt-12 sm:px-5 sm:pb-5">
          <p className="min-w-0 max-w-[min(100%-10rem,28rem)] text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.18em] text-white/95 sm:text-xs">
            {slide.alt}
          </p>
          <div className="flex shrink-0 items-center gap-1" role="presentation" aria-hidden>
            {serviceShowcaseSlides.map((_, dot) => (
              <span
                key={dot}
                className={[
                  "h-1 rounded-full transition-[width,background] duration-300 ease-out",
                  dot === i ? "w-5 bg-white/95" : "w-1 bg-white/35",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
