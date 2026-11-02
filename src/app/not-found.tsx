import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center bg-[#F3F0E8] text-[#45483F] pt-28 pb-20">
      <div className="container-editorial max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#69715F] mb-4">
          404
        </p>
        <h1 className="font-display-editorial text-5xl sm:text-6xl mb-6 text-[#45483F]">
          Aradığınız Sayfa Mevcut Değil.
        </h1>
        <p className="text-base sm:text-lg text-[#69715F] mb-10 leading-relaxed">
          Ulaşmaya çalıştığınız adres taşınmış veya kaldırılmış olabilir.
        </p>
        <Link href="/" className="btn-olive-primary">
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>
      </div>
    </section>
  );
}
