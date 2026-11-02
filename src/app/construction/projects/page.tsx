import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import { constructMetadata } from "@/lib/seo";
import { CONSTRUCTION_PROJECT_STUDIES } from "@/content/siteData";
import { ProjectCard } from "@/components/construction/ProjectCard";

export const metadata: Metadata = constructMetadata({
  title: "İnşaat Projeleri & Mimari Portfolyo — Genç Group İnşaat",
  description:
    "Genç Group İnşaat mimari proje portfolyosu ve yapı yaklaşımları.",
  path: "/construction/projects",
  ogImage: "/images/hero-construction.png",
});

export default function ConstructionProjectsPage() {
  return (
    <div className="bg-[#F3F0E8] text-[#45483F] min-h-screen pt-28">
      <section className="py-16 lg:py-24 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <Link
            href="/construction"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F] mb-8"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Genç Group İnşaat</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <h1 className="font-display-editorial text-5xl sm:text-6xl text-[#45483F]">
              Seçili Projeler ve Mimari Yaklaşımlar.
            </h1>
            <p className="text-base sm:text-lg text-[#69715F] font-light leading-relaxed">
              Mimari konsept, malzeme disiplini ve mühendislik standartlarıyla
              şekillenen yapı projelerimiz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F3F0E8]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CONSTRUCTION_PROJECT_STUDIES.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
