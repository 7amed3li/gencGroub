"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  PlayIcon,
  PauseIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  BuildingIcon,
  CarIcon,
  CheckIcon,
} from "@/components/ui/Icons";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import type { LeadershipMilestone } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface FounderJourneyMapProps {
  milestones: LeadershipMilestone[];
  className?: string;
}

interface StationMetadata {
  coordinates: string;
  x: number; // percentage on SVG canvas
  y: number; // percentage on SVG canvas
  landmarkTr: string;
  landmarkEn: string;
  landmarkAr: string;
  metricTr: string;
  metricEn: string;
  metricAr: string;
  highlightTagTr: string;
  highlightTagEn: string;
  highlightTagAr: string;
}

const STATIONS_METADATA: StationMetadata[] = [
  {
    coordinates: "40.9978° K, 28.9094° D",
    x: 18,
    y: 72,
    landmarkTr: "Zeytinburnu Tarihi Sahil Koridoru",
    landmarkEn: "Historic Zeytinburnu Coastal Strip",
    landmarkAr: "شريط ساحل زيتين بورنو التاريخي",
    metricTr: "1976 Doğumlu",
    metricEn: "Born in 1976",
    metricAr: "مواليد 1976",
    highlightTagTr: "Ticaret & Sanayi Beşiği",
    highlightTagEn: "Cradle of Trade & Industry",
    highlightTagAr: "مهد التجارة والإنتاج",
  },
  {
    coordinates: "41.0186° K, 28.9400° D",
    x: 36,
    y: 48,
    landmarkTr: "İstanbul Semt Pazarları & Ticaret Hatları",
    landmarkEn: "Istanbul Street Produce Markets Network",
    landmarkAr: "أسواق إسطنبول الشعبية وشبكات البيع",
    metricTr: "15 Yaşında İlk Tezgâh",
    metricEn: "First Market Stand at 15",
    metricAr: "أول بسطة في سن 15",
    highlightTagTr: "Sözün Kıymeti & Alın Teri",
    highlightTagEn: "Sanctity of Word & Labor",
    highlightTagAr: "بركة العمل وعرق الجبين",
  },
  {
    coordinates: "41.0425° K, 28.9022° D",
    x: 54,
    y: 28,
    landmarkTr: "Bayrampaşa Büyük İstanbul Toptancı Hali",
    landmarkEn: "Bayrampaşa Central Wholesale Terminal",
    landmarkAr: "سوق الهال المركزي الكبير ببيرم باشا",
    metricTr: "5 Farklı Sektör Yatırımı",
    metricEn: "5 Strategic Industry Pillars",
    metricAr: "استثمارات في 5 قطاعات",
    highlightTagTr: "Lojistik & Çoklu Sektör",
    highlightTagEn: "Logistics & Diversification",
    highlightTagAr: "الريادة اللوجستية والتوسع",
  },
  {
    coordinates: "41.0112° K, 28.8876° D",
    x: 72,
    y: 50,
    landmarkTr: "Platform Merter Suites & Seyitnizam Şantiyesi",
    landmarkEn: "Platform Merter Suites & Seyitnizam Build Sites",
    landmarkAr: "مجمع بلاتفورم ميرتر ومشاريع سيت نظام",
    metricTr: "Depreme Dayanıklı & Yetkili Servis",
    metricEn: "Seismic Raft & Atelier Care",
    metricAr: "بناء زلزالي ومركز معتمد",
    highlightTagTr: "İki Alanda Kesin Odak",
    highlightTagEn: "Dual Specialization Focus",
    highlightTagAr: "التخصص القيادي المزدوج",
  },
  {
    coordinates: "40.9982° K, 28.9088° D",
    x: 88,
    y: 72,
    landmarkTr: "Genç Group Holding Genel Merkez Kompleksi",
    landmarkEn: "Genç Group Corporate Headquarters Complex",
    landmarkAr: "المقر العام لمجموعة شركات Genç Group",
    metricTr: "30+ Yıllık Kesintisiz Güven",
    metricEn: "30+ Years Generational Trust",
    metricAr: "+30 عاماً من الثقة الراسخة",
    highlightTagTr: "Geleceğe Güven Mirası",
    highlightTagEn: "Future-Proof Corporate Legacy",
    highlightTagAr: "صرح مؤسسي للمستقبل",
  },
];

const COPY = {
  tr: {
    sectionBadge: "Davut Genç'in Girişimcilik Yolculuğu",
    sectionTitle: "1976'dan Günümüze: İstasyon İstasyon Başarı Haritası",
    sectionSubtitle:
      "Zeytinburnu'nun kadim sokaklarından semt pazarlarına, toptan ticaretten holding vizyonuna uzanan 5 duraklı interaktif rota.",
    stationMenuTitle: "Yolculuk İstasyonları:",
    autoTourStart: "OTOMATİK YOLCULUK TURUNU BAŞLAT",
    autoTourPause: "TURU DURAKLAT",
    autoTourRunning: "CANLI TARİHÇE TURU YÜRÜTÜLÜYOR",
    prevStation: "Önceki İstasyon",
    nextStation: "Sonraki İstasyon",
    phaseLabel: "Aşama",
    locationLabel: "Coğrafi Konum",
    scopeLabel: "Faaliyet Kapsamı",
    keyLessonLabel: "Temel Ticari İlke & Vizyon",
    coordinatesLabel: "Koordinatlar",
    mapLegend: "İstanbul Stratejik Gelişim Haritası",
    clickPinHint: "Detayları görmek için haritadaki istasyonlara tıklayın",
    jumpToStation: "İstasyona Git",
    exploreDivisionBtn: "Sektörel Detaylar",
  },
  en: {
    sectionBadge: "Davut Genç's Entrepreneurial Odyssey",
    sectionTitle: "From 1976 to Present: Station-by-Station Journey Map",
    sectionSubtitle:
      "An interactive 5-station historical route traversing the storied streets of Zeytinburnu, neighborhood produce markets, wholesale distribution, and corporate group leadership.",
    stationMenuTitle: "Journey Stations:",
    autoTourStart: "START AUTOMATIC ODYSSEY TOUR",
    autoTourPause: "PAUSE ODYSSEY TOUR",
    autoTourRunning: "LIVE JOURNEY TOUR ACTIVE",
    prevStation: "Previous Station",
    nextStation: "Next Station",
    phaseLabel: "Phase",
    locationLabel: "Geographic Hub",
    scopeLabel: "Strategic Scope",
    keyLessonLabel: "Foundational Principle & Ethos",
    coordinatesLabel: "Coordinates",
    mapLegend: "Istanbul Strategic Odyssey Map",
    clickPinHint: "Click station pins on the map to explore details",
    jumpToStation: "Go to Station",
    exploreDivisionBtn: "Division Details",
  },
  ar: {
    sectionBadge: "مسيرة داوود غينتش الريادية",
    sectionTitle: "من 1976 إلى اليوم: خارطة محطات النجاح التفاعلية",
    sectionSubtitle:
      "مسار تاريخي تفاعلي من 5 محطات يمتد من أزقة زيتين بورنو العريقة، إلى أسواق الخضار الميدانية، فتجارة الجملة الكبرى، وتأسيس صرح المقاولات وصيانة السيارات.",
    stationMenuTitle: "قائمة محطات الرحلة:",
    autoTourStart: "تشغيل الجولة التلقائية التفاعلية",
    autoTourPause: "إيقاف الجولة مؤقتاً",
    autoTourRunning: "جولة المسار التفاعلي قيد التشغيل",
    prevStation: "المحطة السابقة",
    nextStation: "المحطة التالية",
    phaseLabel: "المرحلة",
    locationLabel: "الموقع الجغرافي",
    scopeLabel: "نطاق النشاط",
    keyLessonLabel: "المبدأ التجاري الراسخ والخبرة",
    coordinatesLabel: "الإحداثيات",
    mapLegend: "خريطة إسطنبول الاستراتيجية لمسيرة المجموعة",
    clickPinHint: "انقر على نقاط المحطات بالخريطة لعرض تفاصيلها",
    jumpToStation: "الانتقال للمحطة",
    exploreDivisionBtn: "تفاصيل القطاع",
  },
} as const;

export function FounderJourneyMap({
  milestones,
  className = "",
}: FounderJourneyMapProps) {
  const { locale } = useLanguage();
  const c = COPY[locale];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoProgress, setAutoProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalStations = milestones.length;
  const currentStation = milestones[activeIndex] || milestones[0];
  const currentMeta = STATIONS_METADATA[activeIndex] || STATIONS_METADATA[0];

  const landmark =
    locale === "tr"
      ? currentMeta.landmarkTr
      : locale === "ar"
      ? currentMeta.landmarkAr
      : currentMeta.landmarkEn;

  const metric =
    locale === "tr"
      ? currentMeta.metricTr
      : locale === "ar"
      ? currentMeta.metricAr
      : currentMeta.metricEn;

  const highlightTag =
    locale === "tr"
      ? currentMeta.highlightTagTr
      : locale === "ar"
      ? currentMeta.highlightTagAr
      : currentMeta.highlightTagEn;

  // Auto-play timer effect (5 seconds per station with smooth progress bar)
  useEffect(() => {
    if (!isPlaying) {
      setAutoProgress(0);
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalMs = 50;
    const totalStepDuration = 5000;
    const progressIncrement = (intervalMs / totalStepDuration) * 100;

    timerRef.current = setInterval(() => {
      setAutoProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % totalStations);
          return 0;
        }
        return prev + progressIncrement;
      });
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalStations]);

  const handleSelectStation = (index: number) => {
    setActiveIndex(index);
    setAutoProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalStations) % totalStations);
    setAutoProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalStations);
    setAutoProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsPlaying((prev) => !prev);
    setAutoProgress(0);
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* 1. SECTION HEADER WITH CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D8D3C7]">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-block border-s-2 border-[#69715F] ps-3.5 py-0.5">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#69715F] font-bold">
              {c.sectionBadge}
            </span>
          </div>
          <h2 className="font-display-editorial text-3xl sm:text-5xl text-[#45483F] leading-tight">
            {c.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#69715F] font-light leading-relaxed">
            {c.sectionSubtitle}
          </p>
        </div>

        {/* Auto-Play Tour Button with Live Progress Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <button
            onClick={toggleAutoPlay}
            type="button"
            className={`relative overflow-hidden group flex items-center justify-center gap-2.5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm ${
              isPlaying
                ? "bg-[#69715F] text-[#F3F0E8] border border-[#45483F]"
                : "bg-[#45483F] hover:bg-[#353830] text-[#F3F0E8]"
            }`}
          >
            {/* Live Progress Bar Fill when playing */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 bg-[#8E9A7C]/30 origin-left"
                style={{ width: `${autoProgress}%` }}
                transition={{ ease: "linear" }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {isPlaying ? (
                <>
                  <PauseIcon className="h-4 w-4 animate-pulse text-[#E8E4DA]" />
                  <span>{c.autoTourPause}</span>
                </>
              ) : (
                <>
                  <PlayIcon className="h-4 w-4 text-[#8E9A7C] group-hover:scale-110 transition-transform" />
                  <span>{c.autoTourStart}</span>
                </>
              )}
            </span>
          </button>

          {/* Quick Prev / Next Buttons */}
          <div className="flex items-center gap-1.5 self-end sm:self-center">
            <button
              onClick={handlePrev}
              type="button"
              aria-label={c.prevStation}
              className="p-3 bg-[#F3F0E8] hover:bg-[#E8E4DA] border border-[#D8D3C7] text-[#45483F] transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 rtl:rotate-180" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label={c.nextStation}
              className="p-3 bg-[#F3F0E8] hover:bg-[#E8E4DA] border border-[#D8D3C7] text-[#45483F] transition-colors"
            >
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE STATION MENU (THE "MENÜ" / NAVIGATOR BAR) */}
      <div className="relative">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-[#69715F] mb-3">
          <span className="font-semibold">{c.stationMenuTitle}</span>
          <span>
            {c.phaseLabel} 0{activeIndex + 1} / 0{totalStations}
          </span>
        </div>

        {/* Scrollable / Responsive Station Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 bg-[#E8E4DA] p-2 border border-[#D8D3C7]">
          {milestones.map((station, index) => {
            const isActive = index === activeIndex;
            const meta = STATIONS_METADATA[index];
            const isCompleted = index < activeIndex;

            return (
              <button
                key={station.year}
                onClick={() => handleSelectStation(index)}
                type="button"
                className={`relative p-3 sm:p-4 text-start transition-all duration-300 border ${
                  isActive
                    ? "bg-[#45483F] text-[#F3F0E8] border-[#45483F] shadow-lg"
                    : isCompleted
                    ? "bg-[#F3F0E8] text-[#45483F] border-[#D8D3C7] hover:border-[#69715F]"
                    : "bg-[#F3F0E8]/70 text-[#69715F] border-[#D8D3C7] hover:bg-[#F3F0E8] hover:text-[#45483F]"
                }`}
              >
                {/* Active Station Animated Pill Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeStationBorder"
                    className="absolute inset-x-0 bottom-0 h-1 bg-[#8E9A7C]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                      isActive ? "text-[#8E9A7C]" : "text-[#69715F]"
                    }`}
                  >
                    0{index + 1} · {station.badge}
                  </span>
                  {isCompleted && (
                    <CheckIcon className="h-3 w-3 text-[#69715F]" />
                  )}
                </div>

                <div className="font-display-editorial text-lg sm:text-xl font-bold tracking-tight">
                  {station.year}
                </div>

                <div
                  className={`text-[11px] truncate mt-1 ${
                    isActive ? "text-[#E8E4DA]" : "text-[#69715F]"
                  }`}
                >
                  {station.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. DUAL VIEW: INTERACTIVE ROUTE MAP (CANVAS) & RICH STORY SPOTLIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column (5 Cols): The Interactive Istanbul Journey Map Canvas */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#2C2F28] text-[#F3F0E8] border border-[#45483F] p-5 sm:p-6 relative overflow-hidden shadow-xl min-h-[380px] sm:min-h-[440px]">
          <ArchitecturalCornerTicks />

          {/* Map Header with Coordinates & Legend */}
          <div className="relative z-10 flex items-start justify-between gap-4 border-b border-[#45483F]/70 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E9A7C] block font-bold">
                {c.mapLegend}
              </span>
              <p className="text-xs text-[#D8D3C7] font-mono mt-0.5">
                {currentMeta.coordinates}
              </p>
            </div>
            <div className="text-end">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#45483F] border border-[#69715F]/40 text-[#8E9A7C] font-mono text-[10px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E9A7C] animate-pulse" />
                {currentStation.badge}
              </span>
            </div>
          </div>

          {/* Interactive SVG Canvas with Istanbul Contour & Connected Nodes */}
          <div className="relative my-4 flex-1 w-full min-h-[220px] flex items-center justify-center">
            {/* SVG Background Architectural Grid & Shoreline Motif */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30 select-none pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Grid Lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="25" y1="0" x2="25" y2="100" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="75" y1="0" x2="75" y2="100" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />

              {/* Marmara Sea / Golden Horn Contour Representation */}
              <path
                d="M 0 85 Q 30 78, 50 82 T 100 88"
                fill="none"
                stroke="#8E9A7C"
                strokeWidth="0.7"
                strokeDasharray="2,2"
              />
              <path
                d="M 35 40 Q 45 42, 55 35"
                fill="none"
                stroke="#69715F"
                strokeWidth="0.5"
                strokeDasharray="1,1"
              />
            </svg>

            {/* Dynamic Journey Route Line Connecting All 5 Stations */}
            <svg
              className="absolute inset-0 w-full h-full select-none pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Inactive Base Path */}
              <path
                d="M 18 72 L 36 48 L 54 28 L 72 50 L 88 72"
                fill="none"
                stroke="#45483F"
                strokeWidth="1.2"
                strokeDasharray="2,3"
              />

              {/* Active Animated Illuminated Path */}
              <motion.path
                d="M 18 72 L 36 48 L 54 28 L 72 50 L 88 72"
                fill="none"
                stroke="#8E9A7C"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeIndex / (totalStations - 1) }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </svg>

            {/* Interactive Pins on the Map */}
            {STATIONS_METADATA.map((meta, idx) => {
              const isSelected = idx === activeIndex;
              const isPassed = idx < activeIndex;
              const stationData = milestones[idx];

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectStation(idx)}
                  type="button"
                  title={`${stationData.year} · ${stationData.title}`}
                  aria-label={`${stationData.year} · ${stationData.title}`}
                  style={{
                    left: `${meta.x}%`,
                    top: `${meta.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                >
                  {/* Radar Pulse Effect for Active Pin */}
                  {isSelected && (
                    <motion.span
                      className="absolute -inset-2.5 rounded-full border border-[#8E9A7C] pointer-events-none"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                    />
                  )}

                  {/* Marker Circle */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] font-bold border-2 transition-all duration-300 shadow-md ${
                      isSelected
                        ? "bg-[#8E9A7C] text-[#1E201A] border-[#F3F0E8] scale-110 ring-4 ring-[#8E9A7C]/30"
                        : isPassed
                        ? "bg-[#45483F] text-[#F3F0E8] border-[#8E9A7C] group-hover:scale-105"
                        : "bg-[#1E201A] text-[#8E9A7C] border-[#45483F] group-hover:border-[#8E9A7C] group-hover:scale-105"
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  {/* Year Tooltip Tag Above Pin */}
                  <div
                    className={`absolute bottom-full start-1/2 -translate-x-1/2 mb-1.5 px-1.5 py-0.5 whitespace-nowrap text-[9px] font-mono tracking-wider transition-all duration-200 pointer-events-none ${
                      isSelected
                        ? "bg-[#F3F0E8] text-[#1E201A] font-bold shadow-lg"
                        : "bg-[#1E201A]/90 text-[#A5AA98] opacity-75 group-hover:opacity-100"
                    }`}
                  >
                    {stationData.year}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Footer: Current Selected Landmark Banner */}
          <div className="relative z-10 pt-3 border-t border-[#45483F]/70 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[#D8D3C7]">
              <MapPinIcon className="h-4 w-4 text-[#8E9A7C] shrink-0" />
              <span className="font-medium truncate max-w-[240px] sm:max-w-xs">
                {landmark}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E9A7C]">
              {metric}
            </span>
          </div>
        </div>

        {/* Right Column (7 Cols): Rich Animated Milestone Story Card */}
        <div className="lg:col-span-7 bg-[#F3F0E8] border border-[#D8D3C7] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-lg flex flex-col justify-between">
          <ArchitecturalCornerTicks />

          {/* Giant Translucent Year Watermark in Background */}
          <div className="absolute end-4 top-2 select-none pointer-events-none opacity-[0.06] font-display-editorial text-8xl sm:text-9xl text-[#45483F] font-bold">
            {currentStation.year}
          </div>

          {/* Dynamic Content Wrapped in AnimatePresence for Smooth Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6 relative z-10"
            >
              {/* Badge, Year & Phase Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D3C7] pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#45483F] text-[#F3F0E8] text-[11px] font-mono uppercase tracking-wider font-semibold">
                    {currentStation.badge}
                  </span>
                  <span className="px-2.5 py-1 bg-[#E8E4DA] text-[#69715F] text-[11px] font-mono uppercase tracking-wider">
                    {c.phaseLabel} 0{activeIndex + 1} / 0{totalStations}
                  </span>
                </div>

                <div className="font-display-editorial text-3xl sm:text-4xl text-[#45483F] font-bold tracking-tight">
                  {currentStation.year}
                </div>
              </div>

              {/* Station Headline */}
              <div className="space-y-2">
                <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F] leading-snug">
                  {currentStation.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#69715F]">
                  <span className="inline-flex items-center gap-1.5 font-medium text-[#45483F]">
                    <MapPinIcon className="h-3.5 w-3.5 text-[#69715F]" />
                    {currentStation.location}
                  </span>
                  <span>•</span>
                  <span className="font-mono uppercase tracking-wider text-[11px]">
                    {currentStation.scope}
                  </span>
                </div>
              </div>

              {/* Key Business Philosophy / Ethos Bracket */}
              <div className="p-4 sm:p-5 bg-[#E8E4DA] border-s-4 border-[#69715F] text-[#45483F] space-y-1 shadow-sm">
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#69715F] font-bold block">
                  {c.keyLessonLabel}
                </span>
                <p className="font-display-editorial text-base sm:text-lg italic font-medium text-[#353830]">
                  “{currentStation.keyLesson}”
                </p>
              </div>

              {/* Detailed Narrative Paragraph */}
              <p className="text-xs sm:text-sm text-[#45483F]/85 leading-relaxed font-light">
                {currentStation.description}
              </p>

              {/* Strategic Highlight Pill */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#69715F]">
                  {c.scopeLabel}:
                </span>
                <span className="px-2.5 py-1 bg-[#F3F0E8] border border-[#D8D3C7] text-xs font-medium text-[#45483F]">
                  {highlightTag}
                </span>
                <span className="px-2.5 py-1 bg-[#F3F0E8] border border-[#D8D3C7] text-xs font-medium text-[#45483F]">
                  {metric}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Card Bottom Progress & Step Indicator */}
          <div className="mt-8 pt-4 border-t border-[#D8D3C7] flex items-center justify-between text-xs text-[#69715F]">
            <span className="text-[11px] font-mono uppercase tracking-wider">
              {c.clickPinHint}
            </span>

            {/* Mini Segment Progress Dots */}
            <div className="flex items-center gap-1.5">
              {milestones.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectStation(i)}
                  type="button"
                  aria-label={`${c.jumpToStation} ${i + 1}`}
                  className={`h-1.5 transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-[#45483F]"
                      : i < activeIndex
                      ? "w-2.5 bg-[#8E9A7C]"
                      : "w-2 bg-[#D8D3C7]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
