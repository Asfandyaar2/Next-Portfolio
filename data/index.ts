export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize building autonomous AI systems that solve real-world problems.",
    description: "Solution-Oriented",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end",
    img: "/bb1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Expertise in LangChain & RAG for intelligent data processing.",
    description: "Architectural Focus",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My AI & Automation Stack",
    description: "Constantly Evolving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about MCP (Model Context Protocol) and Agentic Workflows.",
    description: "Forward Thinking",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Developing Scalable AI Agents for Enterprise Automation.",
    description: "The Deep Dive",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-30",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to automate your business with AI?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Agentic Support System",
    des: "Autonomous AI support agent built with LangChain, Next.js 14, and NestJS, featuring a sub-second RAG search over PostgreSQL data.",
    img: "/chatbot.png",
    iconLists: ["/next.svg", "/nest.svg", "/postgr.svg", "/ts.svg", "/re.svg"],
    link: "https://github.com/Asfandyaar2",
  },
  {
    id: 2,
    title: "Intelligent Market Analyzer",
    des: "A high-frequency sentiment analysis engine powered by Node.js, Express, and MongoDB, integrating OpenAI for real-time trade signals.",
    img: "/tradingbot.png",
    iconLists: ["/node.svg", "/mongo.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://tradingbot-ai2.vercel.app/auth",
  },
  {
    id: 3,
    title: "Workflow Optimizer Pro",
    des: "Enterprise automation tool orchestrating complex n8n workflows and Python scripts, deployed via AWS for zero-downtime scalability.",
    img: "/medusched.png",
    iconLists: ["/nodejs.svg", "/db.svg", "/tail.svg", "/ts.svg", "/cloud.svg"],
    link: "https://medusched.com/",
  },
  {
    id: 4,
    title: "SignWise AI Document Vault",
    des: "Full-stack SaaS app featuring automated document summarization and smart signing workflows using React and NestJS.",
    img: "/signwise.png",
    iconLists: ["/re.svg", "/nest.svg", "/postgr.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.zypzap.com/",
  },
];

export const skills = [
  {
    name: "LLMs & RAG (GPT-4, Claude)",
    progress: 95,
    category: "AI Core",
    icon: "Brain",
  },
  {
    name: "React & Next.js 14",
    progress: 92,
    category: "Frontend",
    icon: "Code",
  },
  {
    name: "Node.js & NestJS",
    progress: 88,
    category: "Backend",
    icon: "Network",
  },
  {
    name: "PostgreSQL & MongoDB",
    progress: 85,
    category: "Database",
    icon: "Database",
  },
  {
    name: "Python & Automation (n8n)",
    progress: 90,
    category: "Automation",
    icon: "Workflow",
  },
  {
    name: "AI Agents & MCP Servers",
    progress: 85,
    category: "AI Ops",
    icon: "Robot",
  },
  {
    name: "Express & REST / GraphQL",
    progress: 88,
    category: "Web APIs",
    icon: "Link",
  },
  {
    name: "AWS & Cloud (GCP/Azure)",
    progress: 80,
    category: "Cloud",
    icon: "Cloud",
  },
];

export const timelineData = [
  {
    company: "AI Frontiers",
    role: "Full Stack AI Engineer",
    duration: "2024 - Present",
    achievements: [
      "Architecting end-to-end AI systems with Next.js, NestJS, and advanced LLM orchestrators.",
      "Developing sophisticated agentic workflows that integrate directly with enterprise ERPs.",
      "Leading technical strategy for full-stack AI integrations across multiple platforms.",
    ],
  },
  {
    company: "CloudFlow Systems",
    role: "Full Stack AI Engineer",
    duration: "2022 - 2024",
    achievements: [
      "Built and optimized full-stack cloud infrastructures to support high-scale AI inference workloads.",
      "Engineered real-time data flow pipelines for large-scale sentiment analysis engines.",
      "Refined cloud environments to increase system reliability and reduce operational overhead.",
    ],
  },
  {
    company: "ZypZap Solutions",
    role: "Full Stack Developer (AI Focus)",
    duration: "2020 - 2022",
    achievements: [
      "Developed high-performance SaaS applications with deeply integrated GPT capabilities.",
      "Mastered the transition from monolithic architectures to scalable, AI-ready microservices.",
      "Optimized front-to-back performance for AI-rich user interfaces.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Asfandyaar2",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/asfandyar2/",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://twitter.com/",
  },
];

// Compatibility exports for legacy components
export const testimonials = [] as any[];
export const companies = [] as any[];
export const workExperience = [] as any[];
