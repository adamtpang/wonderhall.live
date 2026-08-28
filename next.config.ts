import type { NextConfig } from "next";
import path from "node:path";
import { SECURITY_HEADERS } from "./config/security.mjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
