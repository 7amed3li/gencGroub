"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import {
  getConstructionServices,
  getConstructionProjects,
} from "@/content/siteData";
import { ProjectCard } from "@/components/construction/ProjectCard";
import { ConstructionAssemblyStory } from "@/components/sections/ConstructionAssemblyStory";
import { useLanguage } from "@/context/LanguageContext";

export function ConstructionPageClient() {
  const { locale, t } = useLanguage();
  const services = getConstructionServices(locale);
  const projects = getConstructionProjects(locale);

  return (
    <div className="bg-[#F3F0E8] text-[#45483F] min-h-screen">
      {/* 1. Pure, Breathable Architectural Hero */}
      <section className="relative min-h-[86vh] flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#45483F] text-[#F3F0E8] border-b border-[#D8D3C7]">
        <Image
          src="/images/architecture-limestone.jpg"
          alt="Genç Group İnşaat"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#353830]/95 via-[#45483F]/55 to-[#353830]/60" />

        <div aria-hidden="true" />

        <div className="container-editorial relative z-10 my-auto py-10">
          <div className="max-w-4xl">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#D8D3C7] mb-4 sm:mb-6">
              {t.constructionPage.overline}
            </p>

            <h1 className="font-display-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#F3F0E8] leading-[1.04]">
              {t.constructionPage.headline}
            </h1>

            <p className="mt-6 text-sm sm:text-lg text-[#D8D3C7] max-w-xl font-light leading-relaxed">
              {t.constructionPage.subheadline}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
              <Link
                href="/construction/projects"
                className="inline-flex items-center gap-3 bg-[#F3F0E8] text-[#45483F] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-[#D8D3C7]"
              >
                <span>{t.constructionPage.portfolioBtn}</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?division=construction"
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] border-b border-[#D8D3C7]/50 pb-1.5 hover:border-[#F3F0E8] transition-colors"
              >
                <span>{t.constructionPage.contactLink}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>

        {/* Single Clean Bottom Signature Strip */}
        <div className="container-editorial relative z-10">
          <div className="flex items-center justify-between border-t border-[#D8D3C7]/20 pt-5 text-[11px] uppercase tracking-[0.18em] text-[#D8D3C7]/85">
            <span>{t.constructionPage.bottomStrip}</span>
            <span className="hidden sm:inline text-[#A5AA98]">
              {t.hero.location}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Interactive 4K Layered Architectural Assembly */}
      <ConstructionAssemblyStory />

      {/* 3. Architectural Philosophy */}
      <section className="section-padding border-b border-[#D8D3C7] bg-[#F3F0E8]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[#69715F]">
                {t.constructionPage.philOverline}
              </p>
              <h2 className="font-display-editorial text-4xl sm:text-5xl text-[#45483F] leading-[1.08]">
                {t.constructionPage.philHeadline}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#69715F]">
              <p className="font-display-editorial text-2xl sm:text-3xl leading-[1.3] text-[#45483F]">
                {t.constructionPage.philLead}
              </p>
              <p className="text-base font-light leading-relaxed">
                {t.constructionPage.philBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Construction Services */}
      <section
        aria-labelledby="construction-services-heading"
        className="section-padding border-b border-[#D8D3C7] bg-[#E8E4DA]"
      >
        <div className="container-editorial">
          <div className="mb-14 lg:mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
              {t.constructionPage.scopeOverline}
            </p>
            <h2
              id="construction-services-heading"
              className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F]"
            >
              {t.constructionPage.scopeHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#D8D3C7] pt-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#69715F]">
                    {service.index} · {service.titleEn}
                  </p>
                  <h3 className="font-display-editorial text-3xl text-[#45483F]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#69715F] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <p className="pt-4 border-t border-[#D8D3C7] text-xs text-[#69715F]">
                  {service.scopeDetails}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Architectural Project Portfolio */}
      <section
        aria-labelledby="construction-portfolio-heading"
        className="section-padding bg-[#F3F0E8]"
      >
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
                {t.constructionPage.projectsOverline}
              </p>
              <h2
                id="construction-portfolio-heading"
                className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F]"
              >
                {t.constructionPage.projectsHeadline}
              </h2>
            </div>

            <Link href="/construction/projects" className="link-editorial">
              <span>{t.constructionPage.allProjectsLink}</span>
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

