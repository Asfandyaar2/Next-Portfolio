# Portfolio Redesign — Master Prompt (for Cursor / Claude Code)

Act as a world-class Senior Product Designer, UI/UX Designer, Creative Director, and Frontend Engineer.

Your task is to completely redesign and rebuild my personal portfolio into a premium, modern, high-converting website that immediately builds trust with recruiters, startup founders, and enterprise clients evaluating me for **Full Stack AI Engineer** roles.

**Goal:** Make it feel like a $100K agency website — while staying fast, accessible, responsive, and easy to maintain.

---

## 1. WHO THIS PORTFOLIO IS FOR (use this real content — don't invent placeholder copy)

**Name:** Asfand Yar
**Title / Tagline:** Full Stack AI Engineer | LLMs | AI Workflows Automation | AI Agents | MCP Servers
**Contact:** asfi.official@gmail.com | +92 305 7575018
**Location:** Lahore, Pakistan

**Professional Summary (use as Hero subtext / About intro, tighten as needed):**
Full Stack AI Engineer with 6+ years of hands-on experience architecting and shipping production-grade AI applications from the ground up. Specializes in turning large language models — including OpenAI GPT-4 and Grok — into reliable, real-world systems through RAG pipelines, agentic AI workflows built with LangChain and LangGraph, MCP Server integrations, and strong guardrails for safe, predictable AI behavior. Backend expertise in Node.js, NestJS, and PostgreSQL enables fast delivery without cutting corners — comfortable owning architecture, deployment, and everything in between.

**Skills (group into categorized, icon-based cards exactly like this):**
| Category | Stack |
|---|---|
| Frontend | React.js, Next.js (SSR/SSG, dynamic routing) |
| Backend (Node) | Node.js, Express.js, NestJS — REST APIs, microservices, WebSockets |
| Backend (Python) | Python, Django, FastAPI — ORM-driven apps, high-performance async services |
| AI / LLMs | OpenAI GPT-4, Grok API, LangChain, LangGraph, RAG Pipelines, Prompt Engineering, AI Workflows, MCP Server, Guardrails, TTS |
| Vector DB & Search | Typesense, pgvector, Chroma |
| Automation | Webhooks, n8n, Zapier, Cron Jobs, Event-Driven Architecture, RabbitMQ |
| Databases | MongoDB, PostgreSQL, Firebase, Redis |
| Cloud & DevOps | AWS (EC2, S3), Vercel, Docker, Digital Ocean |
| Integrations & Payments | Stripe, Twilio, Meta Graph API, Third-Party APIs |
| Monitoring & Observability | ELK Stack (Elasticsearch, Logstash, Kibana), New Relic |

**Dedicated "AI Expertise" section should highlight:** AI Agents, MCP Servers, LLMs (OpenAI GPT-4, Grok), RAG, LangChain, LangGraph, AI Workflow Automation, Guardrails/safe AI output, TTS.

**Experience Timeline (use exact roles/dates/companies, condense bullets to punchy one-liners with metrics):**

1. **AB {Ark} Solutions, Lahore** — Full-Stack AI Engineer — *May 2025 – Present*
   - Architected an AI chatbot (OpenAI & Grok API) with continuous learning — cut client support response time by 70%
   - Built RAG pipelines (Pinecone + pgvector) for document-grounded AI across multiple clients
   - Designed multi-agent workflows using LangGraph + MCP Server, with guardrails for safe, auditable AI output
   - Automation via webhooks, RabbitMQ, cron jobs, event-driven Node.js — cut manual processing by 60%
   - Integrated Meta Graph API, YouTube Analytics into an AI-driven marketing analytics dashboard
   - Backend APIs (NestJS + PostgreSQL) powering SaaS platforms with 10k+ active users
   - Deployed to AWS EC2 behind load balancers — 99.9% uptime
   - Monitoring via ELK stack + New Relic — proactive issue detection

2. **Falcon Consulting, Lahore** — Full-Stack Developer — *June 2021 – May 2025*
   - Full-stack apps with MongoDB, Express.js, React, Node.js across multiple projects
   - RESTful APIs and backend services with Node.js/Express, optimized for performance & security
   - Responsive React.js interfaces with strong UX focus
   - Integrated third-party APIs (payments, social, analytics)
   - Deployed and managed apps on AWS/Vercel with high availability

3. **Hashlogics, Lahore** — Full-Stack Developer — *Nov 2020 – May 2021*
   - REST API-driven web apps: Node.js backends + React.js frontends for SaaS clients
   - Integrated Stripe (payments), Twilio (SMS/voice), Google APIs
   - Cross-functional collaboration on tight sprint cycles with peer-reviewed code quality

**Featured Projects (build large premium cards — screenshots, tech tags, and results for each):**

1. **AI Chatbot Platform**
   - Multi-user intelligent chatbot powered by Grok API — real-time Q&A, contextual memory across sessions, continuous fine-tuning loops
   - Node.js + MongoDB backend, WebSocket streaming for sub-second responses
   - Modular prompt-engineering layer for per-tenant customization without code changes
   - Text-to-speech (TTS) output for natural, voice-based responses
   - Tags: Grok API, Node.js, MongoDB, WebSockets, TTS, Prompt Engineering

2. **RAG Knowledge Base System**
   - End-to-end ingestion pipeline: chunking, embedding, vector storage (Pinecone) + Typesense for fast keyword search — supports PDFs, Word docs, web content
   - GPT-4-powered Q&A over private company documents with source attribution & confidence scoring
   - Deployed for an enterprise client handling 10,000+ document queries/month, sub-2-second responses
   - Tags: RAG, Pinecone, Typesense, GPT-4, Document AI

3. **Algorithmic Trading Bot with AI Strategy**
   - Live trading platform integrated with Alpaca API for real-time market data + automated order execution
   - AI strategy engine with configurable risk parameters and a backtesting module against historical data
   - Real-time analytics dashboard: P&L tracking, trade history, live market charts (React.js)
   - Tags: Alpaca API, AI Strategy Engine, React.js, Fintech, Real-time Data

---

## 2. DESIGN STYLE

Design language: Premium, minimal, elegant, futuristic, clean, professional — Apple-level attention to detail, Linear.app / Vercel / Stripe / Framer quality.

**Avoid:** generic templates, glassmorphism everywhere, rainbow/overly colorful gradients, heavy animations, clutter, busy layouts.

The site should feel calm, modern, premium, and highly polished — never loud.

---

## 3. THEME (Light + Dark Mode)

- Automatic system theme detection
- Manual toggle (persist preference in localStorage)
- Smooth theme transition (no flash of unstyled content)
- Every single component must look intentional in both themes

---

## 4. COLOR SYSTEM

- **One** elegant accent color only — pick from Indigo, Electric Blue, Cyan, or Violet. No rainbow palettes.
- **Dark theme:** rich charcoal / near-black backgrounds with layered surface elevations
- **Light theme:** pure white / soft gray surfaces with elegant hairline borders
- Maintain WCAG-AA contrast in both themes at minimum

---

## 5. TYPOGRAPHY

- Use a premium sans font: Inter, Geist, or Satoshi (SF Pro as fallback)
- Clear hierarchy: Hero → Section titles → Card titles → Body → Captions
- Generous, luxurious spacing — never cramped

---

## 6. MOTION DESIGN

Use Framer Motion for subtle, premium interactions only:
- Fade / slide / scale entrances, staggered reveals on scroll
- Hover elevation on cards and buttons
- Smooth button micro-interactions
- Very subtle image parallax
- Floating gradient background in the hero (soft, low-opacity, slow)
- Smooth page/section transitions

**Avoid:** long animations, bounce easing, excessive movement, anything distracting. Everything should feel fluid and expensive, never flashy.

---

## 7. SITE STRUCTURE

1. **Hero** — Name, tagline (from section 1), strong one-line value prop, CTA buttons ("View Projects", "Contact Me"), availability badge, social links (GitHub/LinkedIn), subtle animated background
2. **Trust / Companies strip** — logos or names of AB Ark Solutions, Falcon Consulting, Hashlogics (or client-industry icons if logos aren't available)
3. **About** — condensed version of the Professional Summary
4. **Skills** — categorized, icon-based, interactive cards (table from section 1)
5. **AI Expertise** — dedicated spotlight section (AI Agents, MCP, LLMs, RAG, LangChain, LangGraph, AI Workflow Automation, Guardrails)
6. **Featured Projects** — large cards per project in section 1, with tags, results/metrics, and (if available) live demo / GitHub / case-study links
7. **Services** — e.g. "AI Product Development", "RAG & Knowledge Base Systems", "Full-Stack SaaS Engineering", "AI Workflow Automation"
8. **Experience Timeline** — the 3 roles from section 1, in reverse-chronological order
9. **Testimonials** — placeholder structure ready for real quotes later
10. **Contact CTA** — clear, single primary action (email or contact form)
11. **Footer** — nav, social links, copyright

---

## 8. VISUAL DETAILS

- Soft shadows, rounded corners, elegant hairline borders, clean grid systems
- Premium spacing rhythm throughout
- Beautiful hover states, smooth icon animations
- Cards should feel layered without heavy/dark shadows

---

## 9. RESPONSIVENESS

Pixel-perfect on desktop, laptop, tablet, and mobile. No layout shift (CLS = 0 as far as possible).

---

## 10. PERFORMANCE & SEO

- Lazy loading, code splitting, optimized images (next/image)
- Target 95+ Lighthouse across Performance, Accessibility, Best Practices, SEO
- Semantic HTML, proper meta tags, Open Graph tags, sitemap

---

## 11. TECH STACK

React, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.

---

## 12. UX GOAL

A visitor should land on this site and immediately think:

> "This developer is senior." "This portfolio feels premium." "I trust this engineer." "I want to hire this person."

---

## 13. DELIVERABLE

Rebuild every page and component using the real content in Section 1 — not lorem-ipsum or generic placeholders. Improve layout, visual hierarchy, spacing, color, typography, motion, UX, accessibility, and performance across the board.

Do not just restyle colors — reimagine this as a modern, premium product website, while keeping all animation subtle, smooth, and professional.
