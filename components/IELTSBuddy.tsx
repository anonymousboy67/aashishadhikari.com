import Image from "next/image";
import { profile, stack } from "@/content/profile";
import { Arrow, CountUp, Reveal } from "./ui";

const gallery = [
  { src: "/photos/pitch.jpg", alt: "Aashish presenting IELTSBuddy", caption: "Presenting IELTSBuddy", cls: "row-span-2" },
  { src: "/photos/booth-demo.jpg", alt: "Live demo at a student exhibition booth", caption: "Live demo · Presidential Innovista 2026", cls: "" },
  { src: "/photos/startup-meeting.jpg", alt: "Team meeting around a table", caption: "Building with the team", cls: "" },
  { src: "/photos/expo-demo.jpg", alt: "Explaining the product to students", caption: "Walking students through the product", cls: "row-span-2" },
  { src: "/photos/team.jpg", alt: "Aashish with three collaborators", caption: "Meetup with collaborators", cls: "" },
  { src: "/photos/innovista-demo.jpg", alt: "Showing the product to visitors", caption: "Showing judges and visitors", cls: "" },
];

export default function IELTSBuddy() {
  return (
    <section id="ieltsbuddy" className="scroll-mt-16 bg-ink py-24 text-paper sm:py-36">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            <span className="text-white">03</span>
            <span className="h-px w-8 bg-white/20" />
            <span>What I built</span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-[72px]">
              IELTSBuddy
              <span className="block text-white/40">feedback in minutes, not weeks.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[18px] leading-relaxed text-white/75">
              An AI-powered IELTS preparation platform for Nepali students, with LLM-based scoring and feedback
              across all four modules: Listening, Reading, Writing and Speaking. I designed the system, wrote most of the
              code, and lead a small team with a technical advisor and interns. We grew through organic short-form content.
            </p>
            <a
              href={profile.links.ieltsbuddy}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-medium text-ink"
            >
              Visit ieltsbuddy.app <Arrow />
            </a>
          </Reveal>
        </div>

        {/* numbers */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 lg:grid-cols-4">
          {[
            ["2,500", "+", "student sign-ups"],
            ["4", "", "IELTS modules scored by AI"],
            ["2", " min", "to a band estimate"],
            ["1", "", "validation layer for honest bands"],
          ].map(([v, s, l]) => (
            <div key={l} className="bg-ink p-6 sm:p-8">
              <div className="font-serif text-[40px] leading-none sm:text-[52px]">
                <CountUp value={v} />
                <span className="text-white/40">{s}</span>
              </div>
              <p className="mt-3 text-[14px] text-white/60">{l}</p>
            </div>
          ))}
        </div>

        {/* architecture + integrity story */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">System design</p>
            <div className="mt-5 space-y-2">
              {stack.map((s) => (
                <div
                  key={s.layer}
                  className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 sm:flex-row sm:items-center"
                >
                  <span className="w-32 shrink-0 font-mono text-[12px] uppercase tracking-[0.14em] text-white/50">
                    {s.layer}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="rounded-md bg-white/10 px-2.5 py-1 text-[14px]">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-white/50">
              Scoring runs as queued jobs so long LLM calls never block the student; results stream back live over
              WebSockets.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="rounded-2xl bg-paper p-8 text-ink">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">The moment it got interesting</p>
            <h3 className="mt-4 font-serif text-[30px] leading-tight">The bug that became a research question.</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">
              Students who submitted <em>partial</em> attempts were getting band scores that looked better than they
              deserved. The model wasn&apos;t broken; it was confidently grading what it was given.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-2">
              I diagnosed the defect and designed a validation layer so reported bands stay accurate. It also left me
              with a bigger question: if a fluent model can be wrong this quietly, how should we measure when to trust
              it?
            </p>
            <a href="#research" className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4">
              See the research <Arrow />
            </a>
          </Reveal>
        </div>

        {/* gallery */}
        <div className="mt-24 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-4">
          {gallery.map((g) => (
            <figure key={g.src} className={`group relative overflow-hidden rounded-2xl ${g.cls}`}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="photo-bw object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-[13px] text-white/90">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* press */}
        <Reveal className="mt-24 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="relative mx-auto aspect-[1179/1834] w-full max-w-[300px] overflow-hidden rounded-2xl">
            <Image src="/photos/press.jpg" alt="nepalin24hr news post about IELTSBuddy" fill sizes="300px" className="object-cover" />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">In the press · nepalin24hr</p>
            <blockquote className="mt-5 font-serif text-[30px] leading-[1.2] sm:text-[40px]">
              &ldquo;Nepali students build homegrown AI IELTS platform, challenging current foreign edtech
              solutions.&rdquo;
            </blockquote>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/60">
              Covered as a team of Nepali students building a local alternative, one that tells a student their
              real IELTS band in about two minutes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
