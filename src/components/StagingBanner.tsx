"use client";

import React, { useState } from "react";
import { ShieldAlert, X } from "lucide-react";

export function StagingBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative isolate z-50 flex items-center justify-between border-b border-amber-500/20 bg-amber-950/40 px-4 py-2 text-xs font-mono text-amber-300 backdrop-blur-md">
      <div className="mx-auto flex items-center gap-2">
        <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0" />
        <span className="font-semibold text-amber-200">STAGING / INTERNAL VALIDATION MODE:</span>
        <span className="hidden sm:inline text-amber-300/80">
          Strict search-engine shielding enabled (<code className="rounded bg-amber-900/50 px-1 py-0.5 text-amber-200">noindex, nofollow</code>). Custom production domain binding pending final SRE sign-off.
        </span>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="text-amber-400 hover:text-amber-100 p-1 transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

