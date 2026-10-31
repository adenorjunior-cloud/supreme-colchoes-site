## Primeira versão institucional

Cria o site Supreme Colchões em Next.js App Router, React e TypeScript com layout exclusivo claro e responsivo, conteúdo para projetos de interiores, lojas de Brotas e Shopping Itaigara, WhatsApp por unidade, rotas e FAQ acessível.

Referência técnica: Primo, commit 282120d86eae76217a63533bf6c8663c3a7b0c38. Nenhuma alteração na Primo. Cadastros comerciais transcritos da coleção Supreme marcada como confirmada pelo proprietário; origem e sobreposições documentadas em docs/REFERENCIAS.md. Sem produtos, preços ou domínio presumidos.

SEO/AEO inclui metadados, JSON-LD seguro, entidades locais, FAQ, robots e sitemap. Sem SITE_URL oficial, indexação bloqueada. Identidade visual provisória até disponibilização dos materiais aprovados. Ilustração abstrata em CSS, sem representação de produto comercial.

## Validação

Lint, TypeScript, três testes unitários, build de produção e smoke test HTTP passaram. Verificados contatos, schema, FAQ, política de indexação e 404. Auditoria de produção: zero vulnerabilidades. CI apenas de validação.

## Revisão

Validar identidade visual, domínio e atualidade dos cadastros antes de publicação futura. Sem merge ou deploy.

## Limitações do ambiente

A captura visual pelo Chromium não concluiu dentro de 25 segundos; revisão em navegador de desktop e celular ainda pendente. O smoke test HTTP passou, mas não substitui essa revisão visual.

A branch foi enviada. A criação automática do PR em rascunho retornou `Forbidden` em `https://api.github.com/graphql`. Este documento preserva a descrição para retomar a abertura quando a API estiver acessível.

## Prévia temporária

O workflow `Publish GitHub Pages preview` publica a branch `feat/supreme-site-inicial` no GitHub Pages. O endereço esperado é `https://adenorjunior-cloud.github.io/supreme-colchoes-site/`, condicionado à ativação do GitHub Pages pelo repositório e à execução bem-sucedida do workflow. A prévia usa `noindex` e `robots.txt` bloqueado; não é uma publicação de produção.
