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
import { cn } from "@/lib/utils";

interface CalloutItem {
  id: string;
  num: string;
  targetX: number;
  targetY: number;
  elbowX: number;
  elbowY: number;
  cardAlign: "left" | "right";
  title: string;
  spec: string;
}

interface ConstructionStageData {
  code: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  callouts: CalloutItem[];
}

const CONSTRUCTION_STAGES: ConstructionStageData[] = [
  {
    code: "01 / 04",
    shortLabel: "01. Temel & Kaide",
    title: "Radye Temel, Traverten Kaide ve İstinat",
    subtitle: "Birinci Katman: Taşıyıcı Zemin ve Alt Kütle",
    description:
      "Mimari inşa süreci kademeli doğal traverten temel blokları ve brüt beton istinat duvarlarıyla başlar. Zemin terası ve yansıma havuzu milimetrik kotlarda yükselir.",
    metricLabel: "Zemin & Temel",
    metricValue: "C35/45 Beton & Traverten",
    callouts: [
      {
        id: "temel-kaide",
        num: "01",
        targetX: 38,
        targetY: 82,
        elbowX: 22,
        elbowY: 72,
        cardAlign: "left",
        title: "Kademeli Traverten Temel",
        spec: "Doğal Taş Kaide Blokları",
      },
      {
        id: "istinat-beton",
        num: "02",
        targetX: 43,
        targetY: 67,
        elbowX: 58,
        elbowY: 75,
        cardAlign: "right",
        title: "Brüt Beton İstinat Kütlesi",
        spec: "Taşıyıcı Zemin Platformu",
      },
      {
        id: "yansima-havuzu",
        num: "03",
        targetX: 76,
        targetY: 63,
        elbowX: 82,
        elbowY: 50,
        cardAlign: "left",
        title: "Monolitik Yansıma Havuzu",
        spec: "Avlu & Teras Peyzajı",
      },
    ],
  },
  {
    code: "02 / 04",
    shortLabel: "02. Cephe & Kolon",
    title: "Kesme Taş Duvarlar ve Bronz Kolonlar",
    subtitle: "İkinci Katman: Dört Cephe Taş Örgü ve Doğrama",
    description:
      "Temel kaidesinin üzerine hassas kesim doğal kalker ve traverten bloklar sıra sıra örülerek duvarları oluşturur; anodize bronz çelik kolonlar ve panoramik cam cepheler yerleşir.",
    metricLabel: "Duvar & Cephe",
    metricValue: "Kesme Taş Blok & Bronz",
    callouts: [
      {
        id: "tas-duvar-blok",
        num: "01",
        targetX: 26,
        targetY: 51,
        elbowX: 16,
        elbowY: 36,
        cardAlign: "right",
        title: "Kesme Taş Duvar Blokları",
        spec: "Milimetrik Derzli Doğal Taş Örgü",
      },
      {
        id: "bronz-kolon",
        num: "02",
        targetX: 54,
        targetY: 48,
        elbowX: 66,
        elbowY: 36,
        cardAlign: "right",
        title: "Anodize Bronz Kolonlar",
        spec: "Çelik Taşıyıcı Sistem & Cam Cephe",
      },
      {
        id: "ic-merdiven",
        num: "03",
        targetX: 42,
        targetY: 52,
        elbowX: 32,
        elbowY: 64,
        cardAlign: "left",
        title: "Konsol İç Merdiven",
        spec: "Doğal Taş Basamak Kurgusu",
      },
    ],
  },
  {
    code: "03 / 04",
    shortLabel: "03. Konsol & Çatı",
    title: "Konsol Döşeme Plakası ve Üst Kütle",
    subtitle: "Üçüncü Katman: Geniş Açıklıklı Saçak ve Üst Hacim",
    description:
      "Örülen taş duvarların ve çelik kolonların üzerine geniş açıklıklı konsol betonarme döşeme plakası ile üst katın brüt beton ve ahşap güneş kırıcı cephe kütleleri kilitlenir.",
    metricLabel: "Üst Yapı",
    metricValue: "Konsol Plaka & Teras",
    callouts: [
      {
        id: "konsol-plaka",
        num: "01",
        targetX: 43,
        targetY: 35,
        elbowX: 25,
        elbowY: 44,
        cardAlign: "left",
        title: "Konsol Betonarme Döşeme",
        spec: "Geniş Açıklıklı Mimari Saçak",
      },
      {
        id: "ust-kutle",
        num: "02",
        targetX: 33,
        targetY: 24,
        elbowX: 18,
        elbowY: 14,
        cardAlign: "right",
        title: "Üst Kat Brüt Beton Kütle",
        spec: "Dokulu Kalıp Betonarme Cephe",
      },
      {
        id: "ahsap-gunes-kirici",
        num: "03",
        targetX: 49,
        targetY: 26,
        elbowX: 66,
        elbowY: 16,
        cardAlign: "right",
        title: "Ahşap & Bronz Cephe Panelleri",
        spec: "Doğal Işık Kontrolü & Korkuluk",
      },
    ],
  },
  {
    code: "04 / 04",
    shortLabel: "04. Tamamlanan Yapı",
    title: "Kusursuz Mimari Bütünlük ve Teslimat",
    subtitle: "Dördüncü Katman: Tüm Katmanların Kenetlenmesi",
    description:
      "Temelden çatıya tüm yapı elemanları sıfır toleransla bütünleşir. Doğal taş, brüt beton, cam ve gün ışığının uyumuyla Genç Group İnşaat imzalı çağdaş yaşam alanı tamamlanır.",
    metricLabel: "Teslimat Standardı",
    metricValue: "Mimari Kusursuzluk",
    callouts: [
      {
        id: "tam-cephe",
        num: "01",
        targetX: 31,
        targetY: 48,
        elbowX: 16,
        elbowY: 34,
        cardAlign: "right",
        title: "Doğal Taş & Beton Uyumu",
        spec: "Zamansız Cephe Mimarisi",
      },
      {
        id: "panoramik-yasam",
        num: "02",
        targetX: 58,
        targetY: 49,
        elbowX: 72,
        elbowY: 35,
        cardAlign: "left",
        title: "Panoramik Yaşam Alanı",
        spec: "İç ve Dış Mekân Sürekliliği",
      },
      {
        id: "peyzaj-avlu",
        num: "03",
        targetX: 62,
        targetY: 69,
        elbowX: 76,
        elbowY: 80,
        cardAlign: "left",
        title: "Kademeli Avlu & Peyzaj",
        spec: "Anahtar Teslim Uygulama Kalitesi",
      },
    ],
  },
];

export function ConstructionAssemblyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.24) setActiveStage(0);
    else if (latest < 0.52) setActiveStage(1);
    else if (latest < 0.78) setActiveStage(2);
    else setActiveStage(3);
  });

  // Tier 1: Foundation Plinth & Retaining Wall (Bottom slice: y 58% -> 100%)
  const tier1Y = useTransform(scrollYProgress, [0, 0.16], [45, 0]);
  const tier1Opacity = useTransform(scrollYProgress, [0, 0.1], [0.25, 1]);

  // Tier 2: 4 Stone Walls, Bronze Columns & Glass Facade (Middle slice: y 36% -> 59%)
  const tier2Y = useTransform(scrollYProgress, [0.18, 0.42], [-65, 0]);
  const tier2Opacity = useTransform(scrollYProgress, [0.18, 0.34], [0, 1]);

  // Tier 3: Cantilever Concrete Slab & Upper Penthouse Volume (Top slice: y 0% -> 37%)
  const tier3Y = useTransform(scrollYProgress, [0.46, 0.7], [-85, 0]);
  const tier3Opacity = useTransform(scrollYProgress, [0.46, 0.62], [0, 1]);

  // Stage 4: Subtle luxury zoom
  const stageScale = useTransform(scrollYProgress, [0.74, 0.96], [1, 1.035]);
  const seamLineOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.72, 0.85],
    [0.75, 0.85, 0.6, 0]
  );

  const currentStage = CONSTRUCTION_STAGES[activeStage];

  return (
    <section
      id="insaat-montaj-hikayesi"
      ref={containerRef}
      aria-label="Genç Group İnşaat — 4K Katmanlı Mimari İnşa Kurgusu"
      className="relative h-[380vh] bg-[#E8E4DA] text-[#45483F] border-b border-[#D8D3C7]"
    >
      {/* Sticky Viewport Stage — Balanced Spacing & Focus on 4K Visual */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center pt-16 pb-6 sm:pt-20">
        <div className="container-editorial relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* 4K Photorealistic Layered Architectural Stage + Animated SVG Leader Arrows */}
            <div className="lg:col-span-7 order-1">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-[#A5AA98] bg-[#EAE3D2] shadow-lg">
                {/* Subtle Blueprint Grid Behind Unassembled Layers */}
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
                      clipPath: "polygon(0% 57.5%, 100% 57.5%, 100% 100%, 0% 100%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-architecture-4k.jpg"
                      alt="Genç Group İnşaat — Kademeli Traverten Temel ve İstinat Katmanı"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* LAYER 2: 4 ASHLAR STONE WALLS, BRONZE COLUMNS & GLASS */}
                  <motion.div
                    style={{
                      y: tier2Y,
                      opacity: tier2Opacity,
                      clipPath: "polygon(0% 36.5%, 100% 36.5%, 100% 58%, 0% 58%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-architecture-4k.jpg"
                      alt="Genç Group İnşaat — 4 Cephe Kesme Taş Duvar Blokları ve Bronz Kolonlar"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* LAYER 3: CANTILEVER SLAB & UPPER PENTHOUSE VOLUME */}
                  <motion.div
                    style={{
                      y: tier3Y,
                      opacity: tier3Opacity,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 37%, 0% 37%)",
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="/images/exploded-architecture-4k.jpg"
                      alt="Genç Group İnşaat — Konsol Döşeme Plakası ve Üst Mimari Kütle"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* Architectural Datum Separation Hairlines */}
                  <motion.div
                    style={{ opacity: seamLineOpacity }}
                    className="pointer-events-none absolute inset-0 z-10"
                  >
                    <div className="absolute top-[36.8%] left-0 right-0 border-t border-dashed border-[#45483F]/60" />
                    <div className="absolute top-[57.8%] left-0 right-0 border-t border-dashed border-[#45483F]/60" />
                  </motion.div>

                  {/* ANIMATED SVG CALLOUT ARROWS & TARGET PINS EXPLAINING EACH PIECE */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 z-20 h-full w-full"
                  >
                    <defs>
                      <marker
                        id="archArrowHead"
                        markerWidth="4"
                        markerHeight="4"
                        refX="2.5"
                        refY="2"
                        orient="auto"
                      >
                        <path d="M0,0 L4,2 L0,4 Z" fill="#45483F" />
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

                  {/* HTML Target Pins + Floating Callout Cards */}
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
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            style={{
                              left: `${badgeLeft}%`,
                              top: `${c.elbowY}%`,
                            }}
                            className={cn(
                              "hidden sm:block absolute -translate-y-1/2 bg-[#F3F0E8]/95 backdrop-blur-md border border-[#45483F]/30 px-2.5 py-1.5 shadow-md max-w-[190px]",
                              c.cardAlign === "left" ? "-translate-x-full" : ""
                            )}
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#45483F] leading-tight">
                              {c.num} · {c.title}
                            </p>
                            <p className="text-[10px] text-[#69715F] leading-tight mt-0.5">
                              {c.spec}
                            </p>
                          </motion.div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Mobile-Specific Callout Legend Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2.5 sm:hidden">
                {currentStage.callouts.map((c) => (
                  <div
                    key={c.id}
                    className="bg-[#F3F0E8] border border-[#D8D3C7] p-2"
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#45483F] block truncate">
                      {c.num} · {c.title}
                    </span>
                    <span className="text-[9px] text-[#69715F] block truncate mt-0.5">
                      {c.spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 order-2 space-y-6">
              {/* Single Clean 4-Step Progress Bar */}
              <div className="grid grid-cols-4 gap-2.5">
                {CONSTRUCTION_STAGES.map((stage, idx) => (
                  <div key={stage.code} className="space-y-2">
                    <div
                      className={cn(
                        "h-[2px] w-full transition-colors duration-500",
                        idx <= activeStage ? "bg-[#45483F]" : "bg-[#A5AA98]/40"
                      )}
                    />
                    <span
                      className={cn(
                        "block text-[9px] sm:text-[10px] uppercase tracking-[0.14em] truncate",
                        idx === activeStage
                          ? "text-[#45483F] font-semibold"
                          : "text-[#69715F]"
                      )}
                    >
                      {stage.shortLabel}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#69715F]">
                  Genç Group İnşaat · Aşama {currentStage.code}
                </p>
                <h2 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl text-[#45483F] leading-[1.08]">
                  {currentStage.title}
                </h2>
                <p className="text-xs sm:text-base text-[#69715F] font-light leading-relaxed max-w-lg">
                  {currentStage.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/construction"
                  className="inline-flex items-center gap-2.5 border-b border-[#45483F]/60 pb-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#45483F] hover:border-[#45483F] transition-colors"
                >
                  <span>Genç Group İnşaat Portfolyosu</span>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
