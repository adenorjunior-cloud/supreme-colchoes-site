import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { products } from "@/lib/products";
import { guides } from "@/lib/guide-content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.GITHUB_PAGES === "true") return [];
  const url = getSiteUrl();
  if (!url) return [];
  const paths = [
    { path: "/", priority: 1 },
    { path: "/colchoes/", priority: 0.9 },
    { path: "/ofertas/", priority: 0.8 },
    { path: "/camas/", priority: 0.7 },
    { path: "/cabeceiras/", priority: 0.7 },
    { path: "/marcas/", priority: 0.7 },
    { path: "/guia/", priority: 0.8 },
    ...products.map((product) => ({ path: `/colchoes/${product.slug}/`, priority: 0.7 })),
    ...guides.map((guide) => ({ path: `/guia/${guide.slug}/`, priority: 0.6 })),
  ];
  return paths.map(({ path, priority }) => ({ url: `${url}${path}`, changeFrequency: "monthly", priority }));
}

