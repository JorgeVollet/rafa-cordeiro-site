import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Botão flutuante de WhatsApp, presente em todas as páginas. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  // Entrada suave logo após o carregamento
  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className={cn(
        "group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-verde py-3 pl-3 pr-4 text-white shadow-float transition-all duration-500 ease-soft hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verde/50 focus-visible:ring-offset-2 sm:bottom-7 sm:right-7",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
    >
      {/* Anel pulsante */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 -z-10 size-11 rounded-full bg-verde motion-safe:animate-[ping-ring_2.4s_var(--ease-soft)_infinite]"
      />
      <span className="grid size-11 place-items-center rounded-full bg-white/15">
        <WhatsAppIcon size={26} />
      </span>
      <span className="hidden text-sm font-semibold leading-tight sm:block">
        Agende sua
        <br />
        avaliação
      </span>

      <span className="sr-only">Abrir conversa no WhatsApp com {site.nome}</span>
    </a>
  );
}
