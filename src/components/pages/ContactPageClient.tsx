"use client";

import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  WhatsAppIcon,
  ArrowUpRightIcon,
} from "@/components/ui/Icons";
import { BRAND_INFO } from "@/content/siteData";
import { ContactForm } from "@/components/contact/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

interface ContactPageClientProps {
  defaultDivision: "automotive" | "construction";
  defaultService: string;
}

const MAP_COPY = {
  tr: {
    overline: "Merkez ve Atölye Konumları",
    autoTab: "AutoClub Merter (Platform Sitesi)",
    consTab: "Genç İnşaat (Zeytinburnu)",
    autoHeadline: "AutoClub Merter — Platform Atölyesi",
    autoSubheadline:
      "Platform Merter Suites otopark katında yer alan uygulama merkezimize Google Haritalar üzerinden doğrudan yol tarifi alabilirsiniz.",
    consHeadline: "Genç İnşaat — Zeytinburnu Merkez & Yönetim",
    consSubheadline:
      "Zeytinburnu Seyitnizam ve Telsiz bölgesindeki merkez yönetim ve şantiye ofisimize Google Haritalar üzerinden doğrudan yol tarifi alabilirsiniz.",
    openInMaps: "Google Haritalar'da Aç",
    getDirections: "Yol Tarifi Al",
  },
  en: {
    overline: "Atelier & Corporate Locations",
    autoTab: "AutoClub Merter (Platform Merter)",
    consTab: "Genç İnşaat (Zeytinburnu)",
    autoHeadline: "AutoClub Merter — Platform Atelier",
    autoSubheadline:
      "Get direct live directions to our detailing & application center located at Platform Merter Suites parking level via Google Maps.",
    consHeadline: "Genç İnşaat — Zeytinburnu Head Office",
    consSubheadline:
      "Get live directions to our Zeytinburnu engineering management and site office in Istanbul via Google Maps.",
    openInMaps: "Open in Google Maps",
    getDirections: "Get Directions",
  },
  ar: {
    overline: "المواقع الميدانية والمقرات",
    autoTab: "AutoClub Merter (بلاتفورم ميرتر)",
    consTab: "Genç İnşaat (زيتين بورنو)",
    autoHeadline: "AutoClub Merter — Platform Atölyesi",
    autoSubheadline:
      "يمكنك الحصول على اتجاهات الوصول المباشرة إلى مركزنا الواقع في طابق مواقف Platform Merter Suites عبر خرائط جوجل بكل سهولة.",
    consHeadline: "Genç İnşaat — المقر الإنشائي (زيتين بورنو)",
    consSubheadline:
      "احصل على مسار الوصول المباشر إلى مقر الإدارة الهندسية والمشاريع الميدانية في منطقة زيتين بورنو عبر خرائط جوجل.",
    openInMaps: "افتح في خرائط جوجل",
    getDirections: "احصل على الاتجاهات",
  },
} as const;

export function ContactPageClient({
  defaultDivision,
  defaultService,
}: ContactPageClientProps) {
  const { t, locale } = useLanguage();
  const auto = BRAND_INFO.automotiveDivision;
  const cons = BRAND_INFO.constructionDivision;
  const mc = MAP_COPY[locale];
  const [activeMapTab, setActiveMapTab] = useState<"automotive" | "construction">(defaultDivision);

  const activeLocation =
    activeMapTab === "automotive"
      ? {
          title: mc.autoHeadline,
          subheadline: mc.autoSubheadline,
          address: auto.address,
          mapsUrl: auto.mapsUrl,
          embedUrl: auto.mapsEmbedUrl,
          directionsDestination:
            "AutoClub Merter-Platform Oto Yıkama Ve Uygulama Merkezi",
        }
      : {
          title: mc.consHeadline,
          subheadline: mc.consSubheadline,
          address: cons.address,
          mapsUrl: cons.mapsUrl,
          embedUrl: cons.mapsEmbedUrl,
          directionsDestination: "Genç İnşaat Zeytinburnu İstanbul",
        };

  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      <section className="py-16 lg:py-24 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-4">
            {t.contactPage.overline}
          </p>
          <h1 className="font-display-editorial text-5xl sm:text-6xl text-[#45483F] max-w-3xl">
            {t.contactPage.headline}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#69715F] font-light max-w-2xl leading-relaxed">
            {t.contactPage.leadPart1}{" "}
            <strong className="text-[#45483F] font-medium">
              AutoClub Merter
            </strong>{" "}
            {t.contactPage.leadPart2}{" "}
            <strong className="text-[#45483F] font-medium">
              Genç Group İnşaat
            </strong>{" "}
            {t.contactPage.leadPart3}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#69715F] mb-1">
                    {t.contactPage.autoOverline}
                  </p>
                  <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
                    AutoClub Merter
                  </h2>
                  <p className="text-sm text-[#69715F] mt-1">
                    {t.contactPage.autoSubtitle}
                  </p>
                </div>

                <ul className="space-y-4 text-sm border-t border-[#D8D3C7] pt-6">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="h-4 w-4 text-[#45483F] shrink-0 mt-1" />
                    <div>
                      <span className="text-[#69715F] block leading-relaxed">
                        {auto.address}
                      </span>
                      <a
                        href={auto.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F] mt-2"
                      >
                        <span>{t.contactPage.openInMaps}</span>
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <PhoneIcon className="h-4 w-4 text-[#45483F] shrink-0" />
                    <a
                      href={auto.phoneHref}
                      dir="ltr"
                      className="text-base font-medium text-[#45483F] hover:text-[#69715F]"
                    >
                      {auto.phoneDisplay}
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <MailIcon className="h-4 w-4 text-[#45483F] shrink-0" />
                    <a
                      href={`mailto:${auto.email}`}
                      dir="ltr"
                      className="text-sm text-[#69715F] hover:text-[#45483F]"
                    >
                      {auto.email}
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <InstagramIcon className="h-4 w-4 text-[#45483F] shrink-0" />
                    <a
                      href={auto.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#45483F] hover:text-[#69715F]"
                    >
                      <span>AutoClub Merter Instagram</span>
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </a>
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={auto.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-olive-primary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>{t.contactPage.whatsappBtn}</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-[#D8D3C7] pt-10 space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#69715F]">
                  {t.contactPage.consOverline}
                </p>
                <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
                  Genç Group İnşaat
                </h2>
                <p className="text-sm text-[#69715F] leading-relaxed">
                  {t.contactPage.consDesc}
                </p>

                <ul className="space-y-4 text-sm border-t border-[#D8D3C7] pt-6">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="h-4 w-4 text-[#45483F] shrink-0 mt-1" />
                    <div>
                      <span className="text-[#69715F] block leading-relaxed">
                        {cons.address}
                      </span>
                      <a
                        href={cons.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F] mt-2 font-medium"
                      >
                        <span>{t.contactPage.openInMaps}</span>
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                defaultDivision={defaultDivision}
                defaultService={defaultService}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Maps Section (With 2-Tab Switcher for Both Divisions) */}
      <section className="py-14 sm:py-20 bg-[#E8E4DA] border-t border-[#D8D3C7]">
        <div className="container-editorial">
          {/* Location Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setActiveMapTab("automotive")}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] rounded-sm transition-all duration-300 ${
                activeMapTab === "automotive"
                  ? "bg-[#45483F] text-[#F3F0E8] shadow-md"
                  : "bg-[#D8D3C7] text-[#45483F] hover:bg-[#C9C4B8]"
              }`}
            >
              {mc.autoTab}
            </button>
            <button
              type="button"
              onClick={() => setActiveMapTab("construction")}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] rounded-sm transition-all duration-300 ${
                activeMapTab === "construction"
                  ? "bg-[#45483F] text-[#F3F0E8] shadow-md"
                  : "bg-[#D8D3C7] text-[#45483F] hover:bg-[#C9C4B8]"
              }`}
            >
              {mc.consTab}
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#69715F] font-semibold">
                {mc.overline}
              </p>
              <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
                {activeLocation.title}
              </h2>
              <p className="text-sm text-[#69715F] font-light leading-relaxed">
                {activeLocation.subheadline}
              </p>
              <p className="text-xs text-[#69715F]/80 font-mono">
                {activeLocation.address}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={activeLocation.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-olive-primary justify-center text-center"
              >
                <MapPinIcon className="h-4 w-4" />
                <span>{mc.openInMaps}</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  activeLocation.directionsDestination
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial bg-[#F3F0E8] text-[#45483F] border border-[#D8D3C7] hover:bg-[#D8D3C7] justify-center text-center"
              >
                <span>{mc.getDirections}</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] sm:aspect-[21/9] w-full overflow-hidden bg-[#D8D3C7] border border-[#D8D3C7] shadow-xl rounded-sm">
            <iframe
              key={activeLocation.embedUrl}
              src={activeLocation.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeLocation.title} Google Maps Location`}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

