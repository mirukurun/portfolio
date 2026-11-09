'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TextureOverlay } from '@/components/TextureOverlay'
import type { CaseImg, CaseStudy } from '@/lib/caseStudies'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const layoutClass: Record<string, string> = {
  phones: 'grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5',
  grid2: 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6',
  grid3: 'grid grid-cols-3 gap-2 md:gap-5',
  wide: 'space-y-6',
}

export function CaseStudyPage({ item }: { item: CaseStudy }) {
  const [lightbox, setLightbox] = useState<CaseImg | null>(null)

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
            <div className={lightbox.h > lightbox.w ? 'w-full max-w-md' : 'w-full max-w-5xl'}>
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
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">{item.navLabel}</p>
        </nav>

        <div className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          <motion.div
            className="mb-14 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-4">{item.eyebrow}</p>
            <h1
              className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)' }}
            >
              {item.title}
            </h1>
            <div className="mt-5 w-12 h-px bg-accent" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
              {item.meta.map((m) => (
                <div key={m.label}>
                  <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">{m.label}</p>
                  <p className="font-sans text-base text-ink/80">{m.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-sans text-base text-ink/90 max-w-2xl leading-loose">{item.intro}</p>

            {item.live && (
              <a
                href={item.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase text-accent hover:text-ink transition-colors"
              >
                <span className="w-6 h-px bg-current" />
                {item.live.label} ↗
              </a>
            )}
          </motion.div>

          {item.sections.map((s, si) => (
            <motion.section
              key={s.title}
              className="mb-20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink mb-5">
                <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30 mr-4 align-middle">
                  {String(si + 1).padStart(2, '0')}
                </span>
                {s.title}
              </h2>

              {s.text?.map((p) => (
                <p key={p} className="font-sans text-base text-ink/90 max-w-2xl leading-loose mb-4">{p}</p>
              ))}

              {s.bullets && (
                <ul className="space-y-3 max-w-2xl mt-2 mb-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 font-sans text-base text-ink/90 leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {s.images && (
                <div className={`mt-8 ${layoutClass[s.layout ?? 'grid2']}`}>
                  {s.images.map((img) => (
                    <figure key={img.src} className="group">
                      <div
                        className="relative overflow-hidden bg-ink/5 cursor-zoom-in border border-ink/8"
                        style={{ aspectRatio: `${img.w}/${img.h}` }}
                        onClick={() => setLightbox(img)}
                      >
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          className={`${img.contain ? 'object-contain p-6 md:p-10' : 'object-cover object-top'} group-hover:scale-[1.01] transition-transform duration-500`}
                          sizes="(max-width: 768px) 50vw, 600px"
                        />
                      </div>
                      <figcaption className="mt-2">
                        <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-ink/60">{img.label}</span>
                        {img.description && (
                          <span className="block mt-1 font-sans text-sm text-ink/70 leading-relaxed">{img.description}</span>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {s.videos && (
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                  {s.videos.map((v) => (
                    <figure key={v.src}>
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        playsInline
                        preload="none"
                        className="w-full h-auto bg-ink/5 border border-ink/8"
                        style={{ aspectRatio: '9/16' }}
                      />
                      <figcaption className="mt-2 font-sans text-sm text-ink/70 leading-relaxed">{v.label}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </motion.section>
          ))}

          <div className="border-t border-ink/10 pt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-3xl font-medium text-ink mb-6">What I did</h3>
              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 font-sans text-base text-ink/90 leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-3xl font-medium text-ink mb-6">Tools used</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {item.tools.map((t) => (
                  <span key={t} className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/80 border border-ink/25 px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
              <Link href={item.back.href} className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors">
                <div className="w-6 h-px bg-current" />
                Back to {item.back.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
