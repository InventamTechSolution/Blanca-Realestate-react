"use client";

import React from "react";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner} aria-label="Loading" />
    </div>
  );
}
