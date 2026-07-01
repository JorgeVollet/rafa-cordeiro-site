import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

interface LogoProps {
  /** Esquema de cor: claro (header) ou sobre fundo escuro (footer). */
  tone?: "light" | "dark";
  className?: string;
}

/** Marca: símbolo de coluna estilizada + wordmark. */
export function Logo({ tone = "light", className }: LogoProps) {
  const isDark = tone === "dark";
  return (
    <Link
      to="/"
      aria-label={`${site.nome} — ${site.especialidade}, página inicial`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-xl shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5",
          isDark ? "bg-white/10 ring-1 ring-white/15" : "bg-azul",
        )}
      >
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <g
            stroke={isDark ? "#cfe0fb" : "#ffffff"}
            strokeWidth="5"
            strokeLinecap="round"
          >
            <path d="M32 13c-5 0-7 3-7 6s3 4 7 4 7 1 7 4-2 6-7 6-7 3-7 6 3 6 7 6" />
            <path d="M22 20h20M21.5 32h21M22 44h20" />
          </g>
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-tight",
            isDark ? "text-white" : "text-tinta",
          )}
        >
          {site.nome}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.7rem] font-medium uppercase tracking-[0.18em]",
            isDark ? "text-white/55" : "text-tinta-2/70",
          )}
        >
          {site.especialidade}
        </span>
      </span>
    </Link>
  );
}
