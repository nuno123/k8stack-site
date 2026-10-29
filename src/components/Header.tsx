"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Download, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [starCount, setStarCount] = useState<string>("1.2k");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Fetch live stars if available
    fetch("https://api.github.com/repos/nuno123/K8Stack")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          const stars = data.stargazers_count;
          setStarCount(stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars.toString());
        }
      })
      .catch(() => {
        // fallback
      });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-white/[0.07] bg-[#08090a]/85 backdrop-blur-xl shadow-2xl shadow-black/60"
          : "border-b border-white/[0.04] bg-[#08090a]/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo & Release Badge */}
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#111315] border border-white/[0.1] shadow-inner transition-transform group-hover:scale-105">
              <Image
                src="/icon.svg"
                alt="K8Stack Logo"
                width={26}
                height={26}
                className="h-6 w-6 object-contain"
                priority
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-mono">
              K8<span className="text-[#326ce5]">Stack</span>
            </span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>v{SITE_CONFIG.version} Live</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a
            href="#features"
            className="transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Features
          </a>
          <a
            href="#showcase"
            className="transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Cockpit
          </a>
          <a
            href="#ai-copilot"
            className="flex items-center gap-1.5 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <span>Local AI</span>
            <span className="rounded bg-[#326ce5]/20 px-1.5 py-0.2 text-[10px] font-mono text-[#38bdf8] border border-[#326ce5]/30">
              Zero-Leak
            </span>
          </a>
          <a
            href="#sovereignty"
            className="transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Architecture
          </a>
          <a
            href="#downloads"
            className="transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Downloads
          </a>
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-400 transition-colors hover:text-white"
          >
            <span>Docs</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/[0.09] bg-[#111315]/80 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-all hover:border-white/[0.2] hover:bg-[#16181b] hover:text-white"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">GitHub</span>
            <span className="flex items-center gap-1 border-l border-white/[0.1] pl-2 text-neutral-400 font-mono text-[11px]">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              {starCount}
            </span>
          </a>

          <a
            href="#downloads"
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-[#326ce5] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-[#326ce5]/20 transition-all hover:bg-[#2557bd] hover:shadow-[#326ce5]/40"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Get K8Stack</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/[0.1] p-1.5 text-neutral-300 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#0c0e10]/95 px-4 py-4 md:hidden backdrop-blur-xl">
          <div className="flex flex-col gap-3 font-medium text-sm text-neutral-300">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Features
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Cockpit Showcase
            </a>
            <a
              href="#ai-copilot"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Zero-Leak Local AI
            </a>
            <a
              href="#sovereignty"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Architecture & Security
            </a>
            <a
              href="#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Downloads & Matrix
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-1 text-neutral-400 hover:text-white"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="pt-2">
              <a
                href="#downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#326ce5] py-2 text-center text-xs font-semibold text-white"
              >
                <Download className="h-4 w-4" />
                <span>Download Desktop App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
