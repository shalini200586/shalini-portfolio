"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-4 z-50 mx-auto w-[min(100%-2rem,72rem)]"
    >
      <nav className="flex items-center justify-between rounded-2xl border-3 border-ink bg-white/90 px-5 py-3 shadow-cartoon backdrop-blur-md">
        <a href="#" className="text-lg font-extrabold tracking-tight text-ink">
          {site.name}
          <span className="text-coral">.</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-semibold text-ink/70 transition hover:text-coral"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl border-3 border-ink bg-coral px-4 py-2 text-sm font-bold text-white shadow-cartoon-sm transition hover:-translate-y-0.5 md:inline-block"
        >
          Say hello
        </a>

        <button
          type="button"
          className="rounded-lg border-2 border-ink p-2 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-2xl border-3 border-ink bg-white p-4 shadow-cartoon md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
