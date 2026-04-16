import Link from "next/link";

export function JellyFooter() {
  return (
    <footer className="jelly-site-footer mt-auto border-t border-[var(--glass-border)] px-5 py-6 sm:px-6">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
        <p className="text-center text-xs text-[var(--text-muted)] sm:text-left">
          © 2026 Anotherly Studio ·{" "}
          <Link href="/contact" className="jelly-footer-link">
            Contact
          </Link>
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-1 text-xs font-semibold text-[var(--text-muted)] sm:justify-end"
          aria-label="Social"
        >
          <a
            href="https://www.instagram.com"
            className="jelly-footer-link px-1.5 py-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span aria-hidden className="opacity-40">
            |
          </span>
          <a
            href="https://www.linkedin.com"
            className="jelly-footer-link px-1.5 py-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden className="opacity-40">
            |
          </span>
          <a
            href="https://twitter.com"
            className="jelly-footer-link px-1.5 py-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <span aria-hidden className="opacity-40">
            |
          </span>
          <a
            href="https://www.behance.net"
            className="jelly-footer-link px-1.5 py-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
          <span aria-hidden className="opacity-40">
            |
          </span>
          <Link href="/services#privacy" className="jelly-footer-link px-1.5 py-1">
            Privacy
          </Link>
          <span aria-hidden className="opacity-40">
            |
          </span>
          <Link href="/terms" className="jelly-footer-link px-1.5 py-1">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
