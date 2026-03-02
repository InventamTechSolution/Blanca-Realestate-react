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

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
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
