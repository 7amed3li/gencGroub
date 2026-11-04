"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import {
  useLanguage,
  CONSTRUCTION_ASSEMBLY_STAGES_BY_LOCALE,
} from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function ConstructionAssemblyStory() {
  const { locale, isRtl, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages =
    CONSTRUCTION_ASSEMBLY_STAGES_BY_LOCALE[locale] ||
    CONSTRUCTION_ASSEMBLY_STAGES_BY_LOCALE.tr;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll controls stage changes automatically on ALL screens (mobile & desktop)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.24) setActiveStage(0);
    else if (latest < 0.52) setActiveStage(1);
    else if (latest < 0.78) setActiveStage(2);
    else setActiveStage(3);
  });

  const tier1Y = useTransform(scrollYProgress, [0, 0.16], [45, 0]);
  const tier1Opacity = useTransform(scrollYProgress, [0, 0.1], [0.25, 1]);

  const tier2Y = useTransform(scrollYProgress, [0.18, 0.42], [-65, 0]);
  const tier2Opacity = useTransform(scrollYProgress, [0.18, 0.34], [0, 1]);

  const tier3Y = useTransform(scrollYProgress, [0.46, 0.7], [-85, 0]);
  const tier3Opacity = useTransform(scrollYProgress, [0.46, 0.62], [0, 1]);

  const stageScale = useTransform(scrollYProgress, [0.74, 0.96], [1, 1.035]);
  const seamLineOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.72, 0.85],
    [0.75, 0.85, 0.6, 0]
  );

  const currentStage = stages[activeStage];

  return (
    <section
      id="insaat-montaj-hikayesi"
      ref={containerRef}
      aria-label="Genç Group İnşaat — 4K Architectural Build"
      className="relative h-[210vh] lg:h-[260vh] bg-[#E8E4DA] text-[#45483F] border-b border-[#D8D3C7]"
    >
      {/* Sticky Viewport: Smooth scroll scrubbing on both mobile and desktop */}
      <div className="sticky top-14 sm:top-16 lg:top-0 h-[calc(100dvh-3.5rem)] lg:h-[100dvh] w-full overflow-hidden flex items-center py-2 sm:py-4 lg:py-0">
        <div className="container-editorial relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-12 items-center">
            {/* 4K Layered Architectural Stage */}
            <div className="lg:col-span-7 order-1">
              <div
                dir="ltr"
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-[#A5AA98] bg-[#EAE3D2] shadow-lg"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #A5AA98 1px, transparent 1px), linear-gradient(to bottom, #A5AA98 1px, transparent 1px)",
                    backgroundSize: "2.5rem 2.5rem",
                  }}
                />

                <motion.div
                  style={{ scale: stageScale }}
                  className="relative w-full h-full"
                >
                  {/* LAYER 1: FOUNDATION PLINTH & RETAINING WALL */}
                  <motion.div
                    style={{
                      y: tier1Y,
                      opacity: tier1Opacity,
                      clipPath:
                        "polygon(0% 57.5%, 100% 57.5%, 100% 100%, 0% 100%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-architecture-4k.jpg"
                      alt="Traverten Kaide ve Radye Temel"
                      fill
                      unoptimized
                      priority
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* LAYER 2: BRUT CONCRETE COLUMNS & RESIDENTIAL CORE */}
                  <motion.div
                    style={{
                      y: tier2Y,
                      opacity: tier2Opacity,
                      clipPath:
                        "polygon(0% 31%, 100% 31%, 100% 58.5%, 0% 58.5%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-architecture-4k.jpg"
                      alt="Taşıyıcı Brüt Beton Kolonlar ve Cam Cephe"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* LAYER 3: CANTILEVER TERRACE & UPPER ROOF */}
                  <motion.div
                    style={{
                      y: tier3Y,
                      opacity: tier3Opacity,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 32%, 0% 32%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-architecture-4k.jpg"
                      alt="Konsol Teras ve Üst Çatı Döşemesi"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* TECHNICAL ALIGNMENT GUIDES */}
                  <motion.div
                    style={{ opacity: seamLineOpacity }}
                    className="pointer-events-none absolute inset-0 z-10"
                  >
                    <div className="absolute top-[32%] left-0 right-0 border-b border-dashed border-[#45483F]/50" />
                    <div className="absolute top-[58%] left-0 right-0 border-b border-dashed border-[#45483F]/50" />
                  </motion.div>

                  {/* Dynamic SVG Leader Arrows */}
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <marker
                        id="archArrowHead"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#45483F" />
                      </marker>
                    </defs>

                    {currentStage.callouts.map((c) => {
                      const endX =
                        c.cardAlign === "right" ? c.elbowX + 6 : c.elbowX - 6;
                      return (
                        <g key={c.id}>
                          <motion.polyline
                            key={`line-${c.id}`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            points={`${endX},${c.elbowY} ${c.elbowX},${c.elbowY} ${c.targetX},${c.targetY}`}
                            fill="none"
                            stroke="#45483F"
                            strokeWidth="0.45"
                            markerEnd="url(#archArrowHead)"
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* HTML Target Pins */}
                  <div className="pointer-events-none absolute inset-0 z-30">
                    {currentStage.callouts.map((c) => {
                      const badgeLeft =
                        c.cardAlign === "right" ? c.elbowX + 6 : c.elbowX - 6;
                      return (
                        <React.Fragment key={c.id}>
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            style={{
                              left: `${c.targetX}%`,
                              top: `${c.targetY}%`,
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#45483F] text-[#F3F0E8] text-[9px] sm:text-[10px] font-semibold shadow-md ring-4 ring-[#F3F0E8]/70"
                          >
                            {c.num}
                          </motion.div>

                          <motion.div
                            dir={isRtl ? "rtl" : "ltr"}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            style={{
                              left: `${badgeLeft}%`,
                              top: `${c.elbowY}%`,
                            }}
                            className={cn(
                              "hidden md:block absolute -translate-y-1/2 bg-[#F3F0E8]/95 backdrop-blur-md border border-[#45483F]/35 px-3 py-1.5 shadow-md max-w-[230px]",
                              c.cardAlign === "left" ? "-translate-x-full" : ""
                            )}
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#45483F] leading-snug">
                              {c.num} · {c.title}
                            </p>
                          </motion.div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Complete 3-Part Architectural Legend Strip (Desktop) */}
              <div className="hidden sm:grid grid-cols-3 gap-2 pt-2.5">
                {currentStage.callouts.map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#F3F0E8] border border-[#D8D3C7] px-3 py-2 flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#45483F] text-[#F3F0E8] text-[10px] font-bold">
                      {c.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-[#45483F] leading-snug">
                        {c.title}
                      </p>
                      <p className="text-[10px] text-[#69715F] leading-snug mt-0.5">
                        {c.spec}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Compact Callout Badges (Single sleek row) */}
              <div className="sm:hidden flex items-center justify-between gap-1.5 pt-2">
                {currentStage.callouts.map((c) => (
                  <div
                    key={c.id}
                    className="flex-1 bg-[#F3F0E8] border border-[#D8D3C7] px-2 py-1.5 flex items-center gap-1.5 min-w-0"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#45483F] text-[#F3F0E8] text-[9px] font-bold">
                      {c.num}
                    </span>
                    <p className="text-[10px] font-semibold text-[#45483F] leading-tight truncate">
                      {c.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 order-2 space-y-3 sm:space-y-5">
              {/* Sleek 4-Step Progress Indicator (Synchronized with scroll automatically) */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {stages.map((stage, idx) => {
                  const isActive = idx === activeStage;
                  const isPassed = idx <= activeStage;
                  return (
                    <div
                      key={stage.code}
                      className="text-start transition-all duration-300"
                    >
                      <div
                        className={cn(
                          "h-[2px] w-full mb-1 sm:mb-1.5 transition-colors duration-500",
                          isPassed ? "bg-[#45483F]" : "bg-[#A5AA98]/40"
                        )}
                      />
                      <span
                        className={cn(
                          "block text-[10px] sm:text-[11px] uppercase tracking-[0.06em] leading-tight truncate",
                          isActive
                            ? "text-[#45483F] font-semibold"
                            : "text-[#69715F]"
                        )}
                      >
                        {stage.shortLabel}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-1.5 sm:space-y-3">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#69715F]">
                  Genç Group İnşaat · {t.assembly.stageLabel} {currentStage.code}
                </p>
                <h2 className="font-display-editorial text-xl sm:text-3xl lg:text-5xl text-[#45483F] leading-[1.12]">
                  {currentStage.title}
                </h2>
                <p className="text-xs sm:text-base text-[#69715F] font-light leading-relaxed max-w-lg line-clamp-3 sm:line-clamp-none">
                  {currentStage.description}
                </p>
              </div>

              <div className="pt-0.5 sm:pt-2">
                <Link
                  href="/construction"
                  className="inline-flex items-center gap-2 border-b border-[#45483F]/60 pb-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-[#45483F] hover:border-[#45483F] transition-colors"
                >
                  <span>{t.assembly.consCta}</span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
