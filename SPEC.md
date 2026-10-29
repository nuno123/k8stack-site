# Technical Specification: Developer-First Marketing Site & Download Hub (Inspired by onorca.dev)

**Document Reference:** `.planning/WEBSITE_ONORCA_INSPIRATION_SPEC.md`  
**Author:** AI SRE Assistant  
**Audience:** Bruno Mariano (Senior SRE / DevOps / Cloud Architect)  
**Status:** Ready for Review / Approved  
**Inspiration Reference:** [onorca.dev](https://www.onorca.dev) (Orca ADE landing page)

---

## 1. Executive Summary & Vision

The goal of this initiative is to build a high-performance, developer-first landing page and distribution hub for **K8Stack**, inspired by the sleek, high-density, dark-mode aesthetic of **onorca.dev**.

While `onorca.dev` positions itself as the "Agent Development Environment" for parallel AI coding agents, **K8Stack** will be positioned as:
> **"The Kubernetes Control Plane for Modern Engineering Teams"**  
> *Visualize complex topologies, triage incidents in seconds with zero-leak local AI, and manage multi-cloud clusters from a blazingly fast desktop cockpit.*

---

## 2. Design System & UI/UX Principles (Orca Benchmark)

### 2.1. Visual Identity & Atmosphere
- **Color Palette:**
  - Deep Obsidian Canvas: `#08090A` / `#0B0D0E`
  - Subtle Surface Elevation: `#111315` / `#16181B`
  - Subtle Structural Borders: `border-white/[0.07]` with hover highlight to `border-white/[0.14]`
  - Accents: Electric Kubernetes Cyan (`#326CE5`), SRE Emerald (`#10B981` / `#00FF88`), Incident Alert Amber/Rose (`#F43F5E`)
- **Typography:**
  - Primary UI: `Inter` / `Geist Sans` (clean, high-legibility geometric sans)
  - Code, Telemetry & Tags: `JetBrains Mono` / `Geist Mono` (for commands, pod statuses, CLI snippets)
- **Micro-Interactions & Polish:**
  - Subtle radial gradient glow behind hero and feature highlights
  - Pulsing live status indicator (`v1.0.0 Live Release`)
  - macOS traffic light window frames on mockups and interactive terminal previews
  - Smooth hover transitions and fluid tab switches (powered by Framer Motion)

---

## 3. Structural Information Architecture (Wireframe Flow)

```
┌────────────────────────────────────────────────────────────────────────┐
│ [K8Stack Logo]  Features  Architecture  Copilot  Docs  [⭐ GitHub] [Download]│
├────────────────────────────────────────────────────────────────────────┤
│                                HERO SECTION                            │
│  [Badge: v1.0.0 is live • Open Source & Privacy-First]                 │
│                                                                        │
│           The Kubernetes Control Plane for Modern SREs                 │
│                                                                        │
│    Effortlessly visualize topologies, triage incidents in seconds with  │
│    zero-leak local AI, stream live pod telemetry, and manage clusters. │
│                                                                        │
│    [ Download K8Stack (macOS) ▾ ]    [ $ brew install --cask k8stack 📋]│
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ [● ● ●] Tabs: Topology | Live Metrics | AI Copilot | PTY Studio│   │
│   │                                                                │   │
│   │          Interactive Desktop App Showcase & Video/Mockup       │   │
│   └────────────────────────────────────────────────────────────────┘   │
├────────────────────────────────────────────────────────────────────────┤
│                       MULTI-CLOUD ECOSYSTEM STRIP                      │
│     [Kubernetes]   [Azure AKS]   [AWS EKS]   [Google GKE]   [Ollama]   │
├────────────────────────────────────────────────────────────────────────┤
│                          BENTO FEATURE GRID                            │
│  ┌───────────────────────────────┐ ┌────────────────────────────────┐  │
│  │ 1. Visual Topology Canvas     │ │ 2. Private AI SRE Copilot      │  │
│  │    Real-time node/pod graph   │ │    Local Ollama & Groq RCA     │  │
│  └───────────────────────────────┘ └────────────────────────────────┘  │
│  ┌──────────────────┐ ┌──────────────────┐ ┌────────────────────────┐  │
│  │ 3. Day-Zero Obs. │ │ 4. Multi-Kube    │ │ 5. PTY Terminal Studio │  │
│  │    Metrics & RCA │ │    Azure/AWS/GCP │ │    Multi-Pod Shells    │  │
│  └──────────────────┘ └──────────────────┘ └────────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│                     CLI & PACKAGE MANAGER MATRIX                       │
│  [ macOS (Brew) ]  [ Linux (curl/sh) ]  [ Windows (winget) ]  [ Docker ]│
├────────────────────────────────────────────────────────────────────────┤
│                    COMMUNITY TESTIMONIALS (WALL OF SRE)                │
│  [ Review Card 1 (X/GH) ]    [ Review Card 2 ]    [ Review Card 3 ]    │
├────────────────────────────────────────────────────────────────────────┤
│                       FOOTER & OPEN GOVERNANCE                         │
│  Docs • GitHub Releases • Privacy & Security • License (MIT)           │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Key Sections & Detailed Deliverables

### 4.1. Navigation & Header
- Sticky header with backdrop blur (`backdrop-blur-md bg-black/60`).
- Left: K8Stack icon + typography.
- Center: Quick anchors (`Features`, `Architecture`, `AI SRE Copilot`, `Docs`).
- Right: Real-time GitHub Star counter badge + Primary Action button (`Download K8Stack`).

### 4.2. Hero & Quick Conversion
- **Headline (H1):** High-impact title optimized for developer conversion.
- **Dynamic OS Detection:** Detects `navigator.userAgent` to serve the right binary:
  - macOS (Apple Silicon `arm64.dmg` / Intel `x64.dmg`)
  - Linux (`.deb` / `.AppImage`)
  - Windows (`.exe` / `.msi`)
- **Copy-to-Clipboard CLI snippet:** One-click copy for quick installation via Homebrew / Shell script.
- **Hero Interactive Showcase:** Tabbed preview mimicking the desktop client with zero lag.

### 4.3. Bento Grid Showcase
1. **Interactive Workload Topology:** Demonstrating dependency discovery, services, ingresses, and node groupings with visual health indicators.
2. **Zero-Data-Leak AI SRE Copilot:** Highlighting sovereign incident triage with local Ollama (`llama3.2`, `qwen2.5-coder`, `deepseek-r1`) or high-speed Groq with zero manifest leakage to proprietary clouds.
3. **Deep Pod RCA & CrashLoop Diagnostics:** One-click logs, exit codes, container restart inspection, and guided remediation.
4. **Enterprise Multi-Cloud Kubeconfig Management:** Direct login via Azure CLI (`az aks get-credentials`), AWS IAM, GKE, and local Kind/Minikube/k3s setups.
5. **Integrated Terminal Studio:** Native PTY terminal with multi-pod streaming logs and pod exec sessions.

### 4.4. Security, Privacy & SRE Day-Zero Alignment
- **"Your Clusters, Your Secrets, 100% Client-Side":** Clearly communicate that K8Stack does not route cluster credentials or telemetry through any central proxy. All communication is direct workstation-to-kube-api.
- **Zero Data Ingestion / No Repo Bloat:** The site operates strictly as a static showcase/hub. It does not push user data, telemetry, or cluster payloads back into the repository or any remote backend.
- **Repository Isolation:** To prevent repo bloat (heavy media, screenshots, web dependencies, static build output), the website will NOT be stored inside the main desktop application repository (`nuno123/K8Stack`). Instead, it will be developed in an isolated repository (e.g., `nuno123/k8stack-site`) or an orphan branch, maintaining strict separation of concerns.
- **Analytics:** Cookie-less, GDPR-compliant tracking (Plausible or Umami) ensuring zero developer tracking.

---

## 5. Technology Stack & FinOps Strategy

| Component | Choice | Justification |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) or Astro | SSG (Static Site Generation), sub-500ms TTFB, 100/100 Lighthouse score. |
| **Styling** | Tailwind CSS v4 + Radix UI Primitives | Data-dense components, accessible modals, sleek micro-borders matching onorca. |
| **Animations** | Framer Motion / Lucide Icons | Smooth entrance animations, hover glows, and crisp developer icons. |
| **Hosting (FinOps)** | **Cloudflare Pages** | **\$0/month cost (100% Free Tier)**. Unlimited edge bandwidth, 500 builds/month, free automatic SSL/TLS, HTTP/3, and DDoS protection. |
| **Domain & DNS** | **Cloudflare DNS (Custom Domain)** | Hosted directly on Bruno Mariano's existing Cloudflare account where the custom domain is already managed. Zero migration overhead, instantaneous edge propagation. |
| **Repository Separation** | Isolated Repository (`k8stack-site`) | Ensures the core K8Stack desktop repo remains clean without Web build dependencies, static assets, or commit noise. |
| **CI/CD Pipeline** | Cloudflare Pages Git Integration | Native zero-config build webhook on push to `main` with automated preview deployments on pull requests. |

---

## 6. Acceptance Criteria (Definition of Done)

- [ ] Isolated repository configured (e.g., `k8stack-site`) to ensure no website assets or dependencies pollute the main K8Stack desktop repo.
- [ ] Onorca-inspired dark theme with Inter and JetBrains Mono fonts fully configured.
- [ ] Responsive navigation bar with sticky blur and dynamic GitHub stars fetcher.
- [ ] Hero section with OS auto-detection and copyable CLI install snippets.
- [ ] Interactive Bento Grid showcasing Topology, AI Copilot, Metrics, and Kubeconfig management.
- [ ] Interactive tabbed app preview component.
- [ ] Social proof / SRE community quote cards.
- [ ] Comprehensive SEO meta tags, OpenGraph images, and sitemap.
- [ ] Deployment hooked directly into **Cloudflare Pages** attached to Bruno Mariano's custom domain with **$0 hosting cost**.
- [ ] Zero telemetry/user data persisted or pushed back to repository/servers.

