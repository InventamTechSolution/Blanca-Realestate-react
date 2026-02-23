import React from 'react';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
    const properties = [
        { id: 1, title: 'Luxury Villa', price: '$2,500,000', location: 'Estate City' },
        { id: 2, title: 'Modern Apartment', price: '$850,000', location: 'Downtown' },
        { id: 3, title: 'Commercial Plaza', price: '$5,000,000', location: 'Business Hub' },
    ];

    return (
        <section className="featured-section">
            <div className="section-title">
                <h2>Featured Properties</h2>
            </div>
            <div className="properties-grid">
                {properties.map(property => (
                    <div key={property.id} className="property-card">
                        <div className="property-image"></div>
                        <div className="property-info">
                            <h3>{property.title}</h3>
                            <p className="location">{property.location}</p>
                            <p className="price">{property.price}</p>
                            <button className="theme-btn secondary">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProperties;
