"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 max-w-3xl"
    >
      <p className="mb-3 text-xs font-bold tracking-[0.35em] text-accent">{label}</p>
      <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-text">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-muted">{subtitle}</p> : null}
    </motion.div>
  );
}
