"use client";

import { useState } from "react";
import TypingAnimation from "@/components/ui/TypingAnimation";

function PrimaryButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#work"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-space-mono)",
        fontSize: "0.65rem",
        letterSpacing: hovered ? "0.4em" : "0.3em",
        textTransform: "uppercase" as const,
        color: "#f7f6f2",
        backgroundColor: "var(--accent)",
        border: "1px solid var(--accent)",
        borderRadius: "2px",
        padding: "14px 32px",
        textDecoration: "none",
        transition: "all 700ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      VIEW MY WORK
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 2rem 4rem",
        position: "relative" as const,
        textAlign: "center" as const,
      }}
    >
      {/* Available badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          border: "1px solid var(--border)",
          borderRadius: "2px",
          padding: "6px 16px",
          marginBottom: "3rem",
          backgroundColor: "rgba(61,112,104,0.06)",
        }}
      >
        <span
          className="pulse-dot"
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          AVAILABLE FOR MS 2027
        </span>
      </div>

      {/* Main heading */}
      <h1
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(3rem, 9vw, 9rem)",
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
          maxWidth: "1200px",
        }}
      >
        <span style={{ display: "block", color: "var(--fg)" }}>SOFTWARE</span>
        <span
          style={{
            display: "block",
            fontStyle: "italic",
            color: "var(--muted)",
          }}
        >
          ENGINEER
        </span>
        <span style={{ display: "block", color: "var(--fg)" }}>
          <TypingAnimation />
        </span>
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: "1.125rem",
          color: "var(--muted)",
          maxWidth: "480px",
          lineHeight: 1.6,
          marginBottom: "3rem",
        }}
      >
        Building intelligent systems from Kathmandu, Nepal. MS applicant in AI/ML.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "4rem",
        }}
      >
        <PrimaryButton />
        <a
          href="/cv/Aashish_Adhikari_CV.pdf"
          download
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--fg)",
            border: "1px solid var(--fg)",
            borderRadius: "2px",
            padding: "14px 32px",
            textDecoration: "none",
            transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "var(--fg)";
            el.style.color = "var(--bg)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--fg)";
          }}
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="bounce-arrow"
        onClick={() => {
          document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
        }}
        style={{ cursor: "pointer", opacity: 0.4 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="var(--fg)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
