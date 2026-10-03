"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section-padding mx-auto max-w-7xl">
      <SectionHeader
        label="PROJECTS"
        title="Selected work"
        subtitle="Full-stack · Backend · Automation · AI"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            data-cursor={project.github ? "CODE" : "VIEW"}
            className="group relative overflow-hidden rounded-2xl bg-card p-8 card-border transition hover:bg-card-hover"
          >
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />

            <div className="relative">
              <h3 className="font-display text-2xl font-bold text-text transition group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/5 px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="CODE"
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent"
                  >
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VIEW"
                    className="inline-flex items-center gap-2 text-sm font-bold text-muted transition hover:text-text"
                  >
                    Live demo
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
