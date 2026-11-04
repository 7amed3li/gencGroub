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
import { constructMetadata, getOrganizationSchema } from "@/lib/seo";

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
  title: "Genç Group — Otomotiv & İnşaat",
  description:
    "Genç Group; AutoClub Merter ile kaporta onarımı, oto boya ve boyasız göçük düzeltme hizmetlerinde, Genç Group İnşaat ile modern yapı ve mimari çözümlerde faaliyet gösterir.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html
      lang="tr"
      dir="ltr"
      className={`${cormorant.variable} ${plusJakarta.variable} ${notoKufiArabic.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-[#F3F0E8] text-[#45483F] antialiased">
        <LanguageProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
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
