import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gencgroup.com.tr";
export const SITE_NAME = "Genç Group";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function constructMetadata({
  title,
  description,
  path = "/",
  ogImage = "/images/hero-automotive.png",
}: PageSEOProps): Metadata {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? `${SITE_NAME} — Otomotiv & İnşaat` : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "tr-TR": canonicalUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Verified Organization & AutomotiveBusiness JSON-LD Schema.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Genç Group",
    url: SITE_URL,
    description:
      "Otomotiv (AutoClub Merter — Platform) ve İnşaat (Genç Group İnşaat) sektörlerinde faaliyet gösteren kurumsal grup.",
    sameAs: ["https://www.instagram.com/autoclubmerter/"],
    subOrganization: [
      {
        "@type": "AutomotiveBusiness",
        name: "AutoClub Merter — Platform (Genç Group Otomotiv)",
        url: `${SITE_URL}/automotive`,
        image: `${SITE_URL}/images/instagram/logo-autoclubmerter.jpg`,
        telephone: "+90-543-819-30-24",
        email: "merter@autoclub.com.tr",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Abdurrahman Nafiz Gürman Mah., General Ali Rıza Gürcan Cad., Platform Sitesi Otoparkı / Merter Suites",
          addressLocality: "Güngören / Merter",
          addressRegion: "İstanbul",
          postalCode: "34160",
          addressCountry: "TR",
        },
        sameAs: ["https://www.instagram.com/autoclubmerter/"],
        areaServed: {
          "@type": "City",
          name: "İstanbul",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Otomotiv Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kaporta Onarımı ve Tampon Onarımı",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Oto Boya, Black Pack Dönüşümü, PPF ve Seramik Kaplama",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Boyasız Göçük Düzeltme",
              },
            },
          ],
        },
      },
      {
        "@type": "Organization",
        name: "Genç Group İnşaat",
        url: `${SITE_URL}/construction`,
        areaServed: {
          "@type": "Country",
          name: "Türkiye",
        },
      },
    ],
  };
}
