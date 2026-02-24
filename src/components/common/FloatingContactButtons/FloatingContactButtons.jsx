import React from 'react';
import { Icon } from '@iconify/react';
import './FloatingContactButtons.css';

const FloatingContactButtons = () => {
    return (
        <div className="floating-action-buttons" aria-label="Quick contact actions">
            <a className="fab-item fab-call" href="tel:+917021913284" aria-label="Call us">
                <Icon icon="lucide:phone" />
            </a>
            <a className="fab-item fab-whatsapp" href="https://wa.me/917021913284" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp">
                <Icon icon="ri:whatsapp-line" />
            </a>
            <a className="fab-item fab-inquiry" href="mailto:reachus.blanca@gmail.com" aria-label="Inquiry">
                <Icon icon="lucide:mail" />
            </a>
        </div>
    );
};

export default FloatingContactButtons;
