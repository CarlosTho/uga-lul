================================================================================
  ΛΥΛ — Beta Tau Chapter (University of Georgia) — Website
================================================================================

WHAT THIS IS
------------
A single-page style marketing site for the Beta Tau Chapter of La Unidad Latina,
Lambda Upsilon Lambda Fraternity, Inc., built with Next.js. It includes extra
routes for About and Hermanos (brothers / crossing history).


HOW IT WAS CREATED (BIG PICTURE)
--------------------------------
1. The project started from the official Next.js starter ("Create Next App") —
   that gives you TypeScript, the App Router folder layout, ESLint, and a
   working dev server out of the box.

2. On top of that baseline, custom pages and components were added:
   - The home page composes sections (Hero, About, Hermanos preview, Timeline,
     Join) in one file for speed; other chapters could split these later.
   - Shared chrome: navbar, footer, floating chapter symbol, particles.
   - Styling is mostly inline styles plus globals.css for animations, mobile
     layout helpers, and a few shared classes.

3. Fonts load from Google Fonts through next/font (see app/layout.tsx).


FOLDER STRUCTURE (SIMPLE)
-------------------------
my-app/
  app/                      <-- Next.js "App Router" — URLs map to folders here
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


TECH STACK
----------
Runtime / framework
  - Next.js 15 (App Router)
  - React 19
  - TypeScript

Styling
  - Tailwind CSS 3 + tailwindcss-animate
  - Global CSS for animations and a few layout classes
  - Inline styles for most section/layout fine-tuning

UI utilities
  - Radix UI Slot (@radix-ui/react-slot)
  - class-variance-authority, clsx, tailwind-merge
  - lucide-react (icons, if used)

Tooling
  - ESLint (eslint-config-next)
  - Turbopack for local dev (see npm run dev)


WHAT YOU NEED INSTALLED
-----------------------
  - Node.js 18.18+ or 20+ (LTS recommended). Next.js 15 expects a recent Node.
  - npm (comes with Node) or pnpm/yarn if you prefer.


HOW TO INSTALL
--------------
Open a terminal in this folder (the same folder that contains package.json).

  npm install

That reads package.json and downloads all dependencies into node_modules/.


HOW TO RUN (DEVELOPMENT)
------------------------
  npm run dev

Then open the URL shown in the terminal (usually http://localhost:3000).

The dev script uses Next with Turbopack for faster refreshes while you edit.


HOW TO RUN (PRODUCTION BUILD LOCALLY)
-------------------------------------
  npm run build     # creates an optimized production build in .next/
  npm run start     # serves that build (usually http://localhost:3000)

Use "build" + "start" to verify everything works before deploying (e.g. Vercel).


OTHER SCRIPTS
-------------
  npm run lint      # runs Next.js ESLint checks


DEPLOYMENT (SHORT NOTE)
-----------------------
This is a static-friendly Next app. Common hosts:
  - Vercel (zero-config for Next.js)
  - Any Node host that runs `npm run build` and `npm run start`

Set environment variables only if you add features that need them; the current
site runs without a .env for basic viewing.


WHERE TO EDIT COMMON THINGS
----------------------------
  - Home page copy & sections: app/page.tsx
  - About page: app/about/page.tsx
  - Hermanos page: app/hermanos/page.tsx
  - Site-wide fonts / metadata / floating symbol: app/layout.tsx
  - Global animations & mobile CSS: app/globals.css
  - Nav links & mobile menu: components/site-navbar.tsx
  - Footer: components/site-footer.tsx


================================================================================
  End of README
================================================================================
