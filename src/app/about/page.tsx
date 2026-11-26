import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { AboutPageClient } from "@/components/pages/AboutPageClient";

export const metadata: Metadata = constructMetadata({
  title:
    "Hakkımızda — Kurucumuz Davut Genç ve Genç Group Mirası | AutoClub Merter & Genç İnşaat",
  description:
    "1976 Zeytinburnu doğumlu kurucumuz Davut Genç'in 1991'de başlayan esnaflık serüveni, bugün modern inşaat projeleri (Genç Group İnşaat) ve premium araç yüzey uzmanlığı (AutoClub Merter) ile 30+ yıllık güven mirasını sürdürüyor.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageClient />;
}
