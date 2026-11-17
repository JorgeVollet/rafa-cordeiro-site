import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";

/**
 * Mesmo padrão de `SITE_URL` em src/data/site.ts. NUNCA usar rafaelcordeiro.com.br
 * (domínio de outra pessoa). Trocar aqui E lá quando o domínio do Rafa entrar,
 * ou definir VITE_SITE_URL na Vercel (os dois leem a variável).
 */
const SITE_URL_PADRAO = "https://rafa-cordeiro-site.vercel.app";

/** Data de hoje no fuso de Brasília (toISOString é UTC e pula o dia à noite). */
function hojeBrasilia(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(new Date());
}

/**
 * Gera sitemap.xml e robots.txt no build, a partir das rotas públicas e dos
 * slugs em src/data/condicoes.ts. Blog fica de fora (noindex) até ter artigos.
 */
function seoArquivos(siteUrl: string): Plugin {
  return {
    name: "seo-sitemap-robots",
    apply: "build",
    generateBundle() {
      const condicoes = readFileSync(
        fileURLToPath(new URL("./src/data/condicoes.ts", import.meta.url)),
        "utf8",
      );
      const slugs = [...condicoes.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
      const paginas: [string, string][] = [
        ["/", "1.0"],
        ["/tratamentos", "0.9"],
        ...slugs.map((s): [string, string] => [`/tratamentos/${s}`, "0.8"]),
        ["/sobre", "0.7"],
        ["/contato", "0.6"],
        ["/privacidade", "0.2"],
      ];
      const hoje = hojeBrasilia();
      const urls = paginas
        .map(
          ([p, prioridade]) =>
            `  <url>\n    <loc>${siteUrl}${p === "/" ? "/" : p}</loc>\n    <lastmod>${hoje}</lastmod>\n    <priority>${prioridade}</priority>\n  </url>`,
        )
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `# Site Dr. Rafael Cordeiro — Neurocirurgião\nUser-agent: *\nAllow: /\n\n# Painel administrativo não deve ser indexado\nDisallow: /admin\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  let siteUrl = SITE_URL_PADRAO;
  try {
    const host = env.VITE_SITE_URL ? new URL(env.VITE_SITE_URL).hostname.replace(/^www\./, "") : "";
    if (host && host !== "rafaelcordeiro.com.br") siteUrl = env.VITE_SITE_URL.replace(/\/+$/, "");
  } catch {
    /* valor inválido no .env: fica o padrão */
  }

  return {
    plugins: [react(), tailwindcss(), seoArquivos(siteUrl)],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
