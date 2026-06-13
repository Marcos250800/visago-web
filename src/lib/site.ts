/**
 * Configuración global del sitio VisaGo.
 * Datos de contacto, redes y navegación. Fuente única de verdad.
 */

/**
 * Logo oficial (lockup completo isotipo + "VisaGo").
 * Si el usuario deja sus archivos en public/brand/, se insertan TAL CUAL
 * (pixel-perfect) en navbar y footer. Si están a null, se usa la recreación
 * vectorial (isotipo SVG + wordmark Questrial).
 *   - light: versión BLANCA (para tema oscuro)
 *   - dark:  versión NEGRA  (para tema claro)
 */
export const LOGO: { light: string | null; dark: string | null } = {
  light: null, // p.ej. "/brand/visago-light.svg"
  dark: null, //  p.ej. "/brand/visago-dark.svg"
};

export const SITE = {
  name: "VisaGo",
  tagline: "Tu ruta segura",
  url: "https://www.visago.online",
  locale: "es_ES",
  description:
    "VisaGo: tramitación de visados de turismo, estudio y trabajo para EEUU y España. Asesoría profesional online y gestión completa de tu visa.",
  location: "Berna, Suiza",
  email: "info@visago.online",
  emailAlt: "visagonline@gmail.com",
  phone: "+34 611 838 379",
  whatsapp: "https://wa.me/34611838379",
  instagram: "https://www.instagram.com/visago_online",
  instagramHandle: "@visago_online",
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
