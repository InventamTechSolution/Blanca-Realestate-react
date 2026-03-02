import React from 'react';
import './Preloader.css';
import { motion } from 'framer-motion';

const Preloader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="preloader-inner">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
