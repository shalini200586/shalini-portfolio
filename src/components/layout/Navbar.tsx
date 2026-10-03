"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-bg/80 py-3 backdrop-blur-xl" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="font-display text-sm font-bold tracking-widest text-text">
          SJ<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="VIEW"
                className="text-xs font-semibold tracking-wider text-muted uppercase transition hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-cursor="SAY HI"
          className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-bold tracking-wider text-text transition hover:border-accent/50 hover:text-accent md:inline-block"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
