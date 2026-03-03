import React, { useState, useEffect } from "react";
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import AboutHero from '../../components/about/AboutHero';
import AboutSection from '../../components/about/AboutMainSection';
import AboutBlueprintSection from '../../components/about/AboutBlueprintSection';
import VisionSection from '../../components/about/VisionSection';
import MissionSection from '../../components/about/MissionSection';
import JourneySection from '../../components/about/JourneySection';
import TeamSlider from '../../components/about/TeamSlider';
import { AnimatePresence } from 'framer-motion';

const About = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className="about-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
            </AnimatePresence>
            <Header />
            <main>
                <AboutHero />
                <AboutSection />
                <AboutBlueprintSection />
                <VisionSection />
                <MissionSection />
                <JourneySection />
                <TeamSlider />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default About;
