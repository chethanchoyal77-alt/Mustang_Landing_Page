# 🐎 Mustang — Landing Page

A dark, high-octane landing page celebrating the Ford Mustang — 60 years of American muscle.
Built with **React**, **Vite** and **Tailwind CSS v4**.

![Stack](https://img.shields.io/badge/React-19-blue) ![Stack](https://img.shields.io/badge/Tailwind-v4-38bdf8)

---

## 🔥 Quick Answer: "I can't open the HTML!"

There are **two versions** of this site:

| File | What it is | How to open |
|------|-----------|-------------|
| **`standalone.html`** (root) | A complete, self-contained page — CSS + JS + images all in one file | ✅ **Double-click it. Done.** No tools, no build, no install needed. |
| `index.html` (root) | The **development entry point** for React/Vite. It references `/src/main.tsx` | ❌ Won't work by double-clicking — this is normal! |
| `dist/index.html` | The **built** version (one file, everything inlined) | ✅ Double-click after running `npm run build` |

> ⚠️ **The root `index.html` is NOT supposed to open directly.** It's just the dev entry
> that Vite transforms during `npm run build`. If you double-click it you'll see a blank
> page — that's expected. Use **`standalone.html`** instead.

---

## 📁 Project Structure

```
├── standalone.html         ← ⭐ THE file you can open/upload right now (no build needed)
├── index.html              ← dev entry point (React/Vite)
├── src/                    ← React source (same design, componentized)
│   ├── App.tsx
│   ├── index.css           ← Tailwind v4 theme + animations
│   ├── data/content.ts
│   └── components/         ← Navbar, Hero, Heritage, Models, Performance, Interior, Gallery, CTA, Footer
├── .github/workflows/deploy.yml  ← auto-deploy to GitHub Pages on push
└── package.json
```

## 🚀 Run the React Version Locally

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

## 📦 Deploy to GitHub Pages

### Option A — Just upload `standalone.html` (easiest, 30 seconds)

1. Create a repo on GitHub (e.g. `mustang`).
2. Upload **`standalone.html`** (and rename it to `index.html` if you want it as the site root).
3. Go to **Settings → Pages → Branch** → select `main` + `/ (root)` → Save.
4. Your site is live at `https://<username>.github.io/mustang/`.

### Option B — Deploy the React project (automatic on every push)

1. Push this whole repo to GitHub.
2. Go to **Settings → Pages → Source** → select **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` builds and deploys automatically.
4. Your site is live — and every `git push` updates it.

## ⚠️ Disclaimer

Fan-made tribute site. Not affiliated with or endorsed by Ford Motor Company.
Photography via [Pexels](https://www.pexels.com).
