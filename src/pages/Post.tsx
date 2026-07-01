import { useParams } from "react-router-dom";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export function Post() {
  const { slug } = useParams();

  return (
    <PagePlaceholder
      kicker="Blog"
      title="Artigo em breve"
      description={
        slug
          ? `O artigo “${slug}” será carregado do Supabase quando o blog estiver no ar.`
          : "Este artigo será carregado do Supabase quando o blog estiver no ar."
      }
      fase="Fase 5"
      seoTitle="Artigo"
    />
  );
}
