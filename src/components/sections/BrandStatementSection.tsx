"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EditorialReveal } from "@/components/ui/StoryScrollArchitecture";
import { useLanguage } from "@/context/LanguageContext";

const PILLARS_BY_LOCALE = {
  tr: ["01 · Milimetrik Hassasiyet", "02 · Kalıcı Değer", "03 · Usta İşçilik"],
  en: ["01 · Millimetric Precision", "02 · Enduring Value", "03 · Master Craft"],
  ar: ["٠١ · دقة مليمترية", "٠٢ · قيمة مستدامة", "٠٣ · حرفية متقنة"],
};

export function BrandStatementSection() {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Desktop parallax shift
  const bgTextXDesktop = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);
  // Mobile parallax shift: wider responsive travel
  const bgTextXMobile = useTransform(scrollYProgress, [0, 1], ["8%", "-28%"]);

  const pillars = PILLARS_BY_LOCALE[locale as keyof typeof PILLARS_BY_LOCALE] || PILLARS_BY_LOCALE.tr;

  return (
    <section
      id="bolum-manifesto"
      ref={sectionRef}
      aria-label="Genç Group Quality Ethos"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#45483F] text-[#F3F0E8] border-b border-[#69715F]/30 overflow-hidden"
    >
      {/* Background Architectural Halo Rings - Pure Luxury Depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div className="w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[620px] rounded-full border border-[#F3F0E8]/[0.05]" />
        <div className="absolute w-[200px] h-[200px] sm:w-[340px] sm:h-[340px] lg:w-[440px] lg:h-[440px] rounded-full border border-[#F3F0E8]/[0.04]" />
        
        {/* Mobile-Optimized Centered Monogram Watermark (Ensures perfect balance when stationary) */}
        <div className="lg:hidden absolute flex flex-col items-center justify-center text-center opacity-70">
          <span className="font-display-editorial text-[22vw] sm:text-[18vw] leading-none uppercase text-transparent [-webkit-text-stroke:1px_rgba(243,240,232,0.12)] tracking-widest">
            GENÇ
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-[#A5AA98]/40 mt-1">
            EST. MERTER · İSTANBUL
          </span>
        </div>
      </div>

      {/* Kinetic Watermark Typography with Soft Edge-Fading Gradients */}
      <div
        aria-hidden="true"
        dir="ltr"
        className="pointer-events-none select-none absolute inset-0 flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
      >
        {/* Mobile Kinetic Watermark: High crispness & stroke */}
        <motion.div
          style={{ x: bgTextXMobile }}
          className="lg:hidden whitespace-nowrap font-display-editorial text-[14vw] sm:text-[11vw] leading-none uppercase tracking-[0.14em] text-transparent [-webkit-text-stroke:1px_rgba(243,240,232,0.14)] select-none will-change-transform"
        >
          AUTOCLUB MERTER — GENÇ GROUP İNŞAAT — HASSASİYET VE GÜÇ —
        </motion.div>

        {/* Desktop Kinetic Watermark: Expansive panoramic architectural script */}
        <motion.div
          style={{ x: bgTextXDesktop }}
          className="hidden lg:block whitespace-nowrap font-display-editorial text-[12vw] leading-none tracking-[0.1em] uppercase text-transparent [-webkit-text-stroke:1.2px_rgba(243,240,232,0.13)] select-none will-change-transform"
        >
          GENÇ GROUP — AUTOCLUB MERTER — GENÇ GROUP İNŞAAT — EST. 1998 —
        </motion.div>
      </div>

      {/* Foreground Editorial Quote */}
      <div className="container-editorial relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Subtle Decorative Line Accent */}
        <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
          <span className="w-6 sm:w-10 h-px bg-[#A5AA98]/40" />
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#A5AA98] font-medium">
            {t.manifesto.overline}
          </p>
          <span className="w-6 sm:w-10 h-px bg-[#A5AA98]/40" />
        </div>

        <blockquote className="font-display-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F3F0E8] leading-[1.2] sm:leading-[1.12]">
          <EditorialReveal>
            <span className="block drop-shadow-sm">{t.manifesto.line1}</span>
          </EditorialReveal>
          <EditorialReveal delay={0.12}>
            <span className="block text-[#D8D3C7] mt-2.5 sm:mt-3 drop-shadow-sm font-light">
              {t.manifesto.line2}
            </span>
          </EditorialReveal>
        </blockquote>

        {/* Quality Ethos Badges / Pillars */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#D8D3C7] font-sans">
          {pillars.map((pillar, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full border border-[#69715F]/40 bg-[#353830]/50 backdrop-blur-sm shadow-sm"
            >
              {pillar}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
