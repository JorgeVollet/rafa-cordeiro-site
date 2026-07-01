/**
 * FAQ geral — usado na home (acordeão) e gera rich snippet no Google (Fase 4).
 * Redação dentro das regras do CFM: sem promessa de resultado/cura.
 * (Placeholders realistas — revisar com o Dr. Rafael.)
 */

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export const faqGeral: FAQItem[] = [
  {
    pergunta: "Toda dor nas costas precisa de cirurgia?",
    resposta:
      "Não. A grande maioria dos casos de dor na coluna melhora com tratamento conservador — medicação, fisioterapia, mudanças de hábito e acompanhamento. A cirurgia é considerada apenas em situações específicas, depois de uma avaliação criteriosa.",
  },
  {
    pergunta: "Quando devo procurar um neurocirurgião de coluna?",
    resposta:
      "Vale buscar avaliação quando a dor é intensa ou persistente, quando irradia para braços ou pernas, ou quando vem acompanhada de dormência, formigamento ou perda de força. Esses são sinais de que a coluna merece uma investigação mais detalhada.",
  },
  {
    pergunta: "Cirurgia de coluna deixa a pessoa na cadeira de rodas?",
    resposta:
      "Esse é um dos maiores mitos. As técnicas atuais, incluindo procedimentos minimamente invasivos, são planejadas justamente para proteger as estruturas nervosas. Cada caso é avaliado individualmente, com indicação criteriosa e explicação clara dos riscos e benefícios.",
  },
  {
    pergunta: "Como é feito o diagnóstico?",
    resposta:
      "O diagnóstico parte de uma conversa detalhada e de um exame físico cuidadoso, complementados quando necessário por exames de imagem (como ressonância e tomografia). O objetivo é entender a causa da dor, e não apenas tratar o sintoma.",
  },
  {
    pergunta: "O atendimento é particular ou por convênio?",
    resposta:
      "Essas informações são confirmadas no momento do agendamento. Entre em contato pelo WhatsApp para tirar dúvidas sobre valores, convênios e disponibilidade de horários.",
  },
  {
    pergunta: "Como faço para agendar uma avaliação?",
    resposta:
      "O caminho mais rápido é pelo WhatsApp, pelo botão fixo na tela. Você também pode usar a página de Contato para enviar uma mensagem e receber o retorno da equipe.",
  },
];
