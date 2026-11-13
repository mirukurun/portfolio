import type { MetadataRoute } from 'next'
import { CONTACT } from '@/lib/cvData'

export const dynamic = 'force-static'

// Open to every crawler, AI assistants included (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${CONTACT.website}/sitemap.xml`,
    host: CONTACT.website,
  }
}
