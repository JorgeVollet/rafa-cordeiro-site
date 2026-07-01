# Plano de Ação — Site Dr. Rafael Cordeiro (Neurocirurgião)

> **Como usar este arquivo:** cole-o no Claude Code como contexto-mestre do projeto (pode salvar como `CLAUDE.md` na raiz do repositório). Ele descreve a stack, a arquitetura, a identidade visual e as fases de construção. Trabalhe **uma fase por vez**, validando cada uma antes de avançar.

---

## 1. Visão do projeto

Site institucional + educativo para um neurocirurgião especialista em coluna. Dois objetivos centrais:

1. **Apresentar o Dr. Rafael com excelência** (institucional, confiança, conversão para agendamento via WhatsApp).
2. **Ranquear no Google** para as dores que o paciente pesquisa (hérnia, lombalgia, ciática etc.), já que o paciente não busca "neurocirurgião" — busca a **dor que sente**.

Estratégia de conteúdo **híbrida**: resumo de cada condição na home **+ uma página dedicada por dor** (melhor para SEO).

**Site de referência (estrutura, não visual):** https://paulosalustianocoluna.com

---

## 2. Stack técnica

| Camada | Tecnologia |
|---|---|
| Front-end | **React 18 + Vite** |
| Estilo | **Tailwind CSS** |
| Roteamento | **React Router** |
| Backend / dados | **Supabase** (Postgres + Storage de imagens + Auth) |
| Formulário de contato/briefing | **Formspree** (já em uso) |
| Hospedagem | **Vercel** (deploy via Git) |
| SEO | `react-helmet-async` + JSON-LD (Schema.org médico) |

**Regras de código:**
- Componentes funcionais + hooks. Sem class components.
- TypeScript preferível (se optar por JS puro, manter consistência).
- Mobile-first em todo o CSS.
- Acessibilidade: tags semânticas, `alt` em imagens, contraste AA.
- Nada de chaves/segredos no código — usar variáveis de ambiente (`.env`, `VITE_*`).

---

## 3. Identidade visual

**Estilo:** clean clara — "premium hospitalar". Fundo branco, tipografia escura, azul médico como acento.

```
Paleta sugerida (ajustar quando vier a marca do Rafael):
--branco        #ffffff
--fundo-suave   #f6f9fe
--azul          #1d6fe0   (acento principal / CTAs)
--azul-escuro   #0f4ba8   (títulos, hovers)
--azul-suave    #eaf2fe   (fundos de seção, cards)
--tinta         #0f1b33   (texto principal)
--tinta-2       #33415c   (texto secundário)
--linha         #e6edf6   (bordas)
--verde         #0f9d58   (destaques positivos / sucesso)
```

- Tipografia: uma sans-serif moderna e legível (ex: Inter, Plus Jakarta Sans).
- Bordas arredondadas (10–16px), sombras suaves, bastante respiro/whitespace.
- Tom: confiável, tecnológico, acolhedor. Sem sensacionalismo.

---

## 4. Arquitetura de páginas

```
/                       → Home (17 seções, ver §5)
/sobre                  → Sobre o Dr. Rafael
/tratamentos            → Hub de condições (grade)
/tratamentos/:slug      → Página dedicada por condição (SEO)
/blog                   → Listagem de matérias
/blog/:slug             → Página do artigo
/admin                  → Painel (login protegido — só o Rafael)
/contato                → Contato & agendamento
/privacidade            → Política de privacidade + disclaimer CFM
```

**Componentes globais (em todas as páginas):** Header fixo com menu · Botão WhatsApp flutuante · Footer com disclaimer CFM · SEO `<head>` por página · 100% responsivo.

---

## 5. A Home, seção por seção (ordem de cima pra baixo)

1. **Hero** — foto do Dr. + headline forte + frase de impacto + botão WhatsApp.
2. **Faixa de números** — anos de experiência, nº de cirurgias, pacientes atendidos.
3. **Boas-vindas / mini-bio** — texto em 1ª pessoa + link para /sobre.
4. **Diferenciais (3 pilares)** — ícones + texto curto.
5. **Tecnologias & equipamentos** — destaque do que usa de mais moderno.
6. **Principais condições (resumos)** — cards que linkam para /tratamentos/:slug.
7. **Jornada do paciente** — passo a passo: contato → avaliação → diagnóstico → tratamento → acompanhamento.
8. **Como funciona a consulta** — exame físico, tratamento individualizado, duração.
9. **CTA intermediário** — "Procure o Dr. o quanto antes" + botão.
10. **Vídeo de apresentação** — embed (placeholder até receber o vídeo).
11. **Depoimentos** — carrossel (com autorização, dentro das regras CFM).
12. **Blog em destaque** — últimas 3 matérias (vindas do Supabase).
13. **Orientações para a consulta** — o que levar.
14. **FAQ geral** — acordeão (gera rich snippet no Google).
15. **Instagram** — feed embed + link.
16. **Atendimento / endereços** — clínicas com tel/WhatsApp + mapa.
17. **Footer** — menu, redes, disclaimer CFM, link privacidade.

---

## 6. Páginas internas — conteúdo

**/sobre** — bio aprofundada, foto, formação, residência, especializações, CRM/RQE, sociedades, prêmios, filosofia, linha do tempo.

**/tratamentos** (hub) — grade com todas as condições; cada card leva à página da dor.

**/tratamentos/:slug** (padrão por condição):
`O que é · Sintomas · Causas e fatores de risco · Diagnóstico · Tratamento (conservador e cirúrgico) · Quando procurar um especialista · FAQ · CTA agendar · Disclaimer CFM`
Cada página com `<title>`, `meta description` e JSON-LD `MedicalWebPage`/`MedicalCondition` + `FAQPage`.

**/blog** — listagem com busca e categorias, paginação. **/blog/:slug** — artigo (título, subtítulo, capa, corpo, data, autor), posts relacionados, CTA.

**/contato** — formulário (Formspree), botões WhatsApp por clínica, mapas, horários, convênios.

**/privacidade** — LGPD, cookies, disclaimer CFM.

---

## 7. Painel administrativo (/admin) — Supabase

Requisito central: **o Rafael publica matérias sozinho**, sem mexer em código.

**Funcionalidades:**
- Login protegido (Supabase Auth — apenas o e-mail do Rafael).
- Listar matérias (publicadas e rascunhos).
- Criar / editar / excluir matéria.
- Campos: `título`, `slug` (auto a partir do título), `subtítulo`, `categoria`, `imagem de capa` (upload → Supabase Storage), `corpo` (editor rich text simples), `status` (rascunho/publicado), `data`.
- Pré-visualização antes de publicar.

**Modelo de dados (tabela `posts`):**
```sql
id            uuid primary key default gen_random_uuid()
slug          text unique not null
titulo        text not null
subtitulo     text
categoria     text
capa_url      text
corpo         text not null          -- HTML ou markdown
status        text default 'rascunho' -- 'rascunho' | 'publicado'
criado_em     timestamptz default now()
atualizado_em timestamptz default now()
```
- **Row Level Security:** leitura pública só de `status = 'publicado'`; escrita só autenticado.
- Bucket de Storage `capas` para as imagens (público para leitura).

---

## 8. SEO — requisitos (não opcional)

- `react-helmet-async` para `<title>` + `meta description` únicos por página.
- JSON-LD: `Physician` (home/sobre), `MedicalCondition` + `FAQPage` (páginas de dor), `Article` (posts do blog).
- URLs limpas e descritivas (slugs em português, ex: `/tratamentos/hernia-de-disco`).
- `sitemap.xml` + `robots.txt`.
- Open Graph + Twitter cards (compartilhamento).
- Imagens otimizadas (WebP, lazy-load, `alt` descritivo).
- Como Vite gera SPA (ruim p/ SEO puro), avaliar **pré-renderização** (`vite-plugin-ssg`/`react-snap`) ou migração futura para Next.js se o SEO exigir. Documentar a escolha.

---

## 9. Conformidade médica (CFM) — obrigatório

- Disclaimer no rodapé de todas as páginas: conteúdo informativo/educacional, não substitui consulta médica.
- **Proibido:** promessa de resultado, "antes e depois" de cirurgia, garantia de cura, sensacionalismo.
- Depoimentos só com autorização e sem promessa de resultado.
- CRM e RQE visíveis.

---

## 10. Estrutura de pastas sugerida

```
src/
  components/
    layout/      Header, Footer, WhatsAppFloat, SEO
    home/        Hero, Numeros, Diferenciais, Condicoes, Jornada, FAQ...
    ui/          Button, Card, Accordion, Carousel...
  pages/
    Home.tsx  Sobre.tsx  Tratamentos.tsx  Condicao.tsx
    Blog.tsx  Post.tsx   Contato.tsx  Privacidade.tsx
    admin/     Login.tsx  Dashboard.tsx  EditorPost.tsx
  data/
    condicoes.ts   conteúdo das páginas de dor
    faq.ts
  lib/
    supabase.ts    cliente Supabase
  styles/
  App.tsx  main.tsx  router.tsx
public/
  robots.txt  sitemap.xml  imagens/
```

---

## 11. Fases de construção (executar em ordem)

### Fase 0 — Setup
- [ ] Criar projeto Vite (React + TS) + Tailwind + React Router.
- [ ] Configurar paleta no Tailwind (cores do §3) e fontes.
- [ ] Estrutura de pastas (§10). Repositório Git.
- [ ] `.env` com variáveis Supabase (placeholders).

### Fase 1 — Componentes globais e layout
- [ ] Header fixo responsivo + menu mobile.
- [ ] Footer com disclaimer CFM.
- [ ] Botão WhatsApp flutuante.
- [ ] Componente `<SEO>` (helmet) reutilizável.
- [ ] Componentes UI base (Button, Card, Accordion, Carousel).

### Fase 2 — Home
- [ ] Construir as 17 seções (§5) com conteúdo placeholder.
- [ ] Responsividade e animações sutis de scroll.

### Fase 3 — Páginas institucionais
- [ ] /sobre, /contato (Formspree), /privacidade.

### Fase 4 — Condições / Tratamentos (SEO)
- [ ] /tratamentos (hub) + template /tratamentos/:slug.
- [ ] Popular com as condições escolhidas (conteúdo em `data/condicoes.ts`).
- [ ] JSON-LD + FAQ por página.

### Fase 5 — Supabase + Blog + Admin
- [ ] Criar projeto Supabase, tabela `posts`, bucket `capas`, RLS.
- [ ] Cliente Supabase no front.
- [ ] /blog (listagem) + /blog/:slug (artigo).
- [ ] /admin: login + CRUD de posts + upload de imagem + editor.
- [ ] "Blog em destaque" na home consumindo o Supabase.

### Fase 6 — SEO técnico e polimento
- [ ] sitemap.xml, robots.txt, OG tags.
- [ ] Pré-renderização (avaliar §8).
- [ ] Otimização de imagens e performance (Lighthouse).
- [ ] Revisão de acessibilidade.

### Fase 7 — Deploy
- [ ] Deploy na Vercel + variáveis de ambiente.
- [ ] Conectar domínio.
- [ ] Testes finais em produção (mobile + desktop).

---

## 12. Conteúdo e dados que ainda virão (não bloqueiam o início)

- Briefing respondido pelo Rafael (bio, credenciais, clínicas, fotos, frase de impacto).
- Lista final de condições que entram no site.
- Vídeo de apresentação, fotos profissionais, depoimentos.
- Cores/logo de marca, se houver.

> Enquanto não chegam, construir com **placeholders realistas** e deixar tudo fácil de substituir (centralizar textos em arquivos de `data/`).

---

## 13. Primeira instrução sugerida para o Claude Code

> "Leia este CLAUDE.md. Vamos começar pela **Fase 0** e **Fase 1**: crie o projeto Vite + React + TS + Tailwind com a paleta e fontes definidas, monte a estrutura de pastas, e construa os componentes globais (Header, Footer, WhatsApp flutuante, SEO). Use placeholders onde faltar conteúdo. Ao terminar, me mostre o resultado para validar antes de seguir para a Fase 2 (Home)."
