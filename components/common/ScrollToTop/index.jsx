"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            className={`scroll-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            title="Go to Top"
        >
            <Icon icon="lucide:chevron-up" />
        </div>
        // <button className="scroll-top scroll-to-target" data-target="html">
        //     <span className="fas fa-angle-double-up"></span>
        // </button>
    );
};

export default ScrollToTop;
