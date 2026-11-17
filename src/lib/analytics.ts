/**
 * Medição com Umami (sem cookie, sem banner de consentimento).
 *
 * Eventos — os NOMES são contrato com o relatório mensal, não renomear:
 *   whatsapp_click · telefone_click · email_click · instagram_click ·
 *   mapa_click · formulario_enviado
 * Todos levam `path` (página) e `source` (de onde veio o clique).
 *
 * Captura delegada no `document`: qualquer link novo de WhatsApp, telefone,
 * e-mail, Instagram ou mapa é rastreado sozinho. Para nomear a origem de um
 * elemento, use `data-analytics-source="..."` (ex.: "menu", "botao-flutuante").
 * Sem marcação, a origem é o id da seção → o título (h1/h2) da seção.
 *
 * UTMs dos anúncios (utm_source, utm_campaign...) o próprio Umami registra.
 */
import { site } from "@/data/site";

type Dados = Record<string, string | number>;

declare global {
  interface Window {
    umami?: { track: (evento: string, dados?: Dados) => void };
  }
}

/** Envia um evento (ignora em silêncio se o Umami não estiver carregado). */
export function track(evento: string, dados: Dados = {}): void {
  try {
    window.umami?.track(evento, { path: window.location.pathname, ...dados });
  } catch {
    /* medição nunca pode quebrar o site */
  }
}

function origemDoClique(el: Element): string {
  const marcado = el.closest("[data-analytics-source]");
  if (marcado) return marcado.getAttribute("data-analytics-source") || "desconhecido";
  if (el.closest("header")) return "menu";
  if (el.closest("footer")) return "rodape";
  const secao = el.closest("section");
  if (secao) {
    if (secao.id) return secao.id;
    const titulo = secao.querySelector("h1, h2")?.textContent?.trim();
    if (titulo) return titulo.slice(0, 60);
  }
  return "pagina";
}

function eventoDoLink(href: string): string | null {
  const h = href.toLowerCase();
  if (h.includes("wa.me") || h.includes("whatsapp.com")) return "whatsapp_click";
  if (h.startsWith("tel:")) return "telefone_click";
  if (h.startsWith("mailto:")) return "email_click";
  if (h.includes("instagram.com")) return "instagram_click";
  if (h.includes("google.com/maps") || h.includes("maps.app.goo.gl")) return "mapa_click";
  return null;
}

let iniciado = false;

/** Carrega o script do Umami e liga a captura de cliques. Chamar uma vez. */
export function initAnalytics(): void {
  if (iniciado || typeof document === "undefined") return;
  iniciado = true;

  const { websiteId, src, dominios } = site.umami;
  if (websiteId) {
    const s = document.createElement("script");
    s.defer = true;
    s.src = src;
    s.dataset.websiteId = websiteId;
    if (dominios) s.dataset.domains = dominios;
    document.head.appendChild(s);
  }

  document.addEventListener(
    "click",
    (e) => {
      const alvo = e.target as Element | null;
      const link = alvo?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const evento =
        link.getAttribute("data-analytics-event") || eventoDoLink(link.getAttribute("href") || "");
      if (!evento) return;
      track(evento, { source: origemDoClique(link) });
    },
    { capture: true },
  );
}
