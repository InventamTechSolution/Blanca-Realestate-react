import React from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Hero from '../components/home/Hero/Hero';
import About from '../components/home/About/About';
import FeaturedProperties from '../components/home/FeaturedProperties/FeaturedProperties';
import Services from '../components/home/Services/Services';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />
                <About />
                <FeaturedProperties />
                <Services />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
