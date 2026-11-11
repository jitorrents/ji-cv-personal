import type { NextConfig } from "next";

// '' for a user site (https://<user>.github.io/),
// '/ji-cv-personal' for a project site (https://<user>.github.io/ji-cv-personal/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  // Two root layouts (one per language) need a global 404 page: src/app/global-not-found.tsx.
  experimental: { globalNotFound: true },
};

export default nextConfig;
