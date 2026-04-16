"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * next-themes drives `data-theme="light" | "dark"` on <html> for CSS variables (no flash when used with suppressHydrationWarning).
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false} storageKey="anotherly-theme">
      {children}
    </ThemeProvider>
  );
}
