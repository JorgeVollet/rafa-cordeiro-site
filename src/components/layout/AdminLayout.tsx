import { Outlet, Link } from "react-router-dom";
import { SEO } from "@/components/layout/SEO";
import { site } from "@/data/site";

/**
 * Layout mínimo do painel administrativo (sem header/footer públicos).
 * O CRUD real (login Supabase + editor) entra na Fase 5.
 */
export function AdminLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-fundo-suave">
      {/* /admin nunca deve ser indexado */}
      <SEO title="Painel administrativo" noindex />

      <header className="border-b border-linha bg-white">
        <div className="container-x flex h-16 items-center justify-between">
          <span className="font-display text-base font-semibold text-tinta">
            {site.nome} <span className="text-tinta-2/60">· Painel</span>
          </span>
          <Link
            to="/"
            className="text-sm font-medium text-azul-escuro hover:underline"
          >
            Ver o site →
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
