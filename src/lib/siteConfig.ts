export interface DownloadAsset {
  os: "macOS" | "Windows" | "Linux";
  arch: string;
  filename: string;
  label: string;
  size: string;
  type: string;
  recommended?: boolean;
  checksum: string;
  url: string;
}

export const SITE_CONFIG = {
  name: "K8Stack",
  version: "1.0.0",
  tagline: "The Sovereign Kubernetes IDE for Modern Engineering Teams",
  description:
    "Effortlessly visualize topologies, triage incidents in seconds with zero-leak local AI, stream live pod telemetry, and manage multi-cloud clusters from a blazingly fast desktop cockpit.",
  githubUrl: "https://github.com/nuno123/K8Stack",
  siteRepoUrl: "https://github.com/nuno123/k8stack-site",
  author: "Bruno Mariano",
  authorRole: "Senior SRE / DevOps / Cloud Architect",
  authorUrl: "https://github.com/nuno123",
  releaseDate: "October 2026",
  license: "MIT",
  downloads: [
    {
      os: "macOS",
      arch: "Apple Silicon (M1/M2/M3/M4)",
      filename: "k8stack-1.0.0-arm64.dmg",
      label: "macOS (Apple Silicon)",
      size: "84.2 MB",
      type: "DMG Installer",
      recommended: true,
      checksum: "sha256:4f8a29e1c4b7593d6a8f1e29bc48da13e5f762391b8a92fce77148b3c10291e0",
      url: "https://github.com/nuno123/K8Stack/releases/download/v1.0.0/k8stack-1.0.0-arm64.dmg",
    },
    {
      os: "macOS",
      arch: "Intel (x64)",
      filename: "k8stack-1.0.0-x64.dmg",
      label: "macOS (Intel)",
      size: "88.6 MB",
      type: "DMG Installer",
      checksum: "sha256:8b31a29cd67f1839a837c762149bfe38a640192e49c71a3e87019f5a0928b7e2",
      url: "https://github.com/nuno123/K8Stack/releases/download/v1.0.0/k8stack-1.0.0-x64.dmg",
    },
    {
      os: "Windows",
      arch: "x64 (64-bit)",
      filename: "k8stack-Setup-1.0.0.exe",
      label: "Windows (x64)",
      size: "79.4 MB",
      type: "NSIS Installer",
      recommended: true,
      checksum: "sha256:1a84c90ef2918bb40c98f0124801e9124a919248fca8b99147104b20a1c32490",
      url: "https://github.com/nuno123/K8Stack/releases/download/v1.0.0/k8stack-Setup-1.0.0.exe",
    },
    {
      os: "Linux",
      arch: "x64 (.AppImage)",
      filename: "k8stack-1.0.0.AppImage",
      label: "Linux AppImage",
      size: "92.1 MB",
      type: "Universal Portable",
      recommended: true,
      checksum: "sha256:29f8a0cb81267bca910947e258614981a8b9192837bc0148fa71092485bc0192",
      url: "https://github.com/nuno123/K8Stack/releases/download/v1.0.0/k8stack-1.0.0.AppImage",
    },
    {
      os: "Linux",
      arch: "x64 (.deb)",
      filename: "k8stack_1.0.0_amd64.deb",
      label: "Linux Debian / Ubuntu",
      size: "74.8 MB",
      type: "Debian Package",
      checksum: "sha256:58a91bc72e01924bce8194a0812739458019a823b1029487c89104b2819034e1",
      url: "https://github.com/nuno123/K8Stack/releases/download/v1.0.0/k8stack_1.0.0_amd64.deb",
    },
  ] as DownloadAsset[],
  cliCommands: [
    {
      id: "brew",
      label: "Homebrew (macOS)",
      cmd: "brew install --cask k8stack",
      icon: "coffee",
    },
    {
      id: "curl",
      label: "Linux / macOS (sh)",
      cmd: "curl -fsSL https://raw.githubusercontent.com/nuno123/K8Stack/main/scripts/install.sh | bash",
      icon: "terminal",
    },
    {
      id: "winget",
      label: "Windows (Winget)",
      cmd: "winget install K8Stack.K8Stack",
      icon: "box",
    },
    {
      id: "docker",
      label: "Docker (Headless)",
      cmd: "docker run -d -p 8080:8080 -v ~/.kube:/root/.kube:ro ghcr.io/nuno123/k8stack:latest",
      icon: "container",
    },
  ],
};

