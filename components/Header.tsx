import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return <header className="header"><Link className="brand-link" href="/" aria-label="Supreme Colchões — início"><Image className="brand-logo" src="/logo-supreme-terra.png" alt="Supreme Colchões" width={1187} height={283} priority /></Link><nav aria-label="Navegação principal"><Link href="/colchoes">Colchões</Link><Link href="/ofertas">Ofertas</Link><Link href="/camas">Camas</Link><Link href="/cabeceiras">Cabeceiras</Link><Link href="/marcas">Marcas</Link><Link href="/guia">Guia</Link><Link href="/#lojas">Lojas</Link><Link className="nav-contact" href="/#atendimento">Vamos conversar ↗</Link></nav></header>;
}

