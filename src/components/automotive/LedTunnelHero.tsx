"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  InstagramIcon,
  WhatsAppIcon,
  MapPinIcon,
} from "@/components/ui/Icons";
import { BRAND_INFO } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

const STUDIO_COPY = {
  tr: {
    status: "Merter-Platform Stüdyosu · LED Işık Tüneli",
    tags: ["NDOUR PPF", "AutoClub Ceramic 9H", "Optik Polisaj"],
    caption: "Mercedes-AMG GLE Coupe — AutoClub Merter LED tüneli",
  },
  en: {
    status: "Merter-Platform Studio · LED Light Tunnel",
    tags: ["NDOUR PPF", "AutoClub Ceramic 9H", "Optical Polishing"],
    caption: "Mercedes-AMG GLE Coupe — AutoClub Merter LED tunnel",
  },
  ar: {
    status: "استوديو Merter-Platform · نفق إضاءة LED",
    tags: ["NDOUR PPF", "AutoClub Ceramic 9H", "تلميع بصري"],
    caption: "مرسيدس AMG GLE كوبيه — نفق إضاءة AutoClub Merter",
  },
} as const;

const HERO_IMAGE = "/images/atelier/amg-gle-coupe-portrait.jpg";

export function LedTunnelHero() {
  const { locale, t } = useLanguage();
  const auto = BRAND_INFO.automotiveDivision;
  const copy = STUDIO_COPY[locale];

  return (
    <section className="relative overflow-hidden bg-[#0C0D0C] text-[#F3F0E8] lg:min-h-[94vh]">
      <div className="lg:grid lg:grid-cols-12 lg:min-h-[94vh]">
        {/* PHOTO — top on mobile, right column on desktop */}
        <div className="relative h-[62svh] min-h-[420px] lg:h-auto lg:min-h-0 lg:col-span-7 lg:order-2">
          <div className="absolute inset-0 led-power-on">
            <Image
              src={HERO_IMAGE}
              alt={copy.caption}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[50%_38%]"
            />
          </div>

          {/* Moving inspection light */}
          <div className="led-sweep" aria-hidden="true" />

          {/* Blend into dark text area */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0C0D0C]/70 via-transparent to-[#0C0D0C] lg:bg-gradient-to-r lg:from-[#0C0D0C] lg:via-[#0C0D0C]/10 lg:to-transparent rtl:lg:bg-gradient-to-l"
            aria-hidden="true"
          />

          {/* Live studio status */}
          <div className="absolute top-24 lg:top-28 start-5 sm:start-8 end-5 flex justify-start">
            <span className="led-rise inline-flex items-center gap-2.5 border border-white/15 bg-black/45 backdrop-blur-md px-3.5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#F3F0E8]/90">
              <span className="led-pulse-dot h-1.5 w-1.5 rounded-full bg-white" />
              <span>{copy.status}</span>
            </span>
          </div>
        </div>

        {/* TEXT */}
        <div className="relative z-10 -mt-24 lg:mt-0 lg:col-span-5 lg:order-1 flex flex-col justify-end lg:justify-center px-5 sm:px-8 lg:ps-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pe-10 pb-10 lg:py-28">
          <p
            className="led-rise text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#A5AA98] mb-4"
            style={{ animationDelay: "0.9s" }}
          >
            {t.automotivePage.overline}
          </p>

          <h1
            className="led-rise font-display-editorial text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#F3F0E8]"
            style={{ animationDelay: "1.05s" }}
          >
            {t.automotivePage.headline}
          </h1>

          <p
            className="led-rise mt-5 text-sm sm:text-base text-[#D8D3C7]/85 max-w-md font-light leading-relaxed"
            style={{ animationDelay: "1.2s" }}
          >
            {t.automotivePage.subheadline}
          </p>

          {/* Real studio materials */}
          <ul
            className="led-rise mt-6 flex flex-wrap gap-2"
            style={{ animationDelay: "1.35s" }}
          >
            {copy.tags.map((tag) => (
              <li
                key={tag}
                className="border border-white/15 px-3 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#F3F0E8]/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div
            className="led-rise mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7"
            style={{ animationDelay: "1.5s" }}
          >
            <a
              href={auto.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#F3F0E8] text-[#0C0D0C] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>
                {t.automotivePage.appointmentBtn}: {auto.phoneDisplay}
              </span>
            </a>

            <a
              href="#gercek-uygulamalar"
              className="group inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] border-b border-white/30 pb-1.5 self-center sm:self-auto hover:border-white transition-colors"
            >
              <span>{t.automotivePage.galleryLink}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
            </a>
          </div>

          <div className="mt-10 pt-5 border-t border-white/10 flex flex-col gap-3 text-[11px] text-[#D8D3C7]/70">
            <span className="inline-flex items-start gap-2">
              <MapPinIcon className="h-4 w-4 shrink-0 text-[#A5AA98]" />
              <span>{auto.region}</span>
            </span>
            <a
              href={auto.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 uppercase tracking-[0.16em] text-[#F3F0E8]/85 hover:text-white transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>{auto.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

