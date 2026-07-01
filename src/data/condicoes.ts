/**
 * Condições / dores tratadas — base para os cards da home, o hub /tratamentos
 * e, na Fase 4, as páginas dedicadas /tratamentos/:slug (SEO).
 * Conteúdo a partir de `topicos-dores-conteudo-educativo.md`.
 *
 * Por ora cada item tem o resumo (usado em cards). As seções completas
 * (O que é, Sintomas, Causas, Diagnóstico, Tratamento, FAQ) entram na Fase 4.
 */

export type Tier = 1 | 2 | 3;
export type Regiao = "lombar" | "cervical" | "geral";

export interface Condicao {
  slug: string;
  nome: string;
  /** Como o paciente costuma buscar no Google (linguagem do paciente). */
  busca: string;
  /** Resumo curto para cards (1–2 frases, sem promessa de resultado). */
  resumo: string;
  tier: Tier;
  regiao: Regiao;
  /** Chave do ícone (ver components/ui/icons). */
  icone: string;
}

export const condicoes: Condicao[] = [
  // ---------- Tier 1 — prioridade máxima ----------
  {
    slug: "hernia-de-disco-lombar",
    nome: "Hérnia de disco lombar",
    busca: "“hérnia de disco”, “hérnia de disco tem cura”, “dor de hérnia”",
    resumo:
      "Quando o disco entre as vértebras se desloca e pressiona um nervo, gerando dor que pode irradiar para a perna. A maioria dos casos melhora sem cirurgia.",
    tier: 1,
    regiao: "lombar",
    icone: "disco",
  },
  {
    slug: "dor-ciatica",
    nome: "Dor ciática (ciatalgia)",
    busca: "“dor ciática”, “dor que desce pra perna”, “nervo ciático inflamado”",
    resumo:
      "Aquela dor que nasce na lombar e desce pela perna, seguindo o trajeto do nervo ciático. Quase sempre é sintoma de algo tratável na coluna.",
    tier: 1,
    regiao: "lombar",
    icone: "raio",
  },
  {
    slug: "lombalgia",
    nome: "Lombalgia (dor lombar)",
    busca: "“dor na lombar”, “dor nas costas embaixo”, “travei a coluna”",
    resumo:
      "A dor na parte baixa das costas, a queixa mais comum do consultório. Entender a causa é o que define o tratamento certo.",
    tier: 1,
    regiao: "lombar",
    icone: "coluna",
  },
  {
    slug: "hernia-de-disco-cervical",
    nome: "Hérnia de disco cervical",
    busca: "“hérnia cervical”, “dor no pescoço que vai pro braço”",
    resumo:
      "Hérnia na coluna do pescoço, que pode causar dor irradiada, formigamento ou fraqueza no braço e na mão.",
    tier: 1,
    regiao: "cervical",
    icone: "disco",
  },

  // ---------- Tier 2 — forte recomendação ----------
  {
    slug: "cervicalgia",
    nome: "Cervicalgia (dor no pescoço)",
    busca: "“dor no pescoço”, “torcicolo que não passa”, “dor na nuca”",
    resumo:
      "Dor na região do pescoço, muitas vezes ligada à postura e ao uso de telas. Quando persiste, merece avaliação especializada.",
    tier: 2,
    regiao: "cervical",
    icone: "pescoco",
  },
  {
    slug: "bico-de-papagaio",
    nome: "Bico de papagaio (osteófitos)",
    busca: "“bico de papagaio na coluna”, “o que é bico de papagaio”",
    resumo:
      "Pequenas saliências ósseas que se formam nas vértebras com o desgaste. Nem sempre doem — o que importa é o conjunto dos sintomas.",
    tier: 2,
    regiao: "geral",
    icone: "osso",
  },
  {
    slug: "estenose-de-canal-vertebral",
    nome: "Estenose de canal vertebral",
    busca: "“estreitamento do canal da coluna”, “dor ao andar que melhora sentado”",
    resumo:
      "O estreitamento do canal por onde passam os nervos. Costuma dar dor nas pernas ao caminhar que alivia quando a pessoa senta.",
    tier: 2,
    regiao: "lombar",
    icone: "canal",
  },
  {
    slug: "escoliose",
    nome: "Escoliose",
    busca: "“escoliose”, “coluna torta”, “desvio na coluna”",
    resumo:
      "Um desvio lateral da coluna. O acompanhamento certo evita a progressão e orienta quando há necessidade de tratamento.",
    tier: 2,
    regiao: "geral",
    icone: "curva",
  },
  {
    slug: "dormencia-e-formigamento",
    nome: "Dormência e formigamento",
    busca: "“formigamento na mão”, “perna dormente”, “formigamento no braço”",
    resumo:
      "Sensações de dormência ou formigamento podem ser o corpo avisando sobre uma compressão de nervo na coluna. Vale investigar.",
    tier: 2,
    regiao: "geral",
    icone: "nervo",
  },

  // ---------- Tier 3 — reforço de autoridade ----------
  {
    slug: "espondilolistese",
    nome: "Espondilolistese",
    busca: "“espondilolistese”, “vértebra escorregada”",
    resumo:
      "Quando uma vértebra desliza sobre a outra. O tratamento depende do grau do deslizamento e dos sintomas.",
    tier: 3,
    regiao: "lombar",
    icone: "coluna",
  },
  {
    slug: "radiculopatia",
    nome: "Radiculopatia (nervo comprimido)",
    busca: "“nervo comprimido na coluna”, “pinçamento de nervo”",
    resumo:
      "A compressão de uma raiz nervosa na coluna, que gera dor, dormência ou fraqueza no trajeto daquele nervo.",
    tier: 3,
    regiao: "geral",
    icone: "nervo",
  },
  {
    slug: "fraturas-vertebrais",
    nome: "Fraturas vertebrais (osteoporose)",
    busca: "“fratura na coluna”, “vértebra quebrada osteoporose”",
    resumo:
      "Fraturas de vértebras, frequentes em quem tem osteoporose. Há tratamentos modernos e minimamente invasivos para alívio da dor.",
    tier: 3,
    regiao: "geral",
    icone: "osso",
  },
];

/** Condições em destaque na home (Tier 1 + principais do Tier 2). */
export const condicoesDestaque = condicoes.filter(
  (c) => c.tier === 1 || ["cervicalgia", "estenose-de-canal-vertebral"].includes(c.slug),
);

export function getCondicao(slug: string): Condicao | undefined {
  return condicoes.find((c) => c.slug === slug);
}
