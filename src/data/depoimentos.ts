/**
 * Depoimentos — PLACEHOLDERS.
 * ATENÇÃO (CFM §9): só podem ir ao ar com autorização do paciente e sem
 * promessa de resultado / sem "antes e depois" de cirurgia. Estes textos são
 * fictícios, focados na EXPERIÊNCIA de atendimento (acolhimento, clareza),
 * apenas para demonstrar o carrossel. Substituir pelos reais e autorizados.
 */

export interface Depoimento {
  texto: string;
  autor: string;
  /** Cidade/contexto, mantendo a privacidade do paciente. */
  contexto: string;
}

export const depoimentos: Depoimento[] = [
  {
    texto:
      "Fui muito bem acolhida desde a recepção. O Dr. Rafael explicou cada etapa com calma e paciência, e saí da consulta entendendo exatamente o que estava acontecendo comigo.",
    autor: "Paciente",
    contexto: "São Paulo, SP",
  },
  {
    texto:
      "O que mais me marcou foi a clareza. Nada de termos complicados sem explicação — me senti parte das decisões sobre o meu tratamento.",
    autor: "Paciente",
    contexto: "Guarulhos, SP",
  },
  {
    texto:
      "Atendimento humano e cuidadoso. Senti segurança na forma como cada dúvida foi respondida, sem pressa e sem pressão.",
    autor: "Paciente",
    contexto: "Santo André, SP",
  },
  {
    texto:
      "Profissional atencioso e didático. Me senti ouvida e respeitada do começo ao fim da consulta.",
    autor: "Paciente",
    contexto: "São Paulo, SP",
  },
];
