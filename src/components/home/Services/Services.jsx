import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        { title: 'Property Management', icon: '🏢' },
        { title: 'Consultation', icon: '🤝' },
        { title: 'Investment Advice', icon: '📈' },
    ];

    return (
        <section className="services-section">
            <div className="section-title">
                <h2>Our Services</h2>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>Providing top-tier services tailored to your estate needs.</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
