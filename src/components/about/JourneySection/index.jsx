import React from 'react';
import { journeyData } from '../../../data/journeyData';
import './JourneySection.css';

const JourneySection = () => {
    const scrollRef = React.useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    React.useEffect(() => {
        // Function to scroll to the end
        const scrollToEnd = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
            }
        };

        // Scroll after a short delay to ensure content is rendered and widths are calculated
        const timeoutId = setTimeout(scrollToEnd, 100);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };


    return (
        <section className="journey-innovation-section" id="journey">
            <div className="container-fluid">
                <div className="section-title text-center mb-50">
                    <div className="sub-title-wrapper">
                        <span className="sub-title common-subtitle">Our Journey</span>
                    </div>
                    <div className="about-page-team-title bs-font-playfair-display">Journey of Innovation</div>
                </div>
            </div>

            <div
                className={`journey-container journey-marquee ${isDragging ? 'dragging' : ''}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="journey-content-inner">
                    <div className="timeline-track"></div>

                    {/* Original Content */}
                    {(() => {
                        let cumulativeProjectCount = 0;
                        return journeyData.map((item, index) => {
                            const currentOffset = cumulativeProjectCount;
                            cumulativeProjectCount += item.projects.length;
                            return (
                                <div className="journey-item" key={`orig-${index}`}>
                                    {item.category && (
                                        <div className="category-marker" style={{ position: 'absolute', bottom: '60px', zIndex: 1 }}>
                                            {item.category}
                                        </div>
                                    )}

                                    {item.projects.map((project, pIndex) => {
                                        const dynamicPosition = (currentOffset + pIndex) % 2 === 0 ? 'above' : 'below';
                                        return (
                                            <div key={pIndex} className={`journeyproject-card ${dynamicPosition}`}>
                                                {project.image && (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="project-image"
                                                    />
                                                )}
                                                <h3 className="project-title">{project.title}</h3>
                                                <div className="project-meta">
                                                    <i className="fas fa-map-marker-alt"></i> {project.location}
                                                    <i className={`fas ${project.type === 'Residential' ? 'fa-building' : 'fa-industry'}`}></i> {project.type}
                                                </div>
                                                {project.description && <p className="project-description">{project.description}</p>}
                                            </div>
                                        );
                                    })}

                                    <div className="year-block" style={item.yearWidth ? { width: item.yearWidth } : {}}>
                                        <span className="year-text">{item.year}</span>
                                    </div>
                                </div>
                            );
                        });
                    })()}

                    {/* Duplicated Content for Seamless Scroll - Re-enabling if desired */}
                    {/* {journeyData.map((item, index) => renderJourneyItem(item, index, true))} */}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
