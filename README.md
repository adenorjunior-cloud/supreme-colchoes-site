# Supreme Colchões

Primeira versão institucional em Next.js App Router, React e TypeScript. Layout exclusivo claro, navegação responsiva, lojas em Salvador, contatos por unidade e FAQ.

## Desenvolvimento

Node.js 24 e npm. Use o checkout existente; não é necessário criar worktree.

```sh
npm ci
npm run dev -- --hostname 0.0.0.0
```

Não requer credenciais. `SITE_URL` é opcional em desenvolvimento: sua ausência mantém `noindex`, bloqueia robôs e omite URLs do sitemap. Configure somente o domínio HTTPS oficial confirmado para uma futura publicação; requer novo build.

## Validação

```sh
npm run lint
npm test
npm run build
npm run typecheck
npm start -- -p 3100
# Em outro terminal:
npm run check:runtime
```

Para validar canonicals/indexação em ambiente local, execute build/start com `SITE_URL=https://example.com` e passe a mesma variável ao check:runtime. Esse domínio é apenas fixture de teste, nunca dado comercial.

CI executa lint, testes unitários, build, TypeScript e smoke test HTTP, sem publicar.

## Prévia no GitHub Pages

O workflow `Publish GitHub Pages preview` publica somente a branch `feat/supreme-site-inicial` em uma prévia temporária. Ele usa exportação estática e não recebe `SITE_URL`, portanto a prévia permanece com `noindex` e não é uma publicação de produção.

Veja [referências e pendências de revisão](docs/REFERENCIAS.md). Identidade visual provisória até recebimento dos materiais aprovados. Dados das lojas têm origem documentada; catálogo e preços não foram presumidos.
