'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TextureOverlay } from '@/components/TextureOverlay'

const IMAGE = {
  src: '/projects/ivy/firstivystudioprototype.jpg',
  w: 1280,
  h: 879,
}

export default function IvyStudioPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <TextureOverlay />

      {lightboxOpen && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/92 overflow-y-auto cursor-zoom-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="sticky top-4 z-10 flex justify-end pr-6 pointer-events-none">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/40 bg-black/40 px-3 py-1.5">
              ESC / click to close
            </span>
          </div>
          <div className="min-h-full flex flex-col items-center justify-start py-8 px-4">
            <motion.div
              className="w-full max-w-5xl"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              onClick={() => setLightboxOpen(false)}
            >
              <Image
                src={IMAGE.src}
                alt="Ivy Studio Prototype"
                width={IMAGE.w}
                height={IMAGE.h}
                className="w-full h-auto"
                quality={90}
              />
            </motion.div>
            <p className="mt-4 mb-8 font-sans text-sm text-white/50">Ivy Studio — First Prototype</p>
          </div>
        </motion.div>
      )}

      <div className="min-h-screen bg-bg text-ink">
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/design" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Design
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Ivy Interactive — 2025</p>
        </nav>

        <div className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">

          <motion.div
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-4">
              UX/UI Design · App Interface · Prototype
            </p>
            <h1
              className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 10rem)' }}
            >
              Ivy Studio
            </h1>
            <div className="mt-5 w-12 h-px bg-accent" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Role</p>
                <p className="font-sans text-base text-ink/80">UX/UI Designer</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Type</p>
                <p className="font-sans text-base text-ink/80">Product Interface Prototype</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Context</p>
                <p className="font-sans text-base text-ink/80">Ivy Interactive, 2025</p>
              </div>
            </div>

            <p className="mt-8 font-sans text-base text-ink/90 max-w-2xl leading-loose">
              First prototype iteration of the Ivy Studio product interface —
              exploring core workspace layout, navigation structure, and
              interaction patterns for a developer-focused design environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="group"
          >
            <div
              className="relative overflow-hidden bg-ink/5 cursor-zoom-in border border-ink/8"
              style={{ aspectRatio: `${IMAGE.w}/${IMAGE.h}` }}
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={IMAGE.src}
                alt="Ivy Studio Prototype"
                fill
                className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-300 flex items-center justify-center">
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/60 px-4 py-2">
                  View full
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-baseline gap-6">
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30 shrink-0">01</span>
              <div>
                <span className="font-display text-2xl font-medium text-ink">Studio Interface</span>
                <span className="font-sans text-base text-ink/80 ml-4">First prototype — workspace layout and core navigation.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-24 border-t border-ink/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <h3 className="font-display text-3xl font-medium text-ink mb-6">What I designed</h3>
              <ul className="space-y-3">
                {[
                  'Core workspace layout for a developer-facing studio tool',
                  'Navigation structure and information architecture',
                  'Early interaction patterns and UI component explorations',
                  'Visual language aligned with Ivy Interactive brand system',
                ].map((point) => (
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
                {['Figma', 'UX Prototyping', 'App Interface', 'Design Systems', 'Developer Tools UX'].map((t) => (
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
          </motion.div>
        </div>
      </div>
    </>
  )
}
