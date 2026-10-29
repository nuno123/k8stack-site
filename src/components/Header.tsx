"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Download, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState<string>("1.2k");

  useEffect(() => {
    fetch("https://api.github.com/repos/nuno123/K8Stack")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          const stars = data.stargazers_count;
          setStarCount(stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars.toString());
        }
      })
      .catch(() => {});
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#090a0b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-85">
            <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-[#111214] border border-white/[0.1] shadow-inner">
              <Image
                src="/icon.svg"
                alt="K8Stack Logo"
                width={20}
                height={20}
                className="h-4.5 w-4.5 object-contain"
                priority
              />
            </div>
            <span className="text-[15px] font-semibold tracking-[-0.02em] font-mono">
              K8<span className="text-[#326ce5]">Stack</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#cockpit"
              className="inline-flex h-8 items-center px-2.5 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              Cockpit
            </a>
            <a
              href="#features"
              className="inline-flex h-8 items-center px-2.5 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              Features
            </a>
            <a
              href="#sovereignty"
              className="inline-flex h-8 items-center px-2.5 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              Sovereignty
            </a>
            <a
              href="#faq"
              className="inline-flex h-8 items-center px-2.5 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              FAQ
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center px-2.5 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              <span>Docs</span>
              <ArrowUpRight className="ml-1 h-3 w-3 opacity-60" />
            </a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Star Button */}
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-[13px] font-medium text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white border border-white/[0.06]"
          >
            <GithubIcon className="h-3.5 w-3.5 text-white/80" />
            <span className="hidden sm:inline">Star</span>
            <span className="flex items-center gap-1 text-white/40 border-l border-white/[0.1] pl-1.5 font-mono text-[11px]">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-white/80">{starCount}</span>
            </span>
          </a>

          {/* Orca-Style White Download Button */}
          <a
            href="#downloads"
            className="inline-flex items-center justify-center font-medium tracking-[-0.005em] bg-white text-black hover:bg-white/90 rounded-md transition-colors gap-1.5 cursor-pointer whitespace-nowrap h-8 px-3.5 text-[13px]"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.1] text-white/80 transition-colors hover:border-white/20 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#090a0b]/95 px-4 py-4 md:hidden backdrop-blur-2xl">
          <div className="flex flex-col gap-2 font-medium text-sm text-neutral-300">
            <a
              href="#cockpit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/70 hover:text-white"
            >
              Cockpit
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/70 hover:text-white"
            >
              Features
            </a>
            <a
              href="#sovereignty"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/70 hover:text-white"
            >
              Sovereignty
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-white/70 hover:text-white"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href="#downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 text-center text-xs font-semibold text-black"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Desktop App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
