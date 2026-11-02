import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { AutomotiveServicesPageClient } from "@/components/pages/AutomotiveServicesPageClient";

export const metadata: Metadata = constructMetadata({
  title: "Otomotiv Hizmetleri — Kaporta, Oto Boya, Boyasız Göçük Düzeltme",
  description:
    "AutoClub Merter tarafından sunulan Kaporta Onarımı, Oto Boya, PPF Kaplama ve Boyasız Göçük Düzeltme (PDR) hizmetlerinin kapsamı.",
  path: "/automotive/services",
  ogImage: "/images/hero-automotive.png",
});

export default function AutomotiveServicesPage() {
  return <AutomotiveServicesPageClient />;
}
