import React from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Properties from '../components/home/Properties';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />
                <About />
                <Properties />
                <WhyChooseUs />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
