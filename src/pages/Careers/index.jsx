import React, { useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import CareerBenefits from "../../components/career/CareerBenefits/CareerBenefits";
import JobListings from "../../components/career/JobListings/JobListings";
// import ApplicationForm from "../../components/career/ApplicationForm/ApplicationForm";
import "./careers.css";

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main className="careers-page-wrapper">
                <SmallHeroBanner
                    title="Career Opportunities"
                    description=""
                    image="/images/background/career-bg.jpg" // Using an existing standard background
                />
                <JobListings />
                <CareerBenefits />
                {/* <ApplicationForm /> */}
            </main>
            <Footer />
        </>
    );
};

export default Careers;
