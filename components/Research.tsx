import { profile, researchSteps } from "@/content/profile";
import { Eyebrow, Reveal } from "./ui";

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-[1240px] scroll-mt-20 px-4 py-24 sm:px-8 sm:py-36">
      <Reveal>
        <Eyebrow n="04">What I&apos;m studying</Eyebrow>
      </Reveal>
      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
            Can an LLM grade like an examiner?
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-[13px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            In progress · started Nov 2026
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[18px] leading-relaxed text-ink-2">
            <strong className="font-semibold text-ink">Reliability of LLM-based IELTS Writing assessment.</strong> An
            independent study of how closely LLM-generated band scores agree with human examiner bands, and where they
            drift. A score that decides someone&apos;s study-abroad plans should come with an honest measure of how
            much to trust it.
          </p>
          <p className="mt-4 text-[15px] text-mute">
            No results are claimed yet. The deliverable is a written technical report with a reproducible pipeline.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {researchSteps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08} className="group relative rounded-2xl border border-line bg-white/50 p-7 transition-colors hover:bg-white">
            <span className="font-serif text-[48px] leading-none text-line transition-colors group-hover:text-ink">{s.n}</span>
            <h3 className="mt-6 text-[19px] font-semibold">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 rounded-2xl bg-card p-8 sm:p-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Research interests</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {profile.researchInterests.map((r) => (
            <span key={r} className="rounded-full bg-paper px-4 py-2 font-serif text-[18px] sm:text-[20px]">
              {r}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
