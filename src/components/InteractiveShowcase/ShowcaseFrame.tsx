"use client";

import React, { useState } from "react";
import { Network, Sparkles, Activity, Terminal, Shield, Laptop } from "lucide-react";
import { TopologyTab } from "./TopologyTab";
import { AiCopilotTab } from "./AiCopilotTab";
import { ObservabilityTab } from "./ObservabilityTab";
import { TerminalStudioTab } from "./TerminalStudioTab";

export function ShowcaseFrame() {
  const [activeTab, setActiveTab] = useState<"topology" | "ai" | "metrics" | "pty">("topology");

  return (
    <section id="showcase" className="relative py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#326ce5]/30 bg-[#326ce5]/10 px-3 py-1 text-xs font-mono font-medium text-[#38bdf8] mb-4">
            <Laptop className="h-3.5 w-3.5" />
            <span>Interactive Desktop Cockpit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Designed for Speed, Density &amp; Incident Clarity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Switch between the native topology engine, sovereign local AI triage, real-time Prometheus observability, and embedded PTY terminal session.
          </p>
        </div>

        {/* macOS Window Mockup Frame */}
        <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e10] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Window Titlebar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#111315] px-4 py-3 gap-3">
            {/* macOS Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-sm" />
              <span className="ml-3 hidden sm:inline text-xs font-mono text-neutral-400 font-medium">
                k8stack-desktop — production-us-east-1.k8s.local
              </span>
            </div>

            {/* Tab Navigation Pill Bar */}
            <div className="flex items-center rounded-xl border border-white/[0.08] bg-[#090b0c] p-1 gap-1 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("topology")}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                  activeTab === "topology"
                    ? "bg-[#181b1f] text-white border border-white/[0.12] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Network className="h-3.5 w-3.5 text-[#326ce5]" />
                <span>Topology</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ai")}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                  activeTab === "ai"
                    ? "bg-[#181b1f] text-white border border-white/[0.12] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 text-[#38bdf8]" />
                <span>AI SRE Copilot</span>
                <span className="rounded bg-rose-500/20 px-1 py-0.2 text-[9px] font-bold text-rose-300">
                  Alert
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("metrics")}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                  activeTab === "metrics"
                    ? "bg-[#181b1f] text-white border border-white/[0.12] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Activity className="h-3.5 w-3.5 text-emerald-400" />
                <span>Observability</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("pty")}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                  activeTab === "pty"
                    ? "bg-[#181b1f] text-white border border-white/[0.12] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Terminal className="h-3.5 w-3.5 text-amber-400" />
                <span>PTY Studio</span>
              </button>
            </div>

            {/* Direct Connection Status Indicator */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>Direct mTLS (Zero Proxy)</span>
            </div>
          </div>

          {/* Active Tab Container */}
          <div className="relative min-h-[500px]">
            {activeTab === "topology" && <TopologyTab />}
            {activeTab === "ai" && <AiCopilotTab />}
            {activeTab === "metrics" && <ObservabilityTab />}
            {activeTab === "pty" && <TerminalStudioTab />}
          </div>
        </div>
      </div>
    </section>
  );
}
