'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TextureOverlay } from '@/components/TextureOverlay'
import type { Img, VoxearCase } from '@/lib/voxearCases'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

export function VoxearCasePage({ item }: { item: VoxearCase }) {
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
            className="mb-10 md:mb-14"
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
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Role</p>
                <p className="font-sans text-base text-ink/80">Marketing Coordinator</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Period</p>
                <p className="font-sans text-base text-ink/80">2026</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Context</p>
                <p className="font-sans text-base text-ink/80">B2B hardware company, professional hearing protection</p>
              </div>
            </div>

            <p className="mt-8 font-sans text-base text-ink/90 max-w-2xl leading-loose">{item.intro}</p>
          </motion.div>

          {item.pairs?.map((pair, pi) => (
            <motion.section
              key={pair.title}
              className="mb-16"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-light text-ink mb-6">
                <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30 mr-4 align-middle">
                  {String(pi + 1).padStart(2, '0')}
                </span>
                {pair.title}
              </h2>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {[pair.before, pair.after].map((img, k) => (
                  <div key={img.src}>
                    <p className={`font-sans text-[10px] tracking-[0.3em] uppercase mb-2 ${k === 1 ? 'text-accent' : 'text-ink/50'}`}>
                      {img.label}
                    </p>
                    <div
                      className="relative overflow-hidden bg-ink/5 cursor-zoom-in border border-ink/8"
                      style={{ aspectRatio: '1 / 1' }}
                      onClick={() => setLightbox(img)}
                    >
                      <Image
                        src={img.src}
                        alt={`${pair.title} — ${img.label}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 600px"
                      />
                    </div>
                    <p className="mt-2 font-sans text-sm text-ink/70 leading-relaxed">{img.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 max-w-2xl">
                <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Why the second one works better</h3>
                <ul className="space-y-3">
                  {pair.why.map((w) => (
                    <li key={w} className="flex gap-3 font-sans text-base text-ink/90 leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0">—</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={
              item.grid === 2
                ? 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'
                : item.grid === 1
                  ? 'max-w-2xl space-y-6 mb-16'
                  : 'space-y-6 mb-16'
            }
          >
            {item.images.map((img, i) => (
              <motion.div key={img.src} variants={itemVariants} className="group">
                <div
                  className="relative overflow-hidden bg-ink/5 cursor-zoom-in border border-ink/8"
                  style={{ aspectRatio: `${img.w}/${img.h}` }}
                  onClick={() => setLightbox(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
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
                    <span className="font-display text-2xl font-medium text-ink">{img.label}</span>
                    <span className="block md:inline font-sans text-base text-ink/80 md:ml-4">{img.description}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
              <Link href="/design" className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors">
                <div className="w-6 h-px bg-current" />
                Back to Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
