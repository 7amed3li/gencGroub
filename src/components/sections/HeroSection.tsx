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
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#45483F] text-[#F3F0E8] flex flex-col justify-between pt-28 pb-10"
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
            unoptimized
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
        className="container-editorial relative z-10 my-auto py-10"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] sm:text-xs uppercase text-[#D8D3C7] tracking-[0.24em] mb-4 sm:mb-6"
          >
            {t.hero.overline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-editorial text-4xl sm:text-6xl lg:text-[5.25rem] font-medium tracking-tight text-[#F3F0E8] leading-[1.04]"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-sm sm:text-lg text-[#D8D3C7] font-light leading-relaxed"
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
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-8"
          >
            <a
              href="#faaliyet-alanlari"
              className="group inline-flex items-center gap-3 bg-[#F3F0E8] text-[#45483F] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#D8D3C7]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] border-b border-[#D8D3C7]/50 pb-1.5 hover:border-[#F3F0E8] transition-colors"
            >
              <span>{t.hero.secondaryCta}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal Bottom Signature Bar */}
      <div className="container-editorial relative z-10">
        <div className="flex items-center justify-between border-t border-[#D8D3C7]/20 pt-5 text-[11px] uppercase tracking-[0.18em] text-[#D8D3C7]/85">
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
