/**
 * Limpieza ligera del contenido verbatim de los artículos para mostrarlo:
 * - quita la cabecera inicial si duplica el título de la página,
 * - elimina la cabecera colgante "Resuelve tus dudas en 1 minuto" (sus vídeos
 *   de Instagram no se importan),
 * - descarta el párrafo combinado de derechos duplicado en Términos (artefacto
 *   del CMS: el mismo texto aparece como párrafo y como lista).
 */
export function cleanArticle(md: string, opts: { stripTitle?: boolean } = {}): string {
  let blocks = md.split("\n\n");
  if (opts.stripTitle && blocks[0]?.startsWith("#")) blocks = blocks.slice(1);
  blocks = blocks.filter((b) => !/Resuelve tus dudas en 1 minuto/i.test(b));
  blocks = blocks.filter((b) => !(!b.startsWith("#") && (b.match(/Derecho de/g) || []).length >= 3));
  return blocks.join("\n\n").trim();
}
