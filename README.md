# uga-lul

**ΛΥΛ — Beta Tau Chapter (University of Georgia) — Website**

---

## What this is

A single-page style marketing site for the Beta Tau Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc., built with Next.js. It includes extra routes for **About** and **Hermanos** (brothers / crossing history).

---

## How it was created (big picture)

1. The project started from the official Next.js starter (**Create Next App**) — that gives you TypeScript, the App Router folder layout, ESLint, and a working dev server out of the box.

2. On top of that baseline, custom pages and components were added:
   - The home page composes sections (Hero, About, Hermanos preview, Timeline, Join) in one file for speed; other chapters could split these later.
   - Shared chrome: navbar, footer, floating chapter symbol, particles.
   - Styling is mostly **inline styles** plus **`globals.css`** for animations, mobile layout helpers, and a few shared classes.

3. Fonts load from Google Fonts through **`next/font`** (see `app/layout.tsx`).

---

## Folder structure (simple)

```
my-app/
  app/                      ← Next.js "App Router" — URLs map to folders here
    layout.tsx              Root layout: fonts, <body>, global floating symbol
    page.tsx                Home "/" — main landing (all major sections)
    globals.css             Global CSS: variables, keyframes, mobile tweaks
    loading.tsx             Optional loading UI
    about/
      page.tsx              "/about"
    hermanos/
      page.tsx              "/hermanos"

  components/               Reusable UI pieces used by pages
    site-navbar.tsx
    site-footer.tsx
    floating-lul-symbol.tsx
    particles.tsx
    shield-logo.tsx
    ui/
      button.tsx            (shadcn-style button — Radix slot)

  lib/                      Small hooks and helpers
    use-scroll-reveal.ts    IntersectionObserver for scroll-in animations
    use-prefers-reduced-motion.ts
    utils.ts                (e.g. cn() for class names)

  public/                   Static files served at the site root
    Images, logos, etc.     Referenced as "/filename.png" in code

  package.json              Dependencies and npm scripts
  tailwind.config.ts        Tailwind setup (some utilities still used)
  tsconfig.json             TypeScript compiler options
```

---

## Tech stack

**Runtime / framework**

- Next.js 15 (App Router)
- React 19
- TypeScript

**Styling**

- Tailwind CSS 3 + tailwindcss-animate
- Global CSS for animations and a few layout classes
- Inline styles for most section/layout fine-tuning

**UI utilities**

- Radix UI Slot (`@radix-ui/react-slot`)
- class-variance-authority, clsx, tailwind-merge
- lucide-react (icons, if used)

**Tooling**

- ESLint (`eslint-config-next`)
- Turbopack for local dev (`npm run dev`)

---

## What you need installed

- **Node.js** 18.18+ or **20+** (LTS recommended). Next.js 15 expects a recent Node.
- **npm** (comes with Node), or pnpm/yarn if you prefer.

---

## How to install

Open a terminal in this folder (the same folder that contains `package.json`).

```bash
npm install
```

That reads `package.json` and downloads all dependencies into `node_modules/`.

---

## How to run (development)

```bash
npm run dev
```

Then open the URL shown in the terminal (usually **http://localhost:3000**).

The dev script uses Next with **Turbopack** for faster refreshes while you edit.

---

## How to run (production build locally)

```bash
npm run build     # creates an optimized production build in .next/
npm run start     # serves that build (usually http://localhost:3000)
```

Use **build** + **start** to verify everything works before deploying (e.g. Vercel).

---

## Other scripts

```bash
npm run lint      # runs Next.js ESLint checks
```

---

## Deploy to Vercel (this repo)

This app is a normal **Next.js 15** project. Vercel detects it from `package.json` — you do **not** need a `vercel.json` file for a basic deploy.

### One-time setup

1. Push this repo to GitHub (you already use **`CarlosTho/uga-lul`**).
2. Go to [vercel.com](https://vercel.com) → sign in with **GitHub**.
3. **Add New… → Project** → **Import** `CarlosTho/uga-lul`.

### Project settings (important)

| Setting | Value |
|--------|--------|
| **Framework Preset** | **Next.js** (or leave **Auto** — do **not** use “Other”) |
| **Root Directory** | **`./`** — only change this if `package.json` is *inside* a subfolder (e.g. `my-app`). For `uga-lul` with the app at the repo root, keep **`./`**. |
| **Build Command** | Default (`next build` — leave blank / default) |
| **Output Directory** | Default (leave blank) |
| **Install Command** | Default (`npm install`) |

No **environment variables** are required for the current site.

4. Click **Deploy**. When the build finishes, open the **`.vercel.app`** URL.

### After deploy

- **Automatic deploys:** pushes to **`main`** redeploy production (default).
- **Preview:** other branches / PRs get preview URLs.
- **Custom domain:** Project → **Settings → Domains** → add your domain and follow DNS steps.

### If the build fails on Vercel

- Confirm **Root Directory** points at the folder that contains **`package.json`**.
- Open the failed deployment → **Building** log; fix the error locally, then `git push` again.
- Run **`npm run build`** on your machine first — it should pass (same command Vercel runs).

### Other hosts

Any Node host that runs `npm run build` then `npm run start` can serve the app; Vercel is the path of least resistance for Next.js.

---

## Where to edit common things

| Area | File |
|------|------|
| Home page copy & sections | `app/page.tsx` |
| About page | `app/about/page.tsx` |
| Hermanos page | `app/hermanos/page.tsx` |
| Site-wide fonts / metadata / floating symbol | `app/layout.tsx` |
| Global animations & mobile CSS | `app/globals.css` |
| Nav links & mobile menu | `components/site-navbar.tsx` |
| Footer | `components/site-footer.tsx` |

---

*End of README.*
