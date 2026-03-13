import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalsewav3.vercel.app",
      },
    ],
  },
};

export default nextConfig;
