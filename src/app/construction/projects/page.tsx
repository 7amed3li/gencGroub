import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ConstructionProjectsPageClient } from "@/components/pages/ConstructionProjectsPageClient";

export const metadata: Metadata = constructMetadata({
  title: "İnşaat Projeleri & Mimari Portfolyo — Genç Group İnşaat",
  description:
    "Genç Group İnşaat mimari proje portfolyosu ve yapı yaklaşımları.",
  path: "/construction/projects",
  ogImage: "/images/hero-construction.png",
});

export default function ConstructionProjectsPage() {
  return <ConstructionProjectsPageClient />;
}
