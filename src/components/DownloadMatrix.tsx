"use client";

import React, { useState } from "react";
import { Download, Copy, Check, ShieldCheck, Hash } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SITE_CONFIG, DownloadAsset } from "@/lib/siteConfig";
import { useDetectedPlatform } from "@/lib/osDetector";

export function DownloadMatrix() {
  const detected = useDetectedPlatform();
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <section id="downloads" className="py-12 md:py-16 border-t border-white/[0.06] bg-[#090a0b] relative">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Orca-Style Big CTA Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-[-0.03em] text-white">
            Get K8Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/60">
            Free and open-source under MIT. Compiled for macOS, Windows, and Linux with zero telemetry.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={detected.asset.url}
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-white px-6 text-[14.5px] font-medium text-black transition hover:bg-white/90"
            >
              <Download className="h-4 w-4" />
              <span>{detected.label}</span>
            </a>

            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/[0.12] px-5 text-[14.5px] font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.04]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Binary Matrix Table */}
        <div className="rounded-xl border border-white/[0.07] bg-surface overflow-hidden shadow-2xl">
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/[0.07] flex flex-wrap items-center justify-between gap-2">
            <span className="font-medium text-white text-sm">
              Official Production Binaries (v{SITE_CONFIG.version})
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>SHA256 Authenticated</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-white/[0.06] bg-black/20 text-white/40 uppercase text-[10px]">
                <tr>
                  <th className="px-6 py-3.5">Platform &amp; Architecture</th>
                  <th className="px-4 py-3.5">Format</th>
                  <th className="px-4 py-3.5">Size</th>
                  <th className="px-4 py-3.5">SHA256 Checksum</th>
                  <th className="px-6 py-3.5 text-right">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-white/70">
                {SITE_CONFIG.downloads.map((asset: DownloadAsset) => (
                  <tr key={asset.filename} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-3.5 font-medium text-white">
                      <div className="flex items-center gap-2">
                        <span>{asset.label}</span>
                        {asset.recommended && (
                          <span className="rounded bg-white/[0.08] px-2 py-0.5 text-[9px] font-semibold text-white/90">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-white/35 mt-0.5">{asset.filename}</div>
                    </td>
                    <td className="px-4 py-3.5 text-white/50">{asset.type}</td>
                    <td className="px-4 py-3.5 text-white/60">{asset.size}</td>
                    <td className="px-4 py-3.5">
                      <button
                        type="button"
                        onClick={() => copyHash(asset.checksum)}
                        className="flex items-center gap-1.5 rounded bg-black/40 px-2 py-1 text-[10px] text-white/40 hover:text-white border border-white/[0.06] transition-colors max-w-[200px]"
                        title="Click to copy SHA256 checksum"
                      >
                        <Hash className="h-3 w-3 shrink-0 text-white/30" />
                        <span className="truncate">{asset.checksum}</span>
                        {copiedHash === asset.checksum ? (
                          <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                        ) : (
                          <Copy className="h-3 w-3 opacity-50 shrink-0" />
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <a
                        href={asset.url}
                        className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.08] hover:bg-white/[0.15] px-3 py-1.5 text-white font-medium text-xs transition-colors"
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
      </div>
    </section>
  );
}
