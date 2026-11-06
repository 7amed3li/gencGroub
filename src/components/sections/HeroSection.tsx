"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { BRAND_INFO } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { locale, t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="bolum-giris"
      ref={heroRef}
      aria-label="Genç Group"
      className="relative min-h-[90dvh] lg:min-h-[100dvh] w-full overflow-hidden bg-[#45483F] text-[#F3F0E8] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10"
    >
      {/* Background Photography with Clear Natural Contrast */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/atelier-daylight.jpg"
            alt="Genç Group — Otomotiv ve Mimari Yapı"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#353830]/95 via-[#45483F]/55 to-[#353830]/60" />
      </div>

      {/* Top Spacer */}
      <div aria-hidden="true" />

      {/* Center Editorial Composition */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-editorial relative z-10 my-auto py-8 sm:py-10"
      >
        <div className="max-w-4xl">
          {/* SEO: descriptive H1 rendered visible in the initial HTML (no entrance opacity). */}
          <h1 className="text-[11px] sm:text-xs uppercase text-[#D8D3C7] tracking-[0.22em] mb-3.5 sm:mb-6 font-normal leading-relaxed">
            {t.hero.overline}
          </h1>

          <p className="font-display-editorial text-[2.35rem] sm:text-6xl lg:text-[5.25rem] font-medium tracking-tight text-[#F3F0E8] leading-[1.06]">
            {t.hero.headline}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-lg text-[#D8D3C7] font-light leading-relaxed"
          >
            {locale === "tr" ? (
              <>
                {BRAND_INFO.name}; {t.hero.introPart1}{" "}
                <strong className="font-medium text-[#F3F0E8]">
                  AutoClub Merter
                </strong>{" "}
                {t.hero.introPart2}{" "}
                <strong className="font-medium text-[#F3F0E8]">
                  Genç Group İnşaat
                </strong>{" "}
                {t.hero.introPart3}
              </>
            ) : (
              <>
                {BRAND_INFO.name} {t.hero.introPart1}{" "}
                <strong className="font-medium text-[#F3F0E8]">
                  AutoClub Merter
                </strong>{" "}
                {t.hero.introPart2}{" "}
                <strong className="font-medium text-[#F3F0E8]">
                  Genç Group İnşaat
                </strong>{" "}
                {t.hero.introPart3}
              </>
            )}
          </motion.p>

          {/* Clean Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          >
            <a
              href="#faaliyet-alanlari"
              className="group inline-flex items-center justify-between sm:justify-center gap-3 bg-[#F3F0E8] text-[#45483F] px-6 sm:px-7 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-[#D8D3C7]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center sm:justify-start gap-2 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] border-b border-[#D8D3C7]/50 pb-1.5 self-center sm:self-auto hover:border-[#F3F0E8] transition-colors"
            >
              <span>{t.hero.secondaryCta}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal Bottom Signature Bar */}
      <div className="container-editorial relative z-10">
        <div className="flex items-center justify-between border-t border-[#D8D3C7]/20 pt-4 sm:pt-5 text-[11px] uppercase tracking-[0.16em] text-[#D8D3C7]/85">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link
              href="/automotive"
              className="hover:text-[#F3F0E8] transition-colors"
            >
              AutoClub Merter
            </Link>
            <span className="text-[#A5AA98]/50">/</span>
            <Link
              href="/construction"
              className="hover:text-[#F3F0E8] transition-colors"
            >
              Genç Group İnşaat
            </Link>
          </div>
          <span className="hidden sm:inline text-[#A5AA98]">
            {t.hero.location}
          </span>
        </div>
      </div>
    </section>
  );
}
