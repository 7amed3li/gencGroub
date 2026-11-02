import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { constructMetadata } from "@/lib/seo";
import { AUTOMOTIVE_SERVICES } from "@/content/siteData";
import { ServiceEditorialBlock } from "@/components/automotive/ServiceEditorialBlock";

export const metadata: Metadata = constructMetadata({
  title: "Otomotiv Hizmetleri — Kaporta, Oto Boya, Boyasız Göçük Düzeltme",
  description:
    "AutoClub Merter tarafından sunulan Kaporta Onarımı, Oto Boya, PPF Kaplama ve Boyasız Göçük Düzeltme (PDR) hizmetlerinin kapsamı.",
  path: "/automotive/services",
  ogImage: "/images/hero-automotive.png",
});

export default function AutomotiveServicesPage() {
  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      <section className="py-16 lg:py-24 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <Link
            href="/automotive"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F] mb-8"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>AutoClub Merter</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <h1 className="font-display-editorial text-5xl sm:text-6xl text-[#45483F]">
              Kaporta, Boya ve Boyasız Göçük Düzeltme Çözümleri.
            </h1>
            <p className="text-base sm:text-lg text-[#69715F] font-light leading-relaxed">
              Her araç müdahalesi; yüzey analizi, doğru ekipman seçimi ve
              aracın orijinal değerini koruma prensibiyle yürütülür.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F3F0E8]">
        <div className="container-editorial">
          {AUTOMOTIVE_SERVICES.map((service, idx) => (
            <ServiceEditorialBlock
              key={service.id}
              service={service}
              reversed={idx % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#E8E4DA] border-t border-[#D8D3C7]">
        <div className="container-editorial flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
              Aracınız İçin Ön Değerlendirme Talep Edin
            </h2>
          </div>
          <Link
            href="/contact?division=automotive"
            className="btn-olive-primary"
          >
            <span>İletişime Geçin</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
