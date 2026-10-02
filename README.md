# Shalini Portfolio

Playful cartoon-style portfolio for a full-stack developer. Built with Next.js, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

### 1. Add your photo (cartoon hero)

Drop your photo into `public/avatar.png` (square works best, at least 400×400px).

The site shows your photo in a cartoon-style frame. If the file is missing, a placeholder illustration appears instead.

### 2. Edit your info

Update [`src/data/site.ts`](src/data/site.ts):

- Name, title, tagline, email, location
- GitHub, LinkedIn links
- Bio paragraphs

### 3. Add projects

Edit [`src/data/projects.ts`](src/data/projects.ts):

```ts
{
  id: "my-app",
  title: "My App",
  description: "What it does and what you built.",
  tags: ["Next.js", "Node.js"],
  github: "https://github.com/you/repo",
  live: "https://my-app.vercel.app",
  status: "live",
  featured: true,
}
```

### 4. Update skills

Edit [`src/data/skills.ts`](src/data/skills.ts).

## Deploy

Push to GitHub and deploy on [Vercel](https://vercel.com) (free for personal sites).

## Color palette

- Cream background — warm, friendly
- Coral + teal + sunshine yellow accents
- Bold cartoon borders and shadows
- No purple theme
