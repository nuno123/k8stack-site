"use client";

import { useEffect, useState } from "react";
import { DownloadAsset, SITE_CONFIG } from "./siteConfig";

export interface DetectedPlatform {
  osName: "macOS" | "Windows" | "Linux" | "Unknown";
  asset: DownloadAsset;
  label: string;
}

export function useDetectedPlatform(): DetectedPlatform {
  const [platform, setPlatform] = useState<DetectedPlatform>({
    osName: "macOS",
    asset: SITE_CONFIG.downloads[0],
    label: "Download for macOS (Apple Silicon)",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = window.navigator.userAgent.toLowerCase();
    const platformStr = (window.navigator.platform || "").toLowerCase();

    if (ua.includes("win") || platformStr.includes("win")) {
      const winAsset = SITE_CONFIG.downloads.find((d) => d.os === "Windows") || SITE_CONFIG.downloads[2];
      setPlatform({
        osName: "Windows",
        asset: winAsset,
        label: "Download for Windows (x64)",
      });
    } else if (ua.includes("linux") || platformStr.includes("linux")) {
      const linuxAsset = SITE_CONFIG.downloads.find((d) => d.os === "Linux" && d.filename.endsWith(".AppImage")) || SITE_CONFIG.downloads[3];
      setPlatform({
        osName: "Linux",
        asset: linuxAsset,
        label: "Download for Linux (.AppImage)",
      });
    } else if (ua.includes("mac") || platformStr.includes("mac")) {
      // Check for Apple Silicon vs Intel
      // Modern WebGL renderer inspection or userAgentData
      let isAppleSilicon = true;
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        if (gl) {
          const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            if (renderer && renderer.includes("Intel")) {
              isAppleSilicon = false;
            }
          }
        }
      } catch {
        // Fallback to Apple Silicon default for modern Macs
        isAppleSilicon = true;
      }

      if (isAppleSilicon) {
        setPlatform({
          osName: "macOS",
          asset: SITE_CONFIG.downloads[0],
          label: "Download for macOS (Apple Silicon)",
        });
      } else {
        setPlatform({
          osName: "macOS",
          asset: SITE_CONFIG.downloads[1],
          label: "Download for macOS (Intel)",
        });
      }
    }
  }, []);

  return platform;
}
