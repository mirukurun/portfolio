'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState, useEffect, Fragment } from 'react'
import { TextureOverlay } from '@/components/TextureOverlay'
import { DESIGN_PROJECTS } from '@/lib/designProjects'
import { MARKETING_WORK } from '@/lib/marketingWork'
import type { CaseImg, CaseSection, CaseStudy } from '@/lib/caseStudies'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease },
}

const layoutClass: Record<string, string> = {
  phones: 'grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 md:gap-6',
  grid2: 'grid grid-cols-1 md:grid-cols-2 gap-6',
  grid3: 'grid grid-cols-3 gap-2 md:gap-5',
  wide: 'space-y-8',
  single: 'max-w-3xl',
}

const kicker = 'font-sans text-[10px] tracking-[0.3em] uppercase'

function Figure({ img, onOpen, bleed }: { img: CaseImg; onOpen: (i: CaseImg) => void; bleed?: boolean }) {
  // Tall screenshots are shown as a cropped preview; the lightbox has the full image.
  const ratio = img.crop ? `${img.w}/${Math.min(img.h, img.w * img.crop)}` : `${img.w}/${img.h}`
  return (
    <figure className={`group ${bleed ? '-mx-7 md:mx-0' : ''}`}>
      <div
        className={`relative overflow-hidden bg-ink/5 cursor-zoom-in ${bleed ? 'md:border' : 'border'} border-ink/8`}
        style={{ aspectRatio: ratio }}
        onClick={() => onOpen(img)}
      >
        <Image
          src={img.src}
          alt={img.label}
          fill
          className={`${img.contain ? 'object-contain p-6 md:p-10' : 'object-cover object-top'} group-hover:scale-[1.01] transition-transform duration-500`}
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        {img.crop && (
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg via-bg/70 to-transparent flex items-end justify-center pb-4">
            <span className={`${kicker} text-ink/70`}>Tap to see the full page ↗</span>
          </div>
        )}
      </div>
      <figcaption className={`mt-2.5 ${bleed ? 'px-7 md:px-0' : ''}`}>
        <span className={`${kicker} text-ink/55`}>{img.label}</span>
        {img.description && (
          <span className="block mt-1 font-sans text-sm leading-relaxed text-ink/70">{img.description}</span>
        )}
      </figcaption>
    </figure>
  )
}

function Section({ s, index, onOpen }: { s: CaseSection; index: number; onOpen: (i: CaseImg) => void }) {
  const singleWide = s.images?.length === 1 && (s.layout === 'wide' || !s.layout)
  return (
    <motion.section className="mb-20 md:mb-28" {...reveal}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 border-t border-ink/15 pt-6 md:pt-8">
        <div className="md:col-span-5 flex items-baseline gap-4 md:gap-6">
          <span className="font-display font-light lining-nums text-accent text-5xl md:text-7xl leading-none shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="font-display font-light text-ink text-[1.9rem] md:text-[2.6rem] leading-[1.05] tracking-tight">
            {s.title}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-2">
          <p
            className={`font-sans text-[17px] md:text-lg text-ink/85 leading-relaxed max-w-xl ${
              index === 0
                ? 'first-letter:float-left first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.85] first-letter:mr-2 first-letter:mt-1 first-letter:text-accent'
                : ''
            }`}
          >
            {s.lede}
          </p>
          {s.more && (
            <details className="group/more mt-4 max-w-xl">
              <summary className={`${kicker} text-accent cursor-pointer list-none inline-flex items-center gap-3 select-none [&::-webkit-details-marker]:hidden`}>
                <span className="w-6 h-px bg-current" />
                <span className="group-open/more:hidden">Read more</span>
                <span className="hidden group-open/more:inline">Show less</span>
              </summary>
              <ul className="mt-4 space-y-2.5">
                {s.more.map((m) => (
                  <li key={m} className="flex gap-3 font-sans text-[15px] text-ink/80 leading-relaxed">
                    <span className="text-accent shrink-0">—</span>
                    {m}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>

      {s.pair && (
        <div className="mt-8 grid grid-cols-2 items-start gap-3 md:gap-6">
          {[s.pair.before, s.pair.after].map((img, k) => (
            <div key={img.src}>
              <p className={`${kicker} mb-2 ${k === 1 ? 'text-accent' : 'text-ink/45'}`}>{k === 0 ? 'Before' : 'After'}</p>
              <Figure img={img} onOpen={onOpen} />
            </div>
          ))}
        </div>
      )}

      {s.images && (
        <div className={`mt-8 md:mt-10 ${layoutClass[s.layout ?? 'wide']}`}>
          {s.images.map((img) => (
            <Figure key={img.src} img={img} onOpen={onOpen} bleed={singleWide} />
          ))}
        </div>
      )}

      {s.videos && (
        <div
          className={`mt-8 md:mt-10 ${
            s.videos.length === 1 ? 'max-w-sm' : 'grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 md:gap-6'
          }`}
        >
          {s.videos.map((v) => (
            <figure key={v.src}>
              <video
                src={v.src}
                poster={v.poster}
                controls
                playsInline
                muted={v.autoplay}
                autoPlay={v.autoplay}
                loop={v.autoplay}
                preload={v.autoplay ? 'auto' : 'none'}
                className="w-full h-auto bg-ink/5 border border-ink/8"
                style={{ aspectRatio: '9/16' }}
              />
              <figcaption className="mt-2 font-sans text-sm leading-relaxed text-ink/70">{v.label}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </motion.section>
  )
}

function PullQuote({ text }: { text: string }) {
  return (
    <motion.blockquote className="mb-20 md:mb-28 md:pl-[calc(41.666%+1rem)]" {...reveal}>
      <span className="block font-display text-accent text-7xl md:text-8xl leading-[0.6] h-8 md:h-10">“</span>
      <p className="font-display font-light text-ink text-[1.9rem] md:text-5xl leading-[1.15]! tracking-tight max-w-2xl">
        {text}
      </p>
      <div className="mt-6 w-12 h-px bg-accent" />
    </motion.blockquote>
  )
}

function useNextCase(backHref: string) {
  const path = usePathname().replace(/\/$/, '')
  const list = (backHref === '/design' ? DESIGN_PROJECTS : MARKETING_WORK)
    .filter((p) => p.href?.startsWith('/'))
    .map((p) => ({ href: p.href as string, title: p.title }))
  const i = list.findIndex((p) => p.href === path)
  return i === -1 || list.length < 2 ? null : list[(i + 1) % list.length]
}

export function CaseStudyPage({ item }: { item: CaseStudy }) {
  const [lightbox, setLightbox] = useState<CaseImg | null>(null)
  const next = useNextCase(item.back.href)
  const quoteAfter = item.quoteAfter ?? 0

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
              ESC / tap to close
            </span>
          </div>
          <div className="min-h-full flex flex-col items-center justify-start py-8 px-4">
            <div className={lightbox.h > lightbox.w * 1.3 && !lightbox.crop ? 'w-full max-w-md' : 'w-full max-w-5xl'}>
              <Image src={lightbox.src} alt={lightbox.label} width={lightbox.w} height={lightbox.h} className="w-full h-auto" />
            </div>
            <p className="mt-4 mb-8 font-sans text-sm text-white/50">{lightbox.label}</p>
          </div>
        </motion.div>
      )}

      <div className="min-h-screen bg-bg text-ink">
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href={item.back.href} className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← {item.back.label}
          </Link>
          <p className="hidden sm:block font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">{item.navLabel}</p>
        </nav>

        <article className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          {/* Cover */}
          <motion.header
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex justify-between items-center gap-4 border-y border-ink/15 py-2.5 mb-8 md:mb-12">
              <p className={`${kicker} text-accent`}>{item.eyebrow}</p>
              <p className={`${kicker} text-ink/40 shrink-0 hidden sm:block`}>Case study</p>
            </div>

            <h1
              className="font-display font-light text-ink leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 8.5rem)' }}
            >
              {item.title}
            </h1>

            <p className="mt-6 md:mt-8 font-display font-light text-ink/80 text-[1.45rem] md:text-[2rem] leading-[1.3]! max-w-3xl">
              {item.deck}
            </p>

            <dl className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-ink/15 md:border-b">
              {item.meta.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex md:block gap-4 py-3 md:py-4 border-b md:border-b-0 border-ink/10 ${i > 0 ? 'md:border-l md:pl-6' : ''} md:pr-6`}
                >
                  <dt className={`${kicker} text-ink/40 w-20 md:w-auto shrink-0 pt-[3px] md:mb-1.5`}>{m.label}</dt>
                  <dd className="font-sans text-[15px] text-ink/85 leading-snug">{m.value}</dd>
                </div>
              ))}
            </dl>

            {item.live && (
              <a
                href={item.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-3 ${kicker} text-[11px] text-accent hover:text-ink transition-colors`}
              >
                <span className="w-6 h-px bg-current" />
                {item.live.label} ↗
              </a>
            )}

            {item.stats && (
              <div
                className="mt-10 md:mt-14 grid gap-x-4 gap-y-6"
                style={{ gridTemplateColumns: `repeat(${item.stats.length}, minmax(0, 1fr))` }}
              >
                {item.stats.map((st) => (
                  <div key={st.label} className="border-t-2 border-ink pt-3">
                    <p className="font-display font-light lining-nums text-ink text-[2.6rem] md:text-7xl leading-none tracking-tight">{st.value}</p>
                    <p className="mt-2 font-sans text-[11px] md:text-[13px] text-ink/60 leading-snug">{st.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.header>

          {item.sections.map((s, si) => (
            <Fragment key={s.title}>
              <Section s={s} index={si} onOpen={setLightbox} />
              {item.quote && si === quoteAfter && <PullQuote text={item.quote} />}
            </Fragment>
          ))}

          {/* Colophon */}
          <footer className="border-t-2 border-ink pt-8 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-10">
            <div className="md:col-span-7">
              <h3 className={`${kicker} text-ink/45 mb-5`}>What I did</h3>
              <ol className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={point} className="flex gap-4 font-sans text-[15px] md:text-base text-ink/85 leading-relaxed">
                    <span className="font-display text-accent text-lg leading-[1.4] w-5 shrink-0">{i + 1}</span>
                    {point}
                  </li>
                ))}
              </ol>
            </div>
            <div className="md:col-span-5">
              <h3 className={`${kicker} text-ink/45 mb-5`}>Tools</h3>
              <p className="font-display text-xl md:text-2xl text-ink/85 leading-snug">
                {item.tools.join(' · ')}
              </p>
            </div>
          </footer>

          <div className="mt-16 md:mt-24 border-t border-ink/15 pt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <Link href={item.back.href} className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors">
              <span className="w-6 h-px bg-current" />
              All {item.back.label.toLowerCase()} work
            </Link>
            {next && (
              <Link href={next.href} className="group md:text-right">
                <span className={`block ${kicker} text-accent mb-2`}>Next case →</span>
                <span className="font-display font-light text-ink text-3xl md:text-5xl leading-tight group-hover:text-accent transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </article>
      </div>
    </>
  )
}
