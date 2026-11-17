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

/** Logo oficial do Dr. Rafael no rodapé (fundo escuro esconde o resíduo do PNG). */
function Marca() {
  return (
    <Link
      to="/"
      aria-label="Dr. Rafael Cordeiro dos Santos, neurocirurgião — página inicial"
      className="inline-block transition-opacity duration-300 hover:opacity-90"
    >
      <img
        src="/imagens/logo.png"
        alt="Dr. Rafael Cordeiro dos Santos, neurocirurgião"
        width={720}
        height={359}
        loading="lazy"
        className="block h-auto w-[220px] sm:w-[250px]"
      />
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
