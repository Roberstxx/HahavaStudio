import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';
import './Experience.css';

const amenities = [
  { icon: '•', title: 'Wifi ilimitado', description: 'Conexión estable para trabajar, esperar o compartir tu experiencia.' },
  { icon: '•', title: 'Aire acondicionado', description: 'Clima agradable durante todo el año para tu comodidad.' },
  { icon: '•', title: 'TV con streaming', description: 'Entretenimiento y playlists para acompañar tu cita.' },
  { icon: '•', title: 'Snacks y bebidas', description: 'Detalles de cortesía para que tu visita se sienta más cómoda.' },
  { icon: '•', title: 'Estacionamiento', description: 'Espacio disponible para clientas con cita confirmada.' },
  { icon: '•', title: 'Música ambiental', description: 'Selección sonora pensada para un ambiente tranquilo.' },
  { icon: '•', title: 'Higiene visible', description: 'Protocolos claros y herramientas preparadas por cliente.' },
  { icon: '•', title: 'Privacidad', description: 'Atención personalizada en un entorno cómodo y reservado.' },
  { icon: '•', title: 'Cargadores', description: 'Conexiones disponibles para que no tengas que preocuparte.' },
  { icon: '•', title: 'Pago en línea', description: 'Opciones de pago prácticas según disponibilidad.' }
];

const premiumFeatures = [
  'Bebida de cortesía',
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
      description: 'Descubre las amenidades y detalles que preparamos para que tu cita en Ahavah sea cómoda, segura y especial.'
    });
  }, []);

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
              Cada visita está pensada para que te sientas tranquila, acompañada
              y cuidada desde que llegas hasta que termina tu servicio.
            </p>
          </header>

          <section
            className="amenities-grid"
            ref={gridRef}
            data-count={`${amenityCount} amenidades`}
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
                Para bodas, XV años y eventos importantes, diseñamos una experiencia
                más pausada, organizada y cuidada para que disfrutes el proceso sin estrés.
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
