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
  AUTO_ASSEMBLY_STAGES_BY_LOCALE,
} from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function AutomotiveAssemblyStory() {
  const { locale, isRtl, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages =
    AUTO_ASSEMBLY_STAGES_BY_LOCALE[locale] || AUTO_ASSEMBLY_STAGES_BY_LOCALE.tr;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll controls stage changes automatically on ALL screens (mobile & desktop)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.24) setActiveStage(0);
    else if (latest < 0.52) setActiveStage(1);
    else if (latest < 0.76) setActiveStage(2);
    else setActiveStage(3);
  });

  const lowerChassisY = useTransform(scrollYProgress, [0, 0.16], [35, 0]);
  const upperHoodDoorY = useTransform(scrollYProgress, [0.16, 0.42], [-55, 0]);
  const upperHoodDoorOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.34],
    [0.15, 1]
  );

  const scannerLeft = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    ["-10%", "105%"]
  );
  const scannerOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.54, 0.71, 0.76],
    [0, 1, 1, 0]
  );

  const closedCarClip = useTransform(
    scrollYProgress,
    [0.74, 0.92],
    [
      "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ]
  );
  const imageZoom = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.04]);

  const currentStage = stages[activeStage];

  return (
    <section
      id="otomotiv-montaj-hikayesi"
      ref={containerRef}
      aria-label="AutoClub Merter — 4K Automotive Assembly"
      className="relative h-[210vh] lg:h-[260vh] bg-[#45483F] text-[#F3F0E8] border-b border-[#69715F]/40"
    >
      {/* Sticky Viewport: Smooth scroll scrubbing on both mobile and desktop */}
      <div className="sticky top-14 sm:top-16 lg:top-0 h-[calc(100dvh-3.5rem)] lg:h-[100dvh] w-full overflow-hidden flex items-center py-2 sm:py-4 lg:py-0">
        <div className="container-editorial relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-12 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-3 sm:space-y-5">
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
                          isPassed ? "bg-[#F3F0E8]" : "bg-[#A5AA98]/25"
                        )}
                      />
                      <span
                        className={cn(
                          "block text-[10px] sm:text-[11px] uppercase tracking-[0.06em] leading-tight truncate",
                          isActive
                            ? "text-[#F3F0E8] font-semibold"
                            : "text-[#A5AA98]"
                        )}
                      >
                        {stage.shortLabel}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-1.5 sm:space-y-3">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#A5AA98]">
                  AutoClub Merter · {t.assembly.stageLabel} {currentStage.code}
                </p>
                <h2 className="font-display-editorial text-xl sm:text-3xl lg:text-5xl text-[#F3F0E8] leading-[1.12]">
                  {currentStage.title}
                </h2>
                <p className="text-xs sm:text-base text-[#D8D3C7] font-light leading-relaxed max-w-lg line-clamp-3 sm:line-clamp-none">
                  {currentStage.description}
                </p>
              </div>

              <div className="pt-0.5 sm:pt-2">
                <Link
                  href="/automotive"
                  className="inline-flex items-center gap-2 border-b border-[#F3F0E8]/40 pb-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-[#F3F0E8] hover:border-[#F3F0E8] transition-colors"
                >
                  <span>{t.assembly.autoCta}</span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>

            {/* 4K Layered Automotive Stage */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                dir="ltr"
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-[#69715F]/40 bg-[#353830] shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #A5AA98 1px, transparent 1px), linear-gradient(to bottom, #A5AA98 1px, transparent 1px)",
                    backgroundSize: "2.5rem 2.5rem",
                  }}
                />

                <motion.div
                  style={{ scale: imageZoom }}
                  className="relative w-full h-full"
                >
                  {/* LAYER 1: BASE CHASSIS */}
                  <motion.div
                    style={{ y: lowerChassisY }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-automotive-4k.jpg"
                      alt="Otomotiv Şasi ve Altyapı"
                      fill
                      unoptimized
                      priority
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* LAYER 2: UPPER PANELS & DOORS */}
                  <motion.div
                    style={{
                      y: upperHoodDoorY,
                      opacity: upperHoodDoorOpacity,
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-automotive-4k.jpg"
                      alt="Kaporta ve Gövde Panelleri"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* STAGE 3 SCANNER HUD BEAM */}
                  <motion.div
                    style={{
                      left: scannerLeft,
                      opacity: scannerOpacity,
                    }}
                    className="pointer-events-none absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[#E8E4DA]/40 to-transparent z-20"
                  >
                    <div className="h-full w-[2px] bg-[#F3F0E8] mx-auto shadow-[0_0_15px_#F3F0E8]" />
                  </motion.div>

                  {/* STAGE 4 COMPLETE ASSEMBLED CAR */}
                  <motion.div
                    style={{ clipPath: closedCarClip }}
                    className="absolute inset-0 w-full h-full z-10"
                  >
                    <Image
                      src="/images/hero-automotive.png"
                      alt="AutoClub Merter Kusursuz Teslimat"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
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
                        id="arrowHead"
                        viewBox="0 0 10 10"
                        refX="6"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#F3F0E8" />
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
                            stroke="#F3F0E8"
                            strokeWidth="0.45"
                            markerEnd="url(#arrowHead)"
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
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#F3F0E8] text-[#45483F] text-[9px] sm:text-[10px] font-semibold shadow-md ring-4 ring-[#45483F]/70"
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
                              "hidden md:block absolute -translate-y-1/2 bg-[#353830]/95 backdrop-blur-md border border-[#F3F0E8]/35 px-3 py-1.5 shadow-md max-w-[230px]",
                              c.cardAlign === "left" ? "-translate-x-full" : ""
                            )}
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#F3F0E8] leading-snug">
                              {c.num} · {c.title}
                            </p>
                          </motion.div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Complete 3-Part Automotive Legend Strip (Desktop) */}
              <div className="hidden sm:grid grid-cols-3 gap-2 pt-2.5">
                {currentStage.callouts.map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#353830] border border-[#69715F]/40 px-3 py-2 flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8E4DA] text-[#45483F] text-[10px] font-bold">
                      {c.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-[#F3F0E8] leading-snug">
                        {c.title}
                      </p>
                      <p className="text-[10px] text-[#A5AA98] leading-snug mt-0.5">
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
                    className="flex-1 bg-[#353830] border border-[#69715F]/40 px-2 py-1.5 flex items-center gap-1.5 min-w-0"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E8E4DA] text-[#45483F] text-[9px] font-bold">
                      {c.num}
                    </span>
                    <p className="text-[10px] font-semibold text-[#F3F0E8] leading-tight truncate">
                      {c.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
