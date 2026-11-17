import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

/**
 * Blog — enquanto os primeiros artigos não são publicados (aguardando a
 * revisão do Dr. Rafael), a página fica fora do Google (noindex) e convida
 * para os tratamentos, que já têm conteúdo completo.
 */
export function Blog() {
  return (
    <PagePlaceholder
      kicker="Blog"
      title="Conteúdo que cuida"
      description="Artigos educativos sobre coluna, dor e qualidade de vida, escritos pelo Dr. Rafael. Os primeiros estão a caminho — enquanto isso, conheça as condições que ele trata."
      seoTitle="Blog — saúde da coluna"
      seoDescription="Artigos educativos sobre hérnia de disco, dor nas costas, prevenção e tratamentos da coluna."
      noindex
    />
  );
}
