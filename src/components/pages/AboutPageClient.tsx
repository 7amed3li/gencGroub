"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { BRAND_INFO, getAutomotiveServices } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function AboutPageClient() {
  const { locale, t } = useLanguage();
  const services = getAutomotiveServices(locale);

  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      <section className="py-20 lg:py-28 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-4">
            {t.aboutPage.overline}
          </p>
          <h1 className="font-display-editorial text-5xl sm:text-6xl lg:text-7xl text-[#45483F] max-w-4xl leading-[1.04]">
            {t.aboutPage.headline}
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#69715F] max-w-3xl font-light leading-relaxed">
            {BRAND_INFO.name}, {t.aboutPage.leadPart1}{" "}
            <strong className="text-[#45483F] font-medium">
              AutoClub Merter
            </strong>{" "}
            {t.aboutPage.leadPart2}{" "}
            <strong className="text-[#45483F] font-medium">
              Genç Group İnşaat
            </strong>{" "}
            {t.aboutPage.leadPart3}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <h2 className="font-display-editorial text-4xl text-[#45483F]">
                {t.aboutPage.twoDomainsTitle}
              </h2>
              <p className="text-sm text-[#69715F] leading-relaxed">
                {t.aboutPage.twoDomainsDesc}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-t lg:border-t-0 lg:border-s border-[#D8D3C7] pt-8 lg:pt-0 lg:ps-12">
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display-editorial text-3xl text-[#45483F]">
                    AutoClub Merter
                  </h3>
                  <p className="text-sm text-[#69715F] leading-relaxed">
                    {t.aboutPage.autoDesc}
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#45483F] pt-2">
                    {services.map((s) => (
                      <li key={s.id} className="flex items-center gap-2.5">
                        <CheckIcon className="h-4 w-4 text-[#69715F]" />
                        <span>{s.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/automotive" className="link-editorial w-fit">
                  <span>AutoClub Merter</span>
                  <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </div>

              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display-editorial text-3xl text-[#45483F]">
                    Genç Group İnşaat
                  </h3>
                  <p className="text-sm text-[#69715F] leading-relaxed">
                    {t.aboutPage.consDesc}
                  </p>
                </div>

                <Link href="/construction" className="link-editorial w-fit">
                  <span>Genç Group İnşaat</span>
                  <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

