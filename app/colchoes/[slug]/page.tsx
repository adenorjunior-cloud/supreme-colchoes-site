import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import WhatsApp from "@/components/WhatsApp";
import { assetPath } from "@/lib/asset-path";
import { getProduct, products } from "@/lib/products";
import { stores } from "@/lib/stores";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const product = getProduct((await params).slug); return product ? { title: product.name, description: product.summary } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug); if (!product) notFound();
  return <main id="conteudo"><section className="product-detail section"><div className={`product-detail-art product-art--${product.category}`}><Image className="product-image" src={assetPath(product.image)} alt={product.name} fill priority sizes="(max-width: 760px) 100vw, 50vw" /><b>{product.brand}</b></div><div><Link className="breadcrumb" href="/colchoes">Catálogo</Link><p className="eyebrow">{product.brand} · {product.category}</p><h1>{product.name}</h1><p className="product-summary">{product.summary}</p><dl><div><dt>Tamanhos</dt><dd>{product.sizes.length ? product.sizes.join(", ") : "Consulte a unidade"}</dd></div><div><dt>Disponibilidade</dt><dd>{product.availability}</dd></div><div><dt>Preço</dt><dd>{product.price ? `R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Consulte condições"}</dd></div></dl><div className="product-actions"><WhatsApp phone={stores[0].whatsapp}>Consultar pelo WhatsApp</WhatsApp><Link className="text-link" href="/lojas">Ver unidades Supreme ↗</Link></div><p className="product-note">Informações do catálogo sujeitas à confirmação de estoque, configuração, preço e condições no atendimento.</p></div></section></main>;
}
