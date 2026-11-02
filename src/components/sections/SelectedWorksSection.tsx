"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, InstagramIcon } from "@/components/ui/Icons";
import {
  EditorialReveal,
  ParallaxImageWindow,
} from "@/components/ui/StoryScrollArchitecture";
import {
  AUTOMOTIVE_PORTFOLIO_ITEMS,
  CONSTRUCTION_PROJECT_STUDIES,
} from "@/content/siteData";

export function SelectedWorksSection() {
  const featuredAutoWorks = AUTOMOTIVE_PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <section
      id="bolum-portfolyo"
      aria-labelledby="selected-works-heading"
      className="section-padding bg-[#F3F0E8] text-[#45483F] border-b border-[#D8D3C7]"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 lg:pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
              Seçili Uygulamalar
            </p>
            <EditorialReveal>
              <h2
                id="selected-works-heading"
                className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F]"
              >
                Atölye Güncesi ve Mimari Seçki.
              </h2>
            </EditorialReveal>
          </div>
          <Link href="/automotive#gercek-uygulamalar" className="link-editorial">
            <span>Tüm Atölye Çalışmaları</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Real Automotive Works — Balanced 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {featuredAutoWorks.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D8D3C7] mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <p className="text-[11px] uppercase tracking-[0.18em] text-[#69715F] mb-2">
                {item.category}
              </p>
              <h3 className="font-display-editorial text-2xl sm:text-[1.65rem] text-[#45483F] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#69715F] leading-relaxed mb-5 flex-1">
                {item.summary}
              </p>

              <a
                href={item.instagramPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#45483F] hover:text-[#69715F] transition-colors pt-3 border-t border-[#D8D3C7]"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>Uygulama Videosu</span>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Construction Architectural Works — Harmonious Spacing Divider */}
        <div className="mt-20 lg:mt-28 pt-16 lg:pt-20 border-t border-[#D8D3C7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
                Genç Group İnşaat
              </p>
              <EditorialReveal>
                <h3 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl text-[#45483F]">
                  Mimari Proje Portfolyosu.
                </h3>
              </EditorialReveal>
            </div>
            <Link href="/construction/projects" className="link-editorial">
              <span>Tüm İnşaat Projeleri</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {CONSTRUCTION_PROJECT_STUDIES.map((project, idx) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: idx * 0.14 }}
                className="group"
              >
                <Link href={`/construction/projects/${project.slug}`}>
                  <div className="mb-6">
                    <ParallaxImageWindow
                      src={project.heroImage}
                      alt={project.title}
                      aspectClassName="aspect-[16/10]"
                      parallaxStrength={7}
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#69715F] mb-2">
                    {project.category}
                  </p>
                  <h4 className="font-display-editorial text-3xl text-[#45483F] mb-2.5">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[#69715F] leading-relaxed max-w-xl">
                    {project.editorialSummary}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
