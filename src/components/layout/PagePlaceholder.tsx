import type { ReactNode } from "react";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/icons";

interface PagePlaceholderProps {
  /** Rótulo pequeno acima do título. */
  kicker: string;
  title: string;
  description: string;
  /** SEO da página. */
  seoTitle: string;
  seoDescription?: string;
  /** Página ainda sem conteúdo próprio: fora do Google até ter conteúdo. */
  noindex?: boolean;
  /** Conteúdo extra opcional. */
  children?: ReactNode;
}

/**
 * Esqueleto consistente para as páginas que serão preenchidas nas próximas fases.
 * Mantém SEO, layout e CTA já funcionando — nada de "página quebrada".
 */
export function PagePlaceholder({
  kicker,
  title,
  description,
  seoTitle,
  seoDescription,
  noindex = false,
  children,
}: PagePlaceholderProps) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription ?? description} noindex={noindex} />

      <section className="relative overflow-hidden">
        {/* Fundo suave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-fundo-suave"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-azul-suave blur-3xl"
        />

        <div className="container-x py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-linha bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-azul-escuro shadow-soft">
              {kicker}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-tinta sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-tinta-2">
              {description}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                iconLeft={<WhatsAppIcon size={20} />}
              >
                Agendar avaliação
              </Button>
              <Button
                to="/tratamentos"
                variant="outline"
                size="lg"
                iconRight={<ArrowRightIcon size={18} />}
              >
                Ver tratamentos
              </Button>
            </div>
          </div>

          {children && <div className="mx-auto mt-12 max-w-4xl">{children}</div>}
        </div>
      </section>
    </>
  );
}
