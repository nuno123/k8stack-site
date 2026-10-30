"use client";

import React from "react";
import { Cloud } from "lucide-react";

export function CloudEcosystem() {
  const providers = [
    { name: "Azure AKS", badge: "az aks get-credentials" },
    { name: "AWS EKS", badge: "aws eks update-kubeconfig" },
    { name: "Google Cloud GKE", badge: "gcloud container clusters" },
    { name: "Oracle OCI OKE", badge: "oci ce cluster create-kubeconfig" },
    { name: "On-Prem / Edge", badge: "Talos • k3s • Kind" },
    { name: "Local AI Engines", badge: "Ollama • Groq • Llama 3.2" },
  ];

  return (
    <section className="py-10 md:py-12 border-y border-white/[0.06] bg-[#090a0b]/60">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-5">
          <p className="text-xs font-mono uppercase tracking-widest text-white/45">
            Bring your own clusters &amp; local AI runtimes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {providers.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/[0.07] bg-surface hover:border-white/[0.14] transition-colors text-center"
            >
              <div className="flex items-center gap-1.5 font-medium text-xs text-white">
                <Cloud className="h-3.5 w-3.5 text-white/40" />
                <span>{p.name}</span>
              </div>
              <div className="mt-1.5 text-[10px] font-mono text-white/40 truncate max-w-full">
                {p.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
