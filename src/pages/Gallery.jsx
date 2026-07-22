import { useMemo, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { portfolioItems, getPortfolioByCategory } from '../data/portfolio';
import { categories } from '../data/services';
import { setDocumentMeta } from '../utils/seo';
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
        'Mira nuestros trabajos: transformaciones antes/después, diseños de uñas, maquillajes y peinados profesionales.'
    });
  }, []);

  const availableCategories = useMemo(() => {
    const usedCategories = new Set(portfolioItems.map(item => item.category));
    return categories.filter(cat => usedCategories.has(cat.id));
  }, []);

  const filteredPortfolio = selectedCategory
    ? getPortfolioByCategory(selectedCategory)
    : portfolioItems;

  const featuredItem = useMemo(
    () => portfolioItems.find(item => item.featured) || portfolioItems[0],
    []
  );

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
          <div className="container gallery-hero-grid">
            <div className="gallery-hero-copy">
              <span className="gallery-kicker">Resultados Ahavah</span>
              <h1>Galería de resultados</h1>
              <p>
                Una selección de trabajos reales para inspirarte antes de tu cita:
                uñas, maquillaje, peinados y transformaciones pensadas con detalle.
              </p>
              <div className="gallery-hero-stats" aria-label="Resumen de galería">
                <span><strong>{portfolioItems.length}</strong> trabajos</span>
                <span><strong>{availableCategories.length}</strong> categorías</span>
                <span><strong>{portfolioItems.filter(item => item.featured).length}</strong> destacados</span>
              </div>
            </div>

            {featuredItem && (
              <article className="gallery-featured-card">
                <div className="gallery-featured-media">
                  {renderMedia(featuredItem)}
                </div>
                <div className="gallery-featured-info">
                  <span>Resultado destacado</span>
                  <h2>{featuredItem.title}</h2>
                  <p>{featuredItem.description}</p>
                </div>
              </article>
            )}
          </div>
        </section>

        <section className="gallery-results-section">
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

            <div className="gallery-grid">
              {filteredPortfolio.map((item, index) => (
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
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {filteredPortfolio.length === 0 && (
              <div className="empty-state">
                <p className="empty-state-text">
                  No hay trabajos en esta categoría aún.
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
