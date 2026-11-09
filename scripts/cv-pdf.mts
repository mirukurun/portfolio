// Renders lib/cvData.ts to public/Diana-Horbyk-CV.pdf (A4).
// Run: npm run cv:pdf   (Node 24 strips the TypeScript types natively)
import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import { CONTACT, EXPERIENCE, SKILLS, EDUCATION, LANGUAGES, CV_PDF } from '../lib/cvData.ts'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const host = (u: string) => u.replace(/^https?:\/\//, '')

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&display=block" rel="stylesheet">
<style>
  @page { size: A4; margin: 16mm 16mm 14mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Space Grotesk', sans-serif; color: #2f2f2b; font-size: 9.2pt; line-height: 1.45; }
  .display { font-family: 'Cormorant Garamond', serif; }
  header { border-bottom: 1px solid #e3ddd5; padding-bottom: 10pt; margin-bottom: 12pt; }
  h1 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 30pt; line-height: 1; letter-spacing: -0.01em; }
  .headline { margin-top: 4pt; font-size: 10pt; }
  .contact { margin-top: 6pt; font-size: 8.4pt; color: #6b6862; display: flex; flex-wrap: wrap; gap: 0 14pt; }
  .contact a { color: inherit; text-decoration: none; }
  h2 { font-size: 7.5pt; letter-spacing: 0.35em; text-transform: uppercase; color: #D72638; font-weight: 500; margin: 14pt 0 7pt; }
  .job { margin-bottom: 9pt; break-inside: avoid; }
  .row { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }
  .title { font-family: 'Cormorant Garamond', serif; font-size: 13pt; font-weight: 600; line-height: 1.15; }
  .period { font-size: 8pt; color: #8a867f; white-space: nowrap; }
  .company { font-weight: 500; color: #4B1E28; font-size: 9pt; }
  .context { font-size: 8pt; color: #8a867f; margin-bottom: 3pt; }
  ul { list-style: none; }
  li { display: flex; gap: 6pt; margin-top: 1.5pt; }
  li::before { content: '—'; color: #D72638; flex-shrink: 0; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10pt; break-inside: avoid; }
  .grid h3 { font-size: 8.4pt; font-weight: 600; margin-bottom: 2pt; }
  .grid p { font-size: 8.2pt; color: #55524c; }
  .edu { break-inside: avoid; margin-bottom: 4pt; }
  .edu .title { font-size: 11.5pt; }
  .detail { font-size: 8.4pt; color: #55524c; }
  .langs { display: flex; gap: 22pt; }
  .langs .title { font-size: 11.5pt; }
</style></head><body>
<header>
  <h1>${esc(CONTACT.name)}</h1>
  <p class="headline">${esc(CONTACT.headline)}</p>
  <div class="contact">
    <a href="mailto:${CONTACT.email}">${esc(CONTACT.email)}</a>
    <span>${esc(CONTACT.phone)}</span>
    <span>${esc(CONTACT.location)}</span>
    <a href="${CONTACT.website}">${host(CONTACT.website)}</a>
    <a href="${CONTACT.linkedin}">${host(CONTACT.linkedin)}</a>
  </div>
</header>

<h2>Experience</h2>
${EXPERIENCE.map((j) => `
<div class="job">
  <div class="row"><span class="title">${esc(j.title)}</span><span class="period">${esc(j.period)}</span></div>
  <div class="company">${esc(j.company)}</div>
  <div class="context">${esc(j.context)}</div>
  <ul>${j.points.map((p) => `<li><span>${esc(p)}</span></li>`).join('')}</ul>
</div>`).join('')}

<h2>Skills</h2>
<div class="grid">
${Object.entries(SKILLS).map(([cat, items]) => `<div><h3>${esc(cat)}</h3>${items.map((i) => `<p>${esc(i)}</p>`).join('')}</div>`).join('')}
</div>

<h2>Education</h2>
${EDUCATION.map((e) => `
<div class="edu">
  <div class="row"><span class="title">${esc(e.title)}</span><span class="period">${esc(e.period)}</span></div>
  <div class="detail">${esc(e.detail)}</div>
</div>`).join('')}

<h2>Languages</h2>
<div class="langs">
${LANGUAGES.map((l) => `<div><div class="title">${esc(l.lang)}</div><div class="detail">${esc(l.level)}</div></div>`).join('')}
</div>
</body></html>`

const out = fileURLToPath(new URL(`../public${CV_PDF}`, import.meta.url))
const browser = await chromium.launch()
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true })
await browser.close()
console.log('Wrote', out)
