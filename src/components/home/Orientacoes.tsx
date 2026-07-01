import { Reveal } from "@/components/ui/Reveal";

const itens = [
  "Exames de imagem recentes (ressonância, tomografia ou raio-X), se tiver.",
  "Laudos e relatórios de médicos que já consultou.",
  "Lista dos medicamentos que usa, com as doses.",
  "Documento com foto e carteirinha do convênio, se for o caso.",
  "Suas principais dúvidas anotadas, para não esquecer nada.",
  "Quando possível, vá acompanhado de alguém de confiança.",
];

function Check() {
  return (
    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#2979FF]/20 text-[#9FC1E0]">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** §13 Orientações para a consulta — o que levar (glass sobre azul-ferro). */
export function Orientacoes() {
  return (
    <section className="bg-[#33506E] py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              08 · Antes da consulta
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              O que levar
              <br />
              na sua consulta
            </h2>
            <p className="f-body mt-6 max-w-md text-base leading-relaxed text-[#CBD7E8]">
              Reunir essas informações ajuda a aproveitar melhor o tempo da
              avaliação e a chegar mais rápido a um bom diagnóstico.
            </p>
          </Reveal>

          <Reveal delay={90} className="glass p-8 sm:p-10">
            <ul className="space-y-5">
              {itens.map((t) => (
                <li key={t} className="flex gap-4">
                  <Check />
                  <span className="f-body text-sm leading-relaxed text-[#E2EAF5] sm:text-base">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
