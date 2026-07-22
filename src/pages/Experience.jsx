import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';
import './Experience.css';

const amenities = [
  { icon: '📶', title: 'Wifi ilimitado', description: 'Conexión estable para trabajar o compartir tu experiencia.' },
  { icon: '❄️', title: 'Aire acondicionado', description: 'Clima agradable todo el año para tu comodidad.' },
  { icon: '📺', title: 'TV con streaming', description: 'Netflix, Spotify y playlists personalizadas.' },
  { icon: '🍰', title: 'Snacks y bebidas', description: 'Delicias artesanales y bebidas preparadas al momento.' },
  { icon: '🅿️', title: 'Estacionamiento', description: 'Espacio reservado para clientas con cita confirmada.' },
  { icon: '🎶', title: 'Música ambiental', description: 'Curaduría sonora pensada para relajarte.' },
  { icon: '🧼', title: 'Higiene visible', description: 'Protocolos abiertos y herramientas selladas por cliente.' },
  { icon: '🪟', title: 'Privacidad', description: 'Cabinas semi privadas y atención personalizada.' },
  { icon: '🔌', title: 'Cargadores', description: 'Conexiones USB-C, Lightning y adaptadores disponibles.' },
  { icon: '💳', title: 'Pago en línea', description: 'Links de pago y terminal contactless.' }
];

const premiumFeatures = [
  'Champán o vino de cortesía',
  'Kit exclusivo de retoque',
  'Asistencia personalizada',
  'Fotógrafo profesional opcional',
  'Preparación sin estrés'
];

const Experience = () => {
  useScrollToTop();
  const gridRef = useRef(null);

  useEffect(() => {
    setDocumentMeta({ 
      title: 'Experiencia & Amenidades | Ahavah Beauty Studio',
      description: 'Descubre todas las amenidades y servicios premium que ofrecemos para hacer tu experiencia de belleza inolvidable.'
    });
  }, []);

  // Contador dinámico para el grid
  const amenityCount = amenities.length;

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="experience-page">
        <div className="container py-12">
          <header className="page-header">
            <h1 className="page-title">Experiencia & Amenidades</h1>
            <p className="page-subtitle">
              Cada visita está pensada para consentirte con detalles premium y un ambiente seguro.
              Descubre todo lo que tenemos preparado para ti.
            </p>
          </header>

          <section 
            className="amenities-grid" 
            ref={gridRef}
            data-count={`${amenityCount} amenities`}
            aria-label="Amenidades disponibles"
          >
            {amenities.map((item, index) => (
              <article 
                key={item.title} 
                className="amenity-tile"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className="amenity-icon" aria-hidden="true">{item.icon}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </section>

          <section className="premium-highlight" aria-label="Experiencia premium para novias y eventos">
            <div className="premium-highlight-content">
              <span className="premium-badge">✦ Premium</span>
              <h2>Para novias y eventos especiales</h2>
              <p>
                Queremos que tu día especial sea perfecto. Por eso, incluimos servicios exclusivos
                para que vivas una experiencia inolvidable llena de detalles y cuidado personalizado.
              </p>
              
              <div className="premium-features">
                {premiumFeatures.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
              
              <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--fs-sm)', color: 'var(--clr-gray-500)' }}>
                * Aplican términos y condiciones. Consulta disponibilidad al agendar tu cita.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;