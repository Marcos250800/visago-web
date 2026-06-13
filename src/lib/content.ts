/**
 * Contenido editorial de VisaGo — texto VERBATIM extraído de visago.online.
 * Regla del proyecto: el texto visible se mantiene íntegro; solo cambia el diseño.
 */

/* ---------------------------------- Sobre nosotros ---------------------------------- */

export const ABOUT = {
  heading: "Sobre nosotros",
  body: `VisaGo es una empresa online con sede en Suiza. Nuestro objetivo es ayudarte a navegar por el proceso de obtener una visa, ofreciendo servicios de asesoría profesional y gestión completa. Nuestro equipo está compuesto por asesores que conocen a fondo la normativa vigente y están al día con los cambios que puedan afectar a las solicitudes. Nos enorgullece proporcionar un servicio personalizado que se adapte a las necesidades de cada cliente. Ya sea que, necesites un visado para trabajar, estudiar o viajar. VisaGo llega para hacer que tu experiencia sea lo más sencilla y eficaz posible. Nuestra misión es facilitar el acceso a oportunidades internacionales y asegurar que cada cliente logre su objetivo de manera exitosa.`,
};

/* ---------------------------------- Servicios ---------------------------------- */

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export const SERVICES_INTRO =
  "En VisaGo, nos especializamos en ofrecer servicios completos de tramitación de visas de turismo, estudio y trabajo para EEUU y España.";

export const SERVICES: Service[] = [
  {
    id: "asesoria",
    index: "01",
    title: "Asesoría en visados",
    description:
      "Ofrecemos un servicio integral de asesoría en visados que se adapta a las necesidades específicas de cada cliente.",
  },
  {
    id: "estudio",
    index: "02",
    title: "Visado de Estudio",
    description:
      "En VisaGo ofrecemos una cobertura completa en la tramitación de visados de estudio para EEUU y España.",
  },
  {
    id: "turismo",
    index: "03",
    title: "Visado de Turismo",
    description:
      "Evaluamos a cada cliente de manera personalizada analizando puntos a favor y en contra según sea su caso.",
  },
  {
    id: "seguro",
    index: "04",
    title: "Seguro Médico",
    description:
      "Viajar o estudiar en el extranjero puede ser emocionante, pero también puede generar cierta incertidumbre.",
  },
  {
    id: "homologacion",
    index: "05",
    title: "Homologación de Títulos",
    description: "¿Sueñas con ejercer tu profesión en España o en la Unión Europea?",
  },
  {
    id: "cursos",
    index: "06",
    title: "Búsqueda de cursos",
    description:
      "En VisaGo, abrimos las puertas a un futuro académico brillante en Estados Unidos y España.",
  },
  {
    id: "legalizaciones",
    index: "07",
    title: "Citas y Legalizaciones Consulares",
    description: "Gestión citas y validación de documentos ante representaciones diplomáticas.",
  },
];

/* ---------------------------------- Tu ruta (proceso) ---------------------------------- */

export type RouteStep = {
  step: string;
  title: string;
  description: string;
};

export const ROUTE_STEPS: RouteStep[] = [
  {
    step: "01",
    title: "Asesoría",
    description:
      "Analizamos tu caso y la normativa vigente para definir la mejor estrategia según tu objetivo: estudiar, trabajar o viajar.",
  },
  {
    step: "02",
    title: "Documentación",
    description:
      "Preparamos y revisamos toda la documentación requerida, incluyendo legalizaciones, apostillas y homologaciones.",
  },
  {
    step: "03",
    title: "Cita y entrevista",
    description:
      "Gestionamos la cita consular y te preparamos para la entrevista con simulaciones y orientación experta.",
  },
  {
    step: "04",
    title: "Tu visado",
    description:
      "Hacemos seguimiento de tu solicitud y te mantenemos informado hasta lograr tu objetivo internacional.",
  },
];

/* ---------------------------------- FAQ ---------------------------------- */

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "¿Qué tipos de visados gestionan?",
    a: "Gestionamos una variedad de visados, incluyendo visados de trabajo, de estudio y de turismo, adaptados a las necesidades de cada cliente.",
  },
  {
    q: "¿Cuánto tiempo tarda la tramitación?",
    a: "El tiempo de tramitación puede variar según el tipo de visado y la carga de trabajo de las autoridades, pero nos esforzamos por ofrecer un servicio rápido.",
  },
  {
    q: "¿Ofrecen servicios de seguimiento?",
    a: "Sí, proporcionamos un servicio de seguimiento de solicitudes para mantener a nuestros clientes informados sobre el estado de su visado.",
  },
  {
    q: "¿De qué países tramitan visados?",
    a: "Tramitamos visados de estudio, turismo y trabajo para España y EEUU.",
  },
  {
    q: "¿Ofrecen cursos para EEUU y España?",
    a: "Ayudamos en la búsquedad de cursos de verano, grado, máster y formación profesional a nuestros clientes de acuerdo a sus necesidades.",
  },
  {
    q: "¿Puedo hacer la entrevista en un país diferente a mi país de origen?",
    a: "Si, puedes hacerla sin ningún problema.",
  },
  {
    q: '¿Quién es "Elena"?',
    a: "Elena es nuestra asistente virtual disponible 24/7 para resolver tus consultas relacionadas con los visados.",
  },
  {
    q: "¿Puedo aplicar a una visa de estudio sin ser universitario?",
    a: "Por supuesto que si, tenemos una serie de cursos interesantes para ti, no dudes en contactarnos.",
  },
  {
    q: "¿Ofrecen becas?",
    a: "VisaGo no ofrece becas. Solo tramita visados de estudio. Si desea encontrar una beca, en nuestro blog hay herramientas disponibles.",
  },
  {
    q: "¿Necesito tener mis documentos de estudio legalizados?",
    a: "Siempre que se vayan a utilizar en otro país que no sea el de procedencia, los documentos deben estar legalizados por las autoridades competentes.",
  },
];

/* ---------------------------------- Destinos ---------------------------------- */

export const DESTINATIONS = [
  {
    code: "ES",
    name: "España",
    blurb: "Visado de estudio, homologación de títulos, máster y formación profesional.",
    href: "/blog-espana",
  },
  {
    code: "US",
    name: "Estados Unidos",
    blurb: "Visados F-1 / M-1, admisiones universitarias y planificación de costes.",
    href: "/blog-eeuu",
  },
];
