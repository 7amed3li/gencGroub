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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
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
      className="relative h-auto py-14 sm:py-20 lg:py-0 lg:h-[270vh] bg-[#45483F] text-[#F3F0E8] border-b border-[#69715F]/40"
    >
      {/* Responsive Stage: Natural flow on Mobile, Sticky on Desktop */}
      <div className="lg:sticky lg:top-0 lg:h-[100dvh] w-full lg:overflow-hidden flex items-center lg:pt-20 lg:pb-6">
        <div className="container-editorial relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-5 sm:space-y-6">
              {/* Interactive 4-Step Stage Selector (Tappable on Mobile & Desktop) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {stages.map((stage, idx) => {
                  const isActive = idx === activeStage;
                  return (
                    <button
                      key={stage.code}
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      className={cn(
                        "text-start p-2.5 sm:p-0 sm:bg-transparent border sm:border-0 transition-all duration-300 cursor-pointer",
                        isActive
                          ? "bg-[#353830] border-[#F3F0E8]/50"
                          : "bg-[#3A3D35]/60 border-[#A5AA98]/20 hover:border-[#A5AA98]/50"
                      )}
                    >
                      <div
                        className={cn(
                          "hidden sm:block h-[2px] w-full mb-1.5 transition-colors duration-500",
                          idx <= activeStage
                            ? "bg-[#F3F0E8]"
                            : "bg-[#A5AA98]/25"
                        )}
                      />
                      <span
                        className={cn(
                          "block text-[11px] uppercase tracking-[0.06em] leading-snug",
                          isActive
                            ? "text-[#F3F0E8] font-semibold"
                            : "text-[#D8D3C7]/70"
                        )}
                      >
                        {stage.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2.5 sm:space-y-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#A5AA98]">
                  AutoClub Merter · {t.assembly.stageLabel} {currentStage.code}
                </p>
                <h2 className="font-display-editorial text-2xl sm:text-4xl lg:text-5xl text-[#F3F0E8] leading-[1.12]">
                  {currentStage.title}
                </h2>
                <p className="text-xs sm:text-base text-[#D8D3C7] font-light leading-relaxed max-w-lg">
                  {currentStage.description}
                </p>
              </div>

              <div className="pt-1">
                <Link
                  href="/automotive"
                  className="inline-flex items-center gap-2.5 border-b border-[#F3F0E8]/60 pb-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#F3F0E8] hover:border-[#F3F0E8] transition-colors"
                >
                  <span>{t.assembly.autoCta}</span>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 4K Photorealistic Exploded-to-Assembled Car Stage + Animated SVG Leader Arrows */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div
                dir="ltr"
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-[#A5AA98]/40 bg-[#353830] shadow-2xl"
              >
                <motion.div
                  style={{ scale: imageZoom }}
                  className="relative w-full h-full"
                >
                  {/* BASE LAYER (Stages 1-3): 4K EXPLODED AUTOMOTIVE ANATOMY */}
                  <motion.div
                    style={{
                      y: lowerChassisY,
                      clipPath:
                        "polygon(0% 45%, 100% 45%, 100% 100%, 0% 100%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-automotive-4k.jpg"
                      alt="AutoClub Merter 4K Chassis"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  <motion.div
                    style={{
                      y: upperHoodDoorY,
                      opacity: upperHoodDoorOpacity,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 46%, 0% 46%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-automotive-4k.jpg"
                      alt="AutoClub Merter 4K Bodywork"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* STAGE 3: OPTICAL LED LASER BEAM SWEEPING ACROSS CAR */}
                  <motion.div
                    style={{
                      left: scannerLeft,
                      opacity: scannerOpacity,
                    }}
                    className="pointer-events-none absolute top-0 bottom-0 z-15 w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F3F0E8]/45 to-transparent flex items-center justify-center"
                  >
                    <div className="h-full w-[2px] bg-[#F3F0E8] shadow-[0_0_20px_#F3F0E8]" />
                  </motion.div>

                  {/* STAGE 4 (or Mobile Tab 4): COMPLETED CLOSED-BODY 4K GRAND TOURER */}
                  <motion.div
                    style={
                      activeStage === 3
                        ? { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
                        : { clipPath: closedCarClip }
                    }
                    className="absolute inset-0 z-10 w-full h-full"
                  >
                    <Image
                      src="/images/atelier-daylight.jpg"
                      alt="AutoClub Merter 4K Completed Finish"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  <div className="pointer-events-none absolute inset-0 z-15 bg-gradient-to-t from-[#262822]/45 via-transparent to-[#262822]/30" />

                  {/* ANIMATED SVG CALLOUT ARROWS */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 z-20 h-full w-full"
                  >
                    <defs>
                      <marker
                        id="autoArrowHead"
                        markerWidth="4"
                        markerHeight="4"
                        refX="2.5"
                        refY="2"
                        orient="auto"
                      >
                        <path d="M0,0 L4,2 L0,4 Z" fill="#F3F0E8" />
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
                            strokeWidth="0.5"
                            markerEnd="url(#autoArrowHead)"
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* HTML Target Nodes + Sleek Floating Pointer Labels */}
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
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#F3F0E8] text-[#45483F] text-[9px] sm:text-[10px] font-bold shadow-lg ring-4 ring-[#45483F]/75"
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
                              "hidden md:block absolute -translate-y-1/2 bg-[#45483F]/95 backdrop-blur-md border border-[#F3F0E8]/50 px-3 py-1.5 shadow-xl max-w-[230px]",
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

              {/* Complete, Untruncated 3-Part Technical Legend Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2.5">
                {currentStage.callouts.map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#3A3D35] border border-[#A5AA98]/35 px-3 py-2 flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F3F0E8] text-[#45483F] text-[10px] font-bold">
                      {c.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-[#F3F0E8] leading-snug">
                        {c.title}
                      </p>
                      <p className="text-[10px] text-[#D8D3C7] leading-snug mt-0.5">
                        {c.spec}
                      </p>
                    </div>
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
