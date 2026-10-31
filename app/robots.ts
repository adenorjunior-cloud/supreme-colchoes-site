import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  if (process.env.GITHUB_PAGES === "true") {
    return { rules: [{ userAgent: "*", disallow: "/" }, { userAgent: "OAI-SearchBot", disallow: "/" }] };
  }
  const url = getSiteUrl();
  return { rules: [{ userAgent: "*", ...(url ? { allow: "/" } : { disallow: "/" }) }, { userAgent: "OAI-SearchBot", ...(url ? { allow: "/" } : { disallow: "/" }) }], ...(url ? { sitemap: `${url}/sitemap.xml` } : {}) };
}
