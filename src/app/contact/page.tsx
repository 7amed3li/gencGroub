import React from "react";
import type { Metadata } from "next";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  WhatsAppIcon,
  ArrowUpRightIcon,
} from "@/components/ui/Icons";
import { constructMetadata } from "@/lib/seo";
import { BRAND_INFO } from "@/content/siteData";
import { ContactForm } from "@/components/contact/ContactForm";

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
  const auto = BRAND_INFO.automotiveDivision;

  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      <section className="py-16 lg:py-24 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <p className="text-xs uppercase tracking-[0.22em] text-[#69715F] mb-4">
            İletişim
          </p>
          <h1 className="font-display-editorial text-5xl sm:text-6xl text-[#45483F] max-w-3xl">
            Bölümlerimizle Doğrudan İletişime Geçin.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#69715F] font-light max-w-2xl leading-relaxed">
            Otomotiv hizmetleri için{" "}
            <strong className="text-[#45483F] font-medium">
              AutoClub Merter
            </strong>
            , yapı ve inşaat projeleri için{" "}
            <strong className="text-[#45483F] font-medium">
              Genç Group İnşaat
            </strong>{" "}
            iletişim kanallarını kullanabilir veya formu doldurabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#69715F] mb-1">
                    Otomotiv Atölyesi
                  </p>
                  <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
                    AutoClub Merter
                  </h2>
                  <p className="text-sm text-[#69715F] mt-1">
                    Kaporta Onarımı, Oto Boya, Göçük Düzeltme & PPF
                  </p>
                </div>

                <ul className="space-y-4 text-sm border-t border-[#D8D3C7] pt-6">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="h-4 w-4 text-[#45483F] shrink-0 mt-1" />
                    <div>
                      <span className="text-[#69715F] block leading-relaxed">
                        {auto.address}
                      </span>
                      <a
                        href={auto.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-[#45483F] hover:text-[#69715F] mt-2"
                      >
                        <span>Haritada Aç</span>
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <PhoneIcon className="h-4 w-4 text-[#45483F] shrink-0" />
                    <a
                      href={auto.phoneHref}
                      className="text-base font-medium text-[#45483F] hover:text-[#69715F]"
                    >
                      {auto.phoneDisplay}
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <MailIcon className="h-4 w-4 text-[#45483F] shrink-0" />
                    <a
                      href={`mailto:${auto.email}`}
                      className="text-sm text-[#69715F] hover:text-[#45483F]"
                    >
                      {auto.email}
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <InstagramIcon className="h-4 w-4 text-[#45483F] shrink-0" />
                    <a
                      href={auto.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#69715F] hover:text-[#45483F]"
                    >
                      instagram.com/autoclubmerter
                    </a>
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={auto.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-olive-primary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp İletişim</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-[#D8D3C7] pt-10 space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#69715F]">
                  Mimari & Yapı
                </p>
                <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
                  Genç Group İnşaat
                </h2>
                <p className="text-sm text-[#69715F] leading-relaxed">
                  Yapı, mimari proje ve kurumsal iş birliği talepleriniz için
                  iletişim formundan &ldquo;Genç Group İnşaat&rdquo; bölümünü
                  seçerek doğrudan mesaj gönderebilirsiniz.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm
                defaultDivision={defaultDivision}
                defaultService={defaultService}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
