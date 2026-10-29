"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      q: "What is K8Stack?",
      a: "K8Stack is an open-source, self-sovereign desktop IDE and operational cockpit for Kubernetes. It runs locally on your workstation, communicating directly with target clusters via your native kubeconfig contexts without proxy layers, centralized SaaS gateways, or external analytics.",
    },
    {
      q: "How is K8Stack different from Lens Desktop or k9s?",
      a: "Unlike Lens, K8Stack does not require cloud accounts, telemetry beacons, or paid per-seat subscriptions. While k9s is a great CLI tool, K8Stack provides a visual workload topology canvas, integrated Monaco YAML diffing, Prometheus sparklines, and zero-leak local AI triage in a unified desktop interface.",
    },
    {
      q: "How does the air-gapped local AI copilot work?",
      a: "K8Stack interfaces directly with your local Ollama runtime (supporting Llama 3.2, Qwen 2.5 Coder, and DeepSeek R1) or zero-retention Groq endpoints. Incident analysis and log traces are processed strictly in workstation memory—no manifests, tokens, or private secrets ever egress to third-party clouds.",
    },
    {
      q: "Does it run on macOS, Windows, and Linux?",
      a: "Yes. K8Stack is built for cross-platform parity. We provide signed universal DMGs for macOS (Apple Silicon arm64 & Intel x64), NSIS installers for Windows, and both .AppImage and .deb packages for Linux.",
    },
    {
      q: "Are my cluster credentials or manifests ever sent to third-party servers?",
      a: "Never. All communication is direct workstation-to-kube-api mTLS on port 6443. Credentials remain secured in your OS keychain and ~/.kube/config.",
    },
    {
      q: "Is K8Stack completely free and open source?",
      a: "Yes. K8Stack is 100% open source under the MIT License. Free forever for individuals, startups, and enterprise platform teams.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 border-t border-white/[0.06] bg-[#090a0b]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-10">
          Frequently asked questions
        </h2>

        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07] max-w-4xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-start justify-between text-left text-[16px] font-medium tracking-[-0.01em] text-white hover:text-white/80 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 ml-4 text-white/40 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-[14px] leading-relaxed text-white/60 text-pretty">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
