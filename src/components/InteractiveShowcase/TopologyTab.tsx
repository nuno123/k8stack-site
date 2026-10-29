"use client";

import React, { useState } from "react";
import {
  Layers,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Radio,
  Server,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
} from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  kind: "Ingress" | "Service" | "Pod" | "Database";
  status: "healthy" | "warning" | "error";
  namespace: string;
  cpu: string;
  memory: string;
  restarts: number;
  ip: string;
  labels: Record<string, string>;
}

export function TopologyTab() {
  const [selectedNode, setSelectedNode] = useState<NodeData>({
    id: "pod-payment-1",
    name: "payment-service-7d8b94f6c5-x9z2q",
    kind: "Pod",
    status: "error",
    namespace: "production",
    cpu: "0m (Limit 500m)",
    memory: "512Mi (Limit 512Mi - OOMKilled)",
    restarts: 7,
    ip: "10.244.3.84",
    labels: { app: "payment-service", env: "production", tier: "backend" },
  });

  const nodes: NodeData[] = [
    {
      id: "ing-1",
      name: "api-gateway-ingress",
      kind: "Ingress",
      status: "healthy",
      namespace: "production",
      cpu: "12m",
      memory: "48Mi",
      restarts: 0,
      ip: "52.188.140.22",
      labels: { "ingress.class": "nginx", env: "production" },
    },
    {
      id: "svc-gateway",
      name: "api-gateway",
      kind: "Service",
      status: "healthy",
      namespace: "production",
      cpu: "35m",
      memory: "94Mi",
      restarts: 0,
      ip: "10.96.0.12",
      labels: { app: "api-gateway", tier: "router" },
    },
    {
      id: "svc-auth",
      name: "auth-service",
      kind: "Service",
      status: "healthy",
      namespace: "production",
      cpu: "22m",
      memory: "68Mi",
      restarts: 0,
      ip: "10.96.14.88",
      labels: { app: "auth-service", tier: "backend" },
    },
    {
      id: "svc-payment",
      name: "payment-service",
      kind: "Service",
      status: "error",
      namespace: "production",
      cpu: "0m",
      memory: "512Mi",
      restarts: 7,
      ip: "10.96.88.204",
      labels: { app: "payment-service", tier: "backend" },
    },
    {
      id: "pod-payment-1",
      name: "payment-service-7d8b94f6c5-x9z2q",
      kind: "Pod",
      status: "error",
      namespace: "production",
      cpu: "0m (Limit 500m)",
      memory: "512Mi (Limit 512Mi - OOMKilled)",
      restarts: 7,
      ip: "10.244.3.84",
      labels: { app: "payment-service", env: "production", tier: "backend" },
    },
    {
      id: "pod-auth-1",
      name: "auth-service-5c68997f8b-m8k2l",
      kind: "Pod",
      status: "healthy",
      namespace: "production",
      cpu: "18m",
      memory: "64Mi",
      restarts: 0,
      ip: "10.244.1.19",
      labels: { app: "auth-service", env: "production" },
    },
    {
      id: "pod-redis-0",
      name: "redis-master-0",
      kind: "Database",
      status: "healthy",
      namespace: "production",
      cpu: "14m",
      memory: "256Mi",
      restarts: 0,
      ip: "10.244.2.10",
      labels: { app: "redis", role: "cache" },
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-[500px] w-full bg-[#0b0d0e]">
      {/* Canvas Area */}
      <div className="relative flex-1 p-6 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/[0.06]">
        {/* Controls Overlay */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#111315]/80 px-2.5 py-1.5 backdrop-blur-md text-xs font-mono text-neutral-300">
          <span className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-[#326ce5]" />
            <span>Namespace:</span>
            <span className="text-white font-semibold">production</span>
          </span>
          <span className="text-neutral-600">|</span>
          <span className="text-emerald-400">12 Pods Healthy</span>
          <span className="text-neutral-600">|</span>
          <span className="text-rose-400 font-semibold animate-pulse">1 CrashLoop</span>
        </div>

        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#111315]/80 p-1 backdrop-blur-md text-neutral-400">
          <button className="p-1 hover:text-white rounded hover:bg-white/[0.06]" title="Zoom in">
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button className="p-1 hover:text-white rounded hover:bg-white/[0.06]" title="Zoom out">
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <button className="p-1 hover:text-white rounded hover:bg-white/[0.06]" title="Fit View">
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* SVG Graph Layout */}
        <div className="relative h-full w-full min-h-[420px] flex items-center justify-center">
          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none stroke-neutral-700/60 stroke-[1.5]">
            <defs>
              <linearGradient id="grad-active" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#326ce5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="grad-error" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#326ce5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Ingress to Services */}
            <path d="M 120 210 C 180 210, 190 120, 270 120" stroke="url(#grad-active)" fill="none" strokeDasharray="4 2" className="animate-pulse" />
            <path d="M 120 210 C 180 210, 190 210, 270 210" stroke="url(#grad-active)" fill="none" />
            <path d="M 120 210 C 180 210, 190 300, 270 300" stroke="url(#grad-error)" fill="none" strokeWidth="2" />

            {/* Services to Pods */}
            <path d="M 410 120 C 470 120, 480 100, 530 100" stroke="#10b981" fill="none" />
            <path d="M 410 210 C 470 210, 480 210, 530 210" stroke="#326ce5" fill="none" />
            <path d="M 410 300 C 470 300, 480 300, 530 300" stroke="#f43f5e" strokeWidth="2" fill="none" strokeDasharray="3 3" />
            <path d="M 410 300 C 470 300, 480 370, 530 370" stroke="#10b981" fill="none" />
          </svg>

          {/* Column 1: Ingress */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <button
              type="button"
              onClick={() => setSelectedNode(nodes[0])}
              className={`flex items-center gap-2.5 rounded-xl border p-3 backdrop-blur-md transition-all text-left w-40 ${
                selectedNode.id === nodes[0].id
                  ? "border-[#326ce5] bg-[#326ce5]/15 shadow-lg shadow-[#326ce5]/20 ring-1 ring-[#326ce5]"
                  : "border-white/[0.08] bg-[#111315]/90 hover:border-white/[0.2]"
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Globe className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-mono text-neutral-400">Ingress</div>
                <div className="text-xs font-semibold text-white truncate">api.k8stack.io</div>
              </div>
            </button>
          </div>

          {/* Column 2: Services */}
          <div className="absolute left-[270px] top-1/2 -translate-y-1/2 flex flex-col gap-8">
            <button
              type="button"
              onClick={() => setSelectedNode(nodes[1])}
              className={`flex items-center gap-2.5 rounded-xl border p-3 backdrop-blur-md transition-all text-left w-44 ${
                selectedNode.id === nodes[1].id
                  ? "border-[#326ce5] bg-[#326ce5]/15 shadow-lg shadow-[#326ce5]/20 ring-1 ring-[#326ce5]"
                  : "border-white/[0.08] bg-[#111315]/90 hover:border-white/[0.2]"
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Server className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-mono text-neutral-400">Service</div>
                <div className="text-xs font-semibold text-white truncate">api-gateway</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNode(nodes[2])}
              className={`flex items-center gap-2.5 rounded-xl border p-3 backdrop-blur-md transition-all text-left w-44 ${
                selectedNode.id === nodes[2].id
                  ? "border-[#326ce5] bg-[#326ce5]/15 shadow-lg shadow-[#326ce5]/20 ring-1 ring-[#326ce5]"
                  : "border-white/[0.08] bg-[#111315]/90 hover:border-white/[0.2]"
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Server className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-mono text-neutral-400">Service</div>
                <div className="text-xs font-semibold text-white truncate">auth-service</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNode(nodes[3])}
              className={`flex items-center gap-2.5 rounded-xl border p-3 backdrop-blur-md transition-all text-left w-44 ${
                selectedNode.id === nodes[3].id
                  ? "border-rose-500 bg-rose-500/15 shadow-lg shadow-rose-500/20 ring-1 ring-rose-500"
                  : "border-rose-500/40 bg-rose-950/20 hover:border-rose-500/70"
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-mono text-rose-300">Degraded Svc</div>
                <div className="text-xs font-semibold text-rose-100 truncate">payment-service</div>
              </div>
            </button>
          </div>

          {/* Column 3: Pods / DB */}
          <div className="absolute left-[530px] top-1/2 -translate-y-1/2 flex flex-col gap-5">
            <button
              type="button"
              onClick={() => setSelectedNode(nodes[5])}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left w-52 transition-all ${
                selectedNode.id === nodes[5].id
                  ? "border-emerald-500 bg-emerald-500/15 ring-1 ring-emerald-500"
                  : "border-white/[0.08] bg-[#111315]/90 hover:border-white/[0.2]"
              }`}
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <div className="min-w-0 font-mono text-xs text-neutral-200 truncate">
                auth-svc-m8k2l
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNode(nodes[4])}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left w-52 transition-all ${
                selectedNode.id === nodes[4].id
                  ? "border-rose-500 bg-rose-500/20 ring-2 ring-rose-500 shadow-xl shadow-rose-900/30"
                  : "border-rose-500/50 bg-rose-950/30 hover:border-rose-400"
              }`}
            >
              <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0 animate-bounce" />
              <div className="min-w-0 font-mono text-xs font-semibold text-rose-200 truncate">
                payment-x9z2q
              </div>
              <span className="ml-auto rounded bg-rose-500/30 px-1 py-0.2 font-mono text-[9px] text-rose-300">
                CrashLoop
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNode(nodes[6])}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left w-52 transition-all ${
                selectedNode.id === nodes[6].id
                  ? "border-amber-500 bg-amber-500/15 ring-1 ring-amber-500"
                  : "border-white/[0.08] bg-[#111315]/90 hover:border-white/[0.2]"
              }`}
            >
              <Database className="h-4 w-4 text-amber-400 shrink-0" />
              <div className="min-w-0 font-mono text-xs text-neutral-200 truncate">
                redis-master-0
              </div>
            </button>
          </div>
        </div>

        {/* Minimap Thumbnail */}
        <div className="absolute bottom-4 right-4 hidden sm:flex flex-col gap-1 rounded-lg border border-white/[0.08] bg-[#090b0c]/90 p-2 backdrop-blur-md">
          <span className="text-[10px] font-mono text-neutral-400">Minimap (14 Nodes)</span>
          <div className="h-14 w-28 rounded border border-white/[0.05] bg-[#111315] relative overflow-hidden">
            <div className="absolute top-2 left-2 h-2 w-2 rounded-full bg-indigo-500" />
            <div className="absolute top-4 left-8 h-2 w-2 rounded-full bg-sky-500" />
            <div className="absolute top-8 left-8 h-2 w-2 rounded-full bg-emerald-500" />
            <div className="absolute top-11 left-8 h-2 w-2 rounded-full bg-rose-500 animate-ping" />
            <div className="absolute top-8 left-18 h-2 w-2 rounded-full bg-emerald-500" />
            <div className="absolute top-11 left-18 h-2 w-2 rounded-full bg-rose-500" />
            <div className="absolute inset-1 border border-[#326ce5]/40 rounded pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Inspector Sidebar */}
      <div className="w-full lg:w-80 bg-[#0e1012] p-5 flex flex-col justify-between text-xs">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <span className="font-mono text-neutral-400 uppercase tracking-wider text-[11px]">
              Node Inspector
            </span>
            <span
              className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase ${
                selectedNode.status === "healthy"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : selectedNode.status === "error"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
              }`}
            >
              {selectedNode.status === "error" ? "CrashLoopBackOff" : selectedNode.status}
            </span>
          </div>

          <div className="mt-4">
            <h4 className="font-mono font-bold text-sm text-white break-all">
              {selectedNode.name}
            </h4>
            <div className="mt-1 text-neutral-400 font-mono text-[11px]">
              Kind: <span className="text-neutral-200 font-semibold">{selectedNode.kind}</span> • NS:{" "}
              <span className="text-neutral-200 font-semibold">{selectedNode.namespace}</span>
            </div>
          </div>

          <div className="mt-5 space-y-3 font-mono">
            <div className="rounded-lg border border-white/[0.06] bg-[#141619] p-2.5">
              <div className="text-[10px] text-neutral-400 flex items-center gap-1.5">
                <Cpu className="h-3 w-3 text-[#38bdf8]" />
                <span>CPU Usage & Limits</span>
              </div>
              <div className="mt-1 text-neutral-200 font-semibold">{selectedNode.cpu}</div>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-[#141619] p-2.5">
              <div className="text-[10px] text-neutral-400 flex items-center gap-1.5">
                <Activity className="h-3 w-3 text-amber-400" />
                <span>Memory Allocation</span>
              </div>
              <div className="mt-1 text-neutral-200 font-semibold break-all">{selectedNode.memory}</div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/[0.06] bg-[#141619] p-2">
                <div className="text-[10px] text-neutral-400">Pod IP</div>
                <div className="mt-0.5 text-neutral-200 font-semibold">{selectedNode.ip}</div>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-[#141619] p-2">
                <div className="text-[10px] text-neutral-400">Restarts</div>
                <div className={`mt-0.5 font-semibold ${selectedNode.restarts > 0 ? "text-rose-400" : "text-neutral-200"}`}>
                  {selectedNode.restarts}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/[0.06] bg-[#141619] p-2.5">
              <div className="text-[10px] text-neutral-400">Labels</div>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {Object.entries(selectedNode.labels).map(([k, v]) => (
                  <span
                    key={k}
                    className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[10px] text-neutral-300 border border-white/[0.06]"
                  >
                    {k}={v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedNode.status === "error" && (
          <div className="mt-4 pt-3 border-t border-rose-500/20">
            <a
              href="#ai-copilot"
              className="flex items-center justify-center gap-1.5 w-full rounded-lg bg-rose-600/90 hover:bg-rose-500 px-3 py-2 text-white font-medium text-xs shadow-lg shadow-rose-900/30 transition-all font-mono"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Triage with AI SRE Copilot</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

