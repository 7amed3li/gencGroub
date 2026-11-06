import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { AutomotivePageClient } from "@/components/pages/AutomotivePageClient";

export const metadata: Metadata = constructMetadata({
  title: "Merter Kaporta, Oto Boya & PPF — AutoClub Merter | Genç Group",
  description:
    "Merter / Güngören'deki AutoClub Merter atölyesi: kaporta ve tampon onarımı, oto boya, boyasız göçük düzeltme, PPF ve seramik kaplama. Randevu: 0543 819 30 24.",
  path: "/automotive",
  ogImage: "/images/atelier-daylight.jpg",
});

export default function AutomotivePage() {
  return <AutomotivePageClient />;
}
