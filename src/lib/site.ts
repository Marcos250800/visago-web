/**
 * Configuración global del sitio VisaGo.
 * Datos de contacto, redes y navegación. Fuente única de verdad.
 */

/**
 * Logo oficial (lockup isotipo + "VisaGo"), versión BLANCA con fondo transparente.
 * Se inserta TAL CUAL en navbar/footer; en tema claro se invierte a negro por CSS.
 * Si el archivo no existe aún, hay fallback automático a la recreación vectorial.
 * Coloca tu archivo en: public/brand/visago.png  (o .svg)
 */
export const LOGO: { src: string | null } = {
  src: "/brand/visago.png",
};

export const SITE = {
  name: "VisaGo",
  tagline: "Tu ruta segura",
  url: "https://www.visago.online",
  locale: "es_ES",
  description:
    "VisaGo: tramitación de visados de turismo, estudio y trabajo para EEUU y España. Asesoría profesional online y gestión completa de tu visa.",
  location: "Berna, Suiza",
  email: "visagonline@gmail.com",
  emailAlt: "info@visago.online",
  phone: "+34 611 838 379",
  whatsapp: "https://wa.me/34611838379",
  instagram: "https://www.instagram.com/visago_online",
  instagramHandle: "@visago_online",
  becalabApp: "https://becalab.app/",
} as const;

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Navegación principal — 5 entradas (Servicios y Recursos con submenú). */
export const NAV: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Asesoría en visados", href: "/servicios#asesoria" },
      { label: "Visado de Estudio", href: "/servicios#estudio" },
      { label: "Visado de Turismo", href: "/servicios#turismo" },
      { label: "Seguro Médico", href: "/servicios#seguro" },
      { label: "Homologación de Títulos", href: "/servicios#homologacion" },
      { label: "Búsqueda de cursos", href: "/servicios#cursos" },
      { label: "Citas y Legalizaciones", href: "/servicios#legalizaciones" },
    ],
  },
  {
    label: "Recursos",
    href: "/recursos",
    children: [
      { label: "Dudas en un minuto", href: "/recursos", description: "Resuelve dudas frecuentes en un minuto, en Instagram" },
      { label: "Mapa interactivo", href: "/mapa-interactivo", description: "Universidades públicas de España en un globo interactivo" },
      { label: "Guía FP", href: "/guia-fp", description: "Formación Profesional de Grado Superior en España" },
      { label: "Guía Máster", href: "/guia-master", description: "Estudiar un máster oficial en universidades públicas de España" },
      { label: "Blog España", href: "/blog-espana", description: "Guía completa del visado de estudio para España" },
      { label: "Blog EE.UU.", href: "/blog-eeuu", description: "Cómo estudiar en Estados Unidos siendo extranjero" },
      { label: "BecaLab", href: "/becalab", description: "Tu mentor inteligente para becas en España" },
    ],
  },
  { label: "FAQ", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

/** Enlaces legales / secundarios para el footer. */
export const FOOTER_LEGAL: NavChild[] = [
  { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
];
