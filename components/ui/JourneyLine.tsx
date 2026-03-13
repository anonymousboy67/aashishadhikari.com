"use client";

import { useEffect, useRef } from "react";

export default function JourneyLine() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      path.style.strokeDashoffset = String(length * (1 - progress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100px",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "visible",
      }}
    >
      <svg
        width="100"
        height="100%"
        viewBox="0 0 100 3000"
        preserveAspectRatio="none"
        style={{ overflow: "visible", position: "absolute", top: 0, left: 0 }}
      >
        <path
          ref={pathRef}
          d="
            M 50 0
            C 50 200, 20 300, 50 500
            C 80 700, 50 900, 30 1100
            C 10 1300, 60 1500, 50 1700
            C 40 1900, 70 2100, 50 2300
            C 30 2500, 60 2700, 50 3000
          "
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.05s linear" }}
        />
      </svg>
    </div>
  );
}
