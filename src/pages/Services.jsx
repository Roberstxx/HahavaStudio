import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import FiltersBar from '../components/FiltersBar';
import CardService from '../components/CardService';
import ServiceDetailModal from '../components/ServiceDetailModal';
import { services, amenitiesOptions, categories } from '../data/services';
import { useFilters } from '../hooks/useFilters';
import { setDocumentMeta } from '../utils/seo';
import useScrollToTop from '../hooks/useScrollToTop';
import './Services.css';

const Services = () => {
  useScrollToTop();

  const [selectedService, setSelectedService] = useState(null);
  const {
    filters,
    filteredServices,
    updateFilter,
    toggleTag,
    clearFilters,
    hasActiveFilters
  } = useFilters(services);
  
  useEffect(() => {
    setDocumentMeta({
      title: 'Servicios de Belleza | Estudio Elegante',
      description: 'Catálogo completo de servicios: uñas acrílicas, maquillaje profesional, peinados elegantes, cortes y más. Todos con cita previa y anticipo.'
    });
  }, []);
  
  return (
    <div className="page-wrapper">
      <Header />
      <WhatsAppFloat />
      
      <main className="services-page">
        <section className="services-hero-section">
          <div className="container">
            <div className="services-hero">
              <div className="services-hero-copy">
                <span className="services-eyebrow">Catálogo Ahavah</span>
                <h1 className="services-hero-title">Servicios para verte impecable sin perder la calma</h1>
                <p className="services-hero-text">
                  Explora uñas, manicure, pedicure, nail art, cejas, maquillaje y cabello. Cada servicio se agenda con valoración profesional, anticipo y protocolos visibles.
                </p>
                <div className="services-hero-actions">
                  <a href="#catalogo-servicios" className="btn btn-primary">Explorar catálogo</a>
                  <a href="#niveles-experiencia" className="btn btn-secondary">Ver amenidades</a>
                </div>
              </div>

              <aside className="services-hero-panel" aria-label="Resumen del catálogo">
                <img src="/images/maquillaje1.webp" alt="Resultado profesional de maquillaje Ahavah" className="services-hero-image" />
                <div className="services-hero-stats">
                  <div>
                    <strong>{services.length}</strong>
                    <span>servicios</span>
                  </div>
                  <div>
                    <strong>{categories.length}</strong>
                    <span>categorías</span>
                  </div>
                  <div>
                    <strong>30%</strong>
                    <span>anticipo</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <div className="container py-8">
          {/* Banner */}
          <div className="services-banner mb-10" role="status" aria-live="polite">
            <h2 className="services-banner-title">Antes de agendar</h2>
            <ul className="services-banner-list">
              <li>Todos los servicios son con cita previa y requieren anticipo para confirmar.</li>
              <li>Si presentas síntomas, lesiones o te sientes mal, reagenda tu visita. Cuidamos tu salud y la de todos.</li>
            </ul>
          </div>

          {/* Page Header */}
          <header className="page-header mb-12">
            <h2 className="page-title">Elige tu servicio</h2>
            <p className="page-subtitle">
              Filtra el catálogo según lo que necesitas hoy: uñas, manicure, pedicure, nail art, cejas, maquillaje o cabello.
            </p>
          </header>

          {/* Amenities Legend */}
          <section id="niveles-experiencia" className="amenities-legend" aria-label="Amenidades por nivel">
            {amenitiesOptions.map(option => (
              <article key={option.id} className="amenity-card">
                <div className="amenity-card-header">
                  <span className="amenity-tag">{option.name}</span>
                  <p className="amenity-description">{option.description}</p>
                </div>
                <ul className="amenity-features">
                  {option.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          {/* Filters and Services Grid */}
          <div id="catalogo-servicios" className="services-layout">
            <FiltersBar
              filters={filters}
              updateFilter={updateFilter}
              toggleTag={toggleTag}
              clearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
            
            <div className="services-content">
              {/* Results Count */}
              <div className="services-meta">
                <p className="results-count">
                  {filteredServices.length} {filteredServices.length === 1 ? 'servicio encontrado' : 'servicios encontrados'}
                </p>
              </div>
              
              {/* Services Grid */}
              {filteredServices.length > 0 ? (
                <div className="services-grid">
                  {filteredServices.map(service => (
                    <CardService
                      key={service.id}
                      service={service}
                      onOpenDetail={(svc) => setSelectedService(svc)}
                    />
                  ))}
                </div>
              ) : (
                // Empty State
                <div className="empty-state">
                  <div className="empty-state-icon">🔍</div>
                  <h3 className="empty-state-title">No se encontraron servicios</h3>
                  <p className="empty-state-text">
                    Intenta ajustar tus filtros o realizar una búsqueda diferente
                  </p>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="btn btn-primary mt-4"
                    >
                      Limpiar filtros
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};

export default Services;
