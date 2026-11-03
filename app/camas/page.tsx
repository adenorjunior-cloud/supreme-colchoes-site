import type { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";
import { beds } from "@/lib/collections";
export const metadata: Metadata = { title: "Camas e bases", description: "Conheça camas e bases trabalhadas pela Supreme Colchões em Salvador.", alternates: { canonical: "/camas/" } };
export default function BedsPage() { return <CollectionPage eyebrow="CAMAS E BASES" title={<>Camas que completam<br /><em>o ambiente.</em></>} intro="Conheça modelos para composição com colchões e cabeceiras. Consulte cores, medidas e disponibilidade." items={beds} />; }

