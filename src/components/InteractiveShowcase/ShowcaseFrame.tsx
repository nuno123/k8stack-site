"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Network,
  Activity,
  ShieldAlert,
  Layers,
  Sparkles,
  Maximize2,
  X,
  Eye,
  Monitor,
} from "lucide-react";
import { K8StackLogo } from "@/components/brand/K8StackLogo";
import { TopologyScreen } from "./TopologyScreen";
import { ClusterOverviewScreen } from "./ClusterOverviewScreen";
import { SecurityCenterScreen } from "./SecurityCenterScreen";
import { WorkloadOverviewScreen } from "./WorkloadOverviewScreen";

interface ShowcaseView {
  id: string;
  name: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  screenshotUrl: string;
  alt: string;
  title: string;
  description: string;
}

export function ShowcaseFrame() {
  const views: ShowcaseView[] = [
    {
      id: "topology",
      name: "Topology Visualizer",
      icon: Network,
      screenshotUrl: "/images/app/topology-view@2x.webp",
      alt: "K8Stack Topology Visualizer",
      title: "Real-Time Workload Topology Graph",
      description:
        "Trace relational dependencies between Ingress, Services, StatefulSets, Pods, and host Nodes with live health status overlays and micro-inspectors.",
    },
    {
      id: "overview",
      name: "Cluster Overview",
      icon: Activity,
      screenshotUrl: "/images/app/cluster-overview@2x.webp",
      alt: "K8Stack Cluster Overview & Resource Usage",
      title: "Day-Zero Telemetry & Resource Usage",
      description:
        "Deep CPU headroom, memory pressure, and allocatable commitments across clusters with live namespace workload saturation progress bars.",
    },
    {
      id: "security",
      name: "Security Center",
      badge: "DevSecOps",
      icon: ShieldAlert,
      screenshotUrl: "/images/app/security-center@2x.webp",
      alt: "K8Stack Security Center & PSS Compliance",
      title: "Security Center (CIS & PSS Baseline)",
      description:
        "Automated continuous posture assessment, execution privilege audit (UID 0), host escape risk detection, and one-click 'Inspect & Remediate'.",
    },
    {
      id: "workloads",
      name: "Workloads & RCA",
      badge: "Incident RCA",
      icon: Layers,
      screenshotUrl: "/images/app/workload-overview@2x.webp",
      alt: "K8Stack Workloads Overview & Diagnostics",
      title: "Workload Overview & Exit Code Diagnostics",
      description:
        "High-density tracking of Deployments, StatefulSets, DaemonSets, recent warnings, and automated exit code diagnostic triage.",
    },
  ];

  const [activeViewId, setActiveViewId] = useState<string>("topology");
  const [renderMode, setRenderMode] = useState<"vector" | "screenshot">("vector");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeView = views.find((v) => v.id === activeViewId) || views[0];

  return (
    <section id="cockpit" className="py-16 md:py-20 relative">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Your cluster cockpit, sovereign.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/60">
            A high-density desktop environment engineered for lightning triage, zero telemetry egress, and direct workstation mTLS.
          </p>

          {/* Interactive View Switcher Tabs (Orca Style) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl border border-white/[0.08] bg-surface">
              {views.map((v) => {
                const Icon = v.icon;
                const isActive = activeViewId === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActiveViewId(v.id)}
                    className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-white/[0.1] text-white font-semibold shadow-sm"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#38bdf8]" : "text-white/40"}`} />
                    <span>{v.name}</span>
                    {v.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded font-mono font-semibold ${
                          isActive
                            ? "bg-[#326ce5]/30 text-[#38bdf8]"
                            : "bg-white/[0.06] text-white/40"
                        }`}
                      >
                        {v.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Render Mode Toggle: Vector HD vs @2x Screenshot */}
            <div className="flex items-center gap-1 p-1 rounded-xl border border-white/[0.08] bg-surface text-xs font-mono">
              <button
                type="button"
                onClick={() => setRenderMode("vector")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors ${
                  renderMode === "vector"
                    ? "bg-[#326ce5] text-white font-semibold"
                    : "text-white/50 hover:text-white"
                }`}
                title="Ultra-sharp interactive vector cockpit (Orca DOM benchmark)"
              >
                <Monitor className="h-3 w-3" />
                <span>Vector HD</span>
              </button>
              <button
                type="button"
                onClick={() => setRenderMode("screenshot")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors ${
                  renderMode === "screenshot"
                    ? "bg-white/[0.15] text-white font-semibold"
                    : "text-white/50 hover:text-white"
                }`}
                title="View high-resolution 2048px software screenshot"
              >
                <Eye className="h-3 w-3" />
                <span>Screenshot (@2x)</span>
              </button>
            </div>
          </div>
        </div>

        {/* macOS Desktop Application Window Frame */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0e10] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] overflow-hidden">
          {/* Top Window Bar: Traffic Lights + Context */}
          <div className="flex h-11 items-center justify-between border-b border-white/[0.07] bg-[#111214] px-4 select-none">
            {/* macOS Traffic Lights + Real K8Stack Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
                <span className="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <span className="size-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
              </div>

              <div className="hidden sm:flex items-center pl-2 border-l border-white/[0.08]">
                <K8StackLogo size={18} variant="full" />
              </div>
            </div>

            {/* Middle: Context & Namespace Indicator */}
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/70">
              <span className="rounded bg-white/[0.04] px-2 py-0.5 border border-white/[0.06] text-white/60">
                CONTEXT: <strong className="text-white">patrimonium</strong>
              </span>
              <span className="rounded bg-white/[0.04] px-2 py-0.5 border border-white/[0.06] text-white/60">
                NAMESPACE: <strong className="text-white">All Namespaces</strong>
              </span>
            </div>

            {/* Right Status */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[10px] text-emerald-400 font-semibold">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span>CONNECTED (K3S)</span>
              </div>

              {renderMode === "screenshot" && (
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="rounded p-1 text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
                  title="Expand to Fullscreen 1:1 Lightbox"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active View Surface */}
          <div className="relative min-h-[560px] bg-[#090a0b]">
            {renderMode === "vector" ? (
              // 100% Vector-Sharp Interactive Engine (Identical to Orca)
              <div className="h-full min-h-[560px]">
                {activeViewId === "topology" && <TopologyScreen />}
                {activeViewId === "overview" && <ClusterOverviewScreen />}
                {activeViewId === "security" && <SecurityCenterScreen />}
                {activeViewId === "workloads" && <WorkloadOverviewScreen />}
              </div>
            ) : (
              // High-Res @2x Screenshot View with Zoom Option
              <div
                className="relative w-full cursor-zoom-in group"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={activeView.screenshotUrl}
                  alt={activeView.alt}
                  width={2048}
                  height={1292}
                  className="w-full h-auto object-contain block"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="rounded-full bg-black/75 px-4 py-2 text-xs font-mono text-white flex items-center gap-2 border border-white/20 backdrop-blur-md">
                    <Maximize2 className="h-3.5 w-3.5" />
                    <span>Click to Inspect 1:1 Pixel-Perfect</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Caption Bar */}
          <div className="border-t border-white/[0.06] bg-[#111214] px-5 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <h4 className="font-semibold text-white text-sm">{activeView.title}</h4>
              <p className="text-white/60 text-xs mt-0.5 max-w-2xl">{activeView.description}</p>
            </div>
            <div className="shrink-0 flex items-center gap-3 text-[11px] font-mono text-white/40">
              <span>Direct Workstation mTLS</span>
              <span>•</span>
              <span className="text-emerald-400">Zero Telemetry</span>
            </div>
          </div>
        </div>

        {/* Lightbox Modal (For 1:1 pixel inspection) */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
              <span className="text-xs font-mono text-white/60">Press ESC or click anywhere to close</span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className="relative max-w-6xl max-h-[90vh] overflow-auto rounded-xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeView.screenshotUrl}
                alt={activeView.alt}
                width={2048}
                height={1292}
                className="w-full h-auto object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
