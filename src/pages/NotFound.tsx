import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function NotFound() {
  return (
    <>
      <SEO title="Página não encontrada" noindex />
      <section className="bg-fundo-suave">
        <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <span className="font-display text-7xl font-semibold text-azul sm:text-8xl">
            404
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-tinta sm:text-3xl">
            Página não encontrada
          </h1>
          <p className="mt-3 max-w-md text-tinta-2">
            O endereço que você tentou acessar não existe ou foi movido.
          </p>
          <Button
            to="/"
            variant="primary"
            size="lg"
            className="mt-8"
            iconRight={<ArrowRightIcon size={18} />}
          >
            Voltar ao início
          </Button>
        </div>
      </section>
    </>
  );
}
