import type { ReactNode } from "react";

export type JellyGlassSlabTone = "default" | "hero" | "wash" | "deep";

export function JellyGlassSlab({
  children,
  tone = "default",
  className = "",
  id,
  padded = true,
}: {
  children: ReactNode;
  tone?: JellyGlassSlabTone;
  className?: string;
  id?: string;
  /** Extra inner padding slab treatment (sections already using jelly-section spacing can disable). */
  padded?: boolean;
}) {
  return (
    <div
      id={id}
      className={[
        "jelly-glass-slab jelly-slab-width",
        tone === "hero" && "jelly-glass-slab--hero",
        tone === "wash" && "jelly-glass-slab--wash",
        tone === "deep" && "jelly-glass-slab--deep",
        !padded && "jelly-glass-slab--flush",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="jelly-glass-slab__shine" aria-hidden />
      <div className="jelly-glass-slab__content">{children}</div>
    </div>
  );
}

export function JellySectionBackdrop({
  variant = "aurora",
  className = "",
}: {
  variant?: "aurora" | "mesh" | "orbit";
  className?: string;
}) {
  return <div className={["jelly-section-backdrop", `jelly-section-backdrop--${variant}`, className].filter(Boolean).join(" ")} aria-hidden />;
}
