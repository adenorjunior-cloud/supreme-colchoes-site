import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return <footer><Link className="brand-link" href="/" aria-label="Supreme Colchões — início"><Image className="brand-logo" src="/logo-supreme-terra.png" alt="Supreme Colchões" width={1187} height={283} /></Link><p>Conforto para viver. Design para sentir.</p><Link href="/lojas/">Encontre a Supreme em Salvador ↗</Link><small>Supreme Colchões</small></footer>;
}

