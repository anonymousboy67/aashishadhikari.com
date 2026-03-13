"use client";

import { useRef, useState } from "react";

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
  archived: "#B4B4B4",
};

const statusLabels: Record<string, string> = {
  live: "LIVE",
  "in-progress": "IN PROGRESS",
  archived: "ARCHIVED",
};

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <>
      <div
        ref={cardRef}
        onClick={() => setIsModalOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          border: "1px solid var(--border)",
          borderRadius: "2px",
          padding: "1.5rem",
          cursor: "pointer",
          backgroundColor: isHovered ? "#fff" : "var(--bg)",
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered
            ? "transform 0.05s ease, background-color 700ms cubic-bezier(0.16,1,0.3,1)"
            : "transform 700ms cubic-bezier(0.16,1,0.3,1), background-color 700ms cubic-bezier(0.16,1,0.3,1)",
          transformStyle: "preserve-3d",
          position: "relative",
          overflow: "hidden",
        }}
        className="dark:hover:bg-white/5"
      >
        {/* Top row: year + status */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {project.year}
          </span>
          <span
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: statusColors[project.status] || "var(--muted)",
              border: `1px solid ${statusColors[project.status] || "var(--border)"}`,
              borderRadius: "2px",
              padding: "2px 8px",
            }}
          >
            {statusLabels[project.status] || project.status}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "var(--fg)",
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--muted)",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--fg)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "2px 8px",
                opacity: 0.7,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translate(0,0)" : "translate(4px,4px)",
            transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 13L13 3M13 3H7M13 3V9"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "2.5rem",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                cursor: "pointer",
                color: "var(--fg)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                padding: "4px 10px",
              }}
            >
              CLOSE
            </button>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.65rem",
                  color: "var(--muted)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {project.year}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: statusColors[project.status] || "var(--muted)",
                  border: `1px solid ${statusColors[project.status] || "var(--border)"}`,
                  borderRadius: "2px",
                  padding: "2px 8px",
                }}
              >
                {statusLabels[project.status] || project.status}
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "2rem",
                fontWeight: 400,
                color: "var(--fg)",
                marginBottom: "1rem",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--fg)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                opacity: 0.85,
              }}
            >
              {project.longDescription}
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: "0.75rem",
                }}
              >
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      padding: "3px 10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#f7f6f2",
                    backgroundColor: "var(--accent)",
                    border: "1px solid var(--accent)",
                    borderRadius: "2px",
                    padding: "8px 20px",
                    textDecoration: "none",
                  }}
                >
                  LIVE DEMO →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--fg)",
                    backgroundColor: "transparent",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    padding: "8px 20px",
                    textDecoration: "none",
                  }}
                >
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
