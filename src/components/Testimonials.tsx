"use client";

import React from "react";
import { MessageSquare, CheckCircle } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      author: "Alexandre Rocha",
      role: "Lead Platform Engineer @ FinTech Scaleup",
      quote:
        "The zero-manifest-leak Ollama triage saved us during an incident with our payment cluster. Diagnosed an OOMKilled cgroup breach and generated the YAML fix in 300ms—all on my MacBook without sending our private banking manifests to third-party clouds.",
      handle: "@alexrocha_sre",
      verified: "Azure AKS & Talos Linux",
    },
    {
      author: "Sarah Lindqvist",
      role: "Staff Site Reliability Engineer",
      quote:
        "Finally an open-source Kubernetes cockpit that feels like an IDE and doesn't demand cloud logins or seat subscriptions. The Topology visualizer and integrated PTY terminal make k8s management blazingly fast.",
      handle: "@sarah_k8s_ops",
      verified: "AWS EKS Multi-Region",
    },
    {
      author: "Diego Morales",
      role: "DevSecOps Architect",
      quote:
        "From a security compliance perspective, K8Stack is exactly what enterprise teams need. Direct workstation mTLS, zero analytics beaconing, and strict adherence to local kubeconfig RBAC. It's now standard issue for our platform team.",
      handle: "@diegosec_ops",
      verified: "Google Cloud GKE & Kind",
    },
  ];

  return (
    <section className="py-16 lg:py-24 border-t border-white/[0.06] bg-[#08090a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-950/30 px-3 py-1 text-xs font-mono font-medium text-[#38bdf8] mb-4">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Community Wall of SRE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built for Engineers On-Call at 3 AM
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Trusted by Platform, SRE and DevOps engineers managing mission-critical clusters across clouds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/[0.08] bg-[#111315] p-6 flex flex-col justify-between hover:border-white/[0.18] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
                  <span className="text-neutral-400">{r.handle}</span>
                  <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
                    <CheckCircle className="h-3 w-3" />
                    <span>{r.verified}</span>
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-300 leading-relaxed italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="font-semibold text-white text-sm">{r.author}</div>
                <div className="text-xs text-neutral-400 mt-0.5">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
