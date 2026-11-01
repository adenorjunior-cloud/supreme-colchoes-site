import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
export const metadata: Metadata = { title: "Marcas", description: "Conheça as marcas presentes no catálogo da Supreme Colchões." };
export default function BrandsPage() { const brands = ["Supreme", "Primo", "Sealy", "Probel"]; return <main id="conteudo"><section className="catalog-hero"><p className="eyebrow">CATÁLOGO POR MARCA</p><h1>Escolhas que<br /><em>têm assinatura.</em></h1><p>Explore as marcas presentes no catálogo e consulte a disponibilidade de cada linha com a unidade Supreme.</p></section><section className="brands section">{brands.map((brand) => <article key={brand}><p className="eyebrow">MARCA</p><h2>{brand}</h2>{products.some((product) => product.brand === brand) ? <Link className="text-link" href={`/colchoes?brand=${brand.toLowerCase()}`}>Ver modelos no catálogo ↗</Link> : <p>Consulte a unidade sobre modelos disponíveis.</p>}</article>)}</section></main>; }
