import { SEO } from "@/components/layout/SEO";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

/** Canal para o titular exercer direitos (e-mail quando houver; senão, WhatsApp/contato). */
const canalContato = site.email
  ? `pelo e-mail ${site.email}`
  : "pelos canais de contato deste site (WhatsApp ou formulário)";

const secoes = [
  {
    titulo: "1. Quem é o responsável pelos dados",
    paragrafos: [
      `Este site é mantido por ${site.nome} (${site.crm} · ${site.rqe}). O responsável pelo tratamento dos dados pessoais coletados aqui pode ser contatado ${canalContato}.`,
    ],
  },
  {
    titulo: "2. Quais dados coletamos",
    paragrafos: [
      "Dados que você nos fornece voluntariamente pelo formulário de contato: nome, e-mail, telefone e o conteúdo da mensagem.",
      "Dados de navegação anônimos e agregados — páginas visitadas, origem da visita (por exemplo, um anúncio ou uma busca), tipo de dispositivo e cliques nos botões de contato — medidos pela ferramenta de estatística Umami, que não usa cookies e não identifica o visitante.",
    ],
  },
  {
    titulo: "3. Para que usamos seus dados",
    paragrafos: [
      "Para responder ao seu contato, agendar e organizar atendimentos, e melhorar a experiência do site. Não vendemos nem cedemos seus dados para fins de marketing de terceiros.",
    ],
  },
  {
    titulo: "4. Base legal (LGPD)",
    paragrafos: [
      "O tratamento ocorre com base no seu consentimento (ao enviar o formulário) e no legítimo interesse de responder a solicitações, nos termos da Lei nº 13.709/2018 (LGPD).",
    ],
  },
  {
    titulo: "5. Compartilhamento",
    paragrafos: [
      "Seus dados podem ser processados por serviços que viabilizam o funcionamento do site (por exemplo, o serviço de envio do formulário, o WhatsApp para agendamento e o Umami para estatísticas de visita). Esses parceiros tratam os dados apenas para a finalidade contratada e sob obrigações de segurança.",
    ],
  },
  {
    titulo: "6. Seus direitos",
    paragrafos: [
      "Você pode solicitar a qualquer momento a confirmação, o acesso, a correção, a portabilidade ou a exclusão dos seus dados, bem como revogar o consentimento. Para isso, fale com o responsável pelo canal informado acima.",
    ],
  },
  {
    titulo: "7. Cookies",
    paragrafos: [
      "Este site não usa cookies de rastreamento nem de publicidade: a medição de audiência (Umami) funciona sem cookies. Você pode gerenciar ou bloquear cookies nas configurações do seu navegador a qualquer momento.",
    ],
  },
  {
    titulo: "8. Segurança e retenção",
    paragrafos: [
      "Adotamos medidas razoáveis para proteger seus dados. As informações são mantidas apenas pelo tempo necessário às finalidades descritas ou conforme exigências legais.",
    ],
  },
  {
    titulo: "9. Aviso médico (CFM)",
    paragrafos: [site.disclaimerCFM],
  },
  {
    titulo: "10. Atualizações desta política",
    paragrafos: [
      "Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A versão vigente estará sempre disponível nesta página.",
    ],
  },
];

export function Privacidade() {
  return (
    <>
      <SEO
        title="Política de privacidade"
        description="Política de privacidade, LGPD e uso de cookies do site do Dr. Rafael Cordeiro."
      />

      {/* Hero (escuro) */}
      <section className="bg-[#33506E] pb-14 pt-4 sm:pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              Privacidade
            </span>
            <h1 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              Política de privacidade
            </h1>
            <p className="f-body mt-6 text-base leading-relaxed text-[#D2DEEE]">
              Como tratamos seus dados, em conformidade com a LGPD. Texto-modelo,
              a ser revisado pela assessoria jurídica antes da publicação.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Conteúdo (claro) */}
      <section className="sec-light py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-10">
            {secoes.map((s) => (
              <Reveal key={s.titulo}>
                <h2 className="f-display text-2xl font-semibold tracking-tight text-[#16263A] sm:text-3xl">
                  {s.titulo}
                </h2>
                {s.paragrafos.map((p, i) => (
                  <p key={i} className="f-body mt-3 text-base leading-relaxed text-[#52617A]">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
