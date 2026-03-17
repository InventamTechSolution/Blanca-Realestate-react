import { Routes, Route } from "react-router-dom";
import LiquidFilters from "./components/common/LiquidFilters";
import FloatingContactButtons from "./components/common/FloatingContactButtons/FloatingContactButtons";

import "./assets/styles/App.css";
import "./assets/styles/index.css";
import "./assets/styles/fonts.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contect";
import Registration from "./pages/Registration";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsConditions";
import ScrollToTopOnRouteChange from "./components/common/ScrollToTopOnRouteChange";
import { ContactModalProvider } from "./context/ContactModalContext";
import ContactModal from "./components/common/ContactModal/ContactModal";

function App() {
  // useEffect(() => {
  //   if ("scrollRestoration" in window.history) {
  //     window.history.scrollRestoration = "manual";
  //   }
  // }, []);

  return (
    <ContactModalProvider>
      <ScrollToTopOnRouteChange />
      <LiquidFilters />

      <FloatingContactButtons />
      <ContactModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </ContactModalProvider>
  );
}

export default App;
