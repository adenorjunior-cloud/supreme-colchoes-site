import { whatsappLink } from "@/lib/site";
export default function WhatsApp({ phone, children = "Conversar no WhatsApp" }: { phone: string; children?: React.ReactNode }) {
  return <a className="button" href={whatsappLink(phone)} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}
