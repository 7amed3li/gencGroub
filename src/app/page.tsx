import React from "react";
import { StoryProgressSpine } from "@/components/ui/StoryScrollArchitecture";
import { LuxuryMarqueeStrip } from "@/components/ui/LuxuryMarqueeStrip";
import { HeroSection } from "@/components/sections/HeroSection";
import { SplitBusinessSection } from "@/components/sections/SplitBusinessSection";
import { AutomotiveAssemblyStory } from "@/components/sections/AutomotiveAssemblyStory";
import { ConstructionAssemblyStory } from "@/components/sections/ConstructionAssemblyStory";
import { PrecisionMetricsStrip } from "@/components/sections/PrecisionMetricsStrip";
import { GroupIntroSection } from "@/components/sections/GroupIntroSection";
import { DivisionsShowcase } from "@/components/sections/DivisionsShowcase";
import { SelectedWorksSection } from "@/components/sections/SelectedWorksSection";
import { BrandStatementSection } from "@/components/sections/BrandStatementSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <>
      {/* Continuous Narrative Progress Spine & Scroll Bar */}
      <StoryProgressSpine />

      {/* Chapter I: Origin & Vision — Cinematic Multi-Depth Parallax Hero */}
      <HeroSection />

      {/* Quiet Luxury Signature Marquee Ribbon */}
      <LuxuryMarqueeStrip variant="stone" />

      {/* Chapter II: Dual Worlds — Interactive Split-Screen Selection */}
      <SplitBusinessSection />

      {/* Chapter III: Step-by-Step Automotive Assembly (Exploded View -> Completed Car) */}
      <AutomotiveAssemblyStory />

      {/* Chapter IV: Brick-by-Brick & Wall-by-Wall Building Assembly (Foundation -> 4 Walls -> Roof & Glass) */}
      <ConstructionAssemblyStory />

      {/* Precision Engineering & Atelier Standards Strip */}
      <PrecisionMetricsStrip />

      {/* Chapter V: Philosophy — Scroll-Linked Central Spine & Narrative */}
      <GroupIntroSection />

      {/* Chapter VI: Craft in Action — Curtain Parallax Division Showcases */}
      <DivisionsShowcase />

      {/* Chapter VII: Selected Works — Staggered Portfolio & Architectural Studies */}
      <SelectedWorksSection />

      {/* Chapter VIII: Manifesto — Kinetic Scroll Typography & Quote Reveal */}
      <BrandStatementSection />

      {/* Chapter IX: Direct Consultation — Architectural Portal Finale */}
      <ContactCTASection />
    </>
  );
}
