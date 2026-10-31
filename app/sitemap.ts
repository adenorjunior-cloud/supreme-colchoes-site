import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.GITHUB_PAGES === "true") return [];
  const url = getSiteUrl();
  return url ? [{ url, changeFrequency: "monthly", priority: 1 }] : [];
}
