"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { profile } from "@/content/profile";

const items = [
  { href: "#story", label: "Story" },
  { href: "#ieltsbuddy", label: "IELTSBuddy" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#beyond", label: "Beyond code" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-serif text-[15px] font-semibold text-paper">
            A
          </span>
          <span className="text-[17px] font-medium tracking-tight">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-8 text-[15px] text-ink-2 md:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="transition-colors hover:text-ink">
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-dark hidden rounded-xl px-5 py-2.5 text-[14px] font-medium sm:inline-block">
            Get in touch
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-line md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-px w-4 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-4 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
          {[...items, { href: "#contact", label: "Contact" }].map((i) => (
            <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-2 text-[17px]">
              {i.label}
            </a>
          ))}
        </nav>
      )}

      <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-ink" />
    </header>
  );
}
