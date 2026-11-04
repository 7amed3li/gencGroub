"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";
import {
  ArchitecturalCornerTicks,
  EditorialReveal,
  ParallaxImageWindow,
} from "@/components/ui/StoryScrollArchitecture";
import { LuxuryLightboxModal } from "@/components/ui/LuxuryLightboxModal";
import { CreativePerspectiveCard } from "@/components/ui/CreativePerspectiveCard";
import {
  getAutomotivePortfolio,
  getConstructionProjects,
} from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function SelectedWorksSection() {
  const { locale, t } = useLanguage();
  const allAutoWorks = getAutomotivePortfolio(locale);
  const featuredAutoWorks = allAutoWorks.slice(0, 3);
  const constructionProjects = getConstructionProjects(locale);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="bolum-portfolyo"
      aria-labelledby="selected-works-heading"
      className="section-padding bg-[#F3F0E8] text-[#45483F] border-b border-[#D8D3C7]"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-10 lg:pb-16">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F] mb-2.5 sm:mb-3">
              {t.selectedWorks.overline}
            </p>
            <EditorialReveal>
              <h2
                id="selected-works-heading"
                className="font-display-editorial text-3xl sm:text-5xl lg:text-6xl text-[#45483F]"
              >
                {t.selectedWorks.headline}
              </h2>
            </EditorialReveal>
          </div>
          <Link href="/automotive#gercek-uygulamalar" className="link-editorial">
            <span>{t.selectedWorks.allAutoCta}</span>
            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>

        {/* Real Automotive Works — Framed Architectural Cards on Mobile & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {featuredAutoWorks.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <CreativePerspectiveCard tiltIntensity={5} className="group flex flex-col bg-[#E8E4DA]/55 border border-[#D8D3C7] p-4 sm:p-5 shadow-sm hover:shadow-xl">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={item.title}
                  className="luxury-image-frame is-revealed relative aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden bg-[#D8D3C7] mb-4 sm:mb-5 text-left cursor-pointer focus:outline-none"
                >
                  <ArchitecturalCornerTicks light />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 bg-[#2C2F28]/80 backdrop-blur-sm text-[#F3F0E8] border border-[#F3F0E8]/25 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] transition-colors group-hover:bg-[#45483F]">
                    <span>{item.code}</span>
                    <span>·</span>
                    <span>+</span>
                  </span>
                </button>

                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#69715F] mb-1.5">
                  {item.category}
                </p>
                <h3 className="font-display-editorial text-2xl sm:text-[1.6rem] text-[#45483F] mb-2 leading-snug">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="text-start hover:text-[#69715F] transition-colors"
                  >
                    {item.title}
                  </button>
                </h3>
                <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed mb-4 sm:mb-5 flex-1">
                  {item.summary}
                </p>

                <div className="pt-3.5 border-t border-[#D8D3C7] flex items-center justify-between gap-3">
                  <span className="text-[11px] text-[#69715F] truncate">
                    {item.operations[0]}
                  </span>
                  <Link
                    href="/contact?division=automotive"
                    className="inline-flex items-center gap-1.5 shrink-0 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F] transition-colors"
                  >
                    <span>{t.selectedWorks.bookAppointment}</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </CreativePerspectiveCard>
            </motion.div>
          ))}
        </div>

        {/* Construction Architectural Works */}
        <div className="mt-16 lg:mt-24 pt-14 lg:pt-20 border-t border-[#D8D3C7]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 lg:mb-14">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F] mb-2.5 sm:mb-3">
                {t.selectedWorks.consOverline}
              </p>
              <EditorialReveal>
                <h3 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl text-[#45483F]">
                  {t.selectedWorks.consHeadline}
                </h3>
              </EditorialReveal>
            </div>
            <Link href="/construction/projects" className="link-editorial">
              <span>{t.selectedWorks.allConsCta}</span>
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {constructionProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="h-full"
              >
                <CreativePerspectiveCard tiltIntensity={4} className="group bg-[#E8E4DA]/55 border border-[#D8D3C7] p-4 sm:p-6 shadow-sm hover:shadow-xl">
                  <Link href={`/construction/projects/${project.slug}`}>
                    <div className="mb-4 sm:mb-5">
                      <ParallaxImageWindow
                        src={project.heroImage}
                        alt={project.title}
                        aspectClassName="aspect-[16/10]"
                        parallaxStrength={7}
                      />
                    </div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#69715F] mb-1.5">
                      {project.category}
                    </p>
                    <h4 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F] mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed max-w-xl">
                      {project.editorialSummary}
                    </p>
                  </Link>
                </CreativePerspectiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Studio Lightbox Inspector */}
      <LuxuryLightboxModal
        items={allAutoWorks}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(i) => setLightboxIndex(i)}
      />
    </section>
  );
}
