import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fintech-icons-ar",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
