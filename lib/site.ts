export const site = {
  name: "Supreme Colchões",
  description: "Conforto e design para o seu espaço de descanso. Conheça a Supreme Colchões e encontre nossas lojas em Salvador.",
};
// Canonicals and indexing require an explicitly configured, verified production origin.
export function getSiteUrl(value = process.env.SITE_URL): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL deve ser uma origem HTTPS, sem caminho ou credenciais.");
  }
  return url.origin;
}
export function whatsappLink(phone: string, message = "Olá! Gostaria de conhecer a Supreme Colchões.") {
  const digits = phone.replace(/\D/g, "");
  if (!/^\d{10,11}$/.test(digits)) throw new Error("Telefone brasileiro inválido");
  return `https://wa.me/55${digits}?text=${encodeURIComponent(message)}`;
}
