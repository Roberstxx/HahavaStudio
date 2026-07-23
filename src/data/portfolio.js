// Portfolio/gallery items
export const portfolioItems = [
  {
    id: 'boda-transformation',
    title: 'Transformación de Novia',
    category: 'maquillaje',
    serviceId: 'maquillaje-evento',
    beforeImage: '/images/NoviaAntes.JPG',
    afterImage: '/images/NoviaDespues.JPG',
    description: 'Maquillaje y peinado completo para novia, con un look romántico, elegante y preparado para larga duración.',
    featured: true
  },
  {
    id: 'unas-french',
    title: 'Uñas Acrílicas Francesas',
    category: 'unas',
    serviceId: 'unas-acrilicas-naturales',
    image: '/images/unas1.webp',
    description: 'Set completo de uñas acrílicas con diseño francés clásico, limpio y atemporal.',
    featured: false
  },
  {
    id: 'peinado-recogido-evento',
    title: 'Recogido Elegante',
    category: 'cabello',
    serviceId: 'peinado-recogido',
    image: '/images/peinado1.webp',
    description: 'Peinado recogido sofisticado para evento, con estructura elegante y acabado pulido.',
    featured: true
  },
  {
    id: 'maquillaje-natural',
    title: 'Maquillaje Natural',
    category: 'maquillaje',
    serviceId: 'maquillaje-evento',
    image: '/images/maquillaje1.webp',
    description: 'Maquillaje natural con técnica de iluminación para un resultado fresco y favorecedor.',
    featured: false
  },
  {
    id: 'corte-moderno',
    title: 'Corte Fade Moderno',
    category: 'cabello',
    serviceId: 'corte-caballero',
    image: '/images/corte1.webp',
    description: 'Corte degradado con textura, limpieza y acabado moderno.',
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
