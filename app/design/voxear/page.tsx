'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TextureOverlay } from '@/components/TextureOverlay'

type Img = { src: string; w: number; h: number; label: string; description: string }

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const SECTIONS: {
  id: string
  eyebrow: string
  title: string
  intro: string
  grid?: 1 | 2
  images: Img[]
  points: string[]
}[] = [
  {
    id: 'brand-system',
    eyebrow: 'Brand Identity · Design System · Figma',
    title: 'Brand System from Zero',
    intro:
      'A hardware company with close to a hundred marketing files had no written brand rules: no colour codes, no type choices, no tone guidance, just a few logo files and habits. I audited the whole library, reverse-engineered the identity already in circulation, and turned it into a Figma-based system the whole company can reuse, exported as design tokens.',
    images: [
      {
        src: '/projects/voxear/brand-colour.jpg', w: 1584, h: 1113,
        label: 'Colour',
        description: 'Accent orange and secondary blue with tints, taken from colours already appearing across collateral and specified with HEX and RGB.',
      },
      {
        src: '/projects/voxear/brand-type.jpg', w: 1584, h: 2227,
        label: 'Typography',
        description: 'Display, heading, body and label styles with size, line height and token names. The logo face follows the official wordmark construction.',
      },
      {
        src: '/projects/voxear/brand-spacing.jpg', w: 1584, h: 1470,
        label: 'Spacing & Grid',
        description: 'A 4px-based spacing scale, a 12-column web grid and an A4 print grid, so screen and print layouts share one rhythm.',
      },
      {
        src: '/projects/voxear/brand-logo.jpg', w: 1584, h: 1747,
        label: 'Logo usage',
        description: 'Clear space, minimum size, one-colour versions and misuse examples.',
      },
    ],
    points: [
      'Audit of ~95 files with no documented brand rules, turned into eight documented areas: foundations, colour, typography, logo, iconography, components, voice and tone, applied examples',
      'Reusable design tokens and a shared asset library, so colleagues and vendors could start using the identity before the guidelines were signed off',
      'Voice and tone principles expanded from a single line in the old handbook into a usable guide with words to use and avoid',
      'Evidence-based case for the two contested decisions (accent colour, body typeface), citing published branding research and real identity reversals. Leadership approved both',
    ],
  },
  {
    id: 'icon-set',
    eyebrow: 'Iconography · Visual Design',
    title: 'Custom Icon Set',
    intro:
      'The system had no icons, and the products are sold on specs: battery life, connectivity, water resistance, attenuation. I drew a set matched to the logo geometry and the technical type, then put it to work on real materials.',
    grid: 1,
    images: [
      {
        src: '/projects/voxear/icons-in-use.jpg', w: 1200, h: 1138,
        label: 'Icons in use',
        description: 'Icon set applied to spec callouts on a display graphic: two-device connectivity, 40 h battery, 35 dB attenuation.',
      },
    ],
    points: [
      'Seven icons drawn on a 24px grid (16px and 32px variants) with a proportional 1.5px stroke',
      'Geometric outline style: sharp corners where the shape allows it, curves only where the subject needs them (ear, umbrella)',
      'Orange reserved for a single accent per icon, never a fully orange-filled icon',
      'Certification stays a text badge by decision: certification marks read as verifiable fact better as text than as an invented pictogram',
    ],
  },
  {
    id: 'display',
    eyebrow: 'Physical Design · Print Production',
    title: 'Retail Display Redesign',
    intro:
      'The in-store product display had known problems, but nobody had written down what was wrong and sign-off had stalled for months. I documented the current state with specific, dated defects, worked with the external production vendor on a print specification, and brought the new brand accent colour from guideline pages onto a physical fixture for the first time.',
    images: [
      {
        src: '/projects/voxear/before-front.jpg', w: 1000, h: 1124,
        label: 'Before — front graphic',
        description: 'An earlier version of the front graphic, before the brand system: a text list over a photo, without brand colour or a clear hierarchy.',
      },
      {
        src: '/projects/voxear/display-front.jpg', w: 1600, h: 1462,
        label: 'After — front graphic',
        description: 'Two-line headline in the brand accent, three spec callouts with the new icons, and the award mark. Photography does the rest.',
      },
      {
        src: '/projects/voxear/before-back.jpg', w: 1200, h: 1108,
        label: 'Before — product panel',
        description: 'An earlier product panel: a labelled diagram on a dark background, before the new type and colour.',
      },
      {
        src: '/projects/voxear/display-back.jpg', w: 1600, h: 1483,
        label: 'After — product panel',
        description: 'An annotated product diagram with orange leader lines, a fit chart for every eartip size and rating, and a QR code to the product page.',
      },
      {
        src: '/projects/voxear/display-explorations.jpg', w: 1400, h: 928,
        label: 'Concept explorations',
        description: 'Layout and colour variants compared side by side on one Figma board, from light to dark backgrounds.',
      },
    ],
    points: [
      'Replaced a vague "it doesn\'t feel right" with a written, checkable list of dated defects',
      'Translated feedback into a print specification: colour profile, bleed, dimensions and colour-build guidance for the new accent colour',
      'Ran a structural design review with the product owner and sales lead, agreeing an itemised revision list on the spot',
      'The vendor proposed a second comparison prototype the same day',
    ],
  },
  {
    id: 'templates',
    eyebrow: 'Layout · Templates · Documentation',
    title: 'Document Template & Style Guide',
    intro:
      'Every document in the company was built from scratch, so none looked alike. I built a branded Word template and a style guide that is itself written in the template: every heading, table and callout on the page is the real thing, with steps next to each so anyone can rebuild it without asking a designer.',
    grid: 2,
    images: [
      {
        src: '/projects/voxear/doc-template-1.jpg', w: 935, h: 1210,
        label: 'Style guide, page 1',
        description: 'How to use the template, plus the colour table with HEX codes that Word asks for.',
      },
      {
        src: '/projects/voxear/doc-template-2.jpg', w: 935, h: 1210,
        label: 'Style guide, page 2',
        description: 'Heading levels shown as working examples, each with the exact steps to make it.',
      },
    ],
    points: [
      'Self-demonstrating: the guide uses every style it teaches',
      'Fonts, colours and table styles specified so they carry over from any existing document',
      'Product sheets rebuilt as editable documents with exact lab-tested attenuation tables and an Italian translation alongside',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export default function VoxearPage() {
  const [lightbox, setLightbox] = useState<Img | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <TextureOverlay />

      {lightbox && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/92 overflow-y-auto cursor-zoom-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          onClick={() => setLightbox(null)}
        >
          <div className="sticky top-4 z-10 flex justify-end pr-6 pointer-events-none">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/40 bg-black/40 px-3 py-1.5">
              ESC / click to close
            </span>
          </div>
          <div className="min-h-full flex flex-col items-center justify-start py-8 px-4">
            <div className="w-full max-w-5xl">
              <Image
                src={lightbox.src}
                alt={lightbox.label}
                width={lightbox.w}
                height={lightbox.h}
                className="w-full h-auto"
                quality={90}
              />
            </div>
            <p className="mt-4 mb-8 font-sans text-sm text-white/50">{lightbox.label}</p>
          </div>
        </motion.div>
      )}

      <div className="min-h-screen bg-bg text-ink">
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/design" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Design
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Voxear — 2026</p>
        </nav>

        <div className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-4">
              Brand · Design System · Print · Templates
            </p>
            <h1
              className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 10rem)' }}
            >
              Voxear
            </h1>
            <div className="mt-5 w-12 h-px bg-accent" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Role</p>
                <p className="font-sans text-base text-ink/80">Marketing Coordinator</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Period</p>
                <p className="font-sans text-base text-ink/80">Aug – Sep 2026</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Context</p>
                <p className="font-sans text-base text-ink/80">B2B hardware company, professional hearing protection</p>
              </div>
            </div>

            <p className="mt-8 font-sans text-base text-ink/90 max-w-2xl leading-loose">
              As the company&apos;s first dedicated marketing hire I did the design work too, since nobody else
              was. Four connected projects: a brand system, the icon set that grew out of it, a retail display
              that put the new identity on a physical object, and templates that let the team keep it consistent.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60 hover:text-accent transition-colors"
                >
                  {String(i + 1).padStart(2, '0')} {s.title}
                </a>
              ))}
            </div>
          </motion.div>

          {SECTIONS.map((section, si) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 mb-24 md:mb-32 border-t border-ink/10 pt-12"
            >
              <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-3">
                {String(si + 1).padStart(2, '0')} · {section.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-ink mb-6">{section.title}</h2>
              <p className="font-sans text-base text-ink/90 max-w-2xl leading-loose mb-10">{section.intro}</p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={
                  section.grid === 2
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
                    : section.grid === 1
                      ? 'max-w-2xl space-y-6 mb-12'
                      : 'space-y-6 mb-12'
                }
              >
                {section.images.map((item, i) => (
                  <motion.div key={item.src} variants={itemVariants} className="group">
                    <div
                      className="relative overflow-hidden bg-ink/5 cursor-zoom-in border border-ink/8"
                      style={{ aspectRatio: `${item.w}/${item.h}` }}
                      onClick={() => setLightbox(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300 flex items-center justify-center">
                        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/60 px-4 py-2">
                          View full
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-baseline gap-6">
                      <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="font-display text-2xl font-medium text-ink">{item.label}</span>
                        <span className="block md:inline font-sans text-base text-ink/80 md:ml-4">{item.description}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <ul className="space-y-3 max-w-2xl">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 font-sans text-base text-ink/90 leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="border-t border-ink/10 pt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <div className="flex flex-wrap gap-2">
              {['Figma', 'Figma Make', 'Design Tokens', 'Iconography', 'Print Specification', 'Word Templates'].map((t) => (
                <span key={t} className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/80 border border-ink/25 px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
            <Link
              href="/design"
              className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors"
            >
              <div className="w-6 h-px bg-current" />
              Back to Design
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
