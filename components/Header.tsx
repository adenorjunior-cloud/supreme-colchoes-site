"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { stores } from "@/lib/stores";

const mobileLinks = [
  { href: "/", label: "Início" },
  { href: "/colchoes", label: "Colchões" },
  { href: "/camas", label: "Camas" },
  { href: "/cabeceiras", label: "Cabeceiras" },
  { href: "/marcas", label: "Marcas" },
  { href: "/ofertas", label: "Ofertas", featured: true },
  { href: "/guia", label: "Guia" },
  { href: "/#lojas", label: "Lojas" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const mobileTabIndex = isMenuOpen ? 0 : -1;

  return (
    <header className="header" ref={headerRef}>
      <Link className="brand-link" href="/" aria-label="Supreme Colchões — início" onClick={closeMenu}>
        <Image className="brand-logo" src="/logo-supreme-terra.png" alt="Supreme Colchões" width={1187} height={283} priority />
      </Link>

      <nav className="desktop-nav" aria-label="Navegação principal">
        <Link href="/colchoes">Colchões</Link>
        <Link href="/ofertas">Ofertas</Link>
        <Link href="/camas">Camas</Link>
        <Link href="/cabeceiras">Cabeceiras</Link>
        <Link href="/marcas">Marcas</Link>
        <Link href="/guia">Guia</Link>
        <Link href="/#lojas">Lojas</Link>
        <Link className="nav-contact" href="/#atendimento">Vamos conversar ↗</Link>
      </nav>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav
        id="mobile-navigation"
        className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}
        aria-label="Navegação mobile"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-links">
          {mobileLinks.map(({ href, label, featured }) => (
            <Link key={href} href={href} className={featured ? "is-featured" : undefined} tabIndex={mobileTabIndex} onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </div>
        <a className="button mobile-menu-whatsapp" href={whatsappLink(stores[0].whatsapp)} target="_blank" rel="noopener noreferrer" tabIndex={mobileTabIndex} onClick={closeMenu}>
          Falar no WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
