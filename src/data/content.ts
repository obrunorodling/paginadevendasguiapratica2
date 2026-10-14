import { DimensionItem, ChapterItem, BonusItem, TestimonialItem, FaqItem } from '../types';
import kitCompletoMockupImg from '../assets/images/kit_completo_biblia_1791916025923.webp';
import cloudsBgImg from '../assets/images/biblical_clouds_bg_1790688871748.jpg';
import sealWarrantyImg from '../assets/images/seal_warranty_1790688861751.jpg';
import audiencePastorsImg from '../assets/images/audience_pastors_1790688666629.jpg';
import audienceStudentsImg from '../assets/images/audience_students_1790688698850.jpg';
import audienceSmallGroupImg from '../assets/images/audience_smallgroup_1790688829668.jpg';
import audienceFamilyImg from '../assets/images/audience_family_1790688687447.jpg';
import bonusFichaEstudioImg from '../assets/images/bonus_ficha_estudio_1791817815927.webp';
import bonusPreguntasBiblicasImg from '../assets/images/bonus_preguntas_biblicas_1791818151785.webp';
import bonusLineaTiempoImg from '../assets/images/bonus_linea_tiempo_1791818348556.webp';
import bonusPersonajesBiblicosImg from '../assets/images/bonus_personajes_biblicos_1791818752437.webp';
import bonusDesafioBiblicoImg from '../assets/images/bonus_desafio_biblico_1791819162263.webp';

export const CHECKOUT_URL = 'https://pay.kiwify.com/1FFIHoX';

export const IMAGES = {
  cover: kitCompletoMockupImg,
  bundle: kitCompletoMockupImg,
  kitCompleto: kitCompletoMockupImg,
  mockupBundle: kitCompletoMockupImg,
  bonusBundle: kitCompletoMockupImg,
  bonusFichaEstudio: bonusFichaEstudioImg,
  bonusPreguntas: bonusPreguntasBiblicasImg,
  bonusLineaTiempo: bonusLineaTiempoImg,
  bonusPersonajes: bonusPersonajesBiblicosImg,
  bonusDesafio: bonusDesafioBiblicoImg,
  diagram: kitCompletoMockupImg,
  cloudsBg: cloudsBgImg,
  sealWarranty: sealWarrantyImg,
  audiencePastors: audiencePastorsImg,
  audienceStudents: audienceStudentsImg,
  audienceSmallGroup: audienceSmallGroupImg,
  audienceFamily: audienceFamilyImg,
};

export const DIMENSIONS: DimensionItem[] = [
  {
    id: 'quien',
    name: '¿QUIÉN?',
    question: '¿Quiénes son las personas involucradas?',
    shortDesc: 'Descubre los personajes, roles, relaciones y qué sabía cada uno en ese momento.',
    iconBg: 'bg-blue-600',
    tagColor: 'text-blue-600 bg-blue-50 border-blue-200',
    explanation:
      'Identifica quién habla, a quién se dirige y qué papel desempeña cada participante. Evita convertir a los personajes en caricaturas estáticas y distingue entre personajes secundarios y el verdadero protagonista de la escena.',
    exampleQuestion: '¿Quién está hablando, a quién y qué relación previa existe entre ellos?',
    practicalTip: 'Pregúntate: "Si eliminara a este personaje, ¿la historia seguiría ocurriendo igual?"',
  },
  {
    id: 'cuando',
    name: '¿CUÁNDO?',
    question: '¿En qué momento de la historia sucedió?',
    shortDesc: 'Ubica el pasaje en la cronología bíblica con la regla ANTES → AHORA → DESPUÉS.',
    iconBg: 'bg-emerald-600',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    explanation:
      'La Biblia no está organizada como una línea de tiempo simple. Conocer si un texto ocurrió antes o después de la división del reino, en el exilio o tras la resurrección transforma radicalmente su significado y previene el anacronismo.',
    exampleQuestion: '¿Qué acontecimientos ocurrieron inmediatamente antes y prepararon esta escena?',
    practicalTip: 'Aplica la regla de oro: Antes → Ahora → Después para evitar aislar versículos.',
  },
  {
    id: 'donde',
    name: '¿DÓNDE?',
    question: '¿Dónde ocurrió y qué significa ese lugar?',
    shortDesc: 'El contexto geográfico, cultural y ambiental: desiertos, valles, Samaria y Jerusalén.',
    iconBg: 'bg-amber-600',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    explanation:
      'Los lugares bíblicos no son decorados inertes: son actores activos. Un viaje a través de Samaria o una noche en el desierto de Judea cargan con un peso histórico y teológico decisivo que el autor da por sentado.',
    exampleQuestion: '¿Cómo influye el terreno, el clima o las tensiones culturales en lo que sucede?',
    practicalTip: 'Pregúntate: "¿Por qué el autor mencionó este lugar específico y no otro?"',
  },
  {
    id: 'porque',
    name: '¿POR QUÉ?',
    question: '¿Cuál es la causa, circunstancia u objetivo?',
    shortDesc: 'Distingue causa de propósito y separa los hechos explícitos de las suposiciones.',
    iconBg: 'bg-rose-600',
    tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
    explanation:
      'Las personas no actúan en el vacío. Cada instrucción o acontecimiento responde a un problema, pregunta o conflicto real. El método te entrena para identificar palabras de causa y no inventar motivos que el texto no afirma.',
    exampleQuestion: '¿Qué problema específico provocó esta conversación, mandato o intervención?',
    practicalTip: 'Utiliza las 3 categorías: Hecho (lo que el texto dice), Inferencia e Hipótesis.',
  },
  {
    id: 'conexion',
    name: 'CONEXIÓN',
    question: '¿Cómo se conecta con el resto de la Biblia?',
    shortDesc: 'Descubre los hilos temáticos, promesas y la gran historia centrada en Cristo.',
    iconBg: 'bg-indigo-600',
    tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    explanation:
      'Ningún versículo es una isla. Aprende a conectar tu pasaje en 3 niveles (Local, Interno del libro y Amplio en toda la Escritura) evitando el peligro del "versículo suelto" y la eiségesis forzada.',
    exampleQuestion: '¿Cómo encaja este pasaje en el gran relato de redención y las promesas de Dios?',
    practicalTip: 'Pregúntate siempre: "¿El texto realmente establece esta conexión o la estoy forzando yo?"',
  },
];

export const CHAPTERS: ChapterItem[] = [
  {
    number: 'Capítulo 1 y 2',
    title: 'Leer no es lo mismo que estudiar & El gran mapa de la narrativa bíblica',
    description:
      'Por qué abrir la Biblia al azar genera frustración y cómo visualizar los 9 grandes movimientos desde la Creación hasta la Iglesia.',
    keyTakeaway: 'Primero el mapa, después las piezas.',
  },
  {
    number: 'Capítulos 3 a 7',
    title: 'Las 5 Dimensiones del MAPA 5D explicadas a fondo',
    description:
      'El desglose detallado de ¿Quién?, ¿Cuándo?, ¿Dónde?, ¿Por Qué? y Conexión con casos de estudio bíblicos reales.',
    keyTakeaway: 'Hacer las preguntas correctas en el orden correcto.',
  },
  {
    number: 'Capítulo 8',
    title: 'Viendo a los personajes bíblicos a través del MAPA 5D',
    description:
      'Aprende a estudiar a David, Goliat, Saúl y Pedro como personas reales sin reducirlos a caricaturas o clichés.',
    keyTakeaway: 'No confundas personaje secundario con protagonista.',
  },
  {
    number: 'Capítulo 9',
    title: 'Viendo los acontecimientos bíblicos a través del MAPA 5D',
    description:
      'Reconstruye grandes sucesos como el cruce del Mar Rojo y la caída de Jericó descubriendo lo que el resumen suele omitir.',
    keyTakeaway: 'El contexto no cambia los hechos, pero multiplica su significado.',
  },
  {
    number: 'Capítulo 10',
    title: 'El proceso completo en 10 etapas: De la elección a la aplicación',
    description:
      'Guía paso a paso: Preparación → Investigación → Análisis → Resumen → Aplicación legítima (con el caso de Jesús y la tempestad).',
    keyTakeaway: 'Texto → Contexto → Comprensión → Interpretación → Aplicación.',
  },
  {
    number: 'Capítulo 11',
    title: 'Cuando el pasaje parece difícil: Protocolo de 12 pasos',
    description:
      'Cómo investigar pasajes complejos o que parecen contradecirse sin perder tu criterio ni caer en la ansiedad.',
    keyTakeaway: 'Un pasaje difícil no es un callejón sin salida: solo espera las preguntas correctas.',
  },
  {
    number: 'Capítulo 12',
    title: 'Transforma el MAPA 5D en un hábito: La rutina de 20 minutos',
    description:
      'Cómo estudiar de forma constante sin necesitar horas al día, el uso del Diario de estudio y el Desafío de los 21 Días.',
    keyTakeaway: 'La consistencia en sesiones cortas supera a la intensidad esporádica.',
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'Ficha de Estudio Bíblico — Crece en tu Fe',
    subtitle: 'Una herramienta práctica para profundizar en las Escrituras',
    description:
      'Cuaderno de trabajo con la plantilla oficial paso a paso del MAPA 5D, la tabla «Texto o Interpretación: La Distinción Fundamental» (Texto afirma, Contexto sugiere, Mi interpretación, Por investigar) y la guía de resumen y aplicación devocional.',
    originalValue: '$14 USD',
    currentPrice: 'GRATIS',
    iconName: 'book-open',
    image: bonusFichaEstudioImg,
  },
  {
    id: 2,
    title: '50 Preguntas para Profundizar en Cualquier Pasaje Bíblico',
    subtitle: 'Una guía para explorar, reflexionar y comprender',
    description:
      'Banco de 10 preguntas especializadas para cada una de las 5 dimensiones del MAPA 5D. Incluye las 5 Preguntas de Emergencia (para cuando tienes poco tiempo), las 5 de Seguridad (para no desviar el texto), la Ficha Rápida de Estudio y el Método 5–5–5 (5 minutos, 5 preguntas, 5 líneas).',
    originalValue: '$15 USD',
    currentPrice: 'GRATIS',
    iconName: 'help-circle',
    image: bonusPreguntasBiblicasImg,
  },
  {
    id: 3,
    title: 'Línea del Tiempo Bíblica: A Través de la Historia',
    subtitle: 'Cronología completa desde la Creación hasta el Apocalipsis',
    description:
      'Guía visual con las 18 etapas fundamentales de la narrativa bíblica, la panorámica del Antiguo y Nuevo Testamento en una sola mirada y la Regla del «Antes y Después» para ubicar cualquier pasaje en segundos.',
    originalValue: '$12 USD',
    currentPrice: 'GRATIS',
    iconName: 'clock',
    image: bonusLineaTiempoImg,
  },
  {
    id: 4,
    title: 'Guía de los Principales Personajes Bíblicos',
    subtitle: 'Conoce la historia detrás de los protagonistas de la fe',
    description:
      'Estudia a los personajes clave de Génesis, Éxodo, Conquista, Jueces, Reyes Saúl, David y Salomón, los Profetas, Jesús y los Apóstoles como personas reales conectadas a la historia. Incluye el Mapa Rápido de Relaciones Bíblicas.',
    originalValue: '$15 USD',
    currentPrice: 'GRATIS',
    iconName: 'users',
    image: bonusPersonajesBiblicosImg,
  },
  {
    id: 5,
    title: 'Desafío Bíblico Mapa 5D — 21 Días',
    subtitle: 'Crece espiritualmente en 21 días (Una experiencia transformadora)',
    description:
      'Plan guiado día a día con la Rutina Diaria de 20 Minutos. Semana 1: Aprende a mirar el mapa; Semana 2: Profundiza en los acontecimientos (combinando dos dimensiones); Semana 3: Conecta las piezas de la gran historia bíblica.',
    originalValue: '$15 USD',
    currentPrice: 'GRATIS',
    iconName: 'calendar',
    image: bonusDesafioBiblicoImg,
  },
];

export const WHO_CAN_USE = [
  {
    title: 'Nuevos Creyentes y Lectores Diarios',
    description:
      'Pasa de leer sin entender a descubrir la riqueza de cada capítulo en solo 15 a 20 minutos al día, sin frustración.',
    image: IMAGES.audienceStudents,
  },
  {
    title: 'Líderes de Célula y Grupos Pequeños',
    description:
      'Formula preguntas que despiertan el diálogo y guían a tu grupo hacia reflexiones profundas fundamentadas en el texto.',
    image: IMAGES.audienceSmallGroup,
  },
  {
    title: 'Predicadores, Maestros y Pastores',
    description:
      'Estructura mensajes sólidos basados en la intención original del autor, evitando interpretaciones superficiales o fuera de contexto.',
    image: IMAGES.audiencePastors,
  },
  {
    title: 'Familias y Padres Cristianos',
    description:
      'Enseña las historias bíblicas a tus hijos mostrándoles la gran historia de salvación en lugar de relatos aislados.',
    image: IMAGES.audienceFamily,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Andrés Morales',
    role: 'Líder de Grupo de Jóvenes',
    location: 'Medellín, Colombia',
    rating: 5,
    text: 'Siempre me pasaba lo que dice el capítulo 1: terminaba de leer y no sabía qué había aprendido. La pregunta de ¿QUIÉN? y ¿CUÁNDO? cambió todo. Por primera vez veo a David y a los discípulos como personas reales en circunstancias reales.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    highlight: '¡Por primera vez entiendo el contexto real!',
  },
  {
    id: '2',
    name: 'Carolina Villalobos',
    role: 'Maestra de Escuela Bíblica',
    location: 'San José, Costa Rica',
    rating: 5,
    text: 'El protocolo de 12 pasos para pasajes difíciles y la regla de no transformar cada historia en una lección moralista rápida me abrieron los ojos. Mis clases ahora son mucho más ricas y mis alumnos están fascinados.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    highlight: 'Mis clases bíblicas se multiplicaron en profundidad.',
  },
  {
    id: '3',
    name: 'Dr. Roberto Cáceres',
    role: 'Estudiante Bíblico y Profesional',
    location: 'Guadalajara, México',
    rating: 5,
    text: 'Yo no tenía una hora libre al día y pensaba que para estudiar la Biblia necesitaba ser teólogo. La rutina de 20 minutos con el MAPA 5D es perfecta, práctica y rigurosa. El Desafío de los 21 días consolidó mi hábito para siempre.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    highlight: 'Solo 20 minutos al día con resultados reales.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '1. ¿Necesito saber teología, griego o hebreo para usar este método?',
    answer:
      '¡En absoluto! El MAPA 5D fue diseñado específicamente para eliminar esa barrera. No necesitas ser especialista ni tener diccionarios antiguos. Solo necesitas tu Biblia, una hoja de papel y aprender a hacer las 5 preguntas correctas en el orden correcto.',
  },
  {
    question: '2. ¿Cuánto tiempo al día requiere aplicar el método?',
    answer:
      'El libro enseña una rutina optimizada de 15 a 20 minutos diarios (Capítulo 12.4). La idea central es que la consistencia en sesiones cortas y estructuradas supera con creces a la intensidad esporádica en sesiones largas que terminan en abandono.',
  },
  {
    question: '3. ¿Cómo recibiré el libro y los materiales después de la compra?',
    answer:
      'El acceso es 100% digital e inmediato. Una vez confirmado tu pago, recibirás un correo electrónico con tus enlaces de descarga directa para el Ebook completo (en formato PDF de alta resolución y ePub para lectores electrónicos) y todas las plantillas y bonos.',
  },
  {
    question: '4. ¿Puedo imprimir las fichas y el diario de estudio?',
    answer:
      'Sí. Todas las fichas del MAPA 5D, la lista de verificación, la matriz de personajes y el cuaderno de trabajo vienen diagramadas en formato estándar listo para imprimir en casa o usar en aplicaciones como Notion, GoodNotes o Word.',
  },
  {
    question: '5. ¿Qué pasa si el método no cumple mis expectativas?',
    answer:
      'Cuentas con 7 días de garantía incondicional de satisfacción. Si lees el libro, pruebas los ejercicios y sientes que no ha transformado tu manera de estudiar la Biblia, nos envías un correo y te reembolsamos el 100% de tu dinero de inmediato.',
  },
  {
    question: '6. ¿Puedo pagar en mi moneda local?',
    answer:
      'Sí. Aunque el precio base está en dólares ($6.90 USD), la pasarela de pago convierte automáticamente a tu moneda local (Pesos mexicanos, Soles peruanos, Pesos colombianos, Reales brasileños, Euros, etc.) con tarjeta, débito, PayPal o pagos en efectivo locales.',
  },
];
