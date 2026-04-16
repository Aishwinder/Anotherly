import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /** Keeps tracing rooted in this app when a parent folder also has a package-lock.json */
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
