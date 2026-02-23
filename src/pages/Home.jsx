import React from 'react';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import Hero from '../components/home/Hero/Hero';
import About from '../components/home/About/About';
import Properties from '../components/home/Properties/Properties';
import Testimonials from '../components/home/Testimonials/Testimonials';
// import Services from '../components/home/Services/Services';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />
                <About />
                <Properties />
                <Testimonials />
                {/* <Services /> */}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
