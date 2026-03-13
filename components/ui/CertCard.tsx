"use client";

import { useState } from "react";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  category: string;
}

const categoryColors: Record<string, string> = {
  "AI/ML": "#3d7068",
  Development: "#5c6a3d",
  Networking: "#3d5c68",
  Marketing: "#683d5c",
};

const issuerIcons: Record<string, string> = {
  "Google Cloud": "G",
  Google: "G",
  "Apna College": "A",
  "Udemy / Dr. Angela Yu": "U",
  "Cisco (Credly Verified)": "C",
  "Cisco Networking Academy": "C",
  "Presidential Business School": "P",
};

export default function CertCard({ cert }: { cert: Certification }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: `1px solid ${isHovered ? "var(--fg)" : "var(--border)"}`,
        borderRadius: "2px",
        padding: "1.25rem",
        backgroundColor: "var(--bg)",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        cursor: cert.credentialUrl ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
      onClick={() => {
        if (cert.credentialUrl) window.open(cert.credentialUrl, "_blank");
      }}
    >
      {/* Issuer icon + category */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-playfair)",
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--accent)",
          }}
        >
          {issuerIcons[cert.issuer] || cert.issuer[0]}
        </div>
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: categoryColors[cert.category] || "var(--muted)",
            border: `1px solid ${categoryColors[cert.category] || "var(--border)"}`,
            borderRadius: "2px",
            padding: "2px 7px",
          }}
        >
          {cert.category}
        </span>
      </div>

      {/* Name */}
      <h4
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1rem",
          fontWeight: 400,
          color: "var(--fg)",
          lineHeight: 1.4,
        }}
      >
        {cert.name}
      </h4>

      {/* Issuer + date */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--muted)",
          }}
        >
          {cert.issuer}
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          {cert.date}
        </span>
      </div>
    </div>
  );
}
