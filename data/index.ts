export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const personal = {
  name: "Asfand Yar",
  role: "Full Stack AI Engineer",
  tagline:
    "Full Stack AI Engineer | LLMs | AI Workflows Automation | AI Agents | MCP Servers",
  valueProp: "Building AI SaaS products, AI agents, and workflow automation.",
  email: "asfi.official@gmail.com",
  phone: "+92 305 7575018",
  location: "Lahore, Pakistan",
  summary:
    "Full Stack AI Engineer with 6+ years of hands-on experience architecting and shipping production-grade AI applications from the ground up. Specializes in turning large language models — including OpenAI GPT-4 and Grok — into reliable, real-world systems through RAG pipelines, agentic AI workflows built with LangChain and LangGraph, MCP Server integrations, and strong guardrails for safe, predictable AI behavior. Backend expertise in Node.js, NestJS, and PostgreSQL enables fast delivery without cutting corners.",
  yearsExperience: 6,
};

export const quickStats = [
  { label: "Years of Experience", value: "6+", icon: "Calendar" },
  { label: "Projects Delivered", value: "20+", icon: "Briefcase" },
  { label: "AI Solutions Built", value: "15+", icon: "Bot" },
  { label: "Technologies", value: "25+", icon: "Code2" },
];
export const skillCategories = [
  {
    category: "Frontend",
    icon: "Code2",
    stack: [
      "React.js",
      "Next.js (SSR/SSG, dynamic routing)",
      "SCSS",
      "Ant Design",
      "Tailwind CSS",
      "Framer Motion",
      "React Bits",
      "Lottie React",
    ],
  },
  {
    category: "Backend (Node)",
    icon: "Server",
    stack: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Microservices",
      "WebSockets",
    ],
  },
  {
    category: "Backend (Python)",
    icon: "Terminal",
    stack: ["Python", "Django", "FastAPI", "ORM-driven apps", "Async services"],
  },
  {
    category: "AI / LLMs",
    icon: "Brain",
    stack: [
      "OpenAI GPT-4",
      "Grok API",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Prompt Engineering",
      "AI Workflows",
      "MCP Server",
      "Guardrails",
      "TTS",
    ],
  },
  {
    category: "Databases",
    icon: "HardDrive",
    stack: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    stack: ["AWS (EC2, S3)", "Vercel", "Docker", "Digital Ocean"],
  },
  {
    category: "Integrations & Payments",
    icon: "Plug",
    stack: ["Stripe", "Twilio", "Meta Graph API", "Third-Party APIs"],
  },
  {
    category: "Monitoring & Observability",
    icon: "Activity",
    stack: ["ELK Stack (Elasticsearch, Logstash, Kibana)", "New Relic"],
  },
];

export const aiExpertise = [
  {
    title: "AI Agents",
    description:
      "Autonomous agents that plan, act, and self-correct across multi-step tasks.",
    icon: "Bot",
  },
  {
    title: "MCP Servers",
    description:
      "Model Context Protocol integrations giving LLMs safe, structured access to tools and data.",
    icon: "Server",
  },
  {
    title: "LLMs (GPT-4, Grok)",
    description:
      "Production integrations with OpenAI GPT-4 and Grok for reasoning-heavy workloads.",
    icon: "Sparkles",
  },
  {
    title: "RAG Pipelines",
    description:
      "Retrieval-augmented pipelines that ground model output in your own documents and data.",
    icon: "FileSearch",
  },
  {
    title: "LangChain",
    description:
      "Composable chains and tool-calling orchestration for complex LLM workflows.",
    icon: "Link2",
  },
  {
    title: "LangGraph",
    description:
      "Stateful, graph-based multi-agent orchestration for long-running workflows.",
    icon: "GitBranch",
  },
  {
    title: "AI Workflow Automation",
    description:
      "End-to-end automation connecting LLMs to webhooks, cron jobs, and business systems.",
    icon: "Zap",
  },
  {
    title: "Guardrails & TTS",
    description:
      "Safe, auditable AI output with guardrails, plus natural text-to-speech responses.",
    icon: "ShieldCheck",
  },
];

export const projects = [
  {
    id: 1,
    slug: "vocaliv",
    title: "Vocaliv",
    subtitle: "AI Operational Layer for Training Delivery & Voice Coaching",
    tagline:
      "24/7 voice-to-voice AI coaching, automated PDF-to-course creation, and multi-language corporate training.",
    overview:
      "Training providers lose 40-60% of trainer time to repetitive support queries and struggle to scale delivery without adding headcount. Vocaliv acts as an AI operational layer and interactive 24/7 tutor — auto-generating structured courses from uploaded documents, delivering real-time voice-to-voice coaching in multiple languages, and offering custom voice cloning for personalized, adaptive learning paths.",
    liveUrl: "https://vocaliv.com/",
    images: ["/projects/vocaliv-1.png", "/projects/vocaliv-2.png"],
    tags: ["Voice AI", "LLM Document Parser", "Next.js", "Multi-language NLP"],
    keyFeatures: [
      {
        title: "Smart AI Course Creation (PDF to Course)",
        description:
          "Analyzes training documents to generate complete course outlines, modules, and quizzes in minutes.",
      },
      {
        title: "Interactive AI Coach (Voice-to-Voice)",
        description:
          "Real-time conversational learning with 24/7 Q&A and multilingual support (English, French, Arabic, Spanish, Urdu).",
      },
      {
        title: "Custom AI Voice Cloning",
        description:
          "Trainers clone their own voice to personalize course delivery with adjustable tone and pacing.",
      },
      {
        title: "Adaptive Learning Paths",
        description:
          "Dynamically tailors quizzes and progression based on real-time trainee self-assessments.",
      },
      {
        title: "LMS & Classroom Integrations",
        description: "Integrates with Canvas, Moodle, and Google Classroom.",
      },
    ],
    techStack: [
      { category: "AI & Voice Engine", items: ["Voice-to-Voice Conversational AI", "AI Voice Cloning", "LLM Document Parser", "Multi-language NLP"] },
      { category: "Frontend & Web", items: ["React / Next.js", "Web Audio API", "Tailwind CSS"] },
      { category: "Integrations", items: ["Canvas, Moodle, Google Classroom", "RESTful API & Webhooks"] },
    ],
    metrics: [
      { label: "Trainer Capacity", value: "3x", sourceText: "30 → 90 trainees per trainer" },
      { label: "Support Automated", value: "70%+", sourceText: "Handled instantly, 24/7" },
      { label: "Time Recovered", value: "15-25 hrs", sourceText: "Per trainer, weekly" },
    ],
  },
  {
    id: 2,
    slug: "nowchat",
    title: "NowChat",
    subtitle: "AI-Powered Customer Engagement & Conversational Automation",
    tagline:
      "A unified messaging and AI chatbot platform automating customer support, sales inquiries, and lead generation in real time.",
    overview:
      "NowChat streamlines customer interactions across web and messaging channels. By pairing natural language processing with automated workflows, it delivers 24/7 instant support, qualifies leads automatically, and cuts support ticket response times — all from a single unified inbox.",
    liveUrl: "https://nowchat.io/",
    images: ["/projects/nowchat-1.png", "/projects/nowchat-2.png"],
    tags: ["LLM / NLP", "WebSockets", "Next.js", "CRM Sync"],
    keyFeatures: [
      {
        title: "Real-Time AI Chat Assistant",
        description: "24/7 automated bot handling FAQs, lead capture, and instant customer queries with high precision.",
      },
      {
        title: "Multi-Channel Messaging Hub",
        description: "Unified inbox connecting web chat, social messaging, and SMS into a single dashboard.",
      },
      {
        title: "Custom Bot Builder & Workflows",
        description: "Visual, code-free builder for conversation flows, routing rules, and fallback triggers.",
      },
      {
        title: "Lead Qualification & CRM Sync",
        description: "Automated data capture during live conversations, exported directly to CRM systems.",
      },
      {
        title: "Conversation Analytics",
        description: "Dashboard tracking chat metrics, resolution rates, sentiment, and peak activity times.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { category: "Backend & AI", items: ["Node.js / Express", "LLM / NLP API", "WebSockets"] },
      { category: "Data & Security", items: ["PostgreSQL / MongoDB", "JWT Auth", "SSL / Encryption"] },
    ],
    metrics: [
      { label: "Response Time", value: "< 5 sec", sourceText: "Instant AI handling, 24/7" },
      { label: "Support Automated", value: "70%+", sourceText: "Routine inquiries, no human needed" },
      { label: "Uptime", value: "99.9%", sourceText: "High-availability messaging service" },
    ],
  },
  {
    id: 3,
    slug: "tradingbot-ai",
    title: "TradingBot AI",
    subtitle: "AI-Powered Automated Trading & Portfolio Intelligence",
    tagline:
      "An autonomous quantitative trading platform delivering real-time market analysis, automated execution, and risk management.",
    overview:
      "TradingBot AI helps traders eliminate emotional bias in financial markets, combining real-time price tracking, algorithmic signal generation, and automated portfolio management behind a secure, authentication-backed interface.",
    liveUrl: "https://tradingbot-ai2.vercel.app/auth",
    images: ["/projects/tradingbot-1.webp", "/projects/tradingbot-2.png"],
    tags: ["AI Strategy Engine", "Real-time Data", "Next.js", "Fintech"],
    keyFeatures: [
      {
        title: "Algorithmic Trade Execution",
        description: "Automated buy/sell triggers based on technical indicators and AI market sentiment analysis.",
      },
      {
        title: "Real-Time Portfolio Tracking",
        description: "Interactive dashboard monitoring active positions, P&L performance, and asset allocation.",
      },
      {
        title: "Risk Management & Stop-Loss",
        description: "Dynamic stop-loss and take-profit automation to protect capital during volatility.",
      },
      {
        title: "Seamless Authentication",
        description: "Secure multi-provider auth for personalized dashboards and sandbox testing.",
      },
      {
        title: "Market Sentiment Analytics",
        description: "AI-driven signal analysis identifying high-probability entry and exit points.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { category: "Auth & Security", items: ["NextAuth.js", "JWT Encryption"] },
      { category: "Data & Hosting", items: ["RESTful APIs", "WebSockets", "Vercel"] },
    ],
    metrics: [
      { label: "Execution Latency", value: "Sub-second", sourceText: "Real-time signal processing" },
      { label: "Risk Mitigation", value: "100%", sourceText: "Automated stop-loss protection" },
      { label: "Uptime", value: "99.9%", sourceText: "Vercel serverless edge network" },
    ],
  },
  {
    id: 4,
    slug: "permiscope",
    title: "PermisScope",
    subtitle: "Smart Driving School Comparison & Analytics Platform",
    tagline:
      "A real-time aggregator helping users compare driving schools across France by price, success rates, and verified reviews.",
    overview:
      "A French driving license costs between €1,200-2,500, with wide variance between schools. PermisScope gives a centralized, transparent platform to compare local schools by verified Google reviews, official success rates, CPF funding eligibility, and exam wait times.",
    liveUrl: "https://permiscope.fr/",
    images: ["/projects/permiscope-1.png", "/projects/permiscope-2.png"],
    tags: ["React", "Analytics", "SEO", "Marketplace"],
    keyFeatures: [
      {
        title: "Real-Time City-Wise Comparison",
        description: "Dynamic geo-search across major French cities to evaluate local driving schools.",
      },
      {
        title: "Transparent Metrics & Analytics",
        description: "Live dashboards showing average savings, pass rates, and exam waiting periods.",
      },
      {
        title: "CPF / Qualiopi Filter",
        description: "Instant filtering for government-funded options accepting CPF financing.",
      },
      {
        title: "Dual Portal Architecture",
        description: "Dedicated portals for students (search/compare) and school owners (lead gen & profiles).",
      },
      {
        title: "Verified Reviews Aggregator",
        description: "Integrates verified student reviews and Google feedback for maximum trust.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "React Router", "Lit-element", "Tailwind CSS"] },
      { category: "Hosting", items: ["Netlify"] },
      { category: "Analytics & SEO", items: ["Google Analytics", "Google Tag Manager", "Open Graph"] },
    ],
    metrics: [
      { label: "Avg. Savings", value: "€500", sourceText: "Average savings per student" },
      { label: "Schools Onboarded", value: "150+", sourceText: "Across major French cities" },
      { label: "Satisfied Students", value: "5,000+", sourceText: "98% satisfaction rate" },
    ],
  },
  {
    id: 5,
    slug: "ontezo",
    title: "Ontezo",
    subtitle: "Enterprise Digital Transformation & Software Engineering Platform",
    tagline:
      "A full-cycle software agency platform delivering tailored web, mobile, and cloud software solutions.",
    overview:
      "Ontezo is a technology solutions and custom software engineering platform helping modern businesses scale digital operations — spanning UI/UX design, cloud-native web applications, enterprise software development, and API integration services.",
    liveUrl: "https://ontezo.com/",
    images: ["/projects/ontezo-1.png", "/projects/ontezo-2.png"],
    tags: ["Next.js", "Cloud & DevOps", "API Integrations"],
    keyFeatures: [
      {
        title: "Custom Web & Mobile Development",
        description: "Scalable, high-performance applications built with modern frontend and backend architectures.",
      },
      {
        title: "UI/UX Design Systems",
        description: "User-centric interface design, wireframing, and prototyping optimized for conversion.",
      },
      {
        title: "Cloud Infrastructure & DevOps",
        description: "Automated deployment pipelines and cloud infrastructure management for reliability.",
      },
      {
        title: "Enterprise API & Systems Integration",
        description: "Seamless integration with third-party software, payment gateways, and databases.",
      },
      {
        title: "Digital Transformation Consulting",
        description: "Technical strategy and legacy system modernization for scaling businesses.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { category: "Backend & Cloud", items: ["Node.js / Express", "PostgreSQL / MongoDB", "AWS / Docker"] },
      { category: "Design & Workflow", items: ["Figma", "RESTful APIs", "CI/CD Pipelines"] },
    ],
    metrics: [
      { label: "Client Satisfaction", value: "98%", sourceText: "Across global client engagements" },
      { label: "Project Success", value: "100%", sourceText: "On-time, within-scope delivery" },
      { label: "Uptime", value: "99.9%", sourceText: "Cloud-native infrastructure" },
    ],
  },
];

export const services = [
  {
    title: "AI Chatbots & RAG Systems",
    description:
      "OpenAI & Grok-powered chatbots and retrieval-augmented pipelines grounded in your own data.",
    icon: "Bot",
    bullets: [
      "RAG chatbot development",
      "OpenAI & Grok API integration",
      "LangChain & LangGraph agents",
    ],
  },
  {
    title: "AI Agents & Workflow Automation",
    description:
      "Autonomous agents and MCP-powered automations that connect LLMs to real business systems.",
    icon: "Workflow",
    bullets: [
      "MCP server integration",
      "n8n & Zapier workflows",
      "Guardrails & safe AI output",
    ],
  },
  {
    title: "Full-Stack SaaS Development",
    description:
      "React/Next.js frontends on Node.js/NestJS backends with PostgreSQL and MongoDB.",
    icon: "Layers",
    bullets: [
      "Next.js dashboard builds",
      "NestJS & Express REST APIs",
      "PostgreSQL & MongoDB data layer",
    ],
  },
  {
    title: "Third-Party & Cloud Integrations",
    description:
      "Payments, messaging, and cloud deployments wired cleanly into your product.",
    icon: "Plug",
    bullets: [
      "Stripe & Twilio integration",
      "Meta Graph API & webhooks",
      "AWS/Docker deployment",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    label: "GitHub",
    icon: "Github",
    link: "https://github.com/Asfandyaar2",
  },
  {
    id: 2,
    label: "LinkedIn",
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/asfandyar2/",
  },
  {
    id: 3,
    label: "Email",
    icon: "Mail",
    link: "mailto:asfi.official@gmail.com",
  },
];
