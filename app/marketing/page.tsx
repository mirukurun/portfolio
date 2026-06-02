'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'

const WORK: { id: string; title: string; category: string; company: string; year: string; description: string; videoSrc?: string; href?: string }[] = [
  {
    id: '01',
    title: 'LinkedIn Outreach Engine',
    category: 'Growth Marketing · AI Automation',
    company: 'Ivy Interactive',
    year: '2025–2026',
    description: 'Built and operated a full LinkedIn outreach workflow: lead segmentation, campaign variants, AI-automated reply categorisation and follow-up drafting. Turned manual processes into a repeatable, scalable system.',
  },
  {
    id: '02',
    title: 'Social Media Launch',
    category: 'Content · Community · Ads',
    company: 'Beredskapslyftet',
    year: '2025',
    description: 'Built Facebook and Instagram presence from zero for a Swedish social initiative. Created multilingual content, managed ad campaigns, and covered live events — from photography to short-form video.',
  },
  {
    id: '03',
    title: 'AI Workflow Automation',
    category: 'AI · n8n · Operations',
    company: 'Ivy Interactive',
    year: '2025–2026',
    description: 'Designed and deployed AI-assisted outreach automation using Claude, n8n, and Clay. Reduced manual task time significantly across lead research, reply handling, and follow-up scheduling.',
  },
  {
    id: '04',
    title: 'Media Localisation at Scale',
    category: 'Operations · Project Management',
    company: 'Ukrainian Media Localisation Initiative',
    year: '2023',
    description: 'Founded and led a 30-person remote volunteer team across translation, voice acting, and post-production. Delivered 3 complete localised episodes through structured async workflows.',
  },
  {
    id: '05',
    title: 'Content Creation — Targeted Advertising',
    category: 'Content · Video · Visual Design',
    company: 'Beauty by Luidmila',
    year: '2023',
    description: 'Targeted advertising content for a beauty salon — posts, images, and video edits for Meta campaigns. Built a warm, consistent visual identity that converts local audiences into bookings.',
    href: '/marketing/beauty',
  },
  {
    id: '06',
    title: 'FindMeAJob',
    category: 'AI Product · Personal Project',
    company: 'Personal',
    year: '2026',
    description: 'Local-first job application assistant built with Next.js and Claude. Upload a resume, get an AI-extracted candidate profile, and match against job listings with scored reasoning — all running on your own machine.',
  },
  {
    id: '07',
    title: 'Reddit → LinkedIn Engine',
    category: 'AI Automation · Content · Personal Project',
    company: 'Personal',
    year: '2026',
    description: 'A research and drafting pipeline that turns Reddit discussions into original LinkedIn content. Fetches threads, extracts human insights via LLM, generates post angles and drafts — in your voice, not Reddit\'s.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function MarketingPage() {
  return (
    <>
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Diana Horbyk
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Marketing</p>
        </nav>

        <div className="pt-20 pb-20 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-6">Marketing · AI Automation</p>
            <h1 className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 9vw, 12rem)' }}>
              Marketing
            </h1>
            <div className="mt-6 w-12 h-px bg-accent" />
            <p className="mt-6 font-sans text-base text-ink/90 max-w-md leading-relaxed">
              Growth marketing built on audience insight, AI leverage, and repeatable systems.
              From outreach automation to brand-building content.
            </p>
          </motion.div>

          {/* Work grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/8"
          >
            {WORK.map((item, i) => {
              const isLastOdd = i === WORK.length - 1 && WORK.length % 2 !== 0
              const cardInner = (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">{item.id}</span>
                    <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/60">{item.year}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-1">{item.category}</p>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink/50 mb-4">{item.company}</p>
                  <p className="font-sans text-base text-ink/90 leading-relaxed">{item.description}</p>
                  {'href' in item && item.href && (
                    <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-4 h-px bg-accent" />
                      <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-accent">View Project ↗</span>
                    </div>
                  )}
                </>
              )
              return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`h-full${isLastOdd ? ' md:col-span-2' : ''}`}
              >
                {'href' in item && item.href ? (
                  <Link href={item.href} className="group flex flex-col h-full bg-bg p-8 md:p-10 hover:bg-ink/[0.02] transition-colors duration-300">
                    {cardInner}
                  </Link>
                ) : (
                  <div className="group flex flex-col h-full bg-bg p-8 md:p-10">
                    {cardInner}
                  </div>
                )}
              </motion.div>
            )})}
          </motion.div>

          {/* AI Toolstack section */}
          <motion.div
            className="mt-24 border-t border-ink/10 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-display text-3xl font-medium text-ink mb-4">AI Stack</h3>
                <div className="space-y-1.5">
                  {['Claude · ChatGPT · Gemini', 'n8n Automation', 'Clay · HeyReach', 'Breakcold · Saleshandy', 'ElevenLabs · Cling AI'].map((tool) => (
                    <p key={tool} className="font-sans text-base text-ink/90">{tool}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-medium text-ink mb-4">Channels</h3>
                <div className="space-y-1.5">
                  {['LinkedIn Outreach', 'Meta Ads', 'Content Marketing', 'Community Management', 'Email Campaigns'].map((ch) => (
                    <p key={ch} className="font-sans text-base text-ink/90">{ch}</p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-medium text-ink mb-4">Analytics</h3>
                <div className="space-y-1.5">
                  {['Google Analytics', 'Sheets Tracking', 'Audience Analysis', 'Campaign Reporting', 'Engagement Metrics'].map((a) => (
                    <p key={a} className="font-sans text-base text-ink/90">{a}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
