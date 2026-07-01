import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { ArrowRightIcon } from "@/components/ui/icons";

/** §3 Boas-vindas / mini-bio — apresentação em 1ª pessoa + link para /sobre. */
export function BoasVindas() {
  return (
    <section id="sobre" className="sec-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Foto */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-[1.75rem] border border-[#E6ECF5] shadow-[0_34px_64px_-32px_rgba(22,38,58,0.35)]">
                <img
                  src="/imagens/rafa-cirurgia.png"
                  alt="Dr. Rafael Cordeiro dos Santos em cirurgia de coluna"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-3 rounded-2xl border border-[#E6ECF5] bg-white px-4 py-3 shadow-[0_18px_40px_-22px_rgba(22,38,58,0.35)]">
                <p className="f-mono text-[0.6rem] uppercase tracking-[0.08em] text-[#7E8CA0]">
                  Registro
                </p>
                <p className="text-sm font-semibold text-[#16263A]">
                  {site.crm} · {site.rqe}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={90}>
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
              Boas-vindas
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
              Prazer, sou o Dr. Rafael
            </h2>
            <p className="f-body mt-6 max-w-xl text-base leading-relaxed text-[#52617A]">
              {site.bio.resumo}
            </p>
            <p className="f-serif mt-6 max-w-xl border-l-2 border-[#2979FF] pl-5 text-lg italic leading-relaxed text-[#16263A]">
              “A maioria das dores na coluna melhora sem cirurgia. Meu trabalho
              começa por entender a causa e indicar, com você, o caminho certo.”
            </p>
            <a
              href="/sobre"
              className="link-underline f-mono mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#1565C0]"
            >
              Conheça minha trajetória
              <ArrowRightIcon size={15} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
