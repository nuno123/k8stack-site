"use client";

import React from "react";
import { Server, Activity, Cpu, HardDrive, Layers, ArrowUpRight } from "lucide-react";

export function ClusterOverviewScreen() {
  return (
    <div className="flex flex-col h-full w-full bg-[#0a0c0e] font-mono text-xs text-white/80 p-5 space-y-5 overflow-y-auto select-none">
      {/* Top Breadcrumb Tag */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400 border border-emerald-500/20 text-[11px]">
            <Server className="h-3 w-3" />
            <span>Cluster Overview</span>
            <span className="text-white/40">• v1.34.3+k3s1</span>
          </div>
        </div>
        <div className="text-[11px] text-white/50">
          Context: <strong className="text-white">patrimonium</strong> (192.168.1.200:6443)
        </div>
      </div>

      {/* 4 KPI Top Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Nodes */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="flex items-center justify-between text-white/60 text-[11px]">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <Server className="h-3.5 w-3.5 text-emerald-400" />
              <span>Cluster Nodes</span>
            </span>
            <span className="font-bold text-white text-sm">1 →</span>
          </div>
          <div className="mt-2 h-1 w-full bg-emerald-500 rounded-full" />
          <div className="mt-3 space-y-1 text-[11px]">
            <div className="flex justify-between text-emerald-400">
              <span>Ready Nodes</span>
              <span className="font-bold">1</span>
            </div>
            <div className="flex justify-between text-white/40">
              <span>Not Ready / Issues</span>
              <span>0</span>
            </div>
          </div>
        </div>

        {/* Pods */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="flex items-center justify-between text-white/60 text-[11px]">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <Layers className="h-3.5 w-3.5 text-sky-400" />
              <span>Cluster Pods</span>
            </span>
            <span className="font-bold text-white text-sm">41 →</span>
          </div>
          <div className="mt-2 h-1 w-full bg-sky-500 rounded-full" />
          <div className="mt-3 space-y-1 text-[11px]">
            <div className="flex justify-between text-emerald-400">
              <span>Running Pods</span>
              <span className="font-bold">38</span>
            </div>
            <div className="flex justify-between text-white/40">
              <span>Failed / CrashLoop</span>
              <span>0</span>
            </div>
          </div>
        </div>

        {/* CPU */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="flex items-center justify-between text-white/60 text-[11px]">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <Cpu className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span>CPU Allocation</span>
            </span>
            <span className="font-bold text-[#38bdf8] text-sm">60% →</span>
          </div>
          <div className="mt-2 h-1 w-full bg-[#38bdf8] rounded-full" />
          <div className="mt-3 space-y-1 text-[11px]">
            <div className="flex justify-between text-[#38bdf8]">
              <span>Usage: 1206m</span>
              <span>60%</span>
            </div>
            <div className="flex justify-between text-white/40">
              <span>Requests: 985m req</span>
              <span>49%</span>
            </div>
          </div>
        </div>

        {/* Memory */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="flex items-center justify-between text-white/60 text-[11px]">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <HardDrive className="h-3.5 w-3.5 text-emerald-400" />
              <span>Memory Allocation</span>
            </span>
            <span className="font-bold text-emerald-400 text-sm">70% →</span>
          </div>
          <div className="mt-2 h-1 w-full bg-emerald-500 rounded-full" />
          <div className="mt-3 space-y-1 text-[11px]">
            <div className="flex justify-between text-emerald-400">
              <span>Usage: 5Gi</span>
              <span>70%</span>
            </div>
            <div className="flex justify-between text-white/40">
              <span>Requests: 1Gi req</span>
              <span>17%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Usage Bars */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-4 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px]">
          <span className="font-bold text-white uppercase tracking-wider">Resource Usage &amp; Headroom</span>
          <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-emerald-400 font-semibold text-[10px]">
            ● LIVE TELEMETRY ACTIVE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* CPU Headroom */}
          <div className="rounded-lg border border-white/[0.06] bg-[#0c0e10] p-3">
            <div className="flex justify-between items-center text-[11px] mb-2">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#38bdf8]" /> CPU headroom
              </span>
              <span className="font-bold text-[#38bdf8] text-sm">60%</span>
            </div>
            <div className="h-2 w-full bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-[#38bdf8] rounded-full w-[60%]" />
            </div>
            <div className="flex justify-between text-[10px] text-white/50 mt-2">
              <span>Usage: 1206m / 2000m</span>
              <span>Reserved: 985m req</span>
            </div>
          </div>

          {/* Memory Pressure */}
          <div className="rounded-lg border border-white/[0.06] bg-[#0c0e10] p-3">
            <div className="flex justify-between items-center text-[11px] mb-2">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <HardDrive className="h-3.5 w-3.5 text-emerald-400" /> Memory pressure
              </span>
              <span className="font-bold text-emerald-400 text-sm">70%</span>
            </div>
            <div className="h-2 w-full bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[70%]" />
            </div>
            <div className="flex justify-between text-[10px] text-white/50 mt-2">
              <span>Usage: 5Gi / 8Gi</span>
              <span>Reserved: 1Gi req</span>
            </div>
          </div>
        </div>

        {/* Allocatable Commitments */}
        <div className="pt-2">
          <div className="text-[10px] text-white/40 uppercase mb-2">Allocatable Commitment</div>
          <div className="grid grid-cols-3 gap-3 text-[11px]">
            <div className="rounded border border-white/[0.06] bg-[#0e1012] p-2.5">
              <div className="flex justify-between text-white/60">
                <span>Pods</span>
                <span className="font-bold text-white">37%</span>
              </div>
              <div className="mt-1 text-[10px] text-white/40">41 requested of 110</div>
            </div>
            <div className="rounded border border-white/[0.06] bg-[#0e1012] p-2.5">
              <div className="flex justify-between text-[#38bdf8]">
                <span>CPU</span>
                <span className="font-bold">49%</span>
              </div>
              <div className="mt-1 text-[10px] text-white/40">985m req of 2000m</div>
            </div>
            <div className="rounded border border-white/[0.06] bg-[#0e1012] p-2.5">
              <div className="flex justify-between text-emerald-400">
                <span>Memory</span>
                <span className="font-bold">17%</span>
              </div>
              <div className="mt-1 text-[10px] text-white/40">1Gi req of 8Gi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Namespaces Workloads Progress Table */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px]">
          <span className="font-bold text-white">Namespaces Workload Distribution</span>
          <div className="flex items-center gap-3 text-[10px] text-white/50">
            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-emerald-400" /> Running</span>
            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-amber-400" /> Pending</span>
            <span className="flex items-center gap-1"><span className="size-2 rounded-full bg-rose-400" /> Failed</span>
          </div>
        </div>

        <div className="mt-3 space-y-3 text-[11px]">
          <div className="flex items-center justify-between gap-4">
            <span className="w-24 font-bold text-white">argocd</span>
            <span className="text-[10px] text-emerald-400">Active</span>
            <div className="flex-1 h-2 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full w-[94%]" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="w-24 font-bold text-white">caretta</span>
            <span className="text-[10px] text-emerald-400">Active</span>
            <div className="flex-1 h-2 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full w-[88%]" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="w-24 font-bold text-white">app</span>
            <span className="text-[10px] text-white/40">Active</span>
            <div className="flex-1 h-2 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-white/20 rounded-full w-[10%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
