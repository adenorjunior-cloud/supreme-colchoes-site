import type { NextConfig } from "next";
const isPagesBuild = process.env.GITHUB_PAGES === "true";
const isStaticExport = isPagesBuild || process.env.STATIC_EXPORT === "true";
const previewBasePath = process.env.HOSTGATOR_PREVIEW_BASE_PATH?.replace(/\/$/, "");
const staticBasePath = isPagesBuild ? "/supreme-colchoes-site" : previewBasePath;

const config: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  outputFileTracingRoot: process.cwd(),
  trailingSlash: isStaticExport,
  basePath: staticBasePath || undefined,
  assetPrefix: staticBasePath ? `${staticBasePath}/` : undefined,
  images: { unoptimized: isStaticExport },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: { cpus: 2 },
  ...(isStaticExport ? {} : { async headers() { return [{ source: "/(.*)", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, { key: "X-Frame-Options", value: "DENY" }] }]; } }),
};
export default config;
