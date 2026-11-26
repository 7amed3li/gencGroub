"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  CloseIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  GencGroupMark,
} from "@/components/ui/Icons";
import { BRAND_INFO } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

const CONCIERGE_COPY = {
  tr: {
    pillLabel: "Danışmanlık & İletişim",
    title: "Genç Group Doğrudan Hat",
    whatsappLabel: "WhatsApp",
    mapsAutoLabel: "AutoClub Merter (Harita)",
    mapsConsLabel: "Genç İnşaat Zeytinburnu (Harita)",
    consLabel: "Genç Group İnşaat Talebi",
  },
  en: {
    pillLabel: "Concierge & Direct Line",
    title: "Genç Group Direct Line",
    whatsappLabel: "WhatsApp",
    mapsAutoLabel: "AutoClub Merter (Maps)",
    mapsConsLabel: "Genç İnşaat Zeytinburnu (Maps)",
    consLabel: "Genç Group İnşaat Inquiry",
  },
  ar: {
    pillLabel: "الخط المباشر والاستشارة",
    title: "الخط المباشر — Genç Group",
    whatsappLabel: "واتساب",
    mapsAutoLabel: "موقع AutoClub Merter",
    mapsConsLabel: "موقع Genç İnşaat (زيتين بورنو)",
    consLabel: "استشارة Genç Group İnşaat",
  },
} as const;

type Division = {
  name: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  mapsUrl: string;
};

/**
 * One compact card per division: the number appears exactly once, as the
 * call button, with WhatsApp merged beside it and the map as a pin icon —
 * instead of separate stacked rows for WhatsApp / phone / map per brand.
 */
function DivisionBlock({
  division,
  mapsLabel,
  whatsappLabel,
}: {
  division: Division;
  mapsLabel: string;
  whatsappLabel: string;
}) {
  return (
    <div className="border border-[#D8D3C7] bg-[#E8E4DA] p-3 space-y-2.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold tracking-wide text-[#45483F]">
          {division.name}
        </span>
        <a
          href={division.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={mapsLabel}
          aria-label={mapsLabel}
          className="text-[#69715F] hover:text-[#45483F] transition-colors shrink-0"
        >
          <MapPinIcon className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a
          href={division.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-2 py-2 bg-[#45483F] text-[#F3F0E8] text-[11px] font-medium hover:bg-[#353830] transition-colors"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          <span>{whatsappLabel}</span>
        </a>
        <a
          href={division.phoneHref}
          dir="ltr"
          className="flex items-center justify-center gap-1.5 px-2 py-2 bg-[#F3F0E8] border border-[#D8D3C7] text-[#45483F] text-[11px] font-medium hover:bg-[#D8D3C7] transition-colors"
        >
          <PhoneIcon className="h-3.5 w-3.5 text-[#69715F]" />
          <span>{division.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}

export function FloatingConciergeBar() {
  const { locale } = useLanguage();
  const c = CONCIERGE_COPY[locale];
  const auto = BRAND_INFO.automotiveDivision;
  const cons = BRAND_INFO.constructionDivision;

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 end-5 z-50 flex flex-col items-end"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="mb-3 max-w-[calc(100vw-2rem)] w-72 bg-[#F3F0E8] text-[#45483F] border border-[#D8D3C7] shadow-2xl p-4 space-y-2.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#D8D3C7]">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#69715F] font-semibold">
                    {c.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="text-[#69715F] hover:text-[#45483F] transition-colors"
                  >
                    <CloseIcon className="h-3.5 w-3.5" />
                  </button>
                </div>

                <DivisionBlock
                  division={auto}
                  mapsLabel={c.mapsAutoLabel}
                  whatsappLabel={c.whatsappLabel}
                />

                <DivisionBlock
                  division={cons}
                  mapsLabel={c.mapsConsLabel}
                  whatsappLabel={c.whatsappLabel}
                />

                <Link
                  href="/contact?division=construction"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 bg-[#E8E4DA] text-[#45483F] border border-[#D8D3C7] text-xs hover:bg-[#D8D3C7] transition-colors"
                >
                  <span className="font-medium">{c.consLabel}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180 text-[#69715F]" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Luxury Monogram Concierge Button (Sharp architectural button) */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={c.pillLabel}
            className="group inline-flex items-center justify-center gap-2.5 bg-[#45483F] hover:bg-[#353830] text-[#F3F0E8] border border-[#D8D3C7]/40 shadow-2xl p-3 sm:px-4 sm:py-3 text-[11px] font-medium uppercase tracking-[0.16em] rounded-sm sm:rounded-none transition-all duration-300"
          >
            {open ? (
              <CloseIcon className="h-4 w-4 text-[#D8D3C7]" />
            ) : (
              <GencGroupMark className="h-4 w-4 text-[#D8D3C7] group-hover:scale-110 transition-transform" />
            )}
            <span className="font-sans font-medium hidden sm:inline">
              {c.pillLabel}
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
