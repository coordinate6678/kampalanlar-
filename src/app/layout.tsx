import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { TopAdBanner } from "@/components/ads/TopAdBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToMain } from "@/components/layout/SkipToMain";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo/json-ld";
import { rootMetadata, viewport } from "@/lib/seo";
import "./globals.css";

export { viewport };
export const metadata: Metadata = rootMetadata;

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <SkipToMain />
        <JsonLd data={[buildWebSiteJsonLd(), buildOrganizationJsonLd()]} />
        <div className="sticky top-0 z-50 relative">
          <Header />
          <TopAdBanner />
        </div>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
