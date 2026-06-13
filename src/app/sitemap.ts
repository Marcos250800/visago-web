import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const routes = [
  "",
  "/servicios",
  "/preguntas-frecuentes",
  "/contacto",
  "/blog-espana",
  "/blog-eeuu",
  "/becalab",
  "/terminos-y-condiciones",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
