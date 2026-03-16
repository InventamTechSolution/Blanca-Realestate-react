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
import ShowcaseSection from "../../components/about/ShowcaseSection";
import TeamSlider from '../../components/about/TeamSlider';
import { AnimatePresence } from 'framer-motion';

const About = () => {
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
                <ShowcaseSection />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default About;
