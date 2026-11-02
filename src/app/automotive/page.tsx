import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { AutomotivePageClient } from "@/components/pages/AutomotivePageClient";

export const metadata: Metadata = constructMetadata({
  title:
    "AutoClub Merter — Kaporta, Oto Boya, Boyasız Göçük & PPF Kaplama",
  description:
    "Genç Group Otomotiv çatısı altında faaliyet gösteren AutoClub Merter; kaporta onarımı, oto boya, boyasız göçük düzeltme, PPF kaplama ve seramik kaplama hizmetleri sunar.",
  path: "/automotive",
  ogImage: "/images/atelier-daylight.jpg",
});

export default function AutomotivePage() {
  return <AutomotivePageClient />;
}
