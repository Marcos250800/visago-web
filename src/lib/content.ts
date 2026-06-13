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
  /** Frase corta (tarjetas de la home). */
  description: string;
  /** Descripción completa (párrafos) — página de servicios. */
  body: string[];
  /** Características / qué incluye. */
  features: string[];
  /** Nota destacada opcional. */
  note?: string;
};

export const SERVICES_INTRO =
  "En VisaGo, nos especializamos en ofrecer servicios completos de tramitación de visas de turismo, estudio y trabajo para EEUU y España.";

export const SERVICES_INTRO_FULL =
  "En VisaGo, nos especializamos en ofrecer servicios completos de tramitación de visas de turismo, estudio y trabajo para EEUU y España. Nuestro objetivo es facilitar el proceso de obtención de visados, asegurando que los clientes reciban la asesoría y el apoyo que necesitan en cada etapa. Con un equipo de expertos en la materia, garantizamos una atención personalizada y un seguimiento constante de las solicitudes para que puedas concentrarte en tus planes sin preocupaciones.";

export const SERVICES: Service[] = [
  {
    id: "asesoria",
    index: "01",
    title: "Asesoría en visados",
    description:
      "Ofrecemos un servicio integral de asesoría en visados que se adapta a las necesidades específicas de cada cliente.",
    body: [
      "Ofrecemos un servicio integral de asesoría en visados que se adapta a las necesidades específicas de cada cliente. Nuestros expertos te guiarán a través de todo el proceso, desde la comprensión de los requisitos necesarios hasta la preparación de la documentación. Ya sea para estudios, trabajo o turismo, te proporcionamos la información actualizada y el apoyo necesario para asegurar que tu solicitud sea aceptada sin contratiempos.",
      "Elegir nuestro servicio de asesoría en visados te permitirá contar con la experiencia de profesionales que conocen a fondo el proceso. Antes de empezar el trámite te ayudaremos a entender como es cada proceso y a preparar la documentación necesaria. Para nosotros es vital que nuestros clientes entiendan lo que están haciendo, ese es el primer paso para una solicitud exitosa.",
    ],
    features: ["Atención personalizada", "Expertos en visados", "Información actualizada"],
  },
  {
    id: "estudio",
    index: "02",
    title: "Visado de Estudio",
    description:
      "En VisaGo ofrecemos una cobertura completa en la tramitación de visados de estudio para EEUU y España.",
    body: [
      "En VisaGo ofrecemos una cobertura completa en la tramitación de visados de estudio para EEUU y España. Gestionamos todos los documentos y requisitos necesarios ante las autoridades correspondientes. Nuestro servicio va desde la búsqueda de cursos de acuerdo a las condiciones del cliente, hasta la obtención de documentos nacionales e internacionales. Nos aseguramos de que cada detalle esté cubierto para minimizar cualquier riesgo de rechazo. Además, mantenemos una comunicación constante contigo para que estés informado de cada paso del proceso, brindándote tranquilidad mientras trabajamos para obtener tu visado.",
      "La tramitación de visados es un proceso que puede resultar complicado. Con VisaGo, tendrás la seguridad de que todos los documentos serán gestionados correctamente y de que cada paso se llevará a cabo con la atención que merece. Nuestro compromiso es hacerte la vida más fácil mientras conseguimos tu visado.",
    ],
    note: "Si deseas saber que requisitos necesitas para obtener este tipo de visa, tienes a tu disposición a “Elena”, nuestra asesora virtual, la cual te podrá aclarar todas las dudas que necesites.",
    features: [
      "Gestión completa del proceso",
      "Búsqueda de cursos ( grado, máster, formación profesional )",
      "Atención personalizada",
      "Obtención de documentos",
      "Solicitud de cita",
      "Preparación para la entrevista",
    ],
  },
  {
    id: "turismo",
    index: "03",
    title: "Visado de Turismo",
    description:
      "Evaluamos a cada cliente de manera personalizada analizando puntos a favor y en contra según sea su caso.",
    body: [
      "Evaluamos a cada cliente de manera personalizada analizando puntos a favor y en contra según sea su caso y propósito de viaje. Preparamos toda la documentación, así como la gestión en línea de obtención de cita en el consulado correspondiente y el relleno de formularios. Nos encargamos de contactar con las autoridades pertinentes y resolver cualquier inconveniente que pueda surgir. Este servicio es ideal para quienes desean estar informados en todo momento y asegurarse de que su solicitud avanza sin problemas.",
      "También te prepararemos para la entrevistas simulando posibles preguntas y respuestas de vital importancia orientadas a tu caso.",
    ],
    features: [
      "Gestión completa del proceso",
      "Resolución de inconvenientes",
      "Atención personalizada",
      "Solicitud de cita",
      "Preparación para la entrevista",
    ],
  },
  {
    id: "seguro",
    index: "04",
    title: "Seguro Médico",
    description:
      "Viajar o estudiar en el extranjero puede ser emocionante, pero también puede generar cierta incertidumbre.",
    body: [
      "Viajar o estudiar en el extranjero puede ser emocionante, pero también puede generar cierta incertidumbre. Contar con un seguro médico internacional te brinda la tranquilidad y seguridad de saber que estás protegido ante cualquier eventualidad médica o de viaje. Esto te permite disfrutar de tu experiencia en el extranjero sin preocupaciones y con la confianza de que recibirás la atención que necesitas en caso de ser necesario.",
      "Algunos países exigen que los estudiantes y viajeros cuenten con un seguro médico internacional como requisito para obtener la visa. Si planeas estudiar en el extranjero, es muy probable que necesites un seguro médico para cumplir con los requisitos de visado y poder ingresar al país.",
    ],
    features: ["Información en tiempo real", "Tramitación de seguro médico", "Cobertura completa"],
  },
  {
    id: "homologacion",
    index: "05",
    title: "Homologación de Títulos",
    description: "¿Sueñas con ejercer tu profesión en España o en la Unión Europea?",
    body: [
      "Sueñas con ejercer tu profesión en España o en la Unión Europea? En VisaGo, entendemos que la homologación de títulos extranjeros puede ser un proceso complejo y abrumador. Por eso, nos dedicamos a simplificar cada paso, para que puedas alcanzar tus metas profesionales sin complicaciones.",
    ],
    features: [
      "Asesoramiento Personalizado: Evaluamos tu título y te guiamos sobre los requisitos específicos para tu profesión. Te informamos sobre la documentación necesaria y los plazos del proceso.",
      "Gestión Integral del Proceso: Nos encargamos de la recopilación y legalización de documentos. Presentamos tu solicitud ante las autoridades competentes. Realizamos el seguimiento de tu expediente y te mantenemos informado en todo momento.",
    ],
  },
  {
    id: "cursos",
    index: "06",
    title: "Búsqueda de cursos",
    description:
      "En VisaGo, abrimos las puertas a un futuro académico brillante en Estados Unidos y España.",
    body: [
      "En VisaGo, abrimos las puertas a un futuro académico brillante en Estados Unidos y España. Entendemos que la búsqueda del programa educativo ideal puede ser un camino lleno de incertidumbre. Por eso, nos dedicamos a simplificar cada paso, ofreciéndote un servicio integral y personalizado.",
    ],
    features: [
      "Amplia Gama de Opciones: Te ofrecemos acceso a una extensa red de universidades, escuelas de posgrado y centros de formación profesional en Estados Unidos y España. Encuentra programas de grado, posgrado, formación profesional y cursos de verano en diversas áreas de estudio.",
      "Asesoramiento Personalizado: Evaluamos tu perfil académico y tus intereses para identificar los programas que mejor se ajusten a tus necesidades. Te brindamos información detallada sobre los requisitos de admisión, el contenido de los cursos y las oportunidades profesionales.",
    ],
  },
  {
    id: "legalizaciones",
    index: "07",
    title: "Citas y Legalizaciones Consulares",
    description: "Gestión citas y validación de documentos ante representaciones diplomáticas.",
    body: [
      "Gestión citas y validación de documentos ante representaciones diplomáticas. Garantizamos precisión técnica y agilidad operativa en sus trámites internacionales, asegurando que su documentación cumpla estrictamente con la normativa consular vigente para evitar retrasos administrativos.",
    ],
    features: [
      "Gestión de Citas Consulares: Tramitación y seguimiento de citas ante embajadas y consulados para procesos de visado y servicios notariales.",
      "Legalización y Apostilla de Documentos: Procesamiento integral de la Apostilla de la Haya y legalizaciones diplomáticas para otorgar validez jurídica internacional a su documentación.",
    ],
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
