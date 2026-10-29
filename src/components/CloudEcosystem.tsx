"use client";

import React from "react";
import { Cloud, Layers, ShieldCheck, Cpu } from "lucide-react";

export function CloudEcosystem() {
  const providers = [
    { name: "Azure AKS", badge: "az aks get-credentials", color: "#0078d4" },
    { name: "AWS EKS", badge: "aws eks update-kubeconfig", color: "#ff9900" },
    { name: "Google Cloud GKE", badge: "gcloud container clusters", color: "#4285f4" },
    { name: "Oracle OCI OKE", badge: "oci ce cluster create-kubeconfig", color: "#f80000" },
    { name: "On-Prem / Edge", badge: "k3s • Talos • Kind • Minikube", color: "#10b981" },
    { name: "Local AI Engines", badge: "Ollama • Groq • Llama 3.2", color: "#38bdf8" },
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#090b0c]/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Native Multi-Cloud &amp; Sovereign Edge Compatibility
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {providers.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-white/[0.06] bg-[#111315]/60 hover:bg-[#15171a] hover:border-white/[0.14] transition-all group text-center"
            >
              <div className="flex items-center gap-1.5 font-bold text-xs text-white group-hover:text-[#38bdf8] transition-colors">
                <Cloud className="h-3.5 w-3.5 opacity-70" />
                <span>{p.name}</span>
              </div>
              <div className="mt-1 text-[10px] font-mono text-neutral-500 truncate max-w-full">
                {p.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
