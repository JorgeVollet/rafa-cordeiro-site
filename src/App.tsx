import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

/** Shell do site público: header flutuante + conteúdo + footer + WhatsApp flutuante. */
export function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/**
 * Layout das páginas internas: como o header é flutuante (fixed), o conteúdo
 * precisa de um respiro no topo para não passar por baixo dele. A Home não usa
 * este wrapper porque o hero é full-bleed (vídeo passa atrás do header).
 */
export function InnerPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <Outlet />
    </div>
  );
}
