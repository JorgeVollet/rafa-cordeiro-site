import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";

const navItens = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Tratamentos", to: "/tratamentos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
];

/** Vidro do pill de navegação (gradiente padding-box + border-box). */
const pill: CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(82,114,152,0.55), rgba(82,114,152,0.32)) padding-box, linear-gradient(120deg, rgba(255,255,255,0.55), rgba(159,193,224,0.2)) border-box",
  border: "1px solid transparent",
  backdropFilter: "blur(18px) saturate(125%)",
  WebkitBackdropFilter: "blur(18px) saturate(125%)",
  boxShadow:
    "0 14px 36px rgba(8,18,34,0.35), inset 0 1px 0 rgba(255,255,255,0.14)",
};

/**
 * Header flutuante de 3 ilhas: logo (esq) · pill de navegação (centro) ·
 * botão Agendar (dir). Fixo no topo, alinhado à largura-mãe do site (1654px).
 *
 * Logo e Agendar só aparecem enquanto a HERO (ou a 1ª seção, nas páginas
 * internas) está visível — ao rolar para fora, somem e fica só o pill central;
 * reaparecem ao voltar para o topo. (A logo tem resíduo acinzentado que fica
 * feio sobre as seções claras.)
 */
export function Header() {
  const location = useLocation();
  const [brandVisible, setBrandVisible] = useState(true);

  useEffect(() => {
    const target =
      document.getElementById("hero") ?? document.querySelector("main section");
    if (!target) {
      setBrandVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setBrandVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [location.pathname]);

  const brandState = brandVisible
    ? "translate-y-0 opacity-100"
    : "pointer-events-none -translate-y-2 opacity-0";

  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <div className="relative mx-auto flex max-w-[1654px] items-center justify-between px-5 py-3 sm:px-8">
        {/* LOGO — canto esquerdo (some ao sair da hero) */}
        <Link
          to="/"
          aria-label="Dr. Rafael Cordeiro dos Santos, neurocirurgião"
          className={`relative z-10 inline-block leading-none transition-all duration-500 ease-out hover:opacity-90 ${brandState}`}
        >
          <img
            src="/imagens/logo.png"
            alt="Dr. Rafael Cordeiro dos Santos, neurocirurgião"
            className="block h-[89px] w-auto drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] sm:h-[105px]"
          />
        </Link>

        {/* NAV — pill flutuante no centro (sempre visível) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-0.5 rounded-full p-1.5" style={pill}>
            {navItens.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="f-mono block rounded-full px-4 py-2 text-[11px] text-[#E4EDF8] transition-colors duration-300 hover:bg-white/15 hover:text-white"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* AGENDAR — fora, à direita (some ao sair da hero) */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative z-10 inline-flex items-center gap-2 rounded-full bg-[#2979FF] px-5 py-2.5 f-mono text-[11px] text-white shadow-[0_12px_28px_-8px_rgba(41,121,255,0.65)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#1f63d8] ${brandState}`}
        >
          <WhatsAppIcon size={15} />
          Agendar
        </a>
      </div>
    </header>
  );
}
