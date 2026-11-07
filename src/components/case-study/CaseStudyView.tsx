"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import {
  caseStudyModes,
  caseStudyTranslations,
  CASE_STUDY_IMAGES,
  type DesignMode,
  type Language,
} from "@/content/caseStudyData";
import { useLanguage } from "@/context/LanguageContext";
import "./CaseStudy.css";

const developerUrl = "https://www.hamedmohamed.dev";

export function CaseStudyView() {
  const { locale, isRtl } = useLanguage();
  const dir = isRtl ? "rtl" : "ltr";
  const language: Language = (locale as Language) || "tr";
  const [activeMode, setActiveMode] = useState<DesignMode>("massing");
  const [activeChoices, setActiveChoices] = useState<Record<DesignMode, number>>({
    massing: 0,
    materials: 0,
    atmosphere: 0,
  });

  const reduceMotion = useReducedMotion();
  const t = caseStudyTranslations[language] || caseStudyTranslations.tr;
  const currentChoice = activeChoices[activeMode] ?? 0;
  const activeConcept =
    t.lab.options[activeMode]?.[currentChoice] ||
    t.lab.options[activeMode]?.[0];
  const activeImage =
    CASE_STUDY_IMAGES.concepts[activeMode]?.[currentChoice] ||
    CASE_STUDY_IMAGES.concepts[activeMode]?.[0] ||
    CASE_STUDY_IMAGES.hero;

  const selectChoice = (choice: number) => {
    setActiveChoices((current) => ({ ...current, [activeMode]: choice }));
  };

  return (
    <article className="case-study" lang={language} dir={dir}>
      {/* Hero Opening Frame */}
      <section className="hero" id="top" aria-labelledby="hero-title">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__image"
          src={CASE_STUDY_IMAGES.hero}
          alt={t.imageAlt.hero}
          fetchPriority="high"
        />
        <div className="hero__veil" aria-hidden="true" />

        {/* In-page Anchor Subnav */}
        <nav className="case-subnav" aria-label={t.nav.label}>
          <a href="#yaklasim">
            <span>01</span> {t.nav.approach}
          </a>
          <a href="#kesfet">
            <span>02</span> {t.nav.explore}
          </a>
          <a href="#surec">
            <span>03</span> {t.nav.process}
          </a>
        </nav>

        <div className="hero__index" aria-hidden="true">
          <span>01</span>
          <i />
          <span>03</span>
        </div>

        <div className="hero__content">
          <motion.p
            className="eyebrow eyebrow--light"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            GENÇ GROUP İNŞAAT <span>·</span> {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22 }}
          >
            {t.hero.title}
            <em> {t.hero.italic}</em>
          </motion.h1>

          <motion.div
            className="hero__bottom"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42 }}
          >
            <p>{t.hero.description}</p>
            <div className="hero__actions">
              <a className="button button--light" href="#kesfet">
                <span>{t.hero.explore}</span> <ArrowDownRight size={16} />
              </a>
              <a
                className="hero__text-link"
                href={developerUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t.hero.contact}</span> <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero__caption">
          <span>{t.hero.city}</span>
          <span>
            {t.hero.visual} <i /> 2026
          </span>
        </div>

        <a className="scroll-cue" href="#yaklasim" aria-label={t.hero.scroll}>
          <span>{t.hero.scroll}</span>
          <span className="scroll-cue__circle">
            <ArrowDown size={15} />
          </span>
        </a>
      </section>

      {/* Project Dossier Meta Strip */}
      <section className="project-strip" aria-label={t.project.aria}>
        <div className="project-strip__intro">
          <span className="eyebrow">
            {t.project.dossier} <b>01 / 03</b>
          </span>
          <p>{t.project.title}</p>
        </div>
        <div className="project-strip__item">
          <span>{t.project.workType}</span>
          <strong>{t.project.workValue}</strong>
        </div>
        <div className="project-strip__item">
          <span>{t.project.category}</span>
          <strong>{t.project.categoryValue}</strong>
        </div>
        <div className="project-strip__item">
          <span>{t.project.language}</span>
          <strong>{t.project.languageValue}</strong>
        </div>
        <div className="project-strip__stamp" aria-hidden="true">
          GG<span>—</span>01
        </div>
      </section>

      {/* Approach Section */}
      <section
        className="approach section-pad"
        id="yaklasim"
        aria-labelledby="approach-title"
      >
        <div className="section-kicker">
          <span>
            01 <i /> {t.approach.eyebrow}
          </span>
          <span>{t.approach.keywords}</span>
        </div>
        <div className="approach__grid">
          <h2 id="approach-title">
            {t.approach.titleBefore}
            <br />
            <em>{t.approach.titleEmphasis}</em> {t.approach.titleAfter}
          </h2>
          <div className="approach__copy">
            <p className="approach__lead">{t.approach.lead}</p>
            <p>{t.approach.description}</p>
            <a className="underlined-link" href="#kesfet">
              <span>{t.approach.explore}</span> <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
        <div className="approach__note">
          <span className="approach__note-mark" aria-hidden="true">
            <Check size={15} />
          </span>
          <p>
            {t.approach.note} <strong>{t.approach.noteEmphasis}</strong>{" "}
            {t.approach.noteEnd}
          </p>
        </div>
      </section>

      {/* Interactive 3D / AI Concept Workbench */}
      <section className="lab" id="kesfet" aria-labelledby="lab-title">
        <div className="lab__topline">
          <span className="eyebrow eyebrow--light">{t.lab.eyebrow}</span>
          <span className="lab__topline-index">{t.lab.index}</span>
        </div>
        <div className="lab__heading">
          <div>
            <p className="eyebrow eyebrow--light">{t.lab.kicker}</p>
            <h2 id="lab-title">
              {t.lab.titleStart} <em>{t.lab.titleEmphasis}</em>
            </h2>
          </div>
          <p className="lab__intro">{t.lab.description}</p>
        </div>

        <div className="concept-workbench">
          <div className="concept-workbench__controls">
            <div
              className="mode-switch"
              role="group"
              aria-label={t.lab.modeGroup}
            >
              {caseStudyModes.map((mode) => (
                <button
                  key={mode.id}
                  className={`mode-switch__tab ${activeMode === mode.id ? "is-active" : ""}`}
                  type="button"
                  aria-pressed={activeMode === mode.id}
                  onClick={() => setActiveMode(mode.id)}
                >
                  <span>{mode.number}</span>
                  {t.lab.modes[mode.id]}
                  <ArrowUpRight size={13} />
                </button>
              ))}
            </div>

            <div
              className="option-list"
              role="group"
              aria-label={`${t.lab.modes[activeMode]} ${t.lab.optionGroup}`}
            >
              {t.lab.options[activeMode]?.map((option, index) => (
                <button
                  className={`option-card ${currentChoice === index ? "is-selected" : ""}`}
                  key={`${activeMode}-${option.title}`}
                  type="button"
                  aria-pressed={currentChoice === index}
                  onClick={() => selectChoice(index)}
                >
                  <span className="option-card__number">0{index + 1}</span>
                  <span className="option-card__text">
                    <strong>{option.title}</strong>
                    <small>{option.subtitle}</small>
                  </span>
                  <span className="option-card__indicator" aria-hidden="true">
                    {currentChoice === index ? (
                      <Check size={14} />
                    ) : (
                      <ArrowRight size={14} className="rtl:rotate-180" />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <div className="lab__disclaimer">
              <span className="lab__disclaimer-dot" />
              <p>
                {t.lab.disclaimer}
                <br />
                <small>{t.lab.disclaimerSmall}</small>
              </p>
            </div>
          </div>

          <div
            className="concept-viewer"
            id="concept-panel"
            aria-live="polite"
            aria-label={t.lab.viewerLabel}
          >
            <div className="concept-viewer__image-wrap">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  className="concept-viewer__image"
                  src={activeImage}
                  alt={t.imageAlt.concept(activeConcept?.title || "")}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.99 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    ease: "easeOut",
                  }}
                />
              </AnimatePresence>
              <div className="concept-viewer__veil" aria-hidden="true" />
              <div className="concept-viewer__meta">
                <span>
                  <i /> {t.lab.viewerLive}
                </span>
                <span>3D / AI</span>
              </div>
              <div className="concept-viewer__crosshair" aria-hidden="true">
                <span />
                <i />
              </div>
              <div className="concept-viewer__caption">
                <span>{activeConcept?.badge}</span>
                <h3>{activeConcept?.title}</h3>
                <p>{activeConcept?.subtitle}</p>
              </div>
              <div className="concept-viewer__coordinates" aria-hidden="true">
                {t.lab.city} <i /> {t.lab.concept}
              </div>
              <div className="concept-viewer__counter" aria-hidden="true">
                0{currentChoice + 1}
                <span> / 02</span>
              </div>
            </div>
            <div className="concept-viewer__footer">
              <span>
                {t.lab.study} <i /> {t.lab.notForConstruction}
              </span>
              <span>
                GENÇ GROUP İNŞAAT <b>·</b> 2026
              </span>
            </div>
          </div>
        </div>

        <div className="lab__bottomline">
          <span>{t.lab.exploreDesign}</span>
          <span>
            {t.lab.stage} <i />
          </span>
        </div>
      </section>

      {/* Material Story Interlude */}
      <section
        className="material-story section-pad"
        aria-labelledby="material-title"
      >
        <div className="material-story__image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CASE_STUDY_IMAGES.materialStory}
            alt={t.imageAlt.material}
            loading="lazy"
          />
          <span className="material-story__image-label">
            {t.materials.imageLabel} <i /> 02 / 04
          </span>
        </div>
        <div className="material-story__copy">
          <p className="eyebrow">
            02 <i /> {t.materials.eyebrow}
          </p>
          <h2 id="material-title">
            {t.materials.titleStart}
            <br />
            <em>{t.materials.titleEmphasis}</em>
          </h2>
          <p>{t.materials.description}</p>
          <div
            className="material-tags"
            role="group"
            aria-label={t.materials.eyebrow}
          >
            <span>
              <i className="swatch swatch--stone" /> {t.materials.stone}
            </span>
            <span>
              <i className="swatch swatch--concrete" /> {t.materials.concrete}
            </span>
            <span>
              <i className="swatch swatch--glass" /> {t.materials.glass}
            </span>
          </div>
          <a className="underlined-link" href="#kesfet">
            <span>{t.materials.compare}</span> <ArrowDownRight size={16} />
          </a>
        </div>
      </section>

      {/* Design Process Stages */}
      <section
        className="process section-pad"
        id="surec"
        aria-labelledby="process-title"
      >
        <div className="section-kicker">
          <span>
            03 <i /> {t.process.eyebrow}
          </span>
          <span>{t.process.descriptor}</span>
        </div>
        <div className="process__heading">
          <h2 id="process-title">
            {t.process.titleStart}
            <br />
            <em>{t.process.titleEmphasis}</em>
          </h2>
          <p>{t.process.description}</p>
        </div>
        <div className="process-rail">
          {t.process.stages.map((stage, index) => (
            <article className="process-step" key={stage.title}>
              <div className="process-step__top">
                <span>0{index + 1}</span>
                <i
                  className={
                    index === t.process.stages.length - 1
                      ? "process-step__end"
                      : ""
                  }
                />
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
        <p className="process__footnote">
          <span>{t.process.footnoteLabel}</span>
          {t.process.footnote}
        </p>
      </section>

      {/* Closing Call to Action Frame */}
      <section className="closing" aria-labelledby="closing-title">
        <div className="closing__image" aria-hidden="true" />
        <div className="closing__veil" aria-hidden="true" />
        <div className="closing__content">
          <p className="eyebrow eyebrow--light">
            GENÇ GROUP İNŞAAT <i /> {t.closing.eyebrow}
          </p>
          <h2 id="closing-title">
            {t.closing.line1}
            <br />
            {t.closing.line2} <em>{t.closing.italic}</em>
            <br />
            {t.closing.line3}
          </h2>
          <a
            className="button button--light"
            href={developerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t.closing.contact}</span> <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="closing__side-note">{t.closing.sideNote}</div>
      </section>
    </article>
  );
}
