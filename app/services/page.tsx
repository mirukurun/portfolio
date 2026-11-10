'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'
import { SERVICE_GROUPS } from '@/lib/services'
import { CONTACT } from '@/lib/cvData'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function ServicesPage() {
  return (
    <>
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Diana Horbyk
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Services</p>
        </nav>

        <div className="pt-20 pb-20 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-6">What I can do for you</p>
            <h1 className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 9vw, 12rem)' }}>
              Services
            </h1>
            <div className="mt-6 w-12 h-px bg-accent" />
            <p className="mt-6 font-sans text-base text-ink/90 max-w-xl leading-relaxed">
              Design, websites and marketing for small businesses, startups and teams in Stockholm and remote.
              Find what you need below. Every service is something I have already done for a real project.
            </p>
            {/* Quick index */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {SERVICE_GROUPS.map((g) => (
                <a key={g.id} href={`#s-${g.id}`}
                  className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink/60 hover:text-accent transition-colors">
                  {g.area}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Groups */}
          <div className="border-t border-ink/10">
            {SERVICE_GROUPS.map((group) => (
              <motion.section
                key={group.id}
                id={`s-${group.id}`}
                className="scroll-mt-20 grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-12 py-10 md:py-14 border-b border-ink/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="md:sticky md:top-24 self-start">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">{group.id}</span>
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent">{group.area}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.05]">
                    “{group.need}”
                  </h2>
                </div>

                <ul className="space-y-7">
                  {group.services.map((s) => (
                    <li key={s.title}>
                      <h3 className="font-display text-2xl font-medium text-ink leading-tight">{s.title}</h3>
                      <p className="mt-1.5 font-sans text-base text-ink/90 leading-relaxed">{s.description}</p>
                      <p className="mt-2 font-sans text-[10px] tracking-[0.18em] uppercase text-ink/50">
                        Done for:{' '}
                        {s.proof.map((p, i) => (
                          <span key={p.label}>
                            {p.href ? (
                              <Link href={p.href} className="text-accent hover:text-ink transition-colors">{p.label}</Link>
                            ) : (
                              <span>{p.label}</span>
                            )}
                            {i < s.proof.length - 1 && ' · '}
                          </span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            className="mt-20 md:mt-28 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-light text-ink leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
              Not sure what you need?
            </h2>
            <p className="mt-4 font-sans text-base text-ink/90 max-w-md mx-auto leading-relaxed">
              Tell me about your business and where you want to be. I’ll suggest where to start.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <a href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase text-accent hover:text-ink transition-colors">
                <span className="w-6 h-px bg-current" />
                {CONTACT.email}
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
                className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent hover:text-ink transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
