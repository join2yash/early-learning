# Early Learning Point — Website

A static website for **Early Learning Point**, an early-childhood support
center in Naveen Shahdara, Delhi, offering ABA therapy, speech therapy, and
special education support. Content comes from the business card you
uploaded, plus sample blog content you can replace with real posts.

No backend, no database — just a React site. Simplest possible setup and hosting.

## Structure

```
early-learning-point/
└── Frontend/
    └── Src/
        ├── data/         Services and blog posts — edit these files to change content
        ├── pages/         Home, Services, Blog, Blog post, Contact
        └── components/   Navbar, Footer, cards, and original SVG icons/illustrations
```

## Pages

- **Home** (`/`) — hero, three pillars, service previews, blog previews, contact CTA
- **Services** (`/services`) — full detail on ABA Therapy, Speech Therapy, and Special Education, plus a "how we work" 4-step process
- **Blog** (`/blog`) — article listing, with each post at `/blog/:slug`
- **Contact** (`/contact`) — phone/location and an inquiry form (see "Contact form" below)

## Design

- Colors: indigo `#1D3557`, gold `#F4B740`, soft sky `#EAF4FB`, coral `#EF8354` — pulled from the business card's own blue/yellow palette
- Type: Baloo 2 for headings, Inter for body text
- All icons and illustrations are original SVGs built for this project — no photos or third-party artwork, including the child's photo from the business card

## Running it locally

You need [Node.js](https://nodejs.org) (v18+). That's the only requirement.

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173.

## Contact form (no backend needed)

The form uses [Formspree](https://formspree.io), which is free and emails you
each submission with no server of your own:

1. Sign up free at formspree.io and create a form.
2. Copy the form ID it gives you.
3. In `frontend`, copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID=your_id`.

Until you do that, the form falls back to opening a pre-filled email draft in
the visitor's own email app — functional, just less polished.

## Editing content

- **Services**: edit `frontend/src/data/services.js`
- **Blog posts**: edit `frontend/src/data/posts.js` — add, remove, or rewrite entries directly; the sample posts are placeholders and should be replaced with real articles before launch
- **Phone / address**: currently in `frontend/src/components/Footer.jsx` and `frontend/src/pages/Contact.jsx` (`78385 53575`, Naveen Shahdara, Delhi)
- **Colors/fonts**: `frontend/tailwind.config.js` and the Google Fonts link in `frontend/index.html`

## Deploying

Since this is now a static site, hosting is a single free step:

1. Push the `frontend` folder (or the whole repo, with `frontend` as the root) to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import the repo.
3. Set **Root Directory** to `frontend` if your repo has other folders alongside it.
4. If you're using Formspree, add the `VITE_FORMSPREE_ID` environment variable in Vercel's project settings.
5. Deploy — you'll get a free `yourproject.vercel.app` URL.

Netlify and Cloudflare Pages work the same way, if you'd rather use one of those instead.
