import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";

/** §9 CTA intermediário — "procure o quanto antes". */
export function CtaIntermediario() {
  return (
    <section className="bg-[#33506E] py-20 sm:py-24">
      <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/15 px-8 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(120deg,#3C5E83 0%,#243C56 78%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
          >
            <iframe
              src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF"
              title="Animação de fundo (Spline)"
              loading="lazy"
              tabIndex={-1}
              className="h-full w-full border-0"
            />
          </div>
          <div
            aria-hidden="true"
            className="animate-float pointer-events-none absolute -right-10 -top-10 size-72 rounded-full bg-[#2979FF] opacity-20 blur-[90px]"
          />
          <div className="relative">
            <h2 className="f-display mx-auto max-w-2xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              Não conviva com a dor
              <br />
              mais tempo do que precisa.
            </h2>
            <p className="f-body mx-auto mt-5 max-w-xl text-[#D2DEEE]">
              Quanto antes a causa é investigada, mais opções de tratamento você tem.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary f-mono mt-9 inline-flex items-center gap-2 px-9 py-4 text-xs"
            >
              <WhatsAppIcon size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
