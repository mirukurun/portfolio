// /llms.txt — plain-text profile for AI assistants and recruiters' tools.
// Built at `next build` from the same data the pages render, so it never drifts.
// Holds the full project descriptions that the cards shorten to one line.

import { CONTACT, EXPERIENCE, SKILLS, EDUCATION, LANGUAGES } from '@/lib/cvData'
import { DESIGN_PROJECTS } from '@/lib/designProjects'
import { MARKETING_WORK } from '@/lib/marketingWork'
import { BLOG_POSTS } from '@/lib/blogPosts'
import { SERVICE_GROUPS } from '@/lib/services'

export const dynamic = 'force-static'

const SITE = CONTACT.website
const abs = (href?: string) => (href ? (href.startsWith('http') ? href : `${SITE}${href}/`) : undefined)

function caseBlock(item: { title: string; category: string; year: string; description: string; company?: string; href?: string; site?: string }) {
  const lines = [`### ${item.title}`, `${item.category} · ${item.company ? `${item.company} · ` : ''}${item.year}`, '', item.description]
  const external = item.href?.startsWith('http')
  if (item.href) lines.push('', external ? `Live: ${item.href}` : `Case study: ${abs(item.href)}`)
  if (item.site && item.site !== item.href) lines.push(`Live: ${item.site}`)
  return lines.join('\n')
}

export function GET() {
  const out: string[] = []

  out.push(
    `# ${CONTACT.name}`,
    '',
    `> ${CONTACT.headline}. Based in ${CONTACT.location}. Works across UX/UI and web design, growth marketing and AI automation; every project below is real work, with links to case studies.`,
    '',
    `- Website: ${SITE}`,
    `- LinkedIn: ${CONTACT.linkedin}`,
    `- Email: ${CONTACT.email}`,
    `- CV (PDF): ${SITE}/Diana-Horbyk-CV.pdf`,
    `- Languages: ${LANGUAGES.map((l) => `${l.lang} (${l.level})`).join(', ')}`,
    '',
  )

  out.push('## Experience', '')
  for (const job of EXPERIENCE) {
    out.push(`### ${job.title}, ${job.company} (${job.period})`, job.context, ...job.points.map((p) => `- ${p}`), '')
  }

  out.push('## Design projects', '')
  for (const p of DESIGN_PROJECTS) out.push(caseBlock(p), '')

  out.push('## Marketing projects', '')
  for (const w of MARKETING_WORK) out.push(caseBlock(w), '')

  out.push('## Services', '')
  for (const g of SERVICE_GROUPS) {
    out.push(`### ${g.area}: “${g.need}”`)
    for (const s of g.services) out.push(`- ${s.title}: ${s.description} (done for: ${s.proof.map((p) => p.label).join(', ')})`)
    out.push('')
  }
  out.push(`Services page: ${SITE}/services/`, '')

  out.push('## Skills', '')
  for (const [group, items] of Object.entries(SKILLS)) out.push(`- ${group}: ${items.join(', ')}`)
  out.push('')

  out.push('## Education', '')
  for (const e of EDUCATION) out.push(`- ${e.title} (${e.period}): ${e.detail}`)
  out.push('')

  const posts = BLOG_POSTS.filter((p) => !p.draft)
  if (posts.length) {
    out.push('## Writing', '')
    for (const p of posts) out.push(`- [${p.title}](${abs(p.href)}) (${p.date}): ${p.excerpt}`)
    out.push('')
  }

  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
