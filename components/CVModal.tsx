'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

const EXPERIENCE = [
  {
    title: 'Growth Marketer',
    company: 'Ivy Interactive',
    period: 'Sep 2025 – Jun 2026',
    context: 'Early-stage B2B startup · Stockholm / Remote',
    points: [
      'Managed LinkedIn outreach workflows — lead segmentation, campaign variations, reply tracking, follow-up preparation.',
      'Applied AI to automate outreach: reply categorisation, sentiment analysis, lead prioritisation, follow-up drafting.',
      'Analysed campaign replies to identify audience patterns, objections and messaging gaps.',
      'Prepared landing page drafts and product messaging concepts in Figma and Canva.',
      'Supported content operations in Storyblok CMS and monitored community channels.',
    ],
  },
  {
    title: 'UX/UI & Product Designer',
    company: 'SpaceCorps Technology OÜ',
    period: 'Jun 2025 – Dec 2025',
    context: 'Early-stage browser game startup · Remote',
    points: [
      'Designed the company website and visual presentation in Figma, shaping early brand identity.',
      'Created UX/UI concepts and prototypes for the browser game MVP.',
      'Defined visual identity direction — colour system, typography, and component patterns.',
      'Worked directly with the founder in a fast-changing product environment.',
    ],
  },
  {
    title: 'Digital Marketer',
    company: 'Beredskapslyftet',
    period: 'Jan 2025 – Apr 2025',
    context: 'Swedish employment integration initiative · Stockholm',
    points: [
      'Built and managed Facebook and Instagram presence from the ground up.',
      'Produced visual content and short-form videos in Canva and CapCut.',
      'Covered organisational events — photography, speaker documentation, interviews.',
      'Supported Meta Ads setup including audience targeting and campaign configuration.',
    ],
  },
  {
    title: 'Founder & Operations Lead',
    company: 'Ukrainian Media Localisation Initiative',
    period: '2023',
    context: 'Independent project · Remote · Volunteer',
    points: [
      'Founded and led a remote volunteer team of ~30 contributors across translation, voice, and post-production.',
      'Designed and managed production workflows across multiple parallel workstreams.',
      'Delivered 3 complete localised episodes from concept to final release.',
    ],
  },
]

const SKILLS = {
  'Marketing & Comms': ['Audience positioning', 'Product messaging', 'LinkedIn outreach', 'Lead segmentation', 'Campaign execution', 'Meta & LinkedIn Ads'],
  'AI & Automation': ['AI-assisted workflows', 'n8n automation', 'HeyReach · Clay · Breakcold', 'Reply categorisation', 'Lead prioritisation'],
  'Design & Content': ['Figma', 'UX/UI prototyping', 'Landing pages', 'Canva', 'Video editing (CapCut / InShot)'],
  'Analytics': ['Google Analytics', 'Google Sheets tracking', 'Audience analysis', 'Engagement reporting'],
}

const EDUCATION = [
  { title: "Bachelor's in Marketing", period: 'Sep 2022 – Present', detail: 'Market analysis · consumer behaviour · data-driven strategy' },
  { title: 'AI Marketing Specialist', period: 'Jul 2025 – Present', detail: 'AI agents · chatbots · CRM integration · marketing analytics' },
  { title: 'UX/UI Design & Web Design', period: 'Feb 2025 – Dec 2025', detail: 'Figma · prototyping · design principles · responsive design' },
  { title: 'Swedish Language Studies', period: 'Aug 2024 – Dec 2024', detail: 'Stockholm University · professional communication' },
]

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
                  <h2 className="font-display text-5xl font-light tracking-tight text-ink mb-1">Diana Horbyk</h2>
                  <p className="font-sans text-sm text-mid">Junior Growth Marketer · Digital Marketing & UX/UI Design</p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink/50 font-sans">
                    <span>diana.horbyk@gmail.com</span>
                    <span>(+46) 76-174-5666</span>
                    <span>Stockholm, Sweden</span>
                    <a href="https://linkedin.com/in/diana-h-133a68336" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn ↗</a>
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
                    {[
                      { lang: 'English', level: 'B2 — Professional' },
                      { lang: 'Swedish', level: 'B1 — Intermediate' },
                      { lang: 'Ukrainian', level: 'Native' },
                      { lang: 'Russian', level: 'Native' },
                    ].map(({ lang, level }) => (
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
