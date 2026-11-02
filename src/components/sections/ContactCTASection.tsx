"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { EditorialReveal } from "@/components/ui/StoryScrollArchitecture";
import { BRAND_INFO } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function ContactCTASection() {
  const { locale, t } = useLanguage();
  const auto = BRAND_INFO.automotiveDivision;

  return (
    <section
      id="bolum-iletisim"
      aria-labelledby="contact-cta-heading"
      className="section-padding bg-[#E8E4DA] text-[#45483F]"
    >
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end"
        >
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#69715F]">
              {t.contactCta.overline}
            </p>
            <EditorialReveal>
              <h2
                id="contact-cta-heading"
                className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F] leading-[1.06]"
              >
                {t.contactCta.headline}
              </h2>
            </EditorialReveal>
            <p className="text-base sm:text-lg text-[#69715F] max-w-xl font-light leading-relaxed pt-1">
              {locale === "tr" ? (
                <>
                  {t.contactCta.bodyPart1}{" "}
                  <strong className="text-[#45483F] font-medium">
                    AutoClub Merter
                  </strong>
                  ; {t.contactCta.bodyPart2}{" "}
                  <strong className="text-[#45483F] font-medium">
                    Genç Group İnşaat
                  </strong>{" "}
                  {t.contactCta.bodyPart3}
                </>
              ) : (
                <>
                  {t.contactCta.bodyPart1}{" "}
                  <strong className="text-[#45483F] font-medium">
                    AutoClub Merter
                  </strong>{" "}
                  {t.contactCta.bodyPart2}{" "}
                  <strong className="text-[#45483F] font-medium">
                    Genç Group İnşaat
                  </strong>{" "}
                  {t.contactCta.bodyPart3}
                </>
              )}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href={auto.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#45483F] text-[#F3F0E8] px-7 py-4.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-[#69715F]"
            >
              <span className="inline-flex items-center gap-2.5">
                <WhatsAppIcon className="h-4 w-4" />
                <span>AutoClub Merter · {auto.phoneDisplay}</span>
              </span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </a>

            <Link
              href="/contact?division=construction"
              className="group flex items-center justify-between border border-[#45483F]/35 bg-[#F3F0E8] px-7 py-4.5 text-xs font-medium uppercase tracking-[0.18em] text-[#45483F] transition-colors hover:bg-[#D8D3C7]"
            >
              <span>{t.contactCta.consButton}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
