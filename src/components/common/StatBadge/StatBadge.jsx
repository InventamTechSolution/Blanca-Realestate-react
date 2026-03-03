import React from 'react';
// import './StatBadge.css';

const StatBadge = ({ count, text, className = "" }) => {
    return (
        // <div className={`hero-stat-box ${className}`}>
        //     <div className="stat-number" data-count={count}>0</div>
        //     <div className="stat-text">{text}</div>
        // </div>
        <div>
            <div data-count={count}>0</div>
            <div>{text}</div>
        </div>
    );
};

export default StatBadge;
