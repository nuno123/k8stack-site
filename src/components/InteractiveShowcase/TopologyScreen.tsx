"use client";

import React, { useState } from "react";
import {
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  Server,
  Layers,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";

export function TopologyScreen() {
  const [activeSubTab, setActiveSubTab] = useState<string>("Topology");

  return (
    <div className="flex flex-col h-full w-full bg-[#0d0f11] font-mono text-xs text-white/80 select-none overflow-hidden">
      {/* Sub-Header Breadcrumb Tab */}
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#111214] px-4 py-2 text-[11px]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400 border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>argocd-application-controller-0</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white/40">
          <span>POD</span>
          <span className="text-white/20">•</span>
          <span className="text-white/70">argocd: argocd-application-controller-0</span>
          <span className="text-white/20">•</span>
          <span className="text-emerald-400 font-semibold">Running</span>
          <span className="text-white/20">•</span>
          <span>Node: k3s</span>
        </div>
      </div>

      {/* Resource Navigation Subtabs */}
      <div className="flex items-center gap-1 border-b border-white/[0.06] bg-[#0f1012] px-4 py-1.5 text-[11px] overflow-x-auto">
        {["Overview", "argocd-application-controller", "YML", "Logs", "Topology", "Events", "Security", "Metrics", "Terminal"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveSubTab(tab)}
            className={`rounded px-2.5 py-1 transition-colors ${
              activeSubTab === tab
                ? "bg-white/[0.1] text-white font-semibold shadow-sm border border-white/[0.08]"
                : "text-white/50 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1 p-6 flex flex-col justify-between min-h-[460px] bg-[#0a0c0e]">
        {/* Controls Overlay */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.05]">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-white font-semibold">Topology Graph</span>
            <span className="text-white/40">(4 objects, 3 relationships)</span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="rounded bg-sky-500/15 px-2 py-0.5 text-sky-400 border border-sky-500/30">Pod 1</span>
            <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-emerald-400 border border-emerald-500/30">Service 1</span>
            <span className="rounded bg-indigo-500/15 px-2 py-0.5 text-indigo-400 border border-indigo-500/30">StatefulSet 1</span>
            <span className="rounded bg-blue-500/15 px-2 py-0.5 text-blue-400 border border-blue-500/30">Node 1</span>
            <span className="ml-2 text-white/40 border-l border-white/[0.1] pl-2">100%</span>
          </div>
        </div>

        {/* SVG Nodes & Relational Connectors */}
        <div className="relative flex-1 flex items-center justify-center min-h-[360px]">
          {/* Connector Paths */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none">
            <defs>
              <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Service to Pod */}
            <path d="M 310 135 C 380 135, 400 200, 480 200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
            {/* StatefulSet to Pod */}
            <path d="M 310 265 C 380 265, 400 200, 480 200" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
            {/* Pod to Node */}
            <path d="M 680 200 C 730 200, 750 200, 780 200" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
          </svg>

          {/* Column 1: Service & StatefulSet */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10">
            {/* Service Node */}
            <div className="rounded-xl border border-amber-500/30 bg-[#141619] p-3.5 w-60 shadow-lg shadow-black/40">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px]">
                <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Server className="h-3 w-3" /> SERVICE
                </span>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-emerald-400 font-semibold">
                  Healthy
                </span>
              </div>
              <div className="mt-2 font-bold text-white text-xs truncate">argocd-metrics</div>
              <div className="mt-1 text-[10px] text-white/40">ClusterIP • Port 8082</div>
            </div>

            {/* StatefulSet Node */}
            <div className="rounded-xl border border-indigo-500/30 bg-[#141619] p-3.5 w-60 shadow-lg shadow-black/40">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px]">
                <span className="text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Layers className="h-3 w-3" /> STATEFULSET
                </span>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-emerald-400 font-semibold">
                  Healthy
                </span>
              </div>
              <div className="mt-2 font-bold text-white text-xs truncate">argocd-application-controller</div>
              <div className="mt-1 text-[10px] text-white/40">Replicas: 1/1 Ready</div>
            </div>
          </div>

          {/* Column 2: Pod Node (Active / Focused with Neon Glow) */}
          <div className="absolute left-[480px] top-1/2 -translate-y-1/2 z-10">
            <div className="rounded-xl border-2 border-[#38bdf8] bg-[#0c131a] p-4 w-64 shadow-[0_0_30px_rgba(56,189,248,0.25)] ring-2 ring-[#38bdf8]/40">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-[10px]">
                <span className="text-[#38bdf8] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-emerald-400 animate-pulse" /> POD
                </span>
                <span className="rounded bg-emerald-500/25 px-2 py-0.5 text-emerald-300 font-bold">
                  Running
                </span>
              </div>
              <div className="mt-2 font-bold text-white text-xs truncate">
                argocd-application-controller-0
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-white/60">
                <div>IP: 10.42.0.18</div>
                <div>Restarts: 0</div>
              </div>
            </div>
          </div>

          {/* Column 3: Host Node */}
          <div className="absolute left-[780px] top-1/2 -translate-y-1/2 z-10">
            <div className="rounded-xl border border-blue-500/30 bg-[#141619] p-3.5 w-52 shadow-lg shadow-black/40">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px]">
                <span className="text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Server className="h-3 w-3" /> NODE
                </span>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-emerald-400 font-semibold">
                  Healthy
                </span>
              </div>
              <div className="mt-2 font-bold text-white text-xs">k3s</div>
              <div className="mt-1 text-[10px] text-white/40">OS: Linux • v1.31.2</div>
            </div>
          </div>
        </div>

        {/* Footer Status Strip */}
        <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-white/40">
          <div className="flex items-center gap-3">
            <span>Context: <strong className="text-white/80">patrimonium</strong></span>
            <span>•</span>
            <span>Nodes: <strong className="text-white/80">1</strong></span>
            <span>•</span>
            <span>Workloads: <strong className="text-white/80">25 Deployments, 41 Pods</strong></span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>Zero Telemetry • 100% Local</span>
          </div>
        </div>
      </div>
    </div>
  );
}
