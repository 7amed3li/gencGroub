import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ConstructionProjectsPageClient } from "@/components/pages/ConstructionProjectsPageClient";

export const metadata: Metadata = constructMetadata({
  title: "Mimari Yaklaşım ve Proje Portfolyosu | Genç Group İnşaat",
  description:
    "Genç Group İnşaat mimari proje portfolyosu ve yapı yaklaşımları.",
  path: "/construction/projects",
  // Portfolio items are concept studies, not verified completed projects.
  // Keep out of the index until real project data is supplied by the owner.
  noIndex: true,
  ogImage: "/images/hero-construction.png",
});

export default function ConstructionProjectsPage() {
  return <ConstructionProjectsPageClient />;
}
