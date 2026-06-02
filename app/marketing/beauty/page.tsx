'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'

export default function BeautyPage() {
  return (
    <>
      <TextureOverlay />

      <div className="h-screen overflow-hidden bg-bg text-ink flex flex-col">
        <nav className="shrink-0 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm border-b border-ink/6">
          <Link href="/marketing" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Marketing
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Beauty by Luidmila — 2023</p>
        </nav>

        <motion.div
          className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {/* Left — info */}
          <div className="no-scrollbar flex flex-col justify-center px-7 md:px-12 lg:px-16 pt-10 pb-16 border-r border-ink/8 overflow-y-auto" style={{ scrollbarWidth: 'none' } as React.CSSProperties}>
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-4">
              Targeted Ads · Content Creation · Social Media
            </p>
            <h1
              className="font-display font-light text-ink leading-none tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 10rem)' }}
            >
              Beauty by Luidmila
            </h1>
            <div className="w-10 h-px bg-accent mb-5" />

            <div className="grid grid-cols-3 gap-8 mb-6 max-w-3xl">
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Role</p>
                <p className="font-sans text-base text-ink/80">Content Creator · Ads Manager</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Type</p>
                <p className="font-sans text-base text-ink/80">Targeted Advertising</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Year</p>
                <p className="font-sans text-base text-ink/80">2023</p>
              </div>
            </div>

            <p className="font-sans text-base text-ink/90 leading-loose mb-4 max-w-md">
              Created and designed targeted advertising content for a beauty salon — posts, images, and videos for Meta campaigns.
              Built a warm, consistent visual identity that converts local audiences into bookings.
            </p>
            <p className="font-sans text-base text-ink/90 leading-loose mb-8 max-w-md">
              Produced ad creatives for Facebook and Instagram, short-form video content for social feeds,
              post design and image editing for service promotion, and content strategy aligned with local audience targeting.
            </p>

            <h3 className="font-display text-3xl font-medium text-ink mb-4">Tools used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Meta Ads', 'Video Editing', 'Content Design', 'Canva', 'Social Media'].map((t) => (
                <span key={t} className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/80 border border-ink/25 px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            <Link
              href="/marketing"
              className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors"
            >
              <div className="w-6 h-px bg-current" />
              Back to Marketing
            </Link>
          </div>

          {/* Right — video */}
          <div className="relative overflow-hidden bg-ink/[0.02] p-6 min-h-0 flex items-center justify-center">
            <video
              src="/projects/Beautybyluidmila/Content%20Creation%20Create%20and%20design%20posts%2C%20images%20and%20videos.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
            />
          </div>
        </motion.div>
      </div>
    </>
  )
}
