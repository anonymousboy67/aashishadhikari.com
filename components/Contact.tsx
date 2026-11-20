import { profile } from "@/content/profile";
import { Arrow, Reveal } from "./ui";

export default function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "aashish-adhikari", href: profile.links.linkedin },
    { label: "GitHub", value: "anonymousboy67", href: profile.links.github },
    { label: "Product", value: "ieltsbuddy.app", href: profile.links.ieltsbuddy },
  ];

  return (
    <section id="contact" className="scroll-mt-16 px-4 pb-6 sm:px-8">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[28px] bg-ink px-6 py-16 text-paper sm:px-14 sm:py-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">07 · Let&apos;s talk</p>
          <h2 className="mt-8 max-w-4xl font-serif text-[42px] leading-[1.04] tracking-[-0.02em] sm:text-[72px]">
            Looking for a lab that cares <span className="text-white/40">whether AI is right, not just fluent.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/70">
            I&apos;m applying for graduate study in AI and NLP for Fall 2027. If you&apos;re on a scholarship or
            admissions committee, or you research assessment and evaluation, I&apos;d love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-end justify-between gap-4 bg-ink p-6 transition-colors hover:bg-[#1f1f1f]"
            >
              <div className="min-w-0">
                <p className="text-[13px] text-white/50">{l.label}</p>
                <p className="mt-1 truncate text-[16px]">{l.value}</p>
              </div>
              <Arrow className="shrink-0 text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>

      <footer className="mx-auto flex max-w-[1240px] flex-col justify-between gap-2 px-2 py-8 text-[14px] text-mute sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name} · Kathmandu, Nepal</p>
        <p>Built with Next.js, by me.</p>
      </footer>
    </section>
  );
}
