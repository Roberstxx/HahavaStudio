/**
 * SEO utilities for managing document metadata
 */

/**
 * Set document metadata (title, description, OG tags)
 */
export const setDocumentMeta = ({
  title = 'Ahavah Beauty Studio',
  description = 'Estudio de belleza en San Román, San Francisco de Campeche, especializado en uñas, cejas, maquillaje, peinados y cabello.',
  ogImage = '/og/ahavah-cover-v2.jpg',
  ogType = 'website',
  canonical = null
} = {}) => {
  // Set title
  document.title = title;
  
  // Set or update meta tags
  setMetaTag('name', 'description', description);
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:type', ogType);
  
  // Set canonical URL if provided
  if (canonical) {
    setLinkTag('canonical', canonical);
  }
};

/**
 * Helper to set or update a meta tag
 */
const setMetaTag = (attribute, key, content) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Helper to set or update a link tag
 */
const setLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
};

/**
 * Generate JSON-LD structured data for BeautySalon
 */
export const generateBeautySalonJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Ahavah Beauty Studio",
    "description": "Estudio de belleza en San Román, San Francisco de Campeche, especializado en uñas, cejas, maquillaje, peinados y cuidado personal con atención cálida, técnica profesional y bioseguridad.",
    "image": "/og/ahavah-cover-v2.jpg",
    "url": "https://glow-haven-demo.vercel.app/",
    "hasMap": "https://www.google.com/maps/place/Ahavah+Beauty+Studio/@19.838623,-90.548665,4242m/data=!3m1!1e3!4m6!3m5!1s0x85f833049c5db98b:0x73900e75d332c356!8m2!3d19.8386225!4d-90.5486647!16s%2Fg%2F11x21l63yd",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. 10 477, Barrio de San Román",
      "addressLocality": "San Francisco de Campeche",
      "addressRegion": "Campeche",
      "postalCode": "24040",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.8386225,
      "longitude": -90.5486647
    },
    "telephone": "+52-981-206-1662",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "San Francisco de Campeche"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Friday"],
        "opens": "10:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/ahavahbeautystudio",
      "https://www.facebook.com/profile.php?id=100082316936923",
      "https://wa.me/529812061662"
    ],
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Uñas acrílicas y gel semipermanente" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño y laminado de cejas" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maquillaje social, novias y XV años" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Peinados y cortes de cabello" } }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "24"
    }
  };
  
  return jsonLd;
};

/**
 * Inject JSON-LD script into document head
 */
export const injectJsonLd = (jsonLdData) => {
  // Remove existing JSON-LD if present
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create and inject new JSON-LD script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(jsonLdData);
  document.head.appendChild(script);
};
