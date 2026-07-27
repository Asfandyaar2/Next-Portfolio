import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asfand Yar — Full Stack AI Engineer",
    template: "%s — Asfand Yar",
  },
  description:
    "Full Stack AI Engineer specializing in LLMs, RAG pipelines, AI agents, and MCP servers — turning GPT-4 and Grok into reliable, production-grade systems with Node.js, NestJS, and PostgreSQL.",
  keywords: [
    "Asfand Yar",
    "Full Stack AI Engineer",
    "LLM Engineer",
    "RAG Pipelines",
    "LangChain",
    "LangGraph",
    "AI Agents",
    "MCP Server",
    "Next.js Developer",
    "NestJS Developer",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Asfand Yar — Full Stack AI Engineer",
    description:
      "Architecting production-grade AI systems — LLMs, RAG, agentic workflows, and MCP servers on a Node.js/NestJS/PostgreSQL backend.",
    url: siteUrl,
    siteName: "Asfand Yar — Portfolio",
    images: ["/asfand.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asfand Yar — Full Stack AI Engineer",
    description:
      "Architecting production-grade AI systems — LLMs, RAG, agentic workflows, and MCP servers on a Node.js/NestJS/PostgreSQL backend.",
    images: ["/asfand.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
