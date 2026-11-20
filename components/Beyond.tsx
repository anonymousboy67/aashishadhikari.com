import Image from "next/image";
import { profile, songs } from "@/content/profile";
import { Arrow, Eyebrow, Reveal } from "./ui";

export default function Beyond() {
  return (
    <section id="beyond" className="mx-auto max-w-[1240px] scroll-mt-20 px-4 pb-24 sm:px-8 sm:pb-36">
      <Reveal>
        <Eyebrow n="06">Beyond code</Eyebrow>
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal delay={0.1}>
          <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
            I also write <span className="italic">songs</span>
            <span className="text-mute"> in Nepali.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-2">
            I&apos;m an independent recording artist with an official artist channel on YouTube. Music taught me what
            engineering didn&apos;t: finish the thing, put it in front of people, and listen to how they react.
          </p>
          <div className="mt-8 space-y-3">
            {songs.map((s, i) => (
              <a
                key={s.title}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-line bg-white/50 p-4 transition-colors hover:bg-white"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-paper">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-px" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="font-serif text-[21px] leading-tight">{s.title}</p>
                  <p className="text-[14px] text-ink-2">{s.feat}</p>
                </div>
                <span className="font-mono text-[13px] text-mute">0{i + 1} · {s.views} views</span>
              </a>
            ))}
          </div>
          <a
            href={profile.links.youtube}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium underline underline-offset-4"
          >
            @AashishUncut1.0 on YouTube <Arrow />
          </a>
        </Reveal>

        <Reveal delay={0.2} className="group relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
            <Image
              src="/photos/portrait-suit.jpg"
              alt="Aashish in a green suit and sunglasses"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="photo-bw object-cover object-[50%_25%]"
            />
          </div>
          <div className="glass absolute -bottom-6 left-6 right-6 rounded-2xl p-5 text-white sm:left-auto sm:w-72">
            <p className="text-[13px] text-white/60">Official Artist Channel</p>
            <p className="mt-1 font-serif text-[26px]">852 subscribers</p>
            <p className="text-[14px] text-white/70">32 videos · original Nepali music</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
