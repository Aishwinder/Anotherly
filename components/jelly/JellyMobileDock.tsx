"use client";

import { Home, LayoutGrid, Layers, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/services", label: "Services", Icon: Layers },
  { href: "/projects", label: "Work", Icon: LayoutGrid },
  { href: "/contact", label: "Contact", Icon: MessageCircle },
] as const;

/** Mobile-only glass dock — hidden from `md` and up where the header carries navigation. */
export function JellyMobileDock() {
  const pathname = usePathname();

  return (
    <nav className="jelly-mobile-dock md:hidden" aria-label="Quick navigation">
      <div className="jelly-mobile-dock__glass">
        <ul className="jelly-mobile-dock__list">
          {items.map(({ href, label, Icon }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href} className="jelly-mobile-dock__item">
                <Link href={href} className={["jelly-mobile-dock__link", active ? "jelly-mobile-dock__link--active" : ""].filter(Boolean).join(" ")}>
                  <Icon className="jelly-mobile-dock__ico" strokeWidth={2} aria-hidden />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
