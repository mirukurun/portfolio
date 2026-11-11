'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'
import { MobileCaseList } from '@/components/MobileCaseList'
import { DESIGN_PROJECTS as PROJECTS } from '@/lib/designProjects'
import { JsonLd, caseListJsonLd } from '@/lib/jsonLd'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function DesignPage() {
  return (
    <>
      <JsonLd data={caseListJsonLd('Design — Diana Horbyk', '/design', PROJECTS)} />
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Diana Horbyk
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Design</p>
        </nav>

        <div className="pt-20 pb-20 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-6">UX/UI Design · Web Design</p>
            <h1 className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(4rem, 11vw, 14rem)' }}>
              Design
            </h1>
            <div className="mt-6 w-12 h-px bg-accent" />
            <p className="mt-6 font-sans text-base text-ink/90 max-w-md leading-relaxed">
              Creating digital experiences that balance clarity, function, and visual intent.
              From product prototypes to editorial design systems.
            </p>
          </motion.div>

          {/* Mobile: compact accordion list */}
          <MobileCaseList items={PROJECTS} />

          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:grid md:grid-cols-2 gap-px bg-ink/8"
          >
            {PROJECTS.map((project, i) => {
              const isLastOdd = i === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0
              const inner = (
                <div className={isLastOdd ? 'grid grid-cols-2 gap-10 items-center h-full' : 'flex flex-col h-full'}>
                  <div className={`overflow-hidden bg-ink/5 aspect-[16/10]${isLastOdd ? '' : ' mb-7'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.thumb}
                      alt={`${project.title} preview`}
                      loading={i < 4 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">{project.id}</span>
                    <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/60">{project.year}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-3">{project.category}</p>
                  <p className="font-sans text-base text-ink/90 leading-relaxed">{project.summary}</p>
                  {'site' in project && project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-5 self-start inline-flex projects-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-accent hover:text-ink transition-colors"
                    >
                      <span className="w-4 h-px bg-current" />
                      {project.site.replace('https://', '')} ↗
                    </a>
                  )}
                  <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-4 h-px bg-accent" />
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-accent">
                      {'href' in project ? 'View Project ↗' : 'Coming Soon'}
                    </span>
                  </div>
                  </div>
                </div>
              )
              return (
                <motion.div key={project.id} variants={itemVariants} className={`h-full${isLastOdd ? ' md:col-span-2' : ''}`}>
                  {'site' in project && project.site ? (
                  <div className="group relative flex flex-col h-full bg-bg p-8 md:p-10 hover:bg-ink/[0.02] transition-colors duration-300">
                    <Link href={(project as typeof project & { href: string }).href} aria-label={project.title} className="absolute inset-0" />
                    {inner}
                  </div>
                ) : 'href' in project ? (
                    <Link
                      href={(project as typeof project & { href: string }).href}
                      className="group flex flex-col h-full bg-bg p-8 md:p-10 hover:bg-ink/[0.02] transition-colors duration-300"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="group flex flex-col h-full bg-bg p-8 md:p-10">
                      {inner}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* About section */}
          <motion.div
            className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-ink/10 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <h3 className="font-display text-3xl font-light text-ink mb-4">Approach</h3>
              <p className="font-sans text-base text-ink/90 leading-loose">
                Design starts with understanding. Before Figma, before wireframes — I look at the
                audience, the product constraints, and the communication goal. Then I build systems
                that are flexible enough to grow but opinionated enough to feel intentional.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl font-light text-ink mb-4">Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'UX Prototyping', 'Design Systems', 'Canva', 'Landing Pages', 'Visual Identity', 'Responsive Design', 'Storyblok CMS'].map((tool) => (
                  <span key={tool} className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/80 border border-ink/25 px-3 py-1.5">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
