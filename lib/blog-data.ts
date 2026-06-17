export interface Downloadable {
  pdfUrl: string
  pdfTitle: string
  pdfSize: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  problem: string
  solution: string
  content: string[]
  downloadable: Downloadable
}

export const blogPosts: BlogPost[] = [
  {
    id: "guia-banco-de-leche",
    title: "Crea tu Banco de Leche: Almacenamiento Seguro",
    excerpt: "Aprende a recolectar, conservar y descongelar tu leche materna de forma fácil y segura.",
    category: "Almacenamiento",
    readTime: "3 min",
    problem: "Regresar al trabajo o separarte de tu bebé puede generar dudas sobre cómo guardar la leche materna sin que pierda sus nutrientes o se eche a perder.",
    solution: "Con una rutina de extracción adecuada y conociendo los tiempos exactos de refrigeración y congelación, puedes crear un banco de leche seguro para tu bebé.",
    content: [
      "Lava siempre tus manos y lava las piezas del extractor con agua y jabón antes de empezar.",
      "Tiempos de conservación de tu leche: 4 a 6 horas a temperatura ambiente, 3 a 5 días en el refrigerador y 6 a 9 meses en el congelador.",
      "Guarda la leche en porciones pequeñas (2 a 4 onzas) para descongelar más rápido y evitar desperdicios.",
      "Nunca calientes la leche en el microondas; descongélala en el refrigerador toda la noche o con agua tibia.",
      "Si tu leche descongelada huele a jabón, es por una enzima normal (lipasa); caliéntala a baño maría (sin hervir) antes de congelarla para evitarlo."
    ],

    downloadable: {
      pdfUrl: "/bancoLeche.pdf",
      pdfTitle: "Banco De Leche",
      pdfSize: "5.87 MB",
    },
  },
  {
    id: "cuidado-y-prevencion-pezones",
    title: "Cuidado de Pechos y Prevención de Pezones Doloridos",
    excerpt: "Conoce las señales de un buen agarre y cómo aliviar las molestias durante la lactancia.",
    category: "Cuidado Personal",
    readTime: "4 min",
    problem: "Es común que en los primeros días de lactancia se presenten molestias o dolor en los pezones, lo que genera dudas sobre si el bebé se está alimentando correctamente.",
    solution: "El secreto para una lactancia sin dolor es corregir la posición y el agarre. Cuando el bebé abarca gran parte del seno, la alimentación es óptima y cómoda.",
    content: [
      "El agarre es la clave: Debes sentir un tirón en el seno, pero NO debe doler.",
      "Señales de éxito: El bebé tiene la boca bien abierta, los labios hacia afuera, y su mentón toca tu pecho.",
      "Si duele, interrumpe con cuidado: Inserta un dedo limpio entre sus encías antes de separarlo y vuelve a intentar el agarre.",
      "Alivio natural: Aplica Lanolina para calmar y proteger la piel sensible, o usa parches de hidrogel para un alivio fresco inmediato.",
      "Busca ayuda si persiste: Si después de 48 horas de mejorar el agarre el dolor continúa o hay sangrado, consulta a un profesional."
    ],
    downloadable: {
      pdfUrl: "/cuidadoPecho.pdf",
      pdfTitle: "Guía de Cuidado de Pechos y Pezones",
      pdfSize: "4.08 MB"
    }
  },
  {
    id: "talla-correcta-embudo",
    title: "Cómo Elegir la Talla Correcta de tu Embudo",
    excerpt: "Asegura una extracción cómoda y eficiente eligiendo el tamaño de copa adecuado.",
    category: "Extracción",
    readTime: "3 min",
    problem: "Usar un embudo de la talla incorrecta puede causar molestias, enrojecimiento y bloquear los conductos galactóforos, haciendo que quede leche sin extraer.",
    solution: "Medir correctamente tu pezón y comprobar el ajuste mientras te extraes leche es un paso esencial para lograr una extracción efectiva y optimizar el flujo de leche.",
    content: [
      "Mide el diámetro de tu pezón en la base usando una regla o cinta métrica en milímetros, sin incluir la areola.",
      "Suma 4 mm a la medida que obtuviste para encontrar tu talla de embudo Medela ideal.",
      "Durante la extracción, revisa que tu pezón esté perfectamente centrado y se mueva libremente dentro del túnel.",
      "Si el pezón roza los lados, necesitas una talla más grande; si notas que entra demasiada areola, prueba una talla más pequeña.",
      "Recuerda que es completamente normal necesitar una talla diferente para cada pecho, y que el tamaño puede variar con el tiempo."
    ],
    downloadable: {
      pdfUrl: "/embudo.pdf",
      pdfTitle: "Guía para Seleccionar tu Talla de Embudo",
      pdfSize: "2.56 MB"
    }
  },
  {
    id: "regreso-trabajo-lactancia",
    title: "El regreso al trabajo: consejos para que la lactancia materna sea un éxito constante",
    excerpt: "Planifica tu regreso al trabajo sin dejar de amamantar, con apoyo, organización y un extractor adecuado.",
    category: "Lactancia y Trabajo",
    readTime: "5 min",
    problem: "Volver al trabajo puede generar cansancio y dudas sobre cómo mantener la producción de leche y seguir amamantando de manera satisfactoria.",
    solution: "Con planificación, apoyo familiar y laboral, y el uso de un extractor de calidad, es posible continuar con la lactancia exclusiva y mantener un banco de leche seguro.",
    content: [
      "La producción de leche se establece en los primeros días; amamanta con frecuencia y evita biberones o chupones hasta que la lactancia esté bien establecida.",
      "Amamantar de noche estimula la producción; aprende a hacerlo acostada para descansar mientras alimentas a tu bebé.",
      "Elige el extractor y embudo adecuados para tu comodidad y flujo de leche; consulta a una asesora de lactancia si tienes dudas.",
      "Beneficios de la lactancia: el bebé se enferma menos, tiene mejor nutrición y desarrollo; la mamá reduce riesgos de osteoporosis, cáncer y enfermedades cardiovasculares.",
      "En la primera semana de trabajo, regresa de forma gradual (medio día o a mitad de semana) y protege tu producción extrayéndote con frecuencia.",
      "En el trabajo, enfría la leche inmediatamente y guárdala en botellas o bolsas; congela en porciones de 2 a 4 onzas y usa hieleras para transportarla.",
      "Guía de conservación: 4-6 horas a temperatura ambiente, 24 horas en hielera, 3-5 días en refrigerador, 6-9 meses en congelador.",
      "La leche descongelada dura hasta 2 horas a temperatura ambiente o 24 horas en refrigerador; no se recomienda volver a congelar.",
      "Consejos prácticos: usa ropa de dos piezas, extrae con frecuencia si produces poca leche, apóyate en otras mamás, considera tener dos extractores (casa y trabajo), y limpia las piezas con bolsas Quick Clean™."
    ],
    downloadable: {
      pdfUrl: "/regresoTrabajo.pdf",
      pdfTitle: "Guía de Lactancia y Regreso al Trabajo",
      pdfSize: "4.93 MB"
    }
  },


]

export const videos = [
  {
    id: "intro-medela",
    title: "Extracción Medela",
    description: "Introducete al mundo de la extracción con Medela.",
    duration: "2:44",
    thumbnail: "/viva-sofma/lactancia.jpg",
    src: "/video1.mp4",
  },
  {
    id: "bebe-hambre",
    title: "Señales de un bebe con hambre",
    description: "Útiles tips para saber si tu bebé tiene hambre",
    duration: "00:15",
    thumbnail: "/viva-sofma/bebeHambre.png",
    src: "/bebeHambre.mp4",
  },
  {
    id: "embudo",
    title: "Embudo Personal FitFlex",
    description: "Introducción a los embudos",
    duration: "00:10",
    thumbnail: "/viva-sofma/embudo.png",
    src: "/embudoFlex.mp4",
  },
  {
    id: "recolector-medela",
    title: "Recolector de leche Medela",
    description: "Conoce el recolector de leche de Medela.",
    duration: "00:30",
    thumbnail: "/viva-sofma/recolector.png",
    src: "/recolectorMedela.mp4",
  },
  {
    id: "tips-extraccion",
    title: "Tips de extracción en el trabajo",
    description: "Conoce los consejos más relevantes para tu primera extracción en el trabajo.",
    duration: "00:05",
    thumbnail: "/viva-sofma/extraccionTrabajo.png",
    src: "/tipsExtraccion.mp4",
    
  },
]



