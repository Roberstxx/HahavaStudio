import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Crown, HandHeart, Sparkles } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import CardReview from '../components/CardReview';
import PolicyPreview from '../components/PolicyPreview';

import { getRecentTestimonials } from '../data/testimonials';
import { portfolioItems, getFeaturedPortfolio } from '../data/portfolio';

import { buildWhatsAppUrl } from '../utils/whatsapp';
import { setDocumentMeta, generateBeautySalonJsonLd, injectJsonLd } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';

import heroImage from '../assets/images/hero.webp';
import './Home.css';

const serviceCategories = [
  {
    title: 'U\u00f1as',
    image: '/images/unas1.webp',
    icon: '\u2726',
    items: ['Gel semipermanente', 'Rubber base', 'Polygel / Builder', 'Press on personalizadas']
  },
  {
    title: 'Cejas',
    image: '/images/maquillaje1.webp',
    icon: '\u25e0',
    items: ['Dise\u00f1o de cejas', 'Laminado', 'Pigmentaci\u00f3n temporal', 'Planchado de cejas']
  },
  {
    title: 'Maquillaje',
    image: '/images/after-boda.webp',
    icon: '\u2727',
    items: ['Social', 'Glam', 'Novias y XV a\u00f1os', 'Editorial / art\u00edstico']
  },
  {
    title: 'Cabello',
    image: '/images/corte1.webp',
    icon: '\u22c6',
    items: ['Corte', 'Peinado', 'Planchado', 'Ondulado']
  }
];

const brandValues = [
  {
    title: 'Filosof\u00eda',
    text: 'Unimos amor propio, bioseguridad y detalle para que cada cita se sienta cuidada desde el primer mensaje.',
    Icon: Sparkles
  },
  {
    title: 'Excelencia',
    text: 'Trabajamos con técnica, productos profesionales y acabados pensados para durar.',
    Icon: Crown
  },
  {
    title: 'Servicio',
    text: 'Te escuchamos y te guiamos con recomendaciones honestas antes, durante y después.',
    Icon: HandHeart
  }
];

const Home = () => {
  useScrollToTop();

  useEffect(() => {
    setDocumentMeta({
      title: 'Ahavah Beauty Studio | Belleza en San Román, Campeche',
      description:
        'Estudio de belleza en San Román, Campeche: uñas, cejas, maquillaje y cabello con atención cálida, técnica profesional y bioseguridad visible.',
      ogImage: heroImage
    });
    injectJsonLd(generateBeautySalonJsonLd());
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('main > section'));
    els.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const recentReviews = getRecentTestimonials(3);

  const HOME_GALLERY_IDS = [
    'boda-transformation',
    'peinado-recogido-evento',
    'unas-french',
  ];

  const galleryPreview = useMemo(() => {
    const picked = HOME_GALLERY_IDS
      .map(id => portfolioItems.find(it => it.id === id))
      .filter(Boolean);

    if (picked.length < 3) {
      const extras = getFeaturedPortfolio().filter(
        it => !picked.some(p => p.id === it.id)
      );
      picked.push(...extras);
    }

    if (picked.length < 3) {
      const extras2 = portfolioItems.filter(
        it => !picked.some(p => p.id === it.id)
      );
      picked.push(...extras2);
    }

    return picked.slice(0, 3).map((it, idx) => {
      const file = it.image || it.afterImage || it.beforeImage || '';
      return {
        id: it.id || `hg-${idx}`,
        title: it.title || 'Resultado Ahavah',
        src: file.startsWith('/images/') ? file : `/images/${file}`,
      };
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main>
        <section className="hero">
          <div className="hero-split">
            <div className="hero-content">
              <span className="hero-kicker">Amor en cada detalle</span>
              <h1 className="hero-title">
                <span>AHAVAH</span>
                <small>Beauty Studio</small>
              </h1>
              <p className="hero-subtitle">
                {"Más que un servicio de belleza, creamos un momento para que te sientas cuidada, segura y fiel a ti."}
              </p>

              <div className="hero-ctas">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Agenda tu cita
                </a>
                <Link to="/servicios" className="btn btn-secondary btn-lg">
                  Ver servicios
                </Link>
              </div>

              <div className="hero-proof" aria-label="Diferenciales de Ahavah">
                <span>{"Atenci\u00f3n personalizada"}</span>
                <span>Protocolos visibles</span>
                <span>Productos profesionales</span>
              </div>
            </div>

            <div className="hero-media">
              <img src={heroImage} alt="Interior de Ahavah Beauty Studio" />
              <div className="hero-media-badge">
                <strong>{"Amarse es belleza"}</strong>
                <span>{"Cuidado \u2022 Bioseguridad \u2022 Belleza"}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-16">
          <div className="container">
            <div className="section-header services-preview-header">
              <h2 className="section-title">{"Nuestros servicios"}</h2>
              <p className="section-subtitle">{"Cuidado profesional para tus manos, rostro, cabello y momentos especiales."}</p>
            </div>

            <div className="home-services-preview">
              {serviceCategories.map((category) => (
                <article key={category.title} className="home-service-category">
                  <div className="home-service-image-wrap">
                    <img src={category.image} alt={category.title} loading="lazy" />
                    <span className="home-service-icon" aria-hidden="true">{category.icon}</span>
                  </div>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/servicios" className="btn btn-primary">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        <section id="galeria" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{"Galer\u00eda"}</h2>
              <p className="section-subtitle">Resultados reales, limpios y pensados para inspirar tu próxima cita.</p>
            </div>

            <div className="home-gallery-preview">
              {galleryPreview.map((item, index) => (
                <figure key={item.id} className={`home-gallery-item home-gallery-item-${index + 1}`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = heroImage; }}
                  />
                  <figcaption>
                    <span>{index === 0 ? 'Destacado' : 'Resultado'}</span>
                    <strong>{item.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/galeria" className="btn btn-primary">{"Ver galer\u00eda completa"}</Link>
            </div>
          </div>
        </section>

        <section id="opiniones" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Lo que dicen nuestros clientes</h2>
              <p className="section-subtitle">{"Opiniones de clientas que confiaron su cuidado a Ahavah."}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {recentReviews.map((review) => (
                <CardReview key={review.id} testimonial={review} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia-amenidades" className="py-16">
          <div className="container">
            <div className="home-experience">
              <div className="home-experience-media">
                <img src={heroImage} alt="Interior de Ahavah Beauty Studio" loading="lazy" decoding="async" />
                <div className="home-experience-badge">
                  <strong>{"Cita cuidada"}</strong>
                  <span>{"Privacidad \u2022 Higiene \u2022 Detalle"}</span>
                </div>
              </div>

              <div className="home-experience-content">
                <span className="home-experience-kicker">Experiencia Ahavah</span>
                <h2 className="section-title">Tu momento, sin prisas</h2>
                <p className="section-subtitle">
                  {"Un ambiente limpio, cómodo y preparado para que disfrutes cada servicio desde que llegas hasta que sales lista."}
                </p>

                <div className="home-experience-steps" aria-label="Momentos de la experiencia Ahavah">
                  <article>
                    <span>01</span>
                    <h3>{"Te recibimos"}</h3>
                    <p>{"Escuchamos tu idea, revisamos tus necesidades y definimos juntas el mejor camino."}</p>
                  </article>
                  <article>
                    <span>02</span>
                    <h3>{"Cuidamos cada detalle"}</h3>
                    <p>{"Usamos materiales preparados, productos profesionales y protocolos visibles."}</p>
                  </article>
                  <article>
                    <span>03</span>
                    <h3>{"Sales tranquila"}</h3>
                    <p>{"Te compartimos recomendaciones para mantener tu resultado por más tiempo."}</p>
                  </article>
                </div>

                <div className="home-experience-amenities" aria-label="Amenidades">
                  <span>Wi-Fi</span>
                  <span>{"Bebidas"}</span>
                  <span>Streaming</span>
                  <span>Privacidad</span>
                </div>

                <Link to="/experiencia" className="btn btn-primary btn-sm">Ver experiencia completa</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="filosofia-conocenos" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{"Con\u00f3cenos"}</h2>
              <p className="section-subtitle">
                {"Nuestra filosofía une amor propio, bioseguridad, detalle y servicio profesional."}
              </p>
            </div>

            <div className="home-brand-values" aria-label="Valores de Ahavah">
              {brandValues.map(({ Icon, ...value }) => (
                <article key={value.title} className="home-brand-value">
                  <span className="home-brand-value-icon" aria-hidden="true">
                    <Icon size={30} strokeWidth={1.6} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>

            <div className="home-brand-values-action">
              <Link to="/conocenos" className="btn btn-primary btn-sm">Conoce el estudio</Link>
            </div>
          </div>
        </section>

        <section id="politicas-seguridad" className="py-16">
          <div className="container">
            <PolicyPreview />
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Preguntas frecuentes</h2>
              <p className="section-subtitle">{"Resolvemos tus dudas más comunes antes de agendar."}</p>
            </div>

            <div className="grid md:grid-cols-3">
              <article className="card">
                <h3 className="mb-2">{"\u00bfC\u00f3mo reservo?"}</h3>
                <p>Por WhatsApp o desde Contacto. Confirmamos fecha y hora con anticipo.</p>
              </article>
              <article className="card">
                <h3 className="mb-2">{"\u00bfQu\u00e9 medidas de higiene aplican?"}</h3>
                <p>{"Esterilizaci\u00f3n por cliente y superficies desinfectadas en cada servicio."}</p>
              </article>
              <article className="card">
                <h3 className="mb-2">{"\u00bfFormas de pago?"}</h3>
                <p>{"Efectivo y transferencia. Consulta pol\u00edticas para m\u00e1s detalles."}</p>
              </article>
            </div>

            <div className="text-center mt-8">
              <Link to="/faq" className="btn btn-primary">Ver todas las preguntas</Link>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Contacto / Reserva</h2>
              <p className="section-subtitle">
                {"Agenda por WhatsApp o escríbenos. Aquí encuentras nuestras redes, horarios y ubicación."}
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center gap-3">
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Agendar por WhatsApp
                </a>
                <Link to="/contacto" className="btn btn-outline">Ir a Contacto</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
