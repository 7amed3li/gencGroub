import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { constructMetadata } from "@/lib/seo";
import { BRAND_INFO, AUTOMOTIVE_SERVICES } from "@/content/siteData";

export const metadata: Metadata = constructMetadata({
  title: "Hakkımızda — Kurumsal Yapı ve Faaliyet Alanları",
  description:
    "Genç Group; otomotiv sektöründe AutoClub Merter ve yapı sektöründe Genç Group İnşaat markalarıyla faaliyet gösteren kurumsal yapıdır.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      <section className="py-20 lg:py-28 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-4">
            Hakkımızda
          </p>
          <h1 className="font-display-editorial text-5xl sm:text-6xl lg:text-7xl text-[#45483F] max-w-4xl leading-[1.04]">
            Otomotiv ve İnşaat Sektörlerinde Nitelikli Uygulama Kültürü.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[#69715F] max-w-3xl font-light leading-relaxed">
            {BRAND_INFO.name}, otomotiv karoser ve boya uzmanlığını temsil eden{" "}
            <strong className="text-[#45483F] font-medium">
              AutoClub Merter
            </strong>{" "}
            ile modern yapı ve inşaat alanında faaliyet gösteren{" "}
            <strong className="text-[#45483F] font-medium">
              Genç Group İnşaat
            </strong>{" "}
            markalarını aynı kalite çatısı altında buluşturur.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <h2 className="font-display-editorial text-4xl text-[#45483F]">
                İki Uzmanlık Alanı
              </h2>
              <p className="text-sm text-[#69715F] leading-relaxed">
                Grup bünyesindeki her iki bölüm, kendi sektörünün teknik
                standartlarına uygun bağımsız operasyonel uzmanlıkla yönetilir.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-t lg:border-t-0 lg:border-l border-[#D8D3C7] pt-8 lg:pt-0 lg:pl-12">
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display-editorial text-3xl text-[#45483F]">
                    AutoClub Merter
                  </h3>
                  <p className="text-sm text-[#69715F] leading-relaxed">
                    İstanbul Merter bölgesinde faaliyet gösteren AutoClub
                    Merter, araç dış yüzey ve karoser onarımında uzmanlaşmıştır:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#45483F] pt-2">
                    {AUTOMOTIVE_SERVICES.map((s) => (
                      <li key={s.id} className="flex items-center gap-2.5">
                        <CheckIcon className="h-4 w-4 text-[#69715F]" />
                        <span>{s.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/automotive" className="link-editorial w-fit">
                  <span>AutoClub Merter</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-display-editorial text-3xl text-[#45483F]">
                    Genç Group İnşaat
                  </h3>
                  <p className="text-sm text-[#69715F] leading-relaxed">
                    Modern yapı anlayışı, kaliteli işçilik ve profesyonel
                    uygulama yönetimi odağıyla inşaat ve mimari projeler
                    geliştirir.
                  </p>
                </div>

                <Link href="/construction" className="link-editorial w-fit">
                  <span>Genç Group İnşaat</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
