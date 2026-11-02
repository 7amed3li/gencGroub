"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { EditorialReveal } from "@/components/ui/StoryScrollArchitecture";

export function GroupIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  // Living vertical architectural axis line that draws down as the user scrolls
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="bolum-felsefe"
      ref={sectionRef}
      aria-labelledby="group-intro-heading"
      className="section-padding relative bg-[#F3F0E8] text-[#45483F] border-b border-[#D8D3C7] overflow-hidden"
    >
      <div className="container-editorial relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Heading Column */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.22em] text-[#69715F]">
              Kurumsal Felsefe
            </p>
            <EditorialReveal>
              <h2
                id="group-intro-heading"
                className="font-display-editorial text-4xl sm:text-5xl text-[#45483F] leading-[1.08]"
              >
                Ortak Mühendislik ve Zanaat Kültürü.
              </h2>
            </EditorialReveal>
            <p className="text-sm text-[#69715F] leading-relaxed pt-1">
              Her iki uzmanlık alanında da temel ilkemiz; malzemenin doğasına
              saygı duyan, zamana direnen kalıcı değer üretmektir.
            </p>
          </div>

          {/* Center Scroll-Linked Architectural Spine (Desktop) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center self-stretch">
            <div className="relative h-full w-[1px] bg-[#D8D3C7]">
              <motion.div
                style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                className="absolute inset-0 w-full bg-[#45483F]"
              />
            </div>
          </div>

          {/* Right Narrative Column — Open Editorial Layout, Zero Box Clutter */}
          <div className="lg:col-span-7 space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-editorial text-2xl sm:text-3xl lg:text-4xl text-[#45483F] leading-[1.28]"
            >
              Genç Group; otomotiv yüzey restorasyonu ile çağdaş mimari yapı
              sektörlerini tek bir ilkeyle yönetir: milimetrik özen, doğru
              malzeme bilgisi ve şeffaf uygulama disiplini.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 pt-10 border-t border-[#D8D3C7]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.75, delay: 0.08 }}
                className="space-y-3"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#69715F] block">
                  01 · Otomotiv Disiplini
                </span>
                <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F]">
                  Yüzey ve Form Bütünlüğü
                </h3>
                <p className="text-sm text-[#69715F] leading-relaxed">
                  AutoClub Merter stüdyosunda uygulanan kaporta onarımı, oto
                  boya ve boyasız göçük düzeltme işlemleri; aracın fabrika çıkış
                  geometrisini ve optik yüzey berraklığını korumaya odaklanır.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.75, delay: 0.18 }}
                className="space-y-3 md:border-l md:border-[#D8D3C7] md:pl-10"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#69715F] block">
                  02 · Mimari & Yapı Disiplini
                </span>
                <h3 className="font-display-editorial text-2xl sm:text-3xl text-[#45483F]">
                  Yapısal Güç ve Zamansız Estetik
                </h3>
                <p className="text-sm text-[#69715F] leading-relaxed">
                  Genç Group İnşaat; doğal taş, brüt beton ve çağdaş cephe
                  sistemlerini mühendislik hassasiyetiyle birleştirerek nitelikli
                  yaşam ve çalışma alanları inşa eder.
                </p>
              </motion.div>
            </div>

            <div className="pt-2">
              <Link href="/about" className="link-editorial">
                <span>Kurumsal Yapıyı İnceleyin</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
