"use client";

import React from "react";
import Link from "next/link";
import {
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "@/components/ui/Icons";
import { BRAND_INFO, getAutomotiveServices } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, t } = useLanguage();
  const auto = BRAND_INFO.automotiveDivision;
  const services = getAutomotiveServices(locale);

  return (
    <footer className="bg-[#45483F] text-[#F3F0E8] border-t border-[#69715F]/40">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Parent Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <p className="font-display-editorial text-2xl font-semibold tracking-[0.14em] uppercase text-[#F3F0E8]">
              {BRAND_INFO.name}
            </p>
            <p className="text-sm text-[#D8D3C7] max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="pt-3">
              <a
                href={auto.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#353830] hover:bg-[#F3F0E8] text-[#D8D3C7] hover:text-[#45483F] border border-[#69715F]/40 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 rounded-sm"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Automotive Division */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
              AutoClub Merter
            </p>
            <ul className="space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/automotive/services/${service.slug}`}
                    className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3 space-y-2 text-xs text-[#D8D3C7]">
              <a
                href={auto.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Google Haritalar'da Aç (AutoClub Merter)"
                className="inline-flex items-center gap-1.5 group hover:text-[#F3F0E8] transition-colors"
              >
                <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-[#A5AA98] group-hover:text-[#F3F0E8]" />
                <span className="group-hover:underline underline-offset-4">
                  {auto.shortAddress || "Platform Merter, İstanbul"}
                </span>
                <ArrowUpRightIcon className="h-3 w-3 text-[#A5AA98] opacity-75 group-hover:opacity-100" />
              </a>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-[#A5AA98]" />
                <a
                  href={auto.phoneHref}
                  className="text-[#F3F0E8] hover:underline"
                  dir="ltr"
                >
                  {auto.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MailIcon className="h-3.5 w-3.5 shrink-0 text-[#A5AA98]" />
                <a
                  href={`mailto:${auto.email}`}
                  className="hover:text-[#F3F0E8]"
                >
                  {auto.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Construction Division */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
              Genç Group İnşaat
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/construction"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  {t.footer.archApproach}
                </Link>
              </li>
              <li>
                <Link
                  href="/construction/projects"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  {t.footer.projectPortfolio}
                </Link>
              </li>
            </ul>

            <div className="pt-3 space-y-2 text-xs text-[#D8D3C7]">
              <a
                href={BRAND_INFO.constructionDivision.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Google Haritalar'da Aç (Genç İnşaat)"
                className="inline-flex items-center gap-1.5 group hover:text-[#F3F0E8] transition-colors"
              >
                <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-[#A5AA98] group-hover:text-[#F3F0E8]" />
                <span className="group-hover:underline underline-offset-4">
                  {BRAND_INFO.constructionDivision.shortAddress || "Zeytinburnu, İstanbul"}
                </span>
                <ArrowUpRightIcon className="h-3 w-3 text-[#A5AA98] opacity-75 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Column 4: Corporate */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
              {t.footer.corporate}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#69715F]/40 py-6 pb-24 sm:pb-6">
        <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A5AA98] text-center md:text-start">
          <p>© {currentYear} Genç Group.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <Link
              href="/automotive"
              className="hover:text-[#F3F0E8] transition-colors"
            >
              AutoClub Merter
            </Link>
            <Link
              href="/construction"
              className="hover:text-[#F3F0E8] transition-colors"
            >
              Genç Group İnşaat
            </Link>
          </div>
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#A5AA98]">
            <span>{t.footer.devLabel}</span>
            <Link
              href="/case-study"
              className="text-[#F3F0E8] hover:text-white underline underline-offset-4 font-medium transition-colors"
            >
              {t.footer.devName}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
