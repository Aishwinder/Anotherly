import { JellyExpandableOfferStack, JellyExpandableTierCard } from "@/components/jelly/JellyExpandableTierCard";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { PageCraftGrid, PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import { JellyThemeDeco } from "@/components/jelly/JellyThemeDeco";
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
    <div className="relative overflow-hidden">
      <PageCraftGrid className="opacity-[0.035]" />

      <div className="jelly-page-pad relative z-[1] flex flex-col gap-5 sm:gap-6 md:gap-8">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellySectionGeo variant="arc" className="jelly-section-geo--services" />
          <JellyThemeDeco preset="servicesPage" placement="bottom-left" />
          <JellyThemeDeco preset="howWeWorkStar" placement="top-right" className="hidden sm:block" />
          <JellyReveal variant="lift">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
              <div className="min-w-0 max-w-3xl">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">Services</p>
                <h1 className="font-display mt-3 text-[clamp(2rem,4.4vw,2.75rem)] font-extrabold tracking-[-0.035em] text-[var(--ink)]">
                  What we do
                </h1>
                <p className="jelly-section-lead jelly-section-lead--relaxed mt-7 max-w-2xl">
                  Branding and websites use clear tiers — each with scoped deliverables and{" "}
                  <strong className="font-semibold text-[var(--ink)]">unlimited revisions until you sign off</strong>.
                  Use &quot;What&apos;s included&quot; on each tier to see the full list. Marketing is bespoke; care keeps your site healthy after launch.
                </p>
              </div>
              <PageCraftMotif className="hidden h-auto w-32 shrink-0 self-center text-[var(--accent-teal)] opacity-30 sm:block lg:w-40" />
            </div>
          </JellyReveal>
        </JellyGlassSlab>

        <JellyReveal variant="lift" delay={0.06}>
          <JellyGlassSlab className="relative overflow-hidden">
            <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
            <ServicesShowcaseCarousel className="mt-6 sm:mt-8" />
          </JellyGlassSlab>
        </JellyReveal>

        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <ul className="flex flex-col gap-12 sm:gap-16">
            {mainServices.map((s, i) => {
              const Icon = icons[s.id as keyof typeof icons];
              const quotes = s.quotes.filter((q): q is string => Boolean(q));

              return (
                <JellyReveal key={s.id} delay={i * 0.05}>
                  <li id={s.id} className="jelly-service-block jelly-service-block--scan scroll-mt-28">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                      <div className="min-w-0 flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                          {Icon ? (
                            <span className="jelly-service-icon shrink-0" aria-hidden>
                              <Icon className="h-5 w-5" strokeWidth={2} />
                            </span>
                          ) : null}
                          <div className="min-w-0">
                            <h2 className="font-display text-xl font-extrabold tracking-[-0.025em] text-[var(--ink)] sm:text-2xl">
                              {s.title}
                            </h2>
                            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-[var(--text-muted)] sm:text-base">
                              {s.lead}
                            </p>
                          </div>
                        </div>

                        {quotes.length ? (
                          <details className="jelly-quote-fold max-w-2xl">
                            <summary>Notes &amp; perspective</summary>
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
                        <p className="shrink-0 text-sm font-semibold leading-snug text-[var(--text-muted)] sm:max-w-[12rem] sm:text-right">
                          {s.estimate}
                        </p>
                      ) : null}
                    </div>

                    {s.tiers ? (
                      <ul className="jelly-pricing-tier-grid mt-10">
                        {s.tiers.map((t) => (
                          <li key={t.name}>
                            <JellyExpandableTierCard tier={t} summaryHint={`${s.title} deliverables`} />
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {s.flexibleOffers?.length ? (
                      <div className="mt-10 max-w-2xl border-t border-[color-mix(in_srgb,var(--glass-border)_60%,transparent)] pt-10">
                        <JellyExpandableOfferStack heading="How we collaborate" lines={s.flexibleOffers} />
                      </div>
                    ) : null}
                    {s.bundleNote ? (
                      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">{s.bundleNote}</p>
                    ) : null}
                  </li>
                </JellyReveal>
              );
            })}
          </ul>

          <section id="care" className="mt-14 scroll-mt-28 border-t border-[color-mix(in_srgb,var(--glass-border)_65%,transparent)] pt-14 sm:mt-16 sm:pt-16">
            <JellyReveal>
              <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
                <div className="max-w-2xl">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    Websites · ongoing
                  </p>
                  <h2 className="font-display mt-3 text-2xl font-extrabold tracking-[-0.025em] text-[var(--ink)]">Care &amp; hosting</h2>
                  <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 !text-[0.9375rem]">
                    Launch isn&apos;t the finish — pick a rhythm that matches how often you ship updates.
                  </p>
                </div>
                <PageCraftMotif className="h-auto w-32 text-[var(--accent-indigo)] opacity-30 sm:mb-1" />
              </div>
              <ul className="jelly-pricing-tier-grid mt-10 sm:mt-12">
                {websiteCarePlans.map((plan) => (
                  <li key={plan.name}>
                    <JellyExpandableTierCard tier={plan} summaryHint="Care items" />
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
            <p className="jelly-bundle-callout mx-auto mt-14 max-w-2xl sm:mt-16">{bundleDiscountCopy}</p>
          </JellyReveal>
        </JellyGlassSlab>

        <JellyGlassSlab id="privacy" className="relative scroll-mt-28 overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellyReveal>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">Privacy</p>
            <h2 className="font-display mt-3 text-xl font-extrabold tracking-[-0.025em] text-[var(--ink)] sm:text-2xl">Data we hold</h2>
            <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 max-w-2xl">
              We retain only what you send by email or forms — enough to reply and quote. We don&apos;t sell data. A
              formal policy can go here when you&apos;re ready.
            </p>
          </JellyReveal>
        </JellyGlassSlab>
      </div>
    </div>
  );
}
