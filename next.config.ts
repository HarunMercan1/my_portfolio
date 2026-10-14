import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML site to /out,
// which is deployed to Cloudflare Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
