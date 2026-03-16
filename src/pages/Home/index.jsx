import React, { useState, useEffect } from 'react';
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
import { bannerVideo1, blancaTowerVideo, videoProject2 } from '../../components/home/Hero';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }

        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
                if (window.location.hash) {
                    const id = window.location.hash.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 800); // Slightly longer for smoother transition
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className="home-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
            </AnimatePresence>
            <Header />
            <main>
                <MainHeroBanner
                    videoSrc={bannerVideo1}
                    poster="/images/projects/lendscpae-images/blancs-business-hub.png"
                    tagline="New Launch"
                    title="Blanca : Ekaiva"
                    description="Commercial - Turbhe Navi Mumbai"
                />
                <MainHeroBanner
                    videoSrc={blancaTowerVideo}
                    tagline="New Launch"
                    title="Blanca Tower"
                    description="Commercial - Borivali"
                    overlayOpacity={0.6}
                />
                <MainHeroBanner
                    videoSrc={videoProject2}
                    tagline="Sold Out"
                    title="ND Pearl"
                    description="Residential – Kamothe, Navi Mumbai"
                />
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
