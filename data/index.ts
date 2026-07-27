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
    category: "Vector DB & Search",
    icon: "Database",
    stack: ["Typesense", "pgvector", "Chroma"],
  },
  {
    category: "Automation",
    icon: "Workflow",
    stack: [
      "Webhooks",
      "n8n",
      "Zapier",
      "Cron Jobs",
      "Event-Driven Architecture",
      "RabbitMQ",
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
    title: "AI Chatbot Platform",
    description:
      "Multi-user intelligent chatbot powered by the Grok API with real-time Q&A, contextual memory across sessions, and continuous fine-tuning loops. A modular prompt-engineering layer enables per-tenant customization without code changes, with TTS output for natural, voice-based responses.",
    tags: [
      "Grok API",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "TTS",
      "Prompt Engineering",
    ],
    metrics: "Sub-second response streaming over WebSockets",
    img: "/chatbot.png",
    imgWidth: 1847,
    imgHeight: 915,
  },
  {
    id: 2,
    title: "RAG Knowledge Base System",
    description:
      "End-to-end ingestion pipeline — chunking, embedding, and vector storage in Pinecone, paired with Typesense for fast keyword search — supporting PDFs, Word docs, and web content. GPT-4-powered Q&A over private company documents with source attribution and confidence scoring.",
    tags: ["RAG", "Pinecone", "Typesense", "GPT-4", "Document AI"],
    metrics: "10,000+ document queries/month at sub-2-second response times",
    placeholder: true as const,
  },
  {
    id: 3,
    title: "Algorithmic Trading Bot with AI Strategy",
    description:
      "Live trading platform integrated with the Alpaca API for real-time market data and automated order execution. An AI strategy engine with configurable risk parameters is validated through a backtesting module against historical data, surfaced in a real-time analytics dashboard.",
    tags: [
      "Alpaca API",
      "AI Strategy Engine",
      "React.js",
      "Fintech",
      "Real-time Data",
    ],
    metrics: "Real-time P&L tracking, trade history, and live market charts",
    img: "/tradingbot.png",
    imgWidth: 1917,
    imgHeight: 902,
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
