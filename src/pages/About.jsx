import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import stylistImage from '../assets/images/hero.webp';
import useScrollToTop from '../hooks/useScrollToTop';
import './About.css';

const values = [
  {
    title: 'Excelencia',
    text: 'Buscamos la mejora continua en cada servicio, capacitación y experiencia que ofrecemos.'
  },
  {
    title: 'Integridad',
    text: 'Actuamos con honestidad, ética y transparencia, cuidando la confianza de nuestras clientas.'
  },
  {
    title: 'Enfoque al cliente',
    text: 'Escuchamos sus necesidades, las comprendemos y personalizamos cada experiencia.'
  },
  {
    title: 'Trabajo en equipo',
    text: 'Creemos en la colaboración y el respeto para alcanzar resultados extraordinarios.'
  },
  {
    title: 'Pasión',
    text: 'Amamos lo que hacemos y buscamos generar un impacto positivo en la vida de nuestras clientas.'
  }
];

const testimonials = [
  {
    name: 'Lorna Alvarado',
    quote: 'Me hace sentir muy relajada que puedo sentirme bonita sin presión.'
  },
  {
    name: 'Mariana Napolitani',
    quote: 'Puedo relajarme en un lugar muy cómodo y femenino; me hace sentir que estoy en mi cuarto y no quiero salir al terminar mi servicio.'
  },
  {
    name: 'Claudia Álvarez',
    quote: 'No me considero una clienta más; me escuchan y entienden lo que quiero en mis servicios sin prisa.'
  }
];

const About = () => {
  useScrollToTop();

  useEffect(() => {
    setDocumentMeta({
      title: 'Conócenos | Ahavah Beauty Studio',
      description: 'Conoce la esencia, propósito, filosofía, valores y diferencia de Ahavah Beauty Studio.'
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="about-page">
        <section className="about-brand-hero">
          <div className="container about-brand-grid">
            <div className="about-brand-copy">
              <span className="about-eyebrow">Ahavah Beauty Studio</span>
              <h1>Amarse es belleza</h1>
              <p>
                Nuestra marca existe para servir con amor, excelencia, bienestar,
                confianza y belleza con propósito.
              </p>
              <p>
                Facilitamos que puedas cuidarte sin culpa por invertir en ti:
                recomendamos lo que realmente necesitas, no lo más caro.
              </p>
            </div>

            <div className="about-portrait">
              <img src={stylistImage} alt="Interior de Ahavah Beauty Studio" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container about-intro">
            <div>
              <span className="about-section-kicker">Sobre nosotros</span>
              <h2>Una experiencia de belleza con cuidado real</h2>
            </div>
            <div className="about-story">
              <p>
                Somos un studio de belleza especializado en crear experiencias
                personalizadas que combinan profesionalismo, excelencia técnica,
                bioseguridad y atención humana.
              </p>
              <p>
                Cada detalle está pensado para que nuestras clientas se sientan
                cómodas, seguras y satisfechas. Nuestra prioridad es que cada visita
                se convierta en un momento de bienestar, confianza y cuidado personal.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section about-quote-band">
          <div className="container">
            <p>
              La belleza no debe sentirse fría, superficial o apresurada. El cuidado
              personal también es una necesidad emocional.
            </p>
            <strong>"Amarse es belleza."</strong>
          </div>
        </section>

        <section className="about-section">
          <div className="container about-mission-grid">
            <article>
              <span>Misión</span>
              <h2>Fortalecer autoestima, bienestar y confianza</h2>
              <p>
                Brindamos experiencias de belleza personalizadas, profesionales,
                seguras y de alta calidad en un ambiente cálido y humano.
              </p>
            </article>
            <article>
              <span>Visión</span>
              <h2>Transformar la experiencia tradicional del salón</h2>
              <p>
                Queremos ser un studio reconocido por unir belleza, bienestar
                emocional, innovación, bioseguridad y atención personalizada.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Valores de la marca</h2>
              <p className="section-subtitle">
                La forma en que trabajamos nace de lo que creemos.
              </p>
            </div>
            <div className="about-values-grid">
              {values.map((value) => (
                <article key={value.title} className="about-value-card">
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container about-difference">
            <div>
              <span className="about-section-kicker">Nuestra diferencia</span>
              <h2>Cuidado accesible, organizado y libre de estrés</h2>
              <p>
                Entendemos que la situación económica actual requiere soluciones
                responsables. Por eso desarrollamos sistemas de ahorro, suscripciones
                y fondos de belleza para planificar servicios futuros sin afectar la
                economía personal.
              </p>
            </div>
            <ul>
              <li>Recomendaciones honestas según lo que realmente necesitas.</li>
              <li>Seguimiento real después de cada servicio.</li>
              <li>Protocolos de higiene, desinfección y esterilización.</li>
              <li>Atención personalizada en un ambiente cálido y libre de juicios.</li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <div className="container about-meaning-grid">
            <article className="about-meaning-main">
              <span className="about-section-kicker">Qué significa Ahavah</span>
              <h2>Una marca construida desde el amor</h2>
              <p>
                Ahavah nace de una convicción profunda: la verdadera belleza nace
                del amor. Para nosotras, Dios es amor; Él es fuente de inspiración,
                talentos y propósito.
              </p>
              <p>
                Ahavah es una palabra hebrea que representa amor con acciones,
                cariño, bondad y conexión con los demás.
              </p>
            </article>
            <article className="about-pronunciation">
              <span>Se pronuncia</span>
              <strong>A-ja-vá</strong>
              <small>ah-ha-VAH</small>
              <p>
                Simboliza servicio hacia las personas, la familia, el trabajo y el
                propósito de vida.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section">
          <div className="container about-logo-box">
            <div>
              <span className="about-section-kicker">Nuestro logo</span>
              <h2>Mirar más allá de lo físico</h2>
            </div>
            <ul>
              <li>Ojos atentos para ver más allá de lo exterior.</li>
              <li>Una caligrafía que refleja nuestra filosofía.</li>
              <li>"Beauty Studio" como identificador dentro del sector.</li>
              <li>Marca registrada ante el IMPI.</li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Lo que sienten nuestras clientas</h2>
              <p className="section-subtitle">
                Experiencias reales que describen el corazón de Ahavah.
              </p>
            </div>
            <div className="about-testimonials">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name}>
                  <p>"{testimonial.quote}"</p>
                  <strong>{testimonial.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-contact-strip">
          <div className="container">
            <div>
              <span className="about-section-kicker">Contáctanos</span>
              <h2>Atención con cita confirmada</h2>
              <p>
                Estamos ubicados muy cerca del malecón, justo atrás de los restaurantes.
                Nuestra atención es únicamente por medio de citas confirmadas con 48
                horas de anticipación.
              </p>
            </div>
            <address>
              <a href="tel:+529812061662">981 206 16 62</a>
              <a href="mailto:ahavahbeaudystudiomx@gmail.com">ahavahbeaudystudiomx@gmail.com</a>
              <span>Calle 10 entre Victoria y Abasolo, San Román</span>
              <span>@ahavahbeaudystudio</span>
            </address>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
