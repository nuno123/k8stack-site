"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { K8StackLogo } from "@/components/brand/K8StackLogo";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#090a0b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Left: Official Brand Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-85">
            <K8StackLogo size={24} variant="full" />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#cockpit"
              className="inline-flex h-8 items-center px-3 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              Cockpit
            </a>
            <a
              href="#features"
              className="inline-flex h-8 items-center px-3 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              Features
            </a>
            <a
              href="#sovereignty"
              className="inline-flex h-8 items-center px-3 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              Sovereignty
            </a>
            <a
              href="#faq"
              className="inline-flex h-8 items-center px-3 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              FAQ
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center px-3 text-[13.5px] font-medium tracking-[-0.005em] transition-colors text-white/65 hover:text-white"
            >
              <span>Docs</span>
              <ArrowUpRight className="ml-1 h-3 w-3 opacity-60" />
            </a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Authentic GitHub Link (Zero fake stars) */}
          <a
            href={SITE_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-2 rounded-md px-3 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white border border-white/[0.08]"
            title="GitHub Repository"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
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
            className="md:hidden inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.1] text-white/80 transition-colors hover:border-white/20 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#090a0b]/95 px-6 py-4 md:hidden backdrop-blur-2xl">
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
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 text-white/70 hover:text-white flex items-center justify-between"
            >
              <span>GitHub</span>
              <GithubIcon className="h-4 w-4" />
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
