"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import type { ConstructionProjectStudy } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: ConstructionProjectStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, locale } = useLanguage();

  return (
    <article className="group flex flex-col justify-between">
      <div>
        <Link href={`/construction/projects/${project.slug}`}>
          <div className="luxury-image-frame is-revealed relative aspect-[16/10] w-full overflow-hidden bg-[#D8D3C7] mb-6 shadow-md">
            <ArchitecturalCornerTicks light />
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-3 start-3 z-10 flex items-center gap-2">
              <span className="px-3 py-1 bg-[#45483F]/90 backdrop-blur-md text-[#F3F0E8] text-[10px] font-mono uppercase tracking-[0.16em] border border-[#69715F]/40 font-semibold">
                {project.statusLabel}
              </span>
            </div>
            {project.stages && project.stages.length > 0 && (
              <div className="absolute bottom-3 end-3 z-10">
                <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md text-[#F3F0E8] text-[10px] font-mono uppercase tracking-wider border border-[#8E9A7C]/40">
                  {project.stages.length}{" "}
                  {locale === "ar" ? "مراحل موثقة" : locale === "tr" ? "AŞAMA" : "STAGES"}
                </span>
              </div>
            )}
          </div>
        </Link>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-[#69715F]">
            <span className="uppercase tracking-[0.16em] font-medium">
              {project.category}
            </span>
            <span className="font-mono text-[11px] text-[#8E9A7C]">
              {project.location}
            </span>
          </div>

          <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F] group-hover:text-[#2F322A] transition-colors leading-[1.16]">
            <Link href={`/construction/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#69715F] leading-relaxed line-clamp-3">
            {project.editorialSummary}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[#D8D3C7]">
        <Link
          href={`/construction/projects/${project.slug}`}
          className="link-editorial"
        >
          <span>{t.selectedWorks.viewProject}</span>
          <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
        </Link>
      </div>
    </article>
  );
}
