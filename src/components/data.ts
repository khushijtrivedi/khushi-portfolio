// data.ts — single source of truth for ALL content

export const SITE_META = {
  name: 'Khushi Trivedi',
  role: 'Full Stack Software Engineer',
  roleShort: 'full stack engineer',
  location: 'Surat, Gujarat, India',
  email: 'khushi.trivedi.j@gmail.com',
  emailHref: 'mailto:khushi.trivedi.j@gmail.com',
  linkedin: 'linkedin.com/in/khushitrivedij',
  linkedinHref: 'https://linkedin.com/in/khushitrivedij',
  github: 'github.com/khushijtrivedi',
  githubHref: 'https://github.com/khushijtrivedi',
  tagline: 'Building AI-powered products from Surat to the stars',
  bio: `React · Next.js · TypeScript · LangChain · AWS · Mastra\nShipping features that real people use every day.\nMaster's from DAIICT · Agentic AI · Things that actually work.`,
  openToWork: true,
  footerQuip: 'built with ☕ yarn & way too many tabs open',
} as const

export const STAR_WARS_INTRO = {
  episode: 'Episode I',
  title: 'A New Engineer',
  paragraphs: [
    `I'm a Full Stack Engineer from Surat, Gujarat. I graduated from DAIICT with an M.Sc. in Information Technology and I build things that actually work.`,
    `My stack: React, Next.js, TypeScript on the frontend. Node.js, microservices, AWS Lambda, S3, SQS on the back. LangChain and Mastra for the AI pieces.`,
    `At NewVariable Inc. I helped take a SaaS from zero to paid — Stripe subscriptions, passkey auth, agentic workflows, a mobile app via Capacitor. 20+ features shipped. 8,000+ users.`,
    `I'm looking for a team that moves fast, trusts engineers to own their work, and builds things that matter.`,
  ],
  highlightWords: ['Surat, Gujarat', 'React, Next.js, TypeScript', 'NewVariable Inc.'],
} as const

export const HERO_PILLS: { label: string; color: 'gold' | 'cream' | 'rust' }[] = [
  { label: 'React · Next.js · TS',      color: 'gold'  },
  { label: 'LangChain · Mastra · LLMs', color: 'cream' },
  { label: 'AWS S3 · Lambda · SQS',     color: 'gold'  },
  { label: 'Agentic Workflows',          color: 'cream' },
  { label: 'Stripe · BetterAuth · 2FA', color: 'rust'  },
  { label: 'Node.js · Microservices',   color: 'rust'  },
]

export const HERO_CTA = {
  primary: 'View My Work ↓',
  secondary: 'Get In Touch',
  contactButton: '✦ Send a Transmission ✦',
  contactDesc: `I'm looking for a team that moves fast, trusts engineers to own their work end-to-end, and builds products that matter. If that's you, let's talk.`,
  openBadge: 'currently open to new roles',
  contactTagline: "Whether you have a role, a project, or just want to talk about crochet patterns — I'm easy to reach.",
} as const

export const SECTION_HEADERS = {
  work:      { num: '01', title: 'The',        em: 'Work',       sub: 'Every career is a pour-over. Seed, grind, brew.' },
  education: { num: '02', title: 'The',        em: 'Foundation', sub: 'Where curiosity met structure.' },
  skills:    { num: '03', title: 'The',        em: 'Stack',      sub: 'The tools I reach for. Earned through shipping, not just learning.' },
  life:      { num: '04', title: 'Beyond the', em: 'Code',       sub: "What I do when I'm not at a keyboard shapes how I think when I am." },
  contact:   { num: '05', title: 'Find',       em: 'Me',         sub: '' },
  cta:       { title: "Let's Build Something", sub: `I'm looking for a team that moves fast, trusts engineers to own their work end-to-end, and builds products that matter. If that's you, let's talk.` },
} as const

export const JOBS = [
  {
    period: 'May 2024 – Aug 2024',
    role: 'Frontend Web Developer Intern',
    company: 'Speech Lab (NLTM), DA-IICT · Gandhinagar',
    stage: 'Green Cherry',
    stageSub: 'Raw potential. The origin.',
    color: '#5a8a4a',
    icon: '🫒',
    bullets: [
      'Integrated 2 speech recognition APIs and ML frameworks for speech disorder diagnostics',
      'Built web modules with JavaScript, Bootstrap, and REST APIs across 3 research pipelines',
    ],
  },
  {
    period: 'Jan 2025 – Jun 2025',
    role: 'JavaScript Engineer Intern',
    company: 'NewVariable Inc. · Remote',
    stage: 'Grinding the Beans',
    stageSub: 'Getting serious. The craft begins.',
    color: '#8b5e3c',
    icon: '⚙️',
    bullets: [
      'Contributed to a SaaS platform serving 8,000+ active users — 12 production features shipped',
      'Designed and implemented a Stripe-powered subscription model, enabling the product to go paid',
      'Built an AI-powered task suggestion feature using LLM integration',
      'Optimized high-volume task list rendering, dramatically improving app speed',
    ],
  },
  {
    period: 'Jun 2025 – Present',
    role: 'Full Stack Software Engineer',
    company: 'NewVariable Inc. · Remote',
    stage: 'Slow Drip — The Real Brew',
    stageSub: 'Full extraction. Career in flow.',
    color: '#c8813a',
    icon: '☕',
    bullets: [
      'Developed and maintained 20+ features for a microservices-based finance SaaS using React and Next.js',
      'Designed 6 agentic AI workflows using LangChain and Mastra for automated multi-step financial data processing',
      'Built 3 major modules from scratch: recurring transactions, goal tracking, and a rule-based automation engine',
      'Shipped a cross-platform mobile app using Capacitor, extending the SaaS to mobile users',
      'Migrated auth to BetterAuth — passkey login, 2FA, multi-session support across user tiers',
      'Integrated AWS S3, SQS, and Lambda for document storage and async processing',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'Master of Computer Science',
    field: 'Information Technology',
    highlight: 'M.Sc. IT',
    school: 'DAIICT, Gandhinagar',
    period: 'Aug 2023 – May 2025',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Computer Science',
    field: 'Information Technology',
    highlight: 'B.Sc. IT',
    school: 'VNSGU, Surat',
    period: 'Aug 2020 – May 2023',
    icon: '📚',
  },
]

export const SKILL_GROUPS = [
  { category: 'Frontend',        icon: '🖼️', skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Backend',         icon: '⚙️', skills: ['Node.js', 'REST APIs', 'Microservices', 'Flask', 'Python'] },
  { category: 'AI & LLM',        icon: '🤖', skills: ['LangChain', 'Mastra', 'LLM Integrations', 'Agentic Workflows', 'Prompt Engineering'] },
  { category: 'Database',        icon: '🗄️', skills: ['MySQL', 'SQL'] },
  { category: 'Cloud & DevOps',  icon: '☁️', skills: ['AWS S3', 'AWS Lambda', 'AWS SQS', 'Serverless', 'Docker', 'Capacitor'] },
  { category: 'Auth & Payments', icon: '🔐', skills: ['BetterAuth', 'Passkey', '2FA', 'Stripe API'] },
  { category: 'Tools',           icon: '🛠️', skills: ['Git', 'GitHub'] },
]

export const HOBBIES = [
  {
    icon: '🧶', name: 'Crochet & Knitting', color: '#c8813a',
    desc: "I find debugging a pattern and debugging code surprisingly similar — both need patience, a systematic eye, and the willingness to unravel and start over. Every project is its own finite state machine.",
  },
  {
    icon: '📖', name: 'Reading', color: '#6b3a1f',
    desc: "Mostly sci-fi and philosophy. Reading across disciplines helps me connect dots I'd otherwise miss — which shows up in how I approach system design and problem-solving.",
  },
  {
    icon: '✏️', name: 'Sketching', color: '#4a7c59',
    desc: "I think visually. I'll sketch out a UI on paper before I open Figma, and wireframe on a napkin before writing a line of code. It keeps me from over-engineering before I've understood the shape of the problem.",
  },
  {
    icon: '🌊', name: 'Swimming', color: '#3a6b8a',
    desc: "Long-form focus in a world of constant notifications. The same patience it takes to hold a rhythm for 2km is what gets me through a 3AM production incident without panicking.",
  },
]

export const CONTACT = [
  { label: 'Email',    val: 'khushi.trivedi.j@gmail.com',     href: 'mailto:khushi.trivedi.j@gmail.com' },
  { label: 'LinkedIn', val: 'linkedin.com/in/khushitrivedij', href: 'https://linkedin.com/in/khushitrivedij' },
  { label: 'GitHub',   val: 'github.com/khushijtrivedi',      href: 'https://github.com/khushijtrivedi' },
  { label: 'Location', val: 'Surat, Gujarat, India',          href: '#' },
]