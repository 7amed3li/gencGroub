"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import {
  BRAND_INFO,
  FOUNDER_INFO,
  getAutomotiveServices,
} from "@/content/siteData";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import { useLanguage } from "@/context/LanguageContext";

export function AboutPageClient() {
  const { locale, t } = useLanguage();
  const services = getAutomotiveServices(locale);
  const founder = FOUNDER_INFO;

  // Localized founder content
  const title =
    locale === "tr"
      ? founder.titleTr
      : locale === "ar"
      ? founder.titleAr
      : founder.titleEn;

  const quote =
    locale === "tr"
      ? founder.quoteTr
      : locale === "ar"
      ? founder.quoteAr
      : founder.quoteEn;

  const bio =
    locale === "tr"
      ? founder.bioTr
      : locale === "ar"
      ? founder.bioAr
      : founder.bioEn;

  const milestones =
    locale === "tr"
      ? founder.milestonesTr
      : locale === "ar"
      ? founder.milestonesAr
      : founder.milestonesEn;

  const whatsappMessage = encodeURIComponent(
    locale === "tr"
      ? "Merhaba Genç Group, Zeytinburnu merkez ofisinizde görüşmek ve projeleriniz hakkında bilgi almak istiyorum."
      : locale === "ar"
      ? "مرحباً Genç Group، أود زيارة مقركم الرئيسي في زيتين بورنو والاطلاع على مشاريعكم."
      : "Hello Genç Group, I would like to visit your Zeytinburnu head office and learn more about your operations."
  );

  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      {/* 1. ARCHITECTURAL HERO SECTION */}
      <section className="py-16 sm:py-24 lg:py-28 border-b border-[#D8D3C7] bg-[#E8E4DA] relative overflow-hidden">
        <div className="container-editorial relative z-10">
          <div className="max-w-4xl space-y-5">
            <div className="inline-block border-s-2 border-[#69715F] ps-3.5 py-0.5">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#69715F] font-bold">
                {t.aboutPage.heroBadge}
              </span>
            </div>

            <h1 className="font-display-editorial text-4xl sm:text-6xl lg:text-7xl text-[#45483F] leading-[1.04] tracking-tight">
              {t.aboutPage.heroHeadline}
            </h1>

            <p className="text-base sm:text-xl text-[#69715F] max-w-3xl font-light leading-relaxed pt-2">
              {t.aboutPage.heroSubheadline}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 pt-8 border-t border-[#D8D3C7]">
            <div className="space-y-1">
              <p className="font-display-editorial text-3xl sm:text-4xl text-[#45483F] font-medium">
                1976
              </p>
              <p className="text-[11px] sm:text-xs text-[#69715F] uppercase tracking-[0.14em]">
                {locale === "tr"
                  ? "Zeytinburnu Doğumlu"
                  : locale === "ar"
                  ? "المسقط: زيتين بورنو"
                  : "Born in Zeytinburnu"}
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-display-editorial text-3xl sm:text-4xl text-[#45483F] font-medium">
                1991
              </p>
              <p className="text-[11px] sm:text-xs text-[#69715F] uppercase tracking-[0.14em]">
                {locale === "tr"
                  ? "Ticari Başlangıç (30+ Yıl)"
                  : locale === "ar"
                  ? "بداية التجارة (+30 عاماً)"
                  : "First Trading (30+ Yrs)"}
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-display-editorial text-3xl sm:text-4xl text-[#45483F] font-medium">
                2007
              </p>
              <p className="text-[11px] sm:text-xs text-[#69715F] uppercase tracking-[0.14em]">
                {locale === "tr"
                  ? "İnşaat & Otomotiv İhtisası"
                  : locale === "ar"
                  ? "التخصص الإنشائي والسيارات"
                  : "Construction & Auto"}
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-display-editorial text-3xl sm:text-4xl text-[#45483F] font-medium">
                2
              </p>
              <p className="text-[11px] sm:text-xs text-[#69715F] uppercase tracking-[0.14em]">
                {locale === "tr"
                  ? "Kurumsal Sektör Gücü"
                  : locale === "ar"
                  ? "قطاعان استراتيجيان"
                  : "Specialized Divisions"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER & LEADERSHIP FEATURE: DAVUT GENÇ */}
      <section
        id="kurucumuz"
        aria-labelledby="founder-heading"
        className="section-padding bg-[#F3F0E8] border-b border-[#D8D3C7]"
      >
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Authentic Executive Portrait with Official Emblem */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D8D3C7] border-2 border-[#D8D3C7] shadow-2xl">
                <ArchitecturalCornerTicks />
                <Image
                  src={founder.images.officeEmblem}
                  alt="Davut Genç — Genç Group Kurucusu ve Yönetim Kurulu Başkanı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />

                {/* Overlaid Editorial Badge */}
                <div className="absolute bottom-4 start-4 end-4 bg-[#2C2F28]/90 backdrop-blur-md text-[#F3F0E8] p-3.5 border border-[#F3F0E8]/20 shadow-xl">
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#A5AA98] block">
                    {title}
                  </span>
                  <p className="font-display-editorial text-xl font-semibold mt-0.5">
                    {founder.name}
                  </p>
                </div>
              </div>

              {/* Secondary Detail Note */}
              <div className="mt-4 p-4 bg-[#E8E4DA] border border-[#D8D3C7] flex items-center justify-between text-xs text-[#69715F]">
                <span className="font-mono uppercase tracking-wider">
                  {locale === "tr"
                    ? "Genç Group Genel Merkez"
                    : locale === "ar"
                    ? "المقر الرئيسي للمجموعة"
                    : "Genç Group Headquarters"}
                </span>
                <span className="font-semibold text-[#45483F]">
                  Zeytinburnu · İstanbul
                </span>
              </div>
            </div>

            {/* Right Column: Founder Narrative & Authentic Heritage */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-block border-s-2 border-[#69715F] ps-3.5 py-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#69715F] font-bold">
                    {t.aboutPage.founderSectionBadge}
                  </span>
                </div>
                <h2
                  id="founder-heading"
                  className="font-display-editorial text-3xl sm:text-5xl text-[#45483F] leading-[1.12]"
                >
                  {t.aboutPage.founderTitle}
                </h2>
              </div>

              {/* Pull-Quote with Architectural Accents */}
              <div className="p-5 sm:p-7 bg-[#E8E4DA] border-s-4 border-[#69715F] text-[#45483F] shadow-sm my-6">
                <p className="font-display-editorial text-base sm:text-xl italic leading-relaxed text-[#353830]">
                  “{quote}”
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] font-mono text-[#69715F] font-bold">
                  — {founder.name}, {title}
                </p>
              </div>

              {/* Lead & Narrative Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-[#45483F]/85 leading-relaxed font-light">
                <p className="text-sm sm:text-base font-normal text-[#353830] leading-relaxed">
                  {bio.lead}
                </p>
                {bio.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHRONOLOGICAL MILESTONES (1976 → 1991 → 1999 → 2007 → GÜNÜMÜZ) */}
      <section
        id="tarihce"
        aria-labelledby="timeline-heading"
        className="section-padding bg-[#E8E4DA] border-b border-[#D8D3C7]"
      >
        <div className="container-editorial">
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <div className="inline-block border-s-2 border-[#69715F] ps-3.5 py-0.5">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#69715F] font-bold">
                {t.aboutPage.timelineBadge}
              </span>
            </div>
            <h2
              id="timeline-heading"
              className="font-display-editorial text-3xl sm:text-5xl text-[#45483F]"
            >
              {t.aboutPage.timelineTitle}
            </h2>
            <p className="text-sm text-[#69715F] font-light leading-relaxed">
              {t.aboutPage.timelineSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={item.year}
                className="bg-[#F3F0E8] border border-[#D8D3C7] p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-sm hover:border-[#45483F] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#D8D3C7] pb-3">
                    <span className="font-display-editorial text-2xl sm:text-3xl font-medium text-[#45483F]">
                      {item.year}
                    </span>
                    <span className="px-2 py-0.5 bg-[#45483F] text-[#F3F0E8] text-[10px] uppercase font-mono tracking-wider font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-display-editorial text-lg text-[#45483F] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#69715F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-mono uppercase text-[#A5AA98] tracking-widest border-t border-[#D8D3C7]/60">
                  {locale === "tr"
                    ? `Aşama 0${idx + 1}`
                    : locale === "ar"
                    ? `المرحلة 0${idx + 1}`
                    : `Phase 0${idx + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TWO OPERATIONAL DIVISIONS WITH REAL FACILITY & PROJECT IMAGERY */}
      <section className="section-padding bg-[#F3F0E8] border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-block border-s-2 border-[#69715F] ps-3.5 py-0.5">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#69715F] font-bold">
                {t.aboutPage.divisionsBadge}
              </span>
            </div>
            <h2 className="font-display-editorial text-3xl sm:text-5xl text-[#45483F]">
              {t.aboutPage.twoDomainsTitle}
            </h2>
            <p className="text-sm text-[#69715F] leading-relaxed font-light">
              {t.aboutPage.twoDomainsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Division 1: AutoClub Merter */}
            <div className="group bg-[#E8E4DA] border border-[#D8D3C7] overflow-hidden flex flex-col justify-between shadow-md">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#D8D3C7]">
                  <Image
                    src="/images/atelier-daylight.jpg"
                    alt="AutoClub Merter — Yüzey ve Karoser Atölyesi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 start-4 bg-[#2C2F28]/90 backdrop-blur-sm text-[#F3F0E8] px-3 py-1 text-[11px] uppercase font-mono tracking-widest">
                    AutoClub Merter · Platform Suites
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F]">
                    AutoClub Merter
                  </h3>
                  <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed">
                    {t.aboutPage.autoDesc}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#45483F] pt-2 border-t border-[#D8D3C7]">
                    {services.map((s) => (
                      <li key={s.id} className="flex items-center gap-2.5">
                        <CheckIcon className="h-4 w-4 text-[#69715F] shrink-0" />
                        <span>{s.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href="/automotive"
                  className="group/btn w-full inline-flex items-center justify-between gap-2 px-6 py-4 bg-[#45483F] hover:bg-[#353830] text-[#F3F0E8] text-xs font-semibold uppercase tracking-[0.14em] transition-colors shadow-sm"
                >
                  <span>
                    {locale === "tr"
                      ? "AutoClub Merter'i İnceleyin"
                      : locale === "ar"
                      ? "استكشف خدمات AutoClub Merter"
                      : "Explore AutoClub Merter"}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Division 2: Genç Group İnşaat */}
            <div className="group bg-[#E8E4DA] border border-[#D8D3C7] overflow-hidden flex flex-col justify-between shadow-md">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#D8D3C7]">
                  <Image
                    src="/images/projects/zeytinburnu-g33/01-facade-hero.webp"
                    alt="Genç Group İnşaat — Zeytinburnu Seyitnizam Projesi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 start-4 bg-[#2C2F28]/90 backdrop-blur-sm text-[#F3F0E8] px-3 py-1 text-[11px] uppercase font-mono tracking-widest">
                    Genç Group İnşaat · Zeytinburnu
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F]">
                    Genç Group İnşaat
                  </h3>
                  <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed">
                    {t.aboutPage.consDesc}
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#45483F] pt-2 border-t border-[#D8D3C7]">
                    <li className="flex items-center gap-2.5">
                      <CheckIcon className="h-4 w-4 text-[#69715F] shrink-0" />
                      <span>
                        {locale === "tr"
                          ? "Depreme Dayanıklı Radye Temel ve Statik Güvenlik"
                          : locale === "ar"
                          ? "أساسات حصيرية مقاومة للزلازل بأعلى معايير الأمان"
                          : "Seismic Raft Foundation & Structural Rigor"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckIcon className="h-4 w-4 text-[#69715F] shrink-0" />
                      <span>
                        {locale === "tr"
                          ? "Zeytinburnu & İstanbul Kentsel Dönüşüm Uzmanlığı"
                          : locale === "ar"
                          ? "خبرة متخصصة في التحول الحضري بزيتين بورنو وإسطنبول"
                          : "Urban Regeneration Leadership in Zeytinburnu"}
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckIcon className="h-4 w-4 text-[#69715F] shrink-0" />
                      <span>
                        {locale === "tr"
                          ? "Anahtar Teslim İnşaat & Mimari Proje Yönetimi"
                          : locale === "ar"
                          ? "مشاريع تسليم المفتاح وإدارة معمارية متكاملة"
                          : "Turnkey Contracting & Architectural Project Delivery"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href="/construction"
                  className="group/btn w-full inline-flex items-center justify-between gap-2 px-6 py-4 bg-[#45483F] hover:bg-[#353830] text-[#F3F0E8] text-xs font-semibold uppercase tracking-[0.14em] transition-colors shadow-sm"
                >
                  <span>
                    {locale === "tr"
                      ? "Genç Group İnşaat'ı İnceleyin"
                      : locale === "ar"
                      ? "استكشف مشاريع Genç Group İnşaat"
                      : "Explore Genç Group İnşaat"}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ZEYTİNBURNU HEAD OFFICE CONSULTATION CARD */}
      <section className="section-padding bg-[#F3F0E8]">
        <div className="container-editorial">
          <div className="bg-[#45483F] text-[#F3F0E8] p-8 sm:p-12 lg:p-16 border border-[#69715F]/40 shadow-2xl relative overflow-hidden">
            <ArchitecturalCornerTicks />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A5AA98] font-bold block">
                  {t.aboutPage.contactBadge}
                </span>
                <h3 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F3F0E8] leading-tight">
                  {t.aboutPage.contactTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#D8D3C7] font-light leading-relaxed max-w-2xl">
                  {t.aboutPage.contactDesc}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#A5AA98]">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-[#8E9A7C]" />
                  <span>{BRAND_INFO.constructionDivision.address}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <a
                  href={`https://wa.me/905438193024?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between gap-3 px-6 py-4 bg-[#8E9A7C] hover:bg-[#A1AF8E] text-[#1E201A] font-bold text-xs uppercase tracking-[0.14em] transition-colors shadow-lg"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>
                      {locale === "tr"
                        ? "WhatsApp ile Randevu"
                        : locale === "ar"
                        ? "حجز موعد عبر واتساب"
                        : "WhatsApp Appointment"}
                    </span>
                  </span>
                  <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                </a>

                <a
                  href={BRAND_INFO.constructionDivision.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between gap-3 px-6 py-4 bg-[#353830] hover:bg-[#2C2F28] text-[#F3F0E8] border border-[#69715F]/40 text-xs font-semibold uppercase tracking-[0.14em] transition-colors"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <MapPinIcon className="h-4 w-4 text-[#A5AA98]" />
                    <span>
                      {locale === "tr"
                        ? "Haritada Yol Tarifi"
                        : locale === "ar"
                        ? "الاتجاهات في الخريطة"
                        : "Directions on Maps"}
                    </span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 text-[#A5AA98]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
