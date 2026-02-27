import React from 'react';
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
const RegistrationBg = "/images/background/ragistration-bg.png";

const Registration = () => {
    return (
        <>
            <Preloader />
            {/* <Header /> */}
            <main>
                <SmallHeroBanner title="Channel Partner Registration" description="" image={RegistrationBg} showBackButton={true} />


            </main>
            {/* <Footer /> */}
            <ScrollToTop />
        </>
    );
};

export default Registration;