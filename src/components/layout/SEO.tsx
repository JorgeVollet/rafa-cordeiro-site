import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { site } from "@/data/site";

interface SEOProps {
  /** Título da página (sem o nome do site — é anexado automaticamente). */
  title?: string;
  description?: string;
  /** Caminho canônico custom; por padrão usa a rota atual. */
  canonicalPath?: string;
  /** Imagem para Open Graph / Twitter (URL absoluta ou caminho em /public). */
  image?: string;
  /** "website" (padrão) ou "article". */
  type?: "website" | "article";
  /** Impede indexação (ex.: /admin). */
  noindex?: boolean;
  /** JSON-LD (Schema.org). Pode ser um objeto ou um array de objetos. */
  jsonLd?: object | object[];
  children?: ReactNode;
}

const SITE_NAME = `${site.nome} — ${site.especialidade}`;
const DEFAULT_DESC = site.descricaoCurta;
const DEFAULT_IMAGE = "/imagens/og-default.jpg";

export function SEO({
  title,
  description = DEFAULT_DESC,
  canonicalPath,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
  children,
}: SEOProps) {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = title ? `${title} | ${site.nome}` : SITE_NAME;
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD */}
      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {children}
    </Helmet>
  );
}
