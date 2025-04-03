import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/syncthing/:path*",
        destination: "http://localhost:8384/:path*",
      },
      {
        source: "/plex/:path*",
        destination: "http://localhost:32400/web/:path*",
      },
    ];
  },
};

export default nextConfig;
