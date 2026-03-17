import React from 'react';
import { useProjectByYearWithCategory } from '../../../hooks/useAbout';
import './JourneySection.css';

const journeyData = [
    {
        "year": "1999",
        "data": [
            {
                "project_id": "d7e037cf-2476-4743-8076-559557b1be47",
                "name": "Blanca Tower",
                "description": "",
                "location": "Borivali - Mumbai",
                "banner_image": "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/f31290ec-f82b-406e-9127-4192aa94cd44.mp4",
                "banner_color": "rgba(17, 17, 17, 0.6)",
                "card_image": "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/1822ffe4-82e4-4d0d-8e44-dd7acff8552a.png",
                "card_color": "rgba(0, 0, 0, 1)",
                "status": "completed",
                "started_at": null,
                "completed_at": 946185637,
                "categories": [
                    {
                        "category_id": "29b3d795-e9b7-444c-856b-be9cf38bb026",
                        "category_name": "Commercial",
                        "category_slug": "commercial"
                    }
                ]
            }
        ]
    },
    {
        "year": "2010",
        "data": [
            {
                "project_id": "97750100-591e-40fe-82a7-7d11514b93b2",
                "name": "Blanca Hill",
                "description": "",
                "location": "Ulwe, Navi Mumbai",
                "banner_image": "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/f31290ec-f82b-406e-9127-4192aa94cd44.mp4",
                "banner_color": "rgba(17, 17, 17, 0.6)",
                "card_image": "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/0fb62a5b-1f25-419a-9c12-c6864be84f95.png",
                "card_color": "rgba(0, 0, 0, 1)",
                "status": "completed",
                "started_at": null,
                "completed_at": 1287206437,
                "categories": [
                    {
                        "category_id": "9bc767d4-f461-4407-8fdf-0dd73ef4642c",
                        "category_name": "Residential",
                        "category_slug": "residential"
                    }
                ]
            }
        ]
    },
    {
        "year": "2026",
        "data": [
            {
                "project_id": "05751bc6-c0e1-4e0d-8f89-ab344d8d5da2",
                "name": "ND Pearl",
                "description": "",
                "location": "Kamothe, Navi Mumbai",
                "banner_image": "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/f31290ec-f82b-406e-9127-4192aa94cd44.mp4",
                "banner_color": "rgba(17, 17, 17, 0.6)",
                "card_image": "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/88108358-9180-4237-8a43-e595c753012a.png",
                "card_color": "rgba(0, 0, 0, 1)",
                "status": "sold-out",
                "started_at": 1737091237,
                "completed_at": 1772169637,
                "categories": [
                    {
                        "category_id": "9bc767d4-f461-4407-8fdf-0dd73ef4642c",
                        "category_name": "Residential",
                        "category_slug": "residential"
                    }
                ]
            }
        ]
    }
];

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

        const normalizeProject = (project) => {
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
            };
        };

        const withAutoPosition = (projects) =>
            projects.map((project, index) => ({
                ...project,
                position: index % 2 === 0 ? "above" : "below",
            }));

        return list
            .map((group) => {
                const year = String(group?.year ?? group?.label ?? "");
                const category = group?.category ?? group?.category_name ?? "";
                const projectsRaw = group?.projects ?? group?.data ?? group?.items ?? [];
                const projects = Array.isArray(projectsRaw)
                    ? withAutoPosition(projectsRaw.map(normalizeProject))
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
                            cumulativeProjectCount += item.data.length;
                            return (
                                <div className="journey-item" key={`orig-${index}`}>
                                    {item.category && (
                                        <div className="category-marker" style={{ position: 'absolute', bottom: '60px', zIndex: 1 }}>
                                            {item.category}
                                        </div>
                                    )}

                                    {item.data.map((project, pIndex) => {
                                        const dynamicPosition = (currentOffset + pIndex) % 2 === 0 ? 'above' : 'below';
                                        return (
                                            <div key={pIndex} className={`journeyproject-card ${dynamicPosition}`}>
                                                {project.card_image && (
                                                    <img
                                                        src={project.card_image}
                                                        alt={project.name}
                                                        className="project-image"
                                                    />
                                                )}
                                                <h3 className="project-title">{project.name}</h3>
                                                <div className="project-meta">
                                                    <i className="fas fa-map-marker-alt"></i> {project.location}
                                                    <i className={`fas ${project.categories[0]?.category_name === 'Residential' ? 'fa-building' : 'fa-industry'}`}></i> {project.categories[0]?.category_name}
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
