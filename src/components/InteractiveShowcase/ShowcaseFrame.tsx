"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Network,
  Activity,
  ShieldAlert,
  Layers,
  ChevronDown,
  Moon,
  Sparkles,
} from "lucide-react";
import { K8StackLogo } from "@/components/brand/K8StackLogo";

interface ShowcaseView {
  id: string;
  name: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
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
      image: "/images/app/topology-view.png",
      alt: "K8Stack Topology Visualizer",
      title: "Real-Time Workload Topology Graph",
      description:
        "Trace relational dependencies between Ingress, Services, StatefulSets, Pods, and host Nodes with live health status overlays and micro-inspectors.",
    },
    {
      id: "overview",
      name: "Cluster Overview",
      icon: Activity,
      image: "/images/app/cluster-overview.png",
      alt: "K8Stack Cluster Overview & Resource Usage",
      title: "Day-Zero Telemetry & Resource Usage",
      description:
        "Deep CPU headroom, memory pressure, and allocatable commitments across clusters with live namespace workload saturation bars.",
    },
    {
      id: "security",
      name: "Security Center",
      badge: "DevSecOps",
      icon: ShieldAlert,
      image: "/images/app/security-center.png",
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
      image: "/images/app/workload-overview.png",
      alt: "K8Stack Workloads Overview & Diagnostics",
      title: "Workload Overview & Exit Code Diagnostics",
      description:
        "High-density tracking of Deployments, StatefulSets, DaemonSets, recent warnings, and automated exit code diagnostic triage.",
    },
  ];

  const [activeViewId, setActiveViewId] = useState<string>("topology");
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

          {/* Interactive View Switcher Tabs (Orca Benchmark Style) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl border border-white/[0.08] bg-surface w-fit mx-auto">
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
        </div>

        {/* macOS Desktop Application Window */}
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

            {/* Middle: Real App Context & Namespace Header Indicator */}
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
            </div>
          </div>

          {/* Software Screenshot Display Surface */}
          <div className="relative bg-[#090a0b] overflow-hidden group">
            <div className="relative w-full aspect-[16/10] max-h-[660px]">
              <Image
                src={activeView.image}
                alt={activeView.alt}
                fill
                className="object-contain object-top"
                priority
              />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090a0b] via-[#090a0b]/80 to-transparent p-5 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-t border-white/[0.04]">
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
        </div>
      </div>
    </section>
  );
}
