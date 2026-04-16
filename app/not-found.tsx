import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[var(--cream)] px-6 text-center text-[var(--ink)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">404</p>
      <h1 className="font-display mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-[var(--text-muted)]">That path doesn&apos;t exist. Head back to the studio.</p>
      <Link href="/" className="jelly-cta-pill mt-8">
        Back home
      </Link>
    </div>
  );
}
