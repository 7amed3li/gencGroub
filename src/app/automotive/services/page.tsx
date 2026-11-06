import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { AutomotiveServicesPageClient } from "@/components/pages/AutomotiveServicesPageClient";

export const metadata: Metadata = constructMetadata({
  title: "Oto Kaporta, Boya, Göçük Düzeltme ve PPF Hizmetleri | AutoClub Merter",
  description:
    "AutoClub Merter hizmetleri: kaporta ve tampon onarımı, oto boya ve renk eşleştirme, boyasız göçük düzeltme (PDR), PPF ve seramik kaplama. Merter / Güngören, İstanbul.",
  path: "/automotive/services",
  ogImage: "/images/hero-automotive.png",
});

export default function AutomotiveServicesPage() {
  return <AutomotiveServicesPageClient />;
}
