import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Experiencia', path: '/experiencia' },
    { name: 'Políticas', path: '/politicas' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Conócenos', path: '/conocenos' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'FAQ', path: '/faq' }
  ];
  
  const isActive = (path) => location.pathname === path;
  
  const handleBooking = () => {
    window.open(buildWhatsAppUrl({ servicio: 'Consulta general' }), '_blank');
  };
  
  return (
    <header className="ahavah-header" role="banner">
      <div className="container">
        <div className="ahavah-header__content">
          {/* Logo */}
          <Link to="/" className="ahavah-header__logo" aria-label="Ir a inicio">
            <span className="ahavah-header__logo-text">AHAVAH BEAUTY STUDIO</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="ahavah-header__nav" role="navigation" aria-label="Navegación principal">
            <ul className="ahavah-header__nav-list">
              {navigation.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`ahavah-header__nav-link ${isActive(item.path) ? 'is-active' : ''}`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* CTA Button */}
          <button
            onClick={handleBooking}
            className="btn btn-primary ahavah-header__cta"
            aria-label="Reservar cita por WhatsApp"
          >
            Reservar
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className="ahavah-header__menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            <span className="ahavah-header__menu-icon"></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="ahavah-header__mobile-nav" role="navigation">
            <ul className="ahavah-header__mobile-list">
              {navigation.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`ahavah-header__mobile-link ${isActive(item.path) ? 'is-active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    handleBooking();
                    setIsMenuOpen(false);
                  }}
                  className="btn btn-primary ahavah-header__mobile-cta"
                >
                  Reservar
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
