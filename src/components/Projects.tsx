"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Hammer } from "lucide-react";
import { projects } from "@/data/projects";

const statusStyles = {
  live: "bg-teal text-white",
  building: "bg-sun text-ink",
  "coming-soon": "bg-sky/40 text-ink",
} as const;

const statusLabels = {
  live: "Live",
  building: "Building",
  "coming-soon": "Coming soon",
} as const;

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black text-ink md:text-4xl">Projects</h2>
        <p className="mt-2 max-w-2xl text-lg text-ink/60">
          Placeholder cards for now — edit{" "}
          <code className="rounded bg-white px-2 py-0.5 text-sm font-bold">src/data/projects.ts</code>{" "}
          to add your real work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group rounded-3xl border-3 border-ink bg-white p-6 shadow-cartoon transition hover:-translate-y-1 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink bg-coral/15">
                  <Hammer className="text-coral" size={22} />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[project.status]}`}
                >
                  {statusLabels[project.status]}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-ink">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-ink/20 bg-cream px-2.5 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-ink px-4 py-2 text-sm font-bold transition hover:bg-cream"
                  >
                    <Code2 size={16} />
                    Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-ink/30 px-4 py-2 text-sm font-semibold text-ink/40">
                    Add GitHub link
                  </span>
                )}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-coral px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
