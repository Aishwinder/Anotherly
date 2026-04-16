import { JellySiteLayout } from "@/components/jelly/JellySiteLayout";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <JellySiteLayout>{children}</JellySiteLayout>;
}
