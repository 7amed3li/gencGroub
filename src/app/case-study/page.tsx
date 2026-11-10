import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";

export const metadata: Metadata = constructMetadata({
  title: "Hamed Mohamed — 3D & AI Dijital Mimari Vaka Çalışması | Creative Dev",
  description:
    "Yazılım mühendisi Hamed Mohamed tarafından geliştirilen etkileşimli 3D ve AI destekli mekânsal mimari konsept stüdyosu ve web teknolojileri vaka çalışması.",
  path: "/case-study",
  ogImage: "/images/hero-construction.png",
});

export default function RootCaseStudyPage() {
  return <CaseStudyView />;
}

