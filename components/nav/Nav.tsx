"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { href: "#work", label: "WORK" },
  { href: "#about", label: "ABOUT" },
  { href: "#certs", label: "CERTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: scrolled ? "1rem" : "2rem",
        paddingBottom: scrolled ? "1rem" : "2rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        backgroundColor: scrolled ? "rgba(247, 246, 242, 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className={scrolled ? "dark:bg-[rgba(28,28,28,0.85)]" : ""}
    >
      {/* Brand */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          AA
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--fg)",
            opacity: 0.7,
          }}
        >
          AASHISH ADHIKARI
        </span>
      </a>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--fg)",
              textDecoration: "none",
              opacity: 0.7,
              transition: "opacity 300ms ease",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.7")}
          >
            {link.label}
          </a>
        ))}

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            style={{
              border: "1px solid var(--border)",
              borderRadius: "2px",
              padding: "5px 10px",
              background: "none",
              cursor: "pointer",
              color: "var(--fg)",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              transition: "all 500ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>
        )}
      </div>
    </nav>
  );
}
