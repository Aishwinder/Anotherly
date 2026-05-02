"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { JellyBackground } from "@/components/jelly/JellyBackground";
import { JellyFooter } from "@/components/jelly/JellyFooter";
import { PageLoader } from "@/components/jelly/PageLoader";
import { ScrollTalkFab } from "@/components/jelly/ScrollTalkFab";
import { ScrollProgress } from "@/components/jelly/ScrollProgress";
import { ThemeToggle } from "@/components/jelly/ThemeToggle";
import { useLenisRoot } from "@/components/jelly/useLenisRoot";
import { useScrolledPast } from "@/hooks/useScrolledPast";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
] as const;

export function JellySiteLayout({ children }: { children: ReactNode }) {
  useLenisRoot();
  const pathname = usePathname();
  const projectsDense = pathname === "/projects";
  const scrolledPast = useScrolledPast(140);
  const showTalkFab = scrolledPast && pathname !== "/contact";

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
                    <nav className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2" aria-label="Primary">
                      {nav.map((item) => {
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
                      <Link href="/contact" className="jelly-header-cta" data-jelly-header-cta>
                        Let&apos;s talk
                      </Link>
                    ) : (
                      <span className="jelly-header-cta-placeholder" aria-hidden />
                    )}
                  </div>
                </div>
              </header>

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
