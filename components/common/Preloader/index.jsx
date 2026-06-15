import React from "react";
import PageLoader from "../PageLoader/PageLoader";
import { motion as Montion } from "framer-motion";

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Montion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <PageLoader />
    </Montion.div>
  );
};

export default Preloader;

