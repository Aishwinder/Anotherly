"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { JellyBackground } from "@/components/jelly/JellyBackground";
import { JellyFooter } from "@/components/jelly/JellyFooter";
import { ScrollProgress } from "@/components/jelly/ScrollProgress";
import { ThemeToggle } from "@/components/jelly/ThemeToggle";
import { useLenisRoot } from "@/components/jelly/useLenisRoot";

export function JellySiteLayout({ children }: { children: ReactNode }) {
  useLenisRoot();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [spacerPx, setSpacerPx] = useState(56);
  const [headerConcealed, setHeaderConcealed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollRef = useRef({ lastY: 0, ticking: false });

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const sync = () => {
      const st = getComputedStyle(el);
      const mb = parseFloat(st.marginBottom) || 0;
      const topPx = parseFloat(st.top) || 0;
      setSpacerPx(Math.ceil(el.offsetHeight + topPx + mb + 22));
    };
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    sync();
    return () => ro.disconnect();
  }, [menuOpen]);

  useEffect(() => {
    if (prefersReducedMotion) setHeaderConcealed(false);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const topUnlock = 56;
    const deltaNeed = 8;

    const onScroll = () => {
      if (scrollRef.current.ticking) return;
      scrollRef.current.ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop;
        const prev = scrollRef.current.lastY;
        const d = y - prev;
        scrollRef.current.lastY = y;
        scrollRef.current.ticking = false;

        if (y < topUnlock) {
          setHeaderConcealed(false);
          return;
        }
        if (d > deltaNeed) setHeaderConcealed(true);
        else if (d < -deltaNeed) setHeaderConcealed(false);
      });
    };

    scrollRef.current.lastY = window.scrollY || document.documentElement.scrollTop;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("jelly-lenis-scroll", onScroll as EventListener);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("jelly-lenis-scroll", onScroll as EventListener);
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <ScrollProgress />
      <JellyBackground />
      <div className="jelly-site-chrome relative z-10 box-border flex w-full min-w-0 flex-col items-stretch px-3 max-[380px]:px-2.5 sm:px-6">
        <header
          ref={headerRef}
          className={[
            "jelly-header-float jelly-header-float--fixed jelly-header-float--v2 jelly-header-float--photo-match shrink-0",
            prefersReducedMotion ? "" : headerConcealed ? "jelly-header-float--concealed" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="jelly-header-float__frame">
            <div className="jelly-header-float__stack jelly-slab-width w-full min-w-0">
              <div className="jelly-header-float__bar jelly-header-float__bar--ref">
                <Link
                  href="/"
                  className="jelly-header-wordmark jelly-header-wordmark--ref font-display"
                  aria-label="Anotherly home"
                  data-jelly-chrome-wordmark
                >
                  anotherly
                </Link>

                <nav
                  className="jelly-header-float__nav jelly-header-float__nav--centered hidden items-center justify-center gap-1 lg:flex lg:gap-2"
                  aria-label="Primary"
                >
                  <Link
                    href="/projects"
                    className={["jelly-header-float__link jelly-header-float__link--agency", pathname === "/projects" ? "jelly-header-float__link--active" : ""]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    WORK
                  </Link>
                  <Link href="/#studio" className="jelly-header-float__link jelly-header-float__link--agency">
                    STUDIO
                  </Link>
                  <Link
                    href="/services"
                    className={["jelly-header-float__link jelly-header-float__link--agency", pathname === "/services" ? "jelly-header-float__link--active" : ""]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    SERVICES
                  </Link>
                  <Link
                    href="/journal"
                    className={["jelly-header-float__link jelly-header-float__link--agency", pathname === "/journal" || pathname.startsWith("/journal/") ? "jelly-header-float__link--active" : ""]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    JOURNAL
                  </Link>
                  <Link
                    href="/contact"
                    className={["jelly-header-float__link jelly-header-float__link--agency", pathname === "/contact" ? "jelly-header-float__link--active" : ""]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    CONTACT
                  </Link>
                </nav>

                <div className="jelly-header-float__endcap">
                  <span className="hidden sm:inline-flex sm:items-center">
                    <ThemeToggle variant="minimal" />
                  </span>
                  <Link
                    href="/contact"
                    className="jelly-header-cta jelly-header-cta--float jelly-header-cta--purple hidden sm:inline-flex"
                    data-jelly-header-cta
                  >
                    Let&apos;s Talk
                  </Link>
                  <button
                    type="button"
                    className="jelly-header-menu-btn jelly-header-menu-btn--island lg:hidden"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-expanded={menuOpen}
                    aria-controls="jelly-header-mobile-panel"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                  >
                    {menuOpen ? <X className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} aria-hidden /> : <Menu className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} aria-hidden />}
                  </button>
                </div>
              </div>

              {menuOpen ? (
                <div id="jelly-header-mobile-panel" className="jelly-header-mobile-panel lg:hidden">
                  <nav className="jelly-header-mobile-panel__nav" aria-label="Mobile primary">
                    <Link
                      href="/projects"
                      className={["jelly-header-mobile-panel__link", pathname === "/projects" ? "jelly-header-mobile-panel__link--active" : ""]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => setMenuOpen(false)}
                    >
                      WORK
                    </Link>
                    <Link href="/#studio" className="jelly-header-mobile-panel__link" onClick={() => setMenuOpen(false)}>
                      STUDIO
                    </Link>
                    <Link
                      href="/services"
                      className={["jelly-header-mobile-panel__link", pathname === "/services" ? "jelly-header-mobile-panel__link--active" : ""]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => setMenuOpen(false)}
                    >
                      SERVICES
                    </Link>
                    <Link
                      href="/journal"
                      className={["jelly-header-mobile-panel__link", pathname === "/journal" || pathname.startsWith("/journal/") ? "jelly-header-mobile-panel__link--active" : ""]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => setMenuOpen(false)}
                    >
                      JOURNAL
                    </Link>
                    <Link
                      href="/contact"
                      className={["jelly-header-mobile-panel__link", pathname === "/contact" ? "jelly-header-mobile-panel__link--active" : ""]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => setMenuOpen(false)}
                    >
                      CONTACT
                    </Link>
                    <Link href="/contact" className="jelly-header-mobile-panel__cta" onClick={() => setMenuOpen(false)}>
                      Let&apos;s Talk
                    </Link>
                    <div className="jelly-header-mobile-panel__theme-row flex justify-center pt-2">
                      <ThemeToggle variant="minimal" />
                    </div>
                  </nav>
                </div>
              ) : null}
            </div>
          </div>
        </header>

        <div className="jelly-header-spacer shrink-0" style={{ height: spacerPx }} aria-hidden />

        <div className="jelly-main-panel relative z-[1] flex w-full min-w-0 flex-col">
          <main className="jelly-panel-main flex min-w-0 flex-col">{children}</main>
          <JellyFooter />
        </div>
      </div>
    </>
  );
}
