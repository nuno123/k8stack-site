"use client";

import React, { useState } from "react";
import {
  Activity,
  Cpu,
  HardDrive,
  Network,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Clock,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export function ObservabilityTab() {
  const [selectedRange, setSelectedRange] = useState<string>("15m");

  const nodes = [
    { name: "aks-pool-system-01", status: "Ready", cpu: "38%", ram: "62%", pods: "28/110", version: "v1.31.2" },
    { name: "eks-worker-spot-04", status: "Ready", cpu: "74%", ram: "81%", pods: "42/110", version: "v1.31.2" },
    { name: "gke-highmem-02", status: "Ready", cpu: "29%", ram: "44%", pods: "31/110", version: "v1.31.1" },
    { name: "baremetal-k3s-edge-01", status: "Ready", cpu: "51%", ram: "70%", pods: "19/110", version: "v1.31.0" },
  ];

  return (
    <div className="flex flex-col h-full min-h-[500px] w-full bg-[#090b0c] font-mono text-xs p-4 sm:p-6 space-y-5 overflow-y-auto">
      {/* Header telemetry strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30">
            <Radio className="h-3.5 w-3.5 animate-pulse" />
          </div>
          <div>
            <span className="font-semibold text-white">Cluster Telemetry (Day-Zero Observability)</span>
            <div className="text-[10px] text-neutral-400">Prometheus Realtime Scrape (1s interval)</div>
          </div>
        </div>

        {/* Time Filter */}
        <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#111315] p-1 text-[11px]">
          {["5m", "15m", "1h", "6h", "24h"].map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => setSelectedRange(range)}
              className={`rounded px-2 py-0.5 transition-colors ${
                selectedRange === range
                  ? "bg-[#326ce5] text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="rounded-xl border border-white/[0.07] bg-[#111315]/80 p-3.5">
          <div className="flex items-center justify-between text-neutral-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span>CPU Core Allocation</span>
            </span>
            <span className="text-emerald-400 text-[10px] font-semibold">Healthy</span>
          </div>
          <div className="mt-2 text-xl font-bold text-white tracking-tight">42.8%</div>
          <div className="mt-1 text-[10px] text-neutral-400">34.2 / 80 Cores Requested</div>
          <div className="mt-2 h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-500 to-[#326ce5] rounded-full w-[42.8%]" />
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-[#111315]/80 p-3.5">
          <div className="flex items-center justify-between text-neutral-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <HardDrive className="h-3.5 w-3.5 text-amber-400" />
              <span>Memory (RAM)</span>
            </span>
            <span className="text-amber-400 text-[10px] font-semibold">Elevated</span>
          </div>
          <div className="mt-2 text-xl font-bold text-white tracking-tight">68.4%</div>
          <div className="mt-1 text-[10px] text-neutral-400">109.4 / 160 GiB Allocated</div>
          <div className="mt-2 h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full w-[68.4%]" />
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-[#111315]/80 p-3.5">
          <div className="flex items-center justify-between text-neutral-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              <span>Pod Workloads</span>
            </span>
            <span className="text-rose-400 text-[10px] font-semibold">1 Alert</span>
          </div>
          <div className="mt-2 text-xl font-bold text-white tracking-tight">148 / 152</div>
          <div className="mt-1 text-[10px] text-neutral-400">4 Pods Restarting / CrashLoop</div>
          <div className="mt-2 h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full w-[97%]" />
          </div>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-[#111315]/80 p-3.5">
          <div className="flex items-center justify-between text-neutral-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Network className="h-3.5 w-3.5 text-purple-400" />
              <span>Network I/O</span>
            </span>
            <span className="text-purple-400 text-[10px] font-semibold">10 Gbps</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold text-white tracking-tight">2.4 GB/s</span>
            <span className="text-[10px] text-emerald-400 flex items-center">
              <ArrowDown className="h-2.5 w-2.5" /> In
            </span>
          </div>
          <div className="mt-1 text-[10px] text-neutral-400 flex items-center gap-1">
            <span>840 MB/s Out</span>
            <ArrowUp className="h-2.5 w-2.5 text-[#38bdf8]" />
          </div>
          <div className="mt-2 h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-[65%]" />
          </div>
        </div>
      </div>

      {/* Realtime Telemetry Graph (SVG Sparkline Chart) */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111315]/80 p-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px]">
          <span className="font-semibold text-white flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-[#38bdf8]" />
            <span>Aggregated Cluster CPU & Memory Saturation Over Time</span>
          </span>
          <div className="flex items-center gap-4 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#38bdf8]" />
              <span>CPU (%)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span>RAM (%)</span>
            </span>
          </div>
        </div>

        <div className="mt-4 h-36 w-full relative">
          <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 120">
            {/* Grid lines */}
            <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
            <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
            <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

            {/* RAM Area Gradient */}
            <defs>
              <linearGradient id="ramGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cpuGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* RAM Path */}
            <path
              d="M 0 50 Q 50 45, 100 55 T 200 48 T 300 35 T 400 40 T 500 38 L 500 120 L 0 120 Z"
              fill="url(#ramGrad)"
            />
            <path
              d="M 0 50 Q 50 45, 100 55 T 200 48 T 300 35 T 400 40 T 500 38"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
            />

            {/* CPU Path */}
            <path
              d="M 0 85 Q 50 80, 100 70 T 200 82 T 300 65 T 400 75 T 500 68 L 500 120 L 0 120 Z"
              fill="url(#cpuGrad)"
            />
            <path
              d="M 0 85 Q 50 80, 100 70 T 200 82 T 300 65 T 400 75 T 500 68"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Node Fleet Status Table */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111315]/80 overflow-hidden">
        <div className="px-4 py-2.5 bg-[#141619] border-b border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
          <span className="font-semibold text-white">Cluster Node Fleet (4 Nodes Online)</span>
          <span className="text-emerald-400 font-semibold">100% Ready</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px]">
            <thead className="border-b border-white/[0.06] text-neutral-500 uppercase font-mono text-[10px]">
              <tr>
                <th className="px-4 py-2">Node Name</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">CPU</th>
                <th className="px-3 py-2">Memory</th>
                <th className="px-3 py-2">Pods</th>
                <th className="px-3 py-2">K8s Version</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-neutral-300">
              {nodes.map((node) => (
                <tr key={node.name} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-2 font-medium text-white">{node.name}</td>
                  <td className="px-3 py-2">
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{node.status}</span>
                    </span>
                  </td>
                  <td className="px-3 py-2">{node.cpu}</td>
                  <td className="px-3 py-2">{node.ram}</td>
                  <td className="px-3 py-2">{node.pods}</td>
                  <td className="px-3 py-2 text-neutral-400 font-mono">{node.version}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
