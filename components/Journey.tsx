"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/content/profile";
import { Eyebrow, Reveal } from "./ui";

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-24 sm:px-8 sm:pb-36">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow n="02">The journey</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
              From curiosity <span className="text-mute">to a research question.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-2">
              Two and a half years, seven chapters. Each one pushed me a little closer to the problem I want to spend
              the next few years on.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-14">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[11px]" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-ink sm:left-[11px]"
          />
          <ol className="space-y-14">
            {journey.map((c, i) => (
              <li key={c.title} className="relative">
                <span
                  className={`absolute -left-10 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border sm:-left-14 sm:h-[23px] sm:w-[23px] ${
                    i === journey.length - 1 ? "border-accent bg-accent" : "border-ink bg-paper"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${i === journey.length - 1 ? "bg-white" : "bg-ink"}`} />
                </span>
                <Reveal>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-mute">
                    <span>{c.date}</span>
                    <span className="rounded-full border border-line px-2 py-0.5 normal-case tracking-normal text-ink-2">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-[26px] leading-tight sm:text-[30px]">{c.title}</h3>
                  <p className="mt-1 text-[15px] font-medium text-ink-2">{c.org}</p>
                  <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-ink-2">{c.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
