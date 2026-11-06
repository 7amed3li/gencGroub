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
const ORG_ID = `${SITE_URL}/#organization`;

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
        sameAs: ["https://www.instagram.com/autoclubmerter/"],
        subOrganization: [
          { "@id": AUTOCLUB_ID },
          {
            "@type": "Organization",
            name: "Genç Group İnşaat",
            url: `${SITE_URL}/construction`,
          },
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

/** Local business entity for the automotive workshop (data mirrors the visible contact info). */
export function getAutoClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": AUTOCLUB_ID,
    name: "AutoClub Merter",
    url: `${SITE_URL}/automotive`,
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
    areaServed: { "@type": "City", name: "İstanbul" },
    sameAs: ["https://www.instagram.com/autoclubmerter/"],
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
