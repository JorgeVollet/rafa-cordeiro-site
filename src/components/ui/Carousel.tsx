import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

interface CarouselProps {
  children: ReactNode;
  /** Avança sozinho (pausa no hover/foco e respeita prefers-reduced-motion). */
  autoPlay?: boolean;
  /** Intervalo do autoplay em ms. */
  interval?: number;
  className?: string;
  ariaLabel?: string;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Carousel({
  children,
  autoPlay = false,
  interval = 6000,
  className,
  ariaLabel = "Carrossel",
}: CarouselProps) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);

  const go = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total],
  );
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || paused || total <= 1 || prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);
    return () => window.clearInterval(id);
  }, [autoPlay, paused, total, interval]);

  // Swipe (pointer)
  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
  }
  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
  }
  function onPointerUp() {
    if (dragStartX.current === null) return;
    const threshold = 50;
    if (dragDelta.current > threshold) prev();
    else if (dragDelta.current < -threshold) next();
    dragStartX.current = null;
    dragDelta.current = 0;
  }

  if (total === 0) return null;

  return (
    <div
      className={cn("relative", className)}
      role="group"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
      tabIndex={0}
    >
      {/* Trilho */}
      <div
        className="overflow-hidden rounded-2xl"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="flex transition-transform duration-500 ease-soft"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full shrink-0 px-0.5"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${total}`}
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          {/* Setas */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="grid size-11 place-items-center rounded-full border border-linha bg-white text-tinta-2 transition-colors hover:border-azul hover:text-azul-escuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul/40"
            >
              <ChevronLeftIcon size={20} />
            </button>

            {/* Pontos */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar slide">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir para o slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-6 bg-azul"
                      : "w-2 bg-linha hover:bg-azul-borda",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Próximo"
              className="grid size-11 place-items-center rounded-full border border-linha bg-white text-tinta-2 transition-colors hover:border-azul hover:text-azul-escuro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul/40"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
