"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { CartoonAvatar } from "./CartoonAvatar";
import { FloatingShapes } from "./FloatingShapes";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 md:pt-16">
      <FloatingShapes />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-3 border-ink bg-sun/40 px-4 py-1.5 text-sm font-bold text-ink shadow-cartoon-sm">
            <Sparkles size={16} />
            Open to opportunities
          </div>

          <h1 className="text-4xl font-black leading-tight text-ink md:text-6xl">
            Hey, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-coral">{site.name}</span>
              <span className="absolute bottom-1 left-0 -z-0 h-4 w-full bg-sun/70" />
            </span>
            <br />
            {site.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl border-3 border-ink bg-coral px-6 py-3 font-bold text-white shadow-cartoon transition hover:-translate-y-1"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-2xl border-3 border-ink bg-white px-6 py-3 font-bold text-ink shadow-cartoon transition hover:-translate-y-1"
            >
              Contact me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <CartoonAvatar />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-sm font-semibold text-ink/60"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll down
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
