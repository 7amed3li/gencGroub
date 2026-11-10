import type { MetadataRoute } from "next";
import { CONTENT_LAST_UPDATED, SITE_URL } from "@/lib/seo";
import { AUTOMOTIVE_SERVICE_PAGES } from "@/content/automotiveServicePages";

/**
 * Only indexable, canonical URLs on the official domain.
 * Construction project pages are intentionally excluded (noindex) until
 * verified project data (location, year, scope, original photos) is provided.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_LAST_UPDATED);

  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/automotive", priority: 0.9 },
    { path: "/automotive/services", priority: 0.8 },
    ...AUTOMOTIVE_SERVICE_PAGES.map((p) => ({
      path: `/automotive/services/${p.slug}`,
      priority: 0.8,
    })),
    { path: "/construction", priority: 0.8 },
    { path: "/construction/projects", priority: 0.8 },
    { path: "/construction/projects/zeytinburnu-seyitnizam-g33", priority: 0.85 },
    { path: "/about", priority: 0.5 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
    alternates: {
      languages: {
        tr: `${SITE_URL}${path}`,
        en: `${SITE_URL}${path}`,
        ar: `${SITE_URL}${path}`,
      },
    },
  }));
}
