# Luxury Lifestyle Website

This repository contains the source code for a luxury‑themed website built with **Next.js** and styled using **Tailwind CSS**.  The project is configured to deploy on Vercel and includes a simple JSON‑driven content system so non‑developers can update copy, images and theme settings without touching any code.

## Structure overview

```
luxury-site/
├─ pages/                 # Next.js pages (home, about, blog, contact, etc.)
│  ├─ api/sitemap.js      # Dynamic sitemap generator
│  └─ blog/               # Blog listing and individual posts
├─ components/            # Reusable React components (Layout, Navbar, Footer, …)
├─ content/
│  ├─ settings.json       # Global site settings (colors, fonts, title, analytics, newsletter)
│  ├─ home.json           # Home page copy and hero image
│  ├─ about.json          # About page copy and image
│  └─ posts/              # Markdown blog posts with front matter
├─ public/
│  ├─ images/             # Static images referenced by JSON/posts
│  └─ robots.txt          # Robots and sitemap entry
└─ styles/
   └─ globals.css         # Tailwind entrypoint and global styles
```

## Editing content

You can update almost everything on the site by editing files in the `content/` folder and adding images to `public/images/`.  No build tools or programming knowledge are necessary—simply modify the JSON or Markdown files, commit the changes and deploy.

### Home page

The home page copy and hero image live in **`content/home.json`**.  Here’s a simplified example:

```json
{
  "title": "Welcome to Our World of Luxury",
  "subtitle": "Experience elegance and refined living like never before.",
  "heroImage": "/images/hero.png",
  "sections": [
    { "title": "Our Philosophy", "text": "…" },
    { "title": "Services", "text": "…" }
  ]
}
```

- **title/subtitle** – Strings shown in the hero banner.
- **heroImage** – Path to an image inside `public/images/` (upload your own and update this field).
- **sections** – An array of objects, each with a `title` and `text`.  Add, remove or edit entries to change the sections on the page.

### About page

Edit **`content/about.json`** to change the About page heading, description and accompanying image:

```json
{
  "title": "About Luxury Lifestyle",
  "content": "Long description …",
  "image": "/images/about.png"
}
```

### Blog posts

Blog posts live in **`content/posts/`** as Markdown files (`.md`).  Each file must include a YAML front matter block that defines at least a `title` and `date`.  You can also specify an `excerpt` (used on the listing page) and an optional `coverImage`:

```md
---
title: "My First Post"
date: "2025-08-01"
excerpt: "A short preview shown on the blog index."
coverImage: "/images/example.png"
---

## Heading

Your Markdown content goes here.  Use standard Markdown syntax for lists, code, links and more.
```

To add a new post, simply copy the `welcome.md` file in `content/posts/` and adjust the front matter and body.  The filename (without extension) becomes the URL slug.

### Site settings & theme

Global settings (site title, description, color palette, fonts and integrations) live in **`content/settings.json`**.  Key fields include:

- **siteTitle** and **siteDescription** – Used in the header, footer and SEO metadata.
- **theme.primary**, **theme.secondary** and **theme.fontFamily** – Tailwind colours and font family.  Update these hex codes or font names to adjust the look and feel.
- **gaTrackingId** – Your Google Analytics measurement ID.  Leave empty to disable analytics.
- **newsletter.endpoint** – The endpoint for the newsletter form.  The default uses [Formsubmit](https://formsubmit.co) to send sign‑ups to your email.  Replace this with a Mailchimp endpoint if you prefer.
- **contactEmail** – Used by the contact form.  Messages submitted through the contact page will be sent to this address via Formsubmit.

### Images

Add your own images to `public/images/` and reference them in the JSON files or front matter.  Use descriptive filenames and update the paths accordingly (e.g. `/images/new‑hero.jpg`).  Make sure to commit new image files so they’re available in production.

## Running & deploying

This project is configured for deployment on Vercel:

1. **Install dependencies and run locally** (optional).  In an environment with internet access, run `npm install` followed by `npm run dev`.
2. **Commit your changes to GitHub**.  Create a new repository and push the entire `luxury-site` folder.
3. **Deploy on Vercel**.  In your Vercel dashboard, choose “New Project”, import your GitHub repository and use the default settings.  Vercel will install dependencies and build the project automatically.
4. **Set environment variables** (optional).  If you configure analytics or other services, add the appropriate environment variables in Vercel’s settings.

After deployment, your site will be live at the URL provided by Vercel, and you can update content by editing files in the repository and redeploying.

## Contact form & newsletter

The contact and newsletter forms use [Formsubmit](https://formsubmit.co) by default, which will send submissions to the email defined in `settings.json`.  When you receive the first submission, Formsubmit will send a confirmation email asking you to verify your address.  After verification, all subsequent submissions will be delivered to your inbox.  Feel free to replace the `endpoint` with another provider (e.g. Mailchimp) if you prefer.

## Sitemap & robots

The sitemap is generated dynamically at `/api/sitemap` using the current list of pages and blog posts.  The `robots.txt` file references this endpoint so search engines can discover all your content.
