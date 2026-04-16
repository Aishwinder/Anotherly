"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LiquidMetalButton } from "@/components/LiquidMetalButton";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={[
          "glass-nav glow-nav mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-3 py-2.5 sm:px-4",
          scrolled ? "glass-nav-scrolled" : "",
        ].join(" ")}
      >
        <Link href="/" className="relative flex items-center gap-2" aria-label="Anotherly home">
          <Image
            src="/assets/logo-chrome-dark.png"
            alt=""
            width={140}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
          <span className="sr-only">Anotherly</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-200/85 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LiquidMetalButton href="#contact">Let&apos;s Talk</LiquidMetalButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-[0_0_20px_rgba(56,189,248,0.08)] backdrop-blur md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass-nav glow-nav mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-slate-100/90 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2">
                <LiquidMetalButton href="#contact" className="w-full justify-center">
                  Let&apos;s Talk
                </LiquidMetalButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
