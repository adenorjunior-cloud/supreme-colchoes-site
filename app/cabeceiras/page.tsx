import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";
import { headboards } from "@/lib/collections";
export const metadata: Metadata = { title: "Cabeceiras", description: "Conheça modelos de cabeceiras trabalhados pela Supreme Colchões em Salvador.", alternates: { canonical: "/cabeceiras/" } };
export default function HeadboardsPage() { return <CollectionPage eyebrow="CABECEIRAS" title={<>Detalhes que<br /><em>mudam o quarto.</em></>} intro="Explore estilos, proporções e acabamentos. Consulte a equipe para encontrar o modelo ideal para sua cama." items={headboards} />; }

