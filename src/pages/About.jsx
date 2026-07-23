import { useEffect } from 'react';
import { Crown, Eye, Feather, Flower2, HandHeart, Heart, Mountain, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import stylistImage from '../assets/images/hero.webp';
import useScrollToTop from '../hooks/useScrollToTop';
import './About.css';

const values = [
  {
    title: 'Amor',
    text: 'Cada servicio nace del respeto, la empatía y el deseo genuino de cuidarte.',
    Icon: Heart
  },
  {
    title: 'Excelencia',
    text: 'Cuidamos la técnica, los productos y los acabados para ofrecer resultados consistentes.',
    Icon: Crown
  },
  {
    title: 'Bienestar',
    text: 'Preparamos un ambiente cómodo, limpio y tranquilo para que puedas disfrutar tu cita.',
    Icon: Flower2
  },
  {
    title: 'Autoestima',
    text: 'Realzamos tu belleza natural para que te mires con seguridad, calma y amor propio.',
    Icon: Sparkles
  },
  {
    title: 'Servicio',
    text: 'Te acompañamos con atención personalizada antes, durante y después de tu visita.',
    Icon: HandHeart
  }
];

const About = () => {
  useScrollToTop();

  useEffect(() => {
    setDocumentMeta({
      title: 'Conócenos | Ahavah Beauty Studio',
      description: 'Conoce Ahavah Beauty Studio, estudio de belleza en San Román, Campeche, creado desde el amor, la técnica profesional y el cuidado real.'
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="about-page">
        <section className="about-cover-poster" aria-label="Conócenos, servicios únicos">
          <img
            src="/images/Conocenos.png"
            alt="Editorial visual de Ahavah Beauty Studio"
            loading="eager"
          />
          <div className="about-cover-poster__text">
            <h1>CONÓCENOS</h1>
            <p>SERVICIOS ÚNICOS</p>
          </div>
        </section>

        <section className="about-brand-hero">
          <div className="container about-brand-grid">
            <div className="about-brand-copy">
              <span className="about-eyebrow">Ahavah Beauty Studio</span>
              <h1>Amarse es belleza</h1>
              <p>
                Nuestra marca existe para recordarte que cuidarte también es una
                forma de amor: cercana, consciente y profundamente personal.
              </p>
              <p>
                Te recomendamos lo que realmente necesitas, no lo más costoso,
                para que invertir en ti se sienta claro, honesto y sin culpa.
              </p>
            </div>

            <div className="about-portrait">
              <img src={stylistImage} alt="Interior de Ahavah Beauty Studio" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="about-section about-story-section">
          <div className="container about-intro">
            <div>
              <span className="about-section-kicker">Sobre nosotros</span>
              <h2>Una experiencia de belleza con cuidado real</h2>
            </div>
            <div className="about-story">
              <p>
                Somos un estudio de belleza especializado en crear experiencias
                personalizadas que combinan profesionalismo, técnica, bioseguridad
                y atención humana.
              </p>
              <p>
                Cada detalle está pensado para que te sientas cómoda, segura y
                escuchada. Nuestra prioridad es que cada visita se convierta en un
                momento de bienestar, confianza y cuidado personal.
              </p>
              <p>
                Aquí no eres una cita más: eres parte de una experiencia creada para
                desconectarte del mundo, sentirte tranquila y recordar lo valiosa que eres.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section about-quote-band">
          <div className="container">
            <p>
              La belleza no debería sentirse fría, superficial o apresurada. El cuidado
              personal también es una necesidad emocional.
            </p>
            <strong>"Amarse es belleza."</strong>
          </div>
        </section>

        <section className="about-section about-mission-section">
          <div className="container about-mission-grid">
            <article>
              <span className="about-mission-divider" aria-hidden="true">♥</span>
              <span className="about-mission-icon" aria-hidden="true">
                <Mountain size={58} strokeWidth={1.45} />
              </span>
              <span>Misión</span>
              <h2>Fortalecer autoestima, bienestar y confianza</h2>
              <p>
                Brindar experiencias de belleza personalizadas que fortalezcan
                la autoestima, la seguridad y el bienestar emocional de cada mujer.
                Ofrecemos atención cálida, excelencia profesional y un espacio
                donde puedan sentirse verdaderamente cuidadas.
              </p>
            </article>
            <article>
              <span className="about-mission-divider" aria-hidden="true">♥</span>
              <span className="about-mission-icon" aria-hidden="true">
                <Eye size={62} strokeWidth={1.45} />
              </span>
              <span>Visión</span>
              <h2>Transformar la experiencia tradicional del salón</h2>
              <p>
                Ser un estudio de belleza reconocido por transformar la experiencia
                tradicional del salón en un espacio de confianza, paz y atención
                personalizada, destacando por nuestra calidad humana, excelencia
                y amor por el detalle.
              </p>
            </article>
          </div>
        </section>

        <section className="about-promise-section" aria-label="Nuestra promesa">
          <div className="container about-promise">
            <div className="about-promise-copy">
              <span className="about-section-kicker">Nuestra promesa</span>
              <h2>Amor en cada detalle, belleza en cada experiencia</h2>
              <p>
                Cada cita en Ahavah está respaldada por cuidado real: escuchamos lo
                que necesitas, trabajamos con técnica y protegemos tu bienestar en
                todo momento.
              </p>
            </div>
            <div className="about-promise-pillars">
              <article>
                <span>01</span>
                <h3>Amor</h3>
                <p>Amor por nuestro trabajo, por el arte de embellecer y por cada persona que confía en nosotras.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Profesionalismo</h3>
                <p>Técnicas actuales, productos de calidad y capacitación constante para ofrecer mejores resultados.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Seguridad</h3>
                <p>Protocolos de higiene, desinfección y esterilización para que disfrutes tu servicio con tranquilidad.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section about-values-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Valores de la marca</h2>
              <p className="section-subtitle">
                La forma en que trabajamos nace de lo que creemos.
              </p>
            </div>
            <div className="about-values-grid">
              {values.map(({ Icon, ...value }) => (
                <article key={value.title} className="about-value-card">
                  <span className="about-value-icon" aria-hidden="true">
                    <Icon size={34} strokeWidth={1.6} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-difference-section">
          <div className="container about-difference">
            <div>
              <span className="about-section-kicker">Nuestra diferencia</span>
              <h2>Cuidado accesible, organizado y libre de estrés</h2>
              <p>
                Entendemos que cuidarte también debe sentirse posible. Por eso buscamos
                alternativas claras para planificar servicios futuros sin comprometer tu
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

        <section className="about-section about-why-section">
          <div className="container about-why">
            <div className="about-why-heading">
              <span className="about-section-kicker">Por qué elegir Ahavah</span>
              <h2>No vienes solo a cambiar tu look. Vienes a sentirte segura.</h2>
            </div>
            <div className="about-why-list">
              <p><strong>Te escuchamos</strong><span>Cada servicio inicia entendiendo tu estilo, tus dudas y lo que quieres lograr.</span></p>
              <p><strong>Respetamos tu tiempo</strong><span>Trabajamos con cita previa para darte atención tranquila y sin prisas.</span></p>
              <p><strong>Cuidamos tu salud</strong><span>Usamos productos preparados, herramientas limpias y protocolos visibles.</span></p>
              <p><strong>Buscamos resultados naturales</strong><span>Cuidamos que el resultado se vea elegante, favorecedor y fiel a ti.</span></p>
            </div>
          </div>
        </section>

        <section className="about-brand-question" aria-label="Qué significa nuestra marca">
          <img
            src="/images/MarcaQ.png"
            alt="Collage visual de Ahavah Beauty Studio"
            loading="lazy"
          />
          <div className="about-brand-question__overlay">
            <h2>
              <span>¿Qué significa</span>
              <span>nuestra marca?</span>
            </h2>
            <p>@ AHAVAH BEAUTY STUDIO</p>
          </div>
        </section>

        <section className="about-section about-meaning-section">
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
              <strong>A-ja-va</strong>
              <small>ah-ha-VAH</small>
              <p>
                Simboliza servicio hacia las personas, la familia, el trabajo y el
                propósito de vida.
              </p>
            </article>
          </div>
        </section>

        <section className="about-logo-section" aria-label="Nuestro logo">
          <div className="about-logo-showcase">
            <div className="about-logo-copy">
              <p className="about-logo-kicker">Ahavah Beauty Studio</p>
              <h2>
                <span>Nuestro</span>
                <span>logo</span>
              </h2>
              <div className="about-logo-rows">
                <article>
                  <span aria-hidden="true"><Eye size={28} strokeWidth={1.5} /></span>
                  <p>Ojos bien abiertos y atentos para ver más allá de lo físico.</p>
                </article>
                <article>
                  <span aria-hidden="true"><Feather size={28} strokeWidth={1.5} /></span>
                  <p>Caligrafía que representa nuestra filosofía, suavidad y cuidado.</p>
                </article>
                <article>
                  <span aria-hidden="true"><Heart size={28} strokeWidth={1.5} /></span>
                  <p>Beauty Studio como complemento para identificarnos en el rubro.</p>
                </article>
              </div>
            </div>

            <div className="about-logo-art">
              <img src="/images/LogoH.svg" alt="Logo de Ahavah Beauty Studio" loading="lazy" />
              <p>Marca registrada ante el IMPI</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;
