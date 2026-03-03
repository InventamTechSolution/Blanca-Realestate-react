import React from 'react';
import './StatBadge.css';

const StatBadge = ({ count, text }) => {
    return (
        <div className={`hero-stat-box`}>
            <div className="stat-number" data-count={count}>0</div>
            <div className="stat-text">{text}</div>
        </div>
    );
};

export default StatBadge;
