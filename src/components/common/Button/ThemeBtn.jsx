import React from 'react';
import { Link } from 'react-router-dom';

const ThemeBtn = ({ to, href, onClick, children, className = '', type = 'button', ...props }) => {
    const combinedClasses = `theme-btn ${className}`.trim();

    if (to) {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                <span>{children}</span>
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...props}>
                <span>{children}</span>
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses} {...props}>
            <span>{children}</span>
        </button>
    );
};

export default ThemeBtn;
