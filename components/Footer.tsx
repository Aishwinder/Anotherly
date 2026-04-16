"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const social = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-28 px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-cosmos-900/55 to-black/70 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.65),0_0_80px_rgba(56,189,248,0.06)] ring-1 ring-white/5 sm:p-10">
          <div className="noise-overlay rounded-[2rem] opacity-[0.07]" aria-hidden />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo-chrome-dark.png"
                  alt=""
                  width={160}
                  height={44}
                  className="h-9 w-auto"
                />
                <span className="sr-only">Anotherly</span>
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-300/85">
                Ready to launch something that feels timeless and unmistakably yours? Tell us about the orbit you want
                to occupy—we&apos;ll meet you there.
              </p>

              <div className="mt-8 space-y-2 text-sm">
                <a className="block text-white hover:text-sky-200" href="mailto:hello@anotherly.studio">
                  hello@anotherly.studio
                </a>
                <p className="text-slate-400">Remote-first · Earth · Solar system adjacent</p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Navigate</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    ["#services", "Services"],
                    ["#projects", "Projects"],
                    ["#about", "About"],
                    ["#contact", "Contact"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="text-slate-200/85 hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Social</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {social.map((s) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 backdrop-blur hover:border-white/20 hover:bg-white/10"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Anotherly. All rights reserved.</p>
            <p className="text-slate-500">Crafted with glass, chrome, and cosmic restraint.</p>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_62%)] blur-3xl"
          />
        </div>
      </div>
    </footer>
  );
}
