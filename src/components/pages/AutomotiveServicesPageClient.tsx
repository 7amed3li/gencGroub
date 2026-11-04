"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { getAutomotiveServices } from "@/content/siteData";
import { ServiceEditorialBlock } from "@/components/automotive/ServiceEditorialBlock";
import { useLanguage } from "@/context/LanguageContext";

const COPY = {
  tr: {
    headline: "Kaporta, Boya ve Boyasız Göçük Düzeltme Çözümleri.",
    subheadline:
      "Her araç müdahalesi; yüzey analizi, doğru ekipman seçimi ve aracın orijinal değerini koruma prensibiyle yürütülür.",
    ctaTitle: "Aracınız İçin Ön Değerlendirme Talep Edin",
    ctaBtn: "İletişime Geçin",
  },
  en: {
    headline: "Bodywork, Refinishing & Paintless Dent Repair Solutions.",
    subheadline:
      "Every vehicle intervention is guided by optical surface analysis, specialized equipment, and preserving original factory value.",
    ctaTitle: "Request a Preliminary Assessment for Your Vehicle",
    ctaBtn: "Get in Touch",
  },
  ar: {
    headline: "حلول إصلاح الهياكل، الطلاء وإصلاح الصدمات بدون طلاء.",
    subheadline:
      "يتم تنفيذ كل تدخل فني عبر تحليل دقيق للسطح، واختيار المعدات المتخصصة، ومبدأ الحفاظ على القيمة الأصلية للسيارة.",
    ctaTitle: "اطلب تقييماً أولياً لسيارتك",
    ctaBtn: "تواصل معنا",
  },
} as const;

export function AutomotiveServicesPageClient() {
  const { locale } = useLanguage();
  const services = getAutomotiveServices(locale);
  const c = COPY[locale];

  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      <section className="py-16 lg:py-24 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <Link
            href="/automotive"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F] mb-8"
          >
            <ArrowLeftIcon className="h-4 w-4 rtl:rotate-180" />
            <span>AutoClub Merter</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <h1 className="font-display-editorial text-5xl sm:text-6xl text-[#45483F]">
              {c.headline}
            </h1>
            <p className="text-base sm:text-lg text-[#69715F] font-light leading-relaxed">
              {c.subheadline}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F3F0E8]">
        <div className="container-editorial">
          {services.map((service, idx) => (
            <ServiceEditorialBlock
              key={service.id}
              service={service}
              reversed={idx % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#E8E4DA] border-t border-[#D8D3C7]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
              {c.ctaTitle}
            </h2>
          </div>
          <Link
            href="/contact?division=automotive"
            className="btn-olive-primary"
          >
            <span>{c.ctaBtn}</span>
            <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}

