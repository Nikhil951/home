# Your Portfolio

A fast, content-first portfolio + projects + blog built with [Astro](https://astro.build).
You write everything in Markdown; the site rebuilds and deploys itself when you push to Git.

---

## 1. Run it locally

You need **Node.js (LTS)** installed. Then:

```bash
npm install      # one time
npm run dev      # start the dev server
```

Open the URL it prints (usually http://localhost:4321). The site reloads as you edit.

To check a production build:

```bash
npm run build    # outputs to ./dist
npm run preview  # serve the built site locally
```

---

## 2. Make it yours

Search-and-replace these placeholders:

- `Your Name` — in `src/layouts/BaseLayout.astro`, `src/pages/*`, and components
- `you@example.com` and the social links — in `src/components/Footer.astro` and `src/pages/index.astro`
- `YN` monogram — in `src/components/Header.astro` and `public/favicon.svg`
- `site:` URL — in `astro.config.mjs` (set this to your real domain)

**Re-theme the whole site** by editing the CSS variables at the top of
`src/styles/global.css` (colors and fonts live there).

---

## 3. Add a project or blog post

This is the day-to-day workflow. Create a new `.md` file:

- Projects → `src/content/projects/`
- Blog posts → `src/content/blog/`

Each file starts with frontmatter. Copy an existing file as a template.

**Project frontmatter:**

```markdown
---
title: "Project name"
description: "One-line summary."
date: 2026-02-01
tags: ["React", "Design"]
url: "https://live-demo.com"        # optional
repo: "https://github.com/..."      # optional
featured: true                       # shows on the homepage
---

Your project write-up in Markdown goes here.
```

**Blog frontmatter:**

```markdown
---
title: "Post title"
description: "One-line summary."
date: 2026-02-01
tags: ["Writing"]
draft: false        # set true to hide it until ready
---

Your post in Markdown goes here.
```

The fields are validated by a schema in `src/content/config.ts` — if you forget a
required field, the build tells you exactly what's missing.

---

## 4. Put it on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourname/your-portfolio.git
git push -u origin main
```

---

## 5. Deploy (free)

Any of these work and all auto-redeploy on every push. Pick one:

**Vercel** (recommended): go to vercel.com → New Project → import your repo →
it auto-detects Astro → Deploy. Done in ~1 minute.

**Netlify** or **Cloudflare Pages**: same flow — connect the repo, accept the
detected Astro settings (build command `npm run build`, output `dist`), deploy.

### Custom domain

1. Buy a domain (Cloudflare or Namecheap, ~$10–15/yr).
2. In your host's project settings, add the domain and follow the DNS steps.
3. HTTPS is provisioned automatically.

Then update `site:` in `astro.config.mjs` to that domain and push.

---

## The ongoing loop

```
write a Markdown file  →  git push  →  live in ~1 minute
```

No server to maintain, no CMS to log into, and nothing to pay for except the domain.

---

## Optional: a visual editor later

If editing Markdown files directly starts to feel tedious, add a Git-based CMS
that writes to these same files and gives you an admin UI:
[Keystatic](https://keystatic.com), [TinaCMS](https://tina.io), or
[Decap CMS](https://decapcms.org). The underlying workflow doesn't change.

---

## Project structure

```
src/
  content/
    config.ts          # schema for projects + blog (the "database" shape)
    projects/*.md       # one file per project
    blog/*.md           # one file per post
  layouts/
    BaseLayout.astro    # page shell: head, fonts, header, footer
    EntryLayout.astro   # individual project / post pages
  components/
    Header.astro
    Footer.astro
    EntryCard.astro     # row in the projects/blog lists
  pages/
    index.astro         # homepage
    projects/index.astro, [...slug].astro
    blog/index.astro, [...slug].astro
  styles/global.css     # design tokens + all styling
public/                 # static files served as-is (favicon, images)
```
