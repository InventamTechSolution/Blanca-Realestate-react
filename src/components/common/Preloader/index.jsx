import React from "react";
import "./Preloader.css";
import { motion as Montion } from "framer-motion";

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Montion.div
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
    </Montion.div>
  );
};

export default Preloader;
