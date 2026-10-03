"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="section-padding mx-auto max-w-7xl">
      <SectionHeader
        label="EXPERIENCE"
        title="Where I've built & learned"
        subtitle="Bain & Company · Amenify · IIT Patna · Amazon ML School"
      />

      <div className="space-y-4">
        {experience.map((item, i) => (
          <motion.article
            key={`${item.org}-${item.role}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            data-cursor="VIEW"
            className={`group rounded-2xl bg-card p-6 md:p-8 card-border transition hover:bg-card-hover ${
              item.featured ? "border-accent/20" : ""
            }`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-bold text-text">{item.org}</h3>
                  {item.featured ? (
                    <span className="rounded-full bg-accent/15 px-3 py-0.5 text-[10px] font-bold tracking-widest text-accent uppercase">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 font-medium text-accent">{item.role}</p>
                {item.location ? (
                  <p className="mt-1 text-sm text-muted/70">{item.location}</p>
                ) : null}
                <p className="mt-3 max-w-3xl text-muted">{item.description}</p>

                {item.highlights.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((point) => (
                      <li
                        key={point.slice(0, 40)}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 shrink-0 text-accent">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="shrink-0 text-left md:text-right">
                <p className="text-sm font-semibold text-muted">{item.period}</p>
                <p className="mt-1 text-xs tracking-wider text-muted/70 uppercase">{item.type}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/5 bg-bg-elevated px-3 py-1 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
