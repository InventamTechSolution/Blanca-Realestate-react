import React from 'react';
import { Link } from 'react-router-dom';
import { useProjectByYearWithCategory } from '../../../hooks/useAbout';
import './JourneySection.css';

const JourneySection = () => {
    const scrollRef = React.useRef(null);
    const segmentRef = React.useRef(null);
    const segmentWidthRef = React.useRef(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    const { data: journeyResponse } = useProjectByYearWithCategory();

    const journeyData = React.useMemo(() => {
        const raw = journeyResponse;
        const groups = raw?.data ?? raw?.message?.data ?? raw;
        const list = Array.isArray(groups) ? groups : [];

        const normalizeProject = (project) => {
            const p = project?.project ?? project;
            const title = p?.name || ""
            const location = p?.location || "";
            const description = p?.description || "";
            // Set 'type' to the first category_name if available, else empty string
            const categories = p?.categories ?? project?.categories;
            const type =
                Array.isArray(categories) && categories.length > 0
                    ? categories[0]?.category_name
                    : "";

            const image = p?.card_image || "";

            const rawId = p?.project_id || "";
            const id = rawId !== undefined && rawId !== null && String(rawId).trim() !== ""
                    ? String(rawId).trim()
                    : "";

            return {
                id,
                title: title ?? "",
                location: location ?? "",
                type: type || "",
                description: description ?? "",
                image: image ?? "",
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
            .filter((g) => Boolean(g) && Array.isArray(g.projects) && g.projects.length > 0);
    }, [journeyResponse]);

    const syncInfiniteScroll = React.useCallback(() => {
        const el = scrollRef.current;
        const W = segmentWidthRef.current;
        if (!el || !W) return;
        while (el.scrollLeft >= 2 * W) {
            el.scrollLeft -= W;
        }
        while (el.scrollLeft < W) {
            el.scrollLeft += W;
        }
    }, []);

    React.useLayoutEffect(() => {
        const seg = segmentRef.current;
        const el = scrollRef.current;
        if (!seg || !el) return;

        const measureAndInit = () => {
            const w = seg.offsetWidth;
            if (w > 0) {
                segmentWidthRef.current = w;
                el.scrollLeft = w;
            }
        };

        measureAndInit();
        const ro = new ResizeObserver(() => {
            const w = seg.offsetWidth;
            if (w > 0) segmentWidthRef.current = w;
            syncInfiniteScroll();
        });
        ro.observe(seg);
        return () => ro.disconnect();
    }, [journeyData, syncInfiniteScroll]);

    const handleScroll = React.useCallback(() => {
        syncInfiniteScroll();
    }, [syncInfiniteScroll]);

    if (!journeyData?.length) return null;

    const renderJourneyItems = (keyPrefix) => {
        let cumulativeProjectCount = 0;
        return journeyData.map((item, index) => {
            const currentOffset = cumulativeProjectCount;
            cumulativeProjectCount += item.projects?.length ?? 0;
            return (
                <div className="journey-item" key={`${keyPrefix}-${index}`}>
                    {item.category && (
                        <div className="category-marker" style={{ position: 'absolute', bottom: '60px', zIndex: 1 }}>
                            {item.category}
                        </div>
                    )}

                    {item?.projects?.map((project, pIndex) => {
                        const dynamicPosition = (currentOffset + pIndex) % 2 === 0 ? 'above' : 'below';
                        const imgSrc = typeof project?.image === 'string' && project.image.trim() ? project.image : undefined;
                        const cardClass = `journeyproject-card ${dynamicPosition}`;
                        const cardInner = (
                            <>
                                {imgSrc && (
                                    <img
                                        src={imgSrc}
                                        alt={project.title || 'Project image'}
                                        className="project-image"
                                    />
                                )}
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <i className="fas fa-map-marker-alt"></i> {project.location}
                                    <i className={`fas ${project.type === 'Residential' ? 'fa-building' : 'fa-industry'}`}></i>{' '}
                                    {project.type}
                                </div>
                                {project.description && <p className="project-description">{project.description}</p>}
                            </>
                        );

                        return project.id ? (
                            <Link
                                key={`${keyPrefix}-${index}-${pIndex}`}
                                to={`/project/${project.id}`}
                                className={cardClass}
                                onMouseDown={(e) => e.stopPropagation()}
                            >
                                {cardInner}
                            </Link>
                        ) : (
                            <div key={`${keyPrefix}-${index}-${pIndex}`} className={cardClass}>
                                {cardInner}
                            </div>
                        );
                    })}

                    <div className="year-block" style={item.yearWidth ? { width: item.yearWidth } : {}}>
                        <span className="year-text">{item.year}</span>
                    </div>
                </div>
            );
        });
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        if (!scrollRef.current) return;
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
        if (!scrollRef.current) return;
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
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="journey-content-inner">
                    <div className="timeline-track" />
                    <div className="journey-loop-wrapper">
                        <div className="journey-loop-segment" aria-hidden="true">
                            {renderJourneyItems('a')}
                        </div>
                        <div className="journey-loop-segment" ref={segmentRef}>
                            {renderJourneyItems('b')}
                        </div>
                        <div className="journey-loop-segment" aria-hidden="true">
                            {renderJourneyItems('c')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
