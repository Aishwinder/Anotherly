import { JellyReveal } from "@/components/jelly/JellyReveal";
import { bundleDiscountCopy, mainServices, websiteCarePlans } from "@/lib/services-detail";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Anotherly Studio",
  description: "Transparent ballpark pricing for branding, websites, and marketing.",
};

export default function PricingPage() {
  return (
    <div className="jelly-page-pad">
      <JellyReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Pricing</p>
        <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          Packages &amp; ballparks
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          Final quotes depend on scope — these ranges come from our current service sheet. Every project starts with a
          short call so we&apos;re aligned before you commit.
        </p>
      </JellyReveal>

      <ul className="mt-10 flex flex-col gap-8">
        {mainServices.map((s, i) => (
          <JellyReveal key={s.id} delay={i * 0.05}>
            <li className="jelly-pricing-block" id={s.id}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-[var(--ink)] sm:text-2xl">{s.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)] sm:text-base">{s.lead}</p>
                </div>
                {s.estimate ? (
                  <p className="jelly-pricing-estimate shrink-0">{s.estimate}</p>
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
              <Link href="/contact" className="jelly-cta-primary mt-6 inline-flex">
                Begin the Dialogue
              </Link>
            </li>
          </JellyReveal>
        ))}
      </ul>

      <section className="mt-14 scroll-mt-28 border-t border-[var(--glass-border)] pt-12" id="care">
        <JellyReveal>
          <h2 className="font-display text-xl font-bold text-[var(--ink)] sm:text-2xl">Care &amp; subscriptions</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            Same plans as on Services — hosting hygiene, fixes, and optional embedded hours.{" "}
            <Link href="/services#care" className="jelly-inline-svc-link">
              Full detail →
            </Link>
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {websiteCarePlans.map((plan) => (
              <li key={plan.name} className="jelly-service-tier">
                <p className="font-display text-sm font-semibold text-[var(--ink)]">{plan.name}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent-teal)]">
                  {plan.estimate}
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{plan.lead}</p>
                <ul className="jelly-tier-includes">
                  {plan.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </JellyReveal>
      </section>

      <JellyReveal>
        <p className="jelly-bundle-callout mt-12 max-w-3xl">{bundleDiscountCopy}</p>
      </JellyReveal>
    </div>
  );
}
