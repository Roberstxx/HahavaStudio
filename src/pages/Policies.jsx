// Policies.jsx (Corregido para coincidir con la estructura de Home)

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import './Policies.css';
import useScrollToTop from '../hooks/useScrollToTop';

const policyCards = [
  {
    title: 'Agendamiento',
    icon: '\uD83D\uDCC5',
    points: [
      'Atención únicamente con cita previa.',
      'Las citas se confirman con anticipo del 30%.',
      'Cancelaciones o cambios con 24h de anticipación.',
      'Tolerancia máxima de 15 minutos.'
    ]
  },
  {
    title: 'Seguridad',
    icon: '\uD83D\uDEE1\uFE0F',
    points: [
      'No se permiten acompañantes dentro de cabina.',
      'No se permite el ingreso de mascotas.',
      'Reagendamos si presentas síntomas, lesiones visibles o infecciones activas.'
    ]
  },
  {
    title: 'Antes de tu cita',
    icon: '\uD83E\uDDF4',
    points: [
      'Llega con la zona limpia y sin cremas, aceites o residuos.',
      'Avísanos si requieres remoción o servicio adicional.',
      'Trae referencias de estilo para personalizar tu experiencia.'
    ]
  }
];

const safetyBlocks = [
  {
    icon: '\uD83D\uDC69\uD83C\uDFFB\u200D\u2695\uFE0F',
    title: 'Profesional',
    items: ['Uniforme antifluidos', 'Guantes desechables', 'Cofia', 'Cubrebocas o careta', 'Calzado cerrado']
  },
  {
    icon: '\uD83E\uDD0D',
    title: 'Cliente',
    items: ['Diagnóstico previo a cada cita', 'Materiales desechables', 'Toallas limpias y sanitizadas', 'Lavado según el tratamiento']
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'Instrumental',
    items: ['Limpieza profunda', 'Desinfección de grado quirúrgico', 'Esterilización por cliente', 'Herramientas desechables cuando corresponde']
  },
  {
    icon: '\uD83C\uDF2C\uFE0F',
    title: 'Ambiente',
    items: ['Ventilación constante', 'Superficies desinfectadas', 'Excelente iluminación', 'Gestión responsable de residuos']
  }
];

const extendedPolicies = [
  'Reagendar después de la tolerancia implica reprogramar con nuevo anticipo.',
  'Si no podemos contactarte al llegar tu hora, liberamos el espacio para la siguiente persona.',
  'Pagos aceptados: transferencia, tarjeta y links de pago seguros.',
  'Contamos con historial clínico básico para detectar alergias o restricciones.',
  'Los anticipos no son reembolsables pero pueden transferirse una vez dentro del mes en curso.',
  'No realizamos servicios sobre uñas o piel con infecciones activas, hongos o lesiones sin valoración previa.'
];

const investmentItems = [
  'Materiales desechables.',
  'Instrumental correctamente esterilizado.',
  'Productos certificados.',
  'Espacios desinfectados.',
  'Protocolos de higiene.',
  'Seguridad para tu salud.'
];

const biosecurityPrinciples = [
  {
    title: 'Protección',
    text: 'Cuidamos tanto al cliente como al profesional mediante protocolos estrictos.'
  },
  {
    title: 'Calidad',
    text: 'Trabajamos únicamente con productos certificados y de alta calidad.'
  },
  {
    title: 'Responsabilidad',
    text: 'Cada procedimiento sigue normas de higiene sin excepciones.'
  }
];

const PoliciesModal = ({ open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <div className="policies-modal" role="dialog" aria-modal="true" aria-labelledby="policies-modal-title">
      <div className="policies-modal-backdrop" onClick={onClose} />
      <div className="policies-modal-content" role="document">
        <button className="policies-modal-close" type="button" onClick={onClose} aria-label="Cerrar políticas completas">✕</button>
        <h2 id="policies-modal-title">Políticas completas</h2>
        <ul>{extendedPolicies.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>,
    document.body
  );
};

const Policies = () => {
  useScrollToTop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSafetySectionVisible, setSafetySectionVisible] = useState(false);
  const safetySectionRef = useRef(null);

  useEffect(() => {
    setDocumentMeta({
      title: 'Políticas y Bioseguridad | Ahavah Beauty Studio',
      description: 'Conoce nuestras políticas, recordatorios y protocolos de bioseguridad para una experiencia segura y confiable.'
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setSafetySectionVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    );
    const currentRef = safetySectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div className="policies-page-background">
      <Header />
      <WhatsAppFloat />
      <main className="info-page">
        <section className="info-section policies-background" aria-labelledby="policies-heading">
          <div className="container py-12">
            <div className="section-header">
              <h1 className="hero-title">Políticas</h1>
              <p className="hero-subtitle">Tu bienestar y confianza son nuestra prioridad.</p>
            </div>

            <div className="section-header">
              <h2 id="policies-heading" className="section-title">Nuestras Políticas</h2>
            </div>

            <div className="info-grid">
              {policyCards.map(card => (
                <article key={card.title} className="info-card">
                  <div className="info-card-icon">{card.icon}</div>
                  <h2>{card.title}</h2>
                  <ul className="policy-list">{card.points.map(point => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="policies-footer">
              <p className="policies-note">Tu tiempo es valioso y el nuestro también. Ayúdanos a cuidarlo.</p>
              <button className="btn btn-outline" type="button" onClick={() => setIsModalOpen(true)}>Ver todas las políticas</button>
            </div>
          </div>
        </section>

        <section
          ref={safetySectionRef}
          className={`info-section safety-background reveal-section ${isSafetySectionVisible ? 'is-visible' : ''}`}
          aria-labelledby="safety-heading"
        >
          <div className="container py-12">
            <div className="section-header">
              <h2 id="safety-heading" className="section-title">Bioseguridad</h2>
              <p className="section-subtitle">La belleza empieza por la salud.</p>
            </div>

            <div className="info-grid">
              {safetyBlocks.map(block => (
                <article key={block.title} className="info-card">
                  <div className="info-card-icon">{block.icon}</div>
                  <h2>{block.title}</h2>
                  <ul className="safety-list">{block.items.map(item => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="info-section policy-detail-section">
          <div className="container py-12">
            <div className="section-header">
              <h2 className="section-title">Qué es la bioseguridad</h2>
              <p className="section-subtitle">
                Son las prácticas que previenen, reducen y controlan riesgos sanitarios durante cada servicio.
              </p>
            </div>

            <div className="policy-detail-grid">
              <article className="policy-detail-card policy-detail-card-wide">
                <h3>Tu seguridad es parte del servicio</h3>
                <p>
                  En Ahavah Beauty Studio creemos que un servicio profesional no solo consiste en obtener
                  un excelente resultado estético, sino también en proteger tu salud durante cada procedimiento.
                </p>
                <p>
                  La bioseguridad nos permite prevenir la transmisión de bacterias, virus y hongos mediante
                  el correcto manejo de herramientas, superficies y protocolos de higiene.
                </p>
              </article>

              <article className="policy-detail-card">
                <h3>Qué estás pagando realmente</h3>
                <ul className="safety-list">
                  {investmentItems.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="info-section policy-detail-section policy-principles-section">
          <div className="container py-12">
            <div className="section-header">
              <h2 className="section-title">Nuestros principios</h2>
              <p className="section-subtitle">La bioseguridad se basa en tres compromisos fundamentales.</p>
            </div>

            <div className="policy-principles-grid">
              {biosecurityPrinciples.map(item => (
                <article key={item.title} className="policy-principle-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="policy-commitment">
              <p>
                Cada cliente recibe un servicio realizado bajo protocolos profesionales de higiene y bioseguridad,
                porque la belleza siempre debe ir acompañada de salud, confianza y responsabilidad.
              </p>
              <strong>La belleza comienza con la seguridad.</strong>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PoliciesModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Policies;


