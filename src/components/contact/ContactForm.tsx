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
import { useLanguage } from "@/context/LanguageContext";

const contactSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal("")),
  division: z.enum(["automotive", "construction"]),
  subject: z.string().min(2),
  message: z.string().min(6),
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
  const { t } = useLanguage();
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
            {t.contactPage.successBadge}
          </span>
        </div>

        <h3 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
          {t.contactPage.successThankYou}, {submittedData.fullName}.
        </h3>

        <p className="text-sm text-[#69715F] leading-relaxed">
          <strong className="text-[#45483F] font-medium">
            {submittedData.division === "automotive"
              ? "AutoClub Merter"
              : "Genç Group İnşaat"}
          </strong>{" "}
          — {t.contactPage.successBody}
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmittedData(null);
            reset();
          }}
          className="btn-stone-outline"
        >
          {t.contactPage.sendAnotherBtn}
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
          {t.contactPage.formOverline}
        </p>
        <h2 className="font-display-editorial text-3xl sm:text-4xl text-[#45483F]">
          {t.contactPage.formTitle}
        </h2>
      </div>

      {/* Division Selector Radio Cards */}
      <fieldset className="space-y-2">
        <legend className="text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2">
          {t.contactPage.divisionLegend}
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
              {t.contactPage.autoCardOverline}
            </span>
            <span className="font-display-editorial text-2xl text-[#45483F] block mt-1">
              AutoClub Merter
            </span>
            <span className="text-xs text-[#69715F] block mt-0.5">
              {t.contactPage.autoCardSub}
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
              {t.contactPage.consCardOverline}
            </span>
            <span className="font-display-editorial text-2xl text-[#45483F] block mt-1">
              Genç Group İnşaat
            </span>
            <span className="text-xs text-[#69715F] block mt-0.5">
              {t.contactPage.consCardSub}
            </span>
          </label>
        </div>
      </fieldset>

      {/* Full Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            {t.contactPage.fullNameLabel}
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder={t.contactPage.fullNamePlaceholder}
            {...register("fullName")}
            className={`w-full border bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none ${
              errors.fullName ? "border-red-600" : "border-[#D8D3C7]"
            }`}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            {t.contactPage.phoneLabel}
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder={t.contactPage.phonePlaceholder}
            {...register("phone")}
            className={`w-full border bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none ${
              errors.phone ? "border-red-600" : "border-[#D8D3C7]"
            }`}
          />
        </div>
      </div>

      {/* Email & Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            {t.contactPage.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            dir="ltr"
            placeholder={t.contactPage.emailPlaceholder}
            {...register("email")}
            className="w-full border border-[#D8D3C7] bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
          >
            {t.contactPage.subjectLabel}
          </label>
          <input
            id="subject"
            type="text"
            placeholder={
              selectedDivision === "automotive"
                ? t.contactPage.subjectAutoPlaceholder
                : t.contactPage.subjectConsPlaceholder
            }
            {...register("subject")}
            className={`w-full border bg-[#F3F0E8] px-4 py-3 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none ${
              errors.subject ? "border-red-600" : "border-[#D8D3C7]"
            }`}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.16em] text-[#69715F] mb-2"
        >
          {t.contactPage.messageLabel}
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder={t.contactPage.messagePlaceholder}
          {...register("message")}
          className={`w-full border bg-[#F3F0E8] p-4 text-sm text-[#45483F] placeholder:text-[#A5AA98] focus:border-[#45483F] focus:outline-none ${
            errors.message ? "border-red-600" : "border-[#D8D3C7]"
          }`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-olive-primary w-full sm:w-auto justify-center disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <LoaderIcon className="h-4 w-4 animate-spin" />
            <span>{t.contactPage.submittingBtn}</span>
          </>
        ) : (
          <>
            <span>{t.contactPage.submitBtn}</span>
            <SendIcon className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
