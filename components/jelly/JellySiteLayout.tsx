"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { JellyBackground } from "@/components/jelly/JellyBackground";
import { JellyFooter } from "@/components/jelly/JellyFooter";
import { PageLoader } from "@/components/jelly/PageLoader";
import { ScrollProgress } from "@/components/jelly/ScrollProgress";
import { ThemeToggle } from "@/components/jelly/ThemeToggle";
import { useLenisRoot } from "@/components/jelly/useLenisRoot";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
] as const;

export function JellySiteLayout({ children }: { children: ReactNode }) {
  useLenisRoot();
  const pathname = usePathname();

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <JellyBackground />
      <div className="relative z-10 min-h-dvh px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-6">
        <div className="jelly-shell-wrap mx-auto w-full max-w-[1120px]">
          <div className="jelly-panel-ambience" aria-hidden>
            <span className="jelly-ambience-flow" />
            <span className="jelly-ambience-bokeh jelly-ambience-bokeh--a" />
            <span className="jelly-ambience-bokeh jelly-ambience-bokeh--b" />
            <span className="jelly-ambience-bokeh jelly-ambience-bokeh--c" />
          </div>

          <div className="jelly-main-panel relative z-[1] flex min-h-[calc(100dvh-4.5rem)] flex-col overflow-hidden sm:min-h-[calc(100dvh-5.5rem)]">
            <header className="jelly-panel-header shrink-0">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <Link href="/" className="jelly-wordmark-plain w-fit" aria-label="Anotherly home" data-jelly-chrome-wordmark>
                  anotherly
                </Link>
                <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-2.5">
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
                  <Link href="/contact" className="jelly-header-cta" data-jelly-header-cta>
                    Let&apos;s talk
                  </Link>
                </div>
              </div>
            </header>

            <main className="jelly-panel-main flex min-h-0 flex-col">{children}</main>
            <JellyFooter />
          </div>
        </div>
      </div>
    </>
  );
}
