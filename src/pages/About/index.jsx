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
import { useOtherField } from "../../hooks/useOtherField";

const About = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { data: aboutPageResponse } = useOtherField();

    useEffect(() => {
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

    useEffect(() => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: "instant", // or "smooth"
        });
    }, []);

    const { teamItems, showcaseSlides } = React.useMemo(() => {
        const raw = aboutPageResponse;
        const groups = raw?.data ?? raw?.message?.data ?? raw;
        const list = Array.isArray(groups) ? groups : [];

        const byModel = list.reduce((acc, g) => {
            if (!g) return acc;
            const model = String(g?.model ?? "");
            if (!model) return acc;
            const data = Array.isArray(g?.data) ? g.data : [];
            if (!acc[model]) acc[model] = [];
            acc[model].push(...data);
            return acc;
        }, {});

        const teamRaw = byModel["Team"] ?? [];
        const showcaseRaw = byModel["Showcase"] ?? [];

        const team = teamRaw
            .map((item) => {
                const fields = item?.fields ?? {};
                return {
                    name: fields?.title ?? "",
                    quote: fields?.description ?? "",
                    image: fields?.image ?? "",
                };
            })
            .filter((t) => t.name || t.quote || t.image);

        const showcase = showcaseRaw
            .map((item) => {
                const fields = item?.fields ?? {};
                return {
                    title: fields?.title ?? "",
                    text: fields?.description ?? "",
                    image: fields?.image ?? "",
                };
            })
            .filter((s) => s.title || s.text || s.image);

        return { teamItems: team, showcaseSlides: showcase };
    }, [aboutPageResponse]);

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
                <TeamSlider items={teamItems} />
                <ShowcaseSection slides={showcaseSlides} />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default About;
