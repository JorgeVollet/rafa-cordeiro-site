import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * §12 Blog em destaque — PLACEHOLDER. Na Fase 5 estes cards vêm do Supabase
 * (últimas 3 matérias). Por ora, mocks para demonstrar o layout.
 */
const posts = [
  {
    slug: "hernia-de-disco-quando-operar",
    categoria: "Coluna",
    titulo: "Hérnia de disco: quando a cirurgia é mesmo necessária?",
    resumo:
      "A maioria dos casos melhora sem operar. Entenda os sinais que pesam na decisão.",
  },
  {
    slug: "dor-ciatica-o-que-fazer",
    categoria: "Dor",
    titulo: "Dor ciática: o que ela é e o que costuma ajudar",
    resumo:
      "Da causa aos primeiros cuidados, um guia direto para entender a dor que irradia pela perna.",
  },
  {
    slug: "postura-e-saude-da-coluna",
    categoria: "Prevenção",
    titulo: "Postura no dia a dia e a saúde da sua coluna",
    resumo:
      "Pequenos ajustes na rotina que fazem diferença para quem passa horas sentado.",
  },
];

export function BlogDestaque() {
  return (
    <section className="sec-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
              07 · Conteúdo
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
              Aprenda sobre sua coluna
            </h2>
          </div>
          <a
            href="/blog"
            className="link-underline f-mono inline-flex items-center gap-1.5 text-xs text-[#1565C0]"
          >
            Ver o blog
            <ArrowRightIcon size={14} />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <a
                href={`/blog/${p.slug}`}
                className="card-light card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/imagens/hero-neural.jpg"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="f-mono absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.08em] text-[#1565C0] backdrop-blur">
                    {p.categoria}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="f-display text-xl font-semibold leading-tight tracking-tight text-[#16263A]">
                    {p.titulo}
                  </h3>
                  <p className="f-body mt-2 flex-1 text-sm leading-relaxed text-[#52617A]">
                    {p.resumo}
                  </p>
                  <span className="f-mono mt-5 inline-flex items-center gap-1.5 text-[0.7rem] text-[#1565C0]">
                    Ler artigo
                    <ArrowRightIcon
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
