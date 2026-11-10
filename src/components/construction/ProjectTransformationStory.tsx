"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckIcon,
  CloseIcon,
  WhatsAppIcon,
  PhoneIcon,
  ArrowDownIcon,
  PlayIcon,
  PauseIcon,
  CompareSliderIcon,
} from "@/components/ui/Icons";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import type {
  ProjectTransformationStage,
  ConstructionProjectStudy,
} from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { BRAND_INFO } from "@/content/siteData";

interface ProjectTransformationStoryProps {
  project: ConstructionProjectStudy;
}

const COPY = {
  tr: {
    sectionBadge: "Canlı Şantiye Günlüğü",
    sectionTitle: "Yıkımdan Teslime: Adım Adım İnşaat Süreci",
    sectionSubtitle:
      "Riskli eski yapının cerrahi yıkımından depreme dayanıklı radye temel ve modern kompozit cepheye uzanan tüm aşamaları nokta nokta inceleyin.",
    startTour: "OTOMATİK ŞANTİYE TURUNU BAŞLAT",
    stopTour: "OTOMATİK TURU DURAKLAT",
    tourSubtitle: "8 AŞAMALI İNŞAAT SERÜVENİ (%12 → %95)",
    tourPlayingBadge: "CANLI ŞANTİYE TURU YÜRÜTÜLÜYOR",
    beforeAfterBtn: "Önce / Sonra Dönüşümü",
    exploreStagesBtn: "8 Aşamayı Adım Adım İncele",
    progressLabel: "Tamamlanma",
    stageLabel: "Aşama",
    jumpToStage: "Aşamalara Hızlı Geçiş:",
    verifiedTagsLabel: "Uygulanan Standartlar ve Malzemeler:",
    enlargeHint: "Fotoğrafı büyütmek için dokunun",
    primaryPhoto: "Ana Görsel",
    detailPhoto: "Detay Görseli",
    beforeAfterTitle: "Dönüşümün Gücü: Önce & Sonra",
    beforeAfterSubtitle:
      "Deprem riskli eski binanın cerrahi yıkımından, %95 seviyesinde teslime hazırlanan çağdaş yaşam yapısına geçiş.",
    beforeTab: "Önce: Yıkım Öncesi Riskli Yapı",
    afterTab: "Sonra: Modern Kompozit Cephe (%95)",
    consultBadge: "Kentsel Dönüşüm Danışmanlığı",
    consultTitle: "Kendi Arsanız veya Riskli Yapınız İçin Görüşelim",
    consultDesc:
      "Zeytinburnu Seyitnizam projemizdeki anahtar teslim mühendislik disiplinini kendi yapınız için de hayata geçirelim.",
    whatsappCta: "WhatsApp ile Bilgi Alın",
    callCta: "Şantiye Ekibini Arayın",
  },
  en: {
    sectionBadge: "Field Construction Log",
    sectionTitle: "From Demolition to Handover: Step-by-Step Build Log",
    sectionSubtitle:
      "Explore every milestone: from surgical rooftop demolition to seismic raft foundations and the finished composite facade.",
    startTour: "START AUTOMATIC SITE TOUR",
    stopTour: "PAUSE SITE TOUR",
    tourSubtitle: "8-STAGE BUILD JOURNEY (12% → 95%)",
    tourPlayingBadge: "LIVE TOUR IN PROGRESS",
    beforeAfterBtn: "Before & After Transformation",
    exploreStagesBtn: "Explore 8 Build Stages",
    progressLabel: "Completion",
    stageLabel: "Stage",
    jumpToStage: "Quick Jump to Stage:",
    verifiedTagsLabel: "Verified Standards & Materials:",
    enlargeHint: "Tap photo to view full resolution",
    primaryPhoto: "Primary View",
    detailPhoto: "Detail View",
    beforeAfterTitle: "The Power of Transformation: Before & After",
    beforeAfterSubtitle:
      "Replacing an earthquake-vulnerable structure with a contemporary, high-spec residential building engineered to the highest seismic standards.",
    beforeTab: "Before: Obsolete Structure & Demolition",
    afterTab: "After: Modern Composite Facade (95%)",
    consultBadge: "Urban Regeneration & Engineering",
    consultTitle: "Consult With Our Site Engineers For Your Plot",
    consultDesc:
      "Bring the exact turnkey engineering precision executed in Seyitnizam to your own property in Istanbul.",
    whatsappCta: "Chat on WhatsApp",
    callCta: "Call Construction Team",
  },
  ar: {
    sectionBadge: "سجل العمل الميداني الموثق",
    sectionTitle: "من الركام إلى التحفة المعمارية: رحلة البناء خطوة بخطوة",
    sectionSubtitle:
      "استكشف مراحل تحول المبنى نقطة بنقطة: من الهدم الآمن من السطح، إلى الأساسات الزلزالية الحصيرية، وحتى الواجهة الكومبوزيت الفاخرة.",
    startTour: "تشغيل الجولة الميدانية التلقائية",
    stopTour: "إيقاف الجولة مؤقتاً",
    tourSubtitle: "رحلة البناء من الهدم للتسليم (8 مراحل · %12 ← %95)",
    tourPlayingBadge: "الجولة الميدانية التلقائية جارية الآن",
    beforeAfterBtn: "مقارنة قبل وبعد التحول",
    exploreStagesBtn: "استعراض الـ 8 مراحل بالتفصيل",
    progressLabel: "نسبة الإنجاز",
    stageLabel: "المرحلة",
    jumpToStage: "الانتقال السريع للمراحل:",
    verifiedTagsLabel: "المعايير الهندسية والمواد الموثقة ميدانياً:",
    enlargeHint: "المس الصورة للمعاينة بالشاشة الكاملة",
    primaryPhoto: "الصورة الأساسية",
    detailPhoto: "صورة التفاصيل",
    beforeAfterTitle: "قوة التحول المعماري: قبل وبعد",
    beforeAfterSubtitle:
      "تحول جذري من مبنى قديم غير آمن إلى صرح سكني عصري مشيد بأعلى معايير الأمان الزلزالي وبواجهات ألمنيوم مركبة فاخرة.",
    beforeTab: "قبل: المبنى القديم ومرحلة الهدم",
    afterTab: "بعد: الواجهة المعمارية الحديثة (%95)",
    consultBadge: "استشارة التحول الحضري والمقاولات",
    consultTitle: "هل تمتلك عقاراً أو أرضاً ترغب في إعادة إعمارها؟",
    consultDesc:
      "نضع نفس الانضباط الهندسي المنفذ في مشروع سيت نظام بين يديك لتطوير عقارك بنظام تسليم المفتاح وبأعلى معايير الأمان.",
    whatsappCta: "تواصل فوري عبر واتساب",
    callCta: "اتصل بالإدارة الهندسية",
  },
} as const;

export function ProjectTransformationStory({
  project,
}: ProjectTransformationStoryProps) {
  const { locale } = useLanguage();
  const c = COPY[locale];
  const stages = project.stages || [];
  const auto = BRAND_INFO.automotiveDivision;

  // Active stage tracked via scroll / auto-play
  const [activeStageId, setActiveStageId] = useState<string>(stages[0]?.id || "");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [beforeAfterMode, setBeforeAfterMode] = useState<"after" | "before">("after");
  const [selectedPhotoMap, setSelectedPhotoMap] = useState<Record<string, "primary" | "secondary">>({});

  // Auto-play tour state & timers
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [tourProgress, setTourProgress] = useState<number>(0);
  const tourIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const togglePhoto = (stageId: string, photo: "primary" | "secondary") => {
    setSelectedPhotoMap((prev) => ({ ...prev, [stageId]: photo }));
  };

  const scrollToStage = (stageId: string) => {
    const el = document.getElementById(`stage-${stageId}`);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Auto-play runner
  useEffect(() => {
    if (!isPlaying) {
      if (tourIntervalRef.current) clearInterval(tourIntervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setTourProgress(0);
      return;
    }

    const STEP_MS = 4500;
    const TICK_MS = 50;
    let elapsed = 0;

    progressIntervalRef.current = setInterval(() => {
      elapsed += TICK_MS;
      setTourProgress(Math.min(100, (elapsed / STEP_MS) * 100));
    }, TICK_MS);

    tourIntervalRef.current = setInterval(() => {
      elapsed = 0;
      setTourProgress(0);
      setActiveStageId((curr) => {
        const currIdx = stages.findIndex((s) => s.id === curr);
        const nextIdx = (currIdx + 1) % stages.length;
        const nextStage = stages[nextIdx];
        if (nextStage) {
          scrollToStage(nextStage.id);
          return nextStage.id;
        }
        return curr;
      });
    }, STEP_MS);

    return () => {
      if (tourIntervalRef.current) clearInterval(tourIntervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, stages]);

  const toggleAutoPlay = () => {
    if (!isPlaying) {
      scrollToStage(activeStageId || stages[0].id);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // Scroll listener to update active stage for the quick-jump numbers
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const stage of stages) {
        const el = document.getElementById(`stage-${stage.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveStageId(stage.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stages]);

  if (stages.length === 0) return null;

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-[#23261F] text-[#F3F0E8] overflow-hidden border-y border-[#3A3E33]">
      <div className="container-editorial">
        {/* Section Header: Pure Sharp Architectural Discipline (Zero Capsules, Zero Pulsing Dots) */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-14 px-2">
          <div className="inline-block border-s-2 border-[#8E9A7C] ps-3.5 py-0.5 text-start">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#8E9A7C] font-bold block">
              {c.sectionBadge}
            </span>
            <span className="text-[10px] text-[#A5AA98] font-mono tracking-wider">
              ZEYTİNBURNU SEYİTNİZAM G33 · FIELD DOSSIER
            </span>
          </div>

          <h2 className="font-display-editorial text-2xl sm:text-4xl lg:text-5xl text-[#F3F0E8] leading-[1.18]">
            {c.sectionTitle}
          </h2>

          <p className="text-xs sm:text-base text-[#D8D3C7] font-light leading-relaxed max-w-2xl mx-auto">
            {c.sectionSubtitle}
          </p>
        </div>

        {/* 3 LUXURY CONTROL BUTTONS: Auto-Play Hero Magnet + Before/After + Direct Explore */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-14">
          {/* 1. HERO MAGNET BUTTON: Automatic Tour (Catches client's attention instantly) */}
          <button
            type="button"
            onClick={toggleAutoPlay}
            aria-label={isPlaying ? c.stopTour : c.startTour}
            className={`w-full relative overflow-hidden py-4 sm:py-5 px-5 sm:px-6 transition-all duration-300 flex items-center justify-between shadow-2xl group border-2 ${
              isPlaying
                ? "bg-[#AB563F] text-white border-[#E8927C] shadow-[0_0_35px_rgba(171,86,63,0.45)]"
                : "bg-[#8E9A7C] hover:bg-[#A1AF8E] text-[#1E201A] border-[#B8C4A6] shadow-[0_0_30px_rgba(142,154,124,0.4)] scale-[1.01]"
            }`}
          >
            {/* Live Progress Indicator when playing */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 bg-white/20 origin-left pointer-events-none"
                style={{ width: `${tourProgress}%` }}
                transition={{ ease: "linear" }}
              />
            )}

            <div className="relative z-10 flex items-center gap-3.5 sm:gap-4 text-start">
              <div
                className={`w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 ${
                  isPlaying
                    ? "bg-white text-[#AB563F] border-white shadow-md"
                    : "bg-[#1E201A] text-[#8E9A7C] border-[#1E201A] shadow-md"
                }`}
              >
                {isPlaying ? (
                  <PauseIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <PlayIcon className="h-5 w-5 sm:h-6 sm:w-6 ps-0.5" />
                )}
              </div>
              <div>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold opacity-85">
                  {isPlaying ? c.tourPlayingBadge : c.tourSubtitle}
                </p>
                <h4 className="font-display-editorial text-lg sm:text-2xl font-bold leading-tight mt-0.5">
                  {isPlaying ? c.stopTour : c.startTour}
                </h4>
              </div>
            </div>

            <div className="relative z-10 hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] font-bold ps-4 border-s border-current/25">
              <span>{isPlaying ? "DURAKLAT" : "BAŞLAT"}</span>
              <span className="rtl:rotate-180">→</span>
            </div>
          </button>

          {/* Secondary 2-Button Strip: Before/After & Explore */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("before-after-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="py-3.5 px-4 bg-[#2D3027] hover:bg-[#383C30] text-[#F3F0E8] border border-[#484D3E] text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-all shadow-md hover:border-[#8E9A7C]/60"
            >
              <CompareSliderIcon className="h-4 w-4 text-[#8E9A7C]" />
              <span>{c.beforeAfterBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToStage(stages[0]?.id || "01")}
              className="py-3.5 px-4 bg-[#2D3027] hover:bg-[#383C30] text-[#D8D3C7] hover:text-[#F3F0E8] border border-[#484D3E] text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all shadow-md hover:border-[#8E9A7C]/60"
            >
              <ArrowDownIcon className="h-3.5 w-3.5 text-[#8E9A7C]" />
              <span>{c.exploreStagesBtn}</span>
            </button>
          </div>
        </div>

        {/* 1. BIG ARCHITECTURAL STAGE QUICK-JUMP NUMBERS BAR */}
        <div className="sticky top-20 sm:top-24 z-30 mb-10 sm:mb-16 py-3 px-3 sm:px-5 bg-[#2A2E25]/95 backdrop-blur-md border border-[#44493B] shadow-2xl max-w-2xl mx-auto">
          <div className="flex items-center justify-between gap-2 mb-2 px-1">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.16em] text-[#8E9A7C] font-semibold">
              {c.jumpToStage}
            </span>
            <span className="text-[11px] font-mono text-[#D8D3C7] flex items-center gap-1">
              <ArrowDownIcon className="h-3 w-3 animate-bounce" />
              <span>Scroll</span>
            </span>
          </div>

          {/* Large, High-Contrast Number Buttons */}
          <div className="grid grid-cols-8 gap-1.5 sm:gap-2">
            {stages.map((stage) => {
              const isActive = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    scrollToStage(stage.id);
                  }}
                  aria-label={`${c.stageLabel} ${stage.number}`}
                  className={`flex flex-col items-center justify-center py-2 sm:py-2.5 transition-all duration-300 ${
                    isActive
                      ? "bg-[#8E9A7C] text-[#1E201A] font-bold shadow-lg scale-105 ring-2 ring-[#B8C4A6]"
                      : "bg-[#1E201A] text-[#D8D3C7] hover:bg-[#383C30] hover:text-[#F3F0E8] border border-[#3A3E32]"
                  }`}
                >
                  <span className="text-sm sm:text-base font-mono font-bold leading-none">
                    {stage.number}
                  </span>
                  <span className="text-[9px] font-mono opacity-80 mt-1 hidden sm:inline">
                    %{stage.progressPercent}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. BEFORE / AFTER COMPARISON CARD (Zero Circles, Zero Dots) */}
        {project.beforeAfter && (
          <div id="before-after-section" className="mb-14 sm:mb-20 max-w-3xl mx-auto">
            <div className="bg-[#2D3027] border-2 border-[#484D3E] p-4 sm:p-7 shadow-xl">
              <div className="pb-4 border-b border-[#3E4336] space-y-2">
                <h3 className="font-display-editorial text-xl sm:text-2xl text-[#F3F0E8]">
                  {c.beforeAfterTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8D3C7] font-light leading-relaxed">
                  {c.beforeAfterSubtitle}
                </p>

                {/* High-Contrast Segmented Switcher (Sharp Architecture, No Dots) */}
                <div className="pt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBeforeAfterMode("before")}
                    className={`py-3 px-3 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 border ${
                      beforeAfterMode === "before"
                        ? "bg-red-950/80 text-red-200 border-red-700 shadow-md font-bold"
                        : "bg-[#1E201A] text-[#A5AA98] border-[#3E4336] hover:text-[#F3F0E8]"
                    }`}
                  >
                    <span>{c.beforeTab}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBeforeAfterMode("after")}
                    className={`py-3 px-3 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 border ${
                      beforeAfterMode === "after"
                        ? "bg-[#8E9A7C] text-[#1E201A] border-[#8E9A7C] font-bold shadow-md"
                        : "bg-[#1E201A] text-[#A5AA98] border-[#3E4336] hover:text-[#F3F0E8]"
                    }`}
                  >
                    <span>{c.afterTab}</span>
                  </button>
                </div>
              </div>

              {/* Transformation Image Canvas */}
              <div className="mt-4 relative">
                <div
                  className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#181A15] cursor-zoom-in group shadow-inner"
                  onClick={() =>
                    setLightboxImage(
                      beforeAfterMode === "before"
                        ? project.beforeAfter!.beforeImage
                        : project.beforeAfter!.afterImage
                    )
                  }
                >
                  <ArchitecturalCornerTicks light />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={beforeAfterMode}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={
                          beforeAfterMode === "before"
                            ? project.beforeAfter.beforeImage
                            : project.beforeAfter.afterImage
                        }
                        alt={
                          beforeAfterMode === "before"
                            ? c.beforeTab
                            : c.afterTab
                        }
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-2.5 end-2.5 z-10 px-2 py-0.5 bg-black/75 backdrop-blur-sm text-[10px] text-[#D8D3C7] pointer-events-none">
                    {c.enlargeHint}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. VERTICAL STORYLINE: POINT-BY-POINT SCROLL JOURNEY */}
        <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
          {stages.map((stage) => {
            const activePhoto = selectedPhotoMap[stage.id] || "primary";
            const currentPhotoUrl =
              activePhoto === "secondary" && stage.secondaryImage
                ? stage.secondaryImage
                : stage.image;

            return (
              <motion.article
                id={`stage-${stage.id}`}
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="bg-[#2D3027] border-2 border-[#43483A] hover:border-[#8E9A7C]/70 shadow-2xl p-4 sm:p-7 transition-colors duration-300"
              >
                {/* STAGE HEADER: Big Architectural Milestone Numeral Badge */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#3D4234]">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Milestone Number Badge (48px x 48px on mobile, bold & clear) */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#8E9A7C] text-[#1E201A] font-mono text-xl sm:text-2xl font-black flex items-center justify-center shrink-0 shadow-lg border-2 border-[#B8C4A6]">
                      {stage.number}
                    </div>

                    <div>
                      <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.16em] text-[#8E9A7C] font-semibold">
                        {c.stageLabel} {stage.number} · {stage.badge}
                      </p>
                      <h3 className="font-display-editorial text-lg sm:text-2xl text-[#F3F0E8] font-bold leading-snug mt-0.5">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  {/* Progress Badge */}
                  <div className="shrink-0 text-end">
                    <span className="inline-block px-3 py-1 bg-[#1E201A] border border-[#8E9A7C]/50 text-[#8E9A7C] font-mono font-bold text-xs sm:text-sm">
                      %{stage.progressPercent}
                    </span>
                  </div>
                </div>

                {/* Stage Image Canvas (Aspect 4:3 gives maximum height and clarity on mobile) */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#181A15] cursor-zoom-in group shadow-md my-4 sm:my-5">
                  <ArchitecturalCornerTicks light />
                  <Image
                    src={currentPhotoUrl}
                    alt={stage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 750px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onClick={() => setLightboxImage(currentPhotoUrl)}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />

                  {/* Tap to Enlarge Tooltip */}
                  <div className="absolute bottom-2.5 end-2.5 z-10 px-2.5 py-1 bg-black/80 backdrop-blur-sm text-[11px] text-[#D8D3C7] pointer-events-none flex items-center gap-1.5">
                    <span>🔍</span>
                    <span>{c.enlargeHint}</span>
                  </div>
                </div>

                {/* Photo Switcher (if stage has secondary photo) */}
                {stage.secondaryImage && (
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      type="button"
                      onClick={() => togglePhoto(stage.id, "primary")}
                      className={`px-4 py-2 text-xs font-semibold border transition-colors ${
                        activePhoto === "primary"
                          ? "bg-[#8E9A7C] text-[#1E201A] border-[#8E9A7C] font-bold"
                          : "bg-[#1E201A] text-[#D8D3C7] border-[#3E4336] hover:text-[#F3F0E8]"
                      }`}
                    >
                      {c.primaryPhoto}
                    </button>
                    <button
                      type="button"
                      onClick={() => togglePhoto(stage.id, "secondary")}
                      className={`px-4 py-2 text-xs font-semibold border transition-colors ${
                        activePhoto === "secondary"
                          ? "bg-[#8E9A7C] text-[#1E201A] border-[#8E9A7C] font-bold"
                          : "bg-[#1E201A] text-[#D8D3C7] border-[#3E4336] hover:text-[#F3F0E8]"
                      }`}
                    >
                      {c.detailPhoto}
                    </button>
                  </div>
                )}

                {/* Narrative Description */}
                <p className="text-xs sm:text-base text-[#D8D3C7] font-light leading-relaxed">
                  {stage.description}
                </p>

                {/* Verified Engineering Standards Tags */}
                {stage.tags && stage.tags.length > 0 && (
                  <div className="mt-4 pt-3.5 border-t border-[#3D4234]">
                    <p className="text-[11px] uppercase tracking-wider text-[#A5AA98] mb-2 font-medium">
                      {c.verifiedTagsLabel}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {stage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#1E201A] text-[#D8D3C7] text-[11px] font-mono border border-[#3E4336]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* 4. BOTTOM ARCHITECTURAL CONSULTATION CALLOUT */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto bg-[#2D3027] border-2 border-[#484D3E] p-6 sm:p-10 shadow-2xl">
          <div className="space-y-3 mb-6">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#8E9A7C] font-bold block">
              {c.consultBadge}
            </span>
            <h3 className="font-display-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F3F0E8]">
              {c.consultTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#D8D3C7] font-light leading-relaxed">
              {c.consultDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-[#3E4336]">
            <a
              href="https://wa.me/905438193024?text=Merhaba%2C%20Zeytinburnu%20Seyitnizam%20G33%20projenizi%20inceledim.%20Kendi%20yap%C4%B1m%C4%B1z%20i%C3%A7in%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-[#8E9A7C] hover:bg-[#A1AF8E] text-[#1E201A] font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-colors shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>{c.whatsappCta}</span>
            </a>

            <a
              href={auto.phoneHref}
              className="py-3.5 px-6 bg-[#1E201A] hover:bg-[#383C30] text-[#F3F0E8] border border-[#3E4336] text-xs font-medium uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-colors"
            >
              <PhoneIcon className="h-4 w-4 text-[#8E9A7C]" />
              <span>{c.callCta}</span>
            </a>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 end-4 z-50 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm border border-white/20 transition-colors"
              aria-label="Close"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={lightboxImage}
                  alt="High resolution inspection"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
