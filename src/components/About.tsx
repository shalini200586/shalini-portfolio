"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About me" subtitle="A little story, not a boring resume paragraph." />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.bio.map((paragraph, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border-3 border-ink bg-white p-6 shadow-cartoon"
            >
              <p className="text-lg leading-relaxed text-ink/80">{paragraph}</p>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border-3 border-ink bg-teal/15 p-6 shadow-cartoon md:col-span-2"
          >
            <div className="flex flex-wrap gap-4 text-sm font-bold text-ink">
              <span className="rounded-full border-2 border-ink bg-white px-4 py-2">📍 {site.location}</span>
              <span className="rounded-full border-2 border-ink bg-white px-4 py-2">💻 Full-stack developer</span>
              <span className="rounded-full border-2 border-ink bg-white px-4 py-2">🚀 Always building</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-3xl font-black text-ink md:text-4xl">{title}</h2>
      <p className="mt-2 text-lg text-ink/60">{subtitle}</p>
    </div>
  );
}
