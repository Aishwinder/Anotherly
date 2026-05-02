"use client";

type GeoVariant = "arc" | "orbit" | "lines";

const viewBoxes: Record<GeoVariant, string> = {
  arc: "0 0 360 200",
  orbit: "0 0 320 320",
  lines: "0 0 400 240",
};

/**
 * Minimal hero-adjacent geometry — SVG only, opacity via CSS, no JS scroll hooks.
 */
export function JellySectionGeo({
  variant = "arc",
  className,
}: {
  variant?: GeoVariant;
  className?: string;
}) {
  const vb = viewBoxes[variant];

  return (
    <div className={["jelly-section-geo", `jelly-section-geo--${variant}`, className].filter(Boolean).join(" ")} aria-hidden>
      <svg className="jelly-section-geo__svg" viewBox={vb} fill="none" xmlns="http://www.w3.org/2000/svg">
        {variant === "arc" ? (
          <>
            <path
              d="M8 168c48-72 120-108 196-108s148 36 196 108"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M52 44c28 40 76 60 124 60s96-20 124-60"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.3"
            />
            <circle cx="180" cy="96" r="2.5" fill="currentColor" opacity="0.25" />
          </>
        ) : null}
        {variant === "orbit" ? (
          <>
            <circle cx="160" cy="160" r="118" stroke="currentColor" strokeWidth="0.9" opacity="0.22" />
            <circle cx="160" cy="160" r="78" stroke="currentColor" strokeWidth="0.75" opacity="0.18" strokeDasharray="4 10" />
            <path d="M248 96l28-28M276 68v40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.28" />
          </>
        ) : null}
        {variant === "lines" ? (
          <>
            <path d="M12 200V40M12 40h88M116 200V72M116 72h108" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.32" />
            <path d="M280 24v168M280 120h96" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.22" />
            <circle cx="312" cy="52" r="2" fill="currentColor" opacity="0.2" />
          </>
        ) : null}
      </svg>
    </div>
  );
}

