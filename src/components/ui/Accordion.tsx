import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/ui/icons";

export interface AccordionItemData {
  pergunta: ReactNode;
  resposta: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  /** Permite mais de um item aberto ao mesmo tempo. */
  allowMultiple?: boolean;
  /** Índice aberto por padrão (apenas no modo single). */
  defaultOpen?: number | null;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = null,
  className,
}: AccordionProps) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(defaultOpen != null ? [defaultOpen] : []),
  );

  function toggle(index: number) {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className={cn("divide-y divide-linha rounded-2xl border border-linha bg-white", className)}>
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const headerId = `${baseId}-h-${index}`;
        const panelId = `${baseId}-p-${index}`;
        return (
          <div key={index}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="font-semibold text-tinta">{item.pergunta}</span>
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full bg-azul-suave text-azul-escuro transition-transform duration-300 ease-soft",
                    isOpen && "rotate-180",
                  )}
                >
                  <ChevronDownIcon size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                "grid transition-all duration-300 ease-soft",
                isOpen ? "opacity-100" : "opacity-0",
              )}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 leading-relaxed text-tinta-2 sm:px-6">
                  {item.resposta}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
