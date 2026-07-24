// Portfolio/gallery items
export const portfolioItems = [
  {
    id: 'boda-transformation',
    title: 'Maquillaje de Novia en Campeche',
    category: 'maquillaje',
    serviceId: 'maquillaje-evento',
    beforeImage: '/images/NoviaAntes.JPG',
    afterImage: '/images/NoviaDespues.JPG',
    description: 'Maquillaje y peinado completo para novia en Campeche, con un look romántico, elegante y preparado para larga duración.',
    locationLabel: 'Novias en Campeche',
    featured: true
  },
  {
    id: 'unas-french',
    title: 'Uñas Acrílicas Francesas en San Román',
    category: 'unas',
    serviceId: 'unas-acrilicas-naturales',
    image: '/images/unas1.webp',
    description: 'Set completo de uñas acrílicas en San Román, Campeche, con diseño francés clásico, limpio y atemporal.',
    locationLabel: 'Uñas en Campeche',
    featured: false
  },
  {
    id: 'peinado-recogido-evento',
    title: 'Peinado para Evento en Campeche',
    category: 'cabello',
    serviceId: 'peinado-recogido',
    image: '/images/peinado1.webp',
    description: 'Peinado recogido para evento en Campeche, con estructura elegante y acabado pulido.',
    locationLabel: 'Peinados en Campeche',
    featured: true
  },
  {
    id: 'maquillaje-natural',
    title: 'Maquillaje Natural en Campeche',
    category: 'maquillaje',
    serviceId: 'maquillaje-evento',
    image: '/images/maquillaje1.webp',
    description: 'Maquillaje natural en Campeche con técnica de iluminación para un resultado fresco y favorecedor.',
    locationLabel: 'Maquillaje profesional',
    featured: false
  },
  {
    id: 'corte-moderno',
    title: 'Corte Fade Moderno en Campeche',
    category: 'cabello',
    serviceId: 'corte-caballero',
    image: '/images/corte1.webp',
    description: 'Corte degradado en Campeche con textura, limpieza y acabado moderno.',
    locationLabel: 'Cortes de cabello',
    featured: false
  }
];

export const getPortfolioByCategory = (category) => {
  if (!category) return portfolioItems;
  return portfolioItems.filter(item => item.category === category);
};

export const getFeaturedPortfolio = () => {
  return portfolioItems.filter(item => item.featured);
};
