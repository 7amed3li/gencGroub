"use client";

import React from "react";
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
import { useLanguage } from "@/context/LanguageContext";

export function AutomotivePageClient() {
  const { locale, t } = useLanguage();
  const auto = BRAND_INFO.automotiveDivision;
  const portfolioItems = getAutomotivePortfolio(locale);
  const services = getAutomotiveServices(locale);

  return (
    <div className="bg-[#F3F0E8] text-[#45483F]">
      {/* 1. Pure, Breathable Automotive Hero */}
      <section className="relative min-h-[86vh] flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#45483F] text-[#F3F0E8] border-b border-[#D8D3C7]">
        <Image
          src="/images/atelier-daylight.jpg"
          alt="AutoClub Merter"
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
              {t.automotivePage.overline}
            </p>

            <h1 className="font-display-editorial text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#F3F0E8] leading-[1.04]">
              {t.automotivePage.headline}
            </h1>

            <p className="mt-6 text-sm sm:text-lg text-[#D8D3C7] max-w-xl font-light leading-relaxed">
              {t.automotivePage.subheadline}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
              <a
                href={auto.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#F3F0E8] text-[#45483F] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-[#D8D3C7]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>
                  {t.automotivePage.appointmentBtn}: {auto.phoneDisplay}
                </span>
              </a>

              <a
                href="#gercek-uygulamalar"
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] border-b border-[#D8D3C7]/50 pb-1.5 hover:border-[#F3F0E8] transition-colors"
              >
                <span>{t.automotivePage.galleryLink}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>

        {/* Single Clean Bottom Location Strip */}
        <div className="container-editorial relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#D8D3C7]/20 pt-5 text-xs text-[#D8D3C7]/85">
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 shrink-0 text-[#A5AA98]" />
              <span>{auto.address}</span>
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

      {/* 2. Interactive 4K Step-by-Step Automotive Assembly */}
      <AutomotiveAssemblyStory />

      {/* 3. Real Workshop Portfolio from @autoclubmerter */}
      <section
        id="gercek-uygulamalar"
        aria-labelledby="automotive-portfolio-heading"
        className="section-padding bg-[#F3F0E8] border-b border-[#D8D3C7]"
      >
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
                {t.automotivePage.portfolioOverline}
              </p>
              <h2
                id="automotive-portfolio-heading"
                className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F]"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {portfolioItems.map((item) => (
              <article key={item.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D8D3C7] mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <p className="text-[11px] uppercase tracking-[0.18em] text-[#69715F] mb-2">
                  {item.category}
                </p>
                <h3 className="font-display-editorial text-2xl sm:text-[1.65rem] text-[#45483F] leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#69715F] leading-relaxed mb-6 flex-1">
                  {item.summary}
                </p>

                <div className="pt-4 border-t border-[#D8D3C7] flex items-center justify-between">
                  <a
                    href={item.instagramPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#45483F] hover:text-[#69715F]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    <span>{t.selectedWorks.videoLink}</span>
                  </a>

                  <Link
                    href="/contact?division=automotive"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F]"
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
          <div className="max-w-3xl pb-12 border-b border-[#D8D3C7]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
              {t.automotivePage.servicesOverline}
            </p>
            <h2
              id="automotive-services-heading"
              className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F]"
            >
              {t.automotivePage.servicesHeadline}
            </h2>
            <p className="mt-4 text-base text-[#69715F] font-light leading-relaxed">
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
                {t.automotivePage.surfaceOverline}
              </p>
              <h2
                id="before-after-heading"
                className="font-display-editorial text-4xl sm:text-5xl text-[#45483F]"
              >
                {t.automotivePage.surfaceHeadline}
              </h2>
            </div>
            <p className="text-sm text-[#69715F] max-w-md leading-relaxed">
              {t.automotivePage.surfaceDesc}
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>
    </div>
  );
}

