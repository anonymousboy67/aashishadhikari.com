"use client";

import { useState, FormEvent } from "react";

const socials = [
  {
    label: "GITHUB",
    href: "https://github.com/anonymousboy67",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/feed/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "EMAIL",
    href: "mailto:aashishadhikari@example.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      // Demo mode — just simulate success
      setTimeout(() => setStatus("sent"), 1000);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "none",
    border: "none",
    borderBottom: "1px solid var(--border)",
    borderRadius: 0,
    padding: "12px 0",
    fontSize: "0.9375rem",
    color: "var(--fg)",
    fontFamily: "inherit",
    transition: "border-color 300ms ease",
    outline: "none",
  } as const;

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--fg)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            LET&apos;S CONNECT
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "360px",
            }}
          >
            Open to MS program discussions, collaborations, and interesting
            conversations about AI, software, and building things that matter.
          </p>

          {/* Social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "EMAIL" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--fg)",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  padding: "8px 16px",
                  width: "fit-content",
                  transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--fg)";
                }}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div>
          {status === "sent" ? (
            <div
              style={{
                border: "1px solid var(--accent)",
                borderRadius: "2px",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  color: "var(--accent)",
                  marginBottom: "0.75rem",
                }}
              >
                Message Sent
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
                I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {/* Name */}
              <div style={{ marginBottom: "1.75rem" }}>
                <label
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = "var(--fg)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = "var(--border)")
                  }
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "1.75rem" }}>
                <label
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = "var(--fg)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = "var(--border)")
                  }
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "2.5rem" }}>
                <label
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  style={{
                    ...inputStyle,
                    resize: "none" as const,
                    paddingTop: "8px",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = "var(--fg)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = "var(--border)")
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  backgroundColor: "var(--accent)",
                  color: "#f7f6f2",
                  border: "1px solid var(--accent)",
                  borderRadius: "2px",
                  padding: "16px",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  opacity: status === "sending" ? 0.7 : 1,
                  transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending") {
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = status === "sending" ? "0.7" : "1";
                }}
              >
                {status === "sending" ? "SENDING..." : "SEND MESSAGE →"}
              </button>

              {status === "error" && (
                <p
                  style={{
                    marginTop: "1rem",
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "#c0392b",
                    textTransform: "uppercase",
                  }}
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
