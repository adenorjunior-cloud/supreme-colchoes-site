import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Ofertas", description: "Veja as ofertas em colchões da Supreme Colchões em Salvador. Confirme disponibilidade e condições com a unidade escolhida." };

export default function Ofertas() {
  const offers = products.filter((product) => product.offer);
  return <main id="conteudo"><section className="catalog-hero"><p className="eyebrow">OFERTAS SUPREME</p><h1>Boas escolhas,<br /><em>melhores condições.</em></h1><p>Modelos em oferta no catálogo. Preços, estoque e condições de pagamento devem ser confirmados com a unidade escolhida.</p></section><section className="catalog section"><div className="catalog-toolbar"><p>{offers.length} ofertas no catálogo</p><p>Consulte as condições na loja</p></div><div className="product-grid">{offers.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section></main>;
}
