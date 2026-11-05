import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsApp from "@/components/WhatsApp";
import { getStore, stores, type Store } from "@/lib/stores";

const localContent: Record<Store["slug"], { intro: string; context: string }> = {
  brotas: {
    intro: "Em Brotas, a Supreme é um ponto de encontro para iniciar uma conversa sobre conforto, proporção e o seu espaço de descanso.",
    context: "Leve as medidas e as referências do seu ambiente para tornar a conversa com a unidade ainda mais objetiva.",
  },
  itaigara: {
    intro: "No Shopping Itaigara, a Supreme aproxima conforto e design de quem busca olhar com mais atenção para o ambiente onde descansa.",
    context: "Antes da visita, compartilhe as medidas e as referências do seu projeto para orientar a conversa com a unidade.",
  },
};

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const store = getStore((await params).slug);
  if (!store) return { robots: { index: false, follow: false } };

  const title = store.slug === "brotas"
    ? "Supreme Colchões em Brotas, Salvador"
    : "Supreme Colchões no Itaigara, Salvador";
  const description = store.slug === "brotas"
    ? "Conheça a unidade Supreme Colchões em Brotas, Salvador, com endereço, horário, telefone, WhatsApp e rota."
    : "Conheça a unidade Supreme Colchões no Shopping Itaigara, Salvador, com endereço, horário, telefone, WhatsApp e rota.";

  return {
    title,
    description,
    alternates: { canonical: `/lojas/${store.slug}/` },
  };
}

export default async function StoreLocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const store = getStore((await params).slug);
  if (!store) notFound();
  const content = localContent[store.slug];

  return (
    <main id="conteudo">
      <section className="catalog-hero store-hero">
        <nav className="location-breadcrumb" aria-label="Navegação estrutural">
          <Link href="/">Início</Link><span aria-hidden="true">›</span><Link href="/lojas/">Lojas</Link><span aria-hidden="true">›</span><span>{store.neighborhood}</span>
        </nav>
        <p className="eyebrow">SUPREME COLCHÕES · {store.neighborhood.toUpperCase()} · SALVADOR</p>
        <h1>Supreme Colchões<br />em <em>{store.neighborhood}.</em></h1>
        <p>{content.intro}</p>
      </section>

      <section className="store-location section" aria-labelledby="store-information">
        <div className="store-location-copy">
          <p className="eyebrow">INFORMAÇÕES DA UNIDADE</p>
          <h2 id="store-information">Uma conversa para<br />o seu <em>ambiente.</em></h2>
          <p>{content.context}</p>
          <p>O catálogo Supreme reúne colchões, camas, bases e cabeceiras. Confirme diretamente com a unidade os modelos, medidas e condições que fazem sentido para o seu projeto.</p>
        </div>

        <article className="store-location-card">
          <h3>{store.name}</h3>
          <dl className="location-details">
            <div><dt>Endereço</dt><dd><address>{store.address}</address></dd></div>
            <div><dt>Referência</dt><dd>{store.reference}</dd></div>
            <div><dt>Horário</dt><dd>{store.hours}</dd></div>
            <div><dt>Telefone</dt><dd><a href={`tel:+55${store.phone.replace(/\D/g, "")}`}>{store.phone}</a></dd></div>
          </dl>
          <div className="location-actions">
            <WhatsApp phone={store.whatsapp}>Falar no WhatsApp</WhatsApp>
            <a className="text-link" href={store.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver rota para ${store.name}`}>Ver rota ↗</a>
          </div>
          <Link className="text-link location-link" href="/lojas/">Ver todas as lojas ↗</Link>
        </article>
      </section>
    </main>
  );
}
