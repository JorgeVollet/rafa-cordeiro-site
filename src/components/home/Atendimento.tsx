import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/data/site";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

/** §16 Atendimento / endereços — clínicas + mapa (placeholder até endereços reais). */
export function Atendimento() {
  return (
    <section id="atendimento" className="sec-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
            10 · Atendimento
          </span>
          <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
            Onde te atendo
          </h2>
          <p className="f-body mt-6 text-base leading-relaxed text-[#52617A]">
            {site.horarios}. {site.convenios}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Clínicas */}
          <div className="space-y-5">
            {site.clinicas.map((cl) => (
              <Reveal key={cl.nome} className="card-light p-7">
                <h3 className="f-display text-2xl font-semibold tracking-tight text-[#16263A]">
                  {cl.nome}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-[#52617A]">
                  <li className="flex gap-3">
                    <MapPinIcon size={18} className="mt-0.5 shrink-0 text-[#1565C0]" />
                    <span>
                      {cl.endereco}
                      {cl.bairro ? `, ${cl.bairro}` : ""} · {cl.cidade}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <PhoneIcon size={18} className="mt-0.5 shrink-0 text-[#1565C0]" />
                    <span>{cl.telefone}</span>
                  </li>
                  <li className="flex gap-3">
                    <ClockIcon size={18} className="mt-0.5 shrink-0 text-[#1565C0]" />
                    <span>{site.horarios}</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary f-mono inline-flex items-center gap-2 px-6 py-3 text-[0.7rem]"
                  >
                    <WhatsAppIcon size={16} />
                    Agendar
                  </a>
                  <a
                    href={cl.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="f-mono inline-flex items-center gap-2 rounded-md border border-[#D8E2F0] px-6 py-3 text-[0.7rem] uppercase tracking-[0.08em] text-[#1565C0] transition-colors hover:bg-[#EAF1FC]"
                  >
                    <MapPinIcon size={16} />
                    Ver no mapa
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mapa (placeholder) */}
          <Reveal delay={120}>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.75rem] border border-[#E6ECF5]">
              <img
                src="/imagens/hero-neural.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg,rgba(22,38,63,0.55),rgba(41,68,97,0.8))" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md">
                  <MapPinIcon size={26} className="text-white" />
                </span>
                <p className="f-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/85">
                  Mapa interativo · em breve
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
