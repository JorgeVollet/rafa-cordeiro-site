import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon, ArrowRightIcon, ShieldCheckIcon } from "@/components/ui/icons";

const stats = [
  { v: "15+", l: "anos dedicados à coluna" },
  { v: "100%", l: "foco em coluna e dor" },
  { v: "Mínima", l: "técnica minimamente invasiva" },
  { v: `${site.crm}`, l: "registro profissional" },
];

/** §1 Hero + §2 Faixa de números (fundo neural em vídeo, full-bleed). */
export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <video
        src="/videos/videohero.mp4"
        poster="/imagens/hero-neural.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      {/* Escurece à esquerda para o texto; deixa o neural respirar à direita */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,20,36,0.95) 0%, rgba(9,20,36,0.82) 40%, rgba(12,26,46,0.5) 74%, rgba(12,26,46,0.3) 100%)",
        }}
      />
      {/* Funde a base do hero para um navy escuro (faixa de stats) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "linear-gradient(0deg, #16263f 0%, rgba(22,38,63,0) 24%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1654px] items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-36">
        <div>
          <span className="f-mono animate-fade-up block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
            Neurocirurgia da coluna
          </span>
          <h1
            style={{ animationDelay: "60ms" }}
            className="f-display animate-fade-up mt-5 text-6xl font-extrabold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Diagnóstico
            <br />
            <span className="grad-brand">preciso.</span>
          </h1>
          <p
            style={{ animationDelay: "140ms" }}
            className="f-body animate-fade-up mt-6 max-w-md text-base leading-relaxed text-[#D2DEEE]"
          >
            Avaliação e tratamento das dores da coluna, do conservador ao
            cirúrgico minimamente invasivo, com cuidado próximo em cada etapa.
          </p>
          <div
            style={{ animationDelay: "220ms" }}
            className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary f-mono inline-flex items-center justify-center gap-2 px-8 py-4 text-xs"
            >
              <WhatsAppIcon size={18} />
              Agendar avaliação
            </a>
            <a
              href="#sobre"
              className="btn-ghost f-mono group inline-flex items-center justify-center gap-2 px-8 py-4 text-xs"
            >
              Conheça o Dr. Rafael
              <ArrowRightIcon
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Caixa: Dr. Rafael recortado, com o fundo neural aparecendo por trás */}
        <div
          style={{ animationDelay: "180ms" }}
          className="animate-fade-up relative ml-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.08] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/5 backdrop-blur-[10px]">
            <img
              src="/imagens/dr-rafael-recorte.png"
              onError={(e) => {
                const t = e.currentTarget;
                if (!t.dataset.fb) {
                  t.dataset.fb = "1";
                  t.src = "/imagens/dr-rafael.png";
                }
              }}
              alt="Dr. Rafael Cordeiro dos Santos, neurocirurgião"
              loading="eager"
              className="absolute inset-0 h-full w-full translate-y-[30px] object-cover object-top"
            />
          </div>
          <div className="glass absolute -left-4 bottom-6 flex items-center gap-3 px-4 py-3">
            <span className="grid size-9 place-items-center rounded-full bg-[#2979FF]/15 text-[#2979FF]">
              <ShieldCheckIcon size={18} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-[#1565C0]">
                {site.crm} · {site.rqe}
              </span>
              <span className="f-mono block text-[0.62rem] text-[#2979FF]">
                registro profissional
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* §2 faixa de números */}
      <div className="relative z-10 mx-auto max-w-[1654px] px-5 pb-16 sm:px-8">
        <div className="grid grid-cols-2 gap-5 md:gap-7 lg:grid-cols-4 lg:gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className="glass glass-hover p-4 md:p-5">
              <div className="f-mono mb-1 text-[0.62rem] text-[#B6C7DF]">{s.l}</div>
              <div className="f-display text-xl font-extrabold tracking-tight text-white md:text-2xl">
                {s.v}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
