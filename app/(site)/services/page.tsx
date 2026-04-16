import { JellyReveal } from "@/components/jelly/JellyReveal";
import { PageCraftGrid, PageCraftMotif } from "@/components/jelly/PageCraftMotif";
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
      <PageCraftGrid className="opacity-[0.06]" />
      <div className="relative z-[1]">
        <JellyReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Services</p>
              <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
                What we do
              </h1>
              <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 max-w-2xl">
                Branding and websites ship as clear Starter / Pro / Premium tiers — each one loaded with deliverables
                and <strong className="font-semibold text-[var(--ink)]">unlimited revisions until you sign off</strong>.
                Marketing stays bespoke. Care plans keep your site healthy after launch.
              </p>
            </div>
            <PageCraftMotif className="hidden h-auto w-36 shrink-0 text-[var(--accent-teal)] opacity-35 sm:block" />
          </div>
        </JellyReveal>

        <ul className="mt-12 flex flex-col gap-10 sm:gap-12">
          {mainServices.map((s, i) => {
            const Icon = icons[s.id as keyof typeof icons];
            return (
              <JellyReveal key={s.id} delay={i * 0.05}>
                <li id={s.id} className="jelly-service-block scroll-mt-28">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-3">
                        {Icon ? (
                          <span className="jelly-service-icon" aria-hidden>
                            <Icon className="h-6 w-6" strokeWidth={2} />
                          </span>
                        ) : null}
                        <div>
                          <h2 className="font-display text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
                            {s.title}
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">{s.lead}</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 border-l border-[var(--glass-border)] pl-4">
                        {s.quotes
                          .filter((q): q is string => Boolean(q))
                          .map((q) => (
                            <li key={q} className="text-sm italic leading-relaxed text-[var(--text-muted)]">
                              {q}
                            </li>
                          ))}
                      </ul>
                    </div>
                    {s.estimate ? (
                      <p className="jelly-pricing-estimate shrink-0 sm:max-w-[12rem]">{s.estimate}</p>
                    ) : null}
                  </div>

                  {s.tiers ? (
                    <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {s.tiers.map((t) => (
                        <li key={t.name} className="jelly-service-tier">
                          <p className="font-display text-sm font-semibold text-[var(--ink)]">{t.name}</p>
                          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent-teal)]">
                            {t.estimate}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{t.note}</p>
                          {t.includes?.length ? (
                            <ul className="jelly-tier-includes">
                              {t.includes.map((line) => (
                                <li key={line}>{line}</li>
                              ))}
                            </ul>
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
                </li>
              </JellyReveal>
            );
          })}
        </ul>

        <section id="care" className="scroll-mt-28 border-t border-[var(--glass-border)] pt-14">
          <JellyReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="jelly-section-eyebrow">Websites · ongoing</p>
                <h2 className="font-display text-xl font-bold text-[var(--ink)] sm:text-2xl">Care, hosting &amp; retainers</h2>
                <p className="jelly-section-lead jelly-section-lead--relaxed mt-3 max-w-2xl !text-[0.9375rem]">
                  Most launches aren&apos;t “done” — they need patches, content swaps, and someone who remembers how the
                  build works. Pick a tier that matches how often you ship.
                </p>
              </div>
              <PageCraftMotif className="h-auto w-32 text-[var(--accent-indigo)] opacity-30 sm:mb-1" />
            </div>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {websiteCarePlans.map((plan) => (
                <li key={plan.name} className="jelly-service-tier">
                  <p className="font-display text-sm font-semibold text-[var(--ink)]">{plan.name}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent-teal)]">
                    {plan.estimate}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{plan.lead}</p>
                  <ul className="jelly-tier-includes">
                    {plan.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-sm text-[var(--text-muted)]">
              Need something custom (multi-site, SLA, or in-house handoff)?{" "}
              <Link href="/contact" className="jelly-inline-svc-link">
                Tell us on the contact form
              </Link>{" "}
              — we&apos;ll scope it in plain language.
            </p>
          </JellyReveal>
        </section>

        <JellyReveal>
          <p className="jelly-bundle-callout mt-14 max-w-3xl">{bundleDiscountCopy}</p>
        </JellyReveal>

        <section id="privacy" className="jelly-section mt-16 scroll-mt-28 border-t border-[var(--glass-border)] pt-14">
          <JellyReveal>
            <h2 className="font-display text-xl font-bold text-[var(--ink)] sm:text-2xl">Privacy</h2>
            <p className="jelly-section-lead jelly-section-lead--relaxed mt-4 max-w-2xl">
              We keep only what you send by email or forms — enough to reply and quote. We don&apos;t sell data. A
              counsel-reviewed policy can sit here when you&apos;re ready to publish one.
            </p>
          </JellyReveal>
        </section>
      </div>
    </div>
  );
}
