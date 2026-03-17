import React from 'react';
import { useProjectByYearWithCategory } from '../../../hooks/useAbout';
import './JourneySection.css';

const JourneySection = () => {
    const scrollRef = React.useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    const { data: journeyResponse } = useProjectByYearWithCategory();

    const journeyData = React.useMemo(() => {
        const raw = journeyResponse;
        const groups = raw?.data ?? raw?.message?.data ?? raw;
        const list = Array.isArray(groups) ? groups : [];

        const normalizeProject = (project, index) => {
            console.log(project);
            const title = project?.name;
            const location = project?.location;
            const description = project?.description;
            // Set 'type' to the first category_name if available, else empty string
            const type = Array.isArray(project?.categories) && project.categories.length > 0
                ? project.categories[0]?.category_name
                : "";

            const image = project?.card_image;

            return {
                title,
                location,
                type: type || "",
                description,
                image,
                position: index % 2 === 0 ? "above" : "below",
            };
        };

        return list
            .map((group) => {
                const year = String(group?.year ?? group?.label ?? "");
                const category = group?.category ?? group?.category_name ?? "";
                const projectsRaw = group?.projects ?? group?.data ?? group?.items ?? [];
                const projects = Array.isArray(projectsRaw)
                    ? projectsRaw.map(normalizeProject)
                    : [];

                if (!year) return null;

                return {
                    year,
                    category,
                    projects,
                };
            })
            .filter(Boolean);
    }, [journeyResponse]);

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
    }, [journeyData.length]);

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

    const renderJourneyItem = (item, index, isDuplicate = false) => (
        <div className="journey-item" key={`${isDuplicate ? 'dup-' : 'orig-'}${index}`}>
            {item.category && (
                <div className="category-marker" style={{ position: 'absolute', bottom: '60px', zIndex: 1 }}>
                    {item.category}
                </div>
            )}

            {item.projects.map((project, pIndex) => (
                <div key={pIndex} className={`journeyproject-card ${project.position}`}>
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
            ))}

            <div className="year-block" style={item.yearWidth ? { width: item.yearWidth } : {}}>
                <span className="year-text">{item.year}</span>
            </div>
        </div>
    );

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
                    {journeyData.map((item, index) => renderJourneyItem(item, index))}

                    {/* Duplicated Content for Seamless Scroll - Re-enabling if desired */}
                    {/* {journeyData.map((item, index) => renderJourneyItem(item, index, true))} */}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
