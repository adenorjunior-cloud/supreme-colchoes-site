import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link href={`/colchoes/${product.slug}`} className={`product-art product-art--${product.category}`} aria-label={`Ver ${product.name}`}>
      {product.offer && <span>OFERTA</span>}<i /><b>{product.brand}</b>
    </Link>
    <div className="product-content"><p className="eyebrow">{product.brand} · {product.category}</p><h3>{product.name}</h3><p>{product.sizes.length ? product.sizes.join(" · ") : "Consulte tamanhos"}</p><div className="product-bottom"><strong>{product.price ? `R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Consulte o preço"}</strong><Link href={`/colchoes/${product.slug}`}>Ver detalhes <span aria-hidden="true">↗</span></Link></div></div>
  </article>;
}
