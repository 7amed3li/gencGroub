import type { Metadata } from "next";

/**
 * Official canonical domain (confirmed by owner; gencgroup.com.tr does not resolve).
 * Apex gencgroupinsaat.com.tr → www is a permanent (308) redirect handled by Vercel.
 * NOTE: If NEXT_PUBLIC_SITE_URL is set in Vercel, it MUST equal this value.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gencgroupinsaat.com.tr"
).replace(/\/$/, "");
export const SITE_NAME = "Genç Group";

/** Fixed content date used for sitemap lastmod (update when content changes). */
export const CONTENT_LAST_UPDATED = "2026-11-06";

interface PageSEOProps {
  /** Full, final <title>. No suffix is appended automatically. */
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  /** Set to true for pages that must not be indexed (e.g. unverified content). */
  noIndex?: boolean;
}

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export function constructMetadata({
  title,
  description,
  path = "/",
  ogImage = "/images/hero-automotive.png",
  noIndex = false,
}: PageSEOProps): Metadata {
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "tr": canonicalUrl,
        "en": canonicalUrl,
        "ar": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

/* ------------------------------------------------------------------ */
/* Structured data — only facts that are visible on the site.          */
/* No ratings, reviews, opening hours or geo until owner confirms.    */
/* ------------------------------------------------------------------ */

const AUTOCLUB_ID = `${SITE_URL}/automotive#autoclub-merter`;
const GENC_INSAAT_ID = `${SITE_URL}/construction#genc-insaat`;
const ORG_ID = `${SITE_URL}/#organization`;

const AUTOCLUB_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/AutoClub+Merter-Platform+Oto+Y%C4%B1kama+Ve+Uygulama+Merkezi/@41.0069954,28.8917124,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabba06557b241:0x1c3d83119614377c!8m2!3d41.0069954!4d28.8942927!16s%2Fg%2F11xnvpb60w";

const GENC_INSAAT_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Gen%C3%A7+%C4%B0n%C5%9Faat/@40.9977935,28.9094455,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb07fecb88c7:0x485ba9cffc5ac91!8m2!3d40.9977935!4d28.9120258!16s%2Fg%2F1tq1l4sp";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Genç Group",
        url: `${SITE_URL}/`,
        description:
          "Otomotiv (AutoClub Merter) ve inşaat (Genç Group İnşaat) alanlarında faaliyet gösteren kurumsal grup.",
        sameAs: [
          "https://www.instagram.com/autoclubmerter/",
          AUTOCLUB_MAPS_PLACE_URL,
          GENC_INSAAT_MAPS_PLACE_URL,
        ],
        subOrganization: [
          { "@id": AUTOCLUB_ID },
          { "@id": GENC_INSAAT_ID },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Genç Group",
        inLanguage: "tr-TR",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** Local business entity for the automotive workshop (verified Google Maps Place data). */
export function getAutoClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": AUTOCLUB_ID,
    name: "AutoClub Merter-Platform Oto Yıkama Ve Uygulama Merkezi",
    alternateName: "AutoClub Merter",
    url: `${SITE_URL}/automotive`,
    hasMap: AUTOCLUB_MAPS_PLACE_URL,
    image: `${SITE_URL}/images/atelier-daylight.jpg`,
    logo: `${SITE_URL}/images/instagram/logo-autoclubmerter.jpg`,
    telephone: "+90-543-819-30-24",
    email: "merter@autoclub.com.tr",
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Abdurrahman Nafiz Gürman Mah., General Ali Rıza Gürcan Cad., Platform Sitesi Otoparkı / Merter Suites",
      addressLocality: "Güngören",
      addressRegion: "İstanbul",
      postalCode: "34160",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0069954,
      longitude: 28.8942927,
    },
    areaServed: { "@type": "City", name: "İstanbul" },
    sameAs: [
      "https://www.instagram.com/autoclubmerter/",
      AUTOCLUB_MAPS_PLACE_URL,
    ],
    makesOffer: [
      { name: "Kaporta Onarımı", path: "/automotive/services/kaporta-onarimi" },
      { name: "Oto Boya", path: "/automotive/services/oto-boya" },
      { name: "Boyasız Göçük Düzeltme", path: "/automotive/services/boyasiz-gocuk-duzeltme" },
      { name: "PPF ve Seramik Kaplama", path: "/automotive/services/ppf-seramik-kaplama" },
    ].map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}${s.path}` },
    })),
  };
}

/** Local business entity for the construction company (verified Google Maps Place data). */
export function getGencInsaatSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": GENC_INSAAT_ID,
    name: "Genç İnşaat",
    alternateName: "Genç Group İnşaat",
    url: `${SITE_URL}/construction`,
    hasMap: GENC_INSAAT_MAPS_PLACE_URL,
    image: `${SITE_URL}/images/architecture-limestone.jpg`,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Telsiz Mah., 84. Sok.",
      addressLocality: "Zeytinburnu",
      addressRegion: "İstanbul",
      postalCode: "34020",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9977935,
      longitude: 28.9120258,
    },
    areaServed: { "@type": "City", name: "İstanbul" },
    sameAs: [GENC_INSAAT_MAPS_PLACE_URL],
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": AUTOCLUB_ID },
    areaServed: { "@type": "City", name: "İstanbul" },
  };
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
