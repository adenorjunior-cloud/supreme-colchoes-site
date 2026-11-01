# Referência e decisões

Referência técnica somente para leitura: adenorjunior-cloud/primo-colchoes-site, commit 282120d86eae76217a63533bf6c8663c3a7b0c38.

Reaproveitados: arquitetura Next.js 15 App Router/React 19/TypeScript, separação app/components/lib, componente WhatsApp com mensagem codificada, serializador seguro de JSON-LD (lib/json-ld.ts), configuração ESLint e padrão de validação de runtime. A configuração TypeScript foi adaptada para este repositório. Não foram transferidos deploy, integrações administrativas, catálogo, avaliações ou conteúdo comercial da Primo.

Os dois cadastros de lojas foram transcritos exclusivamente da coleção supremeLocations em lib/stores.ts, marcada como confirmada pelo proprietário em 18/10/2026. Endereço/telefone de Brotas têm sobreposição com registros Primo explicitamente documentada na origem; mantidos conforme fonte, sem inferir relações de marca. Confirmar atualidade antes do lançamento. Horários de domingos/feriados permanecem não confirmados. Não foi inferido domínio oficial.

Identidade visual: paleta definida pelo proprietário e aplicada em app/globals.css — terracota #703015 (principal), cobre #A65A32 (destaques), champagne #D2AC7D (acabamentos), areia #F3E9DB (fundos claros) e branco #FFFFFF. Georgia e Arial locais. A logo oficial ainda não foi recebida: a marca tipográfica atual é provisória e deve ser substituída quando o arquivo for disponibilizado. A composição CSS é abstrata e não representa produto comercial. Nenhuma foto, produto, preço, certificação ou parceria foi inventado.

SEO/AEO: HTML renderizado no servidor, idioma pt-BR, títulos, descrição, Open Graph, FAQ visível e JSON-LD equivalente, entidades de lojas separadas da Primo. Sem SITE_URL, robots/noindex bloqueiam indexação e o sitemap fica vazio. Definir somente a origem HTTPS oficial confirmada e reconstruir antes de publicar. Schema local não inclui coordenadas ou horários estruturados não verificados.

Desempenho: página sem componentes client, fontes externas, biblioteca de ícones ou imagens pesadas. CSS responsivo, foco visível, link de salto, navegação por âncoras, FAQ nativa e respeito a movimento reduzido.

Não houve merge ou deploy. Publicação futura depende de revisão visual, domínio, dados comerciais e materiais de marca aprovados.
