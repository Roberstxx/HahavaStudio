import { useEffect, useRef } from 'react';
import { Car, Coffee, CreditCard, Lock, Music, Plug, ShieldCheck, Snowflake, Tv, Wifi } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';
import './Experience.css';

const amenities = [
  { Icon: Wifi, title: 'Wifi ilimitado', description: 'Conexión estable para trabajar, esperar o compartir tu experiencia.' },
  { Icon: Snowflake, title: 'Aire acondicionado', description: 'Clima agradable durante todo el año para tu comodidad.' },
  { Icon: Tv, title: 'TV con streaming', description: 'Entretenimiento y playlists para acompañar tu cita.' },
  { Icon: Coffee, title: 'Snacks y bebidas', description: 'Detalles de cortesía para que tu visita se sienta más cómoda.' },
  { Icon: Car, title: 'Estacionamiento', description: 'Espacio disponible para clientas con cita confirmada.' },
  { Icon: Music, title: 'Música ambiental', description: 'Selección sonora pensada para un ambiente tranquilo.' },
  { Icon: ShieldCheck, title: 'Higiene visible', description: 'Protocolos claros y herramientas preparadas por cliente.' },
  { Icon: Lock, title: 'Privacidad', description: 'Atención personalizada en un entorno cómodo y reservado.' },
  { Icon: Plug, title: 'Cargadores', description: 'Conexiones disponibles para que no tengas que preocuparte.' },
  { Icon: CreditCard, title: 'Pago en línea', description: 'Opciones de pago prácticas según disponibilidad.' }
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
        <section className="experience-cover-poster" aria-label="Nuestras amenidades">
          <img
            src="/images/Amenidades.webp"
            alt="Modelo editorial para la experiencia de amenidades Ahavah"
            loading="eager"
          />
          <div className="experience-cover-poster__content">
            <span>Amenidades</span>
            <h1>
              <span>Nuestras</span>
              <span>Amenidades</span>
            </h1>
            <p>
              Pequeños detalles que hacen especial cada visita. Pensamos en tu
              comodidad para que solo te preocupes por disfrutar.
            </p>
          </div>
        </section>

        <div className="container py-12">
          <section className="experience-local-band" aria-label="Experiencia de belleza en Campeche">
            <span>San Román, Campeche</span>
            <h2>Tu lugar para relajarte y cuidarte</h2>
            <p>
              Una experiencia de belleza en Campeche pensada para que tu cita se
              sienta cómoda, limpia y sin prisas.
            </p>
          </section>

          <section
            className="amenities-grid"
            ref={gridRef}
            data-count={`${amenityCount} amenidades`}
            aria-label="Amenidades disponibles"
          >
            {amenities.map(({ Icon, title, description }, index) => (
              <article
                key={title}
                className="amenity-tile"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className="amenity-icon" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.6} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
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
