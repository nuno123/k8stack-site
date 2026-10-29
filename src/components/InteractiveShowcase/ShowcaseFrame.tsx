"use client";

import React, { useState } from "react";
import {
  Network,
  Sparkles,
  Activity,
  Terminal,
  Shield,
  Layers,
  FileCode,
  Radio,
  PanelLeft,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { TopologyTab } from "./TopologyTab";
import { AiCopilotTab } from "./AiCopilotTab";
import { ObservabilityTab } from "./ObservabilityTab";
import { TerminalStudioTab } from "./TerminalStudioTab";

export function ShowcaseFrame() {
  const [activeTab, setActiveTab] = useState<"topology" | "ai" | "metrics" | "pty">("topology");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <section id="cockpit" className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-white">
            Your cluster cockpit, sovereign.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/60">
            A high-density desktop environment engineered for lightning triage, zero telemetry egress, and direct workstation mTLS.
          </p>
        </div>

        {/* Desktop App Frame (Orca-Style Realistic Cockpit Window) */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0e10] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Top Traffic Light Bar (Mac Header) */}
          <div className="flex h-10 items-center justify-between border-b border-white/[0.07] bg-[#111214] px-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
              <span className="size-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
              <span className="size-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
              <span className="ml-3 hidden sm:inline text-xs font-mono text-white/50 font-medium">
                k8stack — production-us-east-1 (mTLS 6443)
              </span>
            </div>

            {/* Quick Context Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-white/60">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Direct Workstation TLS • Zero SaaS Proxy</span>
            </div>
          </div>

          {/* Window Body: Sidebar (220px) + Main Stage */}
          <div className="flex flex-col md:flex-row min-h-[580px]">
            {/* 220px Orca-Style Desktop Sidebar */}
            <aside
              className={`shrink-0 flex-col border-b md:border-b-0 md:border-r border-white/[0.07] bg-[#111214] p-3 text-xs font-mono transition-all ${
                sidebarOpen ? "flex w-full md:w-56" : "hidden md:flex md:w-14"
              }`}
            >
              {/* Cluster Context Picker */}
              <div className="mb-3 flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] p-2 text-white/80">
                <div className="flex items-center gap-2 truncate">
                  <div className="size-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate font-semibold text-[11px]">prod-us-east-1</span>
                </div>
                <ChevronDown className="h-3 w-3 text-white/40 shrink-0" />
              </div>

              {/* Sidebar Navigation Items */}
              <div className="space-y-1">
                <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-white/35 font-semibold">
                  Views
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab("topology")}
                  className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors ${
                    activeTab === "topology"
                      ? "bg-white/[0.08] text-white font-semibold"
                      : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <Network className="h-3.5 w-3.5 text-[#326ce5]" />
                  <span>Topology Visualizer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors ${
                    activeTab === "ai"
                      ? "bg-white/[0.08] text-white font-semibold"
                      : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#38bdf8]" />
                    <span>AI SRE Copilot</span>
                  </div>
                  <span className="rounded bg-rose-500/20 px-1 py-0.2 text-[9px] text-rose-300 font-bold">
                    OOM
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("metrics")}
                  className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors ${
                    activeTab === "metrics"
                      ? "bg-white/[0.08] text-white font-semibold"
                      : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Observability &amp; KPIs</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("pty")}
                  className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors ${
                    activeTab === "pty"
                      ? "bg-white/[0.08] text-white font-semibold"
                      : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <Terminal className="h-3.5 w-3.5 text-amber-400" />
                  <span>PTY Terminal Studio</span>
                </button>
              </div>

              {/* Workloads list summary */}
              <div className="mt-5 space-y-1 pt-4 border-t border-white/[0.06]">
                <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-white/35 font-semibold">
                  Workloads (152 Pods)
                </div>
                <div className="flex items-center justify-between px-2.5 py-1 text-[11px] text-white/50">
                  <span>Deployments</span>
                  <span className="text-white/80">24</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1 text-[11px] text-white/50">
                  <span>Services</span>
                  <span className="text-white/80">38</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1 text-[11px] text-rose-400">
                  <span>CrashLoopBackOff</span>
                  <span className="font-bold">1</span>
                </div>
              </div>
            </aside>

            {/* Main Stage */}
            <div className="flex-1 min-h-0 bg-[#090a0b] overflow-hidden">
              {activeTab === "topology" && <TopologyTab />}
              {activeTab === "ai" && <AiCopilotTab />}
              {activeTab === "metrics" && <ObservabilityTab />}
              {activeTab === "pty" && <TerminalStudioTab />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
