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
