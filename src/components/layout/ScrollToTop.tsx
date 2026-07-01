import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Rola para o topo a cada mudança de rota (exceto navegação por âncora #). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
