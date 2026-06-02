'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'

const CASE_STUDY = {
  src: '/projects/dashboards/Create Behance Case Study.png',
  w: 2618,
  h: 7523,
}

export default function KarolinskaPage() {

  return (
    <>
      <TextureOverlay />


      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/design" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Design
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Karolinska Institutet — 2025</p>
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
              UX/UI Design · Data Dashboard · HR Analytics
            </p>
            <h1
              className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 10rem)' }}
            >
              Karolinska<br />Institutet
            </h1>
            <div className="mt-5 w-12 h-px bg-accent" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Role</p>
                <p className="font-sans text-base text-ink/80">UX/UI Designer</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Type</p>
                <p className="font-sans text-base text-ink/80">HR & Analytics Dashboard</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-2">Client</p>
                <p className="font-sans text-base text-ink/80">Karolinska Institutet, Stockholm</p>
              </div>
            </div>

            <p className="mt-8 font-sans text-base text-ink/88 max-w-2xl leading-loose">
              Designed a data dashboard system for internal HR and operational management at Karolinska Institutet.
              The interface follows the university's brand identity — dark plum and coral — while
              making complex data sets readable and actionable for administrative staff.
            </p>
          </motion.div>

          {/* Case study — full image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="border border-ink/8">
              <Image
                src={CASE_STUDY.src}
                alt="Karolinska Institutet Dashboard Case Study"
                width={CASE_STUDY.w}
                height={CASE_STUDY.h}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={90}
                priority
              />
            </div>

            <div className="mt-3 flex items-baseline gap-6">
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/30 shrink-0">01</span>
              <div>
                <span className="font-display text-xl font-medium text-ink">Behance Case Study</span>
                <span className="font-sans text-sm text-ink/55 ml-4">
                  Full design process — dashboard layout, data visualisation, HR flows, and brand system.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Key contributions */}
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
                  'HR analytics dashboard with performance and budget tracking',
                  'Data visualisation components — charts, tables, KPI cards',
                  'Colour system adapted to Karolinska Institutet brand identity',
                  'Responsive layouts for administrative and management use',
                  'Information architecture for complex operational data',
                ].map((point) => (
                  <li key={point} className="flex gap-3 font-sans text-base text-ink/88 leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-3xl font-medium text-ink mb-6">Tools used</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {['Figma', 'Data Visualisation', 'Dashboard Design', 'Brand System', 'UX Research', 'Prototyping'].map((t) => (
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
