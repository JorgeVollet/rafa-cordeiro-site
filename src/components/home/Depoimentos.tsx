import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";

/** Velocidade do marquee — número MAIOR = mais lento (padrão do componente é 40s). */
const velocidade = { "--duration": "60s" } as CSSProperties;

/** Prints reais de feedback do Instagram (otimizados em public/imagens/feedbacks/). */
const feedbacks = Array.from(
  { length: 24 },
  (_, i) => `/imagens/feedbacks/feedback-${i + 1}.webp`,
);
const linha1 = feedbacks.slice(0, 12);
const linha2 = feedbacks.slice(12);

function FeedbackCard({ src }: { src: string }) {
  return (
    <div className="relative aspect-video w-[17rem] shrink-0 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-[0_18px_40px_-20px_rgba(8,18,34,0.6)] sm:w-[21rem]">
      <img
        src={src}
        alt="Depoimento de paciente publicado no Instagram"
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/** §11 Depoimentos — marquee de prints reais (CFM: autorizados, sem promessa). */
export function Depoimentos() {
  return (
    <section className="overflow-hidden bg-[#2C4763] py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
            06 · Histórias
          </span>
          <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
            Quem foi atendido conta
          </h2>
          <p className="f-body mt-6 text-base leading-relaxed text-[#CBD7E8]">
            Mensagens reais de pacientes, compartilhadas no Instagram com autorização.
          </p>
        </Reveal>
      </div>

      {/* Duas fileiras em direções opostas (passe o mouse para pausar). */}
      <div className="relative mt-12">
        <Marquee pauseOnHover style={velocidade}>
          {linha1.map((src) => (
            <FeedbackCard key={src} src={src} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="mt-4" style={velocidade}>
          {linha2.map((src) => (
            <FeedbackCard key={src} src={src} />
          ))}
        </Marquee>

        {/* Fades nas bordas, na cor da seção */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#2C4763] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#2C4763] to-transparent sm:w-28" />
      </div>

      <div className="mx-auto mt-10 max-w-[1654px] px-5 sm:px-8">
        <p className="f-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#7E93B2]">
          Depoimentos publicados com autorização, sem promessa de resultado.
        </p>
      </div>
    </section>
  );
}
