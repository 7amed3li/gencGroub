"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const METRICS_BY_LOCALE = {
  tr: [
    {
      index: "01",
      value: "9H",
      unit: "Nano Kristal",
      label: "AutoClub Ceramic Zırh",
      detail: "Yüksek parlaklık ve hidrofobik yüzey kalkanı",
    },
    {
      index: "02",
      value: "190",
      unit: "Mikron (μm)",
      label: "NDOUR PPF Kaplama",
      detail: "Kendi kendini yenileyen poliüretan koruma filmi",
    },
    {
      index: "03",
      value: "0.1",
      unit: "Milimetre",
      label: "Kalibrasyon Hassasiyeti",
      detail: "Karoser panel ve mimari cephe derz toleransı",
    },
    {
      index: "04",
      value: "%100",
      unit: "Orijinallik",
      label: "Fabrika & Yapı Standardı",
      detail: "Değer koruyan şeffaf mühendislik ve işçilik",
    },
  ],
  en: [
    {
      index: "01",
      value: "9H",
      unit: "Nano Crystal",
      label: "AutoClub Ceramic Shield",
      detail: "Deep mirror gloss & hydrophobic surface armor",
    },
    {
      index: "02",
      value: "190",
      unit: "Microns (μm)",
      label: "NDOUR PPF Protection",
      detail: "Self-healing optical polyurethane paint film",
    },
    {
      index: "03",
      value: "0.1",
      unit: "Millimeter",
      label: "Calibration Precision",
      detail: "Bodywork panel gap & architectural joint tolerance",
    },
    {
      index: "04",
      value: "100%",
      unit: "Originality",
      label: "Factory & Build Standard",
      detail: "Value-preserving engineering & transparent craft",
    },
  ],
  ar: [
    {
      index: "01",
      value: "9H",
      unit: "نانو كريستال",
      label: "درع AutoClub Ceramic",
      detail: "لمعان المرآة العميق وعزل مائي فائق للسطح",
    },
    {
      index: "02",
      value: "190",
      unit: "ميكرون (μm)",
      label: "حماية NDOUR PPF",
      detail: "فيلم حماية بولي يوريثان ذاتي المعالجة ضد الخدوش",
    },
    {
      index: "03",
      value: "0.1",
      unit: "مليمتر",
      label: "دقة المعايرة الهندسية",
      detail: "تطابق فواصل الهياكل والواجهات الحجرية المعمارية",
    },
    {
      index: "04",
      value: "100%",
      unit: "أصالة المصنع",
      label: "معيار التنفيذ والجودة",
      detail: "حرفية تحافظ على القيمة الأصلية للسيارة والمبنى",
    },
  ],
} as const;

export function PrecisionMetricsStrip() {
  const { locale } = useLanguage();
  const metrics = METRICS_BY_LOCALE[locale];

  return (
    <section
      aria-label="Precision Standards"
      className="bg-[#E8E4DA] text-[#45483F] border-b border-[#D8D3C7]"
    >
      <div className="container-editorial py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-10 lg:divide-x lg:rtl:divide-x-reverse divide-[#D8D3C7]">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.75,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:ps-8 first:lg:ps-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#69715F] mb-3">
                  <span>{m.index}</span>
                  <span className="text-[#A5AA98]">{m.unit}</span>
                </div>

                <p className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F] tracking-tight leading-none">
                  {m.value}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-[#D8D3C7]/80">
                <h3 className="text-xs sm:text-sm font-medium text-[#45483F]">
                  {m.label}
                </h3>
                <p className="mt-1 text-[11px] sm:text-xs text-[#69715F] leading-relaxed">
                  {m.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
