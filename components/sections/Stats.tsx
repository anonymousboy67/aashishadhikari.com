"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "3.89", label: "GPA / DEAN'S LIST", sub: "Presidential Graduate School", span: 1 },
  { value: "500+", label: "DIGITALSEWA USERS", sub: "Across 20+ cities in Nepal", span: 1 },
  { value: "114", label: "GITHUB REPOS", sub: "Public & private projects", span: 1 },
  { value: "5.1K", label: "YOUTUBE VIEWS", sub: "Original music releases", span: 1 },
  { value: "8", label: "CERTIFICATIONS", sub: "Google · Cisco · Udemy", span: 1 },
  { value: "1", label: "NASA AWARD", sub: "Galactic Problem Solver 2024", span: 1 },
];

function useCountUp(target: string, isVisible: boolean) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!isVisible) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    if (isNaN(num)) { setDisplay(target); return; }
    let start = 0;
    const duration = 1200;
    const step = 16;
    const steps = duration / step;
    const increment = num / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay((num < 10 ? start.toFixed(2) : Math.floor(start).toString()) + suffix);
      }
    }, step);
    return () => clearInterval(timer);
  }, [isVisible, target]);
  return display;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), index * 100); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  // Staggered entrance animation
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs2 = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1)";
        }, index * 80);
      }
    }, { threshold: 0.2 });
    obs2.observe(el);
    return () => obs2.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "4px",
        padding: "2.5rem 2rem",
        opacity: 0,
        transform: "translateY(24px) scale(0.97)",
        transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
        // Glassmorphism
        background: hovered
          ? "linear-gradient(135deg, rgba(61,112,104,0.18) 0%, rgba(247,246,242,0.08) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: hovered
          ? "1px solid rgba(61,112,104,0.5)"
          : "1px solid rgba(255,255,255,0.12)",
        boxShadow: hovered
          ? "0 0 40px rgba(61,112,104,0.2), inset 0 1px 0 rgba(255,255,255,0.15)"
          : "0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Glow orb behind number */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(61,112,104,0.25) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: "none",
        }}
      />

      {/* Index number watermark */}
      <div
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "1rem",
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.15)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Big number */}
      <div
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: hovered ? "#f7f6f2" : "rgba(247,246,242,0.9)",
          marginBottom: "0.75rem",
          transition: "color 500ms ease",
        }}
      >
        {count}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: hovered ? "var(--accent)" : "rgba(180,180,180,0.8)",
          marginBottom: "0.4rem",
          transition: "color 500ms ease",
        }}
      >
        {stat.label}
      </div>

      {/* Sub */}
      <div
        style={{
          fontSize: "0.75rem",
          color: "rgba(180,180,180,0.5)",
          lineHeight: 1.4,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 500ms ease",
        }}
      >
        {stat.sub}
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: "linear-gradient(90deg, var(--accent), transparent)",
          transition: "width 700ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        background: "linear-gradient(180deg, #111 0%, #0d1a18 100%)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(61,112,104,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            By the numbers
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "rgba(247,246,242,0.9)",
              letterSpacing: "-0.01em",
            }}
          >
            What the data says
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
          className="stats-bento"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-bento { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-bento { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
