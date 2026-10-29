"use client";

import React from "react";
import Image from "next/image";

export interface K8StackLogoProps {
  size?: number;
  variant?: "mark" | "full";
  className?: string;
}

export function K8StackLogo({
  size = 22,
  variant = "full",
  className = "",
}: K8StackLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Official 3D Isotype with soft blue aura */}
      <div
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <Image
          src="/icon.png"
          alt="K8Stack Logo"
          width={size}
          height={size}
          className="object-contain drop-shadow-[0_4px_10px_rgba(56,189,248,0.35)]"
          priority
        />
      </div>

      {variant === "full" && (
        <span className="flex items-center tracking-[-0.02em] font-sans font-semibold text-[15px] leading-none">
          <span className="bg-gradient-to-r from-[#38bdf8] via-[#339af0] to-[#748ffc] bg-clip-text text-transparent font-extrabold mr-[1px]">
            K8
          </span>
          <span className="text-white font-bold">Stack</span>
        </span>
      )}
    </div>
  );
}

