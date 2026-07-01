import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/Card";

export function EditorPost() {
  const { id } = useParams();

  return (
    <div className="container-x py-12">
      <h1 className="text-2xl font-semibold text-tinta">
        {id ? "Editar matéria" : "Nova matéria"}
      </h1>
      <p className="mt-2 text-tinta-2">
        Editor com título, slug automático, subtítulo, categoria, capa (upload →
        Storage), corpo e status — em construção na Fase 5.
      </p>
      <Card className="mt-8" padding="lg">
        <p className="text-sm text-tinta-2">
          Aqui ficará o formulário de edição com pré-visualização.
        </p>
      </Card>
    </div>
  );
}
