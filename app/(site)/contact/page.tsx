import { ContactForm } from "@/components/contact/ContactForm";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Anotherly Studio",
  description:
    "Tell us your budget and goals — we’ll reply with a clear plan and exactly what you get. hello@anotherly.studio",
};

export default function ContactPage() {
  return (
    <div className="jelly-page-pad jelly-contact-page">
      <div className="jelly-contact-deco" aria-hidden>
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="jelly-contact-deco__svg">
          <path
            d="M24 36h52v52H24V36zm220 76h52v52h-52v-52z"
            stroke="currentColor"
            strokeWidth="1.1"
            opacity="0.2"
          />
          <path
            d="M108 100h104M108 108h72M108 116h88"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.16"
          />
          <circle cx="160" cy="48" r="22" stroke="currentColor" strokeWidth="0.9" opacity="0.14" />
        </svg>
      </div>
      <div className="relative z-[1]">
        <JellyReveal>
          <div className="mb-6 flex justify-end sm:mb-0 sm:justify-start">
            <PageCraftMotif className="h-auto w-36 text-[var(--accent-teal)] opacity-35" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Contact</p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Begin the Dialogue
          </h1>
          <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 max-w-2xl">
            Share what you&apos;re building, your timeline, and a rough budget — we respond with honest fit, next steps,
            and no pressure. Prefer email? Write directly below.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[var(--text-muted)]">
            <li>
              <strong className="text-[var(--ink)]">Email:</strong>{" "}
              <a href="mailto:hello@anotherly.studio" className="jelly-inline-contact-link">
                hello@anotherly.studio
              </a>
            </li>
          </ul>
        </JellyReveal>

        <JellyReveal delay={0.06}>
          <ContactForm />
        </JellyReveal>

        <JellyReveal delay={0.1}>
          <div id="audit" className="jelly-cta-band mt-12 scroll-mt-28">
            <div>
              <h2 className="jelly-cta-band-title">Quick clarity call</h2>
              <p className="jelly-cta-band-copy">
                Book a short call and we&apos;ll give you{" "}
                <strong className="font-semibold text-[var(--ink)]">three concrete improvements</strong> for your current
                brand or site — no pitch deck, no obligation.
              </p>
            </div>
            <a
              href="mailto:hello@anotherly.studio?subject=Clarity%20call%20request"
              className="jelly-cta-pill jelly-cta-pill--emphasis shrink-0"
            >
              Email to book
            </a>
          </div>
        </JellyReveal>
      </div>
    </div>
  );
}
