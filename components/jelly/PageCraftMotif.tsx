/** Lightweight SVG chrome — design / build cues. Keep `aria-hidden` on parent. */

export function PageCraftMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 88c36-52 96-64 156-64s120 28 156 88"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M56 28v32M72 44H40M328 76l20-20m0 0l20 20m-20-20v40"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path d="M200 24v72M164 60h72" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 6" opacity="0.22" />
      <circle cx="200" cy="60" r="4" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

export function PageCraftGrid({ className = "" }: { className?: string }) {
  return (
    <div className={["jelly-craft-grid-bg", className].filter(Boolean).join(" ")} aria-hidden />
  );
}
