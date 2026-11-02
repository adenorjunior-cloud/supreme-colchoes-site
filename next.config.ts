import type { NextConfig } from "next";
const isPagesBuild = process.env.GITHUB_PAGES === "true";
const isStaticExport = isPagesBuild || process.env.STATIC_EXPORT === "true";

const config: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  outputFileTracingRoot: process.cwd(),
  trailingSlash: isStaticExport,
  basePath: isPagesBuild ? "/supreme-colchoes-site" : undefined,
  assetPrefix: isPagesBuild ? "/supreme-colchoes-site/" : undefined,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: { cpus: 2 },
  ...(isStaticExport ? {} : { async headers() { return [{ source: "/(.*)", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, { key: "X-Frame-Options", value: "DENY" }] }]; } }),
};
export default config;
