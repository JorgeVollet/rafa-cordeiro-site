# Site — Dr. Rafael Cordeiro (Neurocirurgião)

Site institucional + educativo. Objetivo duplo: **apresentar o Dr. Rafael com excelência**
(conversão para agendamento via WhatsApp) e **ranquear no Google** para as dores que o
paciente pesquisa (hérnia, lombalgia, ciática etc.).

> Documento-mestre do projeto: [`PLANO-DE-ACAO-CLAUDE-CODE.md`](./PLANO-DE-ACAO-CLAUDE-CODE.md)

## Stack

| Camada | Tecnologia |
|---|---|
| Front-end | React 18 + Vite + TypeScript |
| Estilo | Tailwind CSS v4 (config CSS-first via `@theme`) |
| Roteamento | React Router v6 |
| SEO | react-helmet-async + JSON-LD |
| Backend / dados | Supabase (Fase 5) |
| Contato | Formspree (Fase 3) |
| Deploy | Vercel (Fase 7) |

## Como rodar

```bash
npm install
cp .env.example .env   # preencha as variáveis
npm run dev            # http://localhost:5173
```

Scripts: `dev` · `build` (typecheck + build) · `preview` · `typecheck`.

## Estrutura

```
src/
  components/layout/   Header, Footer, WhatsAppFloat, SEO, Logo, AdminLayout...
  components/ui/        Button, Card, Accordion, Carousel, icons
  pages/               Home, Sobre, Tratamentos, Condicao, Blog, Post, Contato, Privacidade, admin/
  data/                site.ts, condicoes.ts, faq.ts, depoimentos.ts  (todo texto centralizado aqui)
  lib/                 supabase.ts, utils.ts
public/                favicon, robots.txt, sitemap.xml, imagens/
```

## Convenções

- **Design tokens** ficam em `src/index.css` no bloco `@theme` (paleta §3 do plano + fontes).
  Use as utilitárias geradas: `bg-azul`, `text-tinta`, `border-linha`, `font-display`, `shadow-soft` etc.
- **Conteúdo / textos** ficam em `src/data/` para troca fácil quando chegar o material do Dr. Rafael.
- Alias de import: `@/` → `src/`.
- Mobile-first, acessibilidade (semântica, `alt`, contraste AA), nada de segredos no código (`VITE_*`).

## Decisão de SEO / pré-renderização (§8 do plano)

O Vite gera uma SPA (ruim para SEO puro). Decisão registrada: na **Fase 6** avaliaremos
pré-renderização das rotas estáticas (`vite-react-ssg` / `react-snap`) ou, se o SEO exigir,
migração para Next.js. Até lá, `react-helmet-async` cuida de `<title>`/meta por rota e o
conteúdo é renderizado client-side.

## Status das fases

- [x] **Fase 0** — Setup (Vite + React + TS + Tailwind + Router + estrutura + `.env` + Git)
- [x] **Fase 1** — Componentes globais (Header, Footer, WhatsApp flutuante, SEO) + UI base (Button, Card, Accordion, Carousel)
- [ ] **Fase 2** — Home (17 seções)
- [ ] Fases 3–7 — ver plano
