import type { Metadata } from "next";
import { guideArticles } from "@/lib/collections";
import { guides } from "@/lib/guide-content";
import Link from "next/link";
export const metadata: Metadata = { title: "Guia do colchão", description: "Conteúdos para ajudar a escolher, cuidar e entender o colchão.", alternates: { canonical: "/guia/" } };
export default function GuidePage() { return <main id="conteudo"><section className="catalog-hero"><p className="eyebrow">INFORMAÇÃO PARA ESCOLHER MELHOR</p><h1>Guia do<br /><em>colchão.</em></h1><p>Conteúdos práticos sobre medidas, conforto, materiais e cuidados antes de escolher seu colchão.</p></section><section className="guide-list section"><div className="section-heading"><div><p className="eyebrow">ARTIGOS</p><h2>Escolha um assunto e<br /><em>aprofunde-se.</em></h2></div><p>{guideArticles.length} conteúdos selecionados</p></div><div>{guideArticles.map((article, index) => <article key={article.slug}><span>0{index + 1}</span><div><p className="eyebrow">{article.category}</p><h3>{article.title}</h3><p>{article.excerpt}</p>{guides.some((guide) => guide.slug === article.slug) ? <Link className="text-link" href={`/guia/${article.slug}`}>Ler artigo ↗</Link> : <span className="guide-pending">Próximo conteúdo em organização</span>}</div></article>)}</div></section></main>; }

