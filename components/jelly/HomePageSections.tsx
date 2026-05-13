"use client";

import Link from "next/link";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { HomeFeaturedProjects } from "@/components/jelly/HomeFeaturedProjects";
import { HomeHowWeWork } from "@/components/jelly/HomeHowWeWork";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
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
          <JellyReveal className="relative z-[1]" variant="lift">
            <p className="jelly-section-eyebrow">Services</p>
            <h2 id="services-teaser-heading" className="jelly-section-title">
              Brand, web, and campaigns
            </h2>
            <p className="jelly-section-lead jelly-section-lead--relaxed max-w-xl">
              Clear tiers, honest ballparks, and full deliverables — spelling it all out on one page.
            </p>
            <Link href="/services" className="jelly-cta-secondary mt-8 inline-flex sm:mt-9">
              View services &amp; pricing
            </Link>
          </JellyReveal>
        </JellyGlassSlab>
      </section>

      <section className="scroll-mt-24" id="testimonials" aria-labelledby="testimonials-heading">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellySectionGeo variant="lines" className="jelly-section-geo--testimonials" />
          <JellyReveal className="relative z-[1]" variant="zoom">
            <p className="jelly-section-eyebrow">Testimonials</p>
            <h2 id="testimonials-heading" className="jelly-section-title">
              In their words
            </h2>
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
                  <li className={`jelly-quote-card jelly-quote-card--wash-${wash} h-full motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:ease-out hover:motion-safe:-translate-y-0.5`}>
                    <p className="jelly-quote-card__badge font-hand" aria-hidden>
                      {badgeLabel}
                    </p>
                    <p className="jelly-quote-mark" aria-hidden>
                      “
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

      <section className="scroll-mt-24" id="studio" aria-labelledby="studio-heading">
        <JellyGlassSlab className="relative overflow-hidden">
          <div className="jelly-craft-grid-bg opacity-[0.038]" aria-hidden />
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellySectionGeo variant="arc" className="jelly-section-geo--studio-accent" />
          <div className="relative z-[1] flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <JellyReveal className="min-w-0 flex-1" variant="drift">
              <p className="jelly-section-eyebrow">Studio</p>
              <h2 id="studio-heading" className="jelly-section-title">
                Anotherly Studio
              </h2>
              <p className="jelly-section-lead jelly-section-lead--relaxed max-w-2xl">
                A small team obsessed with clarity — fewer handoffs, more continuity from strategy to launch. Based online;
                working with founders and teams who care how things feel.
              </p>
            </JellyReveal>
            <PageCraftMotif className="hidden h-auto w-40 shrink-0 text-[var(--accent-teal)] opacity-40 sm:block" />
          </div>
          <ul className="relative z-[1] mt-10 grid gap-6 sm:mt-11 sm:grid-cols-2 sm:gap-8">
            <JellyReveal delay={0.05}>
              <li className="jelly-team-card">
                <div className="jelly-team-avatar" aria-hidden>
                  AS
                </div>
                <div className="min-w-0">
                  <p className="jelly-team-name">Aishwinder Singh</p>
                  <p className="jelly-team-title">Creative Director &amp; Creative Frontend Designer</p>
                </div>
              </li>
            </JellyReveal>
            <JellyReveal delay={0.07}>
              <li className="jelly-team-card">
                <div className="jelly-team-avatar" aria-hidden>
                  GP
                </div>
                <div className="min-w-0">
                  <p className="jelly-team-name">Gurpreet Singh</p>
                  <p className="jelly-team-title">Backend Engineer &amp; Technical Developer</p>
                </div>
              </li>
            </JellyReveal>
          </ul>
        </JellyGlassSlab>
      </section>

      <section className="pb-2 sm:pb-4" aria-labelledby="final-cta-heading">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellySectionGeo variant="arc" className="jelly-section-geo--lines opacity-[0.08]" />
          <JellyReveal variant="lift">
            <div className="relative z-[1] flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-11">
              <div className="min-w-0 max-w-xl">
                <h2 id="final-cta-heading" className="jelly-cta-band-title m-0">
                  When you&apos;re ready
                </h2>
                <p className="jelly-cta-band-copy mt-4">
                  Share your goals and budget — we&apos;ll reply with a clear next step and exactly what you get.
                </p>
              </div>
              <Link href="/contact" className="jelly-cta-pill jelly-cta-pill--emphasis shrink-0">
                Begin the Dialogue
              </Link>
            </div>
          </JellyReveal>
        </JellyGlassSlab>
      </section>
    </div>
  );
}
