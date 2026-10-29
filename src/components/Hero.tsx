"use client";

import React, { useState } from "react";
import {
  Download,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  Monitor,
  Sparkles,
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
    <section className="relative overflow-x-clip pt-28 md:pt-36 pb-12 lg:pb-20 text-center">
      {/* Background glow matching onorca.dev subtle lighting */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-b from-[#326ce5]/15 via-white/[0.03] to-transparent blur-[140px] opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Release Pill Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-[13px] text-white/70 backdrop-blur-md">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#10b981]" />
          <span>K8Stack v{SITE_CONFIG.version} is live</span>
          <span className="text-white/30">•</span>
          <span className="text-[#38bdf8] flex items-center gap-1 font-medium">
            <Sparkles className="h-3 w-3" />
            Zero-Leak Local AI SRE
          </span>
        </div>

        {/* H1 Heading (Orca Benchmark Style) */}
        <h1 className="max-w-5xl text-balance font-medium tracking-[-0.03em] text-white text-4xl sm:text-6xl md:text-7xl leading-[1.08]">
          Operate 100x faster with the sovereign Kubernetes IDE
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-[50rem] text-balance text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
          Triage incidents in seconds with zero-leak local AI, explore interactive topologies, stream multi-pod telemetry, and manage multi-cloud clusters directly from your workstation.
        </p>

        {/* Main CTA & CLI Row (Orca Style) */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl">
          {/* Primary High-Contrast White Download Button */}
          <div className="relative w-full sm:w-auto">
            <div className="inline-flex h-12 w-full sm:w-auto items-center justify-between rounded-md bg-white px-5 text-[15px] font-semibold text-black transition hover:bg-white/90 shadow-sm cursor-pointer">
              <a
                href={detected.asset.url}
                className="flex items-center gap-2.5 whitespace-nowrap"
              >
                <Download className="h-4 w-4" />
                <span>{detected.label}</span>
              </a>
              <button
                type="button"
                onClick={() => setShowOsDropdown(!showOsDropdown)}
                className="ml-3 pl-3 border-l border-black/15 text-black/60 hover:text-black"
                title="Select other operating systems"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Alternative OS Dropdown */}
            {showOsDropdown && (
              <div className="absolute left-0 right-0 sm:left-auto sm:right-auto sm:w-72 mt-2 rounded-xl border border-white/[0.1] bg-[#111214]/95 p-2 shadow-2xl backdrop-blur-2xl z-30 text-left">
                <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-white/40 border-b border-white/[0.06]">
                  Available Platforms
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  {SITE_CONFIG.downloads.map((item) => (
                    <a
                      key={item.filename}
                      href={item.url}
                      onClick={() => setShowOsDropdown(false)}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-xs text-white/80 hover:bg-white/[0.08] hover:text-white transition-colors"
                    >
                      <div>
                        <div className="font-medium text-white">{item.label}</div>
                        <div className="text-[10px] text-white/40 font-mono">
                          {item.type} • {item.size}
                        </div>
                      </div>
                      <Download className="h-3.5 w-3.5 text-white/40" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Copyable CLI Snippet Button */}
          <div className="inline-flex h-12 w-full sm:w-auto items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 text-xs font-mono text-white/85 transition hover:bg-white/10 hover:text-white">
            <div className="flex items-center gap-2 truncate">
              <Terminal className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{activeCommand}</span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="ml-2 flex items-center gap-1 text-white/50 hover:text-white shrink-0 p-1"
              title="Copy install command"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-white/50 text-xs">
          <Monitor className="h-3.5 w-3.5 shrink-0" />
          <span>Available for macOS (Apple Silicon &amp; Intel), Windows, and Linux. Free &amp; open source (MIT).</span>
        </div>
      </div>
    </section>
  );
}
