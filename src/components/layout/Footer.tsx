import React from "react";
import Link from "next/link";
import {
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "@/components/ui/Icons";
import { BRAND_INFO, AUTOMOTIVE_SERVICES } from "@/content/siteData";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const auto = BRAND_INFO.automotiveDivision;

  return (
    <footer className="bg-[#45483F] text-[#F3F0E8] border-t border-[#69715F]/40">
      <div className="container-editorial py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Parent Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <p className="font-display-editorial text-2xl font-semibold tracking-[0.14em] uppercase text-[#F3F0E8]">
              {BRAND_INFO.name}
            </p>
            <p className="text-sm text-[#D8D3C7] max-w-sm leading-relaxed">
              Otomotiv yüzey uzmanlığı ve çağdaş yapı anlayışını tek bir
              kurumsal çatı altında buluşturan Genç Group; AutoClub Merter ve
              Genç Group İnşaat markalarıyla faaliyet göstermektedir.
            </p>
            <div className="pt-2">
              <a
                href={auto.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#F3F0E8] hover:text-[#D8D3C7] transition-colors"
              >
                <InstagramIcon className="h-4 w-4 text-[#A5AA98]" />
                <span>{auto.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Automotive Division */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
              AutoClub Merter
            </p>
            <ul className="space-y-2.5 text-sm">
              {AUTOMOTIVE_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/automotive/services#${service.slug}`}
                    className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-2 text-xs text-[#D8D3C7]">
              <p className="flex items-start gap-2.5">
                <MapPinIcon className="h-4 w-4 shrink-0 mt-0.5 text-[#A5AA98]" />
                <span>{auto.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-[#A5AA98]" />
                <a
                  href={auto.phoneHref}
                  className="text-[#F3F0E8] hover:text-[#D8D3C7]"
                >
                  {auto.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-[#A5AA98]" />
                <a
                  href={`mailto:${auto.email}`}
                  className="hover:text-[#F3F0E8]"
                >
                  {auto.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Construction Division */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
              Genç Group İnşaat
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/construction"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  Mimari Yaklaşım
                </Link>
              </li>
              <li>
                <Link
                  href="/construction/projects"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  Proje Portfolyosu
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A5AA98]">
              Kurumsal
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#D8D3C7] hover:text-[#F3F0E8] transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#69715F]/40 py-6">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5AA98]">
          <p>© {currentYear} Genç Group.</p>
          <div className="flex items-center gap-8">
            <Link
              href="/automotive"
              className="hover:text-[#F3F0E8] transition-colors"
            >
              AutoClub Merter
            </Link>
            <Link
              href="/construction"
              className="hover:text-[#F3F0E8] transition-colors"
            >
              Genç Group İnşaat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
