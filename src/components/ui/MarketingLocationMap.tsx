"use client";

import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import { BRAND_INFO } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

interface MarketingLocationMapProps {
  division: "automotive" | "construction";
  badge?: string;
  title?: string;
  description?: string;
  className?: string;
}

const COPY = {
  tr: {
    automotive: {
      badge: "Merkezi Konum & Kolay Ulaşım",
      title: "Atölyemize Davetlisiniz: Yerinde Ücretsiz Ekspertiz",
      description:
        "Aracınızı güvenle teslim edeceğiniz AutoClub Merter, Platform Merter Suites kapalı otopark katında kolay ulaşılabilir merkezi bir konumdadır. Ücretsiz hasar tespiti, boya kalınlık analizi ve randevu için doğrudan atölyemize bekliyoruz.",
      perks: [
        "Kapalı Otopark & Güvenli Teslimat Alanı",
        "Lazer Şasi ve Optik Renk Eşleştirme İncelemesi",
        "Kahve Eşliğinde Birebir Usta & Ekspertiz Danışmanlığı",
      ],
      openInMaps: "Google Haritalar'da Aç",
      whatsappLocation: "WhatsApp ile Canlı Konum",
      callDirect: "Atölyeyi Arayın",
    },
    construction: {
      badge: "Merkez Ofis & Şantiye Koordinasyonu",
      title: "Projenizi Yüz Yüze Konuşalım: Zeytinburnu Yönetim Merkezi",
      description:
        "Kentsel dönüşüm, arsa geliştirme ve anahtar teslim inşaat projeleriniz için Zeytinburnu merkez yönetim ofisimizde ve şantiyelerimizde sizleri ağırlıyoruz. Mühendislerimizle yüz yüze tanışın, yapınızın imar potansiyelini birlikte değerlendirelim.",
      perks: [
        "Şantiye ve Saha Üzerinde Canlı İnceleme",
        "Mühendis ve Mimarlarla Birebir Proje Analizi",
        "Deprem Yönetmeliği ve Kentsel Dönüşüm Danışmanlığı",
      ],
      openInMaps: "Google Haritalar'da Aç",
      whatsappLocation: "WhatsApp ile Proje Gönderin",
      callDirect: "Mühendislik Ekibini Arayın",
    },
  },
  en: {
    automotive: {
      badge: "Central Location & Easy Access",
      title: "You Are Invited to Our Atelier: Free On-Site Inspection",
      description:
        "AutoClub Merter is conveniently located inside Platform Merter Suites with sheltered private parking. Visit us directly for complimentary damage assessment, paint depth analysis, and custom PPF surface consultation.",
      perks: [
        "Sheltered Indoor Parking & Secure Drop-Off",
        "Laser Chassis & Optical Color-Match Diagnosis",
        "Direct One-on-One Master Craftsman Consultation",
      ],
      openInMaps: "Open in Google Maps",
      whatsappLocation: "Request Location via WhatsApp",
      callDirect: "Call Atelier Directly",
    },
    construction: {
      badge: "Head Office & Site Management",
      title: "Let's Discuss Your Project in Person: Zeytinburnu Center",
      description:
        "We welcome property owners and developers to our Zeytinburnu management office and live construction sites. Meet our structural engineers face-to-face to evaluate your plot's urban transformation and zoning potential.",
      perks: [
        "Live On-Site Construction Quality Inspection",
        "Face-to-Face Project Planning with Senior Engineers",
        "Seismic Standards & Turnkey Contracting Guidance",
      ],
      openInMaps: "Open in Google Maps",
      whatsappLocation: "Send Project via WhatsApp",
      callDirect: "Call Construction Team",
    },
  },
  ar: {
    automotive: {
      badge: "موقع مركزي مميز وسهولة وصول كاملة",
      title: "تفضل بزيارة مركزنا: معاينة مجانية لسيارتك واستشارة فورية",
      description:
        "يقع مركز AutoClub Merter في طابق المواقف المغطاة بـ Platform Merter Suites بموقع استراتيجي يسهل الوصول إليه من كافة مناطق إسطنبول. تفضل بزيارتنا لفحص مجاني لهيكل ودهان سيارتك واستشارة المتخصصين مباشرة.",
      perks: [
        "مواقف مغطاة خاصة ومنطقة تسليم واستلام آمنة",
        "فحص ليزري لهيكل السيارة ومطابقة طيفية للون",
        "استشارة فنية مباشرة مع كبار الفنيين والخبراء",
      ],
      openInMaps: "افتح في خرائط جوجل",
      whatsappLocation: "طلب الموقع عبر واتساب",
      callDirect: "اتصال هاتفي مباشر بالمركز",
    },
    construction: {
      badge: "المقر الإداري وتنسيق المشاريع الميدانية",
      title: "لنناقش مشروعك وجهاً لوجه: مقر إدارة مشاريع زيتين بورنو",
      description:
        "نرحب بأصحاب العقارات والأراضي والمستثمرين في مقرنا الإداري ومواقع العمل الميدانية في زيتين بورنو. التقِ بمهندسينا المعماريين والإنشائيين لمناقشة إعادة إعمار وتطوير عقارك بأعلى عائد ومواصفات أمان زلزالي.",
      perks: [
        "معاينة ميدانية حية لجودة وتفاصيل البناء على أرض الواقع",
        "جلسة تخطيط هندسي ودراسة جدوى مع كبار المهندسين",
        "استشارات قانونية وهندسية للتحول الحضري وتسليم المفتاح",
      ],
      openInMaps: "افتح في خرائط جوجل",
      whatsappLocation: "تواصل مباشر عبر واتساب",
      callDirect: "اتصل بالإدارة الهندسية مباشرة",
    },
  },
} as const;

export function MarketingLocationMap({
  division,
  badge,
  title,
  description,
  className = "",
}: MarketingLocationMapProps) {
  const { locale } = useLanguage();
  const c = COPY[locale][division];
  const auto = BRAND_INFO.automotiveDivision;
  const cons = BRAND_INFO.constructionDivision;

  const isAuto = division === "automotive";
  const entity = isAuto ? auto : cons;
  const destinationQuery = isAuto
    ? "AutoClub Merter-Platform Oto Yıkama Ve Uygulama Merkezi"
    : "Genç İnşaat Zeytinburnu İstanbul";

  const whatsappMessage = isAuto
    ? encodeURIComponent(
        "Merhaba AutoClub Merter, atölyenizi ziyaret etmek için canlı konum ve randevu bilgisi rica ediyorum."
      )
    : encodeURIComponent(
        "Merhaba Genç İnşaat, kentsel dönüşüm / yapı projemiz için ofisinizde görüşmek üzere randevu almak istiyorum."
      );

  return (
    <section
      aria-label={title || c.title}
      className={`py-14 sm:py-20 lg:py-24 bg-[#E8E4DA] border-t border-[#D8D3C7] text-[#45483F] ${className}`}
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Persuasive Marketing Copy & Direct CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-block border-s-2 border-[#69715F] ps-3 py-0.5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#69715F] font-bold font-mono">
                  {badge || c.badge}
                </span>
              </div>
              <h2 className="font-display-editorial text-2xl sm:text-4xl text-[#45483F] leading-tight">
                {title || c.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed font-light">
              {description || c.description}
            </p>

            {/* High-Converting Perks List */}
            <ul className="space-y-2.5 pt-2 border-t border-[#D8D3C7] text-xs sm:text-sm font-medium text-[#45483F]">
              {c.perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#69715F] shrink-0" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            {/* Address Row */}
            <div className="p-4 bg-[#F3F0E8] border border-[#D8D3C7] space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="h-4 w-4 text-[#45483F] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="block text-[#45483F] font-semibold">
                    {entity.officialTitle || entity.name}
                  </strong>
                  <span className="text-[#69715F]">{entity.address}</span>
                </div>
              </div>
            </div>

            {/* Marketing CTAs - Full Width Stacked Luxury Cards (Zero overlap on any screen size) */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={entity.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`${entity.name} Google Haritalar`}
                className="group w-full flex items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-[#45483F] hover:bg-[#353830] text-[#F3F0E8] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-md"
              >
                <span className="inline-flex items-center gap-3 min-w-0">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-[#A5AA98] group-hover:text-[#F3F0E8]" />
                  <span className="truncate">{c.openInMaps}</span>
                </span>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0 opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/905438193024?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`${entity.name} WhatsApp`}
                className="group w-full flex items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-[#F3F0E8] hover:bg-[#E8E4DA] text-[#45483F] border border-[#69715F]/35 hover:border-[#45483F] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm"
              >
                <span className="inline-flex items-center gap-3 min-w-0">
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
                  <span className="truncate">{c.whatsappLocation}</span>
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Full Responsive Interactive Google Map Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#D8D3C7] border-2 border-[#D8D3C7] shadow-xl">
              <ArchitecturalCornerTicks />
              <iframe
                src={entity.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${entity.name} Google Maps Embed`}
                className="w-full h-full"
              />

              {/* Floating Quick Direction Bar */}
              <div className="absolute bottom-3 start-3 end-3 sm:start-auto sm:end-3 z-10 bg-[#45483F]/95 backdrop-blur-md text-[#F3F0E8] p-3 text-xs flex items-center justify-between gap-3 shadow-2xl border border-[#69715F]/40">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-[#8E9A7C]" />
                  <span className="font-mono text-[11px] font-semibold">
                    {entity.region}
                  </span>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    destinationQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8E9A7C] hover:bg-[#A1AF8E] text-[#1E201A] font-bold text-[10px] uppercase tracking-wider transition-colors"
                >
                  <span>Yol Tarifi</span>
                  <ArrowUpRightIcon className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

