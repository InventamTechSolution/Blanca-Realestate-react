import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'wowjs';
import Home from './pages/Home';
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
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
