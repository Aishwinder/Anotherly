"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { JellyBackground } from "@/components/jelly/JellyBackground";
import { JellyFooter } from "@/components/jelly/JellyFooter";
import { PageLoader } from "@/components/jelly/PageLoader";
import { ScrollTalkFab } from "@/components/jelly/ScrollTalkFab";
import { ScrollProgress } from "@/components/jelly/ScrollProgress";
import { ThemeToggle } from "@/components/jelly/ThemeToggle";
import { useLenisRoot } from "@/components/jelly/useLenisRoot";
import { useScrolledPast } from "@/hooks/useScrolledPast";

const primaryNav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
] as const;

const mobileNavExtras = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
] as const;

export function JellySiteLayout({ children }: { children: ReactNode }) {
  useLenisRoot();
  const pathname = usePathname();
  const projectsDense = pathname === "/projects";
  const scrolledPast = useScrolledPast(140);
  const showTalkFab = scrolledPast && pathname !== "/contact";
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  return (
    <>
      <ScrollProgress />
      <JellyBackground />
      <div
        className={[
          "jelly-site-chrome relative z-10 box-border flex w-full min-w-0 flex-col items-center px-3 pt-3 max-[380px]:px-2.5 sm:px-6 sm:pt-6",
          showTalkFab ? "jelly-site-chrome--fab-active" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="jelly-shell-outer flex w-full max-w-[1120px] flex-col">
          <div className="jelly-shell-wrap relative flex w-full min-w-0 flex-col">
            <div className="jelly-panel-ambience" aria-hidden>
              <span className="jelly-ambience-flow" />
              <span className="jelly-ambience-bokeh jelly-ambience-bokeh--a" />
              <span className="jelly-ambience-bokeh jelly-ambience-bokeh--b" />
              <span className="jelly-ambience-bokeh jelly-ambience-bokeh--c" />
            </div>

            <div
              className={[
                "jelly-main-panel relative z-[1] flex w-full min-w-0 flex-col",
                projectsDense ? "jelly-main-panel--projects-dense" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <header className="jelly-panel-header shrink-0">
                <div className="jelly-panel-header__inner">
                  <Link href="/" className="jelly-wordmark-plain w-fit shrink-0" aria-label="Anotherly home" data-jelly-chrome-wordmark>
                    anotherly
                  </Link>
                  <div className="jelly-panel-header__actions flex min-w-0 flex-wrap items-center justify-end gap-2 sm:gap-2.5">
                    <ThemeToggle />
                    <nav className="hidden items-center justify-end gap-1.5 md:flex sm:gap-2" aria-label="Primary">
                      {primaryNav.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={["jelly-nav-pill", active ? "jelly-nav-pill--active" : ""].filter(Boolean).join(" ")}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </nav>
                    {!showTalkFab ? (
                      <Link href="/contact" className="jelly-header-cta hidden md:inline-flex" data-jelly-header-cta>
                        Let&apos;s talk
                      </Link>
                    ) : (
                      <span className="jelly-header-cta-placeholder hidden md:inline-block" aria-hidden />
                    )}
                    <button
                      type="button"
                      className="jelly-header-menu-btn md:hidden"
                      aria-expanded={mobileNavOpen}
                      aria-controls="jelly-mobile-nav"
                      onClick={() => setMobileNavOpen((v) => !v)}
                    >
                      {mobileNavOpen ? <X className="h-5 w-5" strokeWidth={2} aria-hidden /> : <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />}
                      <span className="sr-only">{mobileNavOpen ? "Close menu" : "Open menu"}</span>
                    </button>
                  </div>
                </div>
              </header>

              <AnimatePresence>
                {mobileNavOpen ? (
                  <motion.nav
                    id="jelly-mobile-nav"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="jelly-mobile-nav md:hidden"
                    aria-label="Mobile navigation"
                  >
                    <div className="jelly-mobile-nav__inner">
                      {mobileNavExtras.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={["jelly-mobile-nav__link", active ? "font-bold text-[var(--ink)]" : ""].filter(Boolean).join(" ")}
                            onClick={() => setMobileNavOpen(false)}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                      {primaryNav.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={["jelly-mobile-nav__link", active ? "font-bold text-[var(--ink)]" : ""].filter(Boolean).join(" ")}
                            onClick={() => setMobileNavOpen(false)}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                      <Link
                        href="/contact"
                        className="jelly-header-cta jelly-mobile-nav__cta"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        Let&apos;s talk
                      </Link>
                    </div>
                  </motion.nav>
                ) : null}
              </AnimatePresence>

              <main className="jelly-panel-main flex min-w-0 flex-col">{children}</main>
              <JellyFooter />
            </div>
          </div>
        </div>
      </div>
      <ScrollTalkFab scrolledPast={showTalkFab} />
      <PageLoader />
    </>
  );
}
