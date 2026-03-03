import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LiquidFilters from './components/common/LiquidFilters';
import FloatingContactButtons from './components/common/FloatingContactButtons/FloatingContactButtons';
import Preloader from './components/common/Preloader';
import './assets/styles/App.css';
import './assets/styles/index.css';
import './assets/styles/fonts.css';

const Home = lazy(() => import('./pages/Home/index'));
const About = lazy(() => import('./pages/About/index'));
const Contact = lazy(() => import('./pages/Contect/index'));
const Registration = lazy(() => import('./pages/Registration/index'));
const Projects = lazy(() => import('./pages/Projects/index'));
const Projectdetails = lazy(() => import('./pages/ProjectDetails/index'));

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <LiquidFilters />
      <FloatingContactButtons />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details" element={<Projectdetails />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
