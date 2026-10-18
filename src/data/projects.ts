export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "content-agent",
    title: "Content Agent: an AI writing partner that keeps you in control",
    description:
      "Tell it your niche and it finds what is trending for your audience, checks names and numbers in each draft against real sources, and drafts posts for LinkedIn or X. Nothing is published without your approval. It runs free on your own computer with Docker and a local model, so there is no API bill and your drafts stay on your machine.",
    tags: ["Python", "FastAPI", "React", "Ollama", "Docker", "Agents"],
    github: "https://github.com/shalini200586/content-agent-mvp",
    featured: true,
  },
  {
    id: "bain-enterprise",
    title: "Bain Enterprise Platform",
    description: "Full-stack enterprise features — React, backend APIs, Azure cloud, and AI-powered recruiting workflows.",
    tags: ["React", "Azure", "Backend", "AI"],
    featured: true,
  },
  {
    id: "amenify-automation",
    title: "AI Browser Automation",
    description: "Node.js + Playwright + Claude API platform with Slack & Sheets integrations.",
    tags: ["Node.js", "Playwright", "Claude API"],
    featured: true,
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description: "Next.js, Three.js, GSAP, custom cursor, dark cinematic UI.",
    tags: ["Next.js", "Three.js", "GSAP"],
    github: "https://github.com/shalini200586/shalini-portfolio",
    featured: true,
  },
];
