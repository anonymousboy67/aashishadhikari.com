"use client";

import Image from "next/image";

const stackCards = [
  {
    id: 1,
    content: (
      <div>
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "var(--muted)",
            marginBottom: "1rem",
          }}
        >
          Platform Preview
        </p>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <Image
            src="/projects/digitalsewa.png"
            alt="DigitalSewa platform screenshot"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div>
        {[
          { num: "500+", label: "Freelancers Registered" },
          { num: "20+", label: "Cities Across Nepal" },
          { num: "NPR", label: "Local Payment Support" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "2rem",
                fontWeight: 400,
                color: "var(--accent)",
              }}
            >
              {item.num}
            </span>
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div>
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "var(--muted)",
            marginBottom: "1rem",
          }}
        >
          Tech Stack
        </p>
        {["TypeScript", "Next.js", "MongoDB", "Khalti", "eSewa", "Tailwind CSS"].map((t) => (
          <span
            key={t}
            style={{
              display: "inline-block",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--fg)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "4px 10px",
              margin: "0 0.4rem 0.4rem 0",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div style={{ textAlign: "center" as const }}>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.5rem",
            fontStyle: "italic",
            color: "var(--fg)",
            lineHeight: 1.5,
            marginBottom: "1rem",
          }}
        >
          &ldquo;Built solo from zero to production&rdquo;
        </p>
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          Architecture · UI/UX · Backend · Deployment
        </p>
      </div>
    ),
  },
];

export default function FeaturedProject() {
  return (
    <section
      id="work"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "6rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="featured-grid"
      >
        {/* Left sticky */}
        <div style={{ position: "sticky", top: "8rem" }}>
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1.5rem",
            }}
          >
            Featured Project
          </p>

          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "var(--fg)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            DIGITALSEWA
          </h2>

          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "380px",
            }}
          >
            Nepal&apos;s hyperlocal freelancing platform — connecting service providers
            and clients across 20+ cities with NPR payment support via Khalti and eSewa.
            Built solo from architecture to production.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="https://digitalsewav3.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#f7f6f2",
                backgroundColor: "var(--accent)",
                borderRadius: "2px",
                padding: "10px 20px",
                textDecoration: "none",
                border: "1px solid var(--accent)",
                transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              LIVE DEMO →
            </a>
            <a
              href="https://github.com/anonymousboy67"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--fg)",
                backgroundColor: "transparent",
                borderRadius: "2px",
                padding: "10px 20px",
                textDecoration: "none",
                border: "1px solid var(--border)",
                transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--fg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              GITHUB →
            </a>
          </div>
        </div>

        {/* Right stacking cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {stackCards.map((card) => (
            <StackCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function StackCard({
  card,
}: {
  card: (typeof stackCards)[0];
}) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: "2px",
        padding: "2rem",
        backgroundColor: "var(--bg)",
        transition: "transform 700ms cubic-bezier(0.16,1,0.3,1), border-color 500ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {card.content}
    </div>
  );
}
