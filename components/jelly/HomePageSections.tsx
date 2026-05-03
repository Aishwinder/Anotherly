"use client";

import Link from "next/link";
import { Globe, Megaphone, Palette } from "lucide-react";
import { bundleDiscountCopy, mainServices, websiteCarePlans } from "@/lib/services-detail";
import { homeTestimonials, serviceSnapshotCards } from "@/lib/home-content";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { HomeFeaturedProjects } from "@/components/jelly/HomeFeaturedProjects";
import { HomeHowWeWork } from "@/components/jelly/HomeHowWeWork";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";

const snapshotIcons = {
  palette: Palette,
  globe: Globe,
  megaphone: Megaphone,
} as const;

export function HomePageSections() {
  return (
    <div className="jelly-home-flow">
      <JellyReveal>
        <div className="jelly-section-divider" aria-hidden />
      </JellyReveal>

      <HomeHowWeWork />

      <section
        className="jelly-section jelly-home-at-a-glance relative overflow-hidden pb-2"
        aria-labelledby="quick-capabilities-heading"
      >
        <JellySectionGeo variant="arc" />
        <JellyReveal className="relative z-[1]" variant="lift">
          <p className="jelly-section-eyebrow">At a glance</p>
          <h2 id="quick-capabilities-heading" className="jelly-section-title">
            Branding, websites, marketing
          </h2>
          <p className="jelly-section-lead jelly-section-lead--relaxed max-w-xl">
            Three lanes — brand, web, campaigns — with shared craft. Packages below; full detail on{" "}
            <Link href="/services" className="jelly-inline-svc-link">
              Services
            </Link>
            .
          </p>
        </JellyReveal>
        <ul className="jelly-snapshot-grid relative z-[1] mt-10 grid grid-rows-[1fr] gap-5 sm:grid-cols-3 sm:gap-6 sm:items-stretch">
          {serviceSnapshotCards.map((card, i) => {
            const Icon = snapshotIcons[card.icon];
            return (
              <JellyReveal key={card.title} delay={i * 0.04}>
                <li className="flex h-full min-h-0">
                  <Link
                    href={card.href}
                    className={[
                      "jelly-service-snapshot-card group flex min-h-[17.5rem] w-full flex-col no-underline sm:min-h-[18.5rem]",
                      card.hoverTone === "brand" && "jelly-service-snapshot-card--tone-brand",
                      card.hoverTone === "web" && "jelly-service-snapshot-card--tone-web",
                      card.hoverTone === "mark" && "jelly-service-snapshot-card--tone-mark",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span className="jelly-service-snapshot-card__icon" aria-hidden>
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h3 className="jelly-service-snapshot-card__title">{card.title}</h3>
                    <p className="jelly-service-snapshot-card__body flex-1">{card.body}</p>
                  </Link>
                </li>
              </JellyReveal>
            );
          })}
        </ul>
      </section>

      <section
        className="jelly-section jelly-home-services-pricing relative overflow-hidden"
        id="services-pricing"
        aria-labelledby="services-pricing-heading"
      >
        <JellySectionGeo variant="lines" />
        <JellyReveal className="relative z-[1]" variant="drift">
          <p className="jelly-section-eyebrow">Services &amp; pricing</p>
          <h2 id="services-pricing-heading" className="jelly-section-title">
            Clear packages. Honest ballparks.
          </h2>
          <p className="jelly-section-lead jelly-section-lead--relaxed max-w-xl">
            Ballpark pricing — refined on a short call before anything is promised.
          </p>
        </JellyReveal>

        <div className="relative z-[1] mt-10 flex max-w-4xl flex-col gap-14 sm:gap-16">
          {mainServices.map((s, si) => (
            <JellyReveal key={s.id} delay={si * 0.03} variant={si % 2 === 0 ? "default" : "zoom"}>
              <div
                className={[
                  "jelly-home-service-block pt-10 sm:pt-12",
                  si > 0 ? "border-t border-[color-mix(in_srgb,var(--glass-border)_75%,transparent)]" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-[var(--ink)] sm:text-[1.65rem]">
                  {s.title}
                </h3>
                <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 max-w-2xl !text-[0.9375rem]">{s.lead}</p>

                {s.tiers ? (
                  <ul className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {s.tiers.map((t) => (
                      <li key={t.name} className="jelly-service-tier jelly-service-tier--airy">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <p className="font-display text-[0.95rem] font-semibold text-[var(--ink)]">{t.name}</p>
                          <span className="text-[var(--glass-border)]">·</span>
                          <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[var(--accent-teal)]">
                            {t.estimate}
                          </p>
                        </div>
                        <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--text-muted)]">{t.note}</p>
                        {t.includes?.length ? (
                          <details className="jelly-tier-details mt-5">
                            <summary>Included ({t.includes.length})</summary>
                            <div className="jelly-tier-details__inner pb-4 pt-1">
                              <ul className="jelly-tier-includes">
                                {t.includes.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </ul>
                            </div>
                          </details>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {s.flexibleOffers?.length ? (
                  <ul className="jelly-tier-includes mt-6 max-w-3xl">
                    {s.flexibleOffers.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
                {s.bundleNote ? (
                  <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">{s.bundleNote}</p>
                ) : null}
              </div>
            </JellyReveal>
          ))}
        </div>

        <JellyReveal variant="lift">
          <div className="relative z-[1] mt-12 overflow-hidden rounded-[1.2rem] border border-[color-mix(in_srgb,var(--glass-border)_90%,transparent)] bg-[color-mix(in_srgb,var(--bg-glass)_62%,transparent)] p-7 sm:p-9">
            <PageCraftMotif className="pointer-events-none absolute -right-6 top-2 h-auto w-[min(10rem,38vw)] text-[var(--accent-indigo)] opacity-[0.16]" />
            <p className="jelly-section-eyebrow">After launch</p>
            <h3 className="font-display mt-2 text-lg font-bold text-[var(--ink)] sm:text-xl">Care &amp; hosting</h3>
            <p className="jelly-section-lead jelly-section-lead--relaxed mt-4 max-w-xl !text-[0.9375rem]">
              Hygiene retainer optional — keeps your stack and content from going stale.
            </p>
            <ul className="mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {websiteCarePlans.map((plan) => (
                <li key={plan.name} className="jelly-service-tier jelly-service-tier--airy">
                  <p className="font-display text-sm font-semibold text-[var(--ink)]">{plan.name}</p>
                  <p className="mt-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent-teal)]">
                    {plan.estimate}
                  </p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--text-muted)]">{plan.lead}</p>
                  <details className="jelly-tier-details mt-4">
                    <summary>Included ({plan.includes.length})</summary>
                    <div className="jelly-tier-details__inner pb-4 pt-1">
                      <ul className="jelly-tier-includes">
                        {plan.includes.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-[var(--text-muted)]">
              <Link href="/services#care" className="jelly-inline-svc-link font-semibold">
                Services · Care section
              </Link>
            </p>
          </div>
        </JellyReveal>

        <JellyReveal>
          <p className="jelly-bundle-callout mx-auto mt-14 max-w-2xl">{bundleDiscountCopy}</p>
        </JellyReveal>
      </section>

      <section className="jelly-section relative overflow-hidden" aria-labelledby="testimonials-heading">
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
        <ul className="jelly-testimonials-grid relative z-[1] mt-12 grid max-w-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeTestimonials.map((t, i) => (
            <JellyReveal key={`${t.name}-${i}`} variant="default" delay={i * 0.04}>
              <li className="jelly-quote-card h-full">
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
          ))}
        </ul>
      </section>

      <section className="jelly-section jelly-studio-band relative overflow-hidden" id="studio" aria-labelledby="studio-heading">
        <div className="jelly-craft-grid-bg" />
        <JellySectionGeo variant="arc" className="jelly-section-geo--studio-accent" />
        <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
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
        <ul className="relative z-[1] mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
          <JellyReveal delay={0.05}>
            <li className="jelly-team-card">
              <div className="jelly-team-avatar" aria-hidden>
                AS
              </div>
              <div className="min-w-0">
                <p className="jelly-team-name">Aishwinder Singh</p>
                <p className="jelly-team-title">Creative Frontend Designer &amp; Creative Director</p>
              </div>
            </li>
          </JellyReveal>
          <JellyReveal delay={0.07}>
            <li className="jelly-team-card">
              <div className="jelly-team-avatar" aria-hidden>
                GS
              </div>
              <div className="min-w-0">
                <p className="jelly-team-name">Gurpreet Singh</p>
                <p className="jelly-team-title">Backend Engineer &amp; Technical Developer</p>
              </div>
            </li>
          </JellyReveal>
        </ul>
      </section>

      <HomeFeaturedProjects />

      <section className="jelly-section pb-2" aria-labelledby="final-cta-heading">
        <JellyReveal>
          <div className="jelly-cta-band">
            <div>
              <h2 id="final-cta-heading" className="jelly-cta-band-title">
                When you&apos;re ready
              </h2>
              <p className="jelly-cta-band-copy">
                Share your goals and budget — we&apos;ll reply with a clear next step and exactly what you get.
              </p>
            </div>
            <Link href="/contact" className="jelly-cta-pill jelly-cta-pill--emphasis shrink-0">
              Begin the Dialogue
            </Link>
          </div>
        </JellyReveal>
      </section>
    </div>
  );
}
