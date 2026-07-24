const defaultRequirements = [
  'Atención únicamente con cita previa.',
  'Se solicita anticipo para reservar.',
  'Todos los servicios incluyen valoración profesional.',
  'Trabajamos bajo estrictos protocolos de higiene, desinfección y esterilización.',
  'No realizamos servicios sobre uñas o piel con infecciones activas, hongos o lesiones sin valoración previa.'
];

const localCategoryContext = {
  unas: 'Servicio de uñas en San Román, Campeche, pensado para un acabado cuidado, resistente y personalizado.',
  manicure: 'Manicure profesional en Campeche, realizado con preparación cuidadosa, higiene visible y atención personalizada.',
  pedicure: 'Pedicure en San Francisco de Campeche para mantener tus pies cuidados, cómodos y con un acabado limpio.',
  'nail-art': 'Nail art en Campeche para complementar tu set con diseños personalizados, detalles finos y estilo propio.',
  cejas: 'Servicio de cejas en Campeche con diseño personalizado para armonizar tus facciones y realzar tu mirada.',
  maquillaje: 'Maquillaje profesional en Campeche para eventos, sesiones, novias, XV años y ocasiones especiales.',
  cabello: 'Servicio de cabello en Campeche con atención personalizada para cortes, peinados y acabados especiales.'
};

const makeService = ({
  id,
  name,
  category,
  description,
  priceFrom,
  priceTo,
  priceLabel,
  duration = 60,
  tags = [],
  image = '/images/hero.webp',
  extras = [],
  badge = null
}) => ({
  id,
  slug: id,
  name,
  category,
  shortDescription: description,
  fullDescription: `${description} ${localCategoryContext[category] || 'Servicio de belleza en San Román, Campeche, con atención profesional y cuidado personalizado.'}`,
  duration,
  priceFrom,
  priceTo,
  priceLabel,
  tags,
  amenities: ['valoracion'],
  badge,
  images: [image],
  extras,
  requirements: defaultRequirements,
  relatedServices: []
});

export const services = [
  makeService({
    id: 'gel-semipermanente',
    name: 'Gel Semipermanente',
    category: 'unas',
    description: 'Aplicación de color en gel de larga duración sobre uñas preparadas. Ideal para un acabado limpio, brillante y práctico.',
    priceFrom: 200,
    duration: 45,
    tags: ['unas', 'rapido'],
    image: '/images/unas1.webp',
    badge: 'popular'
  }),
  makeService({
    id: 'rubber-base',
    name: 'Rubber Base',
    category: 'unas',
    description: 'Base flexible que ayuda a proteger la uña natural y aporta estructura a uñas débiles o quebradizas.',
    priceFrom: 350,
    priceLabel: 'Desde $350',
    duration: 75,
    tags: ['unas', 'fortalecimiento'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'builder-gel',
    name: 'Builder Gel',
    category: 'unas',
    description: 'Gel constructor que aporta resistencia y permite corregir pequeñas imperfecciones de la uña natural.',
    priceFrom: 450,
    priceLabel: 'Desde $450',
    duration: 90,
    tags: ['unas', 'fortalecimiento'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'polygel',
    name: 'Polygel',
    category: 'unas',
    description: 'Sistema híbrido, ligero y resistente para extensiones o reforzamiento de uñas.',
    priceFrom: 550,
    priceLabel: 'Desde $550',
    duration: 120,
    tags: ['unas', 'extensiones'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'soft-gel',
    name: 'Soft Gel',
    category: 'unas',
    description: 'Extensiones con tips de gel, ligeras, cómodas y de apariencia natural.',
    priceFrom: 500,
    priceLabel: 'Desde $500',
    duration: 105,
    tags: ['unas', 'extensiones'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'unas-acrilicas',
    name: 'Uñas Acrílicas',
    category: 'unas',
    description: 'Extensiones resistentes y personalizables en largo, forma, color y estilo.',
    priceFrom: 600,
    priceLabel: 'Desde $600',
    duration: 120,
    tags: ['unas', 'extensiones'],
    image: '/images/unas1.webp',
    badge: 'popular'
  }),
  makeService({
    id: 'press-on-personalizadas',
    name: 'Press On Personalizadas',
    category: 'unas',
    description: 'Set de uñas reutilizables diseñado a la medida de tu estilo y ocasión.',
    priceFrom: 400,
    priceLabel: 'Desde $400',
    duration: 60,
    tags: ['unas', 'personalizado'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'extensiones-tip-escultural',
    name: 'Extensiones Tip o Escultural',
    category: 'unas',
    description: 'Alargamiento de uñas con tip o molde escultural, elegido según tu uña natural y resultado deseado.',
    priceFrom: 600,
    priceLabel: 'Desde $600',
    duration: 120,
    tags: ['unas', 'extensiones'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'reforzamiento-una-natural',
    name: 'Reforzamiento de Uña Natural',
    category: 'unas',
    description: 'Protección adicional para reducir quiebres y acompañar el crecimiento de la uña natural.',
    priceFrom: 350,
    priceLabel: 'Desde $350',
    duration: 75,
    tags: ['unas', 'fortalecimiento'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'retiro-producto',
    name: 'Retiro de Producto',
    category: 'unas',
    description: 'Retiro profesional de gel, polygel, acrílico o sistemas artificiales, cuidando la uña natural.',
    priceFrom: 100,
    priceLabel: 'Desde $100',
    duration: 30,
    tags: ['unas', 'rapido'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'reconstruccion-unas',
    name: 'Reconstrucción de Uñas',
    category: 'unas',
    description: 'Corrección estética de uñas fracturadas o dañadas, previa valoración.',
    priceFrom: 50,
    priceLabel: 'Desde $50 por una',
    duration: 30,
    tags: ['unas', 'rapido'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'correccion-onicofagia',
    name: 'Corrección de Onicofagia',
    category: 'unas',
    description: 'Servicio especializado para personas que se muerden las uñas.',
    priceFrom: null,
    priceLabel: 'Valoración previa',
    duration: 60,
    tags: ['unas', 'especializado'],
    image: '/images/unas1.webp'
  }),

  makeService({
    id: 'manicure-clasica',
    name: 'Manicure Clásica',
    category: 'manicure',
    description: 'Limpieza básica de uñas y cutícula, limado y acabado natural. No incluye gel semipermanente.',
    priceFrom: 180,
    duration: 45,
    tags: ['manicure', 'rapido'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'manicure-mixta',
    name: 'Manicure Mixta',
    category: 'manicure',
    description: 'Combinación de técnicas para una preparación más detallada y duradera. No incluye gel semipermanente.',
    priceFrom: 250,
    duration: 60,
    tags: ['manicure'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'manicure-spa',
    name: 'Manicure Spa',
    category: 'manicure',
    description: 'Incluye exfoliación, hidratación y masaje relajante. No incluye gel semipermanente.',
    priceFrom: 300,
    duration: 70,
    tags: ['manicure', 'spa'],
    image: '/images/unas1.webp',
    badge: 'popular'
  }),
  makeService({
    id: 'manicure-dry',
    name: 'Manicure Dry en seco',
    category: 'manicure',
    description: 'Preparación profesional sin remojo para favorecer la adherencia de los productos. No incluye gel semipermanente.',
    priceFrom: 250,
    duration: 60,
    tags: ['manicure'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'manicure-rusa',
    name: 'Manicure Rusa',
    category: 'manicure',
    description: 'Técnica avanzada para una limpieza profunda y un acabado muy pulido. No incluye gel semipermanente.',
    priceFrom: 350,
    duration: 75,
    tags: ['manicure', 'especializado'],
    image: '/images/unas1.webp'
  }),

  makeService({
    id: 'pedicure-express',
    name: 'Pedicure Express',
    category: 'pedicure',
    description: 'Mantenimiento rápido para pies cuidados y presentables. No incluye gel semipermanente.',
    priceFrom: 250,
    duration: 45,
    tags: ['pedicure', 'rapido'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'pedicure-clasica',
    name: 'Pedicure Clásica',
    category: 'pedicure',
    description: 'Limpieza, corte, limado y cuidado básico de los pies. No incluye gel semipermanente.',
    priceFrom: 350,
    duration: 60,
    tags: ['pedicure'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'pedicure-spa',
    name: 'Pedicure Spa',
    category: 'pedicure',
    description: 'Incluye exfoliación, mascarilla, hidratación y masaje relajante. No incluye gel semipermanente.',
    priceFrom: 500,
    duration: 75,
    tags: ['pedicure', 'spa'],
    image: '/images/unas1.webp',
    badge: 'popular'
  }),
  makeService({
    id: 'pedicure-dry',
    name: 'Pedicure Dry',
    category: 'pedicure',
    description: 'Pedicure en seco con enfoque profesional y mayor precisión. No incluye gel semipermanente.',
    priceFrom: 450,
    duration: 70,
    tags: ['pedicure'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'pedicure-camilla',
    name: 'Pedicure en Camilla',
    category: 'pedicure',
    description: 'Experiencia cómoda y personalizada en posición reclinada. No incluye gel semipermanente.',
    priceFrom: 550,
    duration: 80,
    tags: ['pedicure', 'spa'],
    image: '/images/unas1.webp'
  }),
  makeService({
    id: 'pedicure-terapeutico-estetico',
    name: 'Pedicure Terapéutico Estético',
    category: 'pedicure',
    description: 'Atención especializada para durezas, callosidades y necesidades estéticas de los pies.',
    priceFrom: 650,
    priceLabel: 'Desde $650',
    duration: 90,
    tags: ['pedicure', 'especializado'],
    image: '/images/unas1.webp'
  }),

  ...[
    ['francesa', 'Francesa', 50, 'Desde $50'],
    ['baby-boomer', 'Baby Boomer', 80, 'Desde $80'],
    ['efecto-aura', 'Efecto Aura', 100, 'Desde $100'],
    ['cat-eye', 'Cat Eye', 100, 'Desde $100'],
    ['encapsulados', 'Encapsulados', 150, 'Desde $150'],
    ['relieve-3d', 'Relieve 3D', 20, 'Desde $20 por diseño'],
    ['mano-alzada', 'Mano Alzada', 30, 'Desde $30 por diseño'],
    ['marmol', 'Mármol', 80, 'Desde $80'],
    ['foil', 'Foil', 50, 'Desde $50'],
    ['cristales', 'Cristales', 10, 'Desde $10 por pieza'],
    ['pigmentos', 'Pigmentos', 50, 'Desde $50'],
    ['efecto-mate', 'Efecto Mate', 30, 'Desde $30'],
    ['degradados', 'Degradados', 80, 'Desde $80']
  ].map(([id, name, priceFrom, priceLabel]) => makeService({
    id: `nail-art-${id}`,
    name,
    category: 'nail-art',
    description: 'Diseño de nail art con costo adicional al servicio principal, personalizado según tu inspiración.',
    priceFrom,
    priceLabel,
    duration: 30,
    tags: ['nail-art', 'personalizado', 'rapido'],
    image: '/images/unas1.webp'
  })),

  makeService({
    id: 'diseno-cejas',
    name: 'Diseño de Cejas',
    category: 'cejas',
    description: 'Medición y diseño personalizado según las facciones del rostro.',
    priceFrom: 150,
    duration: 35,
    tags: ['cejas', 'rapido'],
    image: '/images/maquillaje1.webp'
  }),
  makeService({
    id: 'depilacion-cejas',
    name: 'Depilación de Cejas',
    category: 'cejas',
    description: 'Eliminación de vello para definir la forma de la ceja con un acabado limpio.',
    priceFrom: 120,
    duration: 30,
    tags: ['cejas', 'rapido'],
    image: '/images/maquillaje1.webp'
  }),
  makeService({
    id: 'laminado-cejas',
    name: 'Laminado de Cejas',
    category: 'cejas',
    description: 'Procedimiento que alinea y fija el vello para una apariencia más abundante y ordenada.',
    priceFrom: 450,
    duration: 60,
    tags: ['cejas'],
    image: '/images/maquillaje1.webp'
  }),
  makeService({
    id: 'planchado-cejas',
    name: 'Planchado de Cejas',
    category: 'cejas',
    description: 'Control y dirección del vello para una apariencia ordenada.',
    priceFrom: 350,
    duration: 50,
    tags: ['cejas'],
    image: '/images/maquillaje1.webp'
  }),
  makeService({
    id: 'pigmentacion-temporal-cejas',
    name: 'Pigmentación Temporal',
    category: 'cejas',
    description: 'Realce temporal del color y definición de las cejas.',
    priceFrom: 150,
    duration: 35,
    tags: ['cejas', 'rapido'],
    image: '/images/maquillaje1.webp'
  }),

  makeService({
    id: 'maquillaje-social',
    name: 'Maquillaje Social',
    category: 'maquillaje',
    description: 'Maquillaje profesional para eventos sociales y ocasiones especiales.',
    priceFrom: 700,
    priceLabel: 'Desde $700',
    duration: 75,
    tags: ['maquillaje', 'evento'],
    image: '/images/maquillaje1.webp',
    badge: 'popular'
  }),
  makeService({
    id: 'maquillaje-glam',
    name: 'Maquillaje Glam',
    category: 'maquillaje',
    description: 'Maquillaje de alto impacto con acabado glam para eventos especiales.',
    priceFrom: 900,
    priceLabel: 'Desde $900',
    duration: 90,
    tags: ['maquillaje', 'evento'],
    image: '/images/maquillaje1.webp'
  }),
  makeService({
    id: 'maquillaje-novias',
    name: 'Maquillaje para Novias',
    category: 'maquillaje',
    description: 'Maquillaje especializado para novias, pensado para larga duración, fotografía y emoción real.',
    priceFrom: 2500,
    priceLabel: 'Desde $2,500',
    duration: 120,
    tags: ['maquillaje', 'evento', 'premium'],
    image: '/images/maquillaje1.webp',
    badge: 'premium'
  }),
  makeService({
    id: 'maquillaje-xv-anos',
    name: 'Maquillaje para XV Años',
    category: 'maquillaje',
    description: 'Maquillaje para XV años con acabado personalizado según estilo, vestido y evento.',
    priceFrom: 1500,
    priceLabel: 'Desde $1,500',
    duration: 105,
    tags: ['maquillaje', 'evento', 'premium'],
    image: '/images/maquillaje1.webp'
  }),
  ...[
    ['maquillaje-editorial', 'Maquillaje Editorial', 'Maquillaje creativo para producciones, sesiones o conceptos visuales.'],
    ['maquillaje-artistico', 'Maquillaje Artístico', 'Maquillaje creativo y expresivo con diseños personalizados.'],
    ['maquillaje-fx', 'Maquillaje FX', 'Maquillaje de efectos especiales con cotización según diseño y complejidad.']
  ].map(([id, name, description]) => makeService({
    id,
    name,
    category: 'maquillaje',
    description,
    priceFrom: null,
    priceLabel: 'Cotización personalizada',
    duration: 120,
    tags: ['maquillaje', 'personalizado', 'cotizacion'],
    image: '/images/maquillaje1.webp'
  })),
  makeService({
    id: 'face-painting',
    name: 'Face Painting',
    category: 'maquillaje',
    description: 'Diseños de face painting personalizados para eventos o sesiones.',
    priceFrom: 100,
    priceLabel: 'Desde $100 por diseño',
    duration: 30,
    tags: ['maquillaje', 'personalizado', 'rapido'],
    image: '/images/maquillaje1.webp'
  }),

  makeService({
    id: 'corte-nino',
    name: 'Corte Niño(a)',
    category: 'cabello',
    description: 'Corte para niño o niña con acabado limpio y adecuado a su estilo.',
    priceFrom: 120,
    priceLabel: 'Desde $120',
    duration: 30,
    tags: ['cabello', 'rapido'],
    image: '/images/corte1.webp'
  }),
  makeService({
    id: 'corte-dama',
    name: 'Corte Dama',
    category: 'cabello',
    description: 'Corte de dama personalizado según rostro, estilo y necesidades del cabello.',
    priceFrom: 250,
    priceLabel: 'Desde $250',
    duration: 45,
    tags: ['cabello'],
    image: '/images/corte1.webp'
  }),
  makeService({
    id: 'corte-mantenimiento-dama',
    name: 'Corte de Mantenimiento Dama',
    category: 'cabello',
    description: 'Ideal para conservar la forma del corte actual.',
    priceFrom: 150,
    duration: 35,
    tags: ['cabello', 'rapido'],
    image: '/images/corte1.webp'
  }),
  makeService({
    id: 'corte-caballero-clasico',
    name: 'Corte Caballero Clásico',
    category: 'cabello',
    description: 'Corte clásico de caballero con acabado pulcro.',
    priceFrom: 150,
    duration: 35,
    tags: ['cabello', 'rapido'],
    image: '/images/corte1.webp'
  }),
  makeService({
    id: 'diseno-corte-caballero',
    name: 'Diseño de Corte Caballero',
    category: 'cabello',
    description: 'Incluye degradados, diseños o técnicas más elaboradas.',
    priceFrom: 250,
    duration: 50,
    tags: ['cabello', 'personalizado'],
    image: '/images/corte1.webp'
  }),
  makeService({
    id: 'corte-mantenimiento-caballero',
    name: 'Corte de Mantenimiento Caballero',
    category: 'cabello',
    description: 'Aplicable cada mes para conservar la estructura del corte.',
    priceFrom: 100,
    duration: 30,
    tags: ['cabello', 'rapido'],
    image: '/images/corte1.webp'
  }),
  makeService({
    id: 'reparacion-corte',
    name: 'Reparación de Corte',
    category: 'cabello',
    description: 'Corrección de cortes realizados previamente, con valoración del cabello y la forma.',
    priceFrom: 250,
    priceLabel: 'Desde $250',
    duration: 60,
    tags: ['cabello', 'especializado'],
    image: '/images/corte1.webp'
  }),
  makeService({
    id: 'peinado',
    name: 'Peinado',
    category: 'cabello',
    description: 'Peinado profesional para eventos, salidas o acabado especial.',
    priceFrom: 250,
    priceLabel: 'Desde $250',
    duration: 60,
    tags: ['cabello', 'evento'],
    image: '/images/peinado1.webp',
    badge: 'popular'
  }),
  makeService({
    id: 'planchado',
    name: 'Planchado',
    category: 'cabello',
    description: 'Alaciado con herramienta térmica para un acabado liso y pulido.',
    priceFrom: 200,
    priceLabel: 'Desde $200',
    duration: 45,
    tags: ['cabello'],
    image: '/images/peinado1.webp'
  }),
  makeService({
    id: 'ondulado',
    name: 'Ondulado',
    category: 'cabello',
    description: 'Ondas definidas o suaves según el estilo deseado.',
    priceFrom: 250,
    priceLabel: 'Desde $250',
    duration: 50,
    tags: ['cabello'],
    image: '/images/peinado1.webp'
  })
];

export const categories = [
  { id: 'unas', name: 'Uñas', icon: 'unas.svg' },
  { id: 'manicure', name: 'Manicure', icon: 'unas.svg' },
  { id: 'pedicure', name: 'Pedicure', icon: 'unas.svg' },
  { id: 'nail-art', name: 'Nail Art', icon: 'unas.svg' },
  { id: 'cejas', name: 'Cejas', icon: 'maquillaje.svg' },
  { id: 'maquillaje', name: 'Maquillaje', icon: 'maquillaje.svg' },
  { id: 'cabello', name: 'Cabello', icon: 'cabello.svg' }
];

export const allTags = [
  { id: 'popular', name: 'Popular' },
  { id: 'rapido', name: 'Rápido' },
  { id: 'fortalecimiento', name: 'Fortalecimiento' },
  { id: 'extensiones', name: 'Extensiones' },
  { id: 'spa', name: 'Spa' },
  { id: 'evento', name: 'Evento' },
  { id: 'personalizado', name: 'Personalizado' },
  { id: 'especializado', name: 'Especializado' },
  { id: 'premium', name: 'Premium' },
  { id: 'cotizacion', name: 'Cotización' }
];

export const amenitiesOptions = [
  {
    id: 'valoracion',
    name: 'Valoración',
    description: 'Revisión profesional incluida',
    features: [
      'Valoración profesional antes del servicio',
      'Higiene, desinfección y esterilización',
      'Atención con cita previa y anticipo'
    ]
  }
];

export const durationRanges = [
  { id: 'rapido', name: 'Rápido (< 45 min)', min: 0, max: 45 },
  { id: 'medio', name: 'Medio (45-90 min)', min: 45, max: 90 },
  { id: 'largo', name: 'Largo (> 90 min)', min: 90, max: 999 }
];

export const priceRanges = [
  { id: 'bajo', name: 'Hasta $300', min: 0, max: 300 },
  { id: 'medio', name: '$300 - $600', min: 300, max: 600 },
  { id: 'alto', name: '$600 - $1000', min: 600, max: 1000 },
  { id: 'premium', name: 'Más de $1000', min: 1000, max: 999999 },
  { id: 'cotizacion', name: 'Cotización / valoración', min: null, max: null }
];




