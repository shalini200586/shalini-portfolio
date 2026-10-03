"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="section-padding mx-auto max-w-7xl">
      <SectionHeader
        label="CONTACT"
        title="Let's build something intelligent"
        subtitle="Open to full-time AI Engineer & SDE roles · internships & collaborations welcome."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-accent/20 bg-gradient-to-br from-card via-bg-elevated to-card p-10 md:p-16"
      >
        <p className="font-display text-[clamp(2rem,6vw,4rem)] font-black leading-tight text-gradient">
          Ready to connect?
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${site.email}`}
            data-cursor="SAY HI"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-white transition hover:bg-accent-soft"
          >
            {site.email}
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CONNECT"
            className="inline-flex items-center justify-center rounded-full card-border bg-card px-8 py-4 text-sm font-bold text-text transition hover:bg-card-hover"
          >
            LinkedIn
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CODE"
            className="inline-flex items-center justify-center rounded-full card-border bg-card px-8 py-4 text-sm font-bold text-text transition hover:bg-card-hover"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
