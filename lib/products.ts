export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: "espuma" | "molas" | "premium";
  sizes: string[];
  price: number | null;
  featured: boolean;
  offer: boolean;
  summary: string;
  availability: string;
  image: string;
};

// Catálogo espelhado da Primo Colchões em 01/11/2026. Confirme estoque e preço no atendimento.
export const products: Product[] = [
  { slug: "supreme-ouro", name: "Conjunto Supreme Ouro 138×188", brand: "Supreme", category: "premium", sizes: ["138×188"], price: 1699, featured: false, offer: true, summary: "Conjunto Supreme Ouro 138×188 em oferta por R$ 1.699,00.", availability: "Pronta entrega", image: "/colchoes/supreme-ouro.webp" },
  { slug: "smartflex-queen", name: "Colchão Smartflex Queen 158×198", brand: "Primo", category: "espuma", sizes: ["Queen"], price: 1499, featured: true, offer: true, summary: "Colchão Smartflex Queen 158×198. Consulte nossa equipe para disponibilidade e condições de compra.", availability: "Pronta entrega", image: "/colchoes/smartflex.webp" },
  { slug: "sealy-miami", name: "Colchão Sealy Miami 138×188", brand: "Sealy", category: "premium", sizes: ["138×188"], price: 1799, featured: true, offer: true, summary: "Colchão Sealy Miami 138×188 em oferta por R$ 1.799,00.", availability: "Pronta entrega", image: "/colchoes/sealy-miami.webp" },
  { slug: "supreme-bello", name: "Supreme Bello", brand: "Supreme", category: "espuma", sizes: ["Casal", "Queen"], price: null, featured: false, offer: false, summary: "Modelo Supreme Bello. Consulte configurações e condições.", availability: "Pronta entrega", image: "/colchoes/supreme-bello.webp" },
  { slug: "supreme-white", name: "Supreme White", brand: "Supreme", category: "premium", sizes: ["Casal", "Queen", "King"], price: null, featured: false, offer: false, summary: "Modelo Supreme White. Consulte tamanhos, disponibilidade e condições pelo WhatsApp.", availability: "Pronta entrega", image: "/colchoes/supreme-white.webp" },
  { slug: "supreme-extra-firme", name: "Supreme Extra Firme", brand: "Supreme", category: "premium", sizes: [], price: null, featured: false, offer: false, summary: "Modelo Supreme Extra Firme. Consulte tamanhos, disponibilidade e condições pelo WhatsApp.", availability: "Pronta entrega", image: "/colchoes/supreme-extra-firme.webp" },
  { slug: "supreme-diamante", name: "Supreme Diamante", brand: "Supreme", category: "premium", sizes: [], price: null, featured: false, offer: false, summary: "Modelo Supreme Diamante. Consulte tamanhos, disponibilidade e condições pelo WhatsApp.", availability: "Pronta entrega", image: "/colchoes/supreme-diamante.webp" },
  { slug: "supreme-spring", name: "Supreme Spring", brand: "Supreme", category: "molas", sizes: [], price: null, featured: false, offer: false, summary: "Modelo Supreme Spring. Consulte tamanhos, disponibilidade e condições pelo WhatsApp.", availability: "Pronta entrega", image: "/colchoes/supreme-spring.webp" },
  { slug: "supreme-magnific-gel", name: "Supreme Magnific Gel", brand: "Supreme", category: "premium", sizes: [], price: null, featured: false, offer: false, summary: "Modelo Supreme Magnific Gel. Consulte tamanhos, disponibilidade e condições pelo WhatsApp.", availability: "Pronta entrega", image: "/colchoes/supreme-magnific-gel.webp" },
  { slug: "colchao-d33-casal", name: "Colchão D33 Casal", brand: "Primo", category: "espuma", sizes: ["Casal"], price: 899, featured: false, offer: true, summary: "Colchão D33 Casal em oferta por R$ 899,00.", availability: "Pronta entrega", image: "/colchoes/d33-casal.webp" },
];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
