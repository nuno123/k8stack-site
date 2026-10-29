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
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

export function BentoGrid() {
  return (
    <section id="features" className="py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <Zap className="h-3.5 w-3.5" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Architected for High-Density Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Engineered from first principles for SREs and DevSecOps teams who need absolute control, zero latency, and uncompromising data privacy.
          </p>
        </div>

        {/* Bento Grid Layout (2 large cards on top, 3 cards on bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Card 1: Interactive Topology Engine (Col 7) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#111315] p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all group relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#326ce5]/10 blur-3xl" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#326ce5]/20 text-[#38bdf8] border border-[#326ce5]/30">
                  <Network className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8] font-semibold">
                  01. Topology Engine
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Real-Time Workload Topology &amp; Dependency Discovery
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Render cluster-wide relational graphs with zero frame drops. Seamlessly trace network paths from Ingress controllers down to Service endpoints and multi-container Pods with visual health states.
              </p>
            </div>

            {/* Visual Micro-Mockup */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090b0c] p-4 font-mono text-xs text-neutral-300">
              <div className="flex items-center justify-between text-[11px] text-neutral-500 pb-2 border-b border-white/[0.06]">
                <span>React Flow Graph • 60 FPS Canvas</span>
                <span className="text-emerald-400">Autosynced via Watch API</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="rounded-lg border border-white/[0.06] bg-[#141619] p-2">
                  <div className="text-neutral-500">Ingress</div>
                  <div className="text-white font-semibold mt-1">nginx-ingress</div>
                  <div className="text-[10px] text-emerald-400">12 Routes</div>
                </div>
                <div className="rounded-lg border border-[#326ce5]/40 bg-[#326ce5]/10 p-2">
                  <div className="text-neutral-400">Services</div>
                  <div className="text-[#38bdf8] font-semibold mt-1">auth-svc, api</div>
                  <div className="text-[10px] text-[#38bdf8]">ClusterIP</div>
                </div>
                <div className="rounded-lg border border-rose-500/40 bg-rose-950/20 p-2">
                  <div className="text-rose-300">Workload</div>
                  <div className="text-rose-200 font-semibold mt-1">payment-svc</div>
                  <div className="text-[10px] text-rose-400 font-bold">1 CrashLoop</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Sovereign AI Copilot (Col 5) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#111315] p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all group relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Bot className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  02. Zero-Leak AI Triage
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Air-Gapped SRE Copilot (Local Ollama &amp; Groq)
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Zero manifest leakage. Execute deep RCA and diagnostic analysis directly on your local workstation using Ollama (Llama 3.2, Qwen 2.5 Coder, DeepSeek R1) without sending company secrets to external LLMs.
              </p>
            </div>

            {/* Visual Micro-Mockup */}
            <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#090b0c] p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px]">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Sovereignty Verification</span>
                </span>
                <span className="text-emerald-400 font-bold">100% Workstation</span>
              </div>
              <div className="mt-2 text-neutral-300 text-[11px] space-y-1">
                <div>Model: <span className="text-[#38bdf8]">llama3.2:3b-instruct-q4</span></div>
                <div>Telemetry Egress: <span className="text-emerald-400 font-bold">0 bytes sent</span></div>
                <div>Latency: <span className="text-white">280ms local prompt eval</span></div>
              </div>
            </div>
          </div>

          {/* Card 3: Deep Pod RCA (Col 4) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/[0.08] bg-[#111315] p-6 flex flex-col justify-between hover:border-white/[0.18] transition-all group">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 mb-3">
                <Activity className="h-4 w-4" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-rose-400 font-semibold">
                03. Incident Diagnostics
              </span>
              <h4 className="text-lg font-bold text-white mt-1">Deep Pod RCA &amp; CrashLoop Triage</h4>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Automated detection of exit codes (137 OOM, 139 SegFault, 1 Crash). Instantly generates ready-to-apply remediation manifests with memory/CPU limit diffs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Exit Code Analysis</span>
              <span className="text-rose-400 font-semibold">OOMKilled Auto-Diff</span>
            </div>
          </div>

          {/* Card 4: Multi-Cloud Kubeconfig (Col 4) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/[0.08] bg-[#111315] p-6 flex flex-col justify-between hover:border-white/[0.18] transition-all group">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-3">
                <KeyRound className="h-4 w-4" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-400 font-semibold">
                04. Multi-Cloud Contexts
              </span>
              <h4 className="text-lg font-bold text-white mt-1">Enterprise Kubeconfig &amp; IAM</h4>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Connect straight to Azure AKS, AWS EKS, Google GKE, and on-premises clusters. Executes existing native credentials and Azure CLI SSO without central proxy relays.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Credential Security</span>
              <span className="text-emerald-400 font-semibold">Workstation Keychain</span>
            </div>
          </div>

          {/* Card 5: PTY Terminal Studio (Col 4) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/[0.08] bg-[#111315] p-6 flex flex-col justify-between hover:border-white/[0.18] transition-all group">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                05. Terminal Engine
              </span>
              <h4 className="text-lg font-bold text-white mt-1">PTY Studio &amp; Port-Forwarding</h4>
              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                Integrated node-pty terminal emulator with multi-container stdout streaming, raw SPDY exec sessions, and automated background tunnel port-forwarding.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Streaming Engine</span>
              <span className="text-[#38bdf8] font-semibold">xterm.js + WebSockets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
