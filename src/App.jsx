import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'wowjs';
import LiquidFilters from './components/common/LiquidFilters';
import FloatingContactButtons from './components/common/FloatingContactButtons/FloatingContactButtons';
import Preloader from './components/common/Preloader';
import './assets/styles/App.css';
import './assets/styles/index.css';
import './assets/styles/fonts.css';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contect/Contact'));

function App() {
  useEffect(() => {
    if (window.WOW) {
      const wow = new window.WOW({
        live: false
      });
      wow.init();
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
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
