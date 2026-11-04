"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, InstagramIcon } from "@/components/ui/Icons";
import {
  ParallaxImageWindow,
  EditorialReveal,
} from "@/components/ui/StoryScrollArchitecture";
import { BRAND_INFO, getAutomotiveServices } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

export function DivisionsShowcase() {
  const { locale, t } = useLanguage();
  const services = getAutomotiveServices(locale);

  return (
    <section
      id="bolum-uzmanlik"
      aria-label="Genç Group Divisions"
      className="bg-[#F3F0E8] text-[#45483F]"
    >
      {/* AUTOMOTIVE DIVISION */}
      <div className="section-padding border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ParallaxImageWindow
                src="/images/atelier/amg-gle-coupe-landscape.jpg"
                alt="AutoClub Merter — Mercedes-AMG GLE Coupe LED Studio"
                aspectClassName="aspect-[16/10] sm:aspect-[16/11]"
                parallaxStrength={8}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-2 lg:order-1 space-y-5 sm:space-y-6"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F]">
                {t.divisions.autoOverline}
              </p>

              <EditorialReveal>
                <h2 className="font-display-editorial text-3xl sm:text-5xl lg:text-6xl text-[#45483F]">
                  AutoClub Merter
                </h2>
              </EditorialReveal>

              <p className="text-sm sm:text-base text-[#69715F] font-light leading-relaxed">
                {t.divisions.autoBody}
              </p>

              <div className="divide-y divide-[#D8D3C7] border-t border-b border-[#D8D3C7]">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.07 }}
                  >
                    <Link
                      href={`/automotive#${service.slug}`}
                      className="group flex items-center justify-between gap-4 py-3.5 sm:py-4 transition-colors hover:text-[#69715F]"
                    >
                      <div className="min-w-0">
                        <span className="font-display-editorial text-xl sm:text-2xl block text-[#45483F] leading-snug">
                          {service.title}
                        </span>
                        <span className="text-xs text-[#69715F] block mt-0.5">
                          {service.subtitle}
                        </span>
                      </div>
                      <ArrowRightIcon className="h-4 w-4 shrink-0 text-[#69715F] transition-transform duration-300 group-hover:translate-x-1.5 rtl:rotate-180" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link
                  href="/automotive"
                  className="btn-olive-primary justify-between sm:justify-center w-full sm:w-auto"
                >
                  <span>{t.divisions.autoCta}</span>
                  <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                </Link>

                <a
                  href={BRAND_INFO.automotiveDivision.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 py-2 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F] transition-colors"
                >
                  <InstagramIcon className="h-4 w-4" />
                  <span>{BRAND_INFO.automotiveDivision.instagramHandle}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CONSTRUCTION DIVISION */}
      <div className="section-padding bg-[#E8E4DA] text-[#45483F] border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-1">
              <ParallaxImageWindow
                src="/images/architecture-limestone.jpg"
                alt="Genç Group İnşaat"
                aspectClassName="aspect-[16/10] sm:aspect-[16/11]"
                parallaxStrength={8}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-2 space-y-5 sm:space-y-6"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#69715F]">
                {t.divisions.consOverline}
              </p>

              <EditorialReveal>
                <h2 className="font-display-editorial text-3xl sm:text-5xl lg:text-6xl text-[#45483F]">
                  Genç Group İnşaat
                </h2>
              </EditorialReveal>

              <p className="text-sm sm:text-base text-[#69715F] font-light leading-relaxed">
                {t.divisions.consBody}
              </p>

              <p className="text-xs sm:text-sm text-[#69715F] leading-relaxed pt-4 sm:pt-5 border-t border-[#D8D3C7]">
                {t.divisions.consSubBody}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link
                  href="/construction"
                  className="btn-olive-primary justify-between sm:justify-center w-full sm:w-auto"
                >
                  <span>{t.divisions.consCta}</span>
                  <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
                </Link>
                <Link
                  href="/construction/projects"
                  className="link-editorial self-center sm:self-auto"
                >
                  <span>{t.divisions.consSecondaryCta}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
