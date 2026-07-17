export const testimonials = [
  {
    id: 1,
    name: 'Alexandra pastrana',
    service: 'Servicios: Embellecimiento de cejas, U\u00f1as acr\u00edlicas, Sal\u00f3n de manicura, Depilaci\u00f3n de cejas con hilo, Pedicura y reservas online',
    rating: 5,
    comment: 'Excelente atenci\u00f3n al llegar. La estilista es muy profesional en todos los aspectos. Recomiendo ampliamente el lugar e igual esta muy cute el lugar.',
    date: '2025-07-03',
    dateLabel: 'Hace un a\u00f1o'
  },
  {
    id: 2,
    name: 'Roberto Martinez',
    service: 'U\u00f1as',
    rating: 5,
    comment: 'Fui a preguntar por direcciones y termin\u00e9 con u\u00f1as nuevas. Fue r\u00e1pido y me qued\u00f3 fabulosa.',
    date: '2025-07-02',
    dateLabel: 'Hace un a\u00f1o'
  },
  {
    id: 3,
    name: 'Emilio Sordo',
    service: 'Servicio de peluquer\u00eda y belleza para hombres',
    rating: 5,
    comment: 'Un excelente lugar con atenci\u00f3n por sobre todas las cosas, higi\u00e9nico, profesional y totalmente equivocado.',
    date: '2025-07-01',
    dateLabel: 'Hace un a\u00f1o'
  }
];

export const getRecentTestimonials = (count = 3) => {
  return [...testimonials]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

export const getAverageRating = () => {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return (sum / testimonials.length).toFixed(1);
};
