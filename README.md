# George Johnson — Portfolio Website

Personal engineering portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Running locally

```powershell
# SSL cert workaround required on some networks
$env:NODE_TLS_REJECT_UNAUTHORIZED = "0"
npx next dev -p 3001
```

Open [http://localhost:3001](http://localhost:3001).

> If port 3001 is taken, Next.js will pick the next available port — check the terminal output.

---

## Checklist — things still to do

### Must-haves (do these before sharing the link)

- [ ] **Deploy to Vercel** — push to GitHub, import the repo at vercel.com/new, done. Free tier is fine.
- [ ] **Add CV PDF** — drop `George_Johnson_CV.pdf` into `public/`. The download button on the hero 404s until this exists.
- [ ] **Add project photos** — drop images into `public/projects/<project-id>/` and update the `images` array in `src/data/projects.ts`. Even one real photo per project makes a big difference.

### High value for engineering roles

- [ ] **Contact form** — the contact page is static info only. Add a working form with [Formspree](https://formspree.io) (free tier, no backend needed).
- [ ] **Custom favicon** — replace the default Next.js icon. A simple monogram SVG in terminal green. Put it in `public/favicon.ico` (or `public/icon.svg` for Next.js App Router auto-detection).
- [ ] **"Available from" signal** — add a one-liner to the hero: *"Available for graduate roles from [month]"*. Edit `src/app/page.tsx`.

### Polish

- [ ] **Custom 404 page** — create `src/app/not-found.tsx`. Currently shows the Next.js default.
- [ ] **Analytics** — enable Vercel Analytics (free, one line of code) before you start sharing the link so you can see who's visiting.
- [ ] **Sitemap** — install `next-sitemap`, add a `next-sitemap.config.js`, and add `postbuild` to `package.json`. Helps Google index the site.

### Nice to have

- [ ] **RoboCup video** — drop the video file into `public/projects/robocup/` named `video.mp4`. The player is already wired up in the data.
- [ ] **Custom domain** — after you have the role, or if you already own a domain.
- [ ] **About page** — only worth adding if you have more to say than the hero covers.

---

## Project structure

```text
src/
  app/                  # Next.js App Router pages
    page.tsx            # Home / hero + skills
    projects/
      page.tsx          # Project card grid
      [id]/
        page.tsx        # Individual project detail
    experience/
      page.tsx          # Work + education timeline
    contact/
      page.tsx          # Contact + CV download
  components/
    Nav.tsx             # Fixed nav, mobile menu, theme toggle
    ThemeProvider.tsx   # Dark/light mode context + localStorage
    AnimateIn.tsx       # IntersectionObserver scroll reveal
    StateDiagram.tsx    # SVG FSM state machine renderer
  data/
    projects.ts         # All project content — edit this to update projects
    experience.ts       # Work history and education
    skills.ts           # Skills by category
public/
  George_Johnson_CV.pdf         # <-- add this
  projects/
    robocup/
      video.mp4                 # <-- add this
      *.jpg / *.png             # project photos
    <other-project-id>/
      *.jpg / *.png
```

## Adding a new project

1. Add an entry to the `projects` array in `src/data/projects.ts` with a unique `id`.
2. Fill in the `detail` object: `overview`, `highlights`, `challenge`, `outcome`, plus optional `metrics`, `diagram`, `video`, and `images`.
3. Drop any photos into `public/projects/<id>/` and reference them in `images`.
4. The project card and detail page are generated automatically — no other files to touch.

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based config, no `tailwind.config.ts`)
- **Theming:** CSS custom properties on `data-theme` attribute, persisted via localStorage
- **Deployment target:** Vercel (free tier)
