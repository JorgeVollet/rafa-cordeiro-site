import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/layout/SEO";
import { Reveal } from "@/components/ui/Reveal";
import { CtaIntermediario } from "@/components/home/CtaIntermediario";
import { getCondicao, type Regiao } from "@/data/condicoes";
import { getConteudoCondicao } from "@/data/condicoes-conteudo";
import { site, whatsappLink } from "@/data/site";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

const regiaoLabel: Record<Regiao, string> = {
  lombar: "Coluna lombar",
  cervical: "Coluna cervical",
  geral: "Coluna",
};

function CondicaoNaoEncontrada() {
  return (
    <section className="bg-[#33506E] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
          Tratamentos
        </span>
        <h1 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
          Condição não encontrada
        </h1>
        <p className="f-body mt-6 text-[#D2DEEE]">
          Esta página não existe ou foi movida. Veja a lista completa de dores e
          condições que atendo.
        </p>
        <Link
          to="/tratamentos"
          className="btn-primary f-mono mt-8 inline-flex items-center gap-2 px-8 py-4 text-xs"
        >
          Ver todos os tratamentos
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </section>
  );
}

function Bloco({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <Reveal as="section" className="border-t border-[#E6ECF5] pt-10">
      <h2 className="f-display text-3xl font-extrabold tracking-tight text-[#16263A] sm:text-4xl">
        {titulo}
      </h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-3">
      {itens.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2979FF]" />
          <span className="f-body text-base leading-relaxed text-[#3C4A60]">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Condicao() {
  const { slug } = useParams();
  const condicao = slug ? getCondicao(slug) : undefined;
  const conteudo = slug ? getConteudoCondicao(slug) : undefined;

  if (!condicao) {
    return (
      <>
        <SEO title="Condição não encontrada" noindex />
        <CondicaoNaoEncontrada />
      </>
    );
  }

  const url = `${site.url}/tratamentos/${condicao.slug}`;

  // JSON-LD: página médica + condição + FAQ (rich snippet).
  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: condicao.nome,
      description: condicao.resumo,
      url,
      inLanguage: "pt-BR",
      about: { "@type": "MedicalCondition", name: condicao.nome },
      author: {
        "@type": "Physician",
        name: site.nome,
        medicalSpecialty: "Neurosurgery",
      },
    },
  ];
  if (conteudo?.faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: conteudo.faq.map((f) => ({
        "@type": "Question",
        name: f.pergunta,
        acceptedAnswer: { "@type": "Answer", text: f.resposta },
      })),
    });
  }

  return (
    <>
      <SEO
        title={condicao.nome}
        description={condicao.resumo}
        jsonLd={jsonLd}
      />

      {/* Hero (escuro) */}
      <section className="bg-[#33506E] pb-16 pt-4 sm:pb-20">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <nav className="f-mono flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.08em] text-[#AFCBE8]">
              <Link to="/tratamentos" className="transition-colors hover:text-white">
                Tratamentos
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/70">{regiaoLabel[condicao.regiao]}</span>
            </nav>
            <h1 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {condicao.nome}
            </h1>
            <p className="f-body mt-6 text-lg leading-relaxed text-[#D2DEEE]">
              {conteudo?.intro ?? condicao.resumo}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary f-mono mt-8 inline-flex items-center gap-2 px-8 py-4 text-xs"
            >
              <WhatsAppIcon size={18} />
              Agendar avaliação
            </a>
          </Reveal>
        </div>
      </section>

      {/* Conteúdo (claro) */}
      <section className="sec-light py-20 sm:py-24">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
            {/* Coluna principal */}
            <div className="max-w-3xl">
              {conteudo ? (
                <div className="space-y-10">
                  <Reveal as="section">
                    <h2 className="f-display text-3xl font-extrabold tracking-tight text-[#16263A] sm:text-4xl">
                      O que é
                    </h2>
                    <p className="f-body mt-5 text-base leading-relaxed text-[#3C4A60]">
                      {conteudo.oQue}
                    </p>
                  </Reveal>

                  <Bloco titulo="Sintomas">
                    <Lista itens={conteudo.sintomas} />
                  </Bloco>

                  <Bloco titulo="Causas e fatores de risco">
                    <Lista itens={conteudo.causas} />
                  </Bloco>

                  <Bloco titulo="Como é feito o diagnóstico">
                    <p className="f-body text-base leading-relaxed text-[#3C4A60]">
                      {conteudo.diagnostico}
                    </p>
                  </Bloco>

                  <Bloco titulo="Tratamentos">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="card-light p-6">
                        <h3 className="f-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#1565C0]">
                          Sem cirurgia (conservador)
                        </h3>
                        <div className="mt-4">
                          <Lista itens={conteudo.tratamento.conservador} />
                        </div>
                      </div>
                      <div className="card-light p-6">
                        <h3 className="f-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#1565C0]">
                          Tratamento cirúrgico
                        </h3>
                        <p className="f-body mt-4 text-sm leading-relaxed text-[#3C4A60]">
                          {conteudo.tratamento.cirurgico}
                        </p>
                      </div>
                    </div>
                  </Bloco>

                  <Bloco titulo="Quando procurar um especialista">
                    <div className="rounded-2xl border border-[#FED7AA] bg-[#FFF7ED] p-6">
                      <div className="flex items-center gap-2 text-[#9A3412]">
                        <ShieldCheckIcon size={18} />
                        <span className="f-mono text-[0.7rem] uppercase tracking-[0.08em]">
                          Sinais de alerta
                        </span>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {conteudo.quandoProcurar.map((t) => (
                          <li key={t} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#EA8A4B]" />
                            <span className="f-body text-base leading-relaxed text-[#7C3A12]">
                              {t}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Bloco>
                </div>
              ) : (
                <p className="f-body text-base leading-relaxed text-[#3C4A60]">
                  {condicao.resumo}
                </p>
              )}

              <p className="f-body mt-12 border-t border-[#E6ECF5] pt-8 text-xs leading-relaxed text-[#8A97AD]">
                {site.disclaimerCFM}
              </p>
            </div>

            {/* Sidebar CTA (sticky) */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="card-light p-7">
                <h3 className="f-display text-2xl font-semibold tracking-tight text-[#16263A]">
                  Está com essa dor?
                </h3>
                <p className="f-body mt-2 text-sm leading-relaxed text-[#52617A]">
                  Uma avaliação criteriosa é o primeiro passo para encontrar a
                  causa e o melhor caminho de tratamento.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary f-mono mt-5 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-xs"
                >
                  <WhatsAppIcon size={16} />
                  Agendar pelo WhatsApp
                </a>
                <p className="f-mono mt-4 text-[0.62rem] uppercase tracking-[0.08em] text-[#8A97AD]">
                  {site.crm} · {site.rqe}
                </p>
              </div>

              <Link
                to="/tratamentos"
                className="link-underline f-mono mt-6 inline-flex items-center gap-1.5 text-xs text-[#1565C0]"
              >
                Ver todas as condições
                <ArrowRightIcon size={14} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ (escuro) */}
      {conteudo?.faq?.length ? (
        <section className="bg-[#2C4763] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
                Dúvidas frequentes
              </span>
              <h2 className="f-display mt-5 text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-5xl">
                Perguntas sobre {condicao.nome.toLowerCase()}
              </h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {conteudo.faq.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <details className="glass group overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-6">
                      <span className="f-body text-base font-medium text-white sm:text-lg">
                        {item.pergunta}
                      </span>
                      <span className="faq-ico shrink-0 text-[#AFCBE8] transition-transform duration-300">
                        <ChevronDownIcon size={22} />
                      </span>
                    </summary>
                    <div className="border-t border-white/10 px-6 pb-6 pt-4">
                      <p className="f-body text-sm leading-relaxed text-[#CBD7E8]">
                        {item.resposta}
                      </p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaIntermediario />
    </>
  );
}
