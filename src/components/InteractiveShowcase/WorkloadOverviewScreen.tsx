"use client";

import React from "react";
import { Layers, AlertTriangle, RotateCcw, Activity } from "lucide-react";

export function WorkloadOverviewScreen() {
  const kpis = [
    { label: "Pods", count: 41, sub: "38 Running", color: "text-white" },
    { label: "Deployments", count: 25, sub: "25 Healthy", color: "text-emerald-400" },
    { label: "StatefulSets", count: 5, sub: "5 Healthy", color: "text-white" },
    { label: "DaemonSets", count: 4, sub: "4 Ready", color: "text-white" },
    { label: "Jobs", count: 5, sub: "4 Succeeded • 1 Failed", color: "text-amber-400" },
    { label: "ReplicaSets", count: 77, sub: "25 Healthy • 52 Idle", color: "text-white" },
    { label: "CronJobs", count: 1, sub: "1 Scheduled", color: "text-white" },
    { label: "Helm Releases", count: 3, sub: "3 Deployed", color: "text-emerald-400" },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#0a0c0e] font-mono text-xs text-white/80 p-5 space-y-4 overflow-y-auto select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px]">
        <div className="flex items-center gap-2">
          <Layers className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-bold text-white">Workload Overview</span>
        </div>
        <div className="text-white/40">
          Context: <strong className="text-white">patrimonium</strong> • 25 Deployments, 41 Pods
        </div>
      </div>

      {/* 8 KPI Mini-Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="rounded-lg border border-white/[0.08] bg-[#111214] p-3">
            <div className="flex justify-between text-white/60 text-[10px]">
              <span>{kpi.label}</span>
              <span className={`font-bold text-sm ${kpi.color}`}>{kpi.count}</span>
            </div>
            <div className="mt-1 h-0.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full w-[85%]" />
            </div>
            <div className="mt-1.5 text-[9px] text-white/40 truncate">{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Warnings & Restarts Split View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Recent Warnings */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px]">
            <span className="font-bold text-white flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-400" /> Recent Warnings
            </span>
            <span className="text-white/40 text-[10px]">Live stream</span>
          </div>

          <div className="mt-2.5 space-y-2 text-[10px]">
            <div className="rounded bg-[#16181b] p-2 flex justify-between items-center">
              <span className="text-amber-400 font-semibold">Unhealthy</span>
              <span className="text-white/70 truncate mx-2">monitoring / observability-stack-loki-0</span>
              <span className="text-white/40 shrink-0">1m ago</span>
            </div>
            <div className="rounded bg-[#16181b] p-2 flex justify-between items-center">
              <span className="text-amber-400 font-semibold">Unhealthy</span>
              <span className="text-white/70 truncate mx-2">monitoring / prometheus-stack-kube-state</span>
              <span className="text-white/40 shrink-0">1m ago</span>
            </div>
            <div className="rounded bg-[#16181b] p-2 flex justify-between items-center">
              <span className="text-amber-400 font-semibold">Unhealthy</span>
              <span className="text-white/70 truncate mx-2">patrimonium / landing-87559df4c-jb9wg</span>
              <span className="text-white/40 shrink-0">1m ago</span>
            </div>
          </div>
        </div>

        {/* Recent Restarts */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px]">
            <span className="font-bold text-white flex items-center gap-1.5">
              <RotateCcw className="h-3.5 w-3.5 text-rose-400" /> Recent Restarts
            </span>
            <span className="text-rose-400 text-[10px] font-semibold">Exit Codes</span>
          </div>

          <div className="mt-2.5 space-y-2 text-[10px]">
            <div className="rounded bg-[#16181b] p-2 flex justify-between items-center">
              <span className="text-white/70 truncate">observability-stack-loki-0</span>
              <span className="text-rose-400 font-bold ml-2">ExitCode: 255 (52x)</span>
            </div>
            <div className="rounded bg-[#16181b] p-2 flex justify-between items-center">
              <span className="text-white/70 truncate">cert-manager-bd46f9c</span>
              <span className="text-emerald-400 font-semibold ml-2">ExitCode: 0 (72x)</span>
            </div>
            <div className="rounded bg-[#16181b] p-2 flex justify-between items-center">
              <span className="text-white/70 truncate">argocd-application-controller</span>
              <span className="text-emerald-400 font-semibold ml-2">ExitCode: 0 (20x)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Abnormal Resource Usage Bar */}
      <div className="rounded-xl border border-rose-500/30 bg-[#120e10] p-3 text-[11px]">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-white flex items-center gap-1.5">
            <Activity className="h-3.5 w-3.5 text-rose-400" /> Abnormal Resource Usage
          </span>
          <span className="rounded bg-rose-500/20 text-rose-300 px-1.5 py-0.2 font-bold text-[10px]">
            100% Saturation
          </span>
        </div>
        <div className="flex justify-between text-white/60 text-[10px]">
          <span>Pod: <strong className="text-white">caretta-hjvlr</strong> (caretta)</span>
          <span>Current: <strong className="text-rose-400">300Mi</strong> / Limit: 300Mi</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full bg-white/[0.08] rounded-full overflow-hidden">
          <div className="h-full bg-rose-500 rounded-full w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
