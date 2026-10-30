"use client";

import React, { useState } from "react";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCw,
  FileCode2,
  FileText,
  GitBranch,
  Bell,
  Shield,
  Activity,
  Terminal,
  Box,
  Trash2,
  ArrowLeftRight,
  X,
} from "lucide-react";

export function TopologyScreen() {
  const [activeSubTab, setActiveSubTab] = useState<string>("Topology");

  const subTabs = [
    { id: "Overview", label: "Overview", icon: Box },
    { id: "Owner", label: "argocd-application-controller", icon: Box },
    { id: "YML", label: "YML", icon: FileCode2 },
    { id: "Logs", label: "Logs", icon: FileText },
    { id: "Topology", label: "Topology", icon: GitBranch },
    { id: "Events", label: "Events", icon: Bell },
    { id: "Security", label: "Security", icon: Shield },
    { id: "Metrics", label: "Metrics", icon: Activity },
    { id: "Terminal", label: "Terminal", icon: Terminal },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#0d0f12] text-xs text-white/80 select-none overflow-hidden">
      {/* Top Open Tab Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#0a0c0e] px-2 pt-1.5">
        <div className="flex items-center">
          <div className="flex items-center gap-2 rounded-t-md border-t border-x border-white/[0.08] bg-[#12151a] px-3 py-1.5 text-[11.5px] font-medium text-white border-b-2 border-b-[#38bdf8]">
            <span className="size-2 rounded-sm bg-emerald-400" />
            <span>argocd-application-controller-0</span>
            <X className="ml-1.5 h-3 w-3 text-white/40 hover:text-white" />
          </div>
        </div>
        <div className="pr-2 text-white/40">
          <Maximize2 className="h-3 w-3" />
        </div>
      </div>

      {/* Pod Header Strip */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#101216] px-5 py-3">
        <div className="flex items-center gap-3.5">
          <div className="flex size-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            <Box className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
              POD
            </div>
            <div className="text-[15px] font-mono font-semibold text-white">
              <span className="text-white/60 font-normal">argocd:</span>{" "}
              argocd-application-controller-0
            </div>
            <div className="mt-0.5 flex flex-wrap items-center gap-3 text-[11px] text-white/45">
              <span className="flex items-center gap-1.5">
                Status{" "}
                <strong className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Running
                </strong>
              </span>
              <span>
                Owner{" "}
                <span className="text-[#38bdf8]">
                  StatefulSet/argocd-application-controller
                </span>
              </span>
              <span>
                Node <span className="text-[#38bdf8]">k3s</span>
              </span>
              <span>
                Age <span className="text-white/75">a month ago</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-white/65 hover:text-white"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-white/65 hover:text-white"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-white/65 hover:text-white"
          >
            <Terminal className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="flex items-center gap-1 border-b border-white/[0.06] bg-[#0e1014] px-5 text-[11.5px] overflow-x-auto">
        {subTabs.map((t) => {
          const Icon = t.icon;
          const isActive = activeSubTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveSubTab(t.id)}
              className={`flex items-center gap-1.5 border-b-2 px-3 py-2 font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "border-[#38bdf8] text-[#38bdf8]"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Topology Toolbar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0b0d10] px-5 py-2 text-[11px]">
        <div className="flex items-center gap-2.5">
          <div className="flex size-6 items-center justify-center rounded bg-[#38bdf8]/15 text-[#38bdf8]">
            <GitBranch className="h-3.5 w-3.5" />
          </div>
          <div>
            <div className="font-semibold text-white leading-tight">Topology</div>
            <div className="text-[10px] text-white/40">4 objects, 3 relationships</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[10.5px]">
          <span className="rounded-full border border-sky-500/30 bg-sky-500/15 px-2.5 py-0.5 text-sky-400 font-medium">
            Pod 1
          </span>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-emerald-400 font-medium">
            Service 1
          </span>
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/15 px-2.5 py-0.5 text-indigo-400 font-medium">
            StatefulSet 1
          </span>
          <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-white/70 font-medium">
            Node 1
          </span>
          <button
            type="button"
            className="ml-1 flex size-6 items-center justify-center rounded border border-white/[0.08] bg-white/[0.03] text-white/60"
          >
            <RotateCw className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Interactive Grid Canvas */}
      <div
        className="relative flex-1 overflow-hidden bg-[#090b0e]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Zoom Controls Pill Top-Right */}
        <div className="absolute right-4 top-3 z-20 flex items-center gap-2 rounded-md border border-white/[0.08] bg-[#12151a]/90 px-2.5 py-1 text-[10.5px] font-mono text-white/60 backdrop-blur-md">
          <ZoomOut className="h-3 w-3 cursor-pointer hover:text-white" />
          <span>100%</span>
          <ZoomIn className="h-3 w-3 cursor-pointer hover:text-white" />
          <Maximize2 className="ml-1 h-3 w-3 cursor-pointer hover:text-white" />
        </div>

        {/* SVG Relational Orthogonal Edges */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 920 380"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Service -> Pod orthogonal dashed line */}
          <path
            d="M 275 130 L 345 130 L 345 190 L 405 190"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* StatefulSet -> Pod orthogonal dashed line */}
          <path
            d="M 275 265 L 345 265 L 345 190 L 405 190"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Arrowhead into Pod */}
          <polygon points="405,190 398,186 398,194" fill="rgba(255,255,255,0.45)" />

          {/* Edge Labels */}
          <rect x="322" y="148" width="46" height="16" rx="3" fill="#090b0e" />
          <text
            x="345"
            y="159"
            textAnchor="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize="10"
            fontFamily="monospace"
          >
            selects
          </text>

          <rect x="326" y="218" width="38" height="16" rx="3" fill="#090b0e" />
          <text
            x="345"
            y="229"
            textAnchor="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize="10"
            fontFamily="monospace"
          >
            owns
          </text>

          {/* Pod -> Node dashed line */}
          <path
            d="M 615 190 L 705 190"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <polygon points="705,190 698,186 698,194" fill="rgba(255,255,255,0.45)" />
          <rect x="624" y="181" width="72" height="16" rx="3" fill="#090b0e" />
          <text
            x="660"
            y="192"
            textAnchor="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize="10"
            fontFamily="monospace"
          >
            scheduled on
          </text>
        </svg>

        {/* Graph Nodes Layer */}
        <div className="relative h-full w-full min-h-[340px]">
          {/* Node 1: SERVICE argocd-metrics */}
          <div className="absolute left-[6%] top-[21%] w-[210px] rounded-lg border border-white/[0.1] border-t-2 border-t-amber-400 bg-[#15181e]/95 p-3 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="font-bold uppercase tracking-wider text-amber-400">
                SERVICE
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9.5px] font-medium text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Healthy
              </span>
            </div>
            <div className="mt-1.5 font-mono text-xs font-semibold text-white truncate">
              argocd-metrics
            </div>
            <div className="mt-1 text-[10px] text-white/40">9 months ago</div>
          </div>

          {/* Node 2: STATEFULSET argocd-application-controller */}
          <div className="absolute left-[6%] top-[58%] w-[210px] rounded-lg border border-white/[0.1] border-t-2 border-t-purple-500 bg-[#15181e]/95 p-3 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="font-bold uppercase tracking-wider text-purple-400">
                STATEFULSET
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9.5px] font-medium text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Healthy
              </span>
            </div>
            <div className="mt-1.5 font-mono text-xs font-semibold text-white truncate">
              argocd-application-controller
            </div>
            <div className="mt-1 text-[10px] text-white/40">9 months ago</div>
          </div>

          {/* Node 3: POD argocd-application-controller-0 (Selected with Blue Glow) */}
          <div className="absolute left-[43%] top-[38%] w-[215px] rounded-lg border border-[#38bdf8] border-t-2 border-t-emerald-400 bg-[#151921] p-3.5 shadow-[0_0_35px_rgba(56,189,248,0.28)] ring-1 ring-[#38bdf8]/50">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="font-bold uppercase tracking-wider text-emerald-400">
                POD
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9.5px] font-semibold text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Running
              </span>
            </div>
            <div className="mt-1.5 font-mono text-xs font-semibold text-white truncate">
              argocd-application-controlle...
            </div>
            <div className="mt-1 text-[10px] text-white/45">a month ago</div>
          </div>

          {/* Node 4: NODE k3s */}
          <div className="absolute right-[4%] top-[38%] w-[195px] rounded-lg border border-white/[0.1] border-t-2 border-t-[#3b82f6] bg-[#15181e]/95 p-3 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="font-bold uppercase tracking-wider text-[#60a5fa]">
                NODE
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9.5px] font-medium text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Healthy
              </span>
            </div>
            <div className="mt-1.5 font-mono text-xs font-semibold text-white">
              k3s
            </div>
            <div className="mt-1 text-[10px] text-white/40">9 months ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
