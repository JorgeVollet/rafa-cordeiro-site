/**
 * Conteúdo educativo das páginas /tratamentos/:slug — RASCUNHO para revisão do Dr. Rafael.
 * Estrutura padrão (§6 do plano / topicos-dores-conteudo-educativo.md):
 *   O que é · Sintomas · Causas · Diagnóstico · Tratamento (conservador/cirúrgico) ·
 *   Quando procurar · FAQ.
 *
 * CFM (§9): linguagem informativa, SEM promessa de resultado/cura, SEM "antes e depois".
 * Reforçar sempre que a avaliação é individualizada e não substitui a consulta.
 * Textos são um ponto de partida — devem ser revisados/aprovados pelo médico.
 */

export interface ConteudoCondicao {
  /** Frase de abertura curta (subtítulo do hero da página). */
  intro: string;
  oQue: string;
  sintomas: string[];
  causas: string[];
  diagnostico: string;
  tratamento: {
    conservador: string[];
    cirurgico: string;
  };
  quandoProcurar: string[];
  faq: { pergunta: string; resposta: string }[];
}

export const conteudoCondicoes: Record<string, ConteudoCondicao> = {
  "hernia-de-disco-lombar": {
    intro:
      "Uma das causas mais comuns de dor lombar que irradia para a perna — e que, na maioria das vezes, melhora sem cirurgia.",
    oQue:
      "Entre cada vértebra existe um disco que funciona como amortecedor. Na hérnia de disco lombar, parte desse disco se desloca e pode comprimir uma raiz nervosa, gerando dor que costuma irradiar para a perna. É uma condição frequente e, na maior parte dos casos, responde bem ao tratamento conservador.",
    sintomas: [
      "Dor na lombar que desce para o glúteo, a coxa ou a perna.",
      "Dor que piora ao sentar, tossir, espirrar ou fazer força.",
      "Formigamento ou sensação de queimação no trajeto do nervo.",
      "Em casos mais intensos, fraqueza ou perda de sensibilidade na perna ou no pé.",
    ],
    causas: [
      "Desgaste natural dos discos com a idade.",
      "Esforço repetitivo, levantamento de peso com técnica inadequada.",
      "Sedentarismo e enfraquecimento da musculatura que dá suporte à coluna.",
      "Fatores genéticos e tabagismo, que aceleram o desgaste discal.",
    ],
    diagnostico:
      "O diagnóstico começa pela história e pelo exame físico, que avaliam força, sensibilidade e reflexos. A ressonância magnética costuma confirmar a hérnia e mostrar qual nervo está envolvido — mas a imagem sempre é interpretada junto com os sintomas, nunca isoladamente.",
    tratamento: {
      conservador: [
        "Medicação para controle da dor e da inflamação, orientada caso a caso.",
        "Fisioterapia e reabilitação para fortalecer e estabilizar a coluna.",
        "Ajustes na rotina, postura e atividade física.",
        "Em casos selecionados, procedimentos guiados por imagem para alívio da dor.",
      ],
      cirurgico:
        "A cirurgia é reservada para casos que não melhoram com o tratamento conservador ou que apresentam sinais de alerta (como perda de força progressiva). Quando indicada, prioriza-se a técnica minimamente invasiva, com avaliação individualizada de riscos e benefícios.",
    },
    quandoProcurar: [
      "Dor intensa que não melhora com repouso e medicação.",
      "Fraqueza progressiva na perna ou no pé.",
      "Dormência na região genital ou alteração para urinar/evacuar (procure atendimento de urgência).",
    ],
    faq: [
      {
        pergunta: "Hérnia de disco tem cura?",
        resposta:
          "A maioria das pessoas melhora dos sintomas com tratamento adequado, muitas vezes sem cirurgia. O objetivo é controlar a dor, recuperar a função e prevenir novas crises. Cada caso é avaliado individualmente.",
      },
      {
        pergunta: "Toda hérnia de disco precisa de cirurgia?",
        resposta:
          "Não. A maior parte dos casos é tratada de forma conservadora. A cirurgia é considerada quando há falha do tratamento clínico ou sinais de alerta neurológicos.",
      },
      {
        pergunta: "Posso fazer exercícios com hérnia de disco?",
        resposta:
          "Em geral, atividade física orientada faz parte do tratamento e ajuda na recuperação. O tipo e a intensidade devem ser definidos junto com o seu médico e o fisioterapeuta.",
      },
    ],
  },

  "dor-ciatica": {
    intro:
      "Aquela dor que nasce na lombar e desce pela perna — quase sempre um sintoma de algo tratável na coluna.",
    oQue:
      "A dor ciática (ou ciatalgia) é a dor que segue o trajeto do nervo ciático, da lombar até a perna. Não é uma doença em si, e sim um sintoma — geralmente causado por compressão de uma raiz nervosa, como em uma hérnia de disco. Identificar a origem é o que define o tratamento certo.",
    sintomas: [
      "Dor que irradia da lombar/glúteo para a parte de trás da coxa e perna.",
      "Sensação de choque, queimação ou fisgada ao longo do trajeto do nervo.",
      "Piora ao sentar por muito tempo ou ao fazer força.",
      "Formigamento ou fraqueza na perna ou no pé, em alguns casos.",
    ],
    causas: [
      "Hérnia de disco comprimindo a raiz nervosa.",
      "Estenose (estreitamento) do canal vertebral.",
      "Espondilolistese ou alterações degenerativas da coluna.",
      "Mais raramente, causas fora da coluna.",
    ],
    diagnostico:
      "A avaliação clínica localiza qual raiz nervosa está envolvida. Exames de imagem, como a ressonância, ajudam a confirmar a causa quando necessário. O diagnóstico combina o que você sente com o que o exame mostra.",
    tratamento: {
      conservador: [
        "Controle da dor com medicação orientada.",
        "Fisioterapia voltada ao alívio da compressão e ao fortalecimento.",
        "Retorno gradual às atividades, evitando repouso prolongado.",
        "Procedimentos para dor guiados por imagem, em casos selecionados.",
      ],
      cirurgico:
        "Indicada quando a dor é refratária ao tratamento clínico ou há déficit neurológico. A conduta é sempre individualizada, priorizando técnicas que liberem o nervo com o mínimo de agressão.",
    },
    quandoProcurar: [
      "Dor forte que não cede em poucas semanas de tratamento.",
      "Fraqueza para mover o pé ou a perna.",
      "Perda de controle da urina/fezes ou dormência na região genital (urgência).",
    ],
    faq: [
      {
        pergunta: "Dor ciática some sozinha?",
        resposta:
          "Muitos episódios melhoram com tratamento conservador em algumas semanas. Quando a dor persiste ou volta com frequência, vale investigar a causa com um especialista.",
      },
      {
        pergunta: "O que piora a dor ciática?",
        resposta:
          "Ficar muito tempo sentado, esforços com a coluna mal posicionada e o sedentarismo costumam piorar. O manejo é individualizado.",
      },
      {
        pergunta: "Calor ou gelo ajudam?",
        resposta:
          "Podem aliviar temporariamente em algumas pessoas, mas não tratam a causa. Use como conforto e procure avaliação para o tratamento adequado.",
      },
    ],
  },

  lombalgia: {
    intro:
      "A dor na parte baixa das costas, a queixa mais comum do consultório. Entender a causa é o que define o tratamento certo.",
    oQue:
      "Lombalgia é o nome da dor na região lombar. É extremamente comum e, na maioria das vezes, tem boa evolução. Pode ser aguda (a clássica 'travada') ou crônica. O mais importante é diferenciar as causas mecânicas, mais frequentes, dos casos que merecem investigação aprofundada.",
    sintomas: [
      "Dor ou rigidez na parte baixa das costas.",
      "Piora ao se movimentar, ficar muito tempo na mesma posição ou fazer esforço.",
      "Sensação de 'travamento' em crises agudas.",
      "Em alguns casos, dor que se espalha para o glúteo.",
    ],
    causas: [
      "Sobrecarga muscular e má postura.",
      "Desgaste degenerativo dos discos e articulações da coluna.",
      "Fraqueza da musculatura do core e sedentarismo.",
      "Fatores como estresse, sono ruim e excesso de peso.",
    ],
    diagnostico:
      "A maioria das lombalgias é diagnosticada pela história e pelo exame físico, sem necessidade imediata de imagem. Exames são solicitados quando há sinais de alerta ou quando a dor persiste, para direcionar o tratamento.",
    tratamento: {
      conservador: [
        "Manter-se ativo dentro do possível, evitando repouso prolongado.",
        "Fisioterapia e fortalecimento da musculatura de suporte.",
        "Medicação para alívio da dor nas crises, quando indicada.",
        "Orientações de postura, ergonomia e atividade física.",
      ],
      cirurgico:
        "A cirurgia é incomum na lombalgia simples. É considerada apenas em causas específicas e bem definidas, após avaliação criteriosa.",
    },
    quandoProcurar: [
      "Dor que não melhora após algumas semanas de cuidado.",
      "Dor acompanhada de febre, perda de peso ou que piora à noite.",
      "Dor com fraqueza nas pernas ou alteração para urinar/evacuar (urgência).",
    ],
    faq: [
      {
        pergunta: "Preciso fazer ressonância para dor lombar?",
        resposta:
          "Nem sempre. Na maioria dos casos, a avaliação clínica é suficiente no início. A imagem é indicada quando há sinais de alerta ou dor persistente.",
      },
      {
        pergunta: "Repouso absoluto ajuda?",
        resposta:
          "Em geral, não. Manter-se ativo dentro do tolerável costuma favorecer a recuperação mais do que o repouso prolongado.",
      },
      {
        pergunta: "Lombalgia pode virar algo mais sério?",
        resposta:
          "A maioria é benigna. O acompanhamento ajuda a identificar precocemente os poucos casos que precisam de investigação adicional.",
      },
    ],
  },

  "hernia-de-disco-cervical": {
    intro:
      "Hérnia na coluna do pescoço, que pode causar dor irradiada, formigamento ou fraqueza no braço e na mão.",
    oQue:
      "Na hérnia de disco cervical, um disco da coluna do pescoço se desloca e pode comprimir uma raiz nervosa ou a medula. Os sintomas costumam aparecer no pescoço e irradiar para o ombro, o braço e a mão. A maioria dos casos é tratada sem cirurgia.",
    sintomas: [
      "Dor no pescoço que irradia para o ombro, braço ou mão.",
      "Formigamento ou dormência nos dedos.",
      "Fraqueza em parte do braço ou da mão.",
      "Piora com certas posições da cabeça.",
    ],
    causas: [
      "Desgaste degenerativo dos discos cervicais.",
      "Postura prolongada com a cabeça inclinada (uso de telas).",
      "Movimentos bruscos ou traumas.",
      "Predisposição individual e tabagismo.",
    ],
    diagnostico:
      "O exame físico avalia força, reflexos e sensibilidade dos braços e mãos. A ressonância magnética confirma a hérnia e mostra a estrutura comprimida, sempre interpretada junto com os sintomas.",
    tratamento: {
      conservador: [
        "Medicação para dor e inflamação, conforme o caso.",
        "Fisioterapia e reeducação postural.",
        "Ajustes ergonômicos no trabalho e no uso de telas.",
        "Procedimentos guiados por imagem em situações selecionadas.",
      ],
      cirurgico:
        "Considerada quando há compressão importante, déficit neurológico ou falha do tratamento conservador. A indicação é individualizada e prioriza técnicas modernas e seguras.",
    },
    quandoProcurar: [
      "Fraqueza progressiva no braço ou na mão.",
      "Alteração de equilíbrio ou na coordenação das mãos.",
      "Dor intensa que não melhora com tratamento.",
    ],
    faq: [
      {
        pergunta: "Hérnia cervical é perigosa?",
        resposta:
          "A maioria evolui bem com tratamento conservador. Sinais de compressão da medula, embora menos comuns, merecem avaliação mais cuidadosa.",
      },
      {
        pergunta: "Posso usar travesseiro normal?",
        resposta:
          "O ideal é um apoio que mantenha o pescoço alinhado. Pequenos ajustes ajudam no conforto, mas não substituem a avaliação da causa.",
      },
      {
        pergunta: "Formigamento na mão é sempre da coluna?",
        resposta:
          "Nem sempre — pode ter outras origens, como compressão do nervo no punho. Por isso a avaliação especializada é importante.",
      },
    ],
  },

  cervicalgia: {
    intro:
      "Dor na região do pescoço, muitas vezes ligada à postura e ao uso de telas. Quando persiste, merece avaliação.",
    oQue:
      "Cervicalgia é a dor localizada no pescoço. Costuma ter origem muscular e postural, sendo muito comum em quem passa horas em frente a telas. Na maioria das vezes é benigna, mas a dor persistente ou associada a outros sintomas deve ser investigada.",
    sintomas: [
      "Dor e rigidez no pescoço e na nuca.",
      "Tensão nos ombros e na base do crânio.",
      "Piora ao final do dia ou após longos períodos sentado.",
      "Às vezes, dor de cabeça associada.",
    ],
    causas: [
      "Postura inadequada e uso prolongado de celular/computador.",
      "Tensão muscular e estresse.",
      "Desgaste degenerativo das articulações cervicais.",
      "Noites mal dormidas e travesseiro inadequado.",
    ],
    diagnostico:
      "Na maioria dos casos, a avaliação clínica é suficiente. Exames de imagem são reservados para dor persistente, traumas ou quando há sintomas neurológicos associados.",
    tratamento: {
      conservador: [
        "Fisioterapia, alongamento e fortalecimento.",
        "Correção postural e ergonomia do posto de trabalho.",
        "Medicação para alívio nas crises, quando necessário.",
        "Manejo do estresse e melhora do sono.",
      ],
      cirurgico:
        "Raramente indicada na cervicalgia comum. É considerada apenas quando há uma causa estrutural específica que justifique.",
    },
    quandoProcurar: [
      "Dor que irradia para o braço com formigamento ou fraqueza.",
      "Dor após trauma ou acidente.",
      "Dor persistente que não melhora com cuidados básicos.",
    ],
    faq: [
      {
        pergunta: "Dor no pescoço pode ser da postura?",
        resposta:
          "Sim, a causa postural é uma das mais comuns. Ajustes na ergonomia e fortalecimento costumam ajudar bastante.",
      },
      {
        pergunta: "Quando a dor no pescoço é preocupante?",
        resposta:
          "Quando irradia para o braço, vem após trauma, ou se associa a fraqueza/formigamento. Nesses casos, procure avaliação.",
      },
      {
        pergunta: "Travesseiro influencia?",
        resposta:
          "Sim. Um apoio que mantenha o pescoço alinhado durante o sono pode reduzir o desconforto.",
      },
    ],
  },

  "bico-de-papagaio": {
    intro:
      "Pequenas saliências ósseas que se formam nas vértebras com o desgaste. Nem sempre doem — o que importa é o conjunto dos sintomas.",
    oQue:
      "'Bico de papagaio' é o nome popular dos osteófitos: projeções ósseas que surgem nas bordas das vértebras como parte do desgaste natural da coluna. São muito comuns com a idade e, em boa parte das pessoas, não causam dor. O tratamento foca nos sintomas, não na imagem isolada.",
    sintomas: [
      "Em muitos casos, nenhum sintoma.",
      "Dor ou rigidez na região afetada da coluna.",
      "Eventual irritação de um nervo próximo, com dor irradiada.",
      "Limitação de movimento em alguns casos.",
    ],
    causas: [
      "Envelhecimento e desgaste degenerativo da coluna.",
      "Sobrecarga mecânica ao longo dos anos.",
      "Alterações posturais.",
      "Predisposição individual.",
    ],
    diagnostico:
      "Os osteófitos aparecem em exames de imagem (raio-X, tomografia). O ponto-chave é correlacionar o achado com os sintomas — encontrar 'bico de papagaio' na imagem não significa, por si só, que ele seja a causa da dor.",
    tratamento: {
      conservador: [
        "Fisioterapia para mobilidade e fortalecimento.",
        "Controle da dor com medicação, quando indicada.",
        "Atividade física regular e cuidados posturais.",
        "Acompanhamento dos sintomas ao longo do tempo.",
      ],
      cirurgico:
        "Reservada aos casos em que o osteófito comprime estruturas nervosas e gera sintomas importantes que não respondem ao tratamento conservador.",
    },
    quandoProcurar: [
      "Dor persistente que limita as atividades.",
      "Dor irradiada com formigamento ou fraqueza.",
      "Piora progressiva dos sintomas.",
    ],
    faq: [
      {
        pergunta: "Bico de papagaio tem cura?",
        resposta:
          "O osteófito em si não 'desaparece', mas os sintomas geralmente são controlados com tratamento adequado. O foco é a qualidade de vida, não a imagem.",
      },
      {
        pergunta: "Todo bico de papagaio dói?",
        resposta:
          "Não. Muitos são achados de exame em pessoas sem dor. Por isso a avaliação clínica é essencial.",
      },
      {
        pergunta: "Preciso operar?",
        resposta:
          "Na grande maioria dos casos, não. A cirurgia é exceção, indicada apenas em situações específicas.",
      },
    ],
  },

  "estenose-de-canal-vertebral": {
    intro:
      "O estreitamento do canal por onde passam os nervos. Costuma dar dor nas pernas ao caminhar que alivia ao sentar.",
    oQue:
      "A estenose de canal é o estreitamento do espaço por onde passam a medula e as raízes nervosas, mais comum na região lombar e ligado ao desgaste da coluna. Esse estreitamento pode comprimir os nervos e causar sintomas, principalmente ao caminhar ou ficar muito tempo em pé.",
    sintomas: [
      "Dor, peso ou formigamento nas pernas ao caminhar.",
      "Alívio característico ao sentar ou inclinar o tronco para frente.",
      "Cansaço nas pernas após curtas distâncias.",
      "Em casos avançados, fraqueza nas pernas.",
    ],
    causas: [
      "Desgaste degenerativo (artrose, espessamento de ligamentos).",
      "Osteófitos e abaulamentos discais.",
      "Espondilolistese associada.",
      "Predisposição anatômica.",
    ],
    diagnostico:
      "O quadro clínico é bastante sugestivo. A ressonância confirma o estreitamento e mostra o grau de compressão, sempre correlacionada com os sintomas e com o exame físico.",
    tratamento: {
      conservador: [
        "Fisioterapia com foco em postura e fortalecimento.",
        "Medicação para alívio da dor, conforme o caso.",
        "Adaptação das atividades e do ritmo de caminhada.",
        "Procedimentos para dor guiados por imagem, em casos selecionados.",
      ],
      cirurgico:
        "Indicada quando os sintomas limitam a vida e não respondem ao tratamento conservador. O objetivo é descomprimir os nervos, com técnica escolhida de forma individualizada.",
    },
    quandoProcurar: [
      "Dificuldade progressiva para caminhar distâncias antes confortáveis.",
      "Fraqueza nas pernas.",
      "Alteração para urinar/evacuar (procure atendimento de urgência).",
    ],
    faq: [
      {
        pergunta: "Por que a dor melhora quando sento?",
        resposta:
          "Inclinar o tronco para frente abre um pouco o canal e alivia a compressão dos nervos — um sinal clássico da estenose lombar.",
      },
      {
        pergunta: "Estenose sempre precisa de cirurgia?",
        resposta:
          "Não. Muitos casos são controlados de forma conservadora. A cirurgia entra quando há limitação importante ou déficit neurológico.",
      },
      {
        pergunta: "Posso continuar caminhando?",
        resposta:
          "Em geral sim, respeitando os limites e com orientação. A atividade física adaptada faz parte do cuidado.",
      },
    ],
  },

  escoliose: {
    intro:
      "Um desvio lateral da coluna. O acompanhamento certo evita a progressão e orienta quando há necessidade de tratamento.",
    oQue:
      "Escoliose é um desvio lateral da coluna, que ganha um formato em 'C' ou 'S'. Pode surgir na infância/adolescência ou na vida adulta (por degeneração). Muitos casos são leves e exigem apenas acompanhamento; o tratamento depende do grau do desvio, da idade e dos sintomas.",
    sintomas: [
      "Assimetria dos ombros, da cintura ou das escápulas.",
      "Sensação de coluna 'torta' ou postura desalinhada.",
      "Dor nas costas, principalmente nos casos do adulto.",
      "Em curvas maiores, cansaço ou desconforto ao ficar muito tempo em pé.",
    ],
    causas: [
      "Na maioria dos jovens, causa não totalmente conhecida (idiopática).",
      "Degeneração da coluna no adulto.",
      "Causas congênitas ou neuromusculares, menos comuns.",
      "Fatores de progressão como fase de crescimento.",
    ],
    diagnostico:
      "O exame físico avalia a assimetria e a flexibilidade da curva. O raio-X mede o ângulo do desvio e é usado para acompanhar a evolução ao longo do tempo.",
    tratamento: {
      conservador: [
        "Acompanhamento periódico para monitorar a curva.",
        "Fisioterapia e exercícios específicos.",
        "Uso de colete em casos selecionados (sobretudo na fase de crescimento).",
        "Controle da dor e fortalecimento no adulto.",
      ],
      cirurgico:
        "Considerada em curvas acentuadas, progressivas ou com sintomas importantes. A decisão é individualizada, pesando idade, grau do desvio e impacto na vida.",
    },
    quandoProcurar: [
      "Assimetria perceptível na postura, especialmente em crianças/adolescentes.",
      "Progressão visível da curva.",
      "Dor nas costas associada a fraqueza ou formigamento.",
    ],
    faq: [
      {
        pergunta: "Escoliose tem cura?",
        resposta:
          "O objetivo do tratamento é controlar a progressão e os sintomas. Em jovens em crescimento, o acompanhamento é fundamental para decidir a melhor conduta.",
      },
      {
        pergunta: "Má postura causa escoliose?",
        resposta:
          "A escoliose verdadeira não é causada apenas por má postura, embora a postura influencie o conforto. O diagnóstico é feito por exame e imagem.",
      },
      {
        pergunta: "Exercício ajuda?",
        resposta:
          "Exercícios orientados ajudam na dor, na força e na postura. O tipo ideal varia conforme o caso.",
      },
    ],
  },

  "dormencia-e-formigamento": {
    intro:
      "Dormência ou formigamento podem ser o corpo avisando sobre uma compressão de nervo. Vale investigar.",
    oQue:
      "Dormência (perda de sensibilidade) e formigamento são sintomas que podem indicar irritação ou compressão de um nervo — muitas vezes na coluna, mas também em outros pontos do trajeto nervoso. Quando são persistentes, progressivos ou vêm com fraqueza, merecem avaliação para identificar a causa.",
    sintomas: [
      "Formigamento ou 'agulhadas' em braços, mãos, pernas ou pés.",
      "Áreas com sensibilidade reduzida.",
      "Piora em certas posições ou períodos do dia.",
      "Às vezes, associação com dor ou fraqueza.",
    ],
    causas: [
      "Compressão de raiz nervosa na coluna (hérnia, estenose).",
      "Compressão de nervos periféricos (ex.: punho).",
      "Causas metabólicas, como alterações da glicose.",
      "Outras condições neurológicas.",
    ],
    diagnostico:
      "A avaliação identifica o trajeto acometido e a provável origem. Conforme o caso, exames de imagem e estudos de condução nervosa ajudam a localizar a compressão.",
    tratamento: {
      conservador: [
        "Tratamento direcionado à causa identificada.",
        "Fisioterapia e ajustes ergonômicos.",
        "Controle de fatores associados (postura, atividade, metabolismo).",
        "Medicação específica em casos selecionados.",
      ],
      cirurgico:
        "Indicado quando há compressão significativa de um nervo, com sintomas que não melhoram com tratamento conservador. A conduta é definida individualmente.",
    },
    quandoProcurar: [
      "Dormência que avança ou não melhora.",
      "Fraqueza associada ao formigamento.",
      "Sintomas súbitos e intensos (procure avaliação rápida).",
    ],
    faq: [
      {
        pergunta: "Formigamento é sempre grave?",
        resposta:
          "Nem sempre. Muitos casos são benignos e transitórios. A investigação ajuda a distinguir o que precisa de tratamento específico.",
      },
      {
        pergunta: "Dormência na mão é da coluna?",
        resposta:
          "Pode ser da coluna cervical ou de uma compressão no próprio braço/punho. O exame define a origem.",
      },
      {
        pergunta: "Quando devo me preocupar?",
        resposta:
          "Se houver fraqueza, piora progressiva ou início súbito e intenso, procure avaliação sem demora.",
      },
    ],
  },

  espondilolistese: {
    intro:
      "Quando uma vértebra desliza sobre a outra. O tratamento depende do grau do deslizamento e dos sintomas.",
    oQue:
      "Espondilolistese é o deslizamento de uma vértebra sobre a vértebra de baixo, mais comum na região lombar. Pode ser causada por desgaste ou por uma falha óssea, e seu impacto varia bastante: muitos casos são leves e estáveis, outros geram dor e compressão de nervos.",
    sintomas: [
      "Dor lombar que piora ao ficar em pé ou em movimento.",
      "Dor que pode irradiar para as pernas.",
      "Sensação de instabilidade na lombar.",
      "Em casos maiores, formigamento ou fraqueza nas pernas.",
    ],
    causas: [
      "Degeneração das articulações e discos (mais comum no adulto).",
      "Falha óssea na vértebra (espondilólise), frequente em jovens atletas.",
      "Sobrecarga repetitiva da coluna.",
      "Predisposição individual.",
    ],
    diagnostico:
      "Raio-X (inclusive com a coluna em flexão e extensão) mede o grau do deslizamento e avalia a estabilidade. Ressonância e tomografia detalham a compressão nervosa quando há sintomas nas pernas.",
    tratamento: {
      conservador: [
        "Fisioterapia e fortalecimento do core.",
        "Controle da dor e ajuste das atividades.",
        "Acompanhamento da estabilidade ao longo do tempo.",
        "Procedimentos para dor em casos selecionados.",
      ],
      cirurgico:
        "Considerada em deslizamentos instáveis, progressivos ou com compressão nervosa que não responde ao tratamento clínico. A indicação é sempre individualizada.",
    },
    quandoProcurar: [
      "Dor lombar persistente com irradiação para as pernas.",
      "Fraqueza ou formigamento progressivos.",
      "Sensação importante de instabilidade.",
    ],
    faq: [
      {
        pergunta: "Espondilolistese é grave?",
        resposta:
          "Depende do grau e da estabilidade. Muitos casos são leves e bem controlados sem cirurgia; outros exigem acompanhamento mais próximo.",
      },
      {
        pergunta: "Posso fazer exercício?",
        resposta:
          "Sim, com orientação. O fortalecimento do core costuma fazer parte do tratamento; atividades de impacto devem ser avaliadas caso a caso.",
      },
      {
        pergunta: "Sempre piora com o tempo?",
        resposta:
          "Não necessariamente. Muitos casos permanecem estáveis. O acompanhamento ajuda a monitorar a evolução.",
      },
    ],
  },

  radiculopatia: {
    intro:
      "A compressão de uma raiz nervosa na coluna, que gera dor, dormência ou fraqueza no trajeto daquele nervo.",
    oQue:
      "Radiculopatia é o conjunto de sintomas que surge quando uma raiz nervosa da coluna é comprimida ou irritada. Dependendo do nível afetado, os sintomas aparecem no braço (cervical) ou na perna (lombar), seguindo o trajeto específico daquele nervo.",
    sintomas: [
      "Dor que irradia seguindo o trajeto de um nervo.",
      "Formigamento ou dormência na área correspondente.",
      "Fraqueza em músculos específicos.",
      "Piora com certos movimentos ou posições.",
    ],
    causas: [
      "Hérnia de disco comprimindo a raiz.",
      "Estenose ou osteófitos.",
      "Espondilolistese.",
      "Processos inflamatórios locais.",
    ],
    diagnostico:
      "O exame neurológico localiza a raiz envolvida pelo padrão dos sintomas. Imagem (ressonância) e, às vezes, eletroneuromiografia confirmam o nível e a intensidade da compressão.",
    tratamento: {
      conservador: [
        "Medicação para dor e inflamação, orientada.",
        "Fisioterapia direcionada.",
        "Ajustes de atividade e postura.",
        "Procedimentos guiados por imagem, em casos selecionados.",
      ],
      cirurgico:
        "Indicada quando há déficit neurológico relevante ou dor refratária ao tratamento conservador. O objetivo é liberar a raiz comprimida, com técnica individualizada.",
    },
    quandoProcurar: [
      "Fraqueza progressiva no braço ou na perna.",
      "Dor intensa que não melhora com tratamento.",
      "Perda de sensibilidade importante.",
    ],
    faq: [
      {
        pergunta: "Radiculopatia melhora sem cirurgia?",
        resposta:
          "Muitos casos melhoram com tratamento conservador. A cirurgia é considerada quando há falha clínica ou sinais neurológicos de alerta.",
      },
      {
        pergunta: "É o mesmo que dor ciática?",
        resposta:
          "A dor ciática é uma forma de radiculopatia lombar. O termo radiculopatia é mais amplo e vale também para a região cervical.",
      },
      {
        pergunta: "Quanto tempo dura?",
        resposta:
          "Varia conforme a causa e o tratamento. O acompanhamento ajuda a definir expectativas realistas para o seu caso.",
      },
    ],
  },

  "fraturas-vertebrais": {
    intro:
      "Fraturas de vértebras, frequentes em quem tem osteoporose. Há tratamentos modernos e minimamente invasivos para o alívio da dor.",
    oQue:
      "As fraturas vertebrais por fragilidade acontecem quando uma vértebra enfraquecida — em geral pela osteoporose — colapsa, às vezes com um esforço mínimo. Causam dor nas costas que pode ser intensa e limitar bastante o dia a dia. Existem opções modernas e minimamente invasivas para alívio em casos selecionados.",
    sintomas: [
      "Dor nas costas de início súbito, às vezes após pequeno esforço.",
      "Piora ao se levantar, ficar em pé ou caminhar.",
      "Redução da altura ou aumento da curvatura das costas, ao longo do tempo.",
      "Limitação importante das atividades.",
    ],
    causas: [
      "Osteoporose (causa mais comum em idosos).",
      "Traumas, mesmo de baixa energia em ossos frágeis.",
      "Uso prolongado de certos medicamentos que afetam o osso.",
      "Outras condições que enfraquecem a vértebra.",
    ],
    diagnostico:
      "Raio-X, tomografia ou ressonância confirmam a fratura, avaliam se é recente e descartam outras causas. A investigação da osteoporose também faz parte do cuidado.",
    tratamento: {
      conservador: [
        "Controle da dor e repouso relativo na fase aguda.",
        "Reabilitação progressiva.",
        "Tratamento da osteoporose para prevenir novas fraturas.",
        "Órtese (colete), quando indicada.",
      ],
      cirurgico:
        "Procedimentos minimamente invasivos (como a cimentação vertebral) podem ser indicados em casos selecionados de dor importante que não melhora. A decisão é individualizada.",
    },
    quandoProcurar: [
      "Dor nas costas intensa e súbita, sobretudo em idosos.",
      "Dor que não melhora com cuidados iniciais.",
      "Fraqueza nas pernas ou alteração para urinar/evacuar (urgência).",
    ],
    faq: [
      {
        pergunta: "Fratura por osteoporose precisa de cirurgia?",
        resposta:
          "Muitas melhoram com tratamento conservador. Procedimentos minimamente invasivos são uma opção em casos selecionados de dor persistente.",
      },
      {
        pergunta: "Como prevenir novas fraturas?",
        resposta:
          "Tratar a osteoporose, manter atividade física orientada e cuidar da alimentação e de quedas são medidas importantes.",
      },
      {
        pergunta: "Vou ficar com a coluna curvada?",
        resposta:
          "Nem sempre. O tratamento adequado e a prevenção de novas fraturas ajudam a preservar a postura. Cada caso é avaliado individualmente.",
      },
    ],
  },
};

export function getConteudoCondicao(slug: string): ConteudoCondicao | undefined {
  return conteudoCondicoes[slug];
}
