import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function StatCounter({ end, duration = 2.5, suffix = "" }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, []);

  // Parse end value to number if it's a string
  let endValue = typeof end === "string" ? parseFloat(end.replace(/[^0-9.]/g, "")) : end;
  if (isNaN(endValue) || endValue === null || endValue === undefined) {
    endValue = 0;
  }

  return (
    <span ref={ref}>
      {started ? (
        <CountUp 
          end={endValue} 
          duration={duration} 
          separator=","
          suffix={suffix}
        />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}

export default StatCounter;
