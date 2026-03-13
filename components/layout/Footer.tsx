export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        backgroundColor: "var(--bg)",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "var(--fg)",
            letterSpacing: "0.05em",
          }}
        >
          Aashish Adhikari
        </p>
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.65rem",
            color: "var(--muted)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop: "0.25rem",
          }}
        >
          Kathmandu, Nepal
        </p>
      </div>

      <p
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.65rem",
          color: "var(--muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Built with Next.js · Deployed on Vercel
      </p>

      <p
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.65rem",
          color: "var(--muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        © 2026
      </p>
    </footer>
  );
}
