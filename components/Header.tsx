import Link from "next/link";
export default function Header() {
  return <header className="header"><Link className="wordmark" href="/" aria-label="Supreme Colchões — início">supreme<span>COLCHÕES</span></Link><nav aria-label="Navegação principal"><Link href="/#essencia">A Supreme</Link><Link href="/#inspiracao">Seu ambiente</Link><Link href="/#lojas">Nossas lojas</Link><Link className="nav-contact" href="/#atendimento">Vamos conversar ↗</Link></nav></header>;
}
