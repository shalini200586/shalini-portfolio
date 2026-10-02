import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t-3 border-ink/10 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm font-semibold text-ink/60 md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js + a lot of ☕
        </p>
        <p>Designed with a playful cartoon vibe — no purple allowed.</p>
      </div>
    </footer>
  );
}
