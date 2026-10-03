"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden section-padding">
      {/* Portrait watermark behind skills */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar.png"
          alt=""
          className="h-[min(90vw,700px)] w-[min(90vw,700px)] rounded-full object-cover object-top blur-[2px]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-bg" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="SKILLS"
          title="Technical stack"
          subtitle="Languages · Backend · AI/ML · Data/Cloud · Tools"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl bg-card/80 p-6 card-border backdrop-blur-sm"
            >
              <h3 className="font-display text-sm font-bold tracking-wide text-accent uppercase">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
