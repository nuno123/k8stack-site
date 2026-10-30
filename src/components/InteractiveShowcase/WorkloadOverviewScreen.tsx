"use client";

import React from "react";
import { Box, RotateCw, X } from "lucide-react";

export function WorkloadOverviewScreen() {
  const cards = [
    {
      title: "Pods",
      count: 41,
      barColor: "bg-emerald-500",
      barWidth: "w-[92%]",
      stats: [
        { num: 38, label: "Running", color: "text-emerald-400" },
        { num: 0, label: "CrashLoopBackOff", color: "text-rose-400" },
        { num: 3, label: "Completed", color: "text-white/50" },
      ],
    },
    {
      title: "Deployments",
      count: 25,
      barColor: "bg-emerald-500",
      barWidth: "w-full",
      stats: [
        { num: 25, label: "Healthy", color: "text-emerald-400" },
        { num: 0, label: "Unavailable", color: "text-rose-400" },
        { num: 0, label: "Idle", color: "text-white/50" },
      ],
    },
    {
      title: "StatefulSets",
      count: 5,
      barColor: "bg-emerald-500",
      barWidth: "w-full",
      stats: [
        { num: 5, label: "Healthy", color: "text-emerald-400" },
        { num: 0, label: "Unavailable", color: "text-rose-400" },
        { num: 0, label: "Idle", color: "text-white/50" },
      ],
    },
    {
      title: "DaemonSets",
      count: 4,
      barColor: "bg-emerald-500",
      barWidth: "w-full",
      stats: [
        { num: 4, label: "Ready", color: "text-emerald-400" },
        { num: 0, label: "Unavailable", color: "text-amber-400" },
        { num: 0, label: "Misscheduled", color: "text-rose-400" },
      ],
    },
    {
      title: "Jobs",
      count: 5,
      barColor: "bg-emerald-500",
      barWidth: "w-[80%]",
      stats: [
        { num: 0, label: "Active", color: "text-[#38bdf8]" },
        { num: 4, label: "Succeeded", color: "text-emerald-400" },
        { num: 1, label: "Failed", color: "text-rose-400" },
      ],
    },
    {
      title: "ReplicaSets",
      count: 77,
      barColor: "bg-emerald-500",
      barWidth: "w-[32%]",
      stats: [
        { num: 25, label: "Healthy", color: "text-emerald-400" },
        { num: 0, label: "Unavailable", color: "text-rose-400" },
        { num: 52, label: "Idle", color: "text-white/50" },
      ],
    },
    {
      title: "CronJobs",
      count: 1,
      barColor: "bg-emerald-500",
      barWidth: "w-full",
      stats: [
        { num: 1, label: "Scheduled", color: "text-emerald-400" },
        { num: 0, label: "Suspended", color: "text-amber-400" },
        { num: 0, label: "Active jobs", color: "text-[#38bdf8]" },
      ],
    },
    {
      title: "Helm Releases",
      count: 3,
      barColor: "bg-emerald-500",
      barWidth: "w-full",
      stats: [
        { num: 3, label: "Deployed", color: "text-emerald-400" },
        { num: 0, label: "Failed", color: "text-rose-400" },
        { num: 0, label: "Pending", color: "text-amber-400" },
      ],
    },
    {
      title: "Resource Quotas",
      count: 0,
      barColor: "bg-white/10",
      barWidth: "w-0",
      stats: [
        { num: 0, label: "Within limits", color: "text-emerald-400" },
        { num: 0, label: "Warning", color: "text-amber-400" },
      ],
    },
    {
      title: "Disruption Budgets",
      count: 0,
      barColor: "bg-white/10",
      barWidth: "w-0",
      stats: [
        { num: 0, label: "DisruptionAllowed", color: "text-emerald-400" },
        { num: 0, label: "Blocked", color: "text-rose-400" },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#0d0f12] text-xs text-white/80 select-none overflow-y-auto">
      {/* Top Open Tab Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#0a0c0e] px-2 pt-1.5">
        <div className="flex items-center">
          <div className="flex items-center gap-2 rounded-t-md border-t border-x border-white/[0.08] bg-[#12151a] px-3 py-1.5 text-[11.5px] font-medium text-white border-b-2 border-b-emerald-400">
            <Box className="h-3.5 w-3.5 text-emerald-400" />
            <span>Workload Overview</span>
            <X className="ml-1 h-3 w-3 text-white/40" />
          </div>
        </div>
        <div className="pr-2 pb-1">
          <RotateCw className="h-3 w-3 text-white/40" />
        </div>
      </div>

      <div className="p-4 space-y-3.5">
        {/* 10 Workload Cards (5x2 Grid matching real screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-white/[0.08] bg-[#121418] p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white">
                  {c.title}
                </span>
                <span className="font-mono text-sm font-bold text-white">
                  {c.count}
                </span>
              </div>
              <div className="mt-2 h-1 w-full rounded-full bg-white/[0.08] overflow-hidden">
                <div className={`h-full ${c.barWidth} ${c.barColor}`} />
              </div>
              <div className="mt-2.5 space-y-0.5 font-mono text-[9.5px]">
                {c.stats.map((s) => (
                  <div key={s.label} className="text-white/55 truncate">
                    <span className={`font-bold ${s.color}`}>{s.num}</span>{" "}
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Warnings & Restarts Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Recent Warnings */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-3.5">
            <div className="text-xs font-semibold text-white mb-2.5">
              Recent Warnings
            </div>
            <div className="divide-y divide-white/[0.05] font-mono text-[10px]">
              {[
                {
                  pod: "monitoring / observability-stack-loki-0",
                  age: "1 minute ago",
                },
                {
                  pod: "monitoring / observability-stack-loki-0",
                  age: "1 minute ago",
                },
                {
                  pod: "monitoring / prometheus-observability-stack-ku...",
                  age: "1 minute ago",
                },
                {
                  pod: "patrimonium / landing-87559df4c-jb9wg",
                  age: "1 minute ago",
                },
                {
                  pod: "monitoring / observability-stack-grafana-dff8f...",
                  age: "2 minutes ago",
                },
              ].map((w, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-1.5 gap-2"
                >
                  <span className="font-bold text-amber-400 shrink-0">
                    Unhealthy
                  </span>
                  <span className="text-white/75 truncate flex-1">{w.pod}</span>
                  <span className="text-white/40 shrink-0">{w.age}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Restarts */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-3.5">
            <div className="text-xs font-semibold text-white mb-2.5">
              Recent Restarts
            </div>
            <div className="divide-y divide-white/[0.05] font-mono text-[10px]">
              {[
                {
                  ns: "monitoring",
                  pod: "observability-stac...",
                  status: "Unknown (ExitCode: 255) (52x)",
                  age: "2 minutes ago",
                },
                {
                  ns: "cert-manager",
                  pod: "cert-manager-bd46f9c...",
                  status: "Completed (ExitCode: 0) (72x)",
                  age: "10 hours ago",
                },
                {
                  ns: "cert-manager",
                  pod: "cert-manager-cainjec...",
                  status: "Completed (ExitCode: 0) (77x)",
                  age: "10 hours ago",
                },
                {
                  ns: "monitoring",
                  pod: "observability-stack-...",
                  status: "Completed (ExitCode: 0) (20x)",
                  age: "10 hours ago",
                },
                {
                  ns: "argocd",
                  pod: "argocd-application-c...",
                  status: "Completed (ExitCode: 0) (20x)",
                  age: "10 hours ago",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-1.5 gap-2"
                >
                  <span className="text-white/45 w-20 truncate">{r.ns}</span>
                  <span className="text-[#38bdf8] truncate flex-1">{r.pod}</span>
                  <span className="text-rose-400 font-semibold shrink-0">
                    {r.status}
                  </span>
                  <span className="text-white/40 shrink-0">{r.age}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Abnormal Resource Usage */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-3.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">
              Abnormal Resource Usage
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[9.5px] text-white/55">
              <span className="rounded bg-white/[0.08] px-2 py-0.5 text-white">
                Limit
              </span>
              <span className="px-1.5">Request</span>
              <span className="ml-2 rounded bg-white/[0.08] px-1.5 py-0.5 text-white">
                95%
              </span>
              <span>90%</span>
              <span>80%</span>
              <span>70%</span>
            </div>
          </div>
          <div className="grid grid-cols-6 border-b border-white/[0.06] py-1.5 text-[9.5px] font-mono text-white/40">
            <div>Namespace</div>
            <div>Pod Name</div>
            <div>Container</div>
            <div>Metric</div>
            <div>Current Usage</div>
            <div className="text-right">Saturation %</div>
          </div>
          <div className="grid grid-cols-6 items-center pt-2 font-mono text-[10.5px]">
            <div className="text-white/65">caretta</div>
            <div className="text-[#38bdf8]">caretta-hjvlr</div>
            <div className="text-white/75">caretta</div>
            <div>
              <span className="rounded bg-purple-500/20 px-1.5 py-0.5 text-[9px] font-bold text-purple-300">
                MEMORY
              </span>
            </div>
            <div className="text-white/75">300Mi / Limit: 300Mi</div>
            <div className="text-right">
              <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[9.5px] font-bold text-white">
                100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
