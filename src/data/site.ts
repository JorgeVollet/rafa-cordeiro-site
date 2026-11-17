/**
 * Configuração global do site — TODO o conteúdo institucional fica aqui
 * para ser trocado facilmente quando chegar o material do Dr. Rafael.
 * Valores marcados com "(placeholder)" devem ser confirmados no briefing.
 */

/**
 * WhatsApp de agendamento: 55 + DDD + número, só dígitos.
 * Vazio = ainda não recebemos o número real (os botões não mandam o paciente
 * para um número de exemplo — veja `whatsappLink`).
 */
const WHATSAPP_NUMERO = (import.meta.env.VITE_WHATSAPP_NUMBER || "").replace(/\D/g, "");

/**
 * Endereço oficial do site (canonical, Open Graph, sitemap, robots).
 * ATENÇÃO: rafaelcordeiro.com.br é de OUTRA pessoa (registro.br, titular
 * "Rafael de Oliveira Cordeiro e Souza"). Nunca usar esse domínio aqui.
 * Quando o domínio do Rafa estiver ligado na Vercel, trocar só esta linha
 * (ou a variável VITE_SITE_URL) — o sitemap e o robots leem o mesmo valor.
 */
const SITE_URL_PADRAO = "https://rafa-cordeiro-site.vercel.app";
const DOMINIO_DE_TERCEIRO = "rafaelcordeiro.com.br";

function urlDoSite(valor: string | undefined): string {
  if (!valor) return SITE_URL_PADRAO;
  try {
    const host = new URL(valor).hostname.replace(/^www\./, "");
    if (host === DOMINIO_DE_TERCEIRO) return SITE_URL_PADRAO; // .env antigo: ignorar
  } catch {
    return SITE_URL_PADRAO;
  }
  return valor.replace(/\/+$/, "");
}

const SITE_URL = urlDoSite(import.meta.env.VITE_SITE_URL);

/** Mapa: busca pela ficha do Google do Dr. Rafael (Perfil da Empresa). */
const MAPS_BUSCA =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Dr. Rafael Cordeiro dos Santos neurocirurgião Chapecó");

export const site = {
  url: SITE_URL,
  nome: "Dr. Rafael Cordeiro",
  primeiroNome: "Rafael",
  especialidade: "Neurocirurgião",
  subEspecialidade: "Cirurgia da coluna e tratamento da dor",
  // Frase de impacto — placeholder até o briefing (campo "frase_impacto")
  tagline: "Cuidando da sua coluna com diagnóstico preciso e tratamento no tempo certo.",
  descricaoCurta:
    "Avaliação e tratamento de hérnia de disco, dor ciática, lombalgia e demais dores da coluna, do conservador ao cirúrgico minimamente invasivo.",

  // Registros profissionais — CFM exige visibilidade
  crm: "CRM/SC 40233",
  rqe: "RQE 27662",

  // Contato — vazio até o Rafa mandar o e-mail real (o antigo era do domínio de outra pessoa)
  email: "" as string,
  whatsapp: {
    numero: WHATSAPP_NUMERO,
    mensagemPadrao:
      "Olá! Vim pelo site e gostaria de agendar uma avaliação com o Dr. Rafael Cordeiro.",
  },

  // Redes sociais (placeholders)
  social: {
    instagram: {
      handle: "@dr.rafaelcordeiro",
      url: "https://instagram.com/",
    },
  },

  // Locais de atendimento. Endereço, bairro e telefone ficam vazios até o Rafa
  // mandar os dados reais (pedidos em 17/11/2026) — campo vazio não aparece no site.
  clinicas: [
    {
      nome: "Unidade Chapecó",
      endereco: "",
      bairro: "",
      cidade: "Chapecó, SC",
      telefone: "",
      whatsapp: WHATSAPP_NUMERO,
      mapsUrl: MAPS_BUSCA,
    },
  ] as Array<{
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    telefone: string;
    whatsapp: string;
    mapsUrl: string;
  }>,

  horarios: "Consultas com hora marcada",
  convenios: "Atendimento particular e por convênio — confirme o seu pelo WhatsApp.",

  // Sobre o Dr. Rafael (ajustado na reunião de 16/11/2026; briefing completo pendente)
  bio: {
    resumo:
      "Formado em Medicina pela Universidade Católica de Pelotas, com especialização pela Universidade Federal da Fronteira Sul (UFFS) e pós-graduação em endoscopia da coluna pelo Hospital Albert Einstein. Dedica-se ao tratamento de doenças do cérebro e da coluna com atendimento humanizado: escuta atenta, explicação clara e cada decisão tomada junto com o paciente.",
    formacao: [
      "Graduação em Medicina · Universidade Católica de Pelotas",
      "Especialização · Universidade Federal da Fronteira Sul (UFFS)",
      "Pós-graduação em Endoscopia da Coluna · Hospital Albert Einstein",
    ],
    focos: [
      {
        titulo: "Cérebro e sistema nervoso",
        texto:
          "Doenças cerebrovasculares, aneurismas, tumores cerebrais, cefaleias e avaliação de doenças demenciais.",
      },
      {
        titulo: "Coluna vertebral",
        texto:
          "Atenção especial às patologias da coluna e a procedimentos de alta complexidade.",
      },
      {
        titulo: "Tecnologia de ponta",
        texto:
          "Neuronavegadores para o posicionamento de implantes de forma minimamente invasiva, com precisão milimétrica.",
      },
    ],
  },

  /**
   * Medição (Umami Cloud, conta do Jorge). websiteId vazio = o script não carrega.
   * `dominios` restringe a contagem ao site publicado (dev/preview não contam).
   * Ao ligar o domínio do Rafa, acrescentar o hostname novo aqui.
   */
  umami: {
    websiteId: "c59671e0-417d-46b4-bd65-ac298a54c2a7" as string, // "Dr. Rafael Cordeiro" — criado em 17/11/2026
    src: "https://cloud.umami.is/script.js",
    dominios: "rafa-cordeiro-site.vercel.app" as string,
  },

  // Disclaimer CFM — exibido no rodapé de todas as páginas (§9 do plano)
  disclaimerCFM:
    "As informações deste site têm caráter exclusivamente informativo e educativo e não substituem a consulta, o diagnóstico ou o tratamento realizados por um médico. Nenhum conteúdo aqui apresentado garante resultados. Em caso de sintomas, procure atendimento médico.",
} as const;

/**
 * Endereço legível: rua + bairro + cidade quando existem; sem rua cadastrada,
 * mostra a cidade e avisa que o endereço vem no agendamento (nunca um exemplo).
 */
export function enderecoCompleto(cl: (typeof site.clinicas)[number]): string {
  if (!cl.endereco) return `${cl.cidade} · endereço completo informado no agendamento`;
  return `${cl.endereco}${cl.bairro ? `, ${cl.bairro}` : ""} · ${cl.cidade}`;
}

/**
 * true só para um número brasileiro plausível: 55 + DDD (11–99) + celular
 * (9 + 8 dígitos) ou fixo (8 dígitos começando em 2–5). Números de exemplo
 * como 5500000000000 e 5511999999999 ficam de fora.
 */
export const whatsappConfigurado =
  /^55[1-9]\d(9\d{8}|[2-5]\d{7})$/.test(site.whatsapp.numero) &&
  site.whatsapp.numero !== "5511999999999";

/**
 * Link wa.me já com a mensagem padrão (ou uma mensagem customizada).
 * Sem número configurado, abre o WhatsApp para a pessoa ESCOLHER o contato —
 * nunca manda a mensagem do paciente para um número de exemplo (que pode ser
 * de um estranho).
 */
export function whatsappLink(mensagem?: string): string {
  const texto = encodeURIComponent(mensagem ?? site.whatsapp.mensagemPadrao);
  return whatsappConfigurado
    ? `https://wa.me/${site.whatsapp.numero}?text=${texto}`
    : `https://wa.me/?text=${texto}`;
}

/** Navegação principal (Header e Footer). */
export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Tratamentos", to: "/tratamentos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
] as const;
