"use client";

import React from "react";
import { ShieldAlert, AlertTriangle, ShieldCheck, Check, ArrowRight, Lock } from "lucide-react";

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
      sev: "CRIT",
      score: "0%",
      flags: ["ESC", "NO-LIM", "HOST-NET", "HOST-PID", "NO-NETPOL"],
    },
    {
      name: "caretta",
      kind: "DAEMONSET",
      ns: "CARETTA",
      sev: "CRIT",
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
      name: "postgres-backup",
      kind: "CRONJOB",
      ns: "PATRIMONIUM",
      sev: "HIGH",
      score: "45%",
      flags: ["ROOT", "ESC", "NO-LIM", "NO-NETPOL"],
    },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-[#0a0c0e] font-mono text-xs text-white/80 p-5 space-y-4 overflow-y-auto select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.06] gap-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-rose-500 shrink-0" />
          <span className="font-bold text-white text-sm">Security Center</span>
          <span className="rounded bg-rose-500/20 px-1.5 py-0.2 text-[10px] font-bold text-rose-300">
            DEVSECOPS
          </span>
          <span className="rounded bg-white/[0.06] px-1.5 py-0.2 text-[10px] text-white/60">
            CIS &amp; PSS COMPLIANT
          </span>
        </div>
        <div className="text-[11px] text-white/40">
          Continuous posture assessment • Context: <strong className="text-white">patrimonium</strong>
        </div>
      </div>

      {/* 4 Score Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Security Score */}
        <div className="rounded-xl border border-amber-500/30 bg-[#121012] p-3.5">
          <div className="text-[10px] uppercase text-white/40">Security Score</div>
          <div className="mt-2 flex items-center gap-3">
            <div className="relative flex items-center justify-center size-12 rounded-full border-2 border-amber-400 font-bold text-amber-400 text-sm">
              65%
            </div>
            <div>
              <div className="font-bold text-white text-xs">PSS Baseline</div>
              <div className="text-[10px] text-amber-400">(Moderate)</div>
            </div>
          </div>
          <div className="mt-2 flex gap-1 text-[9px] font-bold">
            <span className="rounded bg-rose-500/30 text-rose-300 px-1">3 CRIT</span>
            <span className="rounded bg-amber-500/30 text-amber-300 px-1">17 HIGH</span>
            <span className="rounded bg-yellow-500/30 text-yellow-300 px-1">80 MED</span>
          </div>
        </div>

        {/* Execution Privilege */}
        <div className="rounded-xl border border-rose-500/30 bg-[#120e10] p-3.5">
          <div className="text-[10px] uppercase text-rose-300 font-semibold">Execution Privilege</div>
          <div className="mt-2 text-xl font-bold text-rose-400">1</div>
          <div className="text-[10px] text-white/50">Privileged Containers</div>
          <div className="mt-2 text-[10px] text-rose-300/80">
            <strong>14</strong> Running as Root (UID 0)
          </div>
        </div>

        {/* Host Escape */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="text-[10px] uppercase text-white/40">Host Escape Risks</div>
          <div className="mt-2 text-xl font-bold text-amber-400">2</div>
          <div className="text-[10px] text-white/50">Host Network / PID / IPC</div>
          <div className="mt-2 text-[10px] text-amber-300/80">
            <strong>14</strong> Privilege Escalation Allowed
          </div>
        </div>

        {/* Isolation & Quotas */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111214] p-3.5">
          <div className="text-[10px] uppercase text-white/40">Isolation &amp; Quotas</div>
          <div className="mt-2 text-xl font-bold text-white">13</div>
          <div className="text-[10px] text-white/50">Unprotected Namespaces</div>
          <div className="mt-2 text-[10px] text-rose-400 font-semibold">
            <strong>37</strong> Workloads without Limits (DoS)
          </div>
        </div>
      </div>

      {/* Audit Table */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111214] overflow-hidden">
        <div className="px-4 py-2.5 bg-[#141619] border-b border-white/[0.06] flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">Workloads Audit (37)</span>
            <span className="text-white/40">Network Isolation (14)</span>
            <span className="text-white/40">RBAC &amp; Privileged (68)</span>
          </div>
          <span className="text-white/40 font-mono text-[10px]">Filter: All Severities</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px]">
            <thead className="border-b border-white/[0.06] text-white/40 uppercase text-[10px]">
              <tr>
                <th className="px-4 py-2">Workload / Kind</th>
                <th className="px-3 py-2">Namespace</th>
                <th className="px-2 py-2">Severity</th>
                <th className="px-2 py-2">Score</th>
                <th className="px-3 py-2">Detected Risk Flags</th>
                <th className="px-3 py-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {auditRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="px-4 py-2.5 font-medium text-white">
                    <div>{row.name}</div>
                    <div className="text-[9px] text-white/40 mt-0.5">{row.kind}</div>
                  </td>
                  <td className="px-3 py-2 text-white/50">{row.ns}</td>
                  <td className="px-2 py-2">
                    <span
                      className={`rounded px-1.5 py-0.5 font-bold text-[9px] ${
                        row.sev === "CRIT"
                          ? "bg-rose-500/20 text-rose-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {row.sev}
                    </span>
                  </td>
                  <td className="px-2 py-2 font-bold text-white/80">{row.score}</td>
                  <td className="px-3 py-2">
                    <div className="flex flex-wrap gap-1">
                      {row.flags.map((flag) => (
                        <span
                          key={flag}
                          className="rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 px-1 py-0.2 text-[9px] font-semibold"
                        >
                          {flag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button className="rounded bg-rose-600/80 hover:bg-rose-500 px-2.5 py-1 text-[10px] text-white font-medium transition-colors">
                      Inspect &amp; Remediate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
