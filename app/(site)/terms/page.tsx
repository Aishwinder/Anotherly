import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — Anotherly Studio",
  description: "Terms of service placeholder for Anotherly Studio.",
};

export default function TermsPage() {
  return (
    <div className="jelly-page-pad">
      <JellyGlassSlab className="relative overflow-hidden">
        <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
        <div className="relative z-[1]">
          <h1 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold tracking-[-0.035em] text-[var(--ink)]">Terms</h1>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--text-muted)]">
            This is a placeholder terms page. Replace with your legal terms for engagements, deposits, deliverables,
            intellectual property, and limitation of liability — ideally reviewed by counsel for your jurisdiction.
          </p>
        </div>
      </JellyGlassSlab>
    </div>
  );
}
