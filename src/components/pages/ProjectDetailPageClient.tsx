"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, CloseIcon } from "@/components/ui/Icons";
import { getConstructionProjects } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectTransformationStory } from "@/components/construction/ProjectTransformationStory";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import { MarketingLocationMap } from "@/components/ui/MarketingLocationMap";
import { AnimatePresence, motion } from "framer-motion";

const COPY = {
  tr: {
    allProjects: "Tüm Projeler",
    catLabel: "Kategori",
    locLabel: "Konum",
    scopeLabel: "Kapsam",
    yearLabel: "Dönem / Yıl",
    approachTitle: "Mimari ve Mühendislik Yaklaşımı",
    specsTitle: "Teknik Özellikler ve İlkeler",
    galleryTitle: "Şantiye Arşivi & Detay Fotoğrafları",
    gallerySubtitle: "Hafriyat, demir donatı, membran izolasyon ve kompozit cephe uygulamalarının yüksek çözünürlüklü arşivi.",
    ctaTitle: "Kentsel Dönüşüm ve Yapı Projeleriniz İçin Bizimle İletişime Geçin",
    ctaDesc: "İstanbul genelinde arsa geliştirme, kentsel dönüşüm ve anahtar teslim yapı projeleriniz için teknik ekibimizle görüşün.",
    ctaBtn: "İletişime Geçin",
    interactiveStudy: "İnteraktif 3D / AI Konsept Stüdyosunu Başlat",
    interactiveDesc: "Bu çalışmanın kütle, cephe malzemeleri ve ışık senaryolarını interaktif olarak deneyimleyin.",
  },
  en: {
    allProjects: "All Projects",
    catLabel: "Category",
    locLabel: "Location",
    scopeLabel: "Scope",
    yearLabel: "Timeline / Year",
    approachTitle: "Architectural & Engineering Approach",
    specsTitle: "Technical Specifications & Principles",
    galleryTitle: "Field Archive & Construction Photography",
    gallerySubtitle: "High-resolution photo documentation across excavation, rebar grids, waterproofing, and facade installation.",
    ctaTitle: "Contact Us For Your Urban Regeneration & Building Projects",
    ctaDesc: "Consult with our engineering team for turnkey urban transformation, residential construction, and development projects in Istanbul.",
    ctaBtn: "Get in Touch",
    interactiveStudy: "Launch Interactive 3D / AI Concept Studio",
    interactiveDesc: "Interactively explore massing, material palettes, and lighting scenarios for this study.",
  },
  ar: {
    allProjects: "جميع المشاريع",
    catLabel: "الفئة",
    locLabel: "الموقع",
    scopeLabel: "النطاق",
    yearLabel: "الفترة / السنة",
    approachTitle: "النهج المعماري والإنشائي",
    specsTitle: "المواصفات الفنية والمبادئ الهندسية",
    galleryTitle: "أرشيف الموقع والتوثيق الميداني",
    gallerySubtitle: "توثيق فوتوغرافي عالي الدقة يغطي مراحل الحفريات، حديد التسليح، العوازل المائية، وتركيب الواجهات.",
    ctaTitle: "تواصل معنا لمشاريع التحول الحضري والمقاولات",
    ctaDesc: "احصل على استشارة هندسية متخصصة لمشاريع إعادة الإعمار والتطوير الإنشائي والتسليم على المفتاح في إسطنبول.",
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
  const [activeGalleryModal, setActiveGalleryModal] = useState<string | null>(null);

  return (
    <article className="bg-[#F3F0E8] text-[#45483F] min-h-screen pt-24 sm:pt-28">
      {/* Header: Responsive & Mobile-Polished */}
      <header className="py-8 sm:py-14 lg:py-20 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
            <Link
              href="/construction/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F]"
            >
              <ArrowLeftIcon className="h-4 w-4 rtl:rotate-180" />
              <span>{c.allProjects}</span>
            </Link>

            <span className="px-3 py-1 bg-[#45483F] text-[#F3F0E8] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] rounded-sm font-semibold">
              {project.statusLabel}
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.18em] text-[#69715F] mb-2 sm:mb-3 font-semibold">
            {project.category}
          </p>

          <h1 className="font-display-editorial text-2xl sm:text-4xl lg:text-6xl text-[#45483F] max-w-4xl leading-[1.12]">
            {project.title}
          </h1>

          <dl className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-[#D8D3C7] pt-6 sm:pt-8">
            <div>
              <dt className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                {c.catLabel}
              </dt>
              <dd className="text-xs sm:text-sm font-medium text-[#45483F] mt-1">
                {project.category}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                {c.locLabel}
              </dt>
              <dd className="text-xs sm:text-sm font-medium text-[#45483F] mt-1">
                {project.location}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                {c.scopeLabel}
              </dt>
              <dd className="text-xs sm:text-sm font-medium text-[#45483F] mt-1">
                {project.area}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                {c.yearLabel}
              </dt>
              <dd className="text-xs sm:text-sm font-medium text-[#45483F] mt-1 font-mono">
                {project.year}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Hero Showcase Image */}
      <section className="py-8 sm:py-12 bg-[#F3F0E8]">
        <div className="container-editorial">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden bg-[#D8D3C7] shadow-xl">
            <ArchitecturalCornerTicks />
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
            <div className="mt-6 sm:mt-8 p-5 sm:p-8 bg-[#45483F] text-[#F3F0E8] border border-[#69715F]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#A5AA98] font-semibold">
                  3D & AI STUDIO · HAMED MOHAMED
                </span>
                <p className="font-display-editorial text-xl sm:text-2xl text-[#F3F0E8]">
                  {c.interactiveStudy}
                </p>
                <p className="text-xs sm:text-sm text-[#D8D3C7]">
                  {c.interactiveDesc}
                </p>
              </div>
              <Link
                href="/case-study"
                className="btn-editorial bg-[#F3F0E8] text-[#45483F] hover:bg-[#E8E4DA] border-0 shrink-0"
              >
                <span>{c.interactiveStudy}</span>
                <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE STAGES TIMELINE (Scroll-Driven Mobile-First Story) */}
      {project.stages && project.stages.length > 0 && (
        <ProjectTransformationStory project={project} />
      )}

      {/* Architectural Philosophy & Specifications */}
      <section className="section-padding bg-[#F3F0E8] border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <h2 className="font-display-editorial text-2xl sm:text-4xl text-[#45483F]">
                {c.approachTitle}
              </h2>
              <p className="text-sm sm:text-lg text-[#45483F]/90 leading-relaxed font-normal">
                {project.editorialSummary}
              </p>
              <p className="text-xs sm:text-base text-[#69715F] leading-relaxed">
                {project.architecturalBrief}
              </p>
            </div>

            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-s border-[#D8D3C7] pt-6 lg:pt-0 lg:ps-10 space-y-4 sm:space-y-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#69715F]">
                {c.specsTitle}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-[#45483F]">
                {project.specifications.map((spec) => (
                  <li key={spec} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-[#69715F]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Complete High-Resolution Gallery Archive */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-[#D8D3C7]">
              <div className="max-w-2xl mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
                <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F]">
                  {c.galleryTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#69715F]">
                  {c.gallerySubtitle}
                </p>
              </div>

              {/* 2 columns on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {project.galleryImages.map((img, i) => (
                  <div
                    key={`${img}-${i}`}
                    className="group relative aspect-[4/3] w-full overflow-hidden bg-[#D8D3C7] shadow-sm cursor-zoom-in rounded-sm"
                    onClick={() => setActiveGalleryModal(img)}
                  >
                    <ArchitecturalCornerTicks />
                    <Image
                      src={img}
                      alt={`${project.title} — ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-2 end-2 px-1.5 sm:px-2 py-0.5 bg-[#45483F]/80 text-[#F3F0E8] text-[9px] sm:text-[10px] font-mono">
                      #{String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-[#E8E4DA]">
        <div className="container-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display-editorial text-2xl sm:text-4xl text-[#45483F]">
              {c.ctaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#69715F]">
              {c.ctaDesc}
            </p>
          </div>
          <Link
            href="/contact?division=construction"
            className="btn-olive-primary w-full sm:w-auto text-center justify-center shrink-0"
          >
            <span>{c.ctaBtn}</span>
            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* Interactive Marketing Field Office & Headquarters Map */}
      <MarketingLocationMap division="construction" />

      {/* Lightbox Modal for Gallery */}
      <AnimatePresence>
        {activeGalleryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveGalleryModal(null)}
          >
            <button
              type="button"
              onClick={() => setActiveGalleryModal(null)}
              className="absolute top-6 end-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-colors border border-white/20"
              aria-label="Close"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[88vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={activeGalleryModal}
                  alt="Gallery inspection view"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
