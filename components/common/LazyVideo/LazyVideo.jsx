"use client";

import React, { useEffect, useRef, forwardRef } from "react";

const LazyVideo = forwardRef(({ src, poster, className, style, ...props }, ref) => {
  const localRef = useRef(null);

  // Sync ref if passed from parent
  const setRefs = (node) => {
    localRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  useEffect(() => {
    const video = localRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.src = src;
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={setRefs}
      poster={poster}
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      {...props}
    />
  );
});

LazyVideo.displayName = "LazyVideo";

export default LazyVideo;
