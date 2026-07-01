import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";

const mono: CSSProperties = { fontFamily: '"JetBrains Mono", monospace' };

const navItens = [
  { label: "Sobre", to: "/sobre" },
  { label: "Tratamentos", to: "/tratamentos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
  { label: "Privacidade", to: "/privacidade" },
];

/** Marca compacta (símbolo + nome) usada no rodapé. */
function Marca() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#2979FF] transition-transform duration-300 group-hover:-translate-y-0.5">
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <g stroke="#fff" strokeWidth="5" strokeLinecap="round">
            <path d="M32 13c-5 0-7 3-7 6s3 4 7 4 7 1 7 4-2 6-7 6-7 3-7 6 3 6 7 6" />
            <path d="M22 20h20M21.5 32h21M22 44h20" />
          </g>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="f-serif text-[1.4rem] font-semibold tracking-wide text-white">
          Dr. Rafael Cordeiro
        </span>
        <span className="f-mono mt-1 text-[0.58rem] text-[#B6C7DF]">
          Neurocirurgião
        </span>
      </span>
    </Link>
  );
}

/** Rodapé (azul-ferro profundo) com disclaimer CFM. */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#294461]">
      <div className="mx-auto max-w-[1654px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Marca />
            <p className="f-body mt-5 max-w-xs text-sm leading-relaxed text-[#A6B6CE]">
              {site.descricaoCurta}
            </p>
          </div>
          <nav>
            <h4 className="f-mono text-xs text-white">Navegação</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#C2D2E8]">
              {navItens.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4 className="f-mono text-xs text-white">Atendimento</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#C2D2E8]">
              {site.clinicas.map((cl) => (
                <li key={cl.nome}>
                  <span className="block font-medium text-white">{cl.nome}</span>
                  {cl.cidade}
                </li>
              ))}
              <li>{site.horarios}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6">
          <p style={mono} className="text-[0.68rem] leading-relaxed text-[#9AAAC4]">
            {site.disclaimerCFM} Responsável técnico: {site.nome} · {site.crm} ·{" "}
            {site.rqe}.
          </p>
        </div>
      </div>
    </footer>
  );
}
