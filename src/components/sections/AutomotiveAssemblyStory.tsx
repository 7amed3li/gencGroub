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

interface AutoCalloutItem {
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

interface AutoStageData {
  code: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  callouts: AutoCalloutItem[];
}

const AUTO_STAGES: AutoStageData[] = [
  {
    code: "01 / 04",
    shortLabel: "01. Şasi & Aks",
    title: "Taşıyıcı Şasi, Kule Gergisi ve Aks Dengesi",
    subtitle: "Birinci Katman: Ön Şasi İskeleti ve Yürüyen Aksam",
    description:
      "Atölye süreci aracın taşıyıcı ön şasi iskeleti, alüminyum kule gergisi, karbon-seramik fren diskleri ve ön tampon geometrisinin lazer referans düzleminde hizalanmasıyla başlar.",
    metricLabel: "Şasi & Aks Toleransı",
    metricValue: "±0.05 mm Lazer Hiza",
    callouts: [
      {
        id: "on-sasi-kule",
        num: "01",
        targetX: 36,
        targetY: 51,
        elbowX: 22,
        elbowY: 38,
        cardAlign: "right",
        title: "Ön Şasi & Kule Gergisi",
        spec: "Alüminyum Taşıyıcı İskelet Analizi",
      },
      {
        id: "jant-fren-aks",
        num: "02",
        targetX: 47,
        targetY: 74,
        elbowX: 60,
        elbowY: 82,
        cardAlign: "right",
        title: "Alaşım Jant & Fren Aksı",
        spec: "Karbon-Seramik Disk & Rotasyon",
      },
      {
        id: "on-tampon-splitter",
        num: "03",
        targetX: 23,
        targetY: 69,
        elbowX: 14,
        elbowY: 84,
        cardAlign: "right",
        title: "Ön Tampon & Hava Kanalı",
        spec: "Tampon Restorasyonu & Black Pack",
      },
    ],
  },
  {
    code: "02 / 04",
    shortLabel: "02. Kaporta & Kapı",
    title: "Motor Kaputu, Kapı Paneli ve Karoser Hizası",
    subtitle: "İkinci Katman: Fabrika Toleranslarında Panel Birleşimi",
    description:
      "Ayrıştırılmış konumda incelenen aerodinamik motor kaputu, deri ve karbon iç döşemeli yan kapı paneli ile marşpiyel hatları fabrika çıkış panel boşluk standartlarında gövdeye hazırlanır.",
    metricLabel: "Panel Birleşim Hassasiyeti",
    metricValue: "Fabrika Çıkış Standardı",
    callouts: [
      {
        id: "motor-kaputu",
        num: "01",
        targetX: 31,
        targetY: 28,
        elbowX: 46,
        elbowY: 16,
        cardAlign: "right",
        title: "Aerodinamik Motor Kaputu",
        spec: "Milimetrik Panel & Menteşe Hizası",
      },
      {
        id: "kapi-paneli",
        num: "02",
        targetX: 76,
        targetY: 50,
        elbowX: 66,
        elbowY: 32,
        cardAlign: "left",
        title: "Yan Kapı & Kabin Paneli",
        spec: "Deri Trim & Simetri Kontrolü",
      },
      {
        id: "karbon-ekipman",
        num: "03",
        targetX: 87,
        targetY: 86,
        elbowX: 74,
        elbowY: 76,
        cardAlign: "left",
        title: "Marşpiyel & Gövde Ekipmanı",
        spec: "Stüdyo Yüzey Hazırlık Aşaması",
      },
    ],
  },
  {
    code: "03 / 04",
    shortLabel: "03. Göçük & Optik",
    title: "Boyasız Göçük Düzeltme ve Optik Kalibrasyon",
    subtitle: "Üçüncü Katman: LED Işık Kırılmasıyla Yüzey Taraması",
    description:
      "Optik LED tarama hattı aracın arka omuz çizgisini, tavan kubbesini ve çamurluk kavislerini baştan sona tarar; orijinal fabrika boyasına dokunulmadan mikroskobik göçükler sıfırlanır.",
    metricLabel: "Optik Yüzey Kalibrasyonu",
    metricValue: "Sıfır Dalgalanma",
    callouts: [
      {
        id: "tavan-omuz-pdr",
        num: "01",
        targetX: 61,
        targetY: 39,
        elbowX: 48,
        elbowY: 22,
        cardAlign: "left",
        title: "Tavan & Arka Omuz Hattı",
        spec: "Boyasız Göçük Düzeltme Bölgesi",
      },
      {
        id: "yuzey-yansima",
        num: "02",
        targetX: 57,
        targetY: 58,
        elbowX: 42,
        elbowY: 68,
        cardAlign: "left",
        title: "Optik Ayna Yansıma Hattı",
        spec: "Orijinal Fabrika Boyası Korunumu",
      },
      {
        id: "on-camurluk-hat",
        num: "03",
        targetX: 45,
        targetY: 53,
        elbowX: 30,
        elbowY: 42,
        cardAlign: "left",
        title: "Ön Çamurluk Karakter Çizgisi",
        spec: "Mikronluk Yüzey Tesviyesi",
      },
    ],
  },
  {
    code: "04 / 04",
    shortLabel: "04. Boya & PPF",
    title: "Kusursuz Karoser, Oto Boya ve PPF Kalkanı",
    subtitle: "Dördüncü Katman: 9H Seramik & PPF Yüzey Zırhı",
    description:
      "Kaput ve kapılar sıfır hata payıyla kapanarak kenetlenir. Derin zeytin-metalik boya, 9H kristal seramik ve kendi kendini yenileyen PPF koruma filmiyle AutoClub Merter imzası tamamlanır.",
    metricLabel: "Yüzey Koruma & Finiş",
    metricValue: "PPF & 9H Seramik Zırh",
    callouts: [
      {
        id: "kilitlenen-kaput",
        num: "01",
        targetX: 24,
        targetY: 53,
        elbowX: 16,
        elbowY: 34,
        cardAlign: "right",
        title: "Kusursuz Kaput Birleşimi",
        spec: "0.0 mm Fabrika Panel Hizası",
      },
      {
        id: "zeytin-metalik-boya",
        num: "02",
        targetX: 52,
        targetY: 46,
        elbowX: 44,
        elbowY: 26,
        cardAlign: "right",
        title: "Derin Zeytin Metalik Boya",
        spec: "Optik Ton Uyumu & 9H Seramik",
      },
      {
        id: "ppf-koruma-zirhi",
        num: "03",
        targetX: 75,
        targetY: 49,
        elbowX: 68,
        elbowY: 72,
        cardAlign: "left",
        title: "Şeffaf / Mat PPF Kalkanı",
        spec: "Darbe ve Çizilmelere Karşı Zırh",
      },
    ],
  },
];

export function AutomotiveAssemblyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.24) setActiveStage(0);
    else if (latest < 0.52) setActiveStage(1);
    else if (latest < 0.76) setActiveStage(2);
    else setActiveStage(3);
  });

  // Stage 1 -> 2: Lower chassis & upper hood/door exploded layers lock together
  const lowerChassisY = useTransform(scrollYProgress, [0, 0.16], [35, 0]);
  const upperHoodDoorY = useTransform(scrollYProgress, [0.16, 0.42], [-55, 0]);
  const upperHoodDoorOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.34],
    [0.15, 1]
  );

  // Stage 3 (0.50 -> 0.75): Optical LED Laser Scanner Sweeping Across the 4K Car
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

  // Stage 4 (0.74 -> 0.92): Smooth Curtain Wipe from Open Exploded 4K Car to Closed Completed 4K Car
  const closedCarClip = useTransform(
    scrollYProgress,
    [0.74, 0.92],
    [
      "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ]
  );
  const imageZoom = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.04]);

  const currentStage = AUTO_STAGES[activeStage];

  return (
    <section
      id="otomotiv-montaj-hikayesi"
      ref={containerRef}
      aria-label="AutoClub Merter — 4K Otomotiv Anatomisi ve Restorasyon Hikayesi"
      className="relative h-[380vh] bg-[#45483F] text-[#F3F0E8] border-b border-[#69715F]/40"
    >
      {/* Sticky Viewport Stage — Balanced Spacing & Focus on 4K Visual */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center pt-16 pb-6 sm:pt-20">
        <div className="container-editorial relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Narrative Column (Order 2 on Mobile, Order 1 on Desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              {/* Single Clean 4-Step Progress Bar */}
              <div className="grid grid-cols-4 gap-2.5">
                {AUTO_STAGES.map((stage, idx) => (
                  <div key={stage.code} className="space-y-2">
                    <div
                      className={cn(
                        "h-[2px] w-full transition-colors duration-500",
                        idx <= activeStage ? "bg-[#F3F0E8]" : "bg-[#A5AA98]/25"
                      )}
                    />
                    <span
                      className={cn(
                        "block text-[9px] sm:text-[10px] uppercase tracking-[0.14em] truncate",
                        idx === activeStage
                          ? "text-[#F3F0E8] font-medium"
                          : "text-[#A5AA98]/60"
                      )}
                    >
                      {stage.shortLabel}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#A5AA98]">
                  AutoClub Merter · Aşama {currentStage.code}
                </p>
                <h2 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F3F0E8] leading-[1.08]">
                  {currentStage.title}
                </h2>
                <p className="text-xs sm:text-base text-[#D8D3C7] font-light leading-relaxed max-w-lg">
                  {currentStage.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/automotive"
                  className="inline-flex items-center gap-2.5 border-b border-[#F3F0E8]/60 pb-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] hover:border-[#F3F0E8] transition-colors"
                >
                  <span>AutoClub Merter Atölyesi</span>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 4K Photorealistic Exploded-to-Assembled Car Stage + Animated SVG Leader Arrows */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-[#A5AA98]/40 bg-[#353830] shadow-2xl">
                <motion.div
                  style={{ scale: imageZoom }}
                  className="relative w-full h-full"
                >
                  {/* =========================================================
                      BASE LAYER (Stages 1-3): 4K EXPLODED AUTOMOTIVE ANATOMY
                     ========================================================= */}
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
                      alt="AutoClub Merter — 4K Şasi, Fren Diski ve Alt Karoser Anatomisi"
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
                      alt="AutoClub Merter — 4K Motor Kaputu ve Kapı Paneli Hizalaması"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* =========================================================
                      STAGE 3: OPTICAL LED LASER BEAM SWEEPING ACROSS CAR
                     ========================================================= */}
                  <motion.div
                    style={{
                      left: scannerLeft,
                      opacity: scannerOpacity,
                    }}
                    className="pointer-events-none absolute top-0 bottom-0 z-15 w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F3F0E8]/45 to-transparent flex items-center justify-center"
                  >
                    <div className="h-full w-[2px] bg-[#F3F0E8] shadow-[0_0_20px_#F3F0E8]" />
                  </motion.div>

                  {/* =========================================================
                      STAGE 4 (74% -> 92%): COMPLETED CLOSED-BODY 4K GRAND TOURER
                     ========================================================= */}
                  <motion.div
                    style={{ clipPath: closedCarClip }}
                    className="absolute inset-0 z-10 w-full h-full"
                  >
                    <Image
                      src="/images/atelier-daylight.jpg"
                      alt="AutoClub Merter — Tamamlanan 4K Zeytin Metalik Boya, Seramik ve PPF Kalkanı"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* Subtle Dark Vignette for Callout Readability */}
                  <div className="pointer-events-none absolute inset-0 z-15 bg-gradient-to-t from-[#262822]/45 via-transparent to-[#262822]/30" />

                  {/* =========================================================
                      ANIMATED SVG CALLOUT ARROWS EXPLAINING EACH AUTOMOTIVE PART
                     ========================================================= */}
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

                  {/* HTML Target Nodes + Floating Callout Spec Cards */}
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
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            style={{
                              left: `${badgeLeft}%`,
                              top: `${c.elbowY}%`,
                            }}
                            className={cn(
                              "hidden sm:block absolute -translate-y-1/2 bg-[#45483F]/95 backdrop-blur-md border border-[#F3F0E8]/45 px-2.5 py-1.5 shadow-xl max-w-[195px]",
                              c.cardAlign === "left" ? "-translate-x-full" : ""
                            )}
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F3F0E8] leading-tight">
                              {c.num} · {c.title}
                            </p>
                            <p className="text-[10px] text-[#D8D3C7] leading-tight mt-0.5">
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
                    className="bg-[#3A3D35] border border-[#A5AA98]/35 p-2"
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#F3F0E8] block truncate">
                      {c.num} · {c.title}
                    </span>
                    <span className="text-[9px] text-[#D8D3C7] block truncate mt-0.5">
                      {c.spec}
                    </span>
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
