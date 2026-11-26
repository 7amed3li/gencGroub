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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Genç Group 3D & AI Digital Architecture Case Study — Hamed Mohamed",
    url: "https://www.gencgroupinsaat.com.tr/case-study",
    author: {
      "@type": "Person",
      "@id": "https://www.hamedmohamed.dev/#person",
      name: "Hamed Mohamed",
      jobTitle: "Full-Stack Software Engineer",
      url: "https://www.hamedmohamed.dev",
      sameAs: [
        "https://www.hamedmohamed.dev",
        "https://www.hamedmohamed.dev/tr/case-studies/genc-group-corporate-platform",
        "https://www.hamedmohamed.dev/en/case-studies/genc-group-corporate-platform",
        "https://www.hamedmohamed.dev/ar/case-studies/genc-group-corporate-platform",
      ],
    },
    sameAs: [
      "https://www.hamedmohamed.dev/tr/case-studies/genc-group-corporate-platform",
      "https://www.hamedmohamed.dev/en/case-studies/genc-group-corporate-platform",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyView />
    </>
  );
}

