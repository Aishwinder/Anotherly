"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { serviceShowcaseSlides } from "@/lib/services-showcase-images";

export function ServicesShowcaseCarousel() {
  const n = serviceShowcaseSlides.length;
  const [i, setI] = useState(0);
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => setI((x) => (x - 1 + n) % n), [n]);
  const next = useCallback(() => setI((x) => (x + 1) % n), [n]);

  const slide = serviceShowcaseSlides[i]!;

  return (
    <div
      className="relative mt-10 w-full overflow-hidden rounded-[clamp(14px,2.2vw,20px)] border border-[var(--glass-border)] bg-[color-mix(in_srgb,var(--bg-glass)_50%,transparent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[clamp(16px,2.5vw,22px)]"
      aria-roledescription="carousel"
      aria-label="Featured work previews"
      onTouchStart={(e) => {
        touchStart.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const x = e.changedTouches[0]?.clientX ?? touchStart.current;
        const dx = x - touchStart.current;
        touchStart.current = null;
        if (dx > 48) prev();
        else if (dx < -48) next();
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
          className="object-cover"
          sizes="(max-width: 768px) 100vw, min(896px, 96vw)"
          priority={i === 0}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--ink)_55%,transparent)] to-transparent pb-14 pt-20 sm:pb-16 sm:pt-24 md:pb-14"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-3 pb-3 pt-8 sm:px-4">
          <p className="max-w-[min(100%-8rem,24rem)] truncate text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/95 sm:text-xs">
            {slide.alt}
          </p>
          <div className="flex shrink-0 items-center gap-1.5" role="group" aria-label="Slide controls">
            <button type="button" aria-label="Previous slide" className="jelly-carousel-btn" onClick={() => prev()}>
              <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            <button type="button" aria-label="Next slide" className="jelly-carousel-btn" onClick={() => next()}>
              <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
