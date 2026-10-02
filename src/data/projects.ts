export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  status: "live" | "building" | "coming-soon";
  featured?: boolean;
};

/** Edit this file to add your real projects. */
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Your First Project",
    description:
      "Replace this with a project you're proud of — what it does, what you built, and what you learned.",
    tags: ["Next.js", "TypeScript", "API"],
    status: "coming-soon",
    featured: true,
  },
  {
    id: "project-2",
    title: "Another Build",
    description:
      "Add a second project here. Link the GitHub repo and live demo when ready.",
    tags: ["React", "Node.js"],
    status: "building",
    featured: true,
  },
  {
    id: "project-3",
    title: "Side Experiment",
    description:
      "Even small experiments count — a tool, a clone, a hackathon idea. Show your curiosity.",
    tags: ["JavaScript", "CSS"],
    status: "coming-soon",
  },
];
