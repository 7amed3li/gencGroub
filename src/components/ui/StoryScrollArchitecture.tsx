"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Fixed Top Progress Hairline + Side Interactive Story Chapter Spine
 */
export function StoryProgressSpine() {
  const { t, isRtl } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeChapter, setActiveChapter] = useState(0);
  const chapters = t.storyChapters;

  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.scrollY + window.innerHeight * 0.42;
      let currentIdx = 0;

      chapters.forEach((chapter, idx) => {
        const el = document.getElementById(chapter.id);
        if (el) {
          const top = el.offsetTop;
          if (viewportMiddle >= top) {
            currentIdx = idx;
          }
        }
      });

      setActiveChapter(currentIdx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters]);

  return (
    <>
      {/* Top Architectural Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] h-[2px] bg-[#A5AA98]",
          isRtl ? "origin-right" : "origin-left"
        )}
        aria-hidden="true"
      />

      {/* Side Editorial Chapter Navigator (Desktop) */}
      <aside
        aria-label="Story Navigation"
        className={cn(
          "fixed top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3 pointer-events-auto",
          isRtl ? "left-6 items-start" : "right-6 items-end"
        )}
      >
        {chapters.map((chapter, idx) => {
          const isActive = activeChapter === idx;
          return (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              aria-label={`${chapter.roman}: ${chapter.label}`}
              className="group flex items-center gap-3 py-1 focus:outline-none"
            >
              <span
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] transition-all duration-500 px-2 py-0.5",
                  isActive
                    ? "opacity-100 translate-x-0 bg-[#45483F] text-[#F3F0E8]"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-[#F3F0E8]/90 text-[#45483F]"
                )}
              >
                {chapter.roman} — {chapter.label}
              </span>
              <span
                className={cn(
                  "block h-[1px] transition-all duration-500",
                  isActive
                    ? "w-8 bg-[#69715F]"
                    : "w-3 bg-[#A5AA98]/70 group-hover:w-6 group-hover:bg-[#45483F]"
                )}
              />
            </a>
          );
        })}
      </aside>
    </>
  );
}

/**
 * Curtain Mask + Internal Scroll Parallax Window for Architectural & Automotive Photography
 */
interface ParallaxImageWindowProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallaxStrength?: number;
}

export function ParallaxImageWindow({
  src,
  alt,
  aspectClassName = "aspect-[16/10]",
  className,
  sizes = "(max-width: 1024px) 100vw, 60vw",
  priority = false,
  parallaxStrength = 10,
}: ParallaxImageWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-12% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallaxStrength}%`, `${parallaxStrength}%`]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.06, 1.14]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden bg-[#D8D3C7]",
        aspectClassName,
        className
      )}
    >
      {/* Stone Curtain Wipe Overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="pointer-events-none absolute inset-0 z-20 bg-[#D8D3C7]"
      />

      <motion.div style={{ y, scale }} className="absolute inset-0 h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          sizes={sizes}
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
}

/**
 * Masked Line/Block Editorial Reveal with Smooth Luxury Easing
 */
interface EditorialRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function EditorialReveal({
  children,
  delay = 0,
  className,
}: EditorialRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "105%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "105%", opacity: 0 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
