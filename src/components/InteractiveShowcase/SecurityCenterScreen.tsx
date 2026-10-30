"use client";

import React from "react";
import {
  ShieldAlert,
  AlertTriangle,
  Network,
  KeyRound,
  Search,
  RotateCw,
} from "lucide-react";

export function SecurityCenterScreen() {
  const auditRows = [
    {
      name: "svclb-traefik-cd6a1f9b",
      kind: "DAEMONSET",
      ns: "KUBE-SYSTEM",
      sev: "HIGH",
      score: "0%",
      flags: ["ROOT", "ESC", "NO-LIM", "NO-NETPOL"],
    },
    {
      name: "observability-stack-prometheus-node-exporter",
      kind: "DAEMONSET",
      ns: "MONITORING",
      sev: "CRITIC...",
      score: "0%",
      flags: ["ESC", "NO-LIM", "HOST-NET", "HOST-PID", "NO-NETPOL"],
    },
    {
      name: "caretta",
      kind: "DAEMONSET",
      ns: "CARETTA",
      sev: "CRITIC...",
      score: "25%",
      flags: ["PRIV", "ROOT", "ESC", "NO-NETPOL"],
    },
    {
      name: "coredns",
      kind: "DEPLOYMENT",
      ns: "KUBE-SYSTEM",
      sev: "HIGH",
      score: "40%",
      flags: ["ROOT", "NO-LIM", "NO-NETPOL"],
    },
    {
      name: "local-path-provisioner",
      kind: "DEPLOYMENT",
      ns: "KUBE-SYSTEM",
      sev: "HIGH",
      score: "45%",
      flags: ["ROOT", "ESC", "NO-LIM", "NO-NETPOL"],
    },
    {
      name: "observability-stack-grafana",
      kind: "DEPLOYMENT",
      ns: "MONITORING",
      sev: "MEDIUM",
      score: "45%",
      flags: ["NO-LIM", "NO-NETPOL"],
    },
  ];

  const flagStyle = (flag: string) => {
    if (flag === "PRIV" || flag === "HOST-NET" || flag === "HOST-PID")
      return "bg-rose-500/25 text-rose-300 border-rose-500/40";
    if (flag === "ROOT" || flag === "ESC")
      return "bg-amber-500/25 text-amber-300 border-amber-500/40";
    if (flag === "NO-NETPOL")
      return "bg-purple-500/20 text-purple-300 border-purple-500/30";
    return "bg-yellow-500/15 text-yellow-300 border-yellow-500/30";
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#0d0f12] text-xs text-white/80 p-4 space-y-3.5 select-none overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 flex size-7 items-center justify-center rounded-md border border-rose-500/30 bg-rose-500/10 text-rose-400">
            <ShieldAlert className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">Security Center</span>
              <span className="rounded bg-rose-500 px-1.5 py-0.2 text-[9px] font-mono font-bold text-white">
                DEVSECOPS
              </span>
              <span className="rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.2 text-[9px] font-mono text-white/70">
                CIS &amp; PSS COMPLIANT
              </span>
            </div>
            <div className="text-[10.5px] text-white/45 mt-0.5">
              Continuous posture assessment &amp; attack surface reduction · Context:{" "}
              <span className="text-[#38bdf8] font-mono">patrimonium</span> · NS: _all_
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex size-7 items-center justify-center rounded border border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8]"
        >
          <RotateCw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* 4 Posture Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Card 1: Security Score Circular Gauge */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-3 flex items-center gap-3">
          <div className="relative flex size-14 shrink-0 items-center justify-center">
            <svg className="size-14 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="3.5"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3.5"
                strokeDasharray="65, 100"
              />
            </svg>
            <span className="absolute font-mono text-xs font-bold text-amber-400">
              65%
            </span>
          </div>
          <div className="min-w-0">
            <div className="text-[9px] font-mono uppercase text-white/40">
              SECURITY SCORE
            </div>
            <div className="text-[11px] font-bold text-amber-400 leading-tight mt-0.5">
              PSS Baseline
              <br />
              (Moderate)
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1 text-[8.5px] font-mono font-bold">
              <span className="rounded bg-rose-500 px-1 text-white">3 CRIT</span>
              <span className="rounded bg-orange-500 px-1 text-white">17 HIGH</span>
              <span className="rounded bg-amber-500 px-1 text-black">80 MED</span>
              <span className="rounded bg-[#3b82f6] px-1 text-white">18 LOW</span>
            </div>
          </div>
        </div>

        {/* Card 2: Execution Privilege */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-3">
          <div className="flex items-center justify-between text-[9.5px] font-mono uppercase text-white/45">
            <span>EXECUTION PRIVILEGE</span>
            <AlertTriangle className="h-3 w-3 text-rose-400" />
          </div>
          <div className="mt-2.5 space-y-1.5 text-[11px]">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-rose-400">1</span>
              <span className="text-white/60 text-[10.5px]">Privileged Containers</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-amber-400">14</span>
              <span className="text-white/60 text-[10.5px]">Running as Root (UID 0)</span>
            </div>
          </div>
        </div>

        {/* Card 3: Host Escape Risks */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-3">
          <div className="flex items-center justify-between text-[9.5px] font-mono uppercase text-white/45">
            <span>HOST ESCAPE RISKS</span>
            <ShieldAlert className="h-3 w-3 text-rose-400" />
          </div>
          <div className="mt-2.5 space-y-1.5 text-[11px]">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-rose-400">2</span>
              <span className="text-white/60 text-[10.5px]">Host Network/PID/IPC</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-amber-400">14</span>
              <span className="text-white/60 text-[10.5px]">
                Privilege Escalation Allowed
              </span>
            </div>
          </div>
        </div>

        {/* Card 4: Isolation & Quotas */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-3">
          <div className="flex items-center justify-between text-[9.5px] font-mono uppercase text-white/45">
            <span>ISOLATION &amp; QUOTAS</span>
            <Network className="h-3 w-3 text-rose-400" />
          </div>
          <div className="mt-2.5 space-y-1.5 text-[11px]">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-rose-400">13</span>
              <span className="text-white/60 text-[10.5px]">Unprotected Namespaces</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-base font-bold text-amber-400">37</span>
              <span className="text-white/60 text-[10.5px]">
                Workloads without Limits (DoS)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-tabs + Filter bar */}
      <div className="border-b border-white/[0.07] flex items-center gap-5 text-[11.5px]">
        <div className="flex items-center gap-1.5 border-b-2 border-[#3b82f6] pb-2 font-medium text-white">
          <ShieldAlert className="h-3.5 w-3.5 text-rose-400" />
          <span>Workloads Audit</span>
          <span className="rounded-full bg-rose-500/20 px-1.5 py-0.2 text-[9.5px] font-mono text-rose-300">
            37
          </span>
        </div>
        <div className="flex items-center gap-1.5 pb-2 text-white/50">
          <Network className="h-3.5 w-3.5 text-rose-400/70" />
          <span>Network Isolation</span>
          <span className="rounded-full bg-rose-500/20 px-1.5 py-0.2 text-[9.5px] font-mono text-rose-300">
            14
          </span>
        </div>
        <div className="flex items-center gap-1.5 pb-2 text-white/50">
          <KeyRound className="h-3.5 w-3.5 text-[#38bdf8]/70" />
          <span>RBAC &amp; Privileged Accounts</span>
          <span className="rounded-full bg-[#38bdf8]/20 px-1.5 py-0.2 text-[9.5px] font-mono text-[#38bdf8]">
            68
          </span>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex items-center gap-2 text-[11px]">
        <div className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-[#121418] px-2.5 py-1 text-white/40 w-48">
          <Search className="h-3 w-3" />
          <span>Search name, ns, role...</span>
        </div>
        <div className="rounded-md border border-white/[0.08] bg-[#121418] px-2.5 py-1 text-white/70">
          All Severities ⌄
        </div>
        <div className="rounded-md border border-white/[0.08] bg-[#121418] px-2.5 py-1 text-white/70">
          All Kinds ⌄
        </div>
      </div>

      {/* Audit Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[10.5px]">
          <thead className="border-b border-white/[0.06] font-mono text-[9.5px] uppercase text-white/40">
            <tr>
              <th className="py-1.5 pr-2">WORKLOAD / KIND</th>
              <th className="px-2 py-1.5">NAMESPACE</th>
              <th className="px-2 py-1.5">SEVERITY</th>
              <th className="px-2 py-1.5">SECURITY SCORE</th>
              <th className="px-2 py-1.5">DETECTED RISK FLAGS</th>
              <th className="px-2 py-1.5">NETWORKPOLICY</th>
              <th className="py-1.5 pl-2 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05] font-mono">
            {auditRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02]">
                <td className="py-2 pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[8.5px] text-white/55">
                      {row.kind}
                    </span>
                    <span className="font-semibold text-white truncate max-w-[180px]">
                      {row.name}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <span className="rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-2 py-0.5 text-[9px] text-[#38bdf8]">
                    {row.ns}
                  </span>
                </td>
                <td className="px-2 py-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                      row.sev.startsWith("CRIT")
                        ? "bg-rose-500 text-white"
                        : row.sev === "HIGH"
                        ? "bg-orange-500 text-white"
                        : "bg-amber-500 text-black"
                    }`}
                  >
                    {row.sev}
                  </span>
                </td>
                <td className="px-2 py-2 font-bold text-rose-400">{row.score}</td>
                <td className="px-2 py-2">
                  <div className="flex flex-wrap gap-1">
                    {row.flags.map((flag) => (
                      <span
                        key={flag}
                        className={`rounded border px-1.5 py-0.2 text-[8.5px] font-bold ${flagStyle(
                          flag
                        )}`}
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-2 py-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.05] px-2 py-0.5 text-[9px] text-white/70">
                    <span className="size-1.5 rounded-full bg-rose-500" />
                    MISSING
                  </span>
                </td>
                <td className="py-2 pl-2 text-right">
                  <button
                    type="button"
                    className="rounded border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9.5px] font-medium text-rose-300 hover:bg-rose-500/25"
                  >
                    Inspect &amp; Remediate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
