"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { getConstructionProjects } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

const COPY = {
  tr: {
    allProjects: "Tüm Projeler",
    catLabel: "Kategori",
    locLabel: "Konum",
    scopeLabel: "Kapsam",
    approachTitle: "Mimari Yaklaşım",
    specsTitle: "Teknik Özellikler ve İlkeler",
    ctaTitle: "Yapı Projeleriniz İçin Bizimle İletişime Geçin",
    ctaBtn: "İletişime Geçin",
    interactiveStudy: "İnteraktif 3D / AI Konsept Stüdyosunu Başlat",
    interactiveDesc: "Bu çalışmanın kütle, cephe malzemeleri ve ışık senaryolarını interaktif olarak deneyimleyin.",
  },
  en: {
    allProjects: "All Projects",
    catLabel: "Category",
    locLabel: "Location",
    scopeLabel: "Scope",
    approachTitle: "Architectural Approach",
    specsTitle: "Technical Specifications & Principles",
    ctaTitle: "Contact Us For Your Architectural & Building Projects",
    ctaBtn: "Get in Touch",
    interactiveStudy: "Launch Interactive 3D / AI Concept Studio",
    interactiveDesc: "Interactively explore massing, material palettes, and lighting scenarios for this study.",
  },
  ar: {
    allProjects: "جميع المشاريع",
    catLabel: "الفئة",
    locLabel: "الموقع",
    scopeLabel: "النطاق",
    approachTitle: "النهج المعماري",
    specsTitle: "المواصفات الفنية والمبادئ",
    ctaTitle: "تواصل معنا لمشاريعك المعمارية والإنشائية",
    ctaBtn: "تواصل معنا",
    interactiveStudy: "تشغيل استوديو التصوّر التفاعلي 3D / AI",
    interactiveDesc: "اختبر بدائل الكتل والمواد وإضاءة الواجهات لهذا المشروع بشكل تفاعلي ومباشر.",
  },
} as const;

export function ProjectDetailPageClient({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const projects = getConstructionProjects(locale);
  const project = projects.find((p) => p.slug === slug) ?? projects[0];
  const c = COPY[locale];

  return (
    <article className="bg-[#F3F0E8] text-[#45483F] min-h-screen pt-28">
      <header className="py-14 lg:py-20 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <Link
            href="/construction/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F] mb-8"
          >
            <ArrowLeftIcon className="h-4 w-4 rtl:rotate-180" />
            <span>{c.allProjects}</span>
          </Link>

          <p className="text-xs uppercase tracking-[0.18em] text-[#69715F] mb-3">
            {project.category}
          </p>

          <h1 className="font-display-editorial text-4xl sm:text-6xl text-[#45483F] max-w-4xl">
            {project.title}
          </h1>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#D8D3C7] pt-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                {c.catLabel}
              </dt>
              <dd className="text-sm font-medium text-[#45483F] mt-1">
                {project.category}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                {c.locLabel}
              </dt>
              <dd className="text-sm font-medium text-[#45483F] mt-1">
                {project.location}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                {c.scopeLabel}
              </dt>
              <dd className="text-sm font-medium text-[#45483F] mt-1">
                {project.area}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="py-12 bg-[#F3F0E8]">
        <div className="container-editorial">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#D8D3C7]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {slug === "ticari-ve-kurumsal-yapi-yaklasimi" && (
            <div className="mt-8 p-6 sm:p-8 bg-[#45483F] text-[#F3F0E8] border border-[#69715F]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#A5AA98] font-semibold">
                  3D & AI STUDIO
                </span>
                <p className="font-display-editorial text-2xl text-[#F3F0E8]">
                  {c.interactiveStudy}
                </p>
                <p className="text-sm text-[#D8D3C7]">
                  {c.interactiveDesc}
                </p>
              </div>
              <Link
                href="/construction/case-study"
                className="btn-editorial bg-[#F3F0E8] text-[#45483F] hover:bg-[#E8E4DA] border-0 shrink-0"
              >
                <span>{c.interactiveStudy}</span>
                <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-[#F3F0E8] border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
                {c.approachTitle}
              </h2>
              <p className="text-base sm:text-lg text-[#45483F]/85 leading-relaxed">
                {project.editorialSummary}
              </p>
              <p className="text-sm sm:text-base text-[#69715F] leading-relaxed">
                {project.architecturalBrief}
              </p>
            </div>

            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-s border-[#D8D3C7] pt-8 lg:pt-0 lg:ps-10 space-y-5">
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-[#69715F]">
                {c.specsTitle}
              </h3>
              <ul className="space-y-3 text-sm text-[#45483F]">
                {project.specifications.map((spec) => (
                  <li key={spec} className="flex items-start gap-3">
                    <CheckIcon className="h-4 w-4 shrink-0 mt-1 text-[#69715F]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-[#D8D3C7]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((img, i) => (
                <div
                  key={`${img}-${i}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#D8D3C7]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} — ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E8E4DA]">
        <div className="container-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
              {c.ctaTitle}
            </h2>
          </div>
          <Link
            href="/contact?division=construction"
            className="btn-olive-primary"
          >
            <span>{c.ctaBtn}</span>
            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </article>
  );
}
