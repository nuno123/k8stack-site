"use client";

import React, { useState } from "react";
import { Terminal, Play, RotateCcw, Copy, Check } from "lucide-react";

interface CommandPreset {
  cmd: string;
  output: string[];
}

export function TerminalStudioTab() {
  const [activeTab, setActiveTab] = useState<"logs" | "shell">("shell");
  const [copied, setCopied] = useState(false);

  const presets: Record<string, CommandPreset> = {
    "get-pods": {
      cmd: "kubectl get pods -n production -o wide",
      output: [
        "NAME                                READY   STATUS             RESTARTS   AGE   IP            NODE",
        "api-gateway-7b98cd894f-m9x12        1/1     Running            0          14d   10.244.0.12   aks-pool-system-01",
        "auth-service-5c68997f8b-m8k2l       1/1     Running            0          3d    10.244.1.19   eks-worker-spot-04",
        "payment-service-7d8b94f6c5-x9z2q    0/1     CrashLoopBackOff   7          42m   10.244.3.84   aks-pool-system-01",
        "redis-master-0                      1/1     Running            0          30d   10.244.2.10   gke-highmem-02",
      ],
    },
    "top-nodes": {
      cmd: "kubectl top nodes",
      output: [
        "NAME                    CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%",
        "aks-pool-system-01      1520m        38%    19842Mi         62%",
        "eks-worker-spot-04      2960m        74%    25920Mi         81%",
        "gke-highmem-02          1160m        29%    28160Mi         44%",
        "baremetal-k3s-edge-01   2040m        51%    11200Mi         70%",
      ],
    },
    "dns-test": {
      cmd: "kubectl exec -it auth-service-5c68997f8b-m8k2l -- nslookup kubernetes.default",
      output: [
        "Server:    10.96.0.10",
        "Address 1: 10.96.0.10 kube-dns.kube-system.svc.cluster.local",
        "",
        "Name:      kubernetes.default",
        "Address 1: 10.96.0.1 kubernetes.default.svc.cluster.local",
      ],
    },
  };

  const [currentCommand, setCurrentCommand] = useState<string>("get-pods");

  const streamLogs = [
    "[22:20:01.012] [INFO]  [gateway] Ingress request: GET /api/v1/checkout/intent HTTP/2 (200 OK - 12ms)",
    "[22:20:01.140] [INFO]  [auth-svc] Token verified for subject usr_9a8f2190 (HS256 mTLS)",
    "[22:20:01.289] [WARN]  [payment] Heap memory consumption at 89.4% (Threshold: 85%)",
    "[22:20:01.402] [ERROR] [payment] Connection timeout contacting downstream stripe-gateway (retry 1/3)",
    "[22:20:01.890] [INFO]  [redis] SET key:txn_lock_9921 EX 30 -> OK (0.4ms)",
    "[22:20:02.105] [INFO]  [gateway] Upstream connection pool recycled (idle: 48, active: 12)",
  ];

  return (
    <div className="flex flex-col h-full min-h-[500px] w-full bg-[#08090a] font-mono text-xs">
      {/* Sub-Header Tabs */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0d0f11] px-4 py-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("shell")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors ${
              activeTab === "shell"
                ? "bg-[#16181b] text-[#38bdf8] font-semibold border border-white/[0.08]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>PTY Shell Session</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("logs")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors ${
              activeTab === "logs"
                ? "bg-[#16181b] text-emerald-400 font-semibold border border-white/[0.08]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Multi-Pod Log Stream (Tail -f)</span>
          </button>
        </div>

        <div className="text-[11px] text-neutral-400 hidden sm:flex items-center gap-2">
          <span>SPDY WebSocket / 115200 Baud</span>
          <span className="text-neutral-600">•</span>
          <span className="text-emerald-400">Connected</span>
        </div>
      </div>

      {activeTab === "shell" ? (
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            {/* Quick interactive commands */}
            <div className="flex flex-wrap items-center gap-2 pb-3 mb-3 border-b border-white/[0.06]">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Quick Commands:</span>
              <button
                type="button"
                onClick={() => setCurrentCommand("get-pods")}
                className={`rounded border px-2.5 py-1 text-[11px] transition-colors ${
                  currentCommand === "get-pods"
                    ? "border-[#326ce5] bg-[#326ce5]/20 text-[#38bdf8] font-semibold"
                    : "border-white/[0.06] bg-[#111315] text-neutral-400 hover:text-white"
                }`}
              >
                kubectl get pods
              </button>
              <button
                type="button"
                onClick={() => setCurrentCommand("top-nodes")}
                className={`rounded border px-2.5 py-1 text-[11px] transition-colors ${
                  currentCommand === "top-nodes"
                    ? "border-[#326ce5] bg-[#326ce5]/20 text-[#38bdf8] font-semibold"
                    : "border-white/[0.06] bg-[#111315] text-neutral-400 hover:text-white"
                }`}
              >
                kubectl top nodes
              </button>
              <button
                type="button"
                onClick={() => setCurrentCommand("dns-test")}
                className={`rounded border px-2.5 py-1 text-[11px] transition-colors ${
                  currentCommand === "dns-test"
                    ? "border-[#326ce5] bg-[#326ce5]/20 text-[#38bdf8] font-semibold"
                    : "border-white/[0.06] bg-[#111315] text-neutral-400 hover:text-white"
                }`}
              >
                nslookup k8s-dns
              </button>
            </div>

            {/* Terminal Screen */}
            <div className="font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto space-y-1">
              <div className="text-neutral-500">
                # Native xterm.js PTY Studio connected to cluster API 6443 via Direct mTLS
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-emerald-400 font-bold">sre@workstation:~$</span>
                <span className="font-semibold text-[#38bdf8]">{presets[currentCommand].cmd}</span>
              </div>
              <div className="mt-2 space-y-0.5">
                {presets[currentCommand].output.map((line, idx) => (
                  <div
                    key={idx}
                    className={
                      line.includes("CrashLoopBackOff")
                        ? "text-rose-400 font-semibold"
                        : idx === 0
                        ? "text-neutral-500 font-bold"
                        : "text-neutral-300"
                    }
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Shell Prompt Line */}
          <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center gap-2">
            <span className="text-emerald-400 font-bold">sre@workstation:~$</span>
            <span className="inline-block h-4 w-2 bg-[#38bdf8] animate-pulse" />
            <span className="text-neutral-500 text-[11px]">Type command or select preset above...</span>
          </div>
        </div>
      ) : (
        <div className="flex-1 p-4 overflow-y-auto space-y-2 font-mono text-xs">
          <div className="text-neutral-500 pb-2 border-b border-white/[0.06]">
            Streaming live tail for labels: <code className="text-neutral-300">app in (gateway, auth-service, payment-service, redis)</code>
          </div>
          {streamLogs.map((log, idx) => (
            <div
              key={idx}
              className={`leading-relaxed ${
                log.includes("[ERROR]")
                  ? "text-rose-400 font-semibold"
                  : log.includes("[WARN]")
                  ? "text-amber-400"
                  : "text-neutral-300"
              }`}
            >
              {log}
            </div>
          ))}
          <div className="flex items-center gap-2 pt-2 text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px]">Streaming live stdout/stderr from pods (0ms latency)...</span>
          </div>
        </div>
      )}
    </div>
  );
}
