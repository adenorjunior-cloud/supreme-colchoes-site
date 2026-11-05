import type { Metadata } from "next";
import Link from "next/link";
import WhatsApp from "@/components/WhatsApp";
import { stores } from "@/lib/stores";

export const metadata: Metadata = {
  title: "Lojas Supreme Colchões em Salvador",
  description: "Conheça as unidades Supreme Colchões em Brotas e no Itaigara, Salvador, e encontre o melhor ponto de partida para conversar sobre seu ambiente.",
  alternates: { canonical: "/lojas/" },
};

export default function StoresPage() {
  return (
    <main id="conteudo">
      <section className="catalog-hero">
        <p className="eyebrow">LOJAS SUPREME</p>
        <h1>Encontre a Supreme<br />em <em>Salvador.</em></h1>
        <p>Conheça nossos ambientes e converse sobre colchões, camas e cabeceiras na unidade que estiver mais próxima de você.</p>
      </section>

      <section className="locations section" aria-labelledby="locations-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DUAS UNIDADES, UMA EXPERIÊNCIA DE CONFORTO</p>
            <h2 id="locations-title">Escolha onde<br />começar a <em>conversa.</em></h2>
          </div>
        </div>
        <div className="location-grid">
          {stores.map((store) => (
            <article className="location-card" key={store.slug}>
              <p className="eyebrow">{store.neighborhood.toUpperCase()} · SALVADOR · BAHIA</p>
              <h3>{store.name.replace("Supreme Colchões ", "")}</h3>
              <address>{store.address}</address>
              <p className="location-reference">{store.reference}</p>
              <dl className="location-details">
                <div><dt>Horário</dt><dd>{store.hours}</dd></div>
                <div><dt>Telefone</dt><dd><a href={`tel:+55${store.phone.replace(/\D/g, "")}`}>{store.phone}</a></dd></div>
              </dl>
              <div className="location-actions">
                <WhatsApp phone={store.whatsapp}>Falar no WhatsApp</WhatsApp>
                <a className="text-link" href={store.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver rota para ${store.name}`}>Ver rota ↗</a>
              </div>
              <Link className="text-link location-link" href={`/lojas/${store.slug}/`}>Conhecer esta unidade ↗</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
