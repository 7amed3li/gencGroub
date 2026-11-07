import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";

export const metadata: Metadata = constructMetadata({
  title: "İşinize Yön Veren Mimari — Mimari Vaka Çalışması | Genç Group İnşaat",
  description:
    "Genç Group İnşaat için ticari yapı konseptini 3D ve AI destekli görsel keşiflerle anlatan mimari vaka çalışması.",
  path: "/case-study",
  ogImage: "/images/hero-construction.png",
});

export default function RootCaseStudyPage() {
  return <CaseStudyView />;
}

