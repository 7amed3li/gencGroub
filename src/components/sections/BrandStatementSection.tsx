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

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-16%"]);

  return (
    <section
      id="bolum-manifesto"
      ref={sectionRef}
      aria-label="Genç Group Quality Ethos"
      className="relative py-28 lg:py-36 bg-[#45483F] text-[#F3F0E8] border-b border-[#69715F]/30 overflow-hidden"
    >
      <motion.div
        style={{ x: bgTextX }}
        aria-hidden="true"
        dir="ltr"
        className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display-editorial text-[16vw] leading-none text-[#F3F0E8]/[0.03] tracking-tight"
      >
        GENÇ GROUP — AUTOCLUB MERTER — GENÇ GROUP İNŞAAT
      </motion.div>

      <div className="container-editorial relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.24em] text-[#A5AA98] mb-6">
          {t.manifesto.overline}
        </p>

        <blockquote className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F3F0E8] leading-[1.12]">
          <EditorialReveal>
            <span className="block">{t.manifesto.line1}</span>
          </EditorialReveal>
          <EditorialReveal delay={0.12}>
            <span className="block text-[#D8D3C7] mt-2">
              {t.manifesto.line2}
            </span>
          </EditorialReveal>
        </blockquote>
      </div>
    </section>
  );
}
