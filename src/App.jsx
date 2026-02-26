import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'wowjs';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contect/Contact';
import LiquidFilters from './components/common/LiquidFilters';
import FloatingContactButtons from './components/common/FloatingContactButtons/FloatingContactButtons';
import './assets/styles/App.css';
import './assets/styles/index.css';
import './assets/styles/fonts.css';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
