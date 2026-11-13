// schema.org structured data (JSON-LD) for search engines and AI assistants.
// Built from the same data the pages render.

import { CONTACT, EXPERIENCE, LANGUAGES } from '@/lib/cvData'

const SITE = CONTACT.website
const abs = (href?: string) => (href ? (href.startsWith('http') ? href : `${SITE}${href}/`) : undefined)

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so no string in the payload can close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export const CURRENT_ROLES = EXPERIENCE.filter((j) => j.period.endsWith('Present'))

export const PERSON_ID = `${SITE}/#person`

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: CONTACT.name,
      jobTitle: 'UX/UI Designer & Growth Marketer',
      description: `${CONTACT.headline}. Based in ${CONTACT.location}.`,
      url: SITE,
      image: `${SITE}/avatar/avatar_front_half.png`,
      email: `mailto:${CONTACT.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
      sameAs: [CONTACT.linkedin],
      // Only roles marked "Present", so assistants don't mistake a finished job for a current one.
      worksFor: CURRENT_ROLES.map((j) => ({ '@type': 'Organization', name: j.company })),
      hasOccupation: CURRENT_ROLES.map((j) => ({ '@type': 'Occupation', name: j.title })),
      knowsLanguage: LANGUAGES.map((l) => l.lang),
      knowsAbout: ['UX/UI design', 'Web design', 'Brand identity', 'Design systems', 'Growth marketing', 'Product marketing', 'SEO', 'AI search visibility', 'AI automation', 'LinkedIn outreach'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: CONTACT.name,
      author: { '@id': PERSON_ID },
    },
  ],
}

type CaseItem = { title: string; category: string; year: string; description: string; href?: string; site?: string; thumb?: string }

export function caseListJsonLd(name: string, path: string, items: CaseItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: abs(path),
    author: { '@id': PERSON_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: item.title,
          description: item.description,
          genre: item.category,
          dateCreated: item.year.slice(0, 4),
          creator: { '@id': PERSON_ID },
          ...(abs(item.href ?? item.site) ? { url: abs(item.href ?? item.site) } : {}),
          ...(item.thumb ? { image: `${SITE}${item.thumb}` } : {}),
        },
      })),
    },
  }
}
