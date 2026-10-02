"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black text-ink md:text-4xl">Skills & tools</h2>
        <p className="mt-2 text-lg text-ink/60">What I use to bring ideas to life.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border-3 border-ink bg-white p-6 shadow-cartoon"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="text-xl font-extrabold text-ink">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-xl border-2 border-ink bg-cream px-3 py-1.5 text-sm font-semibold text-ink"
                  >
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
