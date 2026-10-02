"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Mail, Send } from "lucide-react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border-3 border-ink bg-gradient-to-br from-coral/20 via-white to-teal/20 p-8 shadow-cartoon md:p-12"
        >
          <h2 className="text-3xl font-black text-ink md:text-4xl">Let&apos;s build something</h2>
          <p className="mt-3 max-w-xl text-lg text-ink/70">
            Have a project, internship, or just want to say hi? I&apos;d love to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-2xl border-3 border-ink bg-coral px-5 py-3 font-bold text-white shadow-cartoon-sm transition hover:-translate-y-0.5"
            >
              <Mail size={18} />
              {site.email}
            </a>

            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border-3 border-ink bg-white px-5 py-3 font-bold shadow-cartoon-sm transition hover:-translate-y-0.5"
            >
              <Code2 size={18} />
              GitHub
            </a>

            {site.social.linkedin ? (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border-3 border-ink bg-white px-5 py-3 font-bold shadow-cartoon-sm transition hover:-translate-y-0.5"
              >
                <Globe size={18} />
                LinkedIn
              </a>
            ) : null}
          </div>

          <form
            className="mt-10 grid gap-4 md:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const data = new FormData(form);
              const name = data.get("name");
              const message = data.get("message");
              window.location.href = `mailto:${site.email}?subject=Portfolio contact from ${name}&body=${encodeURIComponent(String(message))}`;
            }}
          >
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-2xl border-3 border-ink bg-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-coral/40"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="rounded-2xl border-3 border-ink bg-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-coral/40"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Your message"
              className="rounded-2xl border-3 border-ink bg-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-coral/40 md:col-span-2"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-3 border-ink bg-ink px-5 py-3 font-bold text-white shadow-cartoon-sm transition hover:-translate-y-0.5 md:col-span-2 md:w-fit"
            >
              <Send size={18} />
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
