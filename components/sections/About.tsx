"use client";

import WordReveal from "@/components/ui/WordReveal";

const skills = [
  "MERN Stack",
  "Next.js",
  "Python",
  "Frappe / ERPNext",
  "TypeScript",
  "MongoDB",
  "Machine Learning",
  "LLMs & GenAI",
];

const currently = [
  { label: "Reading", value: "Attention Is All You Need + Andrej Karpathy lectures" },
  { label: "Building", value: "DigitalSewa v4 — real-time features + AI matching" },
  { label: "Listening", value: "Original music & ambient coding playlists" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#1c1c1c",
        color: "#f7f6f2",
        padding: "8rem 2rem",
        borderTop: "1px solid #2e2e2e",
        borderBottom: "1px solid #2e2e2e",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "3rem",
          }}
        >
          About
        </p>

        {/* Word reveal paragraph */}
        <WordReveal
          text="I grew up in Kapilvastu, Nepal — where access to technology was limited but curiosity was not. I build platforms that serve real people, write music that no one asked for, and chase problems that matter. Currently: finishing my degree, preparing for MS in AI, and shipping DigitalSewa."
          className="about-text"
        />

        <style>{`
          .about-text {
            font-family: var(--font-playfair);
            font-size: clamp(1.5rem, 3.5vw, 2.5rem);
            font-weight: 300;
            line-height: 1.5;
            letter-spacing: -0.01em;
            margin-bottom: 5rem;
          }
        `}</style>

        {/* Two column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            borderTop: "1px solid #2e2e2e",
            paddingTop: "3rem",
          }}
          className="about-grid"
        >
          {/* Left: Skills */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#6b6b6b",
                marginBottom: "1.5rem",
              }}
            >
              Tech Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#f7f6f2",
                    border: "1px solid #2e2e2e",
                    borderRadius: "2px",
                    padding: "4px 12px",
                    opacity: 0.8,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Currently */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#6b6b6b",
                marginBottom: "1.5rem",
              }}
            >
              Currently
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currently.map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#f7f6f2",
                      opacity: 0.75,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
