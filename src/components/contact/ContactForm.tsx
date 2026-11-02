"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  SuccessCircleIcon,
  LoaderIcon,
  SendIcon,
} from "@/components/ui/Icons";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Lütfen adınızı ve soyadınızı giriniz (en az 2 karakter)."),
  phone: z
    .string()
    .min(10, "Lütfen geçerli bir telefon numarası giriniz."),
  email: z
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .optional()
    .or(z.literal("")),
  division: z.enum(["automotive", "construction"], {
    required_error: "Lütfen ilgili bölümü seçiniz.",
  }),
  subject: z.string().min(2, "Lütfen konu veya hizmet seçiniz."),
  message: z
    .string()
    .min(10, "Lütfen talebinizi kısaca açıklayınız (en az 10 karakter)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultDivision?: "automotive" | "construction";
  defaultService?: string;
}

export function ContactForm({
  defaultDivision = "automotive",
  defaultService = "",
}: ContactFormProps) {
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(
    null
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      division: defaultDivision,
      subject:
        defaultService === "kaporta-onarimi"
          ? "Kaporta Onarımı"
          : defaultService === "oto-boya"
            ? "Oto Boya & Yüzey Koruma"
            : defaultService === "boyasiz-gocuk-duzeltme"
              ? "Boyasız Göçük Düzeltme"
              : "",
      message: "",
    },
  });

  const selectedDivision = watch("division");

  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmittedData(values);
  };

  if (submittedData) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-[#A5AA98] bg-[#E8E4DA] p-8 sm:p-12 space-y-6 text-[#45483F]"
      >
        <div className="flex items-center gap-3 text-[#69715F]">
          <SuccessCircleIcon className="h-6 w-6 text-[#45483F]" />
          <span className="text-xs uppercase tracking-[0.18em]">
            Talebiniz Alındı
          </span>
        </div>

        <h3 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
          Teşekkür Ederiz, {submittedData.fullName}.
        </h3>

        <p className="text-sm text-[#69715F] leading-relaxed">
          <strong className="text-[#45483F] font-medium">
            {submittedData.division === "automotive"
              ? "AutoClub Merter"
              : "Genç Group İnşaat"}
          </strong>{" "}
          bölümüne yönelik{" "}
          <strong className="text-[#45483F] font-medium">
            {submittedData.subject}
          </strong>{" "}
          konulu mesajınız kaydedilmiştir. Ekibimiz en kısa sürede sizinle
          iletişime geçecektir.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmittedData(null);
            reset();
          }}
          className="btn-stone-outline"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-[#D8D3C7] bg-[#E8E4DA] p-8 sm:p-12 space-y-6 text-[#45483F]"
    >
      <div className="border-b border-[#D8D3C7] pb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-[#69715F] mb-1">
          İletişim & Randevu Formu
        </p>
        <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
          Bölüm Seçerek Bize Yazın
        </h2>
      </div>

      {/* Division Selector Radio Cards */}
      <fieldset className="space-y-2">
        <legend className="text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2">
          İlgili Bölüm Seçimi *
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label
            className={`cursor-pointer border p-5 transition-colors ${
              selectedDivision === "automotive"
                ? "border-[#45483F] bg-[#F3F0E8]"
                : "border-[#D8D3C7] bg-[#F3F0E8]/50 hover:border-[#A5AA98]"
            }`}
          >
            <input
              type="radio"
              value="automotive"
              {...register("division")}
              className="sr-only"
            />
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#69715F] block">
              Otomotiv Atölyesi
            </span>
            <span className="font-display-editorial text-2xl text-[#45483F] block mt-1">
              AutoClub Merter
            </span>
            <span className="text-xs text-[#69715F] block mt-0.5">
              Kaporta, Oto Boya, PPF & Göçük
            </span>
          </label>

          <label
            className={`cursor-pointer border p-5 transition-colors ${
              selectedDivision === "construction"
                ? "border-[#45483F] bg-[#F3F0E8]"
                : "border-[#D8D3C7] bg-[#F3F0E8]/50 hover:border-[#A5AA98]"
            }`}
          >
            <input
              type="radio"
              value="construction"
              {...register("division")}
              className="sr-only"
            />
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#69715F] block">
              Mimari & Yapı
            </span>
            <span className="font-display-editorial text-2xl text-[#45483F] block mt-1">
              Genç Group İnşaat
            </span>
            <span className="text-xs text-[#69715F] block mt-0.5">
              Yapı, Proje & Kurumsal Talepler
            </span>
          </label>
        </div>
        {errors.division && (
          <p className="text-xs text-red-700 mt-1" role="alert">
            {errors.division.message}
          </p>
        )}
      </fieldset>

      {/* Full Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            Ad Soyad *
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Adınız Soyadınız"
            {...register("fullName")}
            className="w-full border border-[#D8D3C7] bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-xs text-red-700 mt-1.5" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            Telefon Numarası *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            {...register("phone")}
            className="w-full border border-[#D8D3C7] bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none"
          />
          {errors.phone && (
            <p className="text-xs text-red-700 mt-1.5" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email & Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            E-Posta Adresi
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ornek@eposta.com"
            {...register("email")}
            className="w-full border border-[#D8D3C7] bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-700 mt-1.5" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            Hizmet / Konu *
          </label>
          <input
            id="subject"
            type="text"
            placeholder={
              selectedDivision === "automotive"
                ? "Örn: Kaporta Onarımı / Oto Boya / PPF"
                : "Örn: Proje Danışmanlığı / Yapı Talebi"
            }
            {...register("subject")}
            className="w-full border border-[#D8D3C7] bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none"
          />
          {errors.subject && (
            <p className="text-xs text-red-700 mt-1.5" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
        >
          Mesajınız *
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Talebinizle ilgili detayları buraya yazabilirsiniz..."
          {...register("message")}
          className="w-full border border-[#D8D3C7] bg-[#F3F0E8] p-4 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none"
        />
        {errors.message && (
          <p className="text-xs text-red-700 mt-1.5" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-olive-primary w-full sm:w-auto justify-center disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <LoaderIcon className="h-4 w-4 animate-spin" />
            <span>Gönderiliyor...</span>
          </>
        ) : (
          <>
            <span>Talebi İlet</span>
            <SendIcon className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
