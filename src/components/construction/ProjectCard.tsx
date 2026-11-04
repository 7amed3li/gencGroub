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
  const { t } = useLanguage();

  return (
    <article className="group flex flex-col justify-between">
      <div>
        <Link href={`/construction/projects/${project.slug}`}>
          <div className="luxury-image-frame is-revealed relative aspect-[16/10] w-full overflow-hidden bg-[#D8D3C7] mb-6">
            <ArchitecturalCornerTicks light />
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-[#69715F]">
            {project.category}
          </p>

          <h3 className="font-display-editorial text-3xl text-[#45483F]">
            <Link href={`/construction/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#69715F] leading-relaxed">
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
