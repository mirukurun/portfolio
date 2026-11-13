import type { MetadataRoute } from 'next'
import { SITEMAP_PATHS, url } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((path) => ({
    url: url(path),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
