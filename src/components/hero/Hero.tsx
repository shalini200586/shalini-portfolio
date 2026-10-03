"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowUpRight, Code2, Globe, Mail } from "lucide-react";
import { site } from "@/data/site";
import { AvatarPortrait } from "./AvatarPortrait";
import { RoleRotator } from "./RoleRotator";
import { ScrollIndicator } from "./ScrollIndicator";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden section-padding">
      <HeroScene />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,transparent_0%,#070707_75%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-bg/10 to-bg" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-xs font-bold tracking-[0.35em] text-muted"
          >
            HELLO, I&apos;M
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,11vw,7rem)] font-black leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block text-gradient"
            >
              {site.firstName}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block accent-gradient"
            >
              {site.lastName}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="mt-6 text-lg font-semibold text-text md:text-xl">{site.subtitle}</p>
            <p className="text-base text-muted md:text-lg">{site.education}</p>
            <RoleRotator />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {site.tagline}
            </p>
            <p className="mt-3 text-sm font-medium tracking-wide text-accent/80">{site.focus}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              data-cursor="VIEW"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-soft"
            >
              Explore My Work
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              data-cursor="SAY HI"
              className="inline-flex items-center gap-2 rounded-full card-border bg-card/80 px-6 py-3 text-sm font-bold text-text backdrop-blur-sm transition hover:bg-card-hover"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CONNECT"
              className="text-muted transition hover:text-accent"
              aria-label="LinkedIn"
            >
              <Globe size={20} />
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CODE"
              className="text-muted transition hover:text-accent"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>
            <a
              href={`mailto:${site.email}`}
              data-cursor="SAY HI"
              className="text-muted transition hover:text-accent"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <AvatarPortrait />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
