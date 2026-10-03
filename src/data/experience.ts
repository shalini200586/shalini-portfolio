export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  featured?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "Bain & Company",
    role: "SDE Intern",
    period: "Jul 2026 — Present",
    type: "Internship",
    featured: true,
    description: "Full-stack enterprise features, cloud systems, AI-powered tools, and role-based access control.",
    highlights: [
      "Built an AI recruiting platform on Azure (OpenAI + Cosmos DB) — +5.6% answer coverage, −60% false refusals on 750 real queries.",
      "Shipped React + backend features for an enterprise review platform with AI-assisted workflows and RBAC.",
    ],
    tags: ["React", "Node.js", "Azure", "APIs", "RBAC"],
  },
  {
    org: "Amenify",
    role: "SDE Intern",
    period: "May 2026 — Jul 2026",
    location: "Gurugram",
    type: "Internship",
    featured: true,
    description: "AI-powered browser automation platform built end-to-end.",
    highlights: [
      "Built Node.js + Playwright + Claude API automation with Google Sheets & Slack integrations for ops workflows.",
    ],
    tags: ["Node.js", "Playwright", "Claude API", "Automation"],
  },
  {
    org: "IIT Patna",
    role: "Computer Science",
    period: "Aug 2023 — Jun 2027",
    type: "Education",
    featured: true,
    description: "Computer Science @ IIT Patna",
    highlights: [],
    tags: ["DSA", "Systems", "Software Engineering"],
  },
];
