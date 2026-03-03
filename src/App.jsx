import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LiquidFilters from "./components/common/LiquidFilters";
import FloatingContactButtons from "./components/common/FloatingContactButtons/FloatingContactButtons";
import Preloader from "./components/common/Preloader";
import "./assets/styles/App.css";
import "./assets/styles/index.css";
import "./assets/styles/fonts.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contect"));
const Registration = lazy(() => import("./pages/Registration"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

function App() {
  // useEffect(() => {
  //   if ("scrollRestoration" in window.history) {
  //     window.history.scrollRestoration = "manual";
  //   }
  // }, []);

  return (
    <>
      <LiquidFilters />
      <FloatingContactButtons />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
