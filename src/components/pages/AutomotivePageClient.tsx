"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  InstagramIcon,
  WhatsAppIcon,
  MapPinIcon,
} from "@/components/ui/Icons";
import {
  BRAND_INFO,
  getAutomotivePortfolio,
  getAutomotiveServices,
} from "@/content/siteData";
import { ServiceEditorialBlock } from "@/components/automotive/ServiceEditorialBlock";
import { BeforeAfterSlider } from "@/components/automotive/BeforeAfterSlider";
import { AutomotiveAssemblyStory } from "@/components/sections/AutomotiveAssemblyStory";
import { PrecisionMetricsStrip } from "@/components/sections/PrecisionMetricsStrip";
import { LuxuryMarqueeStrip } from "@/components/ui/LuxuryMarqueeStrip";
import { LuxuryLightboxModal } from "@/components/ui/LuxuryLightboxModal";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import { useLanguage } from "@/context/LanguageContext";

export function AutomotivePageClient() {
  const { locale, t } = useLanguage();
  const auto = BRAND_INFO.automotiveDivision;
  const portfolioItems = getAutomotivePortfolio(locale);
  const services = getAutomotiveServices(locale);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#F3F0E8] text-[#45483F]">
      {/* 1. Pure, Breathable Automotive Hero */}
      <section className="relative min-h-[86vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#45483F] text-[#F3F0E8] border-b border-[#D8D3C7]">
        <Image
          src="/images/atelier-daylight.jpg"
          alt="AutoClub Merter"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#353830]/95 via-[#45483F]/55 to-[#353830]/60" />

        <div aria-hidden="true" />

        <div className="container-editorial relative z-10 my-auto py-8 sm:py-10">
          <div className="max-w-4xl">
            <h1 className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D8D3C7] mb-3.5 sm:mb-6 font-normal leading-relaxed">
              {t.automotivePage.overline}
            </h1>

            <p className="font-display-editorial text-[2.35rem] sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#F3F0E8] leading-[1.06]">
              {t.automotivePage.headline}
            </p>

            <p className="mt-5 sm:mt-6 text-sm sm:text-lg text-[#D8D3C7] max-w-xl font-light leading-relaxed">
              {t.automotivePage.subheadline}
            </p>

            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <a
                href={auto.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#F3F0E8] text-[#45483F] px-6 sm:px-7 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-[#D8D3C7]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap">
                  {t.automotivePage.appointmentBtn}: {auto.phoneDisplay}
                </span>
              </a>

              <a
                href="#gercek-uygulamalar"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] border-b border-[#D8D3C7]/50 pb-1.5 self-center sm:self-auto hover:border-[#F3F0E8] transition-colors"
              >
                <span>{t.automotivePage.galleryLink}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>

        {/* Single Clean Bottom Location Strip */}
        <div className="container-editorial relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#D8D3C7]/20 pt-4 sm:pt-5 text-xs text-[#D8D3C7]/85">
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 shrink-0 text-[#A5AA98]" />
              <span>{auto.region}</span>
            </span>
            <a
              href={auto.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 uppercase tracking-[0.16em] text-[#F3F0E8] hover:text-[#D8D3C7] transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>{auto.instagramHandle}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Luxury Studio Marquee Ribbon */}
      <LuxuryMarqueeStrip variant="stone" />

      {/* 2. Interactive 4K Step-by-Step Automotive Assembly */}
      <AutomotiveAssemblyStory />

      {/* Precision Atelier Metrics Bar */}
      <PrecisionMetricsStrip />

      {/* 3. Real Workshop Portfolio from AutoClub Merter Studio */}
      <section
        id="gercek-uygulamalar"
        aria-labelledby="automotive-portfolio-heading"
        className="section-padding bg-[#F3F0E8] border-b border-[#D8D3C7]"
      >
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 lg:mb-16">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F] mb-2.5 sm:mb-3">
                {t.automotivePage.portfolioOverline}
              </p>
              <h2
                id="automotive-portfolio-heading"
                className="font-display-editorial text-3xl sm:text-5xl lg:text-6xl text-[#45483F]"
              >
                {t.automotivePage.portfolioHeadline}
              </h2>
            </div>

            <a
              href={auto.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>
                {t.automotivePage.allWorksInstagram}: {auto.instagramHandle}
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {portfolioItems.map((item, idx) => (
              <article
                key={item.id}
                className="group flex flex-col bg-[#E8E4DA]/55 border border-[#D8D3C7] p-4 sm:p-5"
              >
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
                <h3 className="font-display-editorial text-2xl sm:text-[1.6rem] text-[#45483F] leading-snug mb-2">
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
                    className="inline-flex items-center gap-1.5 shrink-0 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F]"
                  >
                    <span>{t.selectedWorks.bookAppointment}</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Editorial Service Sections */}
      <section
        id="otomotiv-hizmetleri"
        aria-labelledby="automotive-services-heading"
        className="section-padding bg-[#E8E4DA]"
      >
        <div className="container-editorial">
          <div className="max-w-3xl pb-10 sm:pb-12 border-b border-[#D8D3C7]">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F] mb-2.5 sm:mb-3">
              {t.automotivePage.servicesOverline}
            </p>
            <h2
              id="automotive-services-heading"
              className="font-display-editorial text-3xl sm:text-5xl lg:text-6xl text-[#45483F]"
            >
              {t.automotivePage.servicesHeadline}
            </h2>
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-[#69715F] font-light leading-relaxed">
              {t.automotivePage.servicesIntro}
            </p>
          </div>

          <div>
            {services.map((service, idx) => (
              <ServiceEditorialBlock
                key={service.id}
                service={service}
                reversed={idx % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Surface Comparison */}
      <section
        aria-labelledby="before-after-heading"
        className="section-padding bg-[#F3F0E8] border-t border-[#D8D3C7]"
      >
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 lg:mb-14">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F] mb-2.5 sm:mb-3">
                {t.automotivePage.surfaceOverline}
              </p>
              <h2
                id="before-after-heading"
                className="font-display-editorial text-3xl sm:text-5xl text-[#45483F]"
              >
                {t.automotivePage.surfaceHeadline}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#69715F] max-w-md leading-relaxed">
              {t.automotivePage.surfaceDesc}
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* Fullscreen Studio Lightbox Inspector */}
      <LuxuryLightboxModal
        items={portfolioItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(i) => setLightboxIndex(i)}
      />
    </div>
  );
}
