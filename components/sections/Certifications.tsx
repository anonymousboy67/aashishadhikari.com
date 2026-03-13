"use client";

import { useState, useRef, useEffect } from "react";
import certsData from "@/data/certifications.json";

const categories = ["ALL", "AI/ML", "Development", "Networking", "Marketing"];

const categoryGradients: Record<string, string> = {
  "AI/ML":       "linear-gradient(135deg, rgba(61,112,104,0.3) 0%, rgba(20,60,50,0.15) 100%)",
  Development:   "linear-gradient(135deg, rgba(80,100,60,0.3) 0%, rgba(30,40,20,0.15) 100%)",
  Networking:    "linear-gradient(135deg, rgba(40,80,120,0.3) 0%, rgba(15,30,50,0.15) 100%)",
  Marketing:     "linear-gradient(135deg, rgba(100,40,80,0.3) 0%, rgba(40,15,30,0.15) 100%)",
};

const categoryAccents: Record<string, string> = {
  "AI/ML":       "#3d7068",
  Development:   "#6a8c50",
  Networking:    "#3d6888",
  Marketing:     "#884d6a",
};

const issuerInitials: Record<string, string> = {
  "Google Cloud": "GC",
  Google: "G",
  "Apna College": "AC",
  "Udemy / Dr. Angela Yu": "U",
  "Cisco (Credly Verified)": "CI",
  "Cisco Networking Academy": "CI",
  "Presidential Business School": "PB",
};

interface Cert {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  category: string;
}

function GlassCertCard({ cert, index }: { cert: Cert; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const accent = categoryAccents[cert.category] || "#3d7068";
  const gradient = categoryGradients[cert.category] || categoryGradients["AI/ML"];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setTimeout(() => setVisible(true), index * 60);
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, "_blank")}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
        padding: "1.75rem 1.5rem",
        cursor: cert.credentialUrl ? "pointer" : "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
        transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1), box-shadow 400ms ease, border-color 400ms ease",
        background: hovered ? gradient : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: hovered ? `1px solid ${accent}55` : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px ${accent}22, inset 0 1px 0 rgba(255,255,255,0.1)`
          : "0 2px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Top: Initials circle + category pill */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: hovered ? `${accent}33` : "rgba(255,255,255,0.06)",
            border: `1px solid ${hovered ? accent + "55" : "rgba(255,255,255,0.1)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: hovered ? accent : "rgba(247,246,242,0.5)",
            transition: "all 400ms ease",
          }}
        >
          {issuerInitials[cert.issuer] || cert.issuer[0]}
        </div>

        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: hovered ? accent : "rgba(180,180,180,0.5)",
            border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "20px",
            padding: "3px 10px",
            background: hovered ? `${accent}11` : "transparent",
            transition: "all 400ms ease",
          }}
        >
          {cert.category}
        </span>
      </div>

      {/* Name */}
      <h4
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1.05rem",
          fontWeight: 400,
          color: hovered ? "rgba(247,246,242,0.98)" : "rgba(247,246,242,0.75)",
          lineHeight: 1.4,
          transition: "color 400ms ease",
          flex: 1,
        }}
      >
        {cert.name}
      </h4>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "0.75rem",
          borderTop: `1px solid ${hovered ? accent + "33" : "rgba(255,255,255,0.06)"}`,
          transition: "border-color 400ms ease",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "rgba(180,180,180,0.55)" }}>
          {cert.issuer}
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: hovered ? accent : "rgba(180,180,180,0.4)",
            transition: "color 400ms ease",
          }}
        >
          {cert.date}
        </span>
      </div>

      {/* Hover: top accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 400ms ease",
        }}
      />

      {/* Hover corner shine */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "80px",
          height: "80px",
          background: `radial-gradient(circle at top right, ${accent}22, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 400ms ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [spotlightOn, setSpotlightOn] = useState(false);

  const filtered =
    activeFilter === "ALL"
      ? certsData.certifications
      : certsData.certifications.filter((c) => c.category === activeFilter);

  return (
    <section
      id="certs"
      style={{
        background: "linear-gradient(180deg, #080808 0%, #0a100f 50%, #080808 100%)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient radial */}
      <div aria-hidden style={{ position: "absolute", bottom: 0, right: "10%", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(61,112,104,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
            Certifications
          </p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: "rgba(247,246,242,0.9)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
            CREDENTIALS
          </h2>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: activeFilter === cat
                    ? "1px solid var(--accent)"
                    : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "7px 18px",
                  cursor: "pointer",
                  background: activeFilter === cat
                    ? "rgba(61,112,104,0.25)"
                    : "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(8px)",
                  color: activeFilter === cat ? "var(--accent)" : "rgba(180,180,180,0.6)",
                  transition: "all 400ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
          }}
          onMouseEnter={() => setSpotlightOn(true)}
          onMouseLeave={() => setSpotlightOn(false)}
          style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.875rem" }}
          className="certs-glass-grid"
        >
          {/* Spotlight cursor */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 2,
              background: `radial-gradient(circle 250px at ${mousePos.x}% ${mousePos.y}%, rgba(61,112,104,0.08) 0%, transparent 100%)`,
              opacity: spotlightOn ? 1 : 0,
              transition: "opacity 300ms ease",
              borderRadius: "6px",
            }}
          />

          {filtered.map((cert, i) => (
            <GlassCertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .certs-glass-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .certs-glass-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
