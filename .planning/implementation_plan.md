# Implementation Plan: K8Stack Developer Landing Page & Preview Hub

**Document:** `.planning/implementation_plan.md`  
**Author:** AI SRE Assistant  
**Audience:** Bruno Mariano (Senior SRE / DevOps / Cloud Architect)  
**Date:** 2026-10-28  
**Status:** In Progress / Staging Validation Mode  

---

## 1. Context & Objectives

K8Stack is an open-source, sovereign desktop Kubernetes IDE and operational environment built for SREs and Platform Engineers. It provides direct cluster communication without proxies or telemetry, local AI incident triage (Ollama/Groq), interactive topology visualizers, and an integrated PTY terminal.

This plan details the implementation of the official developer-first landing page and distribution hub in `k8stack-site`, benchmarked against the visual polish, data-density, and micro-interactions of **onorca.dev**.

### Key Delivery Constraints (Opção 2 - Validação Segura):
1. **Private / Staging Deployment:** Do not attach custom production domain yet. Generate a preview deployment on Cloudflare Pages for Bruno's verification.
2. **Strict Search Engine Shielding:**
   - Next.js Metadata `robots: { index: false, follow: false }`
   - Edge Header `X-Robots-Tag: noindex, nofollow` via `_headers`
   - `public/robots.txt` disallowing all user agents
3. **SSG Architecture (Next.js 15):** Static export (`output: 'export'`) with 0 runtime dependencies, 100/100 Lighthouse performance, sub-500ms edge TTFB.
4. **FinOps & Zero-Cost:** Cloudflare Pages Free Tier ($0/month) with unlimited edge bandwidth and global CDN.

---

## 2. Visual Architecture & Design Language (Orca Benchmark)

- **Color Tokens:**
  - Obsidian Background: `#08090A`
  - Elevated Cards / Surfaces: `#111315` and `#16181B`
  - Subtle Micro-Borders: `border-white/[0.07]` with hover state `border-white/[0.14]`
  - Brand Accents:
    - Kubernetes Blue: `#326CE5` (radial glow `rgba(50, 108, 229, 0.15)`)
    - SRE Green: `#10B981` (pulsing status badges and health indicators)
    - Alert Rose: `#F43F5E` (CrashLoopBackOff indicators and RCA warnings)
- **Typography:**
  - UI Copy: Inter / Geist Sans
  - Code & Telemetry: JetBrains Mono (status badges, CLI scripts, exit codes)

---

## 3. Component Hierarchy

```
src/
├── app/
│   ├── layout.tsx         # HTML root, JetBrains Mono & Inter, noindex metadata
│   ├── page.tsx           # Main Landing Page composition
│   └── globals.css        # Tailwind styles, obsidian theme variables, custom glow animations
├── components/
│   ├── Header.tsx         # Glassmorphic sticky header, GitHub stars badge, CTA
│   ├── StagingBanner.tsx  # Private preview banner indicating unindexed staging status
│   ├── Hero.tsx           # Headline, dynamic OS detector, 1-click CLI installer tab
│   ├── InteractiveShowcase/
│   │   ├── ShowcaseFrame.tsx     # macOS traffic light frame + interactive tabs
│   │   ├── TopologyTab.tsx       # Interactive Pod/Service canvas with minimap & node inspector
│   │   ├── AiCopilotTab.tsx      # CrashLoopBackOff incident triage + Ollama local RCA
│   │   ├── ObservabilityTab.tsx  # High-density Prometheus CPU/RAM/Node telemetry
│   │   └── TerminalStudioTab.tsx # Multi-pod streaming logs and interactive PTY shell
│   ├── CloudEcosystem.tsx # Multi-cloud compatibility strip (AKS, EKS, GKE, OKE, k3s, Kind, Ollama)
│   ├── BentoGrid.tsx      # 5 High-Density feature cards highlighting architectural pillars
│   ├── ArchitectureSection.tsx # Sovereign architecture vs SaaS APM comparison table
│   ├── Testimonials.tsx   # Wall of SRE: Quotes from DevOps, SRE and Cloud Engineers
│   ├── DownloadMatrix.tsx # Direct multi-arch downloads (macOS arm64/x64, Win, Linux AppImage/deb)
│   └── Footer.tsx         # Governance, MIT License, GitHub links, documentation
└── lib/
    ├── osDetector.ts      # Client-side OS / architecture detector
    └── siteConfig.ts      # Canonical metadata, release versions, download URLs
```

---

## 4. Implementation Steps & Verification

| Step | Task | Output / Verification |
| :--- | :--- | :--- |
| **1** | Initialize Next.js 15 + TypeScript + Tailwind + Lucide + Framer Motion | Clean `package.json`, `tsconfig.json`, `tailwind.config.ts` |
| **2** | Copy official K8Stack vector and high-res icon assets from `../K8Stack/resources/` | `public/icon.svg`, `public/icon.png`, favicon |
| **3** | Configure strict SEO & HTTP security headers | `robots.txt`, `_headers` with `X-Robots-Tag: noindex, nofollow` |
| **4** | Build Design System & Layout | Glassmorphic navigation, Staging pill banner, obsidian theme |
| **5** | Implement Hero with Dynamic OS Detection & CLI Switcher | Auto-detects macOS/Win/Linux, copy-to-clipboard Homebrew/curl/winget |
| **6** | Implement Interactive Desktop Showcase | 4 tabbed interactive modules with macOS traffic lights |
| **7** | Implement Bento Grid, Multi-Cloud Strip & Architecture Comparison | High-density SRE cards, zero-leak privacy explanation |
| **8** | Implement Testimonials & Multi-Arch Download Hub | Wall of SRE, SHA256 verification hashes, package manager links |
| **9** | Build Validation (`npm run build`) | Static export in `out/`, 0 TypeScript errors, 0 warnings |
| **10** | Cloudflare Pages Preview Deploy | Direct deployment to Cloudflare Pages staging URL |
| **11** | Git Commit & Push | Push to `origin/main` on `nuno123/k8stack-site` |
