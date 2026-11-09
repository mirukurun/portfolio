import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node.js server)
  output: "export",
  // /design -> /design/index.html, which GitHub Pages serves natively
  trailingSlash: true,
  // GitHub Pages can't run the Next.js image optimizer
  images: { unoptimized: true },
};

export default nextConfig;
