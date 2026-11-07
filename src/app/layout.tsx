import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Noto_Kufi_Arabic,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingConciergeBar } from "@/components/ui/FloatingConciergeBar";
import { LanguageProvider } from "@/context/LanguageContext";
import {
  constructMetadata,
  getAutoClubSchema,
  getOrganizationSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = constructMetadata({
  title: "Genç Group | Merter Oto Kaporta, Boya & PPF · Genç Group İnşaat",
  description:
    "Genç Group; Merter / Güngören'deki AutoClub Merter atölyesinde kaporta, oto boya, boyasız göçük düzeltme ve PPF hizmetleri, Genç Group İnşaat ile yapı çözümleri sunar.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="tr"
      dir="ltr"
      suppressHydrationWarning
      className={`${cormorant.variable} ${plusJakarta.variable} ${notoKufiArabic.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-[#F3F0E8] text-[#45483F] antialiased">
        <LanguageProvider>
          {/* Footer on every page shows AutoClub Merter NAP, so the entity is site-wide. */}
          <JsonLd data={[getOrganizationSchema(), getAutoClubSchema()]} />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <FloatingConciergeBar />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
