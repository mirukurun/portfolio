# Portfolio

My personal portfolio site. I designed it and built it myself.

**Live:** [diportfolio-self.vercel.app](https://diportfolio-self.vercel.app)

## What's inside

The home page is an interactive avatar. Move the cursor to the left and the Design section lights up, to the right for Marketing, to the bottom for the Blog. Mobile has its own layout built for touch.

**Design.** Case studies with process and results:
- a brand system built from zero for a hardware company, exported as design tokens
- a custom icon set
- reusable marketing templates
- a retail display redesign with before and after comparisons
- product UI work for Ivy and Ivy Studio
- work for SpaceCorps and Karolinska

**Marketing.** Growth and content work, including a beauty industry case.

**Blog.** Short essays on AI in marketing, working in a remote team and learning Swedish.

The CV opens in a modal from the home page.

## Built with

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion for page transitions and the avatar hover states
- Deployed on Vercel

## Run it locally

```bash
npm install
npm run dev
```

## Structure

```
app/            pages: home, design/*, marketing/*, blog/*
components/     Avatar, CVModal, PageTransition, case study layout
lib/            case study content (text, images, before and after pairs)
public/         images and project assets
```
