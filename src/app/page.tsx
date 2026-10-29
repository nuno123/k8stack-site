import React from "react";
import { StagingBanner } from "@/components/StagingBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CloudEcosystem } from "@/components/CloudEcosystem";
import { ShowcaseFrame } from "@/components/InteractiveShowcase/ShowcaseFrame";
import { BentoGrid } from "@/components/BentoGrid";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Testimonials } from "@/components/Testimonials";
import { DownloadMatrix } from "@/components/DownloadMatrix";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#08090a] text-[#ededed]">
      {/* Privacy / Staging Banner for Opção 2 - Validação Segura */}
      <StagingBanner />

      {/* Glassmorphic Navigation Header */}
      <Header />

      <main>
        {/* Hero Section with Dynamic OS Detection and CLI 1-click install */}
        <Hero />

        {/* Multi-Cloud Compatibility Strip */}
        <CloudEcosystem />

        {/* Interactive Desktop Showcase (macOS traffic lights, 4 rich tabs) */}
        <ShowcaseFrame />

        {/* Bento Grid: 5 Core Architectural Pillars */}
        <BentoGrid />

        {/* Sovereign Architecture & Comparison Table */}
        <ArchitectureSection />

        {/* Community Wall of SRE */}
        <Testimonials />

        {/* Download Matrix & Package Managers */}
        <DownloadMatrix />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
