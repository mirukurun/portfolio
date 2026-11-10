'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'
import { MobileCaseList } from '@/components/MobileCaseList'

const WORK: { id: string; title: string; category: string; company: string; year: string; description: string; summary: string; thumb?: string; stat?: string; statLabel?: string; videoSrc?: string; href?: string; site?: string }[] = [
  {
    id: '01',
    title: 'Hordi Nails',
    category: 'Small Business · Local SEO · AI Search',
    company: 'Own business',
    year: '2026',
    description: 'My home nail studio north of Stockholm, where I run all of the marketing. The site carries NailSalon, price and FAQ structured data (39 questions) plus an llms.txt file, so Google and AI assistants can answer questions about prices, hours and booking. I also rebuilt the Google Business Profile and wrote local posts in Swedish, English and Ukrainian. Now building a reel pipeline (Kokoro TTS, Whisper, Remotion, FFmpeg) so I can publish without filming clients.',
    summary: 'All marketing for my nail studio: local SEO, Google profile and AI-search setup.',
    stat: '39',
    statLabel: 'FAQ answers Google and AI assistants can quote',
    href: '/marketing/hordi-nails',
    site: 'https://hordinails.com',
  },
  {
    id: '02',
    title: 'ICPress: Positioning, Product Backlog & Explainer Series',
    category: 'Product Marketing · UX Audit · Video Content',
    company: 'Co-Founder & Head of Marketing · Individual Contributor Press',
    year: '2026',
    description: 'Marketing audit for a company comparison platform that showed the public site was selling a different product from the one being built, and a new positioning around fair, apples-to-apples comparison. Wrote product issues detailed enough for an AI coding agent to fix as-is, and built “Finance from zero”, a short-video series rendered from scripts with TTS narration and timed captions.',
    summary: 'New positioning, an AI-ready product backlog and a short explainer video series.',
    thumb: '/projects/thumbs/icpress.jpg',
    href: '/marketing/icpress',
  },
  {
    id: '03',
    title: 'SEO & AI-Search Visibility Baseline',
    category: 'SEO · Web Performance · GEO',
    company: 'Voxear Technologies AB',
    year: '2026',
    description: 'Closed the company\'s first web and SEO baseline (Search Console, GA4, Core Web Vitals, rankings, backlinks) and separately tested how the brand shows up in Google AI Overviews and ChatGPT for real buyer questions. Turned the gaps into a prioritised action list and a briefing that won leadership buy-in for a new workstream.',
    summary: 'First SEO and AI-search baseline, turned into a plan leadership approved.',
    stat: '1st',
    statLabel: 'web, SEO and AI-search baseline',
  },
  {
    id: '04',
    title: 'Buyer Personas & Messaging Matrix',
    category: 'Positioning · Audience Research',
    company: 'Voxear Technologies AB',
    year: '2026',
    description: 'Built 5 end-user and 2 distributor personas from EU professional communities, each mapped across a 6-stage buyer journey with message, proof and channel. Gave a distributor-led go-to-market a working model for who every page, post, sheet and deck is for.',
    summary: 'Personas and a messaging matrix for a distributor-led go-to-market.',
    stat: '7',
    statLabel: 'personas × 6 buyer-journey stages',
  },
  {
    id: '05',
    title: 'Social Baseline & Customer Proof Bank',
    category: 'Social · Content · Voice of Customer',
    company: 'Voxear Technologies AB',
    year: '2026',
    description: 'Benchmarked every active social channel using public data only, then set up a content calendar and monthly metrics. Turned raw customer field-test forms into a reusable bank of testimonials and stats with consent tracking, and proposed a zero-cost review-collection flow.',
    summary: 'Social benchmark, content calendar and a reusable bank of customer proof.',
    stat: 'Proof',
    statLabel: 'testimonials and stats with consent tracking',
  },
  {
    id: '06',
    title: 'FindMeAJob',
    category: 'AI Product · Personal Project',
    company: 'Personal',
    year: '2026',
    description: 'Local-first job application assistant built with Next.js and Claude. Upload a resume, get an AI-extracted candidate profile, and match against job listings with scored reasoning — all running on your own machine.',
    summary: 'Job application assistant built with Next.js and Claude.',
    stat: 'Local',
    statLabel: 'AI job assistant that runs on your own machine',
  },
  {
    id: '07',
    title: 'Reddit → LinkedIn Engine',
    category: 'AI Automation · Content · Personal Project',
    company: 'Personal',
    year: '2026',
    description: 'A research and drafting pipeline that turns Reddit discussions into original LinkedIn content. Fetches threads, extracts human insights via LLM, generates post angles and drafts — in your voice, not Reddit\'s.',
    summary: 'Pipeline that turns Reddit discussions into LinkedIn posts in your own voice.',
    stat: 'R → in',
    statLabel: 'Reddit threads into original LinkedIn drafts',
  },
  {
    id: '08',
    title: 'LinkedIn Outreach Engine',
    category: 'Growth Marketing · AI Automation',
    company: 'Ivy Interactive',
    year: '2025–2026',
    description: 'Built and operated a full LinkedIn outreach workflow: lead segmentation, campaign variants, AI-automated reply categorisation and follow-up drafting. Turned manual processes into a repeatable, scalable system.',
    summary: 'Full LinkedIn outreach workflow, from lead segments to AI-drafted follow-ups.',
    stat: 'Outreach',
    statLabel: 'segments, variants and AI reply sorting',
  },
  {
    id: '09',
    title: 'AI Workflow Automation',
    category: 'AI · n8n · Operations',
    company: 'Ivy Interactive',
    year: '2025–2026',
    description: 'Designed and deployed AI-assisted outreach automation using Claude, n8n, and Clay. Reduced manual task time significantly across lead research, reply handling, and follow-up scheduling.',
    summary: 'AI-assisted automation for lead research, replies and follow-ups.',
    stat: 'n8n',
    statLabel: 'Claude · n8n · Clay',
  },
  {
    id: '10',
    title: 'Social Media Launch',
    category: 'Content · Community · Ads',
    company: 'Beredskapslyftet',
    year: '2025',
    description: 'Built Facebook and Instagram presence from zero for a Swedish social initiative. Created multilingual content, managed ad campaigns, and covered live events — from photography to short-form video.',
    summary: 'Facebook and Instagram from zero: multilingual content, ads and event coverage.',
    stat: '0 → 1',
    statLabel: 'Facebook and Instagram, built from zero',
  },
  {
    id: '11',
    title: 'Media Localisation at Scale',
    category: 'Operations · Project Management',
    company: 'Ukrainian Media Localisation Initiative',
    year: '2023',
    description: 'Founded and led a 30-person remote volunteer team across translation, voice acting, and post-production. Delivered 3 complete localised episodes through structured async workflows.',
    summary: 'Founded and led a remote team that localised 3 full episodes.',
    stat: '30',
    statLabel: 'volunteers · 3 localised episodes',
  },
  {
    id: '12',
    title: 'Content Creation — Targeted Advertising',
    category: 'Content · Video · Visual Design',
    company: 'Beauty by Luidmila',
    year: '2023',
    description: 'Targeted advertising content for a beauty salon — posts, images, and video edits for Meta campaigns. Built a warm, consistent visual identity that converts local audiences into bookings.',
    summary: 'Meta ad content for a beauty salon: posts, images and video edits.',
    thumb: '/projects/thumbs/beauty.jpg',
    href: '/marketing/beauty',
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

          {/* Mobile: compact accordion list */}
          <MobileCaseList items={WORK} />

          {/* Work grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:grid md:grid-cols-2 gap-px bg-ink/8"
          >
            {WORK.map((item, i) => {
              const isLastOdd = i === WORK.length - 1 && WORK.length % 2 !== 0
              const cardInner = (
                <>
                  <div className="relative overflow-hidden aspect-[16/10] mb-7 bg-ink/[0.045]">
                    {item.thumb ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.thumb}
                        alt={`${item.title} preview`}
                        loading={i < 4 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                        <span
                          className="font-display font-light text-accent leading-[0.9] tracking-tight"
                          style={{ fontSize: (item.stat ?? '').length <= 3 ? 'clamp(5rem, 9vw, 9rem)' : 'clamp(3.5rem, 6vw, 6rem)' }}
                        >
                          {item.stat}
                        </span>
                        <span className="mt-4 font-sans text-[11px] tracking-[0.18em] uppercase text-ink/70 max-w-xs leading-relaxed">
                          {item.statLabel}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">{item.id}</span>
                    <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/60">{item.year}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-1">{item.category}</p>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink/50 mb-3">{item.company}</p>
                  <p className="font-sans text-base text-ink/90 leading-relaxed">{item.summary}</p>
                  {'site' in item && item.site && (
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-5 self-start inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-accent hover:text-ink transition-colors"
                    >
                      <span className="w-4 h-px bg-current" />
                      {item.site.replace('https://', '')} ↗
                    </a>
                  )}
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
                {'site' in item && item.site ? (
                  <div className="group relative flex flex-col h-full bg-bg p-8 md:p-10 hover:bg-ink/[0.02] transition-colors duration-300">
                    <Link href={item.href!} aria-label={item.title} className="absolute inset-0" />
                    {cardInner}
                  </div>
                ) : 'href' in item && item.href ? (
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
