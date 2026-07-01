import { useEffect, useState } from "react";

/**
 * Fundo animado do UnicornStudio (WebGL) como overlay.
 * Carrega a lib (UMD via CDN) uma única vez e inicializa as cenas presentes.
 * Respeita prefers-reduced-motion (não anima para quem pediu menos movimento).
 *
 * Dependência externa: o script e o projeto carregam dos servidores do UnicornStudio.
 * Para produção, considerar self-host do script (Fase 6).
 */
const SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

type Scene = { destroy?: () => void };
type UnicornGlobal = { init?: () => Promise<Scene[]> | void; isInitialized?: boolean };

declare global {
  interface Window {
    UnicornStudio?: UnicornGlobal;
  }
}

let scriptPromise: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (window.UnicornStudio?.init) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.setAttribute("data-unicorn-loader", "true");
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("UnicornStudio: falha ao carregar o script"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

interface UnicornBackgroundProps {
  /** ID do projeto no UnicornStudio (data-us-project). */
  projectId: string;
  /** Classe do wrapper (use para posicionar/blendar o overlay). */
  className?: string;
}

export function UnicornBackground({ projectId, className }: UnicornBackgroundProps) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    let cancelled = false;
    let scenes: Scene[] | undefined;

    loadScript()
      .then(() => {
        if (cancelled) return undefined;
        const r = window.UnicornStudio?.init?.();
        return r instanceof Promise ? r : undefined;
      })
      .then((s) => {
        if (!cancelled) scenes = s ?? undefined;
      })
      .catch(() => {
        /* offline / bloqueado: simplesmente não exibe o efeito */
      });

    return () => {
      cancelled = true;
      scenes?.forEach((sc) => sc.destroy?.());
    };
  }, []);

  if (reduced) return null;

  return (
    <div className={className} aria-hidden="true">
      <div
        data-us-project={projectId}
        data-us-dpi="1.5"
        data-us-fps="60"
        data-us-lazyload="true"
        data-us-production="true"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
