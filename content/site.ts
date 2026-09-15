/**
 * All website copy lives here so it can be edited without touching components.
 * Items marked `// VERIFY` are commitments or figures to confirm before launch.
 */

export const site = {
  name: "NOMAD Software",
  url: "https://nomadsoftware.cz",
  description:
    "Senior product squads assembled from a global network of independent experts — matched by skill and seniority for every project, accelerated by AI.",
  email: "office@nomadsoftware.com",
  phone: "+420 792 472 073",
  phoneHref: "tel:+420792472073",
  location: "Prague, Czech Republic · Remote worldwide",
};

export const nav = [
  { label: "Model", href: "#model" },
  { label: "Services", href: "#services" },
  { label: "AI Delivery", href: "#ai" },
  { label: "Engagements", href: "#engagements" },
  { label: "Network", href: "#network" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Distributed expert squads · AI-accelerated delivery",
  titleA: "The right experts.",
  titleB: "Assembled for your product.",
  titleC: "Shipping at AI speed.",
  lead:
    "NOMAD builds digital products with squads composed for each project — independent senior specialists from our worldwide network who step in exactly when their skill is needed. No bench. No filler. Just outcomes.",
  primaryCta: { label: "Book a free consultation", href: "#contact" },
  secondaryCta: { label: "See how squads work", href: "#model" },
  proof: [
    { value: "72h", label: "to a proposed squad" }, // VERIFY
    { value: "Week 1", label: "first clickable prototype" }, // VERIFY
    { value: "100%", label: "senior-led delivery" },
  ],
};

export const industries = [
  "Fintech",
  "Healthcare",
  "Energy & Utilities",
  "Retail & E-commerce",
  "SaaS",
  "Logistics",
  "Public sector",
  "Nonprofits",
  "Telco",
  "Insurance",
  "Startups",
  "Enterprise IT",
];

export const problems = [
  {
    title: "Agencies staff who's free, not who's best",
    body: "Fixed benches force-fit whoever is available. Your project inherits their gaps.",
  },
  {
    title: "Hiring takes quarters, markets move in weeks",
    body: "By the time a full-time team is recruited and onboarded, the window has closed.",
  },
  {
    title: "AI stays stuck in the demo",
    body: "Pilots impress in slides, then stall before production, security and real users.",
  },
];

export const model = {
  title: "Squads, not headcount.",
  lead:
    "Every NOMAD project starts with a blank org chart. We compose the team around your goals — then evolve it phase by phase, so you pay for the exact expertise each stage requires.",
  steps: [
    {
      n: "01",
      title: "Scope",
      body: "A senior product lead maps goals, constraints and risks with you — and defines the skills that will actually move the needle.",
    },
    {
      n: "02",
      title: "Match",
      body: "We match roles to vetted independents by skill, seniority, domain experience and time zone. You approve every profile.",
    },
    {
      n: "03",
      title: "Assemble",
      body: "A stable core squad owns delivery. Specialists rotate in and out for security, data, AI or scale — without disrupting velocity.",
    },
    {
      n: "04",
      title: "Deliver",
      body: "Weekly demos, transparent metrics and continuous deployment. You own the code, the IP and the knowledge — always.",
    },
  ],
  phases: [
    {
      id: "discover",
      label: "Discover",
      duration: "2–3 weeks",
      summary: "Validate the problem, shape the product, prototype fast.",
      roles: [
        { role: "Product Lead", level: "Principal", core: true, tz: "CET" },
        { role: "UX Researcher", level: "Senior", core: false, tz: "GMT" },
        { role: "Product Designer", level: "Lead", core: true, tz: "CET" },
        { role: "Solution Architect", level: "Staff", core: true, tz: "EST" },
        { role: "AI Strategist", level: "Senior", core: false, tz: "PST" },
      ],
    },
    {
      id: "build",
      label: "Build",
      duration: "6–16 weeks",
      summary: "Ship production-grade increments with AI-augmented engineering.",
      roles: [
        { role: "Product Lead", level: "Principal", core: true, tz: "CET" },
        { role: "Product Designer", level: "Lead", core: true, tz: "CET" },
        { role: "Solution Architect", level: "Staff", core: true, tz: "EST" },
        { role: "Full-stack Engineer", level: "Senior", core: true, tz: "EET" },
        { role: "Mobile Engineer", level: "Senior", core: true, tz: "WET" },
        { role: "AI / ML Engineer", level: "Staff", core: false, tz: "PST" },
        { role: "QA Automation", level: "Senior", core: false, tz: "IST" },
      ],
    },
    {
      id: "scale",
      label: "Scale",
      duration: "Ongoing",
      summary: "Harden, optimise and grow — with a lean, evolving squad.",
      roles: [
        { role: "Product Lead", level: "Principal", core: true, tz: "CET" },
        { role: "Full-stack Engineer", level: "Senior", core: true, tz: "EET" },
        { role: "Cloud / DevOps", level: "Staff", core: false, tz: "GMT" },
        { role: "Security Specialist", level: "Senior", core: false, tz: "CET" },
        { role: "Data Engineer", level: "Senior", core: false, tz: "EST" },
      ],
    },
  ],
};

export const services = [
  {
    key: "ai",
    title: "AI & Agentic Solutions",
    body: "Copilots, agents and automations built on your own data — taken from idea to secure production, with evaluation and guardrails.",
    tags: ["LLM apps", "RAG", "Agents", "MLOps"],
  },
  {
    key: "design",
    title: "Product & UX/UI Design",
    body: "Research-driven product design with visually striking interfaces and experiences users actually enjoy.",
    tags: ["Research", "Design systems", "Prototyping", "CX"],
  },
  {
    key: "web",
    title: "Web Platforms",
    body: "Fast, accessible, SEO-ready web applications and portals built on modern, edge-deployed stacks.",
    tags: ["Next.js", "React", "TypeScript", "Headless"],
  },
  {
    key: "mobile",
    title: "Mobile Apps",
    body: "Native and cross-platform iOS and Android apps with polished UX, offline resilience and store-ready releases.",
    tags: ["Swift", "Kotlin", "React Native", "Flutter"],
  },
  {
    key: "backend",
    title: "Backend & Cloud",
    body: "Scalable APIs, integrations and cloud infrastructure engineered for security, reliability and cost efficiency.",
    tags: ["Node", "Python", "Go", "AWS · Azure · GCP"],
  },
  {
    key: "modernize",
    title: "Modernization & Integration",
    body: "Untangle legacy systems step by step — new experiences on top, clean architecture underneath, no big-bang risk.",
    tags: ["Legacy", "APIs", "Data migration", "Enterprise"],
  },
];

export const ai = {
  title: "Senior judgement. AI throughput.",
  lead:
    "AI is built into every stage of how we work — not bolted on. Our experts use the best AI tooling where it's faster than any human, and keep human judgement where it matters most.",
  pipeline: [
    { stage: "Discovery", ai: "Research synthesis, competitor & data analysis", human: "Problem framing, priorities" },
    { stage: "Design", ai: "Rapid UI generation & variant testing", human: "Taste, UX decisions, brand" },
    { stage: "Engineering", ai: "Pair programming, refactoring, docs", human: "Architecture, security, trade-offs" },
    { stage: "Quality", ai: "Test generation, AI code review", human: "Acceptance, edge cases" },
    { stage: "Operations", ai: "Anomaly detection, incident triage", human: "Reliability ownership" },
  ],
  timeline: {
    traditional: [
      { label: "Hiring & onboarding", span: 4 },
      { label: "Discovery", span: 3 },
      { label: "Design", span: 3 },
      { label: "First release", span: 6 },
    ],
    nomad: [
      { label: "Squad", span: 0.5 },
      { label: "Discover + prototype", span: 2 },
      { label: "First release", span: 4 },
    ],
    unit: "weeks", // VERIFY – indicative comparison for a typical MVP
  },
  guarantees: [
    "Your code and data never train third-party models",
    "Every AI-assisted change is reviewed by a senior engineer",
    "Tooling chosen per client security & compliance policy",
  ],
};

export const principles = [
  { title: "Visually exceptional", body: "Interfaces that look premium and feel effortless." },
  { title: "Fast by default", body: "Agile, result-driven delivery with weekly shipped value." },
  { title: "Flexible & scalable", body: "Architecture and squads that grow with your product." },
  { title: "Professional to the core", body: "Clear contracts, security, documentation, accountability." },
  { title: "Creative & innovative", body: "New approaches to hard problems — not templates." },
  { title: "Partnership mentality", body: "Open communication and long-term commitment to your success." },
];

export const engagements = [
  {
    name: "Outcome Squad",
    tag: "Fully managed",
    body: "We own delivery end-to-end: a composed squad, a product lead and a clear roadmap to an agreed outcome.",
    bestFor: "New products, MVPs, AI launches",
    features: ["Dedicated product lead", "Fixed milestones", "Weekly demos & reporting", "Squad evolves per phase"],
    featured: true,
  },
  {
    name: "Embedded Squad",
    tag: "Team extension",
    body: "A self-organising NOMAD squad works inside your organisation, rituals and tools — scaling up or down monthly.",
    bestFor: "Roadmap acceleration, in-house teams",
    features: ["Integrates with your stack", "Monthly flexibility", "Knowledge transfer built in", "Senior-only profiles"],
    featured: false,
  },
  {
    name: "Expert On-Demand",
    tag: "Individual specialists",
    body: "Plug a vetted senior specialist into a critical gap — architect, AI engineer, designer or security expert.",
    bestFor: "Audits, spikes, hard problems",
    features: ["Matched within days", "Part-time or full-time", "Temporary or long-term", "Backed by NOMAD QA"],
    featured: false,
  },
];

export const sprints = [
  {
    title: "Product Discovery Sprint",
    duration: "2 weeks",
    body: "Align stakeholders, validate the opportunity and leave with a prioritised roadmap and a squad blueprint.",
    output: "Roadmap · Architecture draft · Squad plan",
  },
  {
    title: "Prototype & Conversion Sprint",
    duration: "2–3 weeks",
    body: "A high-fidelity, testable prototype of your key journey — validated with real users before a single line of production code.",
    output: "Clickable prototype · User test results",
  },
  {
    title: "AI Readiness Audit",
    duration: "1–2 weeks",
    body: "Where AI creates real value in your processes and products, what data you need, and a safe path to production.",
    output: "Use-case map · Risk review · Pilot plan",
  },
];

export const network = {
  title: "A worldwide network. Curated, not crowdsourced.",
  lead:
    "Independent designers, engineers, product and AI specialists across Europe, the Americas and Asia. Each one vetted for craft, communication and how effectively they work with AI.",
  hubs: [
    { city: "Prague", lat: 50.08, lon: 14.44 },
    { city: "London", lat: 51.5, lon: -0.12, label: "end" },
    { city: "Oslo", lat: 59.9, lon: 10.75 },
    { city: "Lisbon", lat: 38.72, lon: -9.14, label: "end" },
    { city: "Warsaw", lat: 52.23, lon: 21.01 },
    { city: "Tallinn", lat: 59.44, lon: 24.75, label: "start" },
    { city: "Berlin", lat: 52.52, lon: 13.4 },
    { city: "New York", lat: 40.71, lon: -74.0, label: "start" },
    { city: "Austin", lat: 30.27, lon: -97.74 },
    { city: "San Francisco", lat: 37.77, lon: -122.42, label: "start" },
    { city: "Toronto", lat: 43.65, lon: -79.38, label: "end" },
    { city: "Mexico City", lat: 19.43, lon: -99.13 },
    { city: "São Paulo", lat: -23.55, lon: -46.63, label: "start" },
    { city: "Buenos Aires", lat: -34.6, lon: -58.38 },
    { city: "Bengaluru", lat: 12.97, lon: 77.59, label: "start" },
    { city: "Singapore", lat: 1.35, lon: 103.82, label: "start" },
    { city: "Sydney", lat: -33.87, lon: 151.21, label: "end" },
    { city: "Cape Town", lat: -33.92, lon: 18.42, label: "start" },
    { city: "Dubai", lat: 25.2, lon: 55.27, label: "start" },
  ],
  vetting: [
    { title: "Craft review", body: "Portfolio and code deep-dive by a senior peer in the same discipline." },
    { title: "Live pairing", body: "A real problem, solved together — technical depth and communication." },
    { title: "AI fluency", body: "Proven, responsible use of AI tools to multiply output and quality." },
    { title: "Track record", body: "References and continuous delivery ratings on every NOMAD project." },
  ],
  joinCta: { label: "Join the network", href: "mailto:office@nomadsoftware.com?subject=Joining%20the%20NOMAD%20network" },
};

export const faq = [
  {
    q: "How is a NOMAD squad different from a classic agency team?",
    a: "An agency staffs projects from a fixed bench. We compose each squad from our network specifically for your goals, and adjust it as the project moves from discovery to build to scale — so every role in the room is the best available fit for that phase.",
  },
  {
    q: "Who is accountable for delivery?",
    a: "NOMAD is. You get one contract, one product lead and one point of accountability, regardless of how many specialists rotate through the squad.",
  },
  {
    q: "How quickly can we start?",
    a: "Typically we propose a squad within 72 hours of a scoping call and start with a discovery or prototype sprint the following week.", // VERIFY
  },
  {
    q: "Do you work with existing in-house teams?",
    a: "Yes. Embedded Squads work inside your tools and rituals, and Expert On-Demand fills specific gaps. Knowledge transfer is part of every engagement.",
  },
  {
    q: "How do you use AI tools safely?",
    a: "Tooling is selected against your security and compliance requirements. Your code and data are never used to train third-party models, and every AI-assisted change goes through senior human review.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do — fully, from the first commit. We work in your repositories or transfer everything at each milestone.",
  },
];
