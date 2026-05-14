import Link from "next/link";

export function JellyFooter() {
  return (
    <footer className="jelly-site-footer jelly-site-footer--play jelly-slab-width px-6 py-7 sm:px-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="jelly-footer-tagline text-center text-[0.8125rem] leading-relaxed text-[var(--ink)] sm:text-sm md:text-left">
          © anotherly {new Date().getFullYear()}
        </p>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-1 text-[0.8125rem] font-semibold text-[var(--text-muted)] sm:text-sm md:justify-end"
          aria-label="Social and legal"
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
          <Link href="/contact" className="jelly-footer-link px-1.5 py-1">
            Contact
          </Link>
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
