import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

/** Artigo do blog — placeholder até os artigos serem publicados (noindex). */
export function Post() {
  return (
    <PagePlaceholder
      kicker="Blog"
      title="Artigo em breve"
      description="Este artigo está sendo preparado pelo Dr. Rafael. Enquanto isso, veja as condições que ele trata ou agende sua avaliação."
      seoTitle="Artigo em breve"
      noindex
    />
  );
}
