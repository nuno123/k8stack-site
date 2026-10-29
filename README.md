# K8Stack Landing Page & Distribution Hub

> Official developer-first landing page and distribution hub for [K8Stack](https://github.com/nuno123/K8Stack), inspired by [onorca.dev](https://www.onorca.dev).

---

## 🚀 Vision & Positioning
**"The Sovereign Kubernetes IDE for Modern Engineering Teams"**  
Visualize complex cluster topologies, triage incidents in seconds with zero-leak local AI (Ollama/Groq), stream live pod telemetry, and manage multi-cloud clusters—all from a blazingly fast desktop cockpit.

---

## 🔒 Security & Privacy (Staging Validation Mode)
- **Strict Search Engine Shielding:**
  - `robots.txt` disallowing all crawlers (`Disallow: /`)
  - HTTP header `X-Robots-Tag: noindex, nofollow, noarchive` configured via Cloudflare `_headers`
  - HTML `<meta name="robots" content="noindex, nofollow, noarchive" />`
- **Zero Remote Telemetry:** No cookies, no external trackers, no analytics beacons.
- **Sovereign Client-Side Execution:** Direct workstation-to-kube-api mTLS on port 6443.

---

## 🛠️ Tech Stack & Architecture
- **Framework:** Next.js 15 (App Router, Static Export SSG)
- **Styling:** Tailwind CSS v4, Lucide Icons, Custom Obsidian Tokens
- **Interactive Engine:** React 19, Framer Motion
- **Hosting (FinOps):** Cloudflare Pages ($0/month Free Tier Edge CDN, global HTTP/3, automated SSL/TLS)

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Open http://localhost:3000

# Typecheck and production static export
npm run build
```

---

## ☁️ Staging & Deployment

The static output in `./out` deploys directly to Cloudflare Pages:

```bash
CLOUDFLARE_ACCOUNT_ID="fbb72f81c7f15c2a23e0ea3c2e759195" \
CLOUDFLARE_API_TOKEN="<TOKEN>" \
npx wrangler pages deploy out --project-name=k8stack-preview --branch=main
```

- **Staging Preview URL:** [https://k8stack-preview.pages.dev](https://k8stack-preview.pages.dev)
- **Immutable Deployment Hash:** [https://ef0d2b9c.k8stack-preview.pages.dev](https://ef0d2b9c.k8stack-preview.pages.dev)

---

## 📋 Architectural Specifications
Full architectural and UI design specifications are documented in [SPEC.md](./SPEC.md) and [.planning/implementation_plan.md](./.planning/implementation_plan.md).
