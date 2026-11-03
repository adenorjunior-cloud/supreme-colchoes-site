"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/lib/asset-path";

const switchStyle = { display: "flex", gap: "6px", paddingTop: "10px", justifyContent: "flex-end" } as const;
const buttonStyle = { border: "1px solid var(--line)", background: "transparent", color: "var(--muted)", padding: "6px 10px", font: "inherit", fontSize: "11px", cursor: "pointer" } as const;
const activeButtonStyle = { background: "var(--accent)", color: "#fff", borderColor: "var(--accent)" } as const;

export default function CollectionGallery({ name, images }: { name: string; images: { environment: string; product: string } }) {
  const [view, setView] = useState<"environment" | "product">("environment");
  const isEnvironment = view === "environment";
  const image = isEnvironment ? images.environment : images.product;
  return <div className="collection-gallery"><div className="collection-art"><span aria-hidden="true">{isEnvironment ? "AMBIENTE" : "PRODUTO"}</span><Image src={assetPath(image)} alt={isEnvironment ? `${name} em ambiente decorado` : `${name}, fotografia individual do produto`} fill sizes="(max-width: 760px) 100vw, 33vw" priority={isEnvironment} style={{ objectFit: "cover" }} /></div><div className="collection-switch" role="group" aria-label={`Visualização de ${name}`} style={switchStyle}><button type="button" style={{ ...buttonStyle, ...(isEnvironment ? activeButtonStyle : {}) }} aria-pressed={isEnvironment} onClick={() => setView("environment")}>Ambiente</button><button type="button" style={{ ...buttonStyle, ...(!isEnvironment ? activeButtonStyle : {}) }} aria-pressed={!isEnvironment} onClick={() => setView("product")}>Produto</button></div></div>;
}

