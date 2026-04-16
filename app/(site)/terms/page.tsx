import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — Anotherly Studio",
  description: "Terms of service placeholder for Anotherly Studio.",
};

export default function TermsPage() {
  return (
    <div className="jelly-page-pad">
      <h1 className="font-display text-3xl font-bold text-[var(--ink)]">Terms</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
        This is a placeholder terms page. Replace with your legal terms for engagements, deposits, deliverables,
        intellectual property, and limitation of liability — ideally reviewed by counsel for your jurisdiction.
      </p>
    </div>
  );
}
