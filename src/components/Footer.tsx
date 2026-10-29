"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { K8StackLogo } from "@/components/brand/K8StackLogo";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070809] py-14 text-white/50 text-[13px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <K8StackLogo size={22} variant="full" />
            </Link>
            <p className="mt-3 text-xs text-white/50 leading-relaxed">
              The sovereign Kubernetes desktop control plane engineered for Platform and Site Reliability Engineers.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <Shield className="h-3.5 w-3.5" />
              <span>100% Client-Side • Zero Telemetry</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-medium text-white text-[13px] mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#cockpit" className="text-white/50 hover:text-white transition-colors">
                  Desktop Cockpit
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/50 hover:text-white transition-colors">
                  Topology Visualizer
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/50 hover:text-white transition-colors">
                  Zero-Leak AI SRE
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/50 hover:text-white transition-colors">
                  Security Center
                </a>
              </li>
            </ul>
          </div>

          {/* Sovereignty & Privacy */}
          <div>
            <h4 className="font-medium text-white text-[13px] mb-3">
              Security &amp; Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sovereignty" className="text-white/50 hover:text-white transition-colors">
                  Sovereign Architecture
                </a>
              </li>
              <li>
                <a href="#sovereignty" className="text-white/50 hover:text-white transition-colors">
                  Zero Telemetry Posture
                </a>
              </li>
              <li>
                <a
                  href={`${SITE_CONFIG.githubUrl}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>MIT Open License</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <span className="text-white/30">Air-Gapped Ready</span>
              </li>
            </ul>
          </div>

          {/* Open Source Hub */}
          <div>
            <h4 className="font-medium text-white text-[13px] mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#downloads" className="text-white/50 hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>Desktop App Repo</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.siteRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>Site Source Code</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            &copy; {new Date().getFullYear()} K8Stack Project. Built with SRE rigor by{" "}
            <a
              href="https://github.com/nuno123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium"
            >
              Bruno Mariano
            </a>
            .
          </div>
          <div>
            <span className="rounded bg-white/[0.04] px-2 py-0.5 border border-white/[0.06] text-white/50 text-[11px] font-mono">
              Zero Cookies • Zero Trackers • 100% Static Edge
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
