import { Reveal } from "@/components/ui/Reveal";
import { RouteIcon, SparkIcon, ShieldCheckIcon } from "@/components/ui/icons";

const tecnologias = [
  {
    Icone: RouteIcon,
    titulo: "Neuronavegação",
    texto:
      "Posicionamento de implantes guiado por imagem, com precisão milimétrica e mínima agressão aos tecidos.",
  },
  {
    Icone: SparkIcon,
    titulo: "Cirurgia minimamente invasiva",
    texto:
      "Técnicas que preservam a musculatura, reduzem o tempo de internação e favorecem uma recuperação mais tranquila.",
  },
  {
    Icone: ShieldCheckIcon,
    titulo: "Monitorização intraoperatória",
    texto:
      "Acompanhamento das funções neurológicas durante o procedimento, somando uma camada extra de segurança.",
  },
];

/** §5 Tecnologias & equipamentos — claro (respiro). */
export function Tecnologias() {
  return (
    <section className="sec-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
            02 · Tecnologia
          </span>
          <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
            Precisão de ponta a ponta
          </h2>
          <p className="f-body mt-6 text-base leading-relaxed text-[#52617A]">
            Tecnologia a serviço de um único objetivo: tratar com mais segurança
            e o mínimo de impacto possível para você.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tecnologias.map((t, i) => (
            <Reveal key={t.titulo} delay={i * 90} className="card-light card-hover p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-[#EAF1FC] text-[#1565C0]">
                <t.Icone size={26} />
              </span>
              <h3 className="f-display mt-5 text-2xl font-semibold tracking-tight text-[#16263A]">
                {t.titulo}
              </h3>
              <p className="f-body mt-2 text-sm leading-relaxed text-[#52617A]">
                {t.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
