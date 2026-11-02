"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function SplitBusinessSection() {
  const [activeSide, setActiveSide] = useState<
    "automotive" | "construction" | null
  >(null);

  return (
    <section
      id="faaliyet-alanlari"
      aria-labelledby="split-business-heading"
      className="relative bg-[#F3F0E8] border-b border-[#D8D3C7]"
    >
      {/* Clean Editorial Header */}
      <div className="container-editorial py-14 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-3">
              Faaliyet Alanlarımız
            </p>
            <h2
              id="split-business-heading"
              className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F]"
            >
              İki Uzmanlık Dünyası.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#69715F] max-w-md font-light leading-relaxed">
            Otomotiv atölyemiz veya mimari yapı bölümümüzü incelemek için ilgili
            alanı seçin.
          </p>
        </div>
      </div>

      {/* Interactive Split-Screen Panels — Clean Photography First, Zero Box Clutter */}
      <div
        className="flex flex-col lg:flex-row lg:h-[78vh] lg:max-h-[820px] w-full overflow-hidden bg-[#353830]"
        onMouseLeave={() => setActiveSide(null)}
      >
        {/* PANEL 1: AUTOMOTIVE — AUTOCLUB MERTER */}
        <Link
          href="/automotive"
          onMouseEnter={() => setActiveSide("automotive")}
          onFocus={() => setActiveSide("automotive")}
          className={cn(
            "group relative flex flex-col justify-end overflow-hidden p-7 sm:p-12 lg:p-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b lg:border-b-0 lg:border-r border-[#F3F0E8]/15 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto",
            activeSide === "automotive"
              ? "lg:flex-[1.45]"
              : activeSide === "construction"
                ? "lg:flex-[0.75]"
                : "lg:flex-1"
          )}
        >
          {/* Bright, Clear Background Photography */}
          <Image
            src="/images/atelier-daylight.jpg"
            alt="AutoClub Merter — Kaporta Onarımı, Oto Boya ve Boyasız Göçük Düzeltme"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Bottom-Only Gradient so the Car Photo is Clear and Unobstructed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2F28]/95 via-[#2C2F28]/35 to-transparent" />

          {/* Clean Bottom Editorial Caption */}
          <div className="relative z-10 max-w-lg">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#D8D3C7] mb-2">
              Otomotiv Atölyesi — Merter, İstanbul
            </p>
            <h3 className="font-display-editorial text-3xl sm:text-5xl text-[#F3F0E8]">
              AutoClub Merter
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-[#D8D3C7]/90 font-light">
              Kaporta Onarımı · Oto Boya & PPF · Boyasız Göçük Düzeltme
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 border-b border-[#F3F0E8]/60 pb-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] group-hover:border-[#F3F0E8]">
              <span>Otomotiv Bölümünü Keşfet</span>
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </Link>

        {/* PANEL 2: CONSTRUCTION — GENÇ GROUP İNŞAAT */}
        <Link
          href="/construction"
          onMouseEnter={() => setActiveSide("construction")}
          onFocus={() => setActiveSide("construction")}
          className={cn(
            "group relative flex flex-col justify-end overflow-hidden p-7 sm:p-12 lg:p-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto",
            activeSide === "construction"
              ? "lg:flex-[1.45]"
              : activeSide === "automotive"
                ? "lg:flex-[0.75]"
                : "lg:flex-1"
          )}
        >
          {/* Bright, Clear Architectural Photography */}
          <Image
            src="/images/architecture-limestone.jpg"
            alt="Genç Group İnşaat — Mimari ve Yapı Çözümleri"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Bottom-Only Gradient so the Building Photo is Clear and Unobstructed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2F28]/95 via-[#2C2F28]/35 to-transparent" />

          {/* Clean Bottom Editorial Caption */}
          <div className="relative z-10 max-w-lg">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#D8D3C7] mb-2">
              Mimari & Yapı — Türkiye
            </p>
            <h3 className="font-display-editorial text-3xl sm:text-5xl text-[#F3F0E8]">
              Genç Group İnşaat
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-[#D8D3C7]/90 font-light">
              Modern Yapı Uygulamaları · Mimari Tasarım · Anahtar Teslim Projeler
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 border-b border-[#F3F0E8]/60 pb-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#F3F0E8] group-hover:border-[#F3F0E8]">
              <span>İnşaat Bölümünü Keşfet</span>
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
