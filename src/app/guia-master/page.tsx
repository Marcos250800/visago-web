import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { Tilt } from "@/components/motion/Tilt";
import { ParticleField } from "@/components/ui/ParticleField";
import { FlowPaths } from "@/components/ui/FlowPaths";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recursos — Guía Máster",
  description:
    "Guía para estudiar un máster oficial en universidades públicas de España siendo estudiante extranjero: requisitos, costes, plazos, universidades y oportunidades.",
  alternates: { canonical: "/guia-master" },
};

const QUE_ES = [
  {
    title: "Acceso a Doctorado",
    desc: "Continúa tu formación académica al más alto nivel",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </>
    ),
  },
  {
    title: "Mejora Profesional",
    desc: "Impulsa tu carrera y desarrollo académico",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 7h7v7" />
      </>
    ),
  },
  {
    title: "Oposiciones Públicas",
    desc: "Accede a puestos en la administración pública",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
];

const REQUISITOS = [
  {
    n: "1",
    title: "Título Universitario Previo",
    desc: "Necesitas un título de grado o licenciatura equivalente a una carrera universitaria en España. Si es extranjero, requiere legalización nacional y consular; o al menos el resguardo del trámite.",
  },
  {
    n: "2",
    title: "Certificación de Notas",
    desc: "Listado oficial de materias y calificaciones. Este documento permite calcular la equivalencia de tu promedio al baremo español (0-10), esencial para competir por una plaza.",
  },
  {
    n: "3",
    title: "Certificado de Idioma",
    desc: "Para másteres en español se recomienda nivel B2. Para programas en inglés, nivel B2 o C1 de inglés.",
  },
  {
    n: "4",
    title: "Documentación Específica",
    desc: "Cada universidad puede solicitar: expediente académico, CV, carta de motivación, recomendaciones, portafolio o entrevista según el programa.",
  },
];

const COSTES = [
  { price: "15-65 €", title: "Precio por Crédito", note: "Varía según la comunidad autónoma" },
  { price: "800-4.000 €", title: "Máster de 60 Créditos", note: "Coste total del programa completo" },
  { price: "2x", title: "Precios No UE", note: "En Cataluña, Madrid o Valencia pueden duplicarse" },
];

const TRABAJAR = [
  {
    title: "Trabajo a Tiempo Parcial",
    desc: "Puedes trabajar hasta 30 horas semanales mientras estudias",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  },
  {
    title: "Prácticas Profesionales",
    desc: "Realiza prácticas curriculares o extracurriculares en empresas",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2 20a7 7 0 0 1 14 0" />
        <path d="M17 5a3.5 3.5 0 0 1 0 7" />
        <path d="M22 20a7 7 0 0 0-5-6.7" />
      </>
    ),
  },
  {
    title: "Permiso de Trabajo",
    desc: "Solicita modificación a residencia después de terminar los estudios",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
  },
];

const UNI_PRINCIPALES = [
  {
    region: "Madrid",
    unis: [
      { name: "Universidad Complutense de Madrid (UCM)", url: "https://www.ucm.es" },
      { name: "Universidad Autónoma de Madrid (UAM)", url: "https://www.uam.es" },
      { name: "Universidad Politécnica de Madrid (UPM)", url: "https://www.upm.es" },
      { name: "Universidad de Alcalá (UAH)", url: "https://www.uah.es" },
    ],
  },
  {
    region: "Cataluña",
    unis: [
      { name: "Universitat de Barcelona (UB)", url: "https://www.ub.edu" },
      { name: "Universitat Autònoma de Barcelona (UAB)", url: "https://www.uab.cat" },
      { name: "Universitat Politècnica de Catalunya (UPC)", url: "https://www.upc.edu" },
      { name: "Universitat Pompeu Fabra (UPF)", url: "https://www.upf.edu" },
    ],
  },
  {
    region: "Andalucía",
    unis: [
      { name: "Universidad de Granada (UGR)", url: "https://www.ugr.es" },
      { name: "Universidad de Sevilla (US)", url: "https://www.us.es" },
      { name: "Universidad de Málaga (UMA)", url: "https://www.uma.es" },
    ],
  },
  {
    region: "Valencia",
    unis: [
      { name: "Universitat de València (UV)", url: "https://www.uv.es" },
      { name: "Universitat Politècnica de València (UPV)", url: "https://www.upv.es" },
      { name: "Universidad de Alicante (UA)", url: "https://www.ua.es" },
    ],
  },
  {
    region: "Galicia",
    unis: [
      { name: "Universidad de Santiago de Compostela (USC)", url: "https://www.usc.es" },
      { name: "Universidad de Vigo (UVigo)", url: "https://www.uvigo.gal" },
      { name: "Universidade de Coruña (UDC)", url: "https://www.udc.es" },
    ],
  },
  {
    region: "País Vasco y Navarra",
    unis: [
      { name: "Universidad del País Vasco (UPV/EHU)", url: "https://www.ehu.eus" },
      { name: "Universidad Pública de Navarra (UPNA)", url: "https://www.unavarra.es" },
    ],
  },
];

const UNI_MAS = [
  { region: "Castilla y León", unis: [{ name: "Universidad de Salamanca (USAL)", url: "https://www.usal.es" }, { name: "Universidad de Valladolid (UVA)", url: "https://www.uva.es" }] },
  { region: "Aragón", unis: [{ name: "Universidad de Zaragoza (UNIZAR)", url: "https://www.unizar.es" }] },
  { region: "Murcia", unis: [{ name: "Universidad de Murcia (UMU)", url: "https://www.um.es" }, { name: "Universidad Politécnica de Cartagena (UPCT)", url: "https://www.upct.es" }] },
  { region: "Canarias", unis: [{ name: "Universidad de La Laguna (ULL)", url: "https://www.ull.es" }, { name: "Universidad de Las Palmas (ULPGC)", url: "https://www.ulpgc.es" }] },
  { region: "Asturias", unis: [{ name: "Universidad de Oviedo (UNIOVI)", url: "https://www.uniovi.es" }] },
  { region: "Extremadura", unis: [{ name: "Universidad de Extremadura (UEX)", url: "https://www.unex.es" }] },
  { region: "Castilla-La Mancha", unis: [{ name: "Universidad de Castilla-La Mancha (UCLM)", url: "https://www.uclm.es" }] },
  { region: "Cantabria", unis: [{ name: "Universidad de Cantabria (UC)", url: "https://web.unican.es" }] },
  { region: "Islas Baleares", unis: [{ name: "Universitat de les Illes Balears (UIB)", url: "https://www.uib.es" }] },
  { region: "La Rioja", unis: [{ name: "Universidad de La Rioja (UNIRIOJA)", url: "https://www.unirioja.es" }] },
];

const MASTERES = [
  "Máster en Educación",
  "Máster en Traducción e Interpretación",
  "Máster en Psicología General Sanitaria",
  "Máster en Negocios Internacionales",
  "Máster en Arquitectura",
  "Máster en Energías Renovables",
  "Máster en Big Data y Análisis de Datos",
  "Máster en Gestión de Proyectos",
  "Máster en Derecho Internacional",
  "Máster en Salud Pública",
];

const VENTAJAS = [
  {
    title: "Reconocimiento Europeo",
    desc: "Título reconocido en toda la Unión Europea",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
  },
  {
    title: "Calidad Académica",
    desc: "Alta calidad académica y prestigio internacional",
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: "Prórroga de Estancia",
    desc: "Posibilidad de prórroga para búsqueda de empleo (1 año)",
    icon: (
      <>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 7h7v7" />
      </>
    ),
  },
  {
    title: "Experiencia Multicultural",
    desc: "Experiencia multicultural y formación práctica",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
      </>
    ),
  },
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="text-muted">
      {children}
    </svg>
  );
}

function UniLink({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
    >
      <span className="border-b border-transparent transition-colors group-hover:border-current">{name}</span>
      <span aria-hidden className="text-[11px] opacity-40 transition-opacity group-hover:opacity-100">↗</span>
    </a>
  );
}

export default function GuiaMasterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-background pb-16 pt-36 md:pb-24 md:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_90%_at_72%_35%,black,transparent_80%)]"
        >
          <ParticleField className="h-full w-full" connect={120} />
        </div>

        <div className="container relative">
          <Reveal>
            <ScrambleText text="Recursos · Guía Máster" className="kicker" />
            <h1 className="mt-5 max-w-4xl font-display text-display-sm font-medium md:text-display">
              Guía para Estudiar un Máster en España
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-lg text-muted">
              Todo lo que necesitas saber para estudiar en universidades públicas españolas como estudiante extranjero.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Contactar por WhatsApp <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ¿Qué es un Máster Oficial? */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Posgrado oficial" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="¿Qué es un Máster Oficial en España?" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-muted">
              Los másteres universitarios oficiales son programas de posgrado reconocidos por el Ministerio de
              Universidades y válidos en toda la Unión Europea. Forman parte del Espacio Europeo de Educación Superior
              (EEES).
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {QUE_ES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Tilt className="h-full" max={6}>
                  <div className="h-full rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <Icon>{c.icon}</Icon>
                    <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos Generales */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <FlowPaths
          className="pointer-events-none absolute inset-0 text-foreground [mask-image:radial-gradient(ellipse_55%_75%_at_82%_50%,black,transparent_72%)]"
          mirror
        />
        <div className="container relative">
          <Reveal>
            <ScrambleText text="Acceso" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Requisitos Generales" />
          </h2>
          <ol className="mt-12 space-y-3">
            {REQUISITOS.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.06}>
                <li className="flex gap-5 rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                  <span className="font-mono text-sm text-muted">{r.n}</span>
                  <div>
                    <h3 className="font-medium">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{r.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Cuándo y cómo postular */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Plazos" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Cuándo y Cómo Postular" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 font-display text-lg font-semibold">Periodo de Solicitud</p>
            <p className="mt-2 max-w-3xl text-balance leading-relaxed text-muted">
              Entre enero y julio según la universidad y máster. Muchas universidades tienen 2 o 3 plazos (fases).
            </p>
            <div className="mt-8 rounded-2xl border border-line border-l-2 border-l-foreground bg-card/40 p-6">
              <p className="text-sm leading-relaxed text-muted">
                <strong className="text-foreground">Consejo importante:</strong> cuanto antes postules, mejor. Las plazas
                son limitadas y se asignan por orden de solicitud.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coste */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Inversión" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Coste de un Máster Público" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-muted">
              El precio varía según la comunidad autónoma y si eres estudiante extracomunitario (no UE). Los costes son
              significativamente más accesibles que en universidades privadas.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {COSTES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Tilt className="h-full" max={6}>
                  <div className="h-full rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <p className="font-display text-3xl font-semibold md:text-4xl">{c.price}</p>
                    <h3 className="mt-3 font-medium">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{c.note}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
              Puedes acceder a becas del Ministerio (MEFP), del MAEC-AECID o propias de cada universidad para financiar
              tus estudios.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ¿Puedo trabajar? */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Trabajo" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="¿Puedo Trabajar Durante el Máster?" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-muted">
              Sí. Con tu visado de estudiante tienes varias opciones laborales que te permiten combinar estudios y
              experiencia profesional en España.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {TRABAJAR.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Tilt className="h-full" max={6}>
                  <div className="h-full rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <Icon>{c.icon}</Icon>
                    <h3 className="mt-4 font-medium">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Universidades por comunidad */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Dónde estudiar" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Principales Universidades Públicas por Comunidad" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-muted">
              España cuenta con universidades públicas de prestigio internacional en todas sus comunidades autónomas.
              Todas ofrecen másteres oficiales reconocidos en la Unión Europea.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {UNI_PRINCIPALES.map((g, i) => (
              <Reveal key={g.region} delay={(i % 2) * 0.06}>
                <h3 className="font-display text-lg font-semibold">{g.region}</h3>
                <ul className="mt-4 space-y-2">
                  {g.unis.map((u) => (
                    <li key={u.url} className="flex">
                      <UniLink name={u.name} url={u.url} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Más universidades */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Más opciones" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Más Universidades Públicas" />
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {UNI_MAS.map((g, i) => (
              <Reveal key={g.region} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-card/40 p-6">
                  <h3 className="font-medium">{g.region}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {g.unis.map((u) => (
                      <li key={u.url} className="flex">
                        <UniLink name={u.name} url={u.url} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Másteres populares */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Programas" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Másteres Populares para Estudiantes Extranjeros" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-muted">
              Estos son algunos de los programas más solicitados por estudiantes internacionales en universidades
              públicas españolas.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {MASTERES.map((m) => (
                <li key={m} className="flex items-center gap-3 border-b border-line py-2 text-foreground/85">
                  <span aria-hidden className="text-muted">—</span>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Ventajas */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <SectionDivider />
        <div className="container">
          <Reveal>
            <ScrambleText text="Por qué España" className="kicker" />
          </Reveal>
          <h2 className="mt-5 font-display text-display-sm font-medium">
            <RevealWords text="Ventajas para Estudiantes Extranjeros" />
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VENTAJAS.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.06}>
                <Tilt className="h-full" max={6}>
                  <div className="h-full rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-300 hover:border-foreground/30">
                    <Icon>{v.icon}</Icon>
                    <h3 className="mt-4 font-medium">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contacto */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-3xl bg-contrast px-8 py-16 text-center text-contrast-fg md:px-16 md:py-20">
              <h2 className="relative mx-auto max-w-2xl text-balance font-display text-display-sm font-semibold">
                ¿Listo para tu máster en España?
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-contrast-fg/70">
                Cuéntanos tu caso y te ayudamos a elegir universidad y a preparar tu solicitud.
              </p>
              <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-contrast-fg px-6 py-3 text-sm font-medium text-contrast transition-opacity duration-300 hover:opacity-85"
                >
                  WhatsApp
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
