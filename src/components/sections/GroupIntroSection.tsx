"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { EditorialReveal } from "@/components/ui/StoryScrollArchitecture";
import { useLanguage } from "@/context/LanguageContext";

export function GroupIntroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="bolum-felsefe"
      ref={sectionRef}
      aria-labelledby="group-intro-heading"
      className="section-padding relative bg-[#F3F0E8] text-[#45483F] border-b border-[#D8D3C7] overflow-hidden"
    >
      <div className="container-editorial relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Editorial Heading Column */}
          <div className="lg:col-span-4 space-y-4 lg:space-y-5 lg:sticky lg:top-32">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F]">
              {t.philosophy.overline}
            </p>
            <EditorialReveal>
              <h2
                id="group-intro-heading"
                className="font-display-editorial text-3xl sm:text-5xl text-[#45483F] leading-[1.08]"
              >
                {t.philosophy.headline}
              </h2>
            </EditorialReveal>
            <p className="hidden lg:block text-sm text-[#69715F] leading-relaxed pt-1">
              {t.philosophy.sideNote}
            </p>
          </div>

          {/* Center Scroll-Linked Architectural Spine (Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center self-stretch">
            <div className="relative h-full w-[1px] bg-[#D8D3C7]">
              <motion.div
                style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                className="absolute inset-0 w-full bg-[#45483F]"
              />
            </div>
          </div>

          {/* Right Narrative Column — Structured Architectural Cards on Mobile & Desktop */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-editorial text-xl sm:text-3xl lg:text-4xl text-[#45483F] leading-[1.32]"
            >
              {t.philosophy.leadParagraph}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.65, delay: 0.06 }}
                className="bg-[#E8E4DA]/80 border border-[#D8D3C7] p-5 sm:p-7 space-y-2.5"
              >
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#69715F] block">
                  {t.philosophy.col1Overline}
                </span>
                <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F]">
                  {t.philosophy.col1Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed">
                  {t.philosophy.col1Body}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.65, delay: 0.14 }}
                className="bg-[#E8E4DA]/80 border border-[#D8D3C7] p-5 sm:p-7 space-y-2.5"
              >
                <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#69715F] block">
                  {t.philosophy.col2Overline}
                </span>
                <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F]">
                  {t.philosophy.col2Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed">
                  {t.philosophy.col2Body}
                </p>
              </motion.div>
            </div>

            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3 border border-[#D8D3C7] sm:border-0 sm:border-b sm:border-[#A5AA98] bg-[#E8E4DA]/50 sm:bg-transparent px-5 py-3.5 sm:px-0 sm:py-0 sm:pb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F] transition-colors"
              >
                <span>{t.philosophy.cta}</span>
                <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
