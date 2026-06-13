# VisaGo — Web (rediseño)

Rediseño completo de [visago.online](https://www.visago.online/): empresa online de
**asesoría y tramitación de visados** (estudio, turismo y trabajo) para **EEUU y España**,
con sede legal en Berna, Suiza.

> **Tu ruta segura.**

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — sistema de diseño monocromo (B/N + escala de grises)
- **Framer Motion** + **Lenis** — motion y scrolltelling con smooth-scroll
- **Spline** (`@splinetool/react-spline`) — 3D con el logo
- Deploy en **Vercel**

## Principios de diseño

- **Monocromo** estricto derivado del logo (negro / blanco / grises).
- Estética **limpia, tecnológica y editorial** (refs: Operator de Framer, WorldQuant,
  Synapser, Kento Kawazoe).
- **Scrolltelling** que guía la lectura sin ensuciar la interfaz.
- **Mobile-first** y respeto por `prefers-reduced-motion`.
- **Contenido verbatim**: el texto de la web actual se conserva íntegro; solo cambia
  el diseño, la tipografía, el motion y la jerarquía. SEO mejorado sin alterar el
  texto visible.

## Arquitectura de la información

Navegación de 5 entradas:

| Nav | Ruta | Contenido |
|-----|------|-----------|
| Inicio | `/` | Hero · Sobre nosotros · Tu ruta · Servicios · Destinos · BecaLab · FAQ · Contacto |
| Servicios | `/servicios` | 7 servicios (mega-menú) |
| Recursos | — | Blog España · Blog EE.UU. · BecaLab |
| FAQ | `/preguntas-frecuentes` | 10 preguntas frecuentes |
| Contacto | `/contacto` | Formulario + datos |
| *(legal)* | `/terminos-y-condiciones` | Términos y condiciones |

## Estructura del proyecto

```
src/
├─ app/                 # Rutas (App Router) + layout + globals
│  └─ fonts/            # Geist Sans + Geist Mono (locales)
├─ components/
│  ├─ brand/            # Wordmark / logo
│  ├─ motion/           # Primitivas de animación (Reveal, …)
│  └─ sections/         # Secciones de página (Hero, About, …)
└─ lib/
   ├─ site.ts           # Config global: contacto, redes, navegación
   ├─ content.ts        # Contenido verbatim (servicios, FAQ, …)
   └─ utils.ts          # Helpers (cn)
```

## Desarrollo

```bash
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm run lint
```

## Assets pendientes

- Logo real (SVG B/N, positivo y negativo) → reemplaza `components/brand/Wordmark.tsx`.
- Escena Spline 3D del logo → sustituye el motivo SVG del Hero.

---

© 2026 VisaGo · Berna, Suiza
