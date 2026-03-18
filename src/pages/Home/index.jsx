import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import Properties from '../../components/home/Properties';
import Testimonials from '../../components/home/Testimonials';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import MainHeroBanner from '../../components/common/MainHeroBanner';
// import { bannerVideo1, blancaTowerVideo, videoProject2 } from '../../components/home/Hero';
import { useProjects } from '../../hooks/useProjects';
import { PROJECT_STATUS_LABELS } from '../../utils/constant';

const Home = () => {
    const {data, isLoading} = useProjects({page: 1, limit: 50, show_on_home_page: true});

    const projects = data?.data || [];

    // useEffect(() => {
    //     const handleLoad = () => {
    //         setTimeout(() => {
    //         }, 800); // Slightly longer for smoother transition
    //     };

    //     if (document.readyState === 'complete') {
    //         handleLoad();
    //     } else {
    //         window.addEventListener('load', handleLoad);
    //     }

    //     return () => window.removeEventListener('load', handleLoad);
    // }, []);

    return (
        <div className="home-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
            </AnimatePresence>
            <Header />
            <main>
                { projects.length > 0 && projects.map((project) => (
                    <MainHeroBanner
                        key={project.id}
                        videoSrc={project.project_banner_image}
                        poster={project.project_image}
                        status={PROJECT_STATUS_LABELS[project.project_status] || project.project_status}
                        title={project.project_name}
                        location={`${project.categories?.[0]?.category_name} - ${project.project_location}`}
                        overlayOpacity={project.project_banner_color}
                        isHomePage={true}
                        projectId={project.project_project_id}
                    />
                ))}
                <Hero />
                <About />
                <Properties />
                <WhyChooseUs />
                <Testimonials />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;
