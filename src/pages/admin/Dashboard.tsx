import { Card } from "@/components/ui/Card";

export function Dashboard() {
  return (
    <div className="container-x py-12">
      <h1 className="text-2xl font-semibold text-tinta">Matérias</h1>
      <p className="mt-2 text-tinta-2">
        Listagem de posts (publicados e rascunhos), com criar/editar/excluir —
        em construção na Fase 5.
      </p>
      <Card className="mt-8" padding="lg">
        <p className="text-sm text-tinta-2">
          Aqui ficará a tabela de posts vinda do Supabase.
        </p>
      </Card>
    </div>
  );
}
