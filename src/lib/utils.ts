/**
 * cn — junta classes condicionalmente (clsx mínimo, sem dependência).
 *   cn("a", cond && "b", undefined, "c") => "a b c"
 */
export function cn(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}

/** Gera um slug amigável (usado depois para posts/condições). */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "") // remove acentos
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
