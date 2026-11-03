import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Colchões", description: "Explore os colchões trabalhados pela Supreme Colchões em Salvador. Consulte tamanhos, disponibilidade e condições.", alternates: { canonical: "/colchoes/" } };

export default function Colchoes() {
  return <main id="conteudo"><section className="catalog-hero"><p className="eyebrow">CATÁLOGO SUPREME</p><h1>Escolhas que<br /><em>acolhem.</em></h1><p>Conheça os modelos que trabalhamos. Os preços, tamanhos e a disponibilidade devem ser confirmados com a unidade escolhida.</p></section><section className="catalog section"><div className="catalog-toolbar"><p>{products.length} modelos no catálogo</p><p>Supreme · Primo · Sealy</p></div><div className="product-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section></main>;
}

