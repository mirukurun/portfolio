'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TextureOverlay } from '@/components/TextureOverlay'

// w/h are the real pixel dimensions — used for correct aspect ratios
const IMAGES = [
  {
    src: '/projects/spacecorps/colors.jpg',
    w: 782, h: 956,
    label: 'Brand System',
    description: 'Colour palette and token system — accent, secondary, neutral and semantic tones built for a dark sci-fi interface.',
  },
  {
    src: '/projects/spacecorps/landing.png',
    w: 1920, h: 2910,
    label: 'Landing & Auth',
    description: 'Full-page screenshot: registration/login screen with a full-bleed space background. Click to scroll through the entire page.',
  },
  {
    src: '/projects/spacecorps/dashboard.png',
    w: 1920, h: 1080,
    label: 'Pilot Dashboard',
    description: 'Main game hub: pilot profile, worldwide leaderboard, clan stats, latest activity feed. Data-dense but readable.',
  },
  {
    src: '/projects/spacecorps/lore.png',
    w: 1920, h: 1080,
    label: 'Lore / Wiki',
    description: 'In-game story reader with reading progress, chapter navigation and a lore score system to reward engagement.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function SpaceCorpsPage() {
  const [lightbox, setLightbox] = useState<typeof IMAGES[number] | null>(null)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <TextureOverlay />

      {/* Lightbox — scrollable for tall images */}
      {lightbox && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/92 overflow-y-auto cursor-zoom-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setLightbox(null)}
        >
          {/* Close hint */}
          <div className="sticky top-4 z-10 flex justify-end pr-6 pointer-events-none">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/40 bg-black/40 px-3 py-1.5">
              ESC / click to close
            </span>
          </div>

          <div
            className="min-h-full flex flex-col items-center justify-start py-8 px-4"
          >
            <motion.div
              className="w-full max-w-5xl"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              onClick={() => setLightbox(null)}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.label}
                width={lightbox.w}
                height={lightbox.h}
                className="w-full h-auto"
                quality={90}
              />
            </motion.div>
            <p className="mt-4 mb-8 font-sans text-sm text-white/50">{lightbox.label}</p>
          </div>
        </motion.div>
      )}

      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/design" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Design
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://spacecorpstechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[9px] tracking-[0.4em] uppercase text-accent hover:text-dark-accent transition-colors flex items-center gap-1.5"
            >
              Live Site ↗
            </a>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">SpaceCorps — 2025</p>
          </div>
        </nav>

        <div className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

          {/* Header */}
          <motion.div
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-4">
              UX/UI Design · Brand Identity · Game Interface
            </p>
            <h1
              className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 11rem)' }}
            >
              SpaceCorps
            </h1>
            <div className="mt-5 w-12 h-px bg-accent" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Role</p>
                <p className="font-sans text-base text-ink/80">UX/UI & Product Designer</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Period</p>
                <p className="font-sans text-base text-ink/80">Jun – Dec 2025</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Context</p>
                <p className="font-sans text-base text-ink/80">Early-stage browser game startup · Remote</p>
              </div>
            </div>

            <p className="mt-8 font-sans text-base text-ink/70 max-w-2xl leading-loose">
              Joined as the sole designer at MVP stage. Built the visual identity, design system,
              and full UI from scratch — from brand colour tokens to complex game screens like
              the pilot dashboard, lore reader, and leaderboards.
            </p>
          </motion.div>

          {/* Screenshots gallery */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {IMAGES.map((item, i) => {
              const isTall = item.h / item.w > 1.2   // portrait / full-page screenshot
              const isWide = item.w / item.h > 1.5    // standard widescreen

              return (
                <motion.div key={item.src} variants={itemVariants} className="group">

                  {/* ── Wide image (16:9) — full width, fixed ratio ── */}
                  {isWide && (
                    <div
                      className="relative overflow-hidden bg-ink/5 cursor-zoom-in border border-ink/8"
                      style={{ aspectRatio: `${item.w}/${item.h}` }}
                      onClick={() => setLightbox(item)}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300 flex items-center justify-center">
                        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/60 px-4 py-2">
                          View full
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ── Tall / full-page screenshot ── */}
                  {isTall && (
                    <div
                      className="cursor-zoom-in border border-ink/8 bg-ink/5 overflow-hidden relative"
                      onClick={() => setLightbox(item)}
                    >
                      {/* Preview: top 560px with bottom fade-out */}
                      <div className="relative overflow-hidden" style={{ height: '560px' }}>
                        <Image
                          src={item.src}
                          alt={item.label}
                          width={item.w}
                          height={item.h}
                          className="w-full h-auto object-top group-hover:scale-[1.01] transition-transform duration-500"
                          style={{ objectFit: 'cover', objectPosition: 'top' }}
                          sizes="(max-width: 768px) 100vw, 1200px"
                        />
                        {/* Fade-out at bottom */}
                        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg/80 to-transparent pointer-events-none" />
                      </div>
                      {/* "See full page" strip */}
                      <div className="flex items-center justify-center gap-3 py-3 border-t border-ink/8 bg-bg/50 group-hover:bg-ink/5 transition-colors duration-300">
                        <div className="w-4 h-px bg-accent" />
                        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent">
                          Click to view full page
                        </span>
                        <div className="w-4 h-px bg-accent" />
                      </div>
                    </div>
                  )}

                  {/* ── Portrait image (colors palette etc.) ── */}
                  {!isWide && !isTall && (
                    <div
                      className="cursor-zoom-in border border-ink/8 bg-ink/5 overflow-hidden flex justify-center"
                      onClick={() => setLightbox(item)}
                    >
                      <div className="relative w-full max-w-lg">
                        <Image
                          src={item.src}
                          alt={item.label}
                          width={item.w}
                          height={item.h}
                          className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 512px"
                        />
                        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
                          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/60 px-4 py-2">
                            View full
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Caption */}
                  <div className="mt-3 flex items-baseline gap-6">
                    <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="font-display text-2xl font-medium text-ink">{item.label}</span>
                      <span className="font-sans text-base text-ink/80 ml-4">{item.description}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Key contributions */}
          <motion.div
            className="mt-24 border-t border-ink/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div>
              <h3 className="font-display text-3xl font-medium text-ink mb-6">What I built</h3>
              <ul className="space-y-3">
                {[
                  'Full brand visual identity — colours, typography, component system',
                  'Live company website — spacecorpstechnology.com',
                  'UX/UI concepts and interactive prototypes for the game MVP',
                  'Pilot dashboard with leaderboards, clan stats, activity feed',
                  'Lore reader with reading progress and gamification',
                  'Dark sci-fi design system adaptable to complex data layouts',
                ].map((point) => (
                  <li key={point} className="flex gap-3 font-sans text-base text-ink/70 leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    {point.includes('spacecorpstechnology') ? (
                      <span>
                        Live company website —{' '}
                        <a
                          href="https://spacecorpstechnology.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent underline underline-offset-2 hover:text-dark-accent transition-colors"
                        >
                          spacecorpstechnology.com ↗
                        </a>
                      </span>
                    ) : point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-3xl font-medium text-ink mb-6">Tools used</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Design Systems', 'UX Prototyping', 'Brand Identity', 'Dark UI', 'Component Library', 'Game UI/UX', 'Visual Design'].map((t) => (
                  <span key={t} className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/80 border border-ink/25 px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>

              {/* Back nav */}
              <div className="mt-12">
                <Link
                  href="/design"
                  className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors"
                >
                  <div className="w-6 h-px bg-current" />
                  Back to Design
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
