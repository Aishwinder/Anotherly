import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Syne } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "block",
  preload: true,
  adjustFontFallback: true,
});

const fontHand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anotherly.studio"),
  title: "Anotherly Studio — Brand & digital craft",
  description:
    "Anotherly Studio — distinctive brands, intuitive interfaces, and high-performing websites. Identity, interfaces, and launch moments with opinion and restraint.",
  icons: {
    icon: "/assets/logo-minimal.png",
    apple: "/assets/logo-minimal.png",
  },
  openGraph: {
    title: "Anotherly Studio",
    description:
      "Brand and digital craft for people who care how things feel — anotherly.studio",
    type: "website",
    url: "https://anotherly.studio",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F7FC",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <body className={`${fontSans.variable} ${fontDisplay.variable} ${fontHand.variable} font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
