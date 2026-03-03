import React from 'react'
import './ProjectDetails.css'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import MainHeroBanner from '../../components/common/MainHeroBanner'
import { bannerVideo1 } from '../../components/home/Hero'

const ProjectDetails = () => {
    return (
        <>
            <Header />
            <main>
                <MainHeroBanner
                    videoSrc={bannerVideo1}
                    poster="/images/projects/lendscpae-images/blancs-business-hub.png"
                    tagline="New Launch"
                    title="Blanca : Ekaiva"
                    description="Commercial - Turbhe Navi Mumbai" />
            </main>
            <Footer />
        </>
    )
}

export default ProjectDetails