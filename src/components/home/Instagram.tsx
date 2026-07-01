import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { InstagramIcon, ArrowRightIcon } from "@/components/ui/icons";

/**
 * §15 Instagram — PLACEHOLDER do feed (embed real entra quando houver conta/posts).
 * Por ora, uma grade de chamadas para seguir o perfil.
 */
export function Instagram() {
  return (
    <section className="bg-[#2C4763] py-20 sm:py-28">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              Instagram
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              Acompanhe o dia a dia
            </h2>
          </div>
          <a
            href={site.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary f-mono inline-flex items-center gap-2 px-6 py-3 text-[0.7rem]"
          >
            <InstagramIcon size={16} />
            {site.social.instagram.handle}
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 60}>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl border border-white/10"
                aria-label="Ver no Instagram"
              >
                <img
                  src="/imagens/hero-neural.jpg"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-0 grid place-items-center bg-[#16263f]/45 text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon size={24} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <a
          href={site.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline f-mono mt-8 inline-flex items-center gap-1.5 text-xs text-[#AFCBE8]"
        >
          Ver perfil completo
          <ArrowRightIcon size={14} />
        </a>
      </div>
    </section>
  );
}
