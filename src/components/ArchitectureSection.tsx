"use client";

import React from "react";
import { Shield, Check, X, Lock, Server, Cpu, ExternalLink } from "lucide-react";

export function ArchitectureSection() {
  const comparison = [
    {
      feature: "Zero Remote Telemetry & Tracking",
      k8stack: true,
      lens: false,
      k9s: true,
      saas: false,
      note: "K8Stack sends 0 telemetry beacons or analytical cookies.",
    },
    {
      feature: "Direct Workstation-to-Kube API (No Proxy)",
      k8stack: true,
      lens: false,
      k9s: true,
      saas: false,
      note: "Direct mTLS connection on port 6443 via your native kubeconfig.",
    },
    {
      feature: "Air-Gapped Sovereign AI SRE (Ollama/Groq)",
      k8stack: true,
      lens: false,
      k9s: false,
      saas: false,
      note: "Local model inference without sending cluster manifests to third parties.",
    },
    {
      feature: "Interactive Workload Topology Canvas",
      k8stack: true,
      lens: true,
      k9s: false,
      saas: true,
      note: "Real-time dependency graph from Ingress to Pods with minimap.",
    },
    {
      feature: "Integrated High-Performance PTY Terminal",
      k8stack: true,
      lens: true,
      k9s: true,
      saas: false,
      note: "Multi-pod streaming logs and interactive pod exec shell.",
    },
    {
      feature: "100% Open Source (MIT) & $0 License Cost",
      k8stack: true,
      lens: false,
      k9s: true,
      saas: false,
      note: "No commercial license paywalls, seat fees, or forced cloud logins.",
    },
  ];

  return (
    <section id="sovereignty" className="py-16 lg:py-24 border-t border-white/[0.06] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <Shield className="h-3.5 w-3.5" />
            <span>Security-First &amp; SecOps Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Your Clusters. Your Secrets. 100% Client-Side.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Unlike commercial tools that funnel cluster credentials through cloud intermediaries or lock features behind paid subscriptions, K8Stack operates purely on your workstation.
          </p>
        </div>

        {/* Architectural Flow Diagram Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Traditional SaaS Flow */}
          <div className="rounded-2xl border border-rose-500/20 bg-[#120e10] p-6 text-xs font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-rose-500/20 text-rose-400">
              <span className="font-bold flex items-center gap-1.5">
                <X className="h-4 w-4" /> Traditional SaaS / Proprietary Gateway
              </span>
              <span className="rounded bg-rose-500/10 px-2 py-0.5 text-[10px]">Data Egress Risk</span>
            </div>
            <div className="mt-4 space-y-3 text-neutral-400">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-neutral-600" />
                <span>Workstation sends manifests and metrics to Cloud SaaS Proxy</span>
              </div>
              <div className="flex items-center gap-3 text-rose-300">
                <div className="h-2 w-2 rounded-full bg-rose-400" />
                <span>Cluster tokens, secrets &amp; PII stored on vendor infrastructure</span>
              </div>
              <div className="flex items-center gap-3 text-rose-400 font-semibold">
                <div className="h-2 w-2 rounded-full bg-rose-500" />
                <span>Vendor AI runs on multi-tenant servers with telemetry retention</span>
              </div>
            </div>
          </div>

          {/* K8Stack Sovereign Flow */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#0c1410] p-6 text-xs font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 text-emerald-400">
              <span className="font-bold flex items-center gap-1.5">
                <Check className="h-4 w-4" /> K8Stack Sovereign Desktop Architecture
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300 font-bold">
                100% Client-Side
              </span>
            </div>
            <div className="mt-4 space-y-3 text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Direct mTLS TLS/6443 from Workstation to Target Kube-API</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-300">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Credentials never leave your OS Keychain / ~/.kube/config</span>
              </div>
              <div className="flex items-center gap-3 text-white font-semibold">
                <div className="h-2 w-2 rounded-full bg-[#38bdf8]" />
                <span>Local Ollama AI executes in RAM without external data leakage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#111315] overflow-hidden shadow-2xl">
          <div className="px-6 py-4 bg-[#141619] border-b border-white/[0.08] flex items-center justify-between">
            <h3 className="font-bold text-white text-sm sm:text-base">
              Competitive &amp; Architectural Breakdown
            </h3>
            <span className="text-xs font-mono text-neutral-400">Audited October 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-white/[0.08] bg-[#0c0e10] text-neutral-400 uppercase text-[10px]">
                <tr>
                  <th className="px-6 py-3.5">Capability / Requirement</th>
                  <th className="px-4 py-3.5 text-[#38bdf8] font-bold">K8Stack</th>
                  <th className="px-4 py-3.5">Lens Desktop</th>
                  <th className="px-4 py-3.5">k9s CLI</th>
                  <th className="px-4 py-3.5">Datadog / SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-neutral-300">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-3 font-medium text-white">
                      <div>{row.feature}</div>
                      <div className="text-[10px] text-neutral-500 font-normal mt-0.5">{row.note}</div>
                    </td>
                    <td className="px-4 py-3 bg-[#326ce5]/5">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <Check className="h-4 w-4" /> Yes
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {row.lens ? (
                        <span className="text-neutral-300">Yes</span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <X className="h-3.5 w-3.5" /> No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {row.k9s ? (
                        <span className="text-neutral-300">Yes</span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <X className="h-3.5 w-3.5" /> No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {row.saas ? (
                        <span className="text-neutral-300">Yes</span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <X className="h-3.5 w-3.5" /> No
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
