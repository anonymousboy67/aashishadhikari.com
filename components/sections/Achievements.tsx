"use client";

import { useEffect, useRef } from "react";

const achievements = [
  {
    year: "Oct 2024",
    title: "NASA Galactic Problem Solver Award",
    description: "Space Apps Challenge, Kathmandu — recognized globally for innovative space-data solution.",
  },
  {
    year: "2024",
    title: "Launched DigitalSewa",
    description: "500+ users, 20+ cities across Nepal — from zero to production, solo.",
  },
  {
    year: "2024",
    title: "Full-time Software Engineer",
    description: "CAS Trading House, Kathmandu — ERP implementation and custom software development.",
  },
  {
    year: "2024",
    title: "Content Creator Intern",
    description: "Edtraa / Krezona Technology — educational content for emerging developers.",
  },
  {
    year: "2023–Present",
    title: "Independent Music Artist",
    description: "2 original songs, 5,100+ YouTube views — music as a second language.",
  },
  {
    year: "2022",
    title: "Started BSIT at Presidential Graduate School",
    description: "Westcliff University affiliate, Kathmandu — 50% academic scholarship.",
  },
];

function AchievementNode({ item, index }: { item: typeof achievements[0]; index: number }) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }, index * 80);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={nodeRef}
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        opacity: 0,
        transform: "translateX(-20px)",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Left: year */}
      <div
        style={{
          minWidth: "90px",
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted)",
          paddingTop: "4px",
          textAlign: "right",
        }}
      >
        {item.year}
      </div>

      {/* Center: line + node */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            border: "2px solid var(--accent)",
            flexShrink: 0,
            marginTop: "4px",
          }}
        />
        {index < achievements.length - 1 && (
          <div
            style={{
              width: "1px",
              flexGrow: 1,
              backgroundColor: "var(--border)",
              minHeight: "60px",
              marginTop: "4px",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: "2.5rem", flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "var(--fg)",
            marginBottom: "0.4rem",
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            Timeline
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--fg)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            THE JOURNEY
          </h2>
        </div>

        {/* Timeline */}
        <div>
          {achievements.map((item, i) => (
            <AchievementNode key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
