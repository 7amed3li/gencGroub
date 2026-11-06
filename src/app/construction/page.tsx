import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ConstructionPageClient } from "@/components/pages/ConstructionPageClient";

export const metadata: Metadata = constructMetadata({
  title: "Genç Group İnşaat — İnşaat ve Yapı Çözümleri | Genç Group",
  description:
    "Genç Group İnşaat; modern yapı anlayışı, kaliteli işçilik ve mühendislik disipliniyle profesyonel yapı çözümleri sunar.",
  path: "/construction",
  ogImage: "/images/architecture-limestone.jpg",
});

export default function ConstructionPage() {
  return <ConstructionPageClient />;
}
