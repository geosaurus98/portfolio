# George Johnson — Portfolio Website

Personal engineering portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4.

**Live site:** https://george-johnson.vercel.app/

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

- [x] **Deploy to Vercel** — live at https://george-johnson.vercel.app/. Pushes to `master` deploy automatically. Set `NEXT_PUBLIC_SITE_URL` if you add a custom domain (used for social preview images).
- [ ] **Add CV PDF** — drop `George_Johnson_CV.pdf` into `public/`. Until it is added, the home and contact pages offer an email request link. Update both links when enabling downloads.
- [ ] **Add project photos** — drop images into `public/projects/<project-id>/` and add `{ src, alt, caption }` entries to the project's `images` array in `src/data/projects.ts`. The Step Counter has its two README diagrams; RoboCup, the robotic arm and the PLC elevator still need real photos.

### High value for engineering roles

- [ ] **Contact form** — built, but hidden until configured. Create a free form at [formspree.io](https://formspree.io), then in Vercel add the environment variable `NEXT_PUBLIC_FORMSPREE_ID` (the ID after `/f/` in the form endpoint) and redeploy.
- [x] **Custom favicon** — `src/app/icon.svg`.
- [ ] **"Available from" signal** — add a one-liner to the hero: *"Available for graduate roles from [month]"*. Edit `src/app/page.tsx`.

### Polish

- [x] **Custom 404 page** — `src/app/not-found.tsx`.
- [ ] **Analytics** — the code is in place (`<Analytics />` in `layout.tsx`). Turn it on in the Vercel dashboard: project → **Analytics** → **Enable**.
- [x] **Sitemap** — `src/app/sitemap.ts` and `src/app/robots.ts`.

### Nice to have

- [ ] **RoboCup video** — drop the video file into `public/projects/robocup/` named `video.mp4`. Add a `video` entry to the RoboCup project once the file exists.
- [ ] **Custom domain** — after you have the role, or if you already own a domain.
- [x] **About section** — on the home page (`src/app/page.tsx`).

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
2. Set `category: "software"` for software side projects (shown in their own section), or leave it out for engineering projects.
3. Fill in the `detail` object: `overview`, `highlights`, `challenge`, `outcome`, plus optional `contribution`, `metrics`, `diagram`, `video`, and `images`.
4. Drop any photos into `public/projects/<id>/` and reference them in `images`.
5. The project card and detail page are generated automatically — no other files to touch.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based config, no `tailwind.config.ts`)
- **Theming:** CSS custom properties on `data-theme` attribute, persisted via localStorage
- **Deployment:** Vercel (free tier)
