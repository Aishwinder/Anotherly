"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useId, useState } from "react";

export type JellyTierLike = {
  name: string;
  estimate: string;
  /** Service tiers use `note`; care plans use `lead`. */
  note?: string;
  lead?: string;
  includes?: readonly string[];
};

/** Plan card with explicit toggle — no hover-to-expand. */
export function JellyExpandableTierCard({ tier }: { tier: JellyTierLike; summaryHint?: string }) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  const hasDetails = Boolean(tier.includes?.length);
  const lines = tier.includes ?? [];
  const note = tier.note ?? tier.lead ?? "";

  return (
    <div className={["jelly-pricing-tier", open && "jelly-pricing-tier--open"].filter(Boolean).join(" ")}>
      <div className="jelly-pricing-tier__body">
        <div className="jelly-pricing-tier__top">
          <h3 className="jelly-pricing-tier__title">{tier.name}</h3>
          <span className="jelly-pricing-tier__price">{tier.estimate}</span>
        </div>
        {note ? <p className="jelly-pricing-tier__lead">{note}</p> : null}
      </div>

      {hasDetails ? (
        <>
          <button
            type="button"
            className="jelly-pricing-tier__toggle"
            aria-expanded={open}
            aria-controls={panelId}
            id={`${panelId}-btn`}
            onClick={toggle}
          >
            <span>{open ? "Hide details" : "What's included"}</span>
            <ChevronDown className={["jelly-pricing-tier__toggle-chev", open && "jelly-pricing-tier__toggle-chev--open"].filter(Boolean).join(" ")} strokeWidth={2} aria-hidden />
          </button>
          <div
            id={panelId}
            className="jelly-pricing-tier__drawer"
            role="region"
            aria-labelledby={`${panelId}-btn`}
            aria-hidden={!open}
          >
            <div className="jelly-pricing-tier__drawer-inner">
              <ul className="jelly-pricing-tier__list">
                {lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export function JellyExpandableOfferStack({ lines, heading }: { lines: readonly string[]; heading?: string }) {
  if (!lines.length) return null;
  return (
    <div className="jelly-expand-marketing">
      <p className="jelly-expand-marketing__k">{heading ?? "Typical engagements"}</p>
      <ul className="jelly-expand-marketing__chips">
        {lines.map((line) => (
          <li key={line} className="jelly-expand-marketing__chip">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
