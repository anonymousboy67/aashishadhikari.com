"use client";

import { useState, useRef, useEffect } from "react";
import projectsData from "@/data/projects.json";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  status: string;
  image: string;
}

const statusColors: Record<string, string> = {
  live: "#3d7068",
  "in-progress": "#8B7355",
  archived: "#6b6b6b",
};

const gradients = [
  "linear-gradient(135deg, rgba(61,112,104,0.25) 0%, rgba(13,26,24,0.6) 100%)",
  "linear-gradient(135deg, rgba(80,60,100,0.25) 0%, rgba(13,13,26,0.6) 100%)",
  "linear-gradient(135deg, rgba(100,75,40,0.25) 0%, rgba(20,15,0,0.6) 100%)",
  "linear-gradient(135deg, rgba(40,80,110,0.25) 0%, rgba(0,15,26,0.6) 100%)",
];

function GlassProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setVisible(true), index * 100);
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const num = String(index + 1).padStart(2, "0");

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModal(true)}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "6px",
          cursor: "pointer",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
          background: hovered ? gradients[index % gradients.length] : "rgba(247,246,242,0.6)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: hovered
            ? `1px solid ${statusColors[project.status] || "rgba(61,112,104,0.4)"}88`
            : "1px solid var(--border)",
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)`
            : "0 2px 12px rgba(0,0,0,0.06)",
          minHeight: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2rem",
        }}
      >
        {/* Giant watermark number */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-1rem",
            right: "-0.5rem",
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(6rem, 12vw, 10rem)",
            fontWeight: 700,
            lineHeight: 1,
            color: hovered ? "rgba(61,112,104,0.18)" : "rgba(28,28,28,0.06)",
            letterSpacing: "-0.05em",
            userSelect: "none",
            transition: "color 700ms cubic-bezier(0.16,1,0.3,1)",
            pointerEvents: "none",
          }}
        >
          {num}
        </div>

        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              color: hovered ? "rgba(180,180,180,0.7)" : "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            {project.year}
          </span>
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: statusColors[project.status] || "#6b6b6b",
              border: `1px solid ${statusColors[project.status] || "#6b6b6b"}55`,
              borderRadius: "2px",
              padding: "3px 10px",
              backdropFilter: "blur(8px)",
              background: `${statusColors[project.status] || "#6b6b6b"}11`,
            }}
          >
            {project.status === "in-progress" ? "IN PROGRESS" : project.status.toUpperCase()}
          </span>
        </div>

        {/* Content */}
        <div style={{ zIndex: 1, flex: 1, paddingTop: "1.5rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
              fontWeight: 400,
              color: hovered ? "rgba(247,246,242,0.97)" : "var(--fg)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
              transition: "color 500ms ease",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: hovered ? "rgba(200,200,200,0.8)" : "var(--muted)",
              lineHeight: 1.65,
              maxWidth: "340px",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech + arrow */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1, paddingTop: "1.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: hovered ? "rgba(247,246,242,0.65)" : "var(--fg)",
                  border: hovered ? "1px solid rgba(255,255,255,0.15)" : "1px solid var(--border)",
                  borderRadius: "2px",
                  padding: "2px 8px",
                  backdropFilter: "blur(8px)",
                }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.1em",
                  color: hovered ? "rgba(180,180,180,0.5)" : "var(--muted)",
                  padding: "2px 4px",
                }}
              >
                +{project.tech.length - 3}
              </span>
            )}
          </div>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: hovered ? "1px solid rgba(255,255,255,0.18)" : "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: hovered ? "rgba(61,112,104,0.35)" : "transparent",
              transform: hovered ? "rotate(-45deg) scale(1.1)" : "rotate(0deg) scale(1)",
              transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke={hovered ? "rgba(247,246,242,0.85)" : "var(--fg)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Hover shimmer line */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
            transform: hovered ? "translateX(100%)" : "translateX(-100%)",
            transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Modal */}
      {modal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "rgba(10,10,10,0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          onClick={() => setModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "700px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "8px",
              background: "linear-gradient(135deg, rgba(20,28,26,0.95) 0%, rgba(12,12,12,0.98) 100%)",
              border: "1px solid rgba(61,112,104,0.3)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(61,112,104,0.1)",
              padding: "3rem",
              position: "relative",
            }}
          >
            <button
              onClick={() => setModal(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "2px",
                color: "rgba(247,246,242,0.6)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                padding: "5px 12px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              ESC
            </button>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(180,180,180,0.5)", textTransform: "uppercase" }}>{project.year}</span>
              <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: statusColors[project.status] || "#6b6b6b", border: `1px solid ${statusColors[project.status] || "#6b6b6b"}55`, borderRadius: "2px", padding: "3px 10px" }}>
                {project.status === "in-progress" ? "IN PROGRESS" : project.status.toUpperCase()}
              </span>
            </div>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 400, color: "rgba(247,246,242,0.95)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
              {project.title}
            </h2>

            <p style={{ fontSize: "0.9375rem", color: "rgba(180,180,180,0.8)", lineHeight: 1.8, marginBottom: "2rem" }}>
              {project.longDescription}
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(180,180,180,0.4)", marginBottom: "0.75rem" }}>Tech Stack</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(247,246,242,0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px", padding: "3px 10px" }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f7f6f2", backgroundColor: "var(--accent)", border: "1px solid var(--accent)", borderRadius: "2px", padding: "10px 22px", textDecoration: "none" }}>
                  LIVE DEMO →
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(247,246,242,0.7)", backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px", padding: "10px 22px", textDecoration: "none" }}>
                  GITHUB →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Projects() {
  const { projects } = projectsData;

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "var(--bg)",
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div>
            <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
              All Projects
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--fg)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              BUILT &amp; SHIPPED
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>
            {projects.length} PROJECTS
          </p>
        </div>

        {/* Glass Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}
          className="projects-glass-grid"
        >
          {projects.map((project, i) => (
            <GlassProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-glass-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
