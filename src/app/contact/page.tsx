import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ContactPageClient } from "@/components/pages/ContactPageClient";

export const metadata: Metadata = constructMetadata({
  title: "İletişim — AutoClub Merter & Genç Group İnşaat",
  description:
    "Genç Group Otomotiv (AutoClub Merter — 0543 819 30 24, Merter / Güngören) ve Genç Group İnşaat bölümleri için doğrudan iletişim kanalları.",
  path: "/contact",
});

interface ContactPageProps {
  searchParams: Promise<{ division?: string; service?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = await searchParams;
  const defaultDivision =
    resolvedParams.division === "construction" ? "construction" : "automotive";
  const defaultService = resolvedParams.service || "";

  return (
    <ContactPageClient
      defaultDivision={defaultDivision}
      defaultService={defaultService}
    />
  );
}
