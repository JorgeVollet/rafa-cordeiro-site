import { Link } from "react-router-dom";
import { SEO } from "@/components/layout/SEO";
import { Reveal } from "@/components/ui/Reveal";
import { CtaIntermediario } from "@/components/home/CtaIntermediario";
import { condicoes, type Regiao } from "@/data/condicoes";
import { site, whatsappLink } from "@/data/site";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  StethoscopeIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  RouteIcon,
  SparkIcon,
} from "@/components/ui/icons";

const icones = [StethoscopeIcon, HeartPulseIcon, ShieldCheckIcon, RouteIcon, SparkIcon];

const grupos: { regiao: Regiao; titulo: string; descricao: string }[] = [
  {
    regiao: "lombar",
    titulo: "Coluna lombar",
    descricao: "Dores na parte baixa das costas e que irradiam para as pernas.",
  },
  {
    regiao: "cervical",
    titulo: "Coluna cervical",
    descricao: "Dores no pescoço e sintomas que irradiam para os braços.",
  },
  {
    regiao: "geral",
    titulo: "Coluna em geral",
    descricao: "Condições que podem afetar diferentes regiões da coluna.",
  },
];

export function Tratamentos() {
  return (
    <>
      <SEO
        title="Tratamentos e condições da coluna"
        description="Hérnia de disco, dor ciática, lombalgia, estenose e outras dores da coluna: entenda cada condição e quando procurar um especialista."
      />

      {/* Hero (escuro) */}
      <section className="bg-[#33506E] pb-16 pt-4 sm:pb-20">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              Tratamentos
            </span>
            <h1 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Dores que eu trato
            </h1>
            <p className="f-body mt-6 text-base leading-relaxed text-[#D2DEEE]">
              Escolha a dor mais parecida com a sua para entender o que pode estar
              acontecendo, como é feito o diagnóstico e quais são os caminhos de
              tratamento. O conteúdo é informativo e não substitui a consulta.
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

      {/* Condições por região (claro) */}
      <section className="sec-light py-20 sm:py-28">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <div className="space-y-16">
            {grupos.map((grupo) => {
              const lista = condicoes.filter((c) => c.regiao === grupo.regiao);
              if (!lista.length) return null;
              return (
                <div key={grupo.regiao}>
                  <Reveal>
                    <h2 className="f-display text-3xl font-extrabold tracking-tight text-[#16263A] sm:text-4xl">
                      {grupo.titulo}
                    </h2>
                    <p className="f-body mt-2 max-w-xl text-sm leading-relaxed text-[#52617A]">
                      {grupo.descricao}
                    </p>
                  </Reveal>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {lista.map((c, i) => {
                      const Icone = icones[i % icones.length];
                      return (
                        <Reveal key={c.slug} delay={(i % 3) * 70}>
                          <Link
                            to={`/tratamentos/${c.slug}`}
                            className="card-light card-hover group flex h-full flex-col p-7"
                          >
                            <span className="grid size-11 place-items-center rounded-lg bg-[#EAF1FC] text-[#1565C0]">
                              <Icone size={24} />
                            </span>
                            <h3 className="f-display mt-5 text-xl font-semibold leading-tight tracking-tight text-[#16263A]">
                              {c.nome}
                            </h3>
                            <p className="f-body mt-2 flex-1 text-sm leading-relaxed text-[#52617A]">
                              {c.resumo}
                            </p>
                            <span className="f-mono mt-5 inline-flex items-center gap-1.5 text-[0.7rem] text-[#1565C0]">
                              Saiba mais
                              <ArrowRightIcon
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                              />
                            </span>
                          </Link>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="f-body mt-14 text-xs leading-relaxed text-[#8A97AD]">
            {site.disclaimerCFM}
          </p>
        </div>
      </section>

      <CtaIntermediario />
    </>
  );
}
