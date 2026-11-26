"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon } from "@/components/ui/Icons";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import type { LeadershipMilestone } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface FounderJourneyMapProps {
  milestones: LeadershipMilestone[];
  className?: string;
}

const COPY = {
  tr: {
    sectionBadge: "Davut Genç'in Girişimcilik Yolculuğu",
    sectionTitle: "1976'dan Günümüze: 30+ Yıllık Başarı Hikayesi",
    sectionSubtitle:
      "Zeytinburnu'nun sokaklarından semt pazarlarına, toptan ticaretten holding vizyonuna uzanan 5 duraklı tarihi yolculuk.",
    keyLessonLabel: "Temel Ticari İlke & Miras",
    phaseLabel: "Aşama",
  },
  en: {
    sectionBadge: "Davut Genç's Entrepreneurial Odyssey",
    sectionTitle: "From 1976 to Present: 30+ Years Heritage",
    sectionSubtitle:
      "A 5-station historical journey from Zeytinburnu streets to neighborhood markets, wholesale expansion, and corporate leadership.",
    keyLessonLabel: "Foundational Principle & Ethos",
    phaseLabel: "Phase",
  },
  ar: {
    sectionBadge: "مسيرة داوود غينتش الريادية",
    sectionTitle: "من 1976 إلى اليوم: مسيرة نجاح تمتد لأكثر من 30 عاماً",
    sectionSubtitle:
      "مسار تاريخي انسيابي من 5 محطات يمتد من أزقة زيتين بورنو العريقة، إلى أسواق الخضار، فتجارة الجملة الكبرى، وتأسيس صرح المقاولات وصيانة السيارات.",
    keyLessonLabel: "المبدأ التجاري الراسخ والخبرة",
    phaseLabel: "المرحلة",
  },
} as const;

export function FounderJourneyMap({
  milestones,
  className = "",
}: FounderJourneyMapProps) {
  const { locale } = useLanguage();
  const c = COPY[locale];

  return (
    <div className={`space-y-8 sm:space-y-12 ${className}`}>
      {/* SECTION HEADER - CLEAN & AIRY */}
      <div className="space-y-2 max-w-3xl pb-6 border-b border-[#D8D3C7]">
        <div className="inline-block border-s-2 border-[#69715F] ps-3 py-0.5">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#69715F] font-bold">
            {c.sectionBadge}
          </span>
        </div>
        <h2 className="font-display-editorial text-2xl sm:text-4xl lg:text-5xl text-[#45483F] leading-tight font-medium">
          {c.sectionTitle}
        </h2>
        <p className="text-xs sm:text-sm text-[#69715F] font-light leading-relaxed">
          {c.sectionSubtitle}
        </p>
      </div>

      {/* CONTINUOUS VERTICAL TIMELINE STREAM (ZERO CLICKS, NATURAL SMOOTH SCROLL) */}
      <div className="relative ps-6 sm:ps-10 ms-2 sm:ms-4 border-s-2 border-[#D8D3C7] space-y-8 sm:space-y-12">
        {milestones.map((item, idx) => (
          <div key={item.year} className="relative group">
            {/* Timeline Station Pin on the Vertical Track */}
            <div className="absolute -start-[31px] sm:-start-[49px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#45483F] text-[#F3F0E8] border-2 border-[#E8E4DA] shadow flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold transition-transform duration-300 group-hover:scale-110">
              0{idx + 1}
            </div>

            {/* Station Content Card */}
            <div className="bg-[#F3F0E8] border border-[#D8D3C7] p-5 sm:p-7 lg:p-8 relative overflow-hidden shadow-sm hover:border-[#45483F] transition-all duration-300 space-y-4">
              <ArchitecturalCornerTicks />

              {/* Top Meta Row: Year, Badge, Phase & Location */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D3C7] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-display-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#45483F] tracking-tight">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#45483F] text-[#F3F0E8] text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#69715F]">
                  <MapPinIcon className="h-3.5 w-3.5 text-[#69715F] shrink-0" />
                  <span className="font-medium text-[#45483F]">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Station Title & Scope */}
              <div className="space-y-1">
                <h3 className="font-display-editorial text-xl sm:text-2xl text-[#45483F] font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#69715F]">
                  {item.scope}
                </p>
              </div>

              {/* Key Business Philosophy (Quote Callout) */}
              <div className="p-3.5 sm:p-4 bg-[#E8E4DA] border-s-3 border-[#69715F] text-[#45483F] space-y-1 shadow-sm">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-[#69715F] font-bold block">
                  {c.keyLessonLabel}
                </span>
                <p className="font-display-editorial text-sm sm:text-base italic font-medium text-[#353830] leading-relaxed">
                  “{item.keyLesson}”
                </p>
              </div>

              {/* Full Narrative Text (Comfortable, relaxing typography) */}
              <p className="text-xs sm:text-sm text-[#45483F]/85 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
