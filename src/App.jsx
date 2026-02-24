import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WOW from 'wowjs';
import Home from './pages/Home';
import LiquidFilters from './components/common/LiquidFilters';
import './assets/styles/App.css';
import './assets/styles/index.css';
import './assets/styles/fonts.css';

function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false
    });
    wow.init();
  }, []);

  return (
    <Router>
      <LiquidFilters />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
