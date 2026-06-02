'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Avatar, type Zone } from '@/components/Avatar'
import { CVModal } from '@/components/CVModal'
import { TextureOverlay } from '@/components/TextureOverlay'

export default function Home() {
  const [hoveredZone, setHoveredZone] = useState<Zone>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    // Avatar head zone: center third of screen, upper ~50% of height.
    // Cursor here shows avatar-front (natural/default gaze).
    const overHead = x > 0.33 && x < 0.67 && y > 0.14 && y < 0.52

    if (y > 0.86) {
      setHoveredZone('blog')
    } else if (overHead) {
      setHoveredZone(null)
    } else if (x < 0.5) {
      setHoveredZone('design')
    } else {
      setHoveredZone('marketing')
    }
  }, [])

  const handleMouseLeave = useCallback(() => setHoveredZone(null), [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  const isDesignFaded = hoveredZone === 'marketing' || hoveredZone === 'blog'
  const isMarketingFaded = hoveredZone === 'design' || hoveredZone === 'blog'
  const isBlogFaded = hoveredZone === 'design' || hoveredZone === 'marketing'
  const isDesignActive = hoveredZone === 'design'
  const isMarketingActive = hoveredZone === 'marketing'
  const isBlogActive = hoveredZone === 'blog'

  return (
    <>
      <TextureOverlay />
      <CVModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-bg select-none"
      >
        {/* ── Top metadata strip ── */}
        <div className="absolute top-0 inset-x-0 flex justify-between items-start px-7 pt-6 z-10 pointer-events-none">
          <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-ink/35">
            Portfolio&nbsp;·&nbsp;2026
          </p>
          <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-ink/35">
            Stockholm
          </p>
        </div>

        {/* ── DIANA — large name text behind avatar ── */}
        <div className="absolute top-0 inset-x-0 flex justify-center items-end pointer-events-none z-[5]"
          style={{ height: '51%' }}
        >
          <motion.h1
            className="font-display font-semibold text-accent leading-none text-center"
            style={{ fontSize: 'clamp(4.8rem, 15vw, 19rem)', letterSpacing: '0.05em', filter: 'blur(5px)' }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          >
            DIANA
          </motion.h1>
        </div>

        {/* ── HORBYK — below avatar ── */}
        <div className="absolute bottom-0 inset-x-0 flex justify-center items-start pointer-events-none z-[5]"
          style={{ height: '44%' }}
        >
          <motion.span
            className="font-display font-semibold text-accent leading-none text-center"
            style={{ fontSize: 'clamp(4.8rem, 15vw, 19rem)', letterSpacing: '0.05em', filter: 'blur(5px)' }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          >
            HORBYK
          </motion.span>
        </div>

        {/* ── Navigation zones (left / right halves) ── */}
        <div className="absolute inset-0 flex z-10" style={{ paddingBottom: '13%' }}>

          {/* DESIGN zone — left half */}
          <motion.div
            className="flex-1 flex items-center cursor-pointer"
            onClick={() => router.push('/design')}
            animate={{ opacity: isDesignFaded ? 0.28 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="pl-7 md:pl-10 lg:pl-16">
              <motion.p
                className="font-display font-medium text-ink leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 7rem)' }}
                animate={{ scale: isDesignActive ? 1.04 : 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                DESIGN
              </motion.p>
              <motion.div
                className="mt-2 space-y-0.5"
                animate={{ opacity: isDesignActive ? 1 : 0.55 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-sans text-xs tracking-widest uppercase text-ink/60">UX/UI Design</p>
                <p className="font-sans text-xs tracking-widest uppercase text-ink/60">Web Design</p>
              </motion.div>
              <motion.div
                className="mt-4 w-8 h-px bg-accent"
                animate={{ width: isDesignActive ? '3rem' : '2rem', opacity: isDesignActive ? 1 : 0 }}
                transition={{ duration: 0.35 }}
              />
            </div>
          </motion.div>

          {/* MARKETING zone — right half */}
          <motion.div
            className="flex-1 flex items-center justify-end cursor-pointer"
            onClick={() => router.push('/marketing')}
            animate={{ opacity: isMarketingFaded ? 0.28 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="pr-7 md:pr-10 lg:pr-16 text-right">
              <motion.p
                className="font-display font-medium text-ink leading-none tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 4.4vw, 5.8rem)' }}
                animate={{ scale: isMarketingActive ? 1.04 : 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                MARKETING
              </motion.p>
              <motion.div
                className="mt-2 space-y-0.5"
                animate={{ opacity: isMarketingActive ? 1 : 0.55 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-sans text-xs tracking-widest uppercase text-ink/60">Marketing</p>
                <p className="font-sans text-xs tracking-widest uppercase text-ink/60">AI Automation</p>
              </motion.div>
              <motion.div
                className="mt-4 ml-auto h-px bg-accent"
                animate={{ width: isMarketingActive ? '3rem' : '2rem', opacity: isMarketingActive ? 1 : 0 }}
                transition={{ duration: 0.35 }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── BLOG zone — bottom strip ── */}
        <motion.div
          className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-end pb-6 cursor-pointer z-10"
          style={{ height: '14%' }}
          onClick={() => router.push('/blog')}
          animate={{ opacity: isBlogFaded ? 0.28 : 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <motion.div
            className="flex items-center gap-3"
            animate={{ scale: isBlogActive ? 1.07 : 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30">—</span>
            <span
              className="font-display font-light text-ink tracking-[0.2em]"
              style={{ fontSize: 'clamp(1.1rem, 2.8vw, 3.2rem)' }}
            >
              BLOG
            </span>
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30">—</span>
          </motion.div>
          <motion.p
            className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/30 mt-1"
            animate={{ opacity: isBlogActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Writing & Thoughts
          </motion.p>
        </motion.div>

        {/* ── Avatar — centered, above name text ── */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          {/* Thin rule lines flanking avatar - decorative */}
          <motion.div
            className="absolute left-[22%] top-1/2 -translate-y-1/2 h-px bg-ink/10 hidden lg:block"
            style={{ width: 'calc(28% - 280px)' }}
            animate={{ opacity: hoveredZone === 'design' ? 0.4 : 0.15 }}
          />
          <motion.div
            className="absolute right-[22%] top-1/2 -translate-y-1/2 h-px bg-ink/10 hidden lg:block"
            style={{ width: 'calc(28% - 280px)' }}
            animate={{ opacity: hoveredZone === 'marketing' ? 0.4 : 0.15 }}
          />

          <div className="pointer-events-auto flex flex-col items-center gap-3 group/avatar">
            <motion.p
              className="font-sans text-[9px] tracking-[0.35em] uppercase text-ink/35 group-hover/avatar:text-ink/70 transition-colors duration-300 cursor-pointer"
              onClick={() => setModalOpen(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              — CV —
            </motion.p>
            <Avatar
              hoveredZone={hoveredZone}
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>

        {/* ── Mobile layout: vertical stack ── */}
        {/* Handled via responsive hiding of absolute layout */}
      </main>

      {/* Mobile layout */}
      <style jsx global>{`
        @media (max-width: 640px) {
          /* On mobile, make the page scrollable and stack content */
        }
      `}</style>
    </>
  )
}
