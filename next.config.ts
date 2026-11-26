import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  experimental: {
    // @ts-ignore
    agentUpgrade: "security",
  },
};

export default nextConfig;
