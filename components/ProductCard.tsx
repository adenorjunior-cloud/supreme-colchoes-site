import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link href={`/colchoes/${product.slug}`} className={`product-art product-art--${product.category}`} aria-label={`Ver ${product.name}`}>
      {product.offer && <span>OFERTA</span>}<Image className="product-image" src={assetPath(product.image)} alt={product.name} fill sizes="(max-width: 760px) 50vw, 25vw" />
    </Link>
    <div className="product-content"><h3>{product.name}</h3><p>{product.sizes.length ? product.sizes.join(" · ") : "Consulte tamanhos"}</p><div className="product-bottom"><strong>{product.price ? `R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "Consulte o preço"}</strong><Link href={`/colchoes/${product.slug}`}>Ver detalhes <span aria-hidden="true">↗</span></Link></div></div>
  </article>;
}
