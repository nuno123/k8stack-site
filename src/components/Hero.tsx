"use client";

import React, { useState } from "react";
import {
  Download,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Sparkles,
  Command,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { useDetectedPlatform } from "@/lib/osDetector";

export function Hero() {
  const detected = useDetectedPlatform();
  const [selectedCli, setSelectedCli] = useState<string>("brew");
  const [copied, setCopied] = useState(false);
  const [showOsDropdown, setShowOsDropdown] = useState(false);

  const activeCommand =
    SITE_CONFIG.cliCommands.find((c) => c.id === selectedCli)?.cmd ||
    SITE_CONFIG.cliCommands[0].cmd;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle radial ambient gradients (onorca style) */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-[#326ce5]/20 via-[#10b981]/10 to-transparent blur-[120px] opacity-70" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[300px] w-[400px] rounded-full bg-[#326ce5]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#111315]/80 px-3.5 py-1.5 backdrop-blur-md shadow-lg transition-transform hover:scale-102">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
          </span>
          <span className="text-xs font-mono font-medium text-neutral-300">
            K8Stack v{SITE_CONFIG.version} Release
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-xs text-[#38bdf8] flex items-center gap-1 font-mono">
            <Sparkles className="h-3 w-3" />
            Air-Gapped Local AI SRE
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="mt-7 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
          The Kubernetes Control Plane for{" "}
          <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Modern Engineering Teams
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Effortlessly visualize complex topologies, triage incidents in seconds with{" "}
          <strong className="text-neutral-200 font-semibold">zero-leak local AI</strong>, stream live pod telemetry, and manage multi-cloud clusters from a blazingly fast desktop cockpit.
        </p>

        {/* CTA Section: Dynamic Download + OS Switcher */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative inline-block text-left w-full sm:w-auto">
            <div className="flex rounded-xl shadow-xl shadow-[#326ce5]/25 border border-[#326ce5]/50 bg-gradient-to-r from-[#326ce5] to-[#2557bd] p-[1px]">
              <a
                href={detected.asset.url}
                className="flex items-center justify-center gap-2.5 rounded-l-[11px] bg-gradient-to-b from-[#326ce5] to-[#2557bd] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 w-full sm:w-auto"
              >
                <Download className="h-4 w-4" />
                <span>{detected.label}</span>
                <span className="text-xs opacity-75 font-mono hidden sm:inline">
                  ({detected.asset.size})
                </span>
              </a>

              <button
                type="button"
                onClick={() => setShowOsDropdown(!showOsDropdown)}
                className="border-l border-white/20 px-3 py-3.5 text-white hover:bg-white/10 rounded-r-[11px] transition-colors"
                aria-label="Select alternative OS"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Alternative OS Dropdown */}
            {showOsDropdown && (
              <div className="absolute left-0 right-0 sm:left-auto sm:right-auto sm:w-72 mt-2 rounded-xl border border-white/[0.1] bg-[#111315]/95 p-2 shadow-2xl backdrop-blur-xl z-30 text-left">
                <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-400 border-b border-white/[0.06]">
                  Available Platforms
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  {SITE_CONFIG.downloads.map((item) => (
                    <a
                      key={item.filename}
                      href={item.url}
                      onClick={() => setShowOsDropdown(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-neutral-200 hover:bg-white/[0.06] hover:text-white transition-colors"
                    >
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-[10px] text-neutral-500 font-mono">
                          {item.type} • {item.size}
                        </div>
                      </div>
                      <Download className="h-3.5 w-3.5 text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#showcase"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-[#111315]/70 px-6 py-3.5 text-sm font-semibold text-neutral-200 transition-all hover:border-white/[0.2] hover:bg-[#16181b] hover:text-white backdrop-blur-md w-full sm:w-auto"
          >
            <span>Explore Live Cockpit</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* 1-Click Copy CLI Selector */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="rounded-xl border border-white/[0.08] bg-[#0d0f11]/90 shadow-2xl backdrop-blur-xl overflow-hidden text-left">
            {/* CLI Tab Headers */}
            <div className="flex border-b border-white/[0.06] bg-[#090b0c] px-3 pt-2 gap-1 overflow-x-auto">
              {SITE_CONFIG.cliCommands.map((cli) => (
                <button
                  key={cli.id}
                  type="button"
                  onClick={() => setSelectedCli(cli.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-all ${
                    selectedCli === cli.id
                      ? "bg-[#111315] text-[#38bdf8] border-t border-x border-white/[0.08] font-semibold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <Terminal className="h-3 w-3" />
                  <span>{cli.label}</span>
                </button>
              ))}
            </div>

            {/* CLI Command Line */}
            <div className="flex items-center justify-between p-3.5 bg-[#111315]">
              <div className="flex items-center gap-2 overflow-x-auto font-mono text-xs text-neutral-200 pr-2">
                <span className="text-[#10b981] select-none font-bold">$</span>
                <span className="text-neutral-300 whitespace-nowrap">{activeCommand}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-[#16181b] px-2.5 py-1 text-xs font-mono text-neutral-300 transition-all hover:border-white/[0.2] hover:bg-[#1c1f24] hover:text-white"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* SRE Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#10b981]" />
            <span>Zero SaaS Proxy • Direct Workstation mTLS</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-[#38bdf8]" />
            <span>Air-Gapped Local Ollama / Groq Triage</span>
          </div>
          <div className="flex items-center gap-2">
            <Command className="h-4 w-4 text-neutral-300" />
            <span>100% Client-Side • MIT Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
