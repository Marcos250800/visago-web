import { readFileSync, writeFileSync } from "node:fs";
import * as cheerio from "cheerio";

const pages = ["blog-espana", "blog-eeuu", "becalab", "terminos-y-condiciones", "servicios"];
const exportNames = {
  "blog-espana": "blogEspana",
  "blog-eeuu": "blogEeuu",
  becalab: "becaLab",
  "terminos-y-condiciones": "terminos",
  servicios: "serviciosDetalle",
};
const generated = {};

const inline = ($, el) => {
  let out = "";
  $(el)
    .contents()
    .each((_, n) => {
      if (n.type === "text") out += n.data.replace(/\s+/g, " ");
      else if (n.type === "tag") {
        const t = n.name;
        if (t === "strong" || t === "b") out += `**${inline($, n).trim()}**`;
        else if (t === "em" || t === "i") out += `*${inline($, n).trim()}*`;
        else if (t === "a") {
          const href = $(n).attr("href") || "";
          out += `[${inline($, n).trim()}](${href})`;
        } else if (t === "br") out += "\n";
        else out += inline($, n);
      }
    });
  return out;
};

for (const page of pages) {
  const html = readFileSync(`_scrape/${page}.html`, "utf8");
  const $ = cheerio.load(html);

  // El contenido vive aislado en .main-content (sin nav/header/footer).
  let $root = $(".main-content");
  if (!$root.length) $root = $("main");
  if (!$root.length) $root = $("body");

  // Solo limpieza interna mínima.
  $root.find("script, style, noscript, form, button").remove();

  const blocks = [];
  $root
    .find("h1, h2, h3, h4, h5, h6, p, li, blockquote")
    .each((_, el) => {
      const tag = el.name;
      const text = inline($, el).replace(/\s+\n/g, "\n").replace(/[ \t]{2,}/g, " ").trim();
      if (!text) return;
      if (/^h[1-6]$/.test(tag)) {
        const level = Number(tag[1]);
        blocks.push(`${"#".repeat(level)} ${text}`);
      } else if (tag === "li") {
        blocks.push(`- ${text}`);
      } else if (tag === "blockquote") {
        blocks.push(`> ${text}`);
      } else {
        blocks.push(text);
      }
    });

  // Deduplicar bloques consecutivos repetidos (Webador duplica li + p)
  const norm = (s) => s.replace(/^[->]\s*/, "").replace(/\*\*/g, "").trim().toLowerCase();
  const deduped = blocks.filter((b, i) => i === 0 || norm(b) !== norm(blocks[i - 1]));

  const md = deduped.join("\n\n");
  writeFileSync(`_scrape/${page}.md`, md, "utf8");
  generated[page] = md;
  console.log(`\n===== ${page} (${md.length} chars, ${deduped.length} bloques) =====`);
}

// Generar módulo TS con el contenido verbatim (fuente única para las páginas)
const header = `/**\n * Contenido VERBATIM extraído de visago.online (propiedad del cliente).\n * Generado por scripts/scrape.mjs — no editar a mano salvo correcciones puntuales.\n */\n\n`;
const body = pages
  .map((p) => `export const ${exportNames[p]} = ${JSON.stringify(generated[p])};`)
  .join("\n\n");
writeFileSync("src/lib/articles.ts", header + body + "\n", "utf8");
console.log("\nOK → src/lib/articles.ts");
