import { Reveal } from "@/components/ui/Reveal";
import { condicoesDestaque } from "@/data/condicoes";
import {
  ArrowRightIcon,
  StethoscopeIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  RouteIcon,
} from "@/components/ui/icons";

const condIcones = [StethoscopeIcon, HeartPulseIcon, ShieldCheckIcon, RouteIcon];

/** §6 Principais condições — cards (linkam para /tratamentos/:slug). */
export function Condicoes() {
  return (
    <section className="bg-[#33506E] py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              03 · Tratamentos
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              Você sente
              <br />
              alguma dessas dores?
            </h2>
          </div>
          <a
            href="/tratamentos"
            className="link-underline f-mono inline-flex items-center gap-1.5 text-xs text-[#AFCBE8]"
          >
            Ver todas
            <ArrowRightIcon size={14} />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {condicoesDestaque.map((c, i) => {
            const Icone = condIcones[i % condIcones.length];
            return (
              <Reveal key={c.slug} delay={(i % 3) * 80}>
                <a
                  href={`/tratamentos/${c.slug}`}
                  className="glass glass-hover group flex h-full flex-col p-7"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-white/10 text-[#AFCBE8]">
                    <Icone size={24} />
                  </span>
                  <h3 className="f-display mt-5 text-2xl font-semibold leading-tight tracking-tight text-white">
                    {c.nome}
                  </h3>
                  <p className="f-body mt-2 flex-1 text-sm leading-relaxed text-[#CBD7E8]">
                    {c.resumo}
                  </p>
                  <span className="f-mono mt-5 inline-flex items-center gap-1.5 text-[0.7rem] text-[#AFCBE8]">
                    Saiba mais
                    <ArrowRightIcon
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
