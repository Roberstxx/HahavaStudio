import { useMemo, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { portfolioItems, getPortfolioByCategory } from '../data/portfolio';
import { categories } from '../data/services';
import { setDocumentMeta } from '../utils/seo';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import useScrollToTop from '../hooks/useScrollToTop';
import './Gallery.css';

const Gallery = () => {
  useScrollToTop();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    setDocumentMeta({
      title: 'Galería de Resultados | Ahavah Beauty Studio',
      description:
        'Inspírate con resultados reales de Ahavah: uñas, maquillaje, peinados y transformaciones cuidadas con detalle.'
    });
  }, []);

  const availableCategories = useMemo(() => {
    const usedCategories = new Set(portfolioItems.map(item => item.category));
    return categories.filter(cat => usedCategories.has(cat.id));
  }, []);

  const filteredPortfolio = selectedCategory
    ? getPortfolioByCategory(selectedCategory)
    : portfolioItems;

  const displayPortfolio = useMemo(() => {
    const beforeAfter = filteredPortfolio.find(item => item.beforeImage && item.afterImage);
    if (!beforeAfter) return filteredPortfolio;

    return [
      beforeAfter,
      ...filteredPortfolio.filter(item => item.id !== beforeAfter.id)
    ];
  }, [filteredPortfolio]);

  const selectedCategoryName = selectedCategory
    ? availableCategories.find(cat => cat.id === selectedCategory)?.name
    : 'Todos los resultados';

  const openLightbox = (item) => setLightboxImage(item);
  const closeLightbox = () => setLightboxImage(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  const renderMedia = (item, interactive = false) => {
    if (item.beforeImage && item.afterImage) {
      return (
        <BeforeAfterSlider
          beforeImage={item.beforeImage}
          afterImage={item.afterImage}
          alt={item.title}
        />
      );
    }

    if (interactive) {
      return (
        <button
          onClick={() => openLightbox(item)}
          className="gallery-image-btn"
          aria-label={`Ver ${item.title}`}
          type="button"
        >
          <img
            src={item.image}
            alt={item.title}
            className="gallery-image"
            loading="lazy"
          />
        </button>
      );
    }

    return (
      <img
        src={item.image}
        alt={item.title}
        className="gallery-image"
        loading="lazy"
      />
    );
  };

  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />

      <main className="gallery-page">
        <section className="gallery-hero">
          <img
            src="/images/Galeria.webp"
            alt="Modelo editorial para la galería de Ahavah Beauty Studio"
            loading="eager"
          />
          <div className="gallery-hero-content">
            <span className="gallery-hero-kicker">Galería</span>
            <h1>
              <span>Nuestra inspiración</span>
              <em>eres tú.</em>
            </h1>
            <p>
              Conoce algunos de los trabajos que hemos realizado en maquillaje,
              uñas, peinados y más.
            </p>
            <p>
              Cada detalle está pensado para resaltar tu belleza natural.
            </p>
            <a href="#trabajos-galeria" className="gallery-hero-link">
              Explora nuestros trabajos
            </a>
          </div>
        </section>

        <section id="trabajos-galeria" className="gallery-results-section">
          <div className="container">
            <div className="gallery-toolbar">
              <div>
                <span className="gallery-kicker">Explora por servicio</span>
                <h2>{selectedCategoryName}</h2>
                <p>{filteredPortfolio.length} resultado{filteredPortfolio.length === 1 ? '' : 's'} disponible{filteredPortfolio.length === 1 ? '' : 's'}.</p>
              </div>

              <div className="gallery-filters" aria-label="Filtrar galería por categoría">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`filter-btn ${selectedCategory === '' ? 'active' : ''}`}
                  type="button"
                >
                  Todos
                </button>
                {availableCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    type="button"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="gallery-showcase-labels" aria-hidden="true">
              <span>Antes & después</span>
              <span>Nuestros trabajos</span>
            </div>

            <div className="gallery-grid">
              {displayPortfolio.map((item, index) => (
                <article
                  key={item.id}
                  className={`gallery-item ${item.beforeImage && item.afterImage ? 'is-before-after' : ''} ${index === 0 ? 'is-large' : ''}`}
                >
                  <div className="gallery-card-media">
                    {renderMedia(item, true)}
                    <span className="gallery-card-badge">
                      {availableCategories.find(cat => cat.id === item.category)?.name || 'Resultado'}
                    </span>
                  </div>
                  <div className="gallery-item-info">
                    {item.locationLabel && (
                      <span className="gallery-location-label">{item.locationLabel}</span>
                    )}
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {filteredPortfolio.length > 0 && (
              <div className="gallery-cta-band">
                <p>¿Lista para tu transformación?</p>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Reservar cita
                </a>
              </div>
            )}

            {filteredPortfolio.length === 0 && (
              <div className="empty-state">
                <p className="empty-state-text">
                  Aún no hay trabajos disponibles en esta categoría.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {lightboxImage && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar vista ampliada"
            type="button"
          >
            ×
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
