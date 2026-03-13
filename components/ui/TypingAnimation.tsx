"use client";

import { useEffect, useState } from "react";

const phrases = [
  "& AI BUILDER",
  "& NLP RESEARCHER",
  "& DIGITALSEWA FOUNDER",
  "& MS APPLICANT",
];

export default function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && displayed.length < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 60);
      return () => clearTimeout(t);
    }

    if (!isDeleting && displayed.length === current.length) {
      const t = setTimeout(() => setIsDeleting(true), 2800);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length > 0) {
      const t = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span
      style={{
        fontFamily: "var(--font-playfair)",
        fontStyle: "normal",
        color: "var(--muted)",
      }}
    >
      {displayed}
      <span
        className="typing-cursor"
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.85em",
          backgroundColor: "var(--accent)",
          marginLeft: "4px",
          verticalAlign: "middle",
        }}
      />
    </span>
  );
}
