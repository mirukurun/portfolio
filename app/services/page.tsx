'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'
import { SERVICE_GROUPS } from '@/lib/services'
import { CONTACT } from '@/lib/cvData'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const KICKER = 'font-sans text-[10px] tracking-[0.3em] uppercase'
const total = SERVICE_GROUPS.reduce((n, g) => n + g.services.length, 0)

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
          <p className="hidden sm:block font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Services</p>
        </nav>

        <div className="pt-20 pb-20 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          {/* Header */}
          <motion.header
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="flex justify-between items-center gap-4 border-y border-ink/15 py-2.5 mb-6 md:mb-8">
              <p className={`${KICKER} text-accent`}>What I can do for you</p>
              <p className={`${KICKER} text-ink/40 shrink-0`}>{total} services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-7">
                <h1 className="font-display font-light text-ink leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(3rem, 6.5vw, 7rem)' }}>
                  Services
                </h1>
                <p className="mt-5 md:mt-6 font-display font-light text-ink/80 text-[1.45rem] md:text-[1.75rem] leading-[1.3]! max-w-2xl">
                  Design, websites and marketing for small businesses, startups and teams in Stockholm and remote.
                  Every service is something I have already done for a real project.
                </p>
              </div>
              {/* Contents */}
              <nav className="md:col-span-5 md:pt-3">
                <p className={`${KICKER} text-ink/40 mb-2`}>Contents</p>
                <ol className="border-t border-ink/15">
                  {SERVICE_GROUPS.map((g) => (
                    <li key={g.id}>
                      <a href={`#s-${g.id}`} className="group flex items-baseline gap-4 py-2 border-b border-ink/10">
                        <span className="font-display lining-nums text-accent text-lg leading-none w-6 shrink-0">{g.id}</span>
                        <span className="font-sans text-[15px] text-ink/85 group-hover:text-accent transition-colors">{g.area}</span>
                        <span className="ml-auto font-sans text-xs text-ink/40">{g.services.length}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </motion.header>

          {/* Groups */}
          {SERVICE_GROUPS.map((group) => (
            <motion.section
              key={group.id}
              id={`s-${group.id}`}
              className="scroll-mt-20 mb-14 md:mb-16 border-t border-ink/15 pt-6 md:pt-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="flex items-baseline gap-4 md:gap-5">
                <span className="font-display font-light lining-nums text-accent text-4xl md:text-5xl leading-none shrink-0">{group.id}</span>
                <div>
                  <p className={`${KICKER} text-ink/45 mb-1.5`}>{group.area}</p>
                  <h2 className="font-display font-light text-ink text-[1.9rem] md:text-[2.4rem] leading-[1.05] tracking-tight">
                    “{group.need}”
                  </h2>
                </div>
              </div>

              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {group.services.map((s) => (
                  <li key={s.title} className="border-t border-ink/10 pt-4">
                    <h3 className="font-display font-normal text-ink text-[1.45rem] leading-tight">{s.title}</h3>
                    <p className="mt-1.5 font-sans text-[15px] text-ink/80 leading-relaxed">{s.description}</p>
                    <p className={`mt-2.5 ${KICKER} text-ink/45`}>
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

          {/* Contact */}
          <motion.div
            className="mt-16 md:mt-20 border-t-2 border-ink pt-10 md:pt-14 text-center"
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
