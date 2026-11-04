"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { ArchitecturalCornerTicks } from "@/components/ui/StoryScrollArchitecture";
import type { AutomotiveService } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface ServiceEditorialBlockProps {
  service: AutomotiveService;
  reversed?: boolean;
}

export function ServiceEditorialBlock({
  service,
  reversed = false,
}: ServiceEditorialBlockProps) {
  const { t } = useLanguage();

  return (
    <article
      id={service.slug}
      className="group scroll-mt-28 py-16 lg:py-24 border-b border-[#D8D3C7] last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div
          className={cn(
            "lg:col-span-7",
            reversed ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div className="luxury-image-frame is-revealed relative aspect-[16/11] w-full overflow-hidden bg-[#D8D3C7]">
            <ArchitecturalCornerTicks light />
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div
          className={cn(
            "lg:col-span-5 space-y-6",
            reversed ? "lg:order-1" : "lg:order-2"
          )}
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-[#69715F]">
              {service.index} · {service.titleEn}
            </p>
            <h2 className="font-display-editorial text-4xl sm:text-5xl text-[#45483F]">
              {service.title}
            </h2>
            <p className="text-sm text-[#69715F] pt-1">{service.subtitle}</p>
          </div>

          <p className="text-base text-[#45483F]/85 font-light leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-2.5 pt-2 border-t border-[#D8D3C7]">
            {service.technicalApproach.map((step) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm text-[#69715F]"
              >
                <CheckIcon className="h-4 w-4 text-[#45483F] shrink-0 mt-1" />
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Link
              href={`/contact?division=automotive&service=${service.slug}`}
              className="link-editorial"
            >
              <span>{t.automotivePage.bookServiceCta}</span>
              <ArrowRightIcon className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
