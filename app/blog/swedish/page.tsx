'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'

export default function SwedishPost() {
  return (
    <>
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/blog" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Blog
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Language · Personal</p>
        </nav>

        <div className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-md mx-auto">

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">May 2026</span>
              <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/40">·</span>
              <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-accent/70">Language · Personal</span>
            </div>

            <h1
              className="font-display font-light text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Learning Swedish While Working Full-Time: What Actually Helped
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
              Learning Swedish while working full-time sounds like a productivity challenge. In reality it's much messier.
            </p>

            <p>
              I was studying Swedish at Stockholm University while working, running personal projects, and constantly switching between Ukrainian, Russian, English, and Swedish. Some days Swedish felt exciting. Other days my brain refused to process another grammar rule after a long workday.
            </p>

            <p>
              What helped wasn't motivation — that came and went. What helped was a system that survived low-energy days.
            </p>

            <p>
              Accepting that Swedish didn't need to be perfect to be useful made an early difference. I used to avoid speaking because I was afraid of sounding slow. But language doesn't improve in silence. I started treating small interactions as practice: ordering coffee, reading university emails, listening to people on the bus. Short moments, but they made Swedish feel less like a subject and more like a living language.
            </p>

            <p>
              I also separated active learning from passive exposure. Active was classes, homework, grammar, writing. Passive was everything around it: Swedish subtitles, podcasts, supermarket labels, conversations I only partly understood. I used to think passive wasn't serious enough. Over time it helped me recognize patterns without forcing myself to study when I had nothing left.
            </p>

            <p>
              Lowering the daily standard helped too. When you work full-time, you can't always do an hour of language study in the evening. Some days ten minutes is a win. Consistency doesn't always mean doing a lot — sometimes it means doing something small enough that you don't stop.
            </p>

            <p>
              The hardest part was managing several languages at once. English was necessary for work. Ukrainian and Russian were part of my personal life. Swedish was the language I needed to function in society. But the more Swedish I learned, the more my English started to slip.
            </p>

            <p>
              Before studying Swedish actively, I felt confident in English — around B2. A few months in, I sometimes felt like I'd dropped to B1. I forgot simple words, mixed Swedish logic into English sentences. Because the two languages are structurally close, my brain started confusing them instead of keeping them separate.
            </p>

            <p>
              At first it was frustrating. Later I understood it's a normal part of multilingual learning. Progress isn't clean. Sometimes one language strengthens while another temporarily gets messier. It doesn't mean you're losing everything — it means your brain is reorganizing.
            </p>

            <p>
              What actually helped wasn't one perfect method. It was showing up to class, speaking before I felt ready, listening even when I understood only half, and accepting that progress would be slow and uneven.
            </p>

            <p>
              Eventually Swedish stopped being something I was studying and started being something I was just using.
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
