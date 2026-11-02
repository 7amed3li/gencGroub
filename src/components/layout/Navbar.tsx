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
} from "@/components/ui/Icons";
import { BRAND_INFO, type Locale } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
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

  // Full-bleed dark-olive hero pages have light text at top before scroll
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
              ? "bg-[#F3F0E8]/95 backdrop-blur-md border-b border-[#D8D3C7] py-4 text-[#45483F]"
              : useLightTextOnHero
                ? "bg-transparent border-b border-[#D8D3C7]/20 py-5 sm:py-6 text-[#F3F0E8]"
                : "bg-[#F3F0E8]/90 backdrop-blur-sm border-b border-[#D8D3C7] py-5 sm:py-6 text-[#45483F]"
        )}
      >
        <div className="container-editorial flex items-center justify-between gap-4">
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

          {/* Right Action, Language Switcher & Menu Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Minimal Editorial Language Switcher (TR · EN · AR) */}
            <div
              role="group"
              aria-label="Dil Seçimi / Language Selection"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.12em]"
            >
              {LOCALES.map((item, idx) => {
                const active = locale === item.code;
                return (
                  <React.Fragment key={item.code}>
                    <button
                      type="button"
                      onClick={() => setLocale(item.code)}
                      className={cn(
                        "px-1.5 py-0.5 uppercase transition-colors cursor-pointer",
                        overlayOpen || useLightTextOnHero
                          ? active
                            ? "text-[#F3F0E8] font-bold border-b border-[#F3F0E8]"
                            : "text-[#D8D3C7]/70 hover:text-[#F3F0E8]"
                          : active
                            ? "text-[#45483F] font-bold border-b border-[#45483F]"
                            : "text-[#69715F]/75 hover:text-[#45483F]"
                      )}
                    >
                      {item.label}
                    </button>
                    {idx < LOCALES.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "text-[10px]",
                          overlayOpen || useLightTextOnHero
                            ? "text-[#D8D3C7]/35"
                            : "text-[#A5AA98]"
                        )}
                      >
                        ·
                      </span>
                    )}
                  </React.Fragment>
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
                        className="inline-flex items-center gap-2 text-[#F3F0E8] hover:text-[#D8D3C7]"
                      >
                        <PhoneIcon className="h-4 w-4 text-[#A5AA98]" />
                        <span>{BRAND_INFO.automotiveDivision.phoneDisplay}</span>
                      </a>
                      <a
                        href={BRAND_INFO.automotiveDivision.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
