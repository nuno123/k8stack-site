"use client";

import React, { useState } from "react";
import { Download, Copy, Check, ShieldCheck, Terminal, HardDrive, Hash } from "lucide-react";
import { SITE_CONFIG, DownloadAsset } from "@/lib/siteConfig";

export function DownloadMatrix() {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <section id="downloads" className="py-16 lg:py-24 border-t border-white/[0.06] bg-[#090b0c] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-3 py-1 text-xs font-mono font-medium text-indigo-400 mb-4">
            <Download className="h-3.5 w-3.5" />
            <span>Distribution Hub</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Download K8Stack v{SITE_CONFIG.version}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Self-sovereign desktop binaries compiled with strict signature verification and zero telemetry. Choose your operating system and architecture below.
          </p>
        </div>

        {/* Binary Matrix Table */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#111315] overflow-hidden shadow-2xl mb-12">
          <div className="px-6 py-4 bg-[#141619] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
            <span className="font-bold text-white text-sm">
              Official Production Release Assets (v{SITE_CONFIG.version})
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>SHA256 Authenticated</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-white/[0.08] bg-[#0c0e10] text-neutral-400 uppercase text-[10px]">
                <tr>
                  <th className="px-6 py-3.5">Platform &amp; Architecture</th>
                  <th className="px-4 py-3.5">Package Type</th>
                  <th className="px-4 py-3.5">Size</th>
                  <th className="px-4 py-3.5">SHA256 Checksum</th>
                  <th className="px-6 py-3.5 text-right">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-neutral-300">
                {SITE_CONFIG.downloads.map((asset: DownloadAsset) => (
                  <tr key={asset.filename} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-medium text-white">
                      <div className="flex items-center gap-2">
                        <span>{asset.label}</span>
                        {asset.recommended && (
                          <span className="rounded bg-[#326ce5]/20 px-2 py-0.5 text-[9px] font-bold text-[#38bdf8] border border-[#326ce5]/30">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">{asset.filename}</div>
                    </td>
                    <td className="px-4 py-4 text-neutral-400">{asset.type}</td>
                    <td className="px-4 py-4 text-neutral-300">{asset.size}</td>
                    <td className="px-4 py-4">
                      <button
                        type="button"
                        onClick={() => copyHash(asset.checksum)}
                        className="flex items-center gap-1.5 rounded bg-black/40 px-2 py-1 text-[10px] text-neutral-400 hover:text-white border border-white/[0.06] transition-colors max-w-[220px]"
                        title="Click to copy SHA256 checksum"
                      >
                        <Hash className="h-3 w-3 shrink-0 text-neutral-500" />
                        <span className="truncate">{asset.checksum}</span>
                        {copiedHash === asset.checksum ? (
                          <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                        ) : (
                          <Copy className="h-3 w-3 opacity-60 shrink-0" />
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={asset.url}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#326ce5] hover:bg-[#2557bd] px-3.5 py-1.5 text-white font-semibold text-xs shadow-md shadow-[#326ce5]/20 transition-all"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Package Manager Quick Install Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl border border-white/[0.08] bg-[#111315] p-5">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <Terminal className="h-4 w-4 text-[#38bdf8]" />
              <span>macOS Homebrew</span>
            </div>
            <p className="text-xs text-neutral-400 mb-3">Install via the official Cask tap:</p>
            <div className="rounded-lg bg-[#090b0c] p-2.5 font-mono text-xs text-neutral-300 border border-white/[0.06] overflow-x-auto">
              <code>$ brew install --cask k8stack</code>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#111315] p-5">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span>Linux Shell Script</span>
            </div>
            <p className="text-xs text-neutral-400 mb-3">Universal installer with desktop icon:</p>
            <div className="rounded-lg bg-[#090b0c] p-2.5 font-mono text-xs text-neutral-300 border border-white/[0.06] overflow-x-auto">
              <code>$ curl -fsSL https://.../install.sh | bash</code>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#111315] p-5">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <Terminal className="h-4 w-4 text-indigo-400" />
              <span>Windows Winget</span>
            </div>
            <p className="text-xs text-neutral-400 mb-3">Install via the Windows Package Manager:</p>
            <div className="rounded-lg bg-[#090b0c] p-2.5 font-mono text-xs text-neutral-300 border border-white/[0.06] overflow-x-auto">
              <code>&gt; winget install K8Stack.K8Stack</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
