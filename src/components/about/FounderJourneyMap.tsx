"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPinIcon,
  PlayIcon,
  PauseIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
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
    sectionTitle: "1976'dan Günümüze: Başarı Haritası",
    sectionSubtitle:
      "Zeytinburnu'ndan semt pazarlarına, toptan ticaretten holding vizyonuna uzanan 5 duraklı tarihi rota.",
    stationMenuTitle: "Yolculuk İstasyonları:",
    autoTourStart: "OTOMATİK TURU BAŞLAT",
    autoTourShort: "Otomatik Tur",
    autoTourPause: "TURU DURAKLAT",
    viewStory: "📖 Hikaye ve Detaylar",
    viewMap: "🗺️ Rota Haritası",
    prevStation: "Önceki",
    nextStation: "Sonraki",
    phaseLabel: "Aşama",
    locationLabel: "Konum",
    scopeLabel: "Kapsam",
    keyLessonLabel: "Temel Ticari İlke",
    coordinatesLabel: "Koordinatlar",
    mapLegend: "İstanbul Gelişim Haritası",
    clickPinHint: "İstasyonları incelemek için dokunun",
    jumpToStation: "İstasyona Git",
  },
  en: {
    sectionBadge: "Davut Genç's Entrepreneurial Odyssey",
    sectionTitle: "From 1976 to Present: Journey Map",
    sectionSubtitle:
      "A 5-station historical route traversing Zeytinburnu, street markets, wholesale distribution, and corporate group leadership.",
    stationMenuTitle: "Journey Stations:",
    autoTourStart: "START AUTO TOUR",
    autoTourShort: "Auto Tour",
    autoTourPause: "PAUSE TOUR",
    viewStory: "📖 Story & Insights",
    viewMap: "🗺️ Route Map",
    prevStation: "Previous",
    nextStation: "Next",
    phaseLabel: "Phase",
    locationLabel: "Location",
    scopeLabel: "Scope",
    keyLessonLabel: "Foundational Principle",
    coordinatesLabel: "Coordinates",
    mapLegend: "Istanbul Odyssey Map",
    clickPinHint: "Tap station pins to explore details",
    jumpToStation: "Go to Station",
  },
  ar: {
    sectionBadge: "مسيرة داوود غينتش الريادية",
    sectionTitle: "من 1976 إلى اليوم: خارطة محطات النجاح",
    sectionSubtitle:
      "مسار تاريخي تفاعلي من 5 محطات يمتد من أزقة زيتين بورنو، إلى أسواق الخضار، فتجارة الجملة الكبرى، وصرح المقاولات وصيانة السيارات.",
    stationMenuTitle: "قائمة محطات الرحلة:",
    autoTourStart: "تشغيل الجولة التلقائية",
    autoTourShort: "جولة تلقائية",
    autoTourPause: "إيقاف مؤقت",
    viewStory: "📖 السرد والتفاصيل",
    viewMap: "🗺️ خريطة المسار",
    prevStation: "السابق",
    nextStation: "التالي",
    phaseLabel: "المرحلة",
    locationLabel: "الموقع",
    scopeLabel: "نطاق النشاط",
    keyLessonLabel: "المبدأ التجاري الراسخ",
    coordinatesLabel: "الإحداثيات",
    mapLegend: "خريطة إسطنبول الاستراتيجية",
    clickPinHint: "المس محطات الخريطة لعرض تفاصيلها",
    jumpToStation: "الانتقال للمحطة",
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
  const [mobileView, setMobileView] = useState<"story" | "map">("story");
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
    <div className={`space-y-6 sm:space-y-8 ${className}`}>
      {/* 1. SECTION HEADER WITH STREAMLINED CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D8D3C7]">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-block border-s-2 border-[#69715F] ps-3 py-0.5">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#69715F] font-bold">
              {c.sectionBadge}
            </span>
          </div>
          <h2 className="font-display-editorial text-2xl sm:text-4xl lg:text-5xl text-[#45483F] leading-tight">
            {c.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#69715F] font-light leading-relaxed">
            {c.sectionSubtitle}
          </p>
        </div>

        {/* Action Controls: Compact and Elegant on Mobile */}
        <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
          <button
            onClick={toggleAutoPlay}
            type="button"
            className={`relative overflow-hidden group flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 shadow-sm ${
              isPlaying
                ? "bg-[#69715F] text-[#F3F0E8] border border-[#45483F]"
                : "bg-[#45483F] hover:bg-[#353830] text-[#F3F0E8]"
            }`}
          >
            {isPlaying && (
              <motion.div
                className="absolute inset-0 bg-[#8E9A7C]/30 origin-left"
                style={{ width: `${autoProgress}%` }}
                transition={{ ease: "linear" }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {isPlaying ? (
                <>
                  <PauseIcon className="h-3.5 w-3.5 animate-pulse text-[#E8E4DA]" />
                  <span className="text-[11px] sm:text-xs">{c.autoTourPause}</span>
                </>
              ) : (
                <>
                  <PlayIcon className="h-3.5 w-3.5 text-[#8E9A7C] group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline text-xs">{c.autoTourStart}</span>
                  <span className="sm:hidden text-xs">{c.autoTourShort}</span>
                </>
              )}
            </span>
          </button>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              type="button"
              aria-label={c.prevStation}
              className="p-2.5 bg-[#F3F0E8] hover:bg-[#E8E4DA] border border-[#D8D3C7] text-[#45483F] transition-colors"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5 rtl:rotate-180" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label={c.nextStation}
              className="p-2.5 bg-[#F3F0E8] hover:bg-[#E8E4DA] border border-[#D8D3C7] text-[#45483F] transition-colors"
            >
              <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE STATION NAVIGATOR (SLICK HORIZONTAL SWIPE ON MOBILE, CLEAN GRID ON DESKTOP) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#69715F]">
          <span className="font-semibold">{c.stationMenuTitle}</span>
          <span>
            {c.phaseLabel} 0{activeIndex + 1} / 0{totalStations}
          </span>
        </div>

        {/* Mobile: Horizontal Swipeable Pill Strip | Desktop: Structured Grid */}
        <div className="flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5 gap-2 p-1.5 bg-[#E8E4DA] border border-[#D8D3C7]">
          {milestones.map((station, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index < activeIndex;

            return (
              <button
                key={station.year}
                onClick={() => handleSelectStation(index)}
                type="button"
                className={`shrink-0 lg:shrink relative px-3 py-2 sm:p-3.5 text-start transition-all duration-200 border whitespace-nowrap lg:whitespace-normal ${
                  isActive
                    ? "bg-[#45483F] text-[#F3F0E8] border-[#45483F] shadow-md"
                    : isCompleted
                    ? "bg-[#F3F0E8] text-[#45483F] border-[#D8D3C7] hover:border-[#69715F]"
                    : "bg-[#F3F0E8]/70 text-[#69715F] border-[#D8D3C7] hover:bg-[#F3F0E8] hover:text-[#45483F]"
                }`}
              >
                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeStationBorder"
                    className="absolute inset-x-0 bottom-0 h-0.5 sm:h-1 bg-[#8E9A7C]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Mobile Single-Line Summary */}
                <div className="flex items-center gap-1.5 lg:hidden">
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isActive ? "text-[#8E9A7C]" : "text-[#69715F]"
                    }`}
                  >
                    0{index + 1} ·
                  </span>
                  <span className="font-display-editorial font-bold text-sm">
                    {station.year}
                  </span>
                  <span
                    className={`text-[10px] truncate max-w-[90px] ${
                      isActive ? "text-[#D8D3C7]" : "text-[#69715F]"
                    }`}
                  >
                    {station.badge}
                  </span>
                </div>

                {/* Desktop Multi-Line Detail Card */}
                <div className="hidden lg:block space-y-1">
                  <div className="flex items-center justify-between">
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
                  <div className="font-display-editorial text-lg font-bold tracking-tight">
                    {station.year}
                  </div>
                  <div
                    className={`text-[11px] truncate ${
                      isActive ? "text-[#E8E4DA]" : "text-[#69715F]"
                    }`}
                  >
                    {station.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MOBILE VIEW TOGGLE: SWITCH BETWEEN STORY AND MAP (ZERO VERTICAL CLUTTER) */}
      <div className="lg:hidden flex items-center p-1 bg-[#E8E4DA] border border-[#D8D3C7]">
        <button
          type="button"
          onClick={() => setMobileView("story")}
          className={`flex-1 py-2 text-xs font-mono uppercase tracking-wider text-center transition-colors ${
            mobileView === "story"
              ? "bg-[#45483F] text-[#F3F0E8] font-bold shadow-sm"
              : "text-[#69715F] hover:text-[#45483F]"
          }`}
        >
          {c.viewStory}
        </button>
        <button
          type="button"
          onClick={() => setMobileView("map")}
          className={`flex-1 py-2 text-xs font-mono uppercase tracking-wider text-center transition-colors ${
            mobileView === "map"
              ? "bg-[#45483F] text-[#F3F0E8] font-bold shadow-sm"
              : "text-[#69715F] hover:text-[#45483F]"
          }`}
        >
          {c.viewMap}
        </button>
      </div>

      {/* 4. DUAL VIEW CONTENT CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Interactive Istanbul Route Map Canvas */}
        <div
          className={`lg:col-span-5 flex-col justify-between bg-[#2C2F28] text-[#F3F0E8] border border-[#45483F] p-4 sm:p-6 relative overflow-hidden shadow-xl min-h-[300px] sm:min-h-[400px] ${
            mobileView === "map" ? "flex" : "hidden lg:flex"
          }`}
        >
          <ArchitecturalCornerTicks />

          {/* Map Header */}
          <div className="relative z-10 flex items-start justify-between gap-3 border-b border-[#45483F]/70 pb-2.5">
            <div>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E9A7C] block font-bold">
                {c.mapLegend}
              </span>
              <p className="text-[11px] text-[#D8D3C7] font-mono mt-0.5">
                {currentMeta.coordinates}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#45483F] border border-[#69715F]/40 text-[#8E9A7C] font-mono text-[9px] sm:text-[10px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E9A7C] animate-pulse" />
              {currentStation.badge}
            </span>
          </div>

          {/* SVG Map Canvas */}
          <div className="relative my-3 flex-1 w-full min-h-[190px] sm:min-h-[220px] flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full opacity-30 select-none pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="0" y1="25" x2="100" y2="25" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="25" y1="0" x2="25" y2="100" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <line x1="75" y1="0" x2="75" y2="100" stroke="#69715F" strokeWidth="0.3" strokeDasharray="1,2" />
              <path d="M 0 85 Q 30 78, 50 82 T 100 88" fill="none" stroke="#8E9A7C" strokeWidth="0.7" strokeDasharray="2,2" />
              <path d="M 35 40 Q 45 42, 55 35" fill="none" stroke="#69715F" strokeWidth="0.5" strokeDasharray="1,1" />
            </svg>

            {/* Connecting Vector Lines */}
            <svg
              className="absolute inset-0 w-full h-full select-none pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 18 72 L 36 48 L 54 28 L 72 50 L 88 72"
                fill="none"
                stroke="#45483F"
                strokeWidth="1.2"
                strokeDasharray="2,3"
              />
              <motion.path
                d="M 18 72 L 36 48 L 54 28 L 72 50 L 88 72"
                fill="none"
                stroke="#8E9A7C"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeIndex / (totalStations - 1) }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </svg>

            {/* Station Pins */}
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
                  style={{ left: `${meta.x}%`, top: `${meta.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                >
                  {isSelected && (
                    <motion.span
                      className="absolute -inset-2 rounded-full border border-[#8E9A7C] pointer-events-none"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />
                  )}
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[9px] sm:text-[10px] font-bold border-2 transition-all duration-200 shadow-md ${
                      isSelected
                        ? "bg-[#8E9A7C] text-[#1E201A] border-[#F3F0E8] scale-110 ring-2 ring-[#8E9A7C]/40"
                        : isPassed
                        ? "bg-[#45483F] text-[#F3F0E8] border-[#8E9A7C]"
                        : "bg-[#1E201A] text-[#8E9A7C] border-[#45483F]"
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div
                    className={`absolute bottom-full start-1/2 -translate-x-1/2 mb-1 px-1 py-0.5 whitespace-nowrap text-[8px] sm:text-[9px] font-mono tracking-wider pointer-events-none ${
                      isSelected
                        ? "bg-[#F3F0E8] text-[#1E201A] font-bold shadow"
                        : "bg-[#1E201A]/90 text-[#A5AA98] opacity-75"
                    }`}
                  >
                    {stationData.year}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Landmark Bar */}
          <div className="relative z-10 pt-2.5 border-t border-[#45483F]/70 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-[#D8D3C7]">
              <MapPinIcon className="h-3.5 w-3.5 text-[#8E9A7C] shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs truncate max-w-[200px] sm:max-w-xs">
                {landmark}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#8E9A7C]">
              {metric}
            </span>
          </div>
        </div>

        {/* Right Column: Clean, Spacious, Comfortable Story Card */}
        <div
          className={`lg:col-span-7 bg-[#F3F0E8] border border-[#D8D3C7] p-5 sm:p-8 lg:p-10 relative overflow-hidden shadow-md flex-col justify-between ${
            mobileView === "story" ? "flex" : "hidden lg:flex"
          }`}
        >
          <ArchitecturalCornerTicks />

          {/* Subtle Watermark on Larger Screens Only (Zero Distraction on Mobile) */}
          <div className="hidden sm:block absolute end-4 top-2 select-none pointer-events-none opacity-[0.05] font-display-editorial text-8xl sm:text-9xl text-[#45483F] font-bold">
            {currentStation.year}
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6 relative z-10"
            >
              {/* Mini Architectural Roadmap Indicator (Visual on Mobile & Desktop) */}
              <div className="pb-3 border-b border-[#D8D3C7]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#45483F] text-[#F3F0E8] text-[10px] font-mono uppercase tracking-wider font-semibold">
                      {currentStation.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#69715F]">
                      {c.phaseLabel} 0{activeIndex + 1} / 0{totalStations}
                    </span>
                  </div>
                  <div className="font-display-editorial text-2xl sm:text-3xl text-[#45483F] font-bold">
                    {currentStation.year}
                  </div>
                </div>

                {/* Visual Step Tracker Line */}
                <div className="grid grid-cols-5 gap-1.5">
                  {milestones.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 transition-colors duration-300 ${
                        i === activeIndex
                          ? "bg-[#45483F]"
                          : i < activeIndex
                          ? "bg-[#8E9A7C]"
                          : "bg-[#D8D3C7]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Station Headline & Clean Metadata */}
              <div className="space-y-1.5">
                <h3 className="font-display-editorial text-xl sm:text-2xl lg:text-3xl text-[#45483F] leading-snug font-medium">
                  {currentStation.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#69715F]">
                  <span className="inline-flex items-center gap-1 font-medium text-[#45483F]">
                    <MapPinIcon className="h-3 w-3 text-[#69715F]" />
                    {currentStation.location}
                  </span>
                  <span>•</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider">
                    {currentStation.scope}
                  </span>
                </div>
              </div>

              {/* Key Business Philosophy (Light, Comfortable, Calm Accent) */}
              <div className="p-3.5 sm:p-5 bg-[#E8E4DA] border-s-3 border-[#69715F] text-[#45483F] space-y-1 shadow-sm">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] text-[#69715F] font-bold block">
                  {c.keyLessonLabel}
                </span>
                <p className="font-display-editorial text-sm sm:text-base italic font-medium text-[#353830] leading-relaxed">
                  “{currentStation.keyLesson}”
                </p>
              </div>

              {/* Narrative Paragraph with Comfortable Line-Height */}
              <p className="text-xs sm:text-sm text-[#45483F]/90 leading-relaxed font-light">
                {currentStation.description}
              </p>

              {/* Minimalist Bottom Highlights Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-[#E8E4DA] border border-[#D8D3C7] text-[11px] font-medium text-[#45483F]">
                  {highlightTag}
                </span>
                <span className="px-2 py-0.5 bg-[#E8E4DA] border border-[#D8D3C7] text-[11px] font-medium text-[#45483F]">
                  {metric}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Step Indicator Bar */}
          <div className="mt-6 pt-3 border-t border-[#D8D3C7] flex items-center justify-between text-xs text-[#69715F]">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">
              {c.clickPinHint}
            </span>

            {/* Quick Dot Jumpers */}
            <div className="flex items-center gap-1.5">
              {milestones.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectStation(i)}
                  type="button"
                  aria-label={`${c.jumpToStation} ${i + 1}`}
                  className={`h-1.5 transition-all duration-300 ${
                    i === activeIndex
                      ? "w-5 bg-[#45483F]"
                      : i < activeIndex
                      ? "w-2 bg-[#8E9A7C]"
                      : "w-1.5 bg-[#D8D3C7]"
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
