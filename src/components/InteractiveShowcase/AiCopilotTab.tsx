"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Check,
  RotateCcw,
  Bot,
  Terminal,
  Cpu,
  Lock,
  ArrowRight,
  FileCode,
} from "lucide-react";

export function AiCopilotTab() {
  const [fixed, setFixed] = useState(false);
  const [activeModel, setActiveModel] = useState<string>("ollama-llama3.2");

  const models = [
    { id: "ollama-llama3.2", name: "Ollama: Llama 3.2 3B", badge: "Air-Gapped Local" },
    { id: "ollama-qwen2.5", name: "Ollama: Qwen 2.5 Coder 7B", badge: "Local Specialist" },
    { id: "groq-r1", name: "Groq: DeepSeek R1 Distill", badge: "Zero Data Retention" },
  ];

  return (
    <div className="flex flex-col h-full min-h-[500px] w-full bg-[#0a0c0e] font-mono text-xs">
      {/* Top AI Status Banner */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#111315]/80 px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#326ce5]/20 text-[#38bdf8] border border-[#326ce5]/30">
            <Bot className="h-3.5 w-3.5" />
          </div>
          <span className="font-semibold text-white">AI SRE Incident Diagnostic</span>
          <span className="text-neutral-500">•</span>
          <span className="text-rose-400 font-semibold">Incident #INC-8921</span>
        </div>

        {/* Model Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-neutral-400 text-[11px] hidden sm:inline">Engine:</span>
          <div className="flex rounded-lg border border-white/[0.08] bg-[#0c0e10] p-0.5">
            {models.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveModel(m.id)}
                className={`rounded px-2 py-1 text-[11px] transition-colors ${
                  activeModel === m.id
                    ? "bg-[#326ce5] text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {m.name.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Sovereign Privacy Pill */}
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[10px] text-emerald-400 font-semibold">
          <Lock className="h-3 w-3" />
          <span>Workstation Air-Gapped (Zero Manifest Egress)</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-y-auto">
        {/* Left: Incident Raw Logs & Context (5 cols) */}
        <div className="lg:col-span-5 p-4 border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-[#0c0e10] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[11px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3 w-3 text-neutral-400" />
                <span>Container Stderr & Exit Telemetry</span>
              </span>
              <span className="text-rose-400 font-bold">Exit Code: 137</span>
            </div>

            <div className="mt-3 rounded-lg border border-white/[0.06] bg-[#08090a] p-3 text-[11px] leading-relaxed text-neutral-300 space-y-1 font-mono overflow-x-auto">
              <div className="text-neutral-500">[22:18:01.402] Initializing Spring Boot PaymentGateway...</div>
              <div className="text-neutral-500">[22:18:02.118] Connected to redis-master-0:6379</div>
              <div className="text-neutral-400">[22:18:03.980] Batch transaction queue spike: +8,420 msgs</div>
              <div className="text-amber-400">[22:18:04.210] JVM Garbage Collector pausing world (98.2% heap)</div>
              <div className="text-rose-400 font-semibold">
                [22:18:04.490] [K8S-KERNEL] oom-killer: killed process 14022 (java) total-vm:840212kB, anon-rss:524180kB
              </div>
              <div className="text-rose-500 font-bold">
                [22:18:04.501] Container payment-service terminated. Reason: OOMKilled
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
              <div className="rounded border border-white/[0.06] bg-[#111315] p-2">
                <div className="text-neutral-500">Pod Name</div>
                <div className="text-neutral-200 truncate font-semibold">payment-service-7d8b</div>
              </div>
              <div className="rounded border border-white/[0.06] bg-[#111315] p-2">
                <div className="text-neutral-500">Node</div>
                <div className="text-neutral-200 truncate font-semibold">aks-worker-pool-2</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
            <span>Model: Ollama Local (3.2B)</span>
            <span className="text-emerald-400">Inference Time: 340ms</span>
          </div>
        </div>

        {/* Right: AI Root Cause Analysis & Remediation Diff (7 cols) */}
        <div className="lg:col-span-7 p-4 bg-[#0a0c0e] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
              <Sparkles className="h-4 w-4 text-[#38bdf8]" />
              <span className="text-xs font-semibold text-white">
                Sovereign SRE Root Cause & Remediation Plan
              </span>
            </div>

            {/* AI Explanation Box */}
            <div className="mt-3 rounded-lg border border-[#326ce5]/30 bg-[#326ce5]/5 p-3 text-neutral-200 leading-relaxed text-xs">
              <p>
                <strong className="text-white">Diagnosis:</strong> Container exited with status{" "}
                <span className="text-rose-400 font-semibold">137 (OOMKilled)</span>. The JVM allocated
                heap space beyond the cgroup boundary during a batch queue spike (peak: 512Mi limit exceeded).
              </p>
              <p className="mt-2 text-neutral-300">
                <strong className="text-[#10b981]">Recommended Action:</strong> Scale container memory
                limit from <code className="text-rose-400 font-bold">512Mi</code> to{" "}
                <code className="text-emerald-400 font-bold">1Gi</code> and set max JVM heap to{" "}
                <code className="text-neutral-100 font-mono">-XX:MaxRAMPercentage=75.0</code>.
              </p>
            </div>

            {/* Manifest YAML Remediation Diff */}
            <div className="mt-3 rounded-lg border border-white/[0.08] bg-[#0c0e10] p-3 text-xs overflow-x-auto">
              <div className="flex items-center justify-between pb-2 text-[10px] text-neutral-400 border-b border-white/[0.06]">
                <span className="flex items-center gap-1">
                  <FileCode className="h-3 w-3 text-neutral-400" />
                  <span>k8s/apps/payment-deployment.yaml</span>
                </span>
                <span className="text-emerald-400">Unified Diff</span>
              </div>
              <pre className="mt-2 text-[11px] leading-5 font-mono">
                <span className="text-neutral-500"> spec:</span>{"\n"}
                <span className="text-neutral-500">   containers:</span>{"\n"}
                <span className="text-neutral-500">     - name: payment-service</span>{"\n"}
                <span className="text-neutral-500">       resources:</span>{"\n"}
                <span className="text-neutral-500">         limits:</span>{"\n"}
                <span className="text-neutral-500">           cpu: &quot;500m&quot;</span>{"\n"}
                <span className="text-rose-400 bg-rose-950/40 block px-1 -mx-1">
                  -           memory: &quot;512Mi&quot;
                </span>
                <span className="text-emerald-400 bg-emerald-950/40 block px-1 -mx-1 font-semibold">
                  +           memory: &quot;1Gi&quot;
                </span>
                <span className="text-neutral-500">         requests:</span>{"\n"}
                <span className="text-neutral-500">           cpu: &quot;200m&quot;</span>{"\n"}
                <span className="text-neutral-500">           memory: &quot;256Mi&quot;</span>
              </pre>
            </div>
          </div>

          {/* Interactive Action Bar */}
          <div className="mt-4 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-[11px] text-neutral-300">
                Zero Cloud Leak: Local inference validated
              </span>
            </div>

            <div className="flex items-center gap-2">
              {fixed ? (
                <button
                  type="button"
                  onClick={() => setFixed(false)}
                  className="flex items-center gap-1.5 rounded-lg border border-emerald-500/50 bg-emerald-950/50 px-3 py-1.5 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Applied! Pod Restarted (Healthy 1/1)</span>
                  <RotateCcw className="h-3 w-3 ml-1 opacity-70" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setFixed(true)}
                  className="flex items-center gap-1.5 rounded-lg bg-[#326ce5] hover:bg-[#2557bd] px-3.5 py-1.5 text-white text-xs font-semibold shadow-lg shadow-[#326ce5]/30 transition-all"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Simulate Apply Fix & Restart Pod</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
