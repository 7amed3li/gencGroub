import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { CONSTRUCTION_PROJECT_STUDIES } from "@/content/siteData";
import { ProjectDetailPageClient } from "@/components/pages/ProjectDetailPageClient";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONSTRUCTION_PROJECT_STUDIES.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CONSTRUCTION_PROJECT_STUDIES.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({
      title: "Proje Bulunamadı | Genç Group İnşaat",
      description: "Aradığınız proje bulunamadı.",
      path: "/construction/projects",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${project.title} | Genç Group İnşaat`,
    description: project.editorialSummary,
    path: `/construction/projects/${project.slug}`,
    ogImage: project.heroImage,
    // Concept study (no verified location/year/area) — noindex until real data exists.
    noIndex: true,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = CONSTRUCTION_PROJECT_STUDIES.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageClient slug={slug} />;
}
