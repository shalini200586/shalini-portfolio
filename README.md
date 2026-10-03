# Shalini Jha — Portfolio

Next.js · Three.js · GSAP · Framer Motion

---

## Run locally

```bash
npm install
npm run dev
```

---

## Deploy (Vercel)

1. Push to GitHub: `git push origin main`
2. [vercel.com](https://vercel.com) → Import **`shalini200586/shalini-portfolio`**
3. Deploy — auto-updates on every push

---

## Add a project

Edit `src/data/projects.ts`:

```ts
{
  id: "my-project",
  title: "Project Name",
  description: "Short description.",
  tags: ["Next.js", "RAG"],
  github: "https://github.com/shalini200586/repo",
  featured: true,
},
```

Then: `git add . && git commit -m "Add project" && git push`

---

## Edit content

| File | Content |
|---|---|
| `src/data/site.ts` | Name, email, links |
| `src/data/experience.ts` | Bain, Amenify, IIT |
| `src/data/projects.ts` | Projects |
| `src/data/skills.ts` | Tech stack |
| `src/data/achievements.ts` | Achievements |
