"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { BRAND_INFO, type AutomotivePortfolioItem } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";

interface LuxuryLightboxModalProps {
  items: AutomotivePortfolioItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

const MODAL_COPY = {
  tr: {
    studioBadge: "AutoClub Merter — Platform Stüdyosu",
    opsTitle: "Uygulanan İşlemler",
    whatsappBtn: "WhatsApp Randevu",
    formBtn: "Randevu Formu",
    prevLabel: "Önceki Araç",
    nextLabel: "Sonraki Araç",
    closeLabel: "Kapat",
  },
  en: {
    studioBadge: "AutoClub Merter — Platform Studio",
    opsTitle: "Executed Operations",
    whatsappBtn: "WhatsApp Booking",
    formBtn: "Consultation Form",
    prevLabel: "Previous Vehicle",
    nextLabel: "Next Vehicle",
    closeLabel: "Close",
  },
  ar: {
    studioBadge: "استوديو AutoClub Merter — Platform",
    opsTitle: "العمليات المنفذة",
    whatsappBtn: "حجز عبر واتساب",
    formBtn: "نموذج الحجز",
    prevLabel: "السيارة السابقة",
    nextLabel: "السيارة التالية",
    closeLabel: "إغلاق",
  },
} as const;

export function LuxuryLightboxModal({
  items,
  activeIndex,
  onClose,
  onSelectIndex,
}: LuxuryLightboxModalProps) {
  const { locale } = useLanguage();
  const c = MODAL_COPY[locale];
  const auto = BRAND_INFO.automotiveDivision;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        onSelectIndex((activeIndex + 1) % items.length);
      }
      if (e.key === "ArrowLeft") {
        onSelectIndex((activeIndex - 1 + items.length) % items.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length, onClose, onSelectIndex]);

  return (
    <AnimatePresence>
      {activeItem && activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#2C2F28]/88 backdrop-blur-md p-3 sm:p-6 lg:p-10 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#F3F0E8] text-[#45483F] border border-[#D8D3C7] shadow-2xl overflow-hidden my-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 bg-[#E8E4DA] border-b border-[#D8D3C7]">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#69715F]">
                <span className="font-semibold text-[#45483F]">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
                <span>·</span>
                <span>{c.studioBadge}</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={c.closeLabel}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F] py-1 px-2 transition-colors"
              >
                <span>{c.closeLabel}</span>
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Studio Photography Frame */}
              <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-auto lg:min-h-[540px] bg-[#353830] overflow-hidden group">
                <ArchitecturalCornerTicks light />
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />

                {/* Prev / Next Controls on Image */}
                <div
                  dir="ltr"
                  className="absolute bottom-4 right-4 z-30 flex items-center gap-2"
                >
                  <button
                    type="button"
                    onClick={() =>
                      onSelectIndex(
                        (activeIndex - 1 + items.length) % items.length
                      )
                    }
                    aria-label={c.prevLabel}
                    className="flex h-10 w-10 items-center justify-center bg-[#F3F0E8]/92 text-[#45483F] border border-[#D8D3C7] hover:bg-[#45483F] hover:text-[#F3F0E8] transition-colors"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectIndex((activeIndex + 1) % items.length)
                    }
                    aria-label={c.nextLabel}
                    className="flex h-10 w-10 items-center justify-center bg-[#F3F0E8]/92 text-[#45483F] border border-[#D8D3C7] hover:bg-[#45483F] hover:text-[#F3F0E8] transition-colors"
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Vehicle Specification Details */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#F3F0E8]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#69715F] mb-2">
                    {activeItem.category}
                  </p>

                  <h3 className="font-display-editorial text-2xl sm:text-3xl lg:text-4xl text-[#45483F] leading-snug">
                    {activeItem.title}
                  </h3>

                  <p className="mt-4 text-sm text-[#69715F] leading-relaxed">
                    {activeItem.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#D8D3C7]">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#69715F] mb-3">
                      {c.opsTitle}
                    </p>
                    <ul className="space-y-2.5">
                      {activeItem.operations.map((op) => (
                        <li
                          key={op}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#45483F]"
                        >
                          <CheckIcon className="h-4 w-4 text-[#69715F] shrink-0" />
                          <span>{op}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#D8D3C7] flex flex-col sm:flex-row lg:flex-col gap-3">
                  <a
                    href={auto.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-olive-primary justify-center w-full"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>
                      {c.whatsappBtn}: {auto.phoneDisplay}
                    </span>
                  </a>

                  <Link
                    href="/contact?division=automotive"
                    onClick={onClose}
                    className="btn-stone-outline justify-center w-full"
                  >
                    <span>{c.formBtn}</span>
                    <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
