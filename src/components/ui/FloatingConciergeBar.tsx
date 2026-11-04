"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  CloseIcon,
  PhoneIcon,
  WhatsAppIcon,
  GencGroupMark,
} from "@/components/ui/Icons";
import { BRAND_INFO } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

const CONCIERGE_COPY = {
  tr: {
    pillLabel: "Danışmanlık & İletişim",
    title: "Genç Group Doğrudan Hat",
    autoLabel: "AutoClub Merter WhatsApp",
    autoPhone: "Atölye Telefon",
    consLabel: "Genç Group İnşaat Talebi",
  },
  en: {
    pillLabel: "Concierge & Direct Line",
    title: "Genç Group Direct Line",
    autoLabel: "AutoClub Merter WhatsApp",
    autoPhone: "Atelier Direct Call",
    consLabel: "Genç Group İnşaat Inquiry",
  },
  ar: {
    pillLabel: "الخط المباشر والاستشارة",
    title: "الخط المباشر — Genç Group",
    autoLabel: "واتساب AutoClub Merter",
    autoPhone: "اتصال هاتفي بالمركز",
    consLabel: "استشارة Genç Group İnşaat",
  },
} as const;

export function FloatingConciergeBar() {
  const { locale } = useLanguage();
  const c = CONCIERGE_COPY[locale];
  const auto = BRAND_INFO.automotiveDivision;

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
                className="mb-3 w-72 bg-[#F3F0E8] text-[#45483F] border border-[#D8D3C7] shadow-2xl p-4 space-y-2.5"
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

                <a
                  href={auto.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 bg-[#45483F] text-[#F3F0E8] text-xs hover:bg-[#353830] transition-colors"
                >
                  <span className="inline-flex items-center gap-2 font-medium">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>{c.autoLabel}</span>
                  </span>
                  <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
                </a>

                <a
                  href={auto.phoneHref}
                  className="flex items-center justify-between px-3.5 py-2.5 bg-[#E8E4DA] text-[#45483F] border border-[#D8D3C7] text-xs hover:bg-[#D8D3C7] transition-colors"
                >
                  <span className="inline-flex items-center gap-2 font-medium">
                    <PhoneIcon className="h-3.5 w-3.5 text-[#69715F]" />
                    <span>
                      {c.autoPhone}: {auto.phoneDisplay}
                    </span>
                  </span>
                </a>

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

          {/* Luxury Monogram Concierge Button (Pure Architectural Identity - Zero AI Generic Dots) */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={c.pillLabel}
            className="group inline-flex items-center gap-2.5 bg-[#45483F] hover:bg-[#353830] text-[#F3F0E8] border border-[#D8D3C7]/40 shadow-2xl px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-300"
          >
            <GencGroupMark className="h-4 w-4 text-[#D8D3C7] group-hover:scale-110 transition-transform" />
            <span className="font-sans font-medium">{c.pillLabel}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
