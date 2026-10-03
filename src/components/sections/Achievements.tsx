"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { site } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding mx-auto max-w-7xl">
      <SectionHeader
        label="ACHIEVEMENTS"
        title="Highlights & milestones"
        subtitle="Competitive programming · Hackathons · Open source"
      />

      <ul className="space-y-4">
        {achievements.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-4 rounded-2xl bg-card p-5 card-border"
          >
            <span className="mt-1 text-accent">◆</span>
            <span className="leading-relaxed text-muted">{item}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <a
          href={site.social.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="CODE"
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-bold text-accent transition hover:bg-accent/20"
        >
          LeetCode Profile → shalini_8
        </a>
      </motion.div>
    </section>
  );
}
