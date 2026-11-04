"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const MARQUEE_ITEMS = {
  tr: [
    "AUTOCLUB MERTER — PLATFORM",
    "NDOUR PAINT PROTECTION FILM",
    "AUTOCLUB CERAMIC 9H NANO COATING",
    "GENÇ GROUP İNŞAAT",
    "OPTİK LED IŞIK TÜNELİ",
    "ÇAĞDAŞ MİMARİ & YAPI DİSİPLİNİ",
    "BOYASIZ GÖÇÜK DÜZELTME",
    "ANAHTAR TESLİM PROJELER",
  ],
  en: [
    "AUTOCLUB MERTER — PLATFORM",
    "NDOUR PAINT PROTECTION FILM",
    "AUTOCLUB CERAMIC 9H NANO COATING",
    "GENÇ GROUP İNŞAAT",
    "OPTICAL LED LIGHT TUNNEL",
    "CONTEMPORARY ARCHITECTURAL DESIGN",
    "PAINTLESS DENT REPAIR",
    "TURNKEY BUILDING PROJECTS",
  ],
  ar: [
    "AUTOCLUB MERTER — PLATFORM",
    "أفلام الحماية NDOUR PPF",
    "AUTOCLUB CERAMIC 9H NANO COATING",
    "GENÇ GROUP İNŞAAT",
    "نفق الإضاءة البصرية LED",
    "العمارة الحديثة والإنشاءات",
    "إصلاح الصدمات بدون طلاء",
    "مشاريع معمارية تسليم مفتاح",
  ],
} as const;

export function LuxuryMarqueeStrip({
  variant = "stone",
}: {
  variant?: "stone" | "olive";
}) {
  const { locale } = useLanguage();
  const items = MARQUEE_ITEMS[locale];
  const repeated = [...items, ...items];

  return (
    <div
      dir="ltr"
      aria-hidden="true"
      className={cn(
        "relative w-full overflow-hidden border-b py-3.5 select-none",
        variant === "olive"
          ? "bg-[#45483F] text-[#F3F0E8] border-[#D8D3C7]/20"
          : "bg-[#E8E4DA] text-[#45483F] border-[#D8D3C7]"
      )}
    >
      <div className="animate-luxury-marquee items-center">
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="px-6 sm:px-8 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.24em] opacity-85">
              {text}
            </span>
            <span
              className={cn(
                "text-[8px]",
                variant === "olive" ? "text-[#A5AA98]" : "text-[#69715F]"
              )}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

