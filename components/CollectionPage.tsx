import Image from "next/image";
import WhatsApp from "@/components/WhatsApp";
import type { CollectionItem } from "@/lib/collections";
import { stores } from "@/lib/stores";
import { assetPath } from "@/lib/asset-path";

export default function CollectionPage({ eyebrow, title, intro, items }: { eyebrow: string; title: React.ReactNode; intro: string; items: CollectionItem[] }) {
  return <main id="conteudo"><section className="catalog-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><section className="collection section"><div className="collection-grid">{items.map((item, index) => <article className="collection-card" key={item.name}><div className="collection-art"><span>0{index + 1}</span><Image src={assetPath(item.image)} alt={`${item.name} em ambiente`} fill sizes="(max-width: 760px) 100vw, 33vw" priority={index < 3} /></div><div><p className="eyebrow">MODELO</p><h2>{item.name}</h2><p>{item.description}</p><WhatsApp phone={stores[0].whatsapp}>Consultar modelo</WhatsApp></div></article>)}</div><p className="collection-note">Imagens, cores, tecidos, medidas, acabamentos e disponibilidade devem ser confirmados com a unidade Supreme escolhida.</p></section></main>;
}

