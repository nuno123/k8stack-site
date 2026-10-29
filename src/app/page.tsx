import React from "react";
import { StagingBanner } from "@/components/StagingBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ShowcaseFrame } from "@/components/InteractiveShowcase/ShowcaseFrame";
import { CloudEcosystem } from "@/components/CloudEcosystem";
import { BentoGrid } from "@/components/BentoGrid";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { DownloadMatrix } from "@/components/DownloadMatrix";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#090a0b] text-[#ededed]">
      {/* Privacy / Staging Shield Banner */}
      <StagingBanner />

      {/* Orca-Style Fixed Blur Navbar */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Desktop Cockpit App Window (Showcase) */}
        <ShowcaseFrame />

        {/* Bring your own clusters / AI runtimes */}
        <CloudEcosystem />

        {/* Sovereign, end to end. (12 Feature Grid) */}
        <BentoGrid />

        {/* Built for sovereignty, not retrofitted. (Comparison) */}
        <ArchitectureSection />

        {/* Built by engineers who operate Kubernetes (Testimonials) */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Get K8Stack (Download CTA & Binary Hub) */}
        <DownloadMatrix />
      </main>

      {/* Minimal SRE Footer */}
      <Footer />
    </div>
  );
}
