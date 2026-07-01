import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso do stagger em ms. */
  delay?: number;
  /** Distância inicial em px (default 22). */
  y?: number;
  className?: string;
  as?: "div" | "li" | "section";
}

/**
 * Revela o conteúdo ao entrar na viewport (IntersectionObserver — sem listener de scroll).
 * Robustez: o que já está visível aparece na hora; um timer de segurança garante que
 * nada fique invisível mesmo se o observer não disparar. Sob prefers-reduced-motion,
 * a regra global zera a duração e o conteúdo aparece direto.
 */
export function Reveal({ children, delay = 0, y = 22, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => setShown(true);

    // Já visível na carga? Revela imediatamente.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (el.getBoundingClientRect().top < vh * 0.92) {
      reveal();
      return;
    }
    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal();
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    // Rede de segurança: nunca deixar conteúdo invisível.
    const timer = window.setTimeout(() => {
      reveal();
      io.disconnect();
    }, 1800);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : `translateY(${y}px)`,
    transition: `opacity .8s var(--ease-soft) ${delay}ms, transform .8s var(--ease-soft) ${delay}ms`,
    willChange: "opacity, transform",
  };

  const Tag = as;
  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}
