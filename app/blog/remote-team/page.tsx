'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'

export default function RemoteTeamPost() {
  return (
    <>
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/blog" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Blog
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Operations · Leadership</p>
        </nav>

        <div className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-md mx-auto">

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">Mar 2023</span>
              <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/40">·</span>
              <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-accent/70">Operations · Leadership</span>
            </div>

            <h1
              className="font-display font-light text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Running a 30-Person Remote Team with No Budget
            </h1>
            <div className="w-12 h-px bg-accent" />
          </motion.div>

          <motion.div
            className="space-y-6 font-sans text-base text-ink/90 leading-loose"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p>
              I was 16 or 17 when I decided to start a Ukrainian dubbing project for Japanese animation. I didn't think of it as "team management" at the time. I just saw a gap: after the full-scale invasion, demand for Ukrainian-language content was growing fast, and most anime was still only available dubbed in Russian.
            </p>

            <p>
              The idea made sense. Starting it was a different story.
            </p>

            <p>
              Within a week I had assembled a team of around 30 people across voice acting, translation, editing, and production. All remote. All volunteers. People in different countries, different time zones, different microphones — some professional, some recording from kitchen tables.
            </p>

            <p>
              The work was real. I handled task assignment, progress tracking, quality checks, follow-ups, and the constant shuffling that happens when someone disappears for two weeks because life got in the way. I had one close collaborator who handled a lot of the organisational load with me. Together we kept things moving.
            </p>

            <p>
              What nobody tells you about managing volunteers is that motivation is the whole job. When there's no salary, no contract, and no deadline that actually matters to anyone, people prioritise everything else first — school, work, sleep, stress. You can't push them. You can only make the project clear enough and meaningful enough that they want to come back.
            </p>

            <p>
              Sometimes they didn't. I spent a lot of time finding replacements, redistributing tasks, and figuring out how to keep quality consistent when the team kept shifting.
            </p>

            <p>
              We released three full episodes and several short videos over about six months. For a project with no budget, no studio, and no infrastructure, that was a real result.
            </p>

            <p>
              But the ceiling was obvious. Good idea, wrong structure. To go further we needed recording equipment, a publishing platform, media partnerships, probably some form of funding. Nobody wanted to invest without knowing if it would ever make money — fair enough. The project had cultural value but not commercial viability in the form it existed.
            </p>

            <p>
              I later lost most of the materials when the account holding them was hacked. That part still bothers me. When you're 16 and you've built something real with no money and no name, the documentation is the only thing that makes it legible to anyone outside the team. Without it, the project collapses into something that sounds like an exaggeration.
            </p>

            <p>
              But the work happened. Thirty people showed up. The episodes were made. Someone somewhere watched them in Ukrainian instead of Russian, maybe without knowing how much coordination went into that small thing.
            </p>

            <p>
              I think about that sometimes — how much of what we build exists only in the memory of people who were there. No archive, no portfolio entry, no metrics. Just the fact that it was real, and some of the people who were part of it still know that.
            </p>

            <p>
              It's a strange thing to have your proof of work taken from you before you even knew proof of work was something you'd need.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 pt-10 border-t border-ink/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors"
            >
              <div className="w-6 h-px bg-current" />
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}
