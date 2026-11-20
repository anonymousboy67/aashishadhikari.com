"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { affiliations, profile, stats } from "@/content/profile";
import { Arrow, CountUp } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1240px] px-4 pt-6 sm:px-8 sm:pt-10">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#efeff1] via-[#e9e9ec] to-[#dcdce0] lg:min-h-[640px]">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="group relative h-[340px] w-full sm:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]"
        >
          <Image
            src="/photos/portrait-hero.jpg"
            alt="Portrait of Aashish Adhikari"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 640px"
            className="photo-bw object-cover object-[50%_55%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#e9e9ec] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#e9e9ec] lg:via-[#e9e9ec]/10" />
        </motion.div>

        {/* Copy */}
        <div className="relative z-10 px-6 pb-10 pt-2 sm:px-12 lg:max-w-[60%] lg:px-[8%] lg:pb-20 lg:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-[12px] text-ink-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Kathmandu, Nepal · {profile.role}
          </motion.p>

          <h1 className="font-serif text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
            >
              I build AI that
            </motion.span>
            <motion.span
              className="block text-mute"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease }}
            >
              grades fairly.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="mt-7 max-w-[30rem] text-[18px] leading-relaxed text-ink-2 sm:text-[19px]"
          >
            I&apos;m Aashish. I founded IELTSBuddy, where AI scores the English of thousands of Nepali
            students. Now I want to know how much those scores can be trusted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#story" className="btn-dark rounded-xl px-6 py-3 text-[16px] font-medium">
              Read my story
            </a>
            <a href="#contact" className="btn-light rounded-xl px-6 py-3 text-[16px] font-medium">
              Get in touch
            </a>
          </motion.div>

          <div className="mt-12 grid max-w-[34rem] grid-cols-3 gap-4 sm:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.95 + i * 0.1, ease }}
              >
                <div className="font-serif text-[30px] leading-none sm:text-[40px]">
                  <CountUp value={s.value} />
                  <span className="text-mute">{s.suffix}</span>
                </div>
                <div className="mt-2 text-[13px] leading-snug text-ink-2 sm:text-[15px]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating glass card */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="glass group/card absolute right-6 top-[300px] z-20 hidden w-[340px] rounded-2xl p-6 text-white lg:right-12 lg:top-auto lg:bottom-12 lg:block"
        >
          <p className="text-[13px] text-white/60">Fall 2027</p>
          <p className="mt-1 text-[19px] font-medium">Open to graduate study</p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <p className="text-[14px] leading-snug text-white/80">
              NLP · reliability of LLM-based assessment · AI in education.
            </p>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-ink transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
              <Arrow />
            </span>
          </div>
        </motion.a>
      </div>

      {/* Marquee of places my work has lived */}
      <div className="marquee mt-10 overflow-hidden py-4" aria-label="Organisations I have worked or studied with">
        <div className="animate-marquee flex w-max gap-14">
          {[...affiliations, ...affiliations].map((a, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap text-[22px] font-semibold tracking-tight text-ink/80 sm:text-[26px]">
              <span className="h-2 w-2 rotate-45 bg-ink/70" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
