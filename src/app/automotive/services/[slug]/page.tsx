import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
} from "@/components/ui/Icons";
import { BRAND_INFO } from "@/content/siteData";
import {
  AUTOMOTIVE_SERVICE_PAGES,
  getAutomotiveServicePage,
} from "@/content/automotiveServicePages";
import {
  constructMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { MarketingLocationMap } from "@/components/ui/MarketingLocationMap";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return AUTOMOTIVE_SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAutomotiveServicePage(slug);
  if (!page) return {};
  return constructMetadata({
    title: page.seoTitle,
    description: page.metaDescription,
    path: `/automotive/services/${page.slug}`,
    ogImage: page.image,
  });
}

export default async function AutomotiveServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getAutomotiveServicePage(slug);
  if (!page) notFound();

  const auto = BRAND_INFO.automotiveDivision;
  const path = `/automotive/services/${page.slug}`;
  const related = page.related
    .map((s) => getAutomotiveServicePage(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const contactHref = `/contact?division=automotive&service=${page.slug}`;

  return (
    <div className="bg-[#F3F0E8] text-[#45483F] pt-28">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "AutoClub Merter", path: "/automotive" },
            { name: "Hizmetler", path: "/automotive/services" },
            { name: page.name, path },
          ]),
          getServiceSchema({
            name: page.name,
            serviceType: page.serviceType,
            description: page.metaDescription,
            path,
          }),
          getFaqSchema(page.faqs),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial py-12 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-[#69715F]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-[#45483F]">Ana Sayfa</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/automotive" className="hover:text-[#45483F]">AutoClub Merter</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/automotive/services" className="hover:text-[#45483F]">Hizmetler</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#45483F]">{page.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-display-editorial text-4xl sm:text-5xl lg:text-6xl text-[#45483F] leading-[1.08]">
                {page.h1}
              </h1>
              <p className="text-base sm:text-lg text-[#45483F]/85 font-light leading-relaxed">
                {page.lead}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={auto.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-olive-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp ile Bilgi Al</span>
                </a>
                <a href={auto.phoneHref} className="btn-stone-outline" dir="ltr">
                  <PhoneIcon className="h-4 w-4" />
                  <span>{auto.phoneDisplay}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#D8D3C7]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <h2 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl mb-10">
            {page.name} Hizmetimiz Neleri Kapsar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[#D8D3C7] pt-10">
            {page.whatWeDo.map((b) => (
              <div key={b.heading} className="space-y-3">
                <h3 className="font-display-editorial text-2xl">{b.heading}</h3>
                <p className="text-sm text-[#69715F] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable for + options */}
      <section className="section-padding border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-display-editorial text-3xl sm:text-4xl mb-6">Kimler İçin Uygun?</h2>
            <ul className="space-y-3">
              {page.suitableFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#45483F]/85">
                  <CheckIcon className="h-4 w-4 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display-editorial text-3xl sm:text-4xl mb-6">{page.options.heading}</h2>
            <ul className="space-y-3">
              {page.options.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#45483F]/85">
                  <CheckIcon className="h-4 w-4 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <h2 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl mb-10">
            Süreç Nasıl İşler?
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {page.steps.map((s, i) => (
              <li key={s.title} className="border-t border-[#45483F] pt-5 space-y-2">
                <span className="text-xs tracking-[0.18em] text-[#69715F]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display-editorial text-xl">{s.title}</h3>
                <p className="text-sm text-[#69715F] leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial max-w-4xl">
          <h2 className="font-display-editorial text-3xl sm:text-4xl lg:text-5xl mb-10">
            Sık Sorulan Sorular
          </h2>
          <div className="divide-y divide-[#D8D3C7] border-y border-[#D8D3C7]">
            {page.faqs.map((f) => (
              <details key={f.q} className="group py-5" open>
                <summary className="cursor-pointer list-none font-medium text-lg flex justify-between gap-4">
                  <h3>{f.q}</h3>
                  <span aria-hidden="true" className="text-[#69715F] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-[#69715F] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Marketing Atelier Location & Map */}
      <MarketingLocationMap division="automotive" />

      {/* Related services */}
      <section className="section-padding">
        <div className="container-editorial">
          <h2 className="font-display-editorial text-3xl sm:text-4xl mb-8">İlgili Hizmetler</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/automotive/services/${r.slug}`}
                  className="group flex items-center justify-between border border-[#D8D3C7] p-6 hover:border-[#45483F] transition-colors"
                >
                  <span className="font-display-editorial text-2xl">{r.name}</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/automotive/services"
                className="group flex items-center justify-between border border-[#D8D3C7] p-6 hover:border-[#45483F] transition-colors"
              >
                <span className="font-display-editorial text-2xl">Tüm Otomotiv Hizmetleri</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

