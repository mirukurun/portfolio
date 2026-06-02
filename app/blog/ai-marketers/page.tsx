'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'

export default function AiMarketersPost() {
  return (
    <>
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/blog" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Blog
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">AI · Marketing</p>
        </nav>

        <div className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-md mx-auto">

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">Jun 2026</span>
              <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink/40">·</span>
              <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-accent/70">AI · Marketing</span>
            </div>

            <h1
              className="font-display font-light text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              AI Didn't Replace the Marketers. It Came Through Them.
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
              A Reddit post went around recently. A developer wrote that their CEO had fired six engineers after a marketing person showed him an Anthropic demo. The developer was one of the managers asked to let their team go. The post had over 2,000 upvotes and hundreds of comments, most of them variations of "this is why we can't have nice things."
            </p>

            <p>
              Someone in the comments said: "I'm surprised. Marketing would be easier to replace with AI than developers."
            </p>

            <p>
              They're not wrong.
            </p>

            <p>
              I ran outreach campaigns for an early-stage startup. I used Claude to analyze Reddit threads, draft blog posts, classify leads, and write follow-up sequences. A real chunk of what I did every day was AI-assisted. Some of it was fully automated. I've thought about which parts of my job a model could do without me. The answer is more than I'd like to admit.
            </p>

            <p>
              So the marketing team kept their jobs while six developers did not. And the comment section had a point: if you're running scripts to generate leads and classify replies, what exactly is irreplaceable there?
            </p>

            <p>
              Azryl A., a fractional CMO who commented on the LinkedIn version of that post, read it differently.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-2 border-accent pl-6 my-8">
              <p className="font-sans text-base text-ink/80 leading-loose italic">
                "The devs got cut because AI competes with their craft. The marketing team kept their jobs because one of them translated the Anthropic demo into a decision the CEO acted on. That's agency, not luck."
              </p>
            </blockquote>

            <p>
              That reframe is worth sitting with. The marketing person didn't just watch the demo. They walked into a room with a CEO, pointed at something, and moved a decision. That's a different skill from running campaigns.
            </p>

            <p>
              He continued: marketers were never just doing the craft. They were doing the craft plus working around the people who said no — IT, procurement, legal, the dev team itself. AI removes those gatekeepers. The trait that made marketers annoying to engineering teams is the trait that makes them effective now.
            </p>

            <p>
              Then he caught himself on that framing and added a second comment. When you route around the gatekeepers, you also skip what they were catching: security reviews, scope discipline, data-handling questions nobody thought to ask. "We get ahead of the game, and we open gaps we can't yet see."
            </p>

            <p>
              He came in sure he was right. He left less sure. That's the honest version. He wrote more about it{' '}
              <a
                href="https://azpectopatronum.substack.com/p/ai-didnt-come-for-the-marketers-it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-dark-accent transition-colors"
              >
                on Substack ↗
              </a>
              .
            </p>

            <p>
              The developers got fired because a two-minute demo looked impressive and the CEO didn't know enough to ask the right questions. The marketing team kept their jobs because nobody in that room was asking the same questions about them. That's not a win. That's a different kind of exposure — one that hasn't arrived yet.
            </p>

            <p>
              The marketers who will be fine are the ones who understood the job was never just the deliverables. It was knowing what questions to ask, what decision to walk into which room, what to do with the answer. AI handles a lot of the output. It doesn't yet know who to talk to.
            </p>

            <p>
              But the gap is closing. And "I know who to talk to" is a much thinner moat than most of us have been pretending.
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
