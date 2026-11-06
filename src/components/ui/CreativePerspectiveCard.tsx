"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CreativePerspectiveCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
}

export function CreativePerspectiveCard({
  children,
  className = "",
  tiltIntensity = 6,
}: CreativePerspectiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltIntensity, tiltIntensity]);

  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full w-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative h-full w-full transition-shadow duration-300 ${className}`}
      >
        {children}

        {/* Ambient Specular Sheen (Only active on hover for organic luxury lighting) */}
        <motion.div
          aria-hidden="true"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.09) 0%, transparent 60%)`
            ),
          }}
          className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300 hover:opacity-100"
        />
      </motion.div>
    </motion.div>
  );
}

