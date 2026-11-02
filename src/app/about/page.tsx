import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { AboutPageClient } from "@/components/pages/AboutPageClient";

export const metadata: Metadata = constructMetadata({
  title: "Hakkımızda — Kurumsal Yapı ve Faaliyet Alanları",
  description:
    "Genç Group; otomotiv sektöründe AutoClub Merter ve yapı sektöründe Genç Group İnşaat markalarıyla faaliyet gösteren kurumsal yapıdır.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageClient />;
}
