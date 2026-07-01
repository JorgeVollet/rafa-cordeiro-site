import { useState, type FormEvent } from "react";
import { SEO } from "@/components/layout/SEO";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/data/site";
import {
  WhatsAppIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
} from "@/components/ui/icons";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

type Estado = "idle" | "enviando" | "ok" | "erro";

function ContatoForm() {
  const [estado, setEstado] = useState<Estado>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Sem ID configurado: não tenta enviar (evita erro silencioso em dev).
    if (!FORMSPREE_ID || FORMSPREE_ID === "xpzgabcd") {
      setEstado("erro");
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setEstado("ok");
        form.reset();
      } else {
        setEstado("erro");
      }
    } catch {
      setEstado("erro");
    }
  }

  if (estado === "ok") {
    return (
      <div className="card-light p-8 text-center sm:p-10">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#EAF1FC] text-[#1565C0]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="f-display mt-5 text-2xl font-semibold tracking-tight text-[#16263A]">
          Mensagem enviada!
        </h3>
        <p className="f-body mt-2 text-sm leading-relaxed text-[#52617A]">
          Recebemos seu contato e retornaremos em breve. Para algo urgente, fale
          pelo WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setEstado("idle")}
          className="f-mono mt-6 inline-flex items-center rounded-md border border-[#D8E2F0] px-6 py-3 text-[0.7rem] uppercase tracking-[0.08em] text-[#1565C0] transition-colors hover:bg-[#EAF1FC]"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const inputCls =
    "f-body w-full rounded-lg border border-[#D8E2F0] bg-white px-4 py-3 text-sm text-[#16263A] outline-none transition-colors placeholder:text-[#9AA7BC] focus:border-[#2979FF]";

  return (
    <form onSubmit={onSubmit} className="card-light p-7 sm:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="f-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#52617A]">
            Nome
          </span>
          <input name="nome" type="text" required autoComplete="name" className={`mt-2 ${inputCls}`} />
        </label>
        <label className="block">
          <span className="f-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#52617A]">
            Telefone
          </span>
          <input name="telefone" type="tel" autoComplete="tel" className={`mt-2 ${inputCls}`} />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="f-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#52617A]">
          E-mail
        </span>
        <input name="email" type="email" required autoComplete="email" className={`mt-2 ${inputCls}`} />
      </label>
      <label className="mt-4 block">
        <span className="f-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#52617A]">
          Mensagem
        </span>
        <textarea name="mensagem" rows={5} required className={`mt-2 resize-y ${inputCls}`} />
      </label>

      {estado === "erro" && (
        <p className="f-body mt-4 rounded-lg bg-[#FDECEC] px-4 py-3 text-sm text-[#B23B3B]">
          {!FORMSPREE_ID || FORMSPREE_ID === "xpzgabcd"
            ? "Formulário ainda não configurado (defina VITE_FORMSPREE_ID no .env). Enquanto isso, fale pelo WhatsApp."
            : "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp."}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="btn-primary f-mono mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-xs disabled:opacity-60 sm:w-auto"
      >
        {estado === "enviando" ? "Enviando..." : "Enviar mensagem"}
      </button>
      <p className="f-body mt-4 text-xs leading-relaxed text-[#8A97AD]">
        Ao enviar, você concorda com nossa{" "}
        <a href="/privacidade" className="text-[#1565C0] underline-offset-2 hover:underline">
          política de privacidade
        </a>
        . Não usamos seus dados para outros fins.
      </p>
    </form>
  );
}

export function Contato() {
  return (
    <>
      <SEO
        title="Contato e agendamento"
        description="Agende sua avaliação com o Dr. Rafael Cordeiro. Endereços, WhatsApp, horários e convênios."
      />

      {/* Hero (escuro) */}
      <section className="bg-[#33506E] pb-16 pt-4 sm:pb-20">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              Contato
            </span>
            <h1 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Vamos conversar
            </h1>
            <p className="f-body mt-6 text-base leading-relaxed text-[#D2DEEE]">
              Agende sua avaliação ou tire dúvidas. O caminho mais rápido é o
              WhatsApp; se preferir, deixe sua mensagem no formulário.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary f-mono inline-flex items-center gap-2 px-7 py-3.5 text-xs"
              >
                <WhatsAppIcon size={18} />
                Falar no WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="btn-ghost f-mono inline-flex items-center gap-2 px-7 py-3.5 text-xs"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Formulário + informações (claro) */}
      <section className="sec-light py-20 sm:py-24">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <h2 className="f-display text-3xl font-semibold tracking-tight text-[#16263A] sm:text-4xl">
                Envie uma mensagem
              </h2>
              <div className="mt-6">
                <ContatoForm />
              </div>
            </Reveal>

            <Reveal delay={90} className="space-y-4">
              <div className="card-light p-7">
                <h3 className="f-display text-xl font-semibold tracking-tight text-[#16263A]">
                  Horários
                </h3>
                <p className="f-body mt-3 flex gap-3 text-sm text-[#52617A]">
                  <ClockIcon size={18} className="mt-0.5 shrink-0 text-[#1565C0]" />
                  {site.horarios}
                </p>
              </div>
              <div className="card-light p-7">
                <h3 className="f-display text-xl font-semibold tracking-tight text-[#16263A]">
                  Convênios
                </h3>
                <p className="f-body mt-3 text-sm leading-relaxed text-[#52617A]">
                  {site.convenios}
                </p>
              </div>
              <div className="card-light p-7">
                <h3 className="f-display text-xl font-semibold tracking-tight text-[#16263A]">
                  Atendimento direto
                </h3>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary f-mono mt-4 inline-flex items-center gap-2 px-6 py-3 text-[0.7rem]"
                >
                  <WhatsAppIcon size={16} />
                  Agendar pelo WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clínicas + mapa (escuro) */}
      <section className="bg-[#2C4763] py-20 sm:py-28">
        <div className="mx-auto max-w-[1654px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="f-mono block text-xs uppercase tracking-[0.08em] text-[#AFCBE8]">
              Onde te atendo
            </span>
            <h2 className="f-display mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl">
              Endereços
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-5">
              {site.clinicas.map((cl) => (
                <Reveal key={cl.nome} className="glass p-7">
                  <h3 className="f-display text-2xl font-semibold tracking-tight text-white">
                    {cl.nome}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-[#CBD7E8]">
                    <li className="flex gap-3">
                      <MapPinIcon size={18} className="mt-0.5 shrink-0 text-[#AFCBE8]" />
                      <span>
                        {cl.endereco}
                        {cl.bairro ? `, ${cl.bairro}` : ""} · {cl.cidade}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <PhoneIcon size={18} className="mt-0.5 shrink-0 text-[#AFCBE8]" />
                      <span>{cl.telefone}</span>
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
                      className="btn-ghost f-mono inline-flex items-center gap-2 px-6 py-3 text-[0.7rem]"
                    >
                      <MapPinIcon size={16} />
                      Ver no mapa
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/15">
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
    </>
  );
}
