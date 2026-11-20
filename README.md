<div align="center">

# aashishadhikari.com

**The personal website of Aashish Adhikari: AI engineer, founder, and NLP researcher based in Kathmandu, Nepal.**

[Live site](https://aashish-portfolio-ten.vercel.app) · [IELTSBuddy](https://ieltsbuddy.app) · [LinkedIn](https://www.linkedin.com/in/aashish-adhikari-96234b239)

</div>

---

## About

This site tells one story from start to finish. I built an AI platform that scores the English of thousands of students, then found that it could be confidently wrong. That finding is now my research question.

It is written for admissions committees, scholarship reviewers and collaborators who want the full picture in a few minutes.

| Section | What it covers |
| --- | --- |
| **Hero** | Who I am, what I build, and key numbers at a glance |
| **The short version** | The problem, the build, and the question that came out of it |
| **Journey** | A scroll-animated timeline from 2024 to today |
| **IELTSBuddy** | Case study: system design, a scoring-integrity fix, press coverage |
| **Research** | Ongoing study on the reliability of LLM-based IELTS Writing assessment |
| **Foundations** | B.Sc. IT (AI & ML), Summa Cum Laude, coursework, honors, skills |
| **Beyond code** | Original Nepali music released on YouTube |
| **Contact** | Email, LinkedIn, GitHub |

## Highlights

- **Founder & CEO, Neural AI:** built [IELTSBuddy](https://ieltsbuddy.app), an AI-powered IELTS preparation platform with 2,500+ student sign-ups
- **Software Engineer, CAS Total Solutions:** integrated APIs for the Loan Management System of Bhutan's National Pension and Provident Fund, live since June 2026
- **B.Sc. Information Technology (AI & ML), Westcliff University:** 3.93 GPA, Summa Cum Laude
- **Research interests:** NLP, reliability and calibration of LLM-based assessment, automated writing and speech evaluation

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 with custom design tokens |
| Motion | Framer Motion: scroll progress, reveal-on-scroll, animated counters |
| Typography | Lora (serif) and Geist (sans and mono) via `next/font` |
| Hosting | Vercel, with Vercel Analytics |

## Project structure

```
app/
  layout.tsx        Fonts, metadata, analytics
  page.tsx          Composes the page sections in story order
  globals.css       Design tokens, grain texture, utilities
components/
  Nav.tsx           Sticky nav with scroll-progress bar
  Hero.tsx          Hero card, stats, affiliation marquee
  Thesis.tsx        The short version
  Journey.tsx       Scroll-drawn timeline
  IELTSBuddy.tsx    Product case study, gallery, press
  Research.tsx      Research question and method
  Education.tsx     Degree, GPA, honors, toolkit
  Beyond.tsx        Music
  Contact.tsx       Contact links and footer
  ui.tsx            Shared primitives (Reveal, CountUp, Eyebrow, Arrow)
content/
  profile.ts        Single source of truth for all text, numbers and links
public/photos/      Optimised photography
```

## Getting started

Requires Node.js 20 or later.

```bash
git clone https://github.com/anonymousboy67/aashishadhikari.com.git
cd aashishadhikari.com
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Updating content

All copy, figures and links live in [`content/profile.ts`](content/profile.ts), so you can update the site without touching any component code. Photos go in `public/photos/`.

## Design principles

- **One argument, top to bottom.** Every section supports a single narrative.
- **Nothing inflated.** Claims match the CV exactly, and work in progress is labelled as such.
- **Restrained and editorial.** A monochrome palette with a single crimson accent, serif headlines and generous whitespace.
- **Accessible and responsive.** Semantic HTML, `prefers-reduced-motion` support, and layouts tested from 375px phones to wide desktops.

## Contact

**Aashish Adhikari** · Kathmandu, Nepal
[aashishad67@gmail.com](mailto:aashishad67@gmail.com) · [LinkedIn](https://www.linkedin.com/in/aashish-adhikari-96234b239) · [GitHub](https://github.com/anonymousboy67)

---

<sub>© 2026 Aashish Adhikari. The source code may be used for reference. Personal content, photographs and music belong to the author.</sub>
