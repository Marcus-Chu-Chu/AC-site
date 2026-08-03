import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import RevealController from "@/components/RevealController";
import { profile } from "@/lib/content";
import "./globals.css";

/* Display: Bricolage Grotesque. Its variable optical-size axis controls the
   ink traps — notches cut into letterforms so ink doesn't fill the corners on
   press. The typeface carries the same idea as the rest of the page. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--f-display",
  axes: ["opsz", "wdth"],
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--f-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--f-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashleychiang.example"),
  title: {
    default: `${profile.name} — Marketing Coordinator`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Ashley Chiang is a Chicago-area marketing professional pairing creative instinct with evidence — brand, social, research, and campaign execution. UIUC Gies alum.",
  keywords: [
    "Ashley Chiang",
    "marketing",
    "brand strategy",
    "social media",
    "market research",
    "Chicago",
    "UIUC Gies",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Marketing Coordinator`,
    description:
      "Creative instinct, backed by evidence. Brand, social, research, and campaign execution.",
    type: "profile",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf8ff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <RevealController />
        {children}
      </body>
    </html>
  );
}
