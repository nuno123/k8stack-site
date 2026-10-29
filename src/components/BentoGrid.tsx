"use client";

import React from "react";
import {
  Network,
  Bot,
  Activity,
  KeyRound,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
  Database,
  Lock,
  GitBranch,
  Split,
  FileCode,
  Globe,
  Radio,
} from "lucide-react";

export function BentoGrid() {
  const features = [
    {
      title: "Real-Time Workload Topology",
      description: "Render complex namespace dependencies, Ingress routes, and multi-container Pods at 60 FPS with zero lag.",
      icon: Network,
      tag: "Topology",
      color: "text-[#326ce5]",
    },
    {
      title: "Zero-Data-Leak AI Copilot",
      description: "Triage incidents using local Ollama (Llama 3.2, Qwen 2.5, DeepSeek R1). No manifests or secrets ever leave your machine.",
      icon: Bot,
      tag: "Local AI",
      color: "text-emerald-400",
    },
    {
      title: "CrashLoop & OOM Triage",
      description: "Instant detection of exit code 137 (OOMKilled) and 139 (SegFault) with automated resource limit remediation diffs.",
      icon: Activity,
      tag: "Incident RCA",
      color: "text-rose-400",
    },
    {
      title: "PTY Terminal Multiplexer",
      description: "Native xterm.js terminal with multi-pod streaming logs, raw SPDY shell exec sessions, and customizable baud rates.",
      icon: Terminal,
      tag: "Terminal",
      color: "text-amber-400",
    },
    {
      title: "Direct Workstation mTLS",
      description: "All requests go straight from your machine to cluster API 6443. No SaaS intermediary, no central proxy, no telemetry.",
      icon: ShieldCheck,
      tag: "Zero Proxy",
      color: "text-emerald-400",
    },
    {
      title: "Dynamic Port-Forwarding",
      description: "Manage background tunnels, service endpoints, and database forwarders with one-click toggles and port conflict detection.",
      icon: Radio,
      tag: "Networking",
      color: "text-sky-400",
    },
    {
      title: "Enterprise Kubeconfig & Cloud IAM",
      description: "Direct authentication via Azure CLI (az aks get-credentials), AWS IAM, and Google Cloud SDK with zero token caching.",
      icon: KeyRound,
      tag: "Cloud IAM",
      color: "text-indigo-400",
    },
    {
      title: "Live Prometheus Metrics",
      description: "Day-Zero observability with high-density sparklines, CPU/RAM saturation gauges, and node capacity tracking.",
      icon: Zap,
      tag: "Metrics",
      color: "text-amber-400",
    },
    {
      title: "Monaco YAML Diff Studio",
      description: "Full Monaco Editor integration with Kubernetes schema auto-completion, live diffing, and declarative apply.",
      icon: FileCode,
      tag: "Editor",
      color: "text-purple-400",
    },
    {
      title: "Multi-Cluster Switching",
      description: "Seamlessly jump across multi-cloud environments (AKS, EKS, GKE, OKE, Talos, k3s) without re-authenticating.",
      icon: Split,
      tag: "Multi-Cloud",
      color: "text-blue-400",
    },
    {
      title: "Zero Remote Telemetry",
      description: "No tracking cookies, no analytical beacons, no session recordings. 100% self-sovereign and private by default.",
      icon: Lock,
      tag: "Privacy",
      color: "text-emerald-400",
    },
    {
      title: "Air-Gapped & Offline Ready",
      description: "Engineered to operate inside isolated, high-security, or defense-grade networks with local AI inference.",
      icon: Globe,
      tag: "Air-Gapped",
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Orca Style) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white text-balance">
            Sovereign, end to end.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/60">
            Every feature engineered from first principles for SREs who need uncompromising speed, precision, and privacy.
          </p>
        </div>

        {/* 12-Item Grid (Orca Grid Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-xl border border-white/[0.07] bg-surface p-5 transition-colors hover:border-white/[0.14]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <Icon className={`h-4 w-4 ${f.color}`} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-medium text-white tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
