import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CONSTRUCTION_PROJECT_STUDIES } from "@/content/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/automotive",
    "/automotive/services",
    "/construction",
    "/construction/projects",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = CONSTRUCTION_PROJECT_STUDIES.map((project) => ({
    url: `${SITE_URL}/construction/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}

