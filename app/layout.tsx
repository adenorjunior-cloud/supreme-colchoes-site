import type { Metadata } from "next";
import "./globals.css";
import "./hero.css";
import "./brand-logo.css";
import "./product-typography.css";
import "./product-images.css";
import "./brand-cards.css";
import "./home-spacing.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSiteUrl, site } from "@/lib/site";
const url = getSiteUrl();
export const metadata: Metadata = {
  title: { default: "Supreme Colchões | Conforto e design em Salvador", template: "%s | Supreme Colchões" },
  description: site.description,
  ...(url ? { metadataBase: new URL(url), alternates: { canonical: "/" } } : {}),
  robots: { index: Boolean(url), follow: Boolean(url) },
  openGraph: { type: "website", locale: "pt_BR", siteName: site.name, title: site.name, description: site.description, ...(url ? { url } : {}) },
};
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header />{children}<Footer /><WhatsAppFloat /></body></html>;
}

