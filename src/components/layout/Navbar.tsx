"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  MenuIcon,
  CloseIcon,
  InstagramIcon,
  PhoneIcon,
  ArrowRightIcon,
  FlagTrIcon,
  FlagEnIcon,
  FlagArIcon,
} from "@/components/ui/Icons";
import { BRAND_INFO, type Locale } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const LOCALES: {
  code: Locale;
  label: string;
  fullName: string;
  Flag: React.ComponentType<{ className?: string }>;
}[] = [
  { code: "tr", label: "TR", fullName: "Türkçe", Flag: FlagTrIcon },
  { code: "en", label: "EN", fullName: "English", Flag: FlagEnIcon },
  { code: "ar", label: "AR", fullName: "العربية", Flag: FlagArIcon },
];

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  const PRIMARY_NAV = [
    {
      label: t.nav.automotive,
      sublabel: t.nav.automotiveSub,
      href: "/automotive",
    },
    {
      label: t.nav.construction,
      sublabel: t.nav.constructionSub,
      href: "/construction",
    },
    {
      label: t.nav.about,
      sublabel: t.nav.aboutSub,
      href: "/about",
    },
    {
      label: t.nav.contact,
      sublabel: t.nav.contactSub,
      href: "/contact",
    },
  ];

  const isHeroPage =
    pathname === "/" ||
    pathname === "/automotive" ||
    pathname === "/construction";
  const useLightTextOnHero = isHeroPage && !scrolled && !overlayOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOverlayOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && overlayOpen) {
        setOverlayOpen(false);
      }
    };
    if (overlayOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [overlayOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          overlayOpen
            ? "bg-[#45483F] text-[#F3F0E8] border-b border-[#69715F]/40 py-5"
            : scrolled
              ? "bg-[#F3F0E8]/95 backdrop-blur-md border-b border-[#D8D3C7] py-3.5 text-[#45483F]"
              : useLightTextOnHero
                ? "bg-transparent border-b border-[#D8D3C7]/20 py-5 text-[#F3F0E8]"
                : "bg-[#F3F0E8]/90 backdrop-blur-sm border-b border-[#D8D3C7] py-5 text-[#45483F]"
        )}
      >
        <div className="container-editorial flex items-center justify-between gap-3 sm:gap-6">
          {/* Pure Editorial Wordmark */}
          <Link
            href="/"
            className="focus:outline-none group shrink-0"
            aria-label="Genç Group"
          >
            <span
              className={cn(
                "font-display-editorial text-xl sm:text-[1.6rem] font-semibold tracking-[0.14em] uppercase transition-colors",
                overlayOpen || useLightTextOnHero
                  ? "text-[#F3F0E8]"
                  : "text-[#45483F]"
              )}
            >
              {BRAND_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-10"
          >
            {PRIMARY_NAV.slice(0, 3).map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative py-1 text-xs font-medium tracking-[0.16em] uppercase transition-colors",
                    overlayOpen || useLightTextOnHero
                      ? isActive
                        ? "text-[#F3F0E8]"
                        : "text-[#D8D3C7] hover:text-[#F3F0E8]"
                      : isActive
                        ? "text-[#45483F]"
                        : "text-[#69715F] hover:text-[#45483F]"
                  )}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1px] transition-all duration-300",
                      overlayOpen || useLightTextOnHero
                        ? "bg-[#F3F0E8]"
                        : "bg-[#45483F]",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action, Flag Language Buttons & Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Segmented Language Buttons with Vector Flags */}
            <div
              dir="ltr"
              role="group"
              aria-label="Dil Seçimi / Language Selection"
              className={cn(
                "inline-flex items-center p-0.5 border transition-colors",
                overlayOpen || useLightTextOnHero
                  ? "border-[#D8D3C7]/35 bg-[#353830]/65 backdrop-blur-sm"
                  : "border-[#D8D3C7] bg-[#E8E4DA]"
              )}
            >
              {LOCALES.map(({ code, label, fullName, Flag }) => {
                const active = locale === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    title={fullName}
                    aria-label={fullName}
                    aria-pressed={active}
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] transition-all cursor-pointer",
                      overlayOpen || useLightTextOnHero
                        ? active
                          ? "bg-[#F3F0E8] text-[#45483F] shadow-sm"
                          : "text-[#D8D3C7] hover:text-[#F3F0E8] hover:bg-[#F3F0E8]/10"
                        : active
                          ? "bg-[#45483F] text-[#F3F0E8] shadow-sm"
                          : "text-[#69715F] hover:text-[#45483F] hover:bg-[#D8D3C7]/50"
                    )}
                  >
                    <Flag className="h-3 w-4 sm:h-3.5 sm:w-[1.15rem] shrink-0 rounded-[1px] shadow-xs" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            <Link
              href="/contact"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                overlayOpen || useLightTextOnHero
                  ? "bg-[#F3F0E8] text-[#45483F] hover:bg-[#D8D3C7]"
                  : "bg-[#45483F] text-[#F3F0E8] hover:bg-[#69715F]"
              )}
            >
              <span>{t.nav.contact}</span>
              <ArrowRightIcon className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>

            <button
              type="button"
              onClick={() => setOverlayOpen((prev) => !prev)}
              aria-expanded={overlayOpen}
              aria-controls="fullscreen-navigation-overlay"
              aria-label={overlayOpen ? t.nav.close : t.nav.menu}
              className={cn(
                "lg:hidden inline-flex items-center gap-2 py-1.5 text-xs uppercase tracking-[0.18em] transition-colors",
                overlayOpen || useLightTextOnHero
                  ? "text-[#F3F0E8]"
                  : "text-[#45483F] hover:text-[#69715F]"
              )}
            >
              <span className="hidden sm:inline text-[11px] font-medium">
                {overlayOpen ? t.nav.close : t.nav.menu}
              </span>
              {overlayOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Overlay Navigation in Deep Olive (#45483F) */}
      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            id="fullscreen-navigation-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#45483F] text-[#F3F0E8] pt-28 pb-12 overflow-y-auto"
          >
            <div className="container-editorial min-h-[calc(100vh-10rem)] flex flex-col justify-between">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
                <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-[#A5AA98]/25">
                  {PRIMARY_NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOverlayOpen(false)}
                      className="group flex items-baseline justify-between py-6 sm:py-7 transition-colors hover:text-[#D8D3C7]"
                    >
                      <span className="font-display-editorial text-4xl sm:text-6xl font-normal tracking-tight text-[#F3F0E8]">
                        {item.label}
                      </span>
                      <span className="text-sm text-[#A5AA98]">
                        {item.sublabel}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center space-y-10">
                  <div className="space-y-3">
                    <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
                      AutoClub Merter
                    </h3>
                    <p className="text-sm text-[#D8D3C7] leading-relaxed">
                      {BRAND_INFO.automotiveDivision.address}
                    </p>
                    <div className="pt-2 flex flex-col gap-2.5 text-sm">
                      <a
                        href={BRAND_INFO.automotiveDivision.phoneHref}
                        dir="ltr"
                        className="inline-flex items-center gap-2 text-[#F3F0E8] hover:text-[#D8D3C7]"
                      >
                        <PhoneIcon className="h-4 w-4 text-[#A5AA98]" />
                        <span>{BRAND_INFO.automotiveDivision.phoneDisplay}</span>
                      </a>
                      <a
                        href={BRAND_INFO.automotiveDivision.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="inline-flex items-center gap-2 text-[#D8D3C7] hover:text-[#F3F0E8]"
                      >
                        <InstagramIcon className="h-4 w-4 text-[#A5AA98]" />
                        <span>
                          {BRAND_INFO.automotiveDivision.instagramHandle}
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-[#A5AA98]/25 pt-8">
                    <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
                      Genç Group İnşaat
                    </h3>
                    <p className="text-sm text-[#D8D3C7] leading-relaxed">
                      {t.nav.constructionNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
