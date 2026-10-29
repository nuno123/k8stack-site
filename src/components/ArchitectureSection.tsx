"use client";

import React from "react";
import { Check, X, Shield, Lock } from "lucide-react";

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
    <section id="sovereignty" className="py-16 lg:py-24 border-t border-white/[0.06] relative bg-[#090a0b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white text-balance">
            Built for sovereignty, not retrofitted
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/60">
            Unlike commercial tools that funnel cluster credentials through cloud intermediaries or lock features behind paid subscriptions, K8Stack operates purely on your workstation.
          </p>
        </div>

        {/* Comparison Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {/* Traditional SaaS Flow */}
          <div className="rounded-xl border border-white/[0.07] bg-surface p-6 text-xs font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-rose-400">
              <span className="font-semibold flex items-center gap-1.5">
                <X className="h-4 w-4" /> Traditional SaaS / Cloud Gateway
              </span>
              <span className="rounded bg-rose-500/10 px-2 py-0.5 text-[10px] text-rose-300">
                Data Egress Risk
              </span>
            </div>
            <div className="mt-4 space-y-3 text-white/50">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                <span>Workstation funnels manifests and telemetry to vendor servers</span>
              </div>
              <div className="flex items-center gap-3 text-rose-300/80">
                <div className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>Tokens, secrets and cluster topology retained in third-party databases</span>
              </div>
              <div className="flex items-center gap-3 text-rose-400 font-medium">
                <div className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span>Vendor AI processes cluster manifests on multi-tenant SaaS clouds</span>
              </div>
            </div>
          </div>

          {/* K8Stack Sovereign Flow */}
          <div className="rounded-xl border border-emerald-500/30 bg-surface p-6 text-xs font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-emerald-400">
              <span className="font-semibold flex items-center gap-1.5">
                <Check className="h-4 w-4" /> K8Stack Sovereign Desktop Architecture
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300 font-bold">
                100% Client-Side
              </span>
            </div>
            <div className="mt-4 space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Direct workstation mTLS (TLS/6443) straight to Kube-API</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-300">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Credentials never leave your OS Keychain and ~/.kube/config</span>
              </div>
              <div className="flex items-center gap-3 text-white font-medium">
                <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                <span>Local Ollama AI evaluates prompts in RAM with zero data retention</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="rounded-xl border border-white/[0.07] bg-surface overflow-hidden shadow-2xl">
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/[0.07] flex items-center justify-between">
            <h3 className="font-medium text-white text-sm sm:text-base">
              Competitive Breakdown
            </h3>
            <span className="text-xs font-mono text-white/40">SRE Security Audit</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-white/[0.06] bg-black/20 text-white/40 uppercase text-[10px]">
                <tr>
                  <th className="px-6 py-3.5">Capability / Requirement</th>
                  <th className="px-4 py-3.5 text-white font-bold">K8Stack</th>
                  <th className="px-4 py-3.5">Lens Desktop</th>
                  <th className="px-4 py-3.5">k9s CLI</th>
                  <th className="px-4 py-3.5">Datadog / SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-white/70">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-3.5 font-medium text-white">
                      <div>{row.feature}</div>
                      <div className="text-[10px] text-white/40 font-normal mt-0.5">{row.note}</div>
                    </td>
                    <td className="px-4 py-3.5 bg-white/[0.02]">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <Check className="h-4 w-4" /> Yes
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-white/50">
                      {row.lens ? (
                        <span>Yes</span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <X className="h-3.5 w-3.5" /> No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-white/50">
                      {row.k9s ? (
                        <span>Yes</span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <X className="h-3.5 w-3.5" /> No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-white/50">
                      {row.saas ? (
                        <span>Yes</span>
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
