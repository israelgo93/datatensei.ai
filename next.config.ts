import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  generateBuildId: async () =>
    process.env.APP_BUILD_ID ?? process.env.GITHUB_SHA?.slice(0, 12) ?? "datatensei-ai-dev",
};

export default nextConfig;
