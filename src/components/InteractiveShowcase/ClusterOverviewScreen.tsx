"use client";

import React from "react";
import { Server, Cpu, HardDrive, Box, RotateCw, X, Gauge } from "lucide-react";

export function ClusterOverviewScreen() {
  return (
    <div className="flex flex-col h-full w-full bg-[#0d0f12] text-xs text-white/80 select-none overflow-y-auto">
      {/* Top Open Tab Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#0a0c0e] px-2 pt-1.5">
        <div className="flex items-center">
          <div className="flex items-center gap-2 rounded-t-md border-t border-x border-white/[0.08] bg-[#12151a] px-3 py-1.5 text-[11.5px] font-medium text-white border-b-2 border-b-emerald-400">
            <Server className="h-3.5 w-3.5 text-emerald-400" />
            <span>Cluster Overview</span>
            <span className="rounded bg-emerald-500/15 px-1.5 py-0.2 text-[9.5px] font-mono text-emerald-400">
              ● V1.34.3+K3S1
            </span>
            <X className="ml-1 h-3 w-3 text-white/40" />
          </div>
        </div>
        <div className="flex items-center gap-2 pr-2 pb-1">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[9.5px] font-mono text-white/70">
            <span className="text-[#38bdf8]">●</span> CONTEXT: PATRIMONIUM
          </span>
          <RotateCw className="h-3 w-3 text-white/40" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* 4 Top KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Cluster Nodes */}
          <div className="rounded-lg border border-white/[0.08] bg-[#121418] p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-white">
                <Server className="h-3.5 w-3.5 text-emerald-400" />
                Cluster Nodes
              </span>
              <span className="font-mono text-sm font-bold text-white">1 →</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-emerald-500" />
            <div className="mt-3 space-y-1 text-[10.5px] font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <span className="text-emerald-400 font-bold">1</span> Ready Nodes
              </div>
              <div className="flex items-center gap-2 text-white/45">
                <span className="text-rose-400 font-bold">0</span> Not Ready / Issues
              </div>
            </div>
          </div>

          {/* Cluster Pods */}
          <div className="rounded-lg border border-white/[0.08] bg-[#121418] p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-white">
                <Box className="h-3.5 w-3.5 text-[#38bdf8]" />
                Cluster Pods
              </span>
              <span className="font-mono text-sm font-bold text-white">41 →</span>
            </div>
            <div className="mt-2 flex h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[92%] bg-emerald-500" />
              <div className="h-full w-[8%] bg-[#38bdf8]" />
            </div>
            <div className="mt-2.5 space-y-0.5 text-[10px] font-mono">
              <div className="text-white/75">
                <span className="text-emerald-400 font-bold">38</span> Running Pods
              </div>
              <div className="text-white/45">
                <span className="text-amber-400 font-bold">0</span> Pending Scheduling
              </div>
              <div className="text-white/45">
                <span className="text-rose-400 font-bold">0</span> Failed / CrashLoop
              </div>
              <div className="text-white/45">
                <span className="text-[#38bdf8] font-bold">3</span> Completed Jobs
              </div>
            </div>
          </div>

          {/* CPU Allocation */}
          <div className="rounded-lg border border-white/[0.08] bg-[#121418] p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-white">
                <Cpu className="h-3.5 w-3.5 text-[#38bdf8]" />
                CPU Allocation
              </span>
              <span className="font-mono text-sm font-bold text-white">60% →</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[60%] bg-[#38bdf8]" />
            </div>
            <div className="mt-3 space-y-1 text-[10.5px] font-mono">
              <div className="text-white/75">
                <span className="text-[#38bdf8] font-bold">60</span> Usage: 1206m
              </div>
              <div className="text-white/45">
                <span className="text-cyan-400 font-bold">49</span> Requests: 985m req
              </div>
            </div>
          </div>

          {/* Memory Allocation */}
          <div className="rounded-lg border border-white/[0.08] bg-[#121418] p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-white">
                <HardDrive className="h-3.5 w-3.5 text-emerald-400" />
                Memory Allocation
              </span>
              <span className="font-mono text-sm font-bold text-white">70% →</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[70%] bg-emerald-500" />
            </div>
            <div className="mt-3 space-y-1 text-[10.5px] font-mono">
              <div className="text-white/75">
                <span className="text-emerald-400 font-bold">70</span> Usage: 5Gi
              </div>
              <div className="text-white/45">
                <span className="text-teal-400 font-bold">17</span> Requests: 1Gi req
              </div>
            </div>
          </div>
        </div>

        {/* Resource Usage Panel */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-white">Resource Usage</div>
          <div className="rounded-xl border border-white/[0.08] bg-[#111317] p-3.5 space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-7 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-[#38bdf8]">
                  <Gauge className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">patrimonium</div>
                  <div className="text-[10px] font-mono text-white/40">
                    https://192.168.1.200:6443
                  </div>
                </div>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[9.5px] font-mono font-semibold text-emerald-400">
                ● LIVE TELEMETRY ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* CPU headroom */}
              <div className="rounded-lg border border-white/[0.06] bg-[#15181e] p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Cpu className="h-3.5 w-3.5 text-[#38bdf8]" />
                    CPU headroom
                  </span>
                  <span className="font-mono text-sm font-bold text-white">60%</span>
                </div>
                <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full w-[60%] bg-[#3b82f6] rounded-full" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-mono text-white/50">
                  <span>
                    Usage <strong className="text-white">1206m / 2000m</strong>
                  </span>
                  <span>
                    Reserved <strong className="text-white">985m req</strong>
                  </span>
                </div>
              </div>

              {/* Memory pressure */}
              <div className="rounded-lg border border-white/[0.06] bg-[#15181e] p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <HardDrive className="h-3.5 w-3.5 text-emerald-400" />
                    Memory pressure
                  </span>
                  <span className="font-mono text-sm font-bold text-white">70%</span>
                </div>
                <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full w-[70%] bg-emerald-500 rounded-full" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-mono text-white/50">
                  <span>
                    Usage <strong className="text-white">5Gi / 8Gi</strong>
                  </span>
                  <span>
                    Reserved <strong className="text-white">1Gi req</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Allocatable commitment */}
            <div>
              <div className="text-[11px] font-semibold text-white">
                Allocatable commitment
              </div>
              <div className="text-[10px] text-white/40 mb-2">
                Requests compared with what the cluster can schedule
              </div>
              <div className="grid grid-cols-3 gap-2.5 font-mono text-[10.5px]">
                <div className="rounded-lg border border-white/[0.06] bg-[#15181e] p-2.5">
                  <div className="flex justify-between text-white">
                    <span>Pods</span>
                    <span className="font-bold">37%</span>
                  </div>
                  <div className="mt-1.5 h-1 w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full w-[37%] bg-white/60" />
                  </div>
                  <div className="mt-1 text-[9.5px] text-white/40">
                    41 requested of 110
                  </div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-[#15181e] p-2.5">
                  <div className="flex justify-between text-white">
                    <span>CPU</span>
                    <span className="font-bold">49%</span>
                  </div>
                  <div className="mt-1.5 h-1 w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full w-[49%] bg-[#3b82f6]" />
                  </div>
                  <div className="mt-1 text-[9.5px] text-white/40">
                    985m req of 2000m
                  </div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-[#15181e] p-2.5">
                  <div className="flex justify-between text-white">
                    <span>Memory</span>
                    <span className="font-bold">17%</span>
                  </div>
                  <div className="mt-1.5 h-1 w-full bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full w-[17%] bg-emerald-500" />
                  </div>
                  <div className="mt-1 text-[9.5px] text-white/40">1Gi req of 8Gi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NameSpaces Table */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">NameSpaces</span>
            <div className="flex items-center gap-3 text-[10px] text-white/55">
              <span className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-emerald-400" /> Running
              </span>
              <span className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-amber-400" /> Pending
              </span>
              <span className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-rose-400" /> Failed
              </span>
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-[#111317] overflow-hidden text-[11px]">
            <div className="grid grid-cols-12 border-b border-white/[0.06] px-4 py-2 text-[10px] font-semibold text-white/45">
              <div className="col-span-3">Name</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-7">Pods</div>
            </div>
            <div className="divide-y divide-white/[0.05] font-mono text-[11px]">
              <div className="grid grid-cols-12 items-center px-4 py-2">
                <div className="col-span-3 font-semibold text-white">app</div>
                <div className="col-span-2 text-white/50">Active</div>
                <div className="col-span-7 italic text-white/35">No Pods...</div>
              </div>
              <div className="grid grid-cols-12 items-center px-4 py-2">
                <div className="col-span-3 font-semibold text-white">argocd</div>
                <div className="col-span-2 text-white/50">Active</div>
                <div className="col-span-7">
                  <div className="h-1.5 w-full rounded-full bg-emerald-500" />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center px-4 py-2">
                <div className="col-span-3 font-semibold text-white">caretta</div>
                <div className="col-span-2 text-white/50">Active</div>
                <div className="col-span-7">
                  <div className="h-1.5 w-full rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
