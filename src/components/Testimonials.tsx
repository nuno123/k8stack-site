"use client";

import React from "react";

export function Testimonials() {
  const reviews = [
    {
      author: "Alexandre Rocha",
      handle: "@alexrocha_sre",
      role: "Lead Platform Engineer, FinTech",
      quote:
        "The zero-manifest-leak Ollama triage saved us during an incident with our payment cluster. Diagnosed an OOMKilled cgroup breach and generated the YAML fix in 300ms—all on my MacBook without sending our private banking manifests to third-party clouds.",
      initials: "AR",
      color: "from-blue-600 to-cyan-500",
    },
    {
      author: "Sarah Lindqvist",
      handle: "@sarah_k8s_ops",
      role: "Staff Site Reliability Engineer",
      quote:
        "Finally an open-source Kubernetes cockpit that feels like an IDE and doesn't demand cloud logins or seat subscriptions. The Topology visualizer and integrated PTY terminal make k8s management blazingly fast.",
      initials: "SL",
      color: "from-emerald-500 to-teal-600",
    },
    {
      author: "Diego Morales",
      handle: "@diegosec_ops",
      role: "DevSecOps Architect",
      quote:
        "From a security compliance perspective, K8Stack is exactly what enterprise teams need. Direct workstation mTLS, zero analytics beaconing, and strict adherence to local kubeconfig RBAC. It's now standard issue for our platform team.",
      initials: "DM",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 border-t border-white/[0.06] bg-[#090a0b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white text-balance">
            Built by engineers who operate Kubernetes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/60">
            Trusted by Platform, SRE and DevSecOps engineers managing mission-critical clusters across clouds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="group flex min-w-0 flex-col justify-between gap-8 rounded-xl border border-white/[0.07] bg-surface p-6 transition-colors hover:border-white/[0.14]"
            >
              <p className="text-pretty text-[15px] leading-relaxed text-white/85">
                &ldquo;{r.quote}&rdquo;
              </p>

              <div className="flex min-w-0 items-end justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`size-10 shrink-0 rounded-full bg-gradient-to-tr ${r.color} flex items-center justify-center font-bold text-white text-xs shadow-inner`}
                  >
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[14px]">
                      <span className="font-medium text-white">{r.author}</span>
                      <span className="ml-1.5 text-[13px] text-white/40">{r.handle}</span>
                    </p>
                    <p className="truncate text-[13px] text-white/45">{r.role}</p>
                  </div>
                </div>

                {/* X / Twitter Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-opacity group-hover:opacity-100 text-white/35"
                >
                  <path d="M18.244 2H21l-6.52 7.455L22.152 22h-6.01l-4.707-6.17L6.04 22H3.28l6.973-7.97L2 2h6.163l4.255 5.593zM17.276 20.346h1.527L7.334 3.567H5.695z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
