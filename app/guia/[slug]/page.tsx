import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/guide-content";
import "../article.css";
export function generateStaticParams() { return guides.map((guide) => ({ slug: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const guide = getGuide((await params).slug); return guide ? { title: guide.title, description: guide.excerpt } : {}; }
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) { const guide = getGuide((await params).slug); if (!guide) notFound(); return <main id="conteudo"><article className="article section"><Link className="breadcrumb" href="/guia">Guia do colchão</Link><p className="eyebrow">{guide.category}</p><h1>{guide.title}</h1><p className="article-intro">{guide.excerpt}</p>{guide.sections.map(([heading, paragraph]) => <section key={heading}><h2>{heading}</h2><p>{paragraph}</p></section>)}<aside><p className="eyebrow">NA LOJA</p><h2>Experimente antes de decidir.</h2><p>Use este guia para orientar a comparação e confirme características, disponibilidade e condições com a unidade Supreme.</p><Link className="button" href="/#lojas">Encontrar uma loja ↗</Link></aside></article></main>; }
