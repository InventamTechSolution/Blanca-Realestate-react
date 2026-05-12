import React from 'react';
import './statbadge.css';
import StatCounter from '../StatCounter/StatCounter';

const StatBadge = ({ count, text, className = "" }) => {
    return (
        <div className={`hero-stat-box ${className}`}>
            <div className="stat-number">
                <StatCounter end={count} />
            </div>
            <div className="stat-text">{text}</div>
        </div>
    );
};

export default StatBadge;
