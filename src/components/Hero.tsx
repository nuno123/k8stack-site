"use client";

import React, { useState, useRef, useEffect } from "react";
import { Download, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { useDetectedPlatform } from "@/lib/osDetector";
import { ShowcaseFrame } from "@/components/InteractiveShowcase/ShowcaseFrame";

export function Hero() {
  const detected = useDetectedPlatform();
  const [showOsDropdown, setShowOsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showOsDropdown) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOsDropdown(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowOsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showOsDropdown]);

  return (
    <section className="relative overflow-x-clip pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Orca-Exact Top Radial Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[580px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.09),transparent_70%)]"
      />

      <div className="mx-auto max-w-[1200px] px-6">
        {/* Centered Hero Copy */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-[38px] leading-[1.06] font-semibold tracking-[-0.035em] text-white sm:text-[52px] md:text-[62px]">
            Operate 100x faster with the sovereign Kubernetes IDE
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[16.5px] leading-[1.6] text-white/60 md:text-[18px]">
            K8Stack is a high-density desktop cockpit that unifies real-time topology visualization, cluster telemetry, PSS security auditing, and zero-leak local AI incident triage in one native window.
          </p>

          {/* Compact 2-Button Orca-Exact CTA Row */}
          <div className="mt-7 flex flex-wrap items-start justify-center gap-3">
            {/* Primary Download Column */}
            <div ref={dropdownRef} className="relative flex flex-col items-center">
              <div className="inline-flex h-11 items-center rounded-md bg-white text-[14.5px] font-medium tracking-[-0.005em] text-black transition-colors hover:bg-white/90">
                <a
                  href={detected.asset.url}
                  className="inline-flex h-full items-center gap-2 pl-5 pr-3 cursor-pointer whitespace-nowrap"
                >
                  <Download className="h-4 w-4 shrink-0" />
                  <span>{detected.label}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowOsDropdown((prev) => !prev)}
                  aria-expanded={showOsDropdown}
                  aria-haspopup="menu"
                  className="inline-flex h-full items-center border-l border-black/15 px-2.5 text-black/65 hover:text-black cursor-pointer"
                  title="Select platform version"
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-150 ${
                      showOsDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowOsDropdown((prev) => !prev)}
                aria-expanded={showOsDropdown}
                className="mt-2 inline-flex items-center gap-1 text-xs text-white/50 transition-colors hover:text-white cursor-pointer"
              >
                <span>Also for Intel · Windows · Linux</span>
                <ChevronDown
                  className={`h-3 w-3 opacity-60 transition-transform duration-150 ${
                    showOsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showOsDropdown && (
                <div
                  role="menu"
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-72 mt-1 rounded-xl border border-white/[0.1] bg-[#111214]/95 p-2 shadow-2xl backdrop-blur-2xl z-30 text-left"
                >
                  <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-white/40 border-b border-white/[0.06]">
                    Available Platforms
                  </div>
                  <div className="mt-1 flex flex-col gap-1">
                    {SITE_CONFIG.downloads.map((item) => (
                      <a
                        key={item.filename}
                        href={item.url}
                        role="menuitem"
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

            {/* Secondary GitHub Button (Orca-Exact) */}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/[0.12] px-5 text-[14.5px] font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.04]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Interactive Desktop Cockpit Showcase directly inside Hero */}
        <ShowcaseFrame />
      </div>
    </section>
  );
}
