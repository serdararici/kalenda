import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Build sırasında ESLint hatalarını yok sayar (deploy için)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
