import { Reveal } from "@/components/ui/Reveal";
import { StethoscopeIcon, RouteIcon, ClockIcon } from "@/components/ui/icons";

const itens = [
  {
    Icone: StethoscopeIcon,
    titulo: "Exame físico detalhado",
    texto:
      "A consulta começa por entender sua história e examinar com calma. O exame de imagem complementa — nunca substitui — essa avaliação.",
  },
  {
    Icone: RouteIcon,
    titulo: "Tratamento individualizado",
    texto:
      "Cada coluna é única. A conduta é definida para o seu caso, priorizando as opções menos invasivas sempre que possível.",
  },
  {
    Icone: ClockIcon,
    titulo: "Tempo dedicado a você",
    texto:
      "Espaço para tirar dúvidas e entender cada etapa. Decisões são tomadas em conjunto, com informação clara.",
  },
];

/** §8 Como funciona a consulta — glass sobre azul-ferro. */
export function ComoFunciona() {
  return (
    <section className="bg-[#2C4763] py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              05 · A consulta
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              Como funciona o atendimento
            </h2>
            <p className="f-body mt-6 max-w-md text-base leading-relaxed text-[#CBD7E8]">
              Uma consulta sem pressa, em que o diagnóstico vem antes da conduta e
              você entende cada decisão.
            </p>
          </Reveal>

          <div className="space-y-4">
            {itens.map((it, i) => (
              <Reveal key={it.titulo} delay={i * 90} className="glass glass-hover flex gap-5 p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-[#AFCBE8]">
                  <it.Icone size={24} />
                </span>
                <div>
                  <h3 className="f-display text-xl font-semibold tracking-tight text-white">
                    {it.titulo}
                  </h3>
                  <p className="f-body mt-1.5 text-sm leading-relaxed text-[#CBD7E8]">
                    {it.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
