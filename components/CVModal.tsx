'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT, EXPERIENCE, SKILLS, EDUCATION, LANGUAGES } from '@/lib/cvData'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleEscape])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Diana Horbyk — CV"
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bg pointer-events-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-ink/40 hover:text-accent transition-colors z-10"
                aria-label="Close CV"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="p-8 sm:p-12">
                {/* Header */}
                <div className="border-b border-ink/10 pb-8 mb-8">
                  <h2 className="font-display text-5xl font-light tracking-tight text-ink mb-1">{CONTACT.name}</h2>
                  <p className="font-sans text-sm text-mid">{CONTACT.headline}</p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink/50 font-sans">
                    <span>{CONTACT.email}</span>
                    <span>{CONTACT.phone}</span>
                    <span>{CONTACT.location}</span>
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn ↗</a>
                  </div>
                </div>

                {/* Experience */}
                <section className="mb-10">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Experience</h3>
                  <div className="space-y-8">
                    {EXPERIENCE.map((job) => (
                      <div key={job.company}>
                        <div className="flex items-baseline justify-between mb-0.5">
                          <h4 className="font-display text-xl font-medium text-ink">{job.title}</h4>
                          <span className="font-sans text-xs text-ink/40 ml-4 shrink-0">{job.period}</span>
                        </div>
                        <p className="font-sans text-sm font-medium text-dark-accent mb-1">{job.company}</p>
                        <p className="font-sans text-xs text-ink/40 mb-3">{job.context}</p>
                        <ul className="space-y-1">
                          {job.points.map((pt, i) => (
                            <li key={i} className="font-sans text-base text-ink/80 leading-relaxed flex gap-3">
                              <span className="text-accent mt-0.5 shrink-0">—</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Skills */}
                <section className="mb-10">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Skills</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(SKILLS).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="font-sans text-xs font-semibold text-ink mb-2">{category}</h4>
                        <ul className="space-y-1">
                          {items.map((item) => (
                            <li key={item} className="font-sans text-xs text-ink/60">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section className="mb-10">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Education</h3>
                  <div className="space-y-4">
                    {EDUCATION.map((edu) => (
                      <div key={edu.title} className="flex justify-between items-baseline gap-4">
                        <div>
                          <h4 className="font-display text-lg font-medium text-ink">{edu.title}</h4>
                          <p className="font-sans text-sm text-ink/60">{edu.detail}</p>
                        </div>
                        <span className="font-sans text-xs text-ink/40 shrink-0">{edu.period}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Languages</h3>
                  <div className="flex flex-wrap gap-6">
                    {LANGUAGES.map(({ lang, level }) => (
                      <div key={lang}>
                        <p className="font-display text-lg font-medium text-ink">{lang}</p>
                        <p className="font-sans text-sm text-ink/60">{level}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
