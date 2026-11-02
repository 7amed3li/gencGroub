"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { CompareSliderIcon } from "@/components/ui/Icons";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const updatePositionFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-6">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden border border-[#D8D3C7] bg-[#D8D3C7] cursor-ew-resize touch-pan-y"
        role="group"
        aria-label="AutoClub Merter Stüdyo Uygulama ve Yüzey Karşılaştırma Modülü"
      >
        {/* Base Layer: Gloss Ceramic & Black Pack Finish — Range Rover Vogue */}
        <div className="absolute inset-0">
          <Image
            src="/images/instagram/post-2.jpg"
            alt="AutoClub Merter — Range Rover Vogue Black Pack ve Seramik Kaplama Finişi"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-center"
            draggable={false}
          />
          <span className="absolute top-4 right-4 z-10 bg-[#F3F0E8]/92 border border-[#D8D3C7] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[#45483F]">
            Parlak Seramik & Black Pack (Range Rover Vogue)
          </span>
        </div>

        {/* Clipped Overlay Layer: Satin Matte PPF Finish — Opel Frontera */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="/images/instagram/post-1.jpg"
            alt="AutoClub Merter — Opel Frontera Saten Siyah Mat PPF Uygulaması"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-center"
            draggable={false}
          />
          <span className="absolute top-4 left-4 z-10 bg-[#F3F0E8]/92 border border-[#D8D3C7] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[#45483F]">
            Saten Siyah Mat PPF (Opel Frontera)
          </span>
        </div>

        {/* Vertical Divider Line & Handle */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-20 w-[2px] bg-[#F3F0E8]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center border border-[#D8D3C7] bg-[#45483F] text-[#F3F0E8] shadow-md">
            <CompareSliderIcon className="h-5 w-5" />
          </div>
        </div>

        <label htmlFor="before-after-range" className="sr-only">
          Mat PPF ve Parlak Seramik finiş karşılaştırma yüzdesi
        </label>
        <input
          id="before-after-range"
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Yüzey Dokusu Karşılaştırma Kaydırıcısı"
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.14em] text-[#69715F]">
        <span>AutoClub Merter Stüdyo Uygulamaları</span>
        <span>Kaydırıcı: %{position}</span>
      </div>
    </div>
  );
}
