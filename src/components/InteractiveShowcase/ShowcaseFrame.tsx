"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Sparkles,
  Terminal,
  RotateCw,
  Maximize2,
  X,
  Server,
  Box,
  Network,
  Compass,
  Database,
  FileSpreadsheet,
  Shield,
  Puzzle,
  Bot,
  ShieldAlert,
  GitBranch,
  Layers,
  Activity,
  Lock,
  KeyRound,
  Settings,
  Bell,
} from "lucide-react";
import { K8StackLogo } from "@/components/brand/K8StackLogo";
import { TopologyScreen } from "./TopologyScreen";
import { ClusterOverviewScreen } from "./ClusterOverviewScreen";
import { SecurityCenterScreen } from "./SecurityCenterScreen";
import { WorkloadOverviewScreen } from "./WorkloadOverviewScreen";

interface ShowcaseView {
  id: "topology" | "overview" | "security" | "workloads";
  name: string;
  screenshotUrl: string;
  alt: string;
}

export function ShowcaseFrame() {
  const views: ShowcaseView[] = [
    {
      id: "topology",
      name: "Visualize topologies",
      screenshotUrl: "/images/app/topology-view@2x.webp",
      alt: "K8Stack Topology Visualizer",
    },
    {
      id: "overview",
      name: "Cluster telemetry",
      screenshotUrl: "/images/app/cluster-overview@2x.webp",
      alt: "K8Stack Cluster Overview & Resource Usage",
    },
    {
      id: "security",
      name: "Audit PSS security",
      screenshotUrl: "/images/app/security-center@2x.webp",
      alt: "K8Stack Security Center & PSS Compliance",
    },
    {
      id: "workloads",
      name: "Triage workloads",
      screenshotUrl: "/images/app/workload-overview@2x.webp",
      alt: "K8Stack Workloads Overview & Diagnostics",
    },
  ];

  const [activeViewId, setActiveViewId] = useState<ShowcaseView["id"]>("topology");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeView = views.find((v) => v.id === activeViewId) || views[0];

  const clusterExpanded = activeViewId === "overview" || activeViewId === "topology";
  const workloadExpanded = activeViewId === "workloads" || activeViewId === "topology";

  return (
    <div id="cockpit" className="mt-14 md:mt-20 text-left">
      {/* Orca-Exact Tablist */}
      <div className="mb-5 flex justify-center">
        <div
          role="tablist"
          aria-label="K8Stack capabilities"
          className="inline-flex flex-wrap justify-center gap-1 rounded-lg border border-white/[0.07] bg-white/[0.025] p-1"
        >
          {views.map((v) => {
            const isActive = activeViewId === v.id;
            return (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveViewId(v.id)}
                className={`cursor-pointer rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-white/[0.09] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-white/55 hover:text-white/85"
                }`}
              >
                {v.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Orca-Exact Outer Bezel & Shadow Frame */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-8 -top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(50,108,229,0.10),transparent_70%)] blur-2xl"
        />
        <div className="rounded-xl border border-white/[0.11] bg-[#030303]/90 p-1.5 shadow-[0_56px_160px_-28px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="overflow-hidden rounded-[9px] border border-white/[0.08] bg-[#0b0d10]">
            {/* K8Stack Authentic Top Window Bar */}
            <div className="flex h-10 items-center justify-between border-b border-white/[0.07] bg-[#0d0f12] px-3.5 select-none">
              {/* Left: Traffic Lights + Brand + Context + Namespace */}
              <div className="flex items-center gap-3 overflow-x-auto">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="size-3 rounded-full bg-[#ff5f57]" />
                  <span className="size-3 rounded-full bg-[#ffbd2e]" />
                  <span className="size-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="flex items-center pl-1 pr-2 border-r border-white/[0.08] shrink-0">
                  <K8StackLogo size={17} variant="full" />
                </div>

                {/* Context Selector */}
                <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono">
                  <span className="text-white/45 uppercase">CONTEXT:</span>
                  <div className="flex items-center justify-between gap-4 rounded border border-white/[0.08] bg-[#13161b] px-2.5 py-0.5 text-white/90">
                    <span>patrimonium</span>
                    <ChevronDown className="h-3 w-3 text-white/40" />
                  </div>
                  <button
                    type="button"
                    className="flex size-5 items-center justify-center rounded text-[#38bdf8] hover:bg-white/[0.05]"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Namespace Selector */}
                <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono">
                  <span className="text-white/45 uppercase">NAMESPACE:</span>
                  <div className="flex items-center justify-between gap-4 rounded border border-white/[0.08] bg-[#13161b] px-2.5 py-0.5 text-white/90">
                    <span>All Namespaces</span>
                    <ChevronDown className="h-3 w-3 text-white/40" />
                  </div>
                </div>
              </div>

              {/* Right: AI Button + Connected Pill + Screenshot Lightbox Trigger */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveViewId("workloads")}
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#7c3aed] px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-[#6d28d9] transition-colors"
                >
                  <Bot className="h-3.5 w-3.5" />
                  <span>AI</span>
                </button>

                <div className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-[10px] font-mono font-semibold text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>CONNECTED (K3S)</span>
                </div>

                <div className="hidden md:flex items-center gap-1 border-l border-white/[0.08] pl-2 text-white/45">
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center gap-1 rounded border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] font-mono text-white/65 hover:bg-white/[0.08] hover:text-white transition-colors"
                    title="Inspect original 1:1 software screenshot"
                  >
                    <Maximize2 className="h-3 w-3" />
                    <span>1:1 PNG</span>
                  </button>
                  <span className="flex size-6 items-center justify-center rounded hover:bg-white/[0.05]">
                    <Terminal className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex size-6 items-center justify-center rounded hover:bg-white/[0.05]">
                    <RotateCw className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Main App Workspace: Left Explorer Sidebar + Right Stage */}
            <div className="flex h-[580px] md:h-[630px] select-none overflow-hidden">
              {/* Authentic K8Stack Left Explorer Sidebar */}
              <aside className="hidden md:flex w-[205px] shrink-0 flex-col border-r border-white/[0.07] bg-[#0a0c0f] text-[11.5px] overflow-y-auto">
                <div className="flex items-center justify-between px-3.5 py-2.5 text-[10px] font-mono font-semibold tracking-wider text-white/45 uppercase border-b border-white/[0.05]">
                  <span>EXPLORER</span>
                  <div className="flex items-center gap-1.5 text-white/35">
                    <ChevronDown className="h-3 w-3" />
                  </div>
                </div>

                <div className="p-2 space-y-1 flex-1">
                  {/* CLUSTER GROUP */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setActiveViewId("overview")}
                      className="flex w-full items-center justify-between rounded px-2 py-1.5 text-[11px] font-bold tracking-wide text-white/85 hover:bg-white/[0.04]"
                    >
                      <span className="flex items-center gap-2">
                        <Server className="h-3.5 w-3.5 text-[#38bdf8]" />
                        <span>CLUSTER</span>
                      </span>
                      {clusterExpanded ? (
                        <ChevronDown className="h-3 w-3 text-white/40" />
                      ) : (
                        <ChevronRight className="h-3 w-3 text-white/40" />
                      )}
                    </button>

                    {clusterExpanded && (
                      <div className="mt-0.5 ml-2 space-y-0.5 border-l border-white/[0.06] pl-2 text-[11px]">
                        <button
                          type="button"
                          onClick={() => setActiveViewId("overview")}
                          className={`flex w-full items-center justify-between rounded px-2 py-1 transition-colors ${
                            activeViewId === "overview"
                              ? "bg-[#3b82f6]/15 text-[#38bdf8] font-medium"
                              : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <Layers className="h-3 w-3" />
                            <span>Overview</span>
                          </span>
                        </button>
                        <div className="flex items-center justify-between rounded px-2 py-1 text-white/55">
                          <span className="flex items-center gap-2">
                            <Server className="h-3 w-3" />
                            <span>Nodes</span>
                          </span>
                          <span className="rounded-full bg-white/[0.07] px-1.5 text-[9.5px] font-mono">
                            1
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded px-2 py-1 text-white/55">
                          <span className="flex items-center gap-2">
                            <Layers className="h-3 w-3" />
                            <span>Namespaces</span>
                          </span>
                          <span className="rounded-full bg-white/[0.07] px-1.5 text-[9.5px] font-mono">
                            14
                          </span>
                        </div>
                        <div className="flex items-center justify-between rounded px-2 py-1 text-white/55">
                          <span className="flex items-center gap-2">
                            <Bell className="h-3 w-3" />
                            <span>Events</span>
                          </span>
                          <span className="rounded-full bg-white/[0.07] px-1.5 text-[9.5px] font-mono">
                            40
                          </span>
                        </div>
                        <div className="flex items-center gap-2 rounded px-2 py-1 text-white/55">
                          <Activity className="h-3 w-3" />
                          <span>Metrics</span>
                        </div>
                        <div className="flex items-center gap-2 rounded px-2 py-1 text-white/55">
                          <Lock className="h-3 w-3" />
                          <span>Permissions</span>
                        </div>
                        <div className="flex items-center gap-2 rounded px-2 py-1 text-white/55">
                          <KeyRound className="h-3 w-3" />
                          <span>Leases</span>
                        </div>
                        <div className="flex items-center gap-2 rounded px-2 py-1 text-white/55">
                          <Settings className="h-3 w-3" />
                          <span>Settings</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* WORKLOAD GROUP */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveViewId("workloads")}
                      className="flex w-full items-center justify-between rounded px-2 py-1.5 text-[11px] font-bold tracking-wide text-white/85 hover:bg-white/[0.04]"
                    >
                      <span className="flex items-center gap-2">
                        <Box className="h-3.5 w-3.5 text-emerald-400" />
                        <span>WORKLOAD</span>
                      </span>
                      {workloadExpanded ? (
                        <ChevronDown className="h-3 w-3 text-white/40" />
                      ) : (
                        <ChevronRight className="h-3 w-3 text-white/40" />
                      )}
                    </button>

                    {workloadExpanded && (
                      <div className="mt-0.5 ml-2 space-y-0.5 border-l border-white/[0.06] pl-2 text-[11px]">
                        <button
                          type="button"
                          onClick={() => setActiveViewId("workloads")}
                          className={`flex w-full items-center justify-between rounded px-2 py-1 transition-colors ${
                            activeViewId === "workloads"
                              ? "bg-emerald-500/15 text-emerald-400 font-medium"
                              : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                          }`}
                        >
                          <span>Overview</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveViewId("topology")}
                          className={`flex w-full items-center justify-between rounded px-2 py-1 transition-colors ${
                            activeViewId === "topology"
                              ? "bg-emerald-500/15 text-emerald-400 font-medium"
                              : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                          }`}
                        >
                          <span>Pods</span>
                          <span className="text-white/35">+</span>
                        </button>
                        {[
                          "Deployments",
                          "StatefulSet",
                          "DaemonSet",
                          "Job",
                          "CronJob",
                          "ReplicaSet",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded px-2 py-1 text-white/55"
                          >
                            <span>{item}</span>
                            <span className="text-white/30">+</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Collapsed Groups matching K8Stack Sidebar */}
                  {[
                    { label: "NETWORK", icon: Network, color: "text-[#38bdf8]" },
                    { label: "GATEWAY API", icon: Compass, color: "text-teal-400" },
                    { label: "STORAGE", icon: Database, color: "text-emerald-400" },
                    {
                      label: "CONFIG & GOV",
                      icon: FileSpreadsheet,
                      color: "text-amber-400",
                    },
                    { label: "RBAC & SECURITY", icon: Shield, color: "text-rose-400" },
                    { label: "CRDS", icon: Puzzle, color: "text-[#38bdf8]" },
                    { label: "AI SRE COPILOT", icon: Sparkles, color: "text-purple-400" },
                  ].map((g) => {
                    const Icon = g.icon;
                    return (
                      <div
                        key={g.label}
                        className="flex items-center justify-between rounded px-2 py-1.5 text-[10.5px] font-bold tracking-wide text-white/75"
                      >
                        <span className="flex items-center gap-2">
                          <Icon className={`h-3.5 w-3.5 ${g.color}`} />
                          <span>{g.label}</span>
                        </span>
                        <ChevronRight className="h-3 w-3 text-white/30" />
                      </div>
                    );
                  })}

                  {/* PLATFORM TOOLS */}
                  <div className="pt-2 border-t border-white/[0.06]">
                    <div className="px-2 py-1 text-[9.5px] font-mono uppercase tracking-wider text-white/35">
                      PLATFORM TOOLS
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveViewId("security")}
                      className={`mt-0.5 flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-[11px] transition-colors ${
                        activeViewId === "security"
                          ? "bg-rose-500/15 text-rose-300 font-medium border border-rose-500/25"
                          : "text-white/65 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <ShieldAlert className="h-3.5 w-3.5 text-rose-400" />
                      <span>Security</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveViewId("topology")}
                      className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-[11px] text-white/65 hover:text-white hover:bg-white/[0.04]"
                    >
                      <GitBranch className="h-3.5 w-3.5 text-white/50" />
                      <span>Visualizer</span>
                    </button>
                    <div className="flex items-center gap-2 rounded px-2.5 py-1.5 text-[11px] text-white/60">
                      <Box className="h-3.5 w-3.5 text-white/45" />
                      <span>Helm Hub</span>
                    </div>
                    <div className="flex items-center gap-2 rounded px-2.5 py-1.5 text-[11px] text-white/60">
                      <Terminal className="h-3.5 w-3.5 text-white/45" />
                      <span>Terminal Studio</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Right Stage: Crisp 1:1 DOM Replica */}
              <div className="flex-1 overflow-hidden bg-[#0d0f12]">
                {activeViewId === "topology" && <TopologyScreen />}
                {activeViewId === "overview" && <ClusterOverviewScreen />}
                {activeViewId === "security" && <SecurityCenterScreen />}
                {activeViewId === "workloads" && <WorkloadOverviewScreen />}
              </div>
            </div>

            {/* Authentic K8Stack Bottom Status Bar */}
            <div className="flex h-6 items-center justify-between border-t border-white/[0.07] bg-[#0a0c0e] px-3 text-[10.5px] font-mono text-white/45 select-none">
              <div className="flex items-center gap-3 truncate">
                <span>
                  Context: <strong className="text-white/80">patrimonium</strong>
                </span>
                <span>
                  Nodes: <strong className="text-white/80">1</strong>
                </span>
                <span className="hidden sm:inline">
                  Workloads:{" "}
                  <strong className="text-white/80">25 Deployments, 41 Pods</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline text-white/55">&gt;_ Terminal Dock</span>
                <span className="inline-flex items-center gap-1 rounded bg-white/[0.06] px-1.5 py-0.2 text-[9.5px] text-white/75">
                  <span className="size-1.5 rounded-full bg-[#38bdf8]" />
                  API V1.31 READY
                </span>
                <span className="text-white/50">Zero Telemetry · 100% Local</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for 1:1 Raw PNG Inspection */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-xl"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute right-4 top-4 z-50 flex items-center gap-3">
            <span className="font-mono text-xs text-white/60">
              Click anywhere to close
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative max-h-[90vh] max-w-6xl overflow-auto rounded-xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeView.screenshotUrl}
              alt={activeView.alt}
              width={2048}
              height={1292}
              className="h-auto w-full object-contain"
              priority
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}
