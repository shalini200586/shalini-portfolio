import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. SDE @ Bain · IIT Patna &apos;27</p>
        <p className="text-xs tracking-wider uppercase">Software Engineering · Backend · Full-Stack · AI/ML</p>
      </div>
    </footer>
  );
}
