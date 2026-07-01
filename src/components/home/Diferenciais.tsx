import { Reveal } from "@/components/ui/Reveal";
import {
  ShieldCheckIcon,
  StethoscopeIcon,
  HeartPulseIcon,
} from "@/components/ui/icons";

const pilares = [
  {
    Icone: ShieldCheckIcon,
    titulo: "Diagnóstico preciso",
    texto:
      "Investigação cuidadosa, apoiada em tecnologia, para encontrar a verdadeira causa da dor antes de qualquer conduta.",
  },
  {
    Icone: StethoscopeIcon,
    titulo: "Minimamente invasivo",
    texto:
      "Do tratamento conservador ao cirúrgico de alta precisão, sempre com indicação criteriosa e individualizada.",
  },
  {
    Icone: HeartPulseIcon,
    titulo: "Cuidado próximo",
    texto:
      "Escuta atenta, linguagem clara e decisões tomadas junto com você, em cada etapa do tratamento.",
  },
];

/** §4 Diferenciais (3 pilares) — glass sobre azul-ferro. */
export function Diferenciais() {
  return (
    <section className="bg-[#2C4763] py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal>
          <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
            01 · Por que o Dr. Rafael
          </span>
          <h2 className="f-display mt-5 max-w-2xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
            Precisão com <span className="grad-brand">cuidado humano</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pilares.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 90} className="glass glass-hover p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-[#AFCBE8]">
                <p.Icone size={26} />
              </span>
              <h3 className="f-display mt-5 text-2xl font-semibold tracking-tight text-white">
                {p.titulo}
              </h3>
              <p className="f-body mt-2 text-sm leading-relaxed text-[#CBD7E8]">
                {p.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
