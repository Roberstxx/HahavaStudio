import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Experience from './pages/Experience';
import Policies from './pages/Policies';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/servicios',
    element: <Services />
  },
  {
    path: '/servicios/:slug',
    element: <ServiceDetail />
  },
  {
    path: '/experiencia',
    element: <Experience />
  },
  {
    path: '/seguridad',
    element: <Navigate to="/politicas" replace />
  },
  {
    path: '/politicas',
    element: <Policies />
  },
  {
    path: '/filosofia',
    element: <Navigate to="/conocenos" replace />
  },
  {
    path: '/conocenos',
    element: <About />
  },
  {
    path: '/galeria',
    element: <Gallery />
  },
  {
    path: '/contacto',
    element: <Contact />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
