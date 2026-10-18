"use client";



import { motion } from "framer-motion";

import { site } from "@/data/site";

import { SectionHeader } from "./SectionHeader";



const highlights = [
  {
    title: "Ships to production",
    desc: "At Bain I build enterprise features end to end: React screens, backend APIs, cloud services, and AI tools that real teams use every day.",
  },
  {
    title: "AI that checks its own work",
    desc: "Content Agent finds trending topics for a niche, checks every claim against its sources, and asks a person to approve each post before it goes anywhere.",
  },
  {
    title: "Automation that saves hours",
    desc: "At Amenify I built a browser automation platform with Playwright and Claude that connects Slack and Google Sheets to replace manual operations work.",
  },
  {
    title: "Engineering you can rely on",
    desc: "Strong fundamentals in data structures and systems, plus tests, clear documentation, and one-command setup so the work runs for someone else too.",
  },
];



export function About() {

  return (

    <section id="about" className="section-padding mx-auto max-w-7xl">

      <SectionHeader

        label="ABOUT"

        title="What I do"

        subtitle="Why teams hire me"

      />



      <motion.p

        initial={{ opacity: 0, y: 20 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true, margin: "-60px" }}

        transition={{ duration: 0.6 }}

        className="mb-4 max-w-3xl text-lg leading-relaxed text-muted md:text-xl"

      >

        I&apos;m a software engineer who builds{" "}

        <span className="font-semibold text-text">AI-powered products that work in the real world</span> — not demos.

        I&apos;ve shipped enterprise software at Bain and automation platforms at Amenify.

      </motion.p>



      <motion.p

        initial={{ opacity: 0, y: 20 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true, margin: "-60px" }}

        transition={{ delay: 0.1, duration: 0.6 }}

        className="mb-12 max-w-3xl text-base leading-relaxed text-accent/90 md:text-lg"

      >

        {site.availability}

      </motion.p>



      <div className="grid gap-6 md:grid-cols-2">

        {highlights.map((item, i) => (

          <motion.article

            key={item.title}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-60px" }}

            transition={{ delay: i * 0.08, duration: 0.6 }}

            className="group rounded-2xl bg-card p-8 card-border transition hover:bg-card-hover"

          >

            <h3 className="font-display text-xl font-bold text-text transition group-hover:text-accent">

              {item.title}

            </h3>

            <p className="mt-3 leading-relaxed text-muted">{item.desc}</p>

          </motion.article>

        ))}

      </div>

    </section>

  );

}

