import Link from "next/link";
export default function Header() {
  return <header className="header"><Link className="wordmark" href="/" aria-label="Supreme Colchões — início">supreme<span>COLCHÕES</span></Link><nav aria-label="Navegação principal"><Link href="/colchoes">Colchões</Link><Link href="/camas">Camas</Link><Link href="/cabeceiras">Cabeceiras</Link><Link href="/marcas">Marcas</Link><Link href="/guia">Guia</Link><Link href="/#lojas">Lojas</Link><Link className="nav-contact" href="/#atendimento">Vamos conversar ↗</Link></nav></header>;
}
