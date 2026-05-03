import { JellyReveal } from "@/components/jelly/JellyReveal";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { PageCraftGrid, PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import { ServicesShowcaseCarousel } from "@/components/jelly/ServicesShowcaseCarousel";
import { bundleDiscountCopy, mainServices, websiteCarePlans } from "@/lib/services-detail";
import { Globe, Megaphone, Palette } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Anotherly Studio",
  description:
    "Branding, websites, marketing, and ongoing care — generous packages with unlimited revisions until sign-off.",
};

const icons = {
  branding: Palette,
  websites: Globe,
  marketing: Megaphone,
} as const;

export default function ServicesPage() {
  return (
    <div className="jelly-page-pad relative overflow-hidden">
      <PageCraftGrid className="opacity-[0.035]" />
      <JellySectionGeo variant="arc" className="jelly-section-geo--services" />
      <div className="relative z-[1]">
        <JellyReveal variant="lift">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 max-w-2xl">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">Services</p>
              <h1 className="font-display mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-[var(--ink)]">
                What we do
              </h1>
              <p className="jelly-section-lead jelly-section-lead--relaxed mt-8 max-w-xl">
                Branding and websites use clear tiers — Starter, Pro, and Premium — each with scoped deliverables and{" "}
                <strong className="font-semibold text-[var(--ink)]">unlimited revisions until you sign off</strong>.
                Marketing is bespoke; care keeps your site healthy after launch.
              </p>
            </div>
            <PageCraftMotif className="hidden h-auto w-28 shrink-0 text-[var(--accent-teal)] opacity-28 sm:block" />
          </div>
        </JellyReveal>

        <JellyReveal variant="lift" delay={0.06}>
          <ServicesShowcaseCarousel />
        </JellyReveal>

        <ul className="mt-14 flex max-w-4xl flex-col gap-12 sm:gap-16">
          {mainServices.map((s, i) => {
            const Icon = icons[s.id as keyof typeof icons];
            const quotes = s.quotes.filter((q): q is string => Boolean(q));

            return (
              <JellyReveal key={s.id} delay={i * 0.05}>
                <li id={s.id} className="jelly-service-block jelly-service-block--scan scroll-mt-28">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1 space-y-4">
                      <div className="flex items-start gap-3">
                        {Icon ? (
                          <span className="jelly-service-icon shrink-0" aria-hidden>
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </span>
                        ) : null}
                        <div className="min-w-0">
                          <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
                            {s.title}
                          </h2>
                          <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--text-muted)] sm:text-base">
                            {s.lead}
                          </p>
                        </div>
                      </div>

                      {quotes.length ? (
                        <details className="jelly-quote-fold max-w-xl">
                          <summary>Notes & perspective</summary>
                          <div className="jelly-quote-fold__inner pb-4 pt-1">
                            <ul className="space-y-2.5 border-l border-[color-mix(in_srgb,var(--glass-border)_80%,transparent)] pl-4">
                              {quotes.map((q) => (
                                <li key={q} className="text-sm italic leading-relaxed text-[var(--text-muted)]">
                                  {q}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      ) : null}
                    </div>
                    {s.estimate ? (
                      <p className="shrink-0 text-sm font-semibold leading-snug text-[var(--text-muted)] sm:max-w-[11rem] sm:text-right">
                        {s.estimate}
                      </p>
                    ) : null}
                  </div>

                  {s.tiers ? (
                    <ul className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-8 xl:max-w-5xl">
                      {s.tiers.map((t) => (
                        <li key={t.name} className="jelly-service-tier jelly-service-tier--airy">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <p className="font-display text-base font-semibold text-[var(--ink)]">{t.name}</p>
                            <span
                              aria-hidden
                              className="text-[var(--glass-border)]"
                            >
                              ·
                            </span>
                            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent-teal)]">
                              {t.estimate}
                            </p>
                          </div>
                          <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--text-muted)]">{t.note}</p>
                          {t.includes?.length ? (
                            <details className="jelly-tier-details mt-5">
                              <summary>Included deliverables ({t.includes.length})</summary>
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
                    <ul className="jelly-tier-includes mt-8 max-w-2xl border-t border-[color-mix(in_srgb,var(--glass-border)_65%,transparent)] pt-8 text-[0.8125rem] leading-relaxed">
                      {s.flexibleOffers.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : null}
                  {s.bundleNote ? (
                    <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">{s.bundleNote}</p>
                  ) : null}
                </li>
              </JellyReveal>
            );
          })}
        </ul>

        <section id="care" className="mt-16 scroll-mt-28 border-t border-[var(--glass-border)] pt-16">
          <JellyReveal>
            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Websites · ongoing
                </p>
                <h2 className="font-display mt-3 text-2xl font-bold text-[var(--ink)]">Care &amp; hosting</h2>
                <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 !text-[0.9375rem]">
                  Launch isn&apos;t the finish — pick a rhythm that matches how often you ship updates.
                </p>
              </div>
              <PageCraftMotif className="h-auto w-28 text-[var(--accent-indigo)] opacity-25 sm:mb-1" />
            </div>
            <ul className="mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {websiteCarePlans.map((plan) => (
                <li key={plan.name} className="jelly-service-tier jelly-service-tier--airy">
                  <p className="font-display text-sm font-semibold text-[var(--ink)]">{plan.name}</p>
                  <p className="mt-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent-teal)]">
                    {plan.estimate}
                  </p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--text-muted)]">{plan.lead}</p>
                  <details className="jelly-tier-details mt-5">
                    <summary>What&apos;s included ({plan.includes.length})</summary>
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
            <p className="mt-12 max-w-2xl text-sm text-[var(--text-muted)]">
              Custom scope (multi-site, SLA, handoff)?{" "}
              <Link href="/contact" className="jelly-inline-svc-link font-semibold">
                Contact form
              </Link>
              .
            </p>
          </JellyReveal>
        </section>

        <JellyReveal>
          <p className="jelly-bundle-callout mx-auto mt-16 max-w-2xl">{bundleDiscountCopy}</p>
        </JellyReveal>

        <section id="privacy" className="jelly-section mt-20 scroll-mt-28 border-t border-[var(--glass-border)] pt-16">
          <JellyReveal>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">Privacy</p>
            <h2 className="font-display mt-3 text-xl font-bold text-[var(--ink)] sm:text-2xl">Data we hold</h2>
            <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 max-w-2xl">
              We retain only what you send by email or forms — enough to reply and quote. We don&apos;t sell data. A
              formal policy can go here when you&apos;re ready.
            </p>
          </JellyReveal>
        </section>
      </div>
    </div>
  );
}
