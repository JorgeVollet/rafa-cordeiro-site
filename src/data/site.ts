/**
 * Configuração global do site — TODO o conteúdo institucional fica aqui
 * para ser trocado facilmente quando chegar o material do Dr. Rafael.
 * Valores marcados com "(placeholder)" devem ser confirmados no briefing.
 */

const WHATSAPP_NUMERO = import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999";
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.rafaelcordeiro.com.br";

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

  // Contato
  email: "contato@rafaelcordeiro.com.br", // (placeholder)
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

  // Locais de atendimento (placeholders — confirmar no briefing)
  clinicas: [
    {
      nome: "Unidade Centro",
      endereco: "Av. Exemplo, 1000, Sala 00",
      bairro: "Centro",
      cidade: "São Paulo, SP",
      telefone: "(11) 0000-0000",
      whatsapp: WHATSAPP_NUMERO,
      mapsUrl: "https://maps.google.com/",
    },
    {
      nome: "Unidade Zona Sul",
      endereco: "Rua Modelo, 250, Conj. 00",
      bairro: "Moema",
      cidade: "São Paulo, SP",
      telefone: "(11) 0000-0000",
      whatsapp: WHATSAPP_NUMERO,
      mapsUrl: "https://maps.google.com/",
    },
  ],

  horarios: "Segunda a sexta, das 8h às 18h", // (placeholder)
  convenios: "Atendimento particular. Consulte convênios.", // (placeholder)

  // Sobre o Dr. Rafael — informações parciais (aguardando o briefing completo)
  bio: {
    resumo:
      "Formado em Medicina pela Universidade Católica de Pelotas, com especialização pela Universidade Federal da Fronteira Sul (UFFS). Atuou como médico militar da Marinha, em Uruguaiana. Dedica-se ao tratamento de doenças do cérebro e da coluna, unindo avaliação criteriosa e tecnologia de ponta.",
    formacao: [
      "Graduação em Medicina · Universidade Católica de Pelotas",
      "Especialização · Universidade Federal da Fronteira Sul (UFFS)",
      "Médico militar da Marinha · Uruguaiana",
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

  // Disclaimer CFM — exibido no rodapé de todas as páginas (§9 do plano)
  disclaimerCFM:
    "As informações deste site têm caráter exclusivamente informativo e educativo e não substituem a consulta, o diagnóstico ou o tratamento realizados por um médico. Nenhum conteúdo aqui apresentado garante resultados. Em caso de sintomas, procure atendimento médico.",
} as const;

/** Link wa.me já com a mensagem padrão (ou uma mensagem customizada). */
export function whatsappLink(mensagem?: string): string {
  const texto = encodeURIComponent(mensagem ?? site.whatsapp.mensagemPadrao);
  return `https://wa.me/${site.whatsapp.numero}?text=${texto}`;
}

/** Navegação principal (Header e Footer). */
export const navLinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Tratamentos", to: "/tratamentos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
] as const;
