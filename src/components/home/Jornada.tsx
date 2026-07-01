import { Reveal } from "@/components/ui/Reveal";
import {
  PhoneIcon,
  StethoscopeIcon,
  ShieldCheckIcon,
  RouteIcon,
  HeartPulseIcon,
} from "@/components/ui/icons";

const passos = [
  {
    Icone: PhoneIcon,
    titulo: "Primeiro contato",
    texto: "Você fala com a equipe pelo WhatsApp e agenda a avaliação no melhor horário.",
  },
  {
    Icone: StethoscopeIcon,
    titulo: "Avaliação",
    texto: "Consulta com escuta atenta, história clínica completa e exame físico cuidadoso.",
  },
  {
    Icone: ShieldCheckIcon,
    titulo: "Diagnóstico",
    texto: "Quando necessário, exames de imagem ajudam a confirmar a causa da dor.",
  },
  {
    Icone: RouteIcon,
    titulo: "Tratamento",
    texto: "Plano individualizado, do conservador ao cirúrgico, explicado com clareza.",
  },
  {
    Icone: HeartPulseIcon,
    titulo: "Acompanhamento",
    texto: "Retornos e orientações para acompanhar sua evolução ao longo do tempo.",
  },
];

/** §7 Jornada do paciente — passo a passo (claro). */
export function Jornada() {
  return (
    <section className="sec-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
            04 · Sua jornada
          </span>
          <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
            Do primeiro contato ao acompanhamento
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {passos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 80} className="relative">
              <div className="card-light card-hover h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-[#EAF1FC] text-[#1565C0]">
                    <p.Icone size={22} />
                  </span>
                  <span className="f-display text-4xl font-extrabold leading-none text-[#E2EAF5]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="f-display mt-5 text-xl font-semibold tracking-tight text-[#16263A]">
                  {p.titulo}
                </h3>
                <p className="f-body mt-2 text-sm leading-relaxed text-[#52617A]">
                  {p.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
