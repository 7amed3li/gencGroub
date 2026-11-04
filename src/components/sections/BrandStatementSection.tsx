"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EditorialReveal } from "@/components/ui/StoryScrollArchitecture";
import { useLanguage } from "@/context/LanguageContext";

export function BrandStatementSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax across mobile & desktop
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["4%", "-24%"]);

  return (
    <section
      id="bolum-manifesto"
      ref={sectionRef}
      aria-label="Genç Group Quality Ethos"
      className="relative py-28 sm:py-32 lg:py-36 bg-[#45483F] text-[#F3F0E8] border-b border-[#69715F]/30 overflow-hidden"
    >
      {/* Single Clean Architectural Watermark - Exactly like Desktop, Proportioned & Visible */}
      <motion.div
        style={{ x: bgTextX }}
        aria-hidden="true"
        dir="ltr"
        className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display-editorial text-[12vw] sm:text-[11vw] lg:text-[9vw] leading-none text-[#F3F0E8]/[0.055] tracking-tight will-change-transform"
      >
        GENÇ GROUP — AUTOCLUB MERTER — GENÇ GROUP İNŞAAT — GENÇ GROUP —
      </motion.div>

      {/* Foreground Editorial Quote */}
      <div className="container-editorial relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.24em] text-[#A5AA98] mb-6">
          {t.manifesto.overline}
        </p>

        <blockquote className="font-display-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F3F0E8] leading-[1.15] sm:leading-[1.12]">
          <EditorialReveal>
            <span className="block">{t.manifesto.line1}</span>
          </EditorialReveal>
          <EditorialReveal delay={0.12}>
            <span className="block text-[#D8D3C7] mt-2 sm:mt-3">
              {t.manifesto.line2}
            </span>
          </EditorialReveal>
        </blockquote>
      </div>
    </section>
  );
}
