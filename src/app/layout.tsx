import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
      className={`${cormorant.variable} ${plusJakarta.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-[#F3F0E8] text-[#45483F] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#45483F] focus:px-5 focus:py-2.5 focus:text-xs focus:font-medium focus:text-[#F3F0E8]"
        >
          Ana İçeriğe Atla
        </a>
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
        <Footer />
      </body>
    </html>
  );
}
