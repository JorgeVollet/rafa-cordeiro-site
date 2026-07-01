import { SEO } from "@/components/layout/SEO";
import { Reveal } from "@/components/ui/Reveal";
import { CtaIntermediario } from "@/components/home/CtaIntermediario";
import { site, whatsappLink } from "@/data/site";
import {
  WhatsAppIcon,
  ShieldCheckIcon,
  HeartPulseIcon,
  RouteIcon,
} from "@/components/ui/icons";

const focoIcones = [HeartPulseIcon, RouteIcon, ShieldCheckIcon];

export function Sobre() {
  return (
    <>
      <SEO
        title="Sobre o Dr. Rafael Cordeiro"
        description="Bio, formação, especializações e filosofia de cuidado do Dr. Rafael Cordeiro, neurocirurgião especialista em coluna."
      />

      {/* Intro (escuro — casa com o respiro do header) */}
      <section className="bg-[#33506E] pb-20 pt-4 sm:pb-28">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_34px_70px_-30px_rgba(0,0,0,0.6)]">
                  <img
                    src="/imagens/rafa-cirurgia.png"
                    alt="Dr. Rafael Cordeiro dos Santos em cirurgia de coluna"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
                <div className="glass absolute -bottom-4 -left-4 flex items-center gap-3 px-4 py-3">
                  <span className="grid size-9 place-items-center rounded-full bg-[#2979FF]/15 text-[#2979FF]">
                    <ShieldCheckIcon size={18} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold text-white">
                      {site.crm} · {site.rqe}
                    </span>
                    <span className="f-mono block text-[0.62rem] text-[#AFCBE8]">
                      registro profissional
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
                Sobre o Dr. Rafael
              </span>
              <h1 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Quem cuida da
                <br />
                sua coluna
              </h1>
              <p className="f-body mt-6 max-w-xl text-base leading-relaxed text-[#D2DEEE]">
                {site.bio.resumo}
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
        </div>
      </section>

      {/* Formação (claro) */}
      <section className="sec-light py-20 sm:py-28">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
                Formação & trajetória
              </span>
              <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
                Onde me formei
              </h2>
              <p className="f-body mt-6 max-w-md text-base leading-relaxed text-[#52617A]">
                Uma trajetória dedicada ao estudo do cérebro e da coluna, da
                graduação à atuação cirúrgica de alta complexidade.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <ol className="relative space-y-8 border-l-2 border-[#D8E2F0] pl-8">
                {site.bio.formacao.map((item) => (
                  <li key={item} className="relative">
                    <span className="absolute -left-[2.6rem] grid size-7 place-items-center rounded-full border-2 border-[#2979FF] bg-white">
                      <span className="size-2.5 rounded-full bg-[#2979FF]" />
                    </span>
                    <p className="f-body text-base leading-relaxed text-[#16263A]">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="f-mono mt-8 text-[0.62rem] uppercase tracking-[0.08em] text-[#8A97AD]">
                Títulos, sociedades e prêmios serão detalhados em breve.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Áreas de atuação + filosofia (escuro) */}
      <section className="bg-[#2C4763] py-20 sm:py-28">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              Áreas de atuação
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              No que me dedico
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {site.bio.focos.map((f, i) => {
              const Icone = focoIcones[i] ?? ShieldCheckIcon;
              return (
                <Reveal key={f.titulo} delay={i * 90} className="glass glass-hover p-7">
                  <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-[#AFCBE8]">
                    <Icone size={26} />
                  </span>
                  <h3 className="f-display mt-5 text-2xl font-semibold tracking-tight text-white">
                    {f.titulo}
                  </h3>
                  <p className="f-body mt-2 text-sm leading-relaxed text-[#CBD7E8]">
                    {f.texto}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <p className="f-serif mx-auto mt-14 max-w-3xl border-l-2 border-[#2979FF] pl-6 text-2xl italic leading-[1.45] text-white sm:text-[1.7rem]">
              “A maioria das dores na coluna melhora sem cirurgia. Meu trabalho
              começa por entender a causa e indicar, com você, o caminho certo.”
            </p>
          </Reveal>
        </div>
      </section>

      <CtaIntermediario />
    </>
  );
}
