"use client";

import { useEffect, useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
}

export default function WordReveal({ text, className }: WordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const words = text.split(" ");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = Array.from(container.querySelectorAll(".word-span"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || "0"
            );
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
            }, index * 60);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    spans.forEach((span) => observer.observe(span));
    return () => observer.disconnect();
  }, []);

  return (
    <p ref={containerRef} className={className} style={{ lineHeight: 1.4 }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-span"
          data-index={i}
          style={{
            opacity: 0.12,
            transition: "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            display: "inline-block",
            marginRight: "0.35em",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
