import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Avoid picking the stray lockfile in ~/ when resolving the workspace root
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
