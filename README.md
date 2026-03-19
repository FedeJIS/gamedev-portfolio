# My Portfolio — Next.js + Tailwind

A dark, minimal game developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

### 1. Prerequisites
- [Node.js 18+](https://nodejs.org) (LTS version recommended)
- [VS Code](https://code.visualstudio.com)

### 2. Setup

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              ← Home page (assembles sections)
│   ├── layout.tsx            ← Root layout (navbar + footer)
│   ├── globals.css           ← Global styles + fonts
│   ├── about/page.tsx        ← About Me page
│   ├── projects/
│   │   ├── page.tsx          ← All projects listing
│   │   └── [slug]/page.tsx   ← Individual project page
│   └── blog/
│       ├── page.tsx          ← Blog listing
│       └── [slug]/page.tsx   ← Individual blog post
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── ProjectsSection.tsx   ← Also contains project data array
    ├── SkillsSection.tsx
    └── ContactSection.tsx
```

---

## Customizing Content

### Your info
- **Name**: Search `YourName` across all files and replace
- **Email**: Search `you@example.com` and replace
- **Social links**: Check `Navbar.tsx`, `Footer.tsx`, `ContactSection.tsx`

### Projects
Edit the `projects` array in `src/components/ProjectsSection.tsx`:
```ts
export const projects = [
  {
    slug: "my-game",           // URL slug: /projects/my-game
    title: "My Game",
    tags: ["Unity", "C#"],
    category: "Game",          // "Game" | "VR" | "Tool"
    role: "Solo Developer",
    year: "2024",
    description: "Short description shown in cards.",
    cover: null,               // Add image path later: "/projects/my-game/cover.png"
  },
  // ...
];
```

### Blog Posts
Edit the `posts` array in `src/app/blog/page.tsx`. For a real blog,
consider adding `next-mdx-remote` so you can write posts as `.mdx` files.

### Skills
Edit `src/components/SkillsSection.tsx` — just modify the `skillGroups` array.

### Colors & Fonts
Edit `tailwind.config.js` and `src/app/globals.css`. The accent color is `#e8ff47`.

---

## Deploying to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → import your repo
4. Click "Deploy" — that's it

Your site will be live at `yourname.vercel.app` in ~60 seconds.
You can also connect a custom domain from the Vercel dashboard.

---

## Next Steps

- [ ] Replace placeholder content with your real info
- [ ] Add project screenshots to `/public/projects/`
- [ ] Set up a real contact form with [Formspree](https://formspree.io) (free tier)
- [ ] Add MDX support for blog posts
- [ ] Connect a custom domain on Vercel
