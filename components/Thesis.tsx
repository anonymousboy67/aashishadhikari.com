import { Eyebrow, Reveal } from "./ui";

export default function Thesis() {
  return (
    <section id="story" className="mx-auto max-w-[1240px] scroll-mt-20 px-4 py-24 sm:px-8 sm:py-36">
      <Reveal>
        <Eyebrow n="01">The short version</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-10 max-w-[62rem] font-serif text-[30px] leading-[1.25] tracking-[-0.01em] sm:text-[44px]">
          Every year, thousands of Nepali students pay for IELTS prep with outdated material.{" "}
          <span className="text-mute">I left my engineering job to fix that, and built an AI that scores
          their writing and speaking.</span> It worked. Then I found it could be{" "}
          <em className="italic text-accent">confidently wrong</em>.
        </p>
      </Reveal>
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          ["The builder", "Shipped production software for a national pension fund, then built a platform 2,500+ students use."],
          ["The finding", "Partial attempts were quietly inflating band scores. I traced it, then designed a validation layer to fix it."],
          ["The question", "How closely do LLM band scores agree with human examiners — and where do they fail? That's what I want to study."],
        ].map(([t, b], i) => (
          <Reveal key={t} delay={0.1 * i} className="rounded-2xl border border-line bg-white/50 p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">0{i + 1}</p>
            <h3 className="mt-4 font-serif text-[24px]">{t}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{b}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
