// Single source of truth for everything on the site.
// Only verified facts live here. Edit this file to update the story.

export const profile = {
  name: "Aashish Adhikari",
  role: "AI engineer · Founder · Researcher",
  location: "Kathmandu, Nepal",
  email: "aashishad67@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/aashish-adhikari-96234b239",
    github: "https://github.com/anonymousboy67",
    ieltsbuddy: "https://ieltsbuddy.app",
    youtube: "https://www.youtube.com/@AashishUncut1.0",
  },
  applying: "Applying for graduate study in AI / NLP · Fall 2027",
  researchInterests: [
    "Natural language processing",
    "Reliability & calibration of LLM-based assessment",
    "Automated writing & speech evaluation",
    "AI in education",
  ],
};

export const stats = [
  { value: "3.93", suffix: "/4", label: "GPA · Summa Cum Laude" },
  { value: "2,500", suffix: "+", label: "Students on IELTSBuddy" },
  { value: "1", suffix: "", label: "National pension system shipped" },
];

export const affiliations = [
  "Westcliff University",
  "Neural AI",
  "IELTSBuddy",
  "CAS Total Solutions",
  "NPPF Bhutan",
  "NASA Space Apps",
  "Presidential Innovista",
  "Edtraa",
];

export type Chapter = {
  date: string;
  title: string;
  org: string;
  body: string;
  tag: string;
};

export const journey: Chapter[] = [
  {
    date: "Jul – Sep 2024",
    tag: "Curiosity",
    title: "Content Creator & Research Intern",
    org: "Edtraa.com · Krezona Technology (part-time)",
    body: "Researched and scripted video guides on building startups in Nepal. Interviewed founders, directed shoots, presented on camera and edited in Premiere Pro. I learned how founders think before I became one.",
  },
  {
    date: "Oct 2024",
    tag: "First ML problem",
    title: "NASA International Space Apps Challenge",
    org: "Kathmandu · hosted by NRCC",
    body: "A 36-hour hackathon. Using a public Kaggle dataset and machine-learning models, our team analysed how climate variables relate to changes in Himalayan snow cover.",
  },
  {
    date: "Nov 2024 – Feb 2025",
    tag: "Engineering",
    title: "Software Engineer Intern",
    org: "CAS Total Solutions",
    body: "Joined the Professional Services team, working with the MERN stack, Next.js and the Frappe framework.",
  },
  {
    date: "Feb 2025 →",
    tag: "Production scale",
    title: "Junior Software Engineer",
    org: "CAS Total Solutions",
    body: "Integrated backend APIs with the Frappe frontend for the Loan Management System of Bhutan's National Pension and Provident Fund (NPPF), validating API formats and data flow end to end. The system went live on 17 June 2026.",
  },
  {
    date: "May 2026",
    tag: "Milestone",
    title: "B.Sc. IT (AI & ML), Summa Cum Laude",
    org: "Westcliff University",
    body: "Graduated with a 3.93 GPA across 120 credits, all taught in English, at Westcliff's Presidential Graduate School campus in Kathmandu.",
  },
  {
    date: "May 2026 →",
    tag: "Founder",
    title: "Founder & CEO",
    org: "Neural AI Private Limited",
    body: "Left a stable job to build IELTSBuddy, an AI-powered IELTS preparation platform for Nepali students, from concept to launch. 2,500+ students have signed up.",
  },
  {
    date: "Nov 2026 →",
    tag: "The question",
    title: "Independent research",
    org: "Reliability of LLM-based IELTS Writing assessment",
    body: "Building at scale raised a question I can't stop thinking about: when an AI hands a student a band score, how much should they trust it?",
  },
];

export const stack = [
  { layer: "Client", items: ["Next.js", "React", "Socket.IO client"] },
  { layer: "API", items: ["Node.js", "Express", "Socket.IO"] },
  { layer: "Jobs", items: ["BullMQ", "Redis"] },
  { layer: "Intelligence", items: ["Gemini API", "Rubric-structured prompts"] },
  { layer: "Data", items: ["MongoDB Atlas", "PostHog (PII removed)"] },
  { layer: "Infra", items: ["DigitalOcean", "Nginx"] },
];

export const researchSteps = [
  {
    n: "01",
    title: "Collect",
    body: "Essays from IELTSBuddy users who consented to research use, paired with human examiner bands.",
  },
  {
    n: "02",
    title: "Score",
    body: "Rubric-structured LLM scoring prompts aligned to the four IELTS Writing criteria.",
  },
  {
    n: "03",
    title: "Measure",
    body: "Agreement with human raters using metrics such as quadratic weighted kappa.",
  },
  {
    n: "04",
    title: "Explain",
    body: "Error analysis by proficiency level, and a written report with a reproducible pipeline.",
  },
];

export const coursework = [
  "Artificial Intelligence & Machine Learning",
  "Artificial Neural Networks & Deep Learning",
  "Knowledge Discovery & Data Science",
  "Information Retrieval",
  "Data Structures & Algorithms Design",
  "Database Design & Analytics",
  "Applied Statistical Analytics",
  "Applied Numerical Analysis",
  "Discrete Mathematics",
  "Applied Calculus",
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"] },
  { group: "AI / ML", items: ["LLM APIs (Gemini)", "Prompt-based scoring", "Feedback design"] },
  { group: "Web & backend", items: ["Next.js", "React", "Node.js / Express", "Frappe"] },
  { group: "Data & infra", items: ["MongoDB", "Redis / BullMQ", "DigitalOcean", "Nginx", "PostHog"] },
];

export const honors = [
  { year: "2026", title: "Summa Cum Laude", org: "Westcliff University" },
  {
    year: "2026",
    title: "Project Exhibitor — Certificate of Recognition",
    org: "Presidential Innovista 2026 · IELTSBuddy: AI-Powered IELTS Prep",
  },
  { year: "2024", title: "Participant", org: "NASA International Space Apps Challenge, Kathmandu" },
  { year: "2024", title: "Data Structures & Algorithms with Java", org: "Apna College" },
];

export const songs = [
  {
    title: "Herirakhey",
    feat: "ft. Muscaan Ghimire",
    views: "5.8k",
    url: "https://www.youtube.com/@AashishUncut1.0",
  },
  {
    title: "Yaadharu",
    feat: "ft. Neewas Rai",
    views: "5.6k",
    url: "https://www.youtube.com/@AashishUncut1.0",
  },
];
