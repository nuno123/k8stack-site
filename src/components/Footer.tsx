"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Terminal, ArrowUpRight, Heart } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060708] py-14 text-neutral-400 text-xs font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111315] border border-white/[0.1]">
                <Image
                  src="/icon.svg"
                  alt="K8Stack Logo"
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain"
                />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                K8<span className="text-[#326ce5]">Stack</span>
              </span>
            </Link>
            <p className="mt-3 text-xs text-neutral-400 leading-relaxed font-sans">
              The sovereign Kubernetes desktop control plane engineered for Platform and Site Reliability Engineers.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-400">
              <Shield className="h-3.5 w-3.5" />
              <span>100% Client-Side • Zero Telemetry</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Topology Canvas
                </a>
              </li>
              <li>
                <a href="#ai-copilot" className="hover:text-white transition-colors">
                  Zero-Leak AI SRE
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Telemetry &amp; Metrics
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  PTY Terminal Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Privacy */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Governance &amp; Privacy
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sovereignty" className="hover:text-white transition-colors">
                  Sovereign Architecture
                </a>
              </li>
              <li>
                <a href="#sovereignty" className="hover:text-white transition-colors">
                  Zero Telemetry Audit
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.githubUrl}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>MIT Open License</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <span className="text-neutral-500">Air-Gapped Ready</span>
              </li>
            </ul>
          </div>

          {/* Open Source Hub */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Distribution &amp; Code
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#downloads" className="hover:text-white transition-colors">
                  Download Binaries
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <GithubIcon className="h-3 w-3" />
                  <span>Desktop App Repo</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.siteRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <GithubIcon className="h-3 w-3" />
                  <span>Website Source (k8stack-site)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.githubUrl}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Release Notes (v{SITE_CONFIG.version})</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} K8Stack Project. Built with SRE rigor by{" "}
            <a
              href="https://github.com/nuno123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white font-medium"
            >
              Bruno Mariano
            </a>
            .
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded bg-white/[0.04] px-2 py-0.5 border border-white/[0.06] text-neutral-400">
              No Cookies • No Trackers • 100% Static Edge
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
