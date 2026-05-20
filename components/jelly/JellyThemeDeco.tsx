import type { CSSProperties } from "react";
import Image from "next/image";
import {
  splatterSrc,
  THEME_STAR,
  themeDecoFilter,
  type ThemeDecoPreset,
  type ThemeDecoPresetKey,
  THEME_DECO_PRESETS,
} from "@/lib/theme-decorations";

type Placement =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center-left"
  | "center-right";

const PLACEMENT: Record<Placement, string> = {
  "top-left": "left-0 top-0 -translate-x-[28%] -translate-y-[18%]",
  "top-right": "right-0 top-0 translate-x-[22%] -translate-y-[12%]",
  "bottom-left": "left-0 bottom-0 -translate-x-[24%] translate-y-[16%]",
  "bottom-right": "right-0 bottom-0 translate-x-[20%] translate-y-[14%]",
  "center-left": "left-0 top-1/2 -translate-x-[32%] -translate-y-1/2",
  "center-right": "right-0 top-1/2 translate-x-[28%] -translate-y-1/2",
};

const SIZE_CLASS = {
  xs: "jelly-theme-deco--xs",
  sm: "jelly-theme-deco--sm",
  md: "jelly-theme-deco--md",
  lg: "jelly-theme-deco--lg",
} as const;

type Props = {
  preset: ThemeDecoPresetKey | ThemeDecoPreset;
  placement?: Placement;
  className?: string;
};

function resolvePreset(preset: ThemeDecoPresetKey | ThemeDecoPreset): ThemeDecoPreset {
  return typeof preset === "string" ? THEME_DECO_PRESETS[preset] : preset;
}

/**
 * Theme-pack splatters & hand-drawn star — consistent sizing, hue, rotation.
 * Uses CSS background for splatters (contain, no stretch) and Image for the star.
 */
export function JellyThemeDeco({ preset: presetKey, placement = "top-right", className = "" }: Props) {
  const preset = resolvePreset(presetKey);
  const scale = preset.scale ?? 1;
  const transform = `rotate(${preset.rotate}deg) scale(${scale})`;
  const filter = themeDecoFilter(preset.tone);
  const placementClass = PLACEMENT[placement];
  const sizeClass = SIZE_CLASS[preset.size];

  const opacityStyle = {
    "--theme-deco-o-light": preset.opacityLight,
    "--theme-deco-o-dark": preset.opacityDark,
  } as CSSProperties;

  if (preset.kind === "star") {
    const dim =
      preset.size === "xs"
        ? 56
        : preset.size === "sm"
          ? 72
          : preset.size === "md"
            ? 96
            : 120;

    return (
      <Image
        src={THEME_STAR}
        alt=""
        width={dim}
        height={dim}
        className={[
          "jelly-theme-deco jelly-theme-deco--star pointer-events-none absolute -z-[1]",
          sizeClass,
          placementClass,
          className,
        ].join(" ")}
        style={{ ...opacityStyle, transform, filter }}
        aria-hidden
      />
    );
  }

  const src = splatterSrc(preset.splatter ?? 1);

  return (
    <span
      className={[
        "jelly-theme-deco jelly-theme-deco--splatter pointer-events-none absolute -z-[1]",
        sizeClass,
        placementClass,
        className,
      ].join(" ")}
      style={{
        ...opacityStyle,
        transform,
        filter,
        backgroundImage: `url(${src})`,
      }}
      aria-hidden
    />
  );
}
