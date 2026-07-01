import { Reveal } from "@/components/ui/Reveal";
import { faqGeral } from "@/data/faq";
import { ChevronDownIcon } from "@/components/ui/icons";

/** §14 FAQ geral — acordeão nativo <details> (gera rich snippet). */
export function Faq() {
  return (
    <section className="sec-light py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#1565C0]">
            09 · Dúvidas frequentes
          </span>
          <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#16263A] sm:text-6xl">
            Perguntas comuns
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqGeral.slice(0, 6).map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <details className="card-light group overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6">
                  <span className="f-body text-base font-medium text-[#16263A] sm:text-lg">
                    {item.pergunta}
                  </span>
                  <span className="faq-ico shrink-0 text-[#1565C0] transition-transform duration-300">
                    <ChevronDownIcon size={22} />
                  </span>
                </summary>
                <div className="border-t border-[#E6ECF5] px-6 pb-6 pt-4">
                  <p className="f-body text-sm leading-relaxed text-[#52617A]">
                    {item.resposta}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
