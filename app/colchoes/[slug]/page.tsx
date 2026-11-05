import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import WhatsApp from "@/components/WhatsApp";
import { assetPath } from "@/lib/asset-path";
import { serializeJsonLd } from "@/lib/json-ld";
import { getProduct, products } from "@/lib/products";
import { getSiteUrl } from "@/lib/site";
import { stores } from "@/lib/stores";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const product = getProduct((await params).slug); return product ? { title: product.name, description: product.summary, alternates: { canonical: `/colchoes/${product.slug}/` } } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug); if (!product) notFound();
  const siteUrl = getSiteUrl();
  const productUrl = siteUrl ? `${siteUrl}/colchoes/${product.slug}/` : undefined;
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: siteUrl ? `${siteUrl}${product.image}` : product.image,
    category: "Colchões",
    brand: { "@type": "Brand", name: product.brand },
    ...(productUrl ? { url: productUrl } : {}),
    ...(product.price ? { offers: { "@type": "Offer", priceCurrency: "BRL", price: product.price.toFixed(2), availability: "https://schema.org/InStock", ...(productUrl ? { url: productUrl } : {}) } } : {}),
  };
  return <main id="conteudo"><section className="product-detail section"><div className={`product-detail-art product-art--${product.category}`}><Image className="product-image" src={assetPath(product.image)} alt={product.name} fill priority sizes="(max-width: 760px) 100vw, 50vw" /><b>{product.brand}</b></div><div><Link className="breadcrumb" href="/colchoes">Catálogo</Link><p className="eyebrow">{product.brand} · {product.category}</p><h1>{product.name}</h1><p className="product-summary">{product.summary}</p><dl><div><dt>Tamanhos</dt><dd>{product.sizes.length ? product.sizes.join(", ") : "Consulte a unidade"}</dd></div><div><dt>Disponibilidade</dt><dd>{product.availability}</dd></div><div><dt>Preço</dt><dd>{product.price ? `R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Consulte condições"}</dd></div></dl><div className="product-actions"><WhatsApp phone={stores[0].whatsapp}>Consultar pelo WhatsApp</WhatsApp><Link className="text-link" href="/lojas/">Ver unidades Supreme ↗</Link></div><p className="product-note">Informações do catálogo sujeitas à confirmação de estoque, configuração, preço e condições no atendimento.</p></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(productData) }} /></main>;
}

