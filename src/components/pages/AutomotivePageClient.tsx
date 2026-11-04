"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  InstagramIcon,
} from "@/components/ui/Icons";
import {
  BRAND_INFO,
  getAutomotivePortfolio,
  getAutomotiveServices,
} from "@/content/siteData";
import { LedTunnelHero } from "@/components/automotive/LedTunnelHero";
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
      {/* 1. Real LED Light-Tunnel Hero (mobile-first) */}
      <LedTunnelHero />

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

                <div className="pt-4 border-t border-[#D8D3C7] flex items-center justify-between gap-4">
                  <span className="text-[11px] text-[#69715F]">
                    {item.operations.slice(0, 2).join(" · ")}
                  </span>

                  <Link
                    href="/contact?division=automotive"
                    className="inline-flex items-center gap-1.5 shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F]"
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

