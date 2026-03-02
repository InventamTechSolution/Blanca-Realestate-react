import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import Preloader from '../../components/common/Preloader';
import ThemeBtn from '../../components/common/Button/ThemeBtn';
import { projectsData } from '../../data/properties-listing';
import { AnimatePresence, motion } from 'framer-motion';
import './ProjectDetails.css';
import MainHeroBanner from '../../components/common/MainHeroBanner';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProject = projectsData.find(p => p.id === parseInt(id));
        setProject(foundProject);

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
    }, [id]);

    if (!project && !isLoading) {
        return (
            <div className="project-not-found">
                <Header />
                <Container className="text-center py-5 mt-5">
                    <h2 className="text-white">Project Not Found</h2>
                    <Link to="/projects" className="mt-3 d-inline-block">
                        <ThemeBtn>Back to Projects</ThemeBtn>
                    </Link>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div className="project-details-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
            </AnimatePresence>
            <Header />
            <main>
                <MainHeroBanner title={project.title} description={project.location} image={project.image} />
            </main>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
