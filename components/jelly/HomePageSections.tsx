"use client";

import Link from "next/link";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { HomeFeaturedProjects } from "@/components/jelly/HomeFeaturedProjects";
import { HomeHowWeWork } from "@/components/jelly/HomeHowWeWork";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { JellyDoodle } from "@/components/jelly/JellyDoodle";
import { homeTestimonials } from "@/lib/home-content";

export function HomePageSections() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <HomeHowWeWork />

      <HomeFeaturedProjects />

      <section className="scroll-mt-24" aria-labelledby="services-teaser-heading">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellySectionGeo variant="arc" />
          <span
            className="jelly-splash-deco jelly-splash-deco--md jelly-splash-deco--peach pointer-events-none absolute -top-[3%] right-[2%] -z-0 opacity-[0.16]"
            style={{ transform: "rotate(22deg) scale(0.94)" }}
            aria-hidden
          />
          <span
            className="jelly-splash-deco jelly-splash-deco--xs jelly-splash-deco--mint pointer-events-none absolute left-[5%] bottom-[8%] -z-0 opacity-[0.18]"
            style={{ transform: "rotate(-34deg) scale(0.7)" }}
            aria-hidden
          />
          <JellyDoodle
            variant="circle-scribble"
            className="jelly-doodle jelly-doodle--purple pointer-events-none absolute right-[6%] top-[6%] h-12 w-12 opacity-30"
          />
          <JellyDoodle
            variant="dot-trail"
            className="jelly-doodle jelly-doodle--ink pointer-events-none absolute left-[6%] top-[12%] h-3 w-16 opacity-50"
          />
          <JellyReveal className="relative z-[1]" variant="lift">
            <p className="jelly-section-eyebrow">Services</p>
            <div className="jelly-section-title-row">
              <h2 id="services-teaser-heading" className="jelly-section-title">
                Brand, web, and campaigns
              </h2>
              <JellyDoodle
                variant="sparkle"
                className="jelly-doodle jelly-doodle--peach jelly-doodle-twinkle jelly-section-title-doodle"
              />
            </div>
            <p className="jelly-section-lead jelly-section-lead--relaxed max-w-xl">
              Clear tiers, honest ballparks, and full deliverables — spelling it all out on one page.
            </p>
            <Link href="/services" className="jelly-cta-secondary group mt-8 inline-flex items-center gap-2 sm:mt-9">
              View services &amp; pricing
              <JellyDoodle variant="arrow" className="h-[0.8em] w-[1.6em]" strokeWidth={2} />
            </Link>
          </JellyReveal>
        </JellyGlassSlab>
      </section>

      <section className="scroll-mt-24" id="testimonials" aria-labelledby="testimonials-heading">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <span
            className="jelly-splash-deco jelly-splash-deco--md jelly-splash-deco--pink pointer-events-none absolute -left-[5%] top-[6%] -z-0 opacity-[0.12]"
            style={{ transform: "rotate(-14deg)" }}
            aria-hidden
          />
          <span
            className="jelly-splash-deco jelly-splash-deco--sm jelly-splash-deco--mint pointer-events-none absolute right-[3%] bottom-[4%] -z-0 opacity-[0.14]"
            style={{ transform: "rotate(34deg) scale(0.92)" }}
            aria-hidden
          />
          <span
            className="jelly-splash-deco jelly-splash-deco--xs jelly-splash-deco--purple pointer-events-none absolute right-[10%] top-[12%] -z-0 opacity-[0.14]"
            style={{ transform: "rotate(18deg) scale(0.62)" }}
            aria-hidden
          />
          <JellyDoodle
            variant="asterisk"
            className="jelly-doodle jelly-doodle--pink jelly-doodle-spin pointer-events-none absolute right-[6%] top-[8%] h-8 w-8 opacity-50"
          />
          <JellyDoodle
            variant="squiggle"
            className="jelly-doodle jelly-doodle--purple pointer-events-none absolute left-[7%] bottom-[12%] h-3 w-24 opacity-40"
          />
          <JellyReveal className="relative z-[1]" variant="zoom">
            <p className="jelly-section-eyebrow">Testimonials</p>
            <div className="jelly-section-title-row">
              <h2 id="testimonials-heading" className="jelly-section-title">
                In their words
              </h2>
              <JellyDoodle
                variant="asterisk"
                className="jelly-doodle jelly-doodle--pink jelly-section-title-doodle"
              />
            </div>
            <p className="jelly-section-lead jelly-section-lead--relaxed mt-4 max-w-xl">
              Short reflections from teams we&apos;ve shipped with.
            </p>
          </JellyReveal>
          <ul className="jelly-testimonials-grid relative z-[1] mt-10 grid max-w-none gap-5 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
            {homeTestimonials.map((t, i) => {
              const wash = i % 4;
              const labels = ["One", "Two", "Three", "Four"] as const;
              const badgeLabel = labels[wash];
              return (
                <JellyReveal key={`${t.name}-${i}`} variant="default" delay={i * 0.03}>
                  <li className={`jelly-quote-card jelly-quote-card--wash-${wash} jelly-quote-card--static h-full`}>
                    <p className="jelly-quote-card__badge font-hand" aria-hidden>
                      {badgeLabel}
                    </p>
                    <p className="jelly-quote-mark" aria-hidden>
                      &ldquo;
                    </p>
                    <blockquote className="jelly-quote-text">{t.quote}</blockquote>
                    <footer className="jelly-quote-footer">
                      <span className="jelly-quote-name">{t.name}</span>
                      <span className="jelly-quote-role">{t.role}</span>
                    </footer>
                  </li>
                </JellyReveal>
              );
            })}
          </ul>
        </JellyGlassSlab>
      </section>

      <section className="pb-2 sm:pb-4" aria-labelledby="final-cta-heading">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellySectionGeo variant="arc" className="jelly-section-geo--lines opacity-[0.06]" />
          <span
            className="jelly-splash-deco jelly-splash-deco--md jelly-splash-deco--purple pointer-events-none absolute -right-[5%] top-[-10%] -z-0 opacity-[0.16]"
            style={{ transform: "rotate(38deg) scale(0.88)" }}
            aria-hidden
          />
          <span
            className="jelly-splash-deco jelly-splash-deco--xs jelly-splash-deco--peach pointer-events-none absolute left-[8%] bottom-[10%] -z-0 opacity-[0.16]"
            style={{ transform: "rotate(-22deg) scale(0.7)" }}
            aria-hidden
          />
          <JellyDoodle
            variant="loop"
            className="jelly-doodle jelly-doodle--mint pointer-events-none absolute right-[8%] bottom-[10%] h-10 w-10 opacity-50"
          />
          <JellyDoodle
            variant="dot-trail"
            className="jelly-doodle jelly-doodle--ink pointer-events-none absolute left-[6%] top-[12%] h-3 w-16 opacity-50"
          />
          <JellyReveal variant="lift">
            <div className="relative z-[1] flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-11">
              <div className="min-w-0 max-w-xl">
                <div className="jelly-section-title-row">
                  <h2 id="final-cta-heading" className="jelly-cta-band-title m-0">
                    When you&apos;re ready
                  </h2>
                  <JellyDoodle
                    variant="sparkle"
                    className="jelly-doodle jelly-doodle--purple jelly-doodle-twinkle jelly-section-title-doodle"
                  />
                </div>
                <p className="jelly-cta-band-copy mt-4">
                  Share your goals and budget — we&apos;ll reply with a clear next step and exactly what you get.
                </p>
              </div>
              <Link href="/contact" className="jelly-cta-pill jelly-cta-pill--emphasis group inline-flex items-center gap-2 shrink-0">
                <span className="font-hand text-[1.05em] font-semibold">Begin the Dialogue</span>
                <JellyDoodle variant="arrow" className="h-[0.8em] w-[1.4em]" strokeWidth={2.2} />
              </Link>
            </div>
          </JellyReveal>
        </JellyGlassSlab>
      </section>
    </div>
  );
}
