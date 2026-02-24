import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Preloader from '../components/common/Preloader';
import ScrollToTop from '../components/common/ScrollToTop';
// import AboutHero from '../components/about/AboutHero';

const About = () => {
    return (
        <div className="about-page">
            <Preloader />
            <Header />
            <main>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default About;
