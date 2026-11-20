import { coursework, honors, skills } from "@/content/profile";
import { CountUp, Eyebrow, Reveal } from "./ui";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1240px] scroll-mt-20 px-4 pb-24 sm:px-8 sm:pb-36">
      <Reveal>
        <Eyebrow n="05">Foundations</Eyebrow>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Reveal className="rounded-[24px] bg-gradient-to-br from-[#efeff1] to-[#dcdce0] p-8 sm:p-10 lg:col-span-2">
          <p className="text-[15px] text-ink-2">Westcliff University · Irvine, California, USA</p>
          <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[44px]">
            B.Sc. Information Technology
            <span className="block text-mute">Concentration in AI & Machine Learning</span>
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-2">
            Completed May 2026 at Westcliff&apos;s Presidential Graduate School campus in Kathmandu, a WSCUC-listed
            additional location. 120 credits, all instruction in English.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span key={c} className="rounded-lg border border-line bg-white/70 px-3 py-1.5 text-[14px]">
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-between rounded-[24px] bg-ink p-8 text-paper sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Cumulative GPA</p>
          <div>
            <div className="font-serif text-[96px] leading-none">
              <CountUp value="3.93" />
            </div>
            <p className="mt-2 text-white/60">out of 4.00</p>
          </div>
          <p className="mt-8 font-serif text-[24px] italic">Summa Cum Laude</p>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Reveal className="rounded-[24px] border border-line bg-white/50 p-8 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Honors & recognition</p>
          <ul className="mt-6 divide-y divide-line">
            {honors.map((h) => (
              <li key={h.title} className="flex gap-6 py-4">
                <span className="font-mono text-[13px] text-mute">{h.year}</span>
                <div>
                  <p className="text-[17px] font-medium">{h.title}</p>
                  <p className="text-[14px] text-ink-2">{h.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[24px] border border-line bg-white/50 p-8 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Toolkit</p>
          <div className="mt-6 space-y-5">
            {skills.map((s) => (
              <div key={s.group}>
                <p className="text-[14px] text-mute">{s.group}</p>
                <p className="mt-1 text-[17px]">{s.items.join(" · ")}</p>
              </div>
            ))}
            <div>
              <p className="text-[14px] text-mute">Languages</p>
              <p className="mt-1 text-[17px]">Nepali (native) · English (fluent)</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
