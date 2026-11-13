// Per-page <title>, description and canonical URL, plus the sitemap list.
// Built from the same data the pages render, so titles never drift from the cards.

import type { Metadata } from 'next'
import { CONTACT } from '@/lib/cvData'
import { DESIGN_PROJECTS } from '@/lib/designProjects'
import { MARKETING_WORK } from '@/lib/marketingWork'
import { BLOG_POSTS } from '@/lib/blogPosts'

const SITE = CONTACT.website

type PageSeo = { title: string; description: string; type?: 'website' | 'article' }

const SECTIONS: Record<string, PageSeo> = {
  '/design': {
    title: 'UX/UI & Web Design Portfolio',
    description: 'UX/UI, web design and brand identity case studies by Diana Horbyk, a designer in Stockholm: Voxear brand system, SpaceCorps, Karolinska Institutet, Hordi Nails and more.',
  },
  '/marketing': {
    title: 'Growth Marketing & AI Automation Work',
    description: 'Growth marketing, SEO and AI-search visibility, positioning and AI automation projects by Diana Horbyk, a growth marketer in Stockholm.',
  },
  '/blog': {
    title: 'Blog',
    description: 'Writing by Diana Horbyk on marketing, AI, remote team management and learning Swedish.',
  },
  '/services': {
    title: 'Services: Design, Marketing & AI Automation',
    description: 'What Diana Horbyk can do for you: UX/UI and web design, brand identity, growth marketing, SEO and AI-search visibility, and AI workflow automation.',
  },
}

const OG_IMAGE = { url: '/opengraph-image.png', width: 1200, height: 630, alt: `${CONTACT.name} — UX/UI Designer & Growth Marketer` }

const clip = (s: string, n = 160) => (s.length <= n ? s : `${s.slice(0, s.lastIndexOf(' ', n - 1))}…`)
const isLocal = (href?: string): href is string => !!href && href.startsWith('/')

function registry(): Record<string, PageSeo> {
  const out: Record<string, PageSeo> = { ...SECTIONS }
  for (const p of DESIGN_PROJECTS as { title: string; description: string; href?: string }[])
    if (isLocal(p.href)) out[p.href] = { title: p.title, description: clip(p.description) }
  for (const w of MARKETING_WORK) if (isLocal(w.href)) out[w.href] = { title: w.title, description: clip(w.description) }
  for (const b of BLOG_POSTS as { title: string; excerpt: string; href?: string; draft: boolean }[])
    if (!b.draft && isLocal(b.href)) out[b.href] = { title: b.title, description: clip(b.excerpt), type: 'article' }
  return out
}

export const url = (path: string) => (path === '/' ? SITE : `${SITE}${path}/`)

export function pageMeta(path: string): Metadata {
  const seo = registry()[path]
  if (!seo) throw new Error(`No SEO entry for ${path}`)
  const full = `${seo.title} — ${CONTACT.name}`
  // Nested layouts each set a string title, which drops the root template, so spell it out.
  return {
    title: { absolute: full },
    description: seo.description,
    alternates: { canonical: url(path) },
    openGraph: {
      title: full,
      description: seo.description,
      url: url(path),
      siteName: CONTACT.name,
      locale: 'en_US',
      type: seo.type ?? 'website',
      // A page-level openGraph replaces the root one, file-based image included.
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: full, description: seo.description, images: ['/twitter-image.png'] },
  }
}

export const SITEMAP_PATHS = ['/', ...Object.keys(registry())]
