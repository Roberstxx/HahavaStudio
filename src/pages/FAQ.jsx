import { useState, useCallback, useMemo, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { setDocumentMeta } from '../utils/seo';
import './FAQ.css';

const faqData = {
  reservas: {
    title: 'Reservas',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5m15 7.5v-7.5" /></svg>',
    info: 'Todo lo que necesitas saber para agendar, confirmar o modificar tu cita.',
    questions: [
      { q: '¿Cómo reservo una cita?', a: 'Puedes escribirnos por WhatsApp o desde Contacto. Confirmamos fecha y hora con **anticipo obligatorio**.' },
      { q: '¿Puedo cambiar o cancelar mi cita?', a: 'Sí. Los cambios se realizan con **24 h de anticipación**. Con menos tiempo, el anticipo no es reembolsable.' },
      { q: '¿Cuál es la tolerancia si llego tarde?', a: 'La tolerancia máxima es de **15 minutos**. Después de ese tiempo, la cita puede reagendarse con nuevo anticipo.' }
    ]
  },
  pagos: {
    title: 'Pagos y Anticipos',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 3h6m-12-3h.008v.008H3v-.008Zm0 3h.008v.008H3v-.008Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25a9.75 9.75 0 0 1 1.742 19.336 9.75 9.75 0 0 1-1.423.109l-1.077-.074L3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v.75" /></svg>',
    info: 'Formas de pago, anticipos y condiciones para confirmar tu servicio.',
    questions: [
      { q: '¿Cuánto es el anticipo y cómo se paga?', a: 'El anticipo es del **30% del servicio** y se realiza por transferencia. El resto se liquida al finalizar.' },
      { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos **efectivo y transferencia**. Si necesitas otra opción, consúltanos antes de tu cita.' },
      { q: '¿Hay garantía o retoque?', a: 'Sí, dentro de los 7 días posteriores al servicio y sujeto a valoración de las condiciones originales.' }
    ]
  },
  higiene: {
    title: 'Higiene y Normas',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>',
    info: 'Cuidamos tu salud y bienestar con protocolos visibles en cada servicio.',
    questions: [
      { q: '¿Cómo garantizan la higiene?', a: 'Preparamos herramientas por cliente, desinfectamos superficies y usamos materiales desechables cuando el servicio lo requiere.' },
      { q: '¿Atienden si estoy enferma o con lesiones?', a: 'No. Por seguridad de todas, reagendamos si presentas síntomas, lesiones visibles o infecciones activas.' },
      { q: '¿Debo llegar con uñas o rostro limpios?', a: 'Sí. Evita aceites o cremas pesadas. Si requieres remoción de material anterior, avísanos al reservar.' }
    ]
  },
  eventos: {
    title: 'Eventos Especiales',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9v-2.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6.75V9m-18 0h18l-1.5 9h-15L3 9Z" /></svg>',
    info: 'Información para bodas, XV años, sesiones y celebraciones importantes.',
    questions: [
      { q: '¿Hacen paquetes para novias o eventos?', a: 'Sí. Creamos opciones personalizadas y podemos incluir **sesión de prueba** según disponibilidad.' },
      { q: '¿Dan servicio a domicilio?', a: 'Principalmente trabajamos en estudio. Para eventos grandes, podemos valorar servicio a domicilio con **costo adicional**.' }
    ]
  },
  politicas: {
    title: 'Políticas Generales',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h.008v.008H12V7.5Zm0 12h.008v.008H12V19.5Zm-5.626-6.495c-.328-.157-.76.085-.76.47v.758c0 .385.432.627.76.47L15 12.75l-8.626-4.125Z" /></svg>',
    info: 'Reglas claras para cuidar tu tiempo, tu comodidad y la experiencia dentro del estudio.',
    questions: [
      { q: '¿Puedo ir con acompañante o mascotas?', a: 'No. Nuestro espacio está diseñado para atención individual, por lo que **no se permiten acompañantes** ni mascotas.' },
      { q: '¿Tienen red Wi-Fi disponible?', a: 'Sí, puedes pedir la contraseña al llegar.' }
    ]
  }
};

const QuestionBox = ({ question, index, isExpanded, onToggle }) => {
  const answerContent = { __html: question.a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };

  return (
    <div
      className={`question-box ${isExpanded ? 'active' : ''}`}
      onClick={() => onToggle(index)}
    >
      <div className="question-title">
        {question.q}
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d={isExpanded ? 'M5 12h14' : 'M12 4.5v15m7.5-7.5h-15'} />
        </svg>
      </div>
      <div
        className="question-answer"
        style={{ maxHeight: isExpanded ? '500px' : '0' }}
      >
        <p dangerouslySetInnerHTML={answerContent} />
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const currentCategoryData = faqData[expandedCategory];

  useEffect(() => {
    setDocumentMeta({
      title: 'Preguntas Frecuentes | Ahavah Beauty Studio',
      description: 'Resuelve dudas sobre reservas, anticipos, higiene, eventos y políticas de Ahavah Beauty Studio.'
    });
  }, []);

  const filteredCategories = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return Object.keys(faqData);
    return Object.keys(faqData).filter(key =>
      faqData[key].title.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  const openPanel = useCallback((key) => {
    setExpandedCategory(key);
    setActiveQuestionIndex(null);
  }, []);

  const closePanel = useCallback(() => {
    setExpandedCategory(null);
    setActiveQuestionIndex(null);
    setSearchTerm('');
  }, []);

  const toggleQuestion = useCallback((index) => {
    setActiveQuestionIndex(prevIndex => (prevIndex === index ? null : index));
  }, []);

  const renderContent = () => {
    if (expandedCategory && currentCategoryData) {
      return (
        <section id="faqExpanded" className="faq-expanded show">
          <button id="closeBtn" className="close-btn" onClick={closePanel}>
            <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver a categorías
          </button>
          <h2 className="expanded-title">{currentCategoryData.title}</h2>
          <p className="expanded-info">{currentCategoryData.info}</p>
          <div id="questionsContainer" className="questions-container">
            {currentCategoryData.questions.map((q, index) => (
              <QuestionBox
                key={index}
                index={index}
                question={q}
                isExpanded={activeQuestionIndex === index}
                onToggle={toggleQuestion}
              />
            ))}
          </div>
        </section>
      );
    }

    return (
      <section id="faqCategories" className={`faq-categories ${expandedCategory === null ? 'show' : 'hide'}`}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map(key => {
            const category = faqData[key];
            return (
              <div
                key={key}
                className="faq-card"
                onClick={() => openPanel(key)}
              >
                <div className="icon-container" dangerouslySetInnerHTML={{ __html: category.icon }} />
                <h2 className="card-title">{category.title}</h2>
              </div>
            );
          })
        ) : (
          <p className="no-results">No encontramos categorías para "{searchTerm}".</p>
        )}
      </section>
    );
  };

  return (
    <>
      <Header />
      <div className="faq-page-container">
        <header className="faq-header">
          <div className="faq-header-content">
            <h1>¿En qué podemos ayudarte?</h1>
            <p>Encuentra respuestas sobre reservas, políticas, pagos y cuidado dentro del estudio.</p>
            <div className="search-box">
              <input
                type="text"
                id="searchInput"
                placeholder="Buscar categoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
        </header>

        <main className="faq-main">
          {renderContent()}
        </main>

        <div
          className={`faq-overlay ${expandedCategory ? 'show' : ''}`}
          onClick={closePanel}
        ></div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default FAQPage;
