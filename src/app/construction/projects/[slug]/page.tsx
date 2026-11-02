import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { constructMetadata } from "@/lib/seo";
import { CONSTRUCTION_PROJECT_STUDIES } from "@/content/siteData";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONSTRUCTION_PROJECT_STUDIES.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CONSTRUCTION_PROJECT_STUDIES.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({
      title: "Proje Bulunamadı",
      description: "Aradığınız proje bulunamadı.",
      path: "/construction/projects",
    });
  }

  return constructMetadata({
    title: `${project.title} — Genç Group İnşaat`,
    description: project.editorialSummary,
    path: `/construction/projects/${project.slug}`,
    ogImage: project.heroImage,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = CONSTRUCTION_PROJECT_STUDIES.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-[#F3F0E8] text-[#45483F] min-h-screen pt-28">
      <header className="py-14 lg:py-20 border-b border-[#D8D3C7] bg-[#E8E4DA]">
        <div className="container-editorial">
          <Link
            href="/construction/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#69715F] hover:text-[#45483F] mb-8"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Tüm Projeler</span>
          </Link>

          <p className="text-xs uppercase tracking-[0.18em] text-[#69715F] mb-3">
            {project.category}
          </p>

          <h1 className="font-display-editorial text-4xl sm:text-6xl text-[#45483F] max-w-4xl">
            {project.title}
          </h1>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#D8D3C7] pt-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                Kategori
              </dt>
              <dd className="text-sm font-medium text-[#45483F] mt-1">
                {project.category}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                Konum
              </dt>
              <dd className="text-sm font-medium text-[#45483F] mt-1">
                {project.location}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[#69715F]">
                Kapsam
              </dt>
              <dd className="text-sm font-medium text-[#45483F] mt-1">
                {project.area}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="py-12 bg-[#F3F0E8]">
        <div className="container-editorial">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#D8D3C7]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F3F0E8] border-b border-[#D8D3C7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
                Mimari Yaklaşım
              </h2>
              <p className="text-base sm:text-lg text-[#45483F]/85 leading-relaxed">
                {project.editorialSummary}
              </p>
              <p className="text-sm sm:text-base text-[#69715F] leading-relaxed">
                {project.architecturalBrief}
              </p>
            </div>

            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#D8D3C7] pt-8 lg:pt-0 lg:pl-10 space-y-5">
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-[#69715F]">
                Teknik Özellikler ve İlkeler
              </h3>
              <ul className="space-y-3 text-sm text-[#45483F]">
                {project.specifications.map((spec) => (
                  <li key={spec} className="flex items-start gap-3">
                    <CheckIcon className="h-4 w-4 shrink-0 mt-1 text-[#69715F]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-[#D8D3C7]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((img, i) => (
                <div
                  key={`${img}-${i}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#D8D3C7]"
                >
                  <Image
                    src={img}
                    alt={`${project.title} — Görsel ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E8E4DA]">
        <div className="container-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
              Yapı Projeleriniz İçin Bizimle İletişime Geçin
            </h2>
          </div>
          <Link
            href="/contact?division=construction"
            className="btn-olive-primary"
          >
            <span>İletişime Geçin</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
