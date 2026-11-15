'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Fragment, type ReactNode } from 'react'
import { TextureOverlay } from '@/components/TextureOverlay'
import { BLOG_POSTS } from '@/lib/blogPosts'
import { getArticle, type ArticleBlock } from '@/lib/blogArticles'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const kicker = 'font-sans text-[10px] tracking-[0.3em] uppercase'

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease },
}

// Turns "[text](url)" inside a paragraph into a link.
function withLinks(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!m) return <Fragment key={i}>{part}</Fragment>
    return (
      <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-dark-accent transition-colors">
        {m[1]}
      </a>
    )
  })
}

function Block({ b }: { b: ArticleBlock }) {
  if (typeof b === 'string') {
    return <p className="font-sans text-[17px] md:text-lg text-ink/85 leading-relaxed">{withLinks(b)}</p>
  }
  return (
    <blockquote className="border-l-2 border-accent pl-5 md:pl-6 my-2">
      <p className="font-display font-light text-ink text-[1.5rem] md:text-[1.9rem] leading-[1.25]!">“{b.quote}”</p>
      {b.cite && <p className={`mt-3 ${kicker} text-ink/50`}>{b.cite}</p>}
    </blockquote>
  )
}

export function BlogPostPage({ href }: { href: string }) {
  const posts = BLOG_POSTS.filter((p) => !p.draft && p.href)
  const post = posts.find((p) => p.href === href)!
  const next = posts.length > 1 ? posts[(posts.indexOf(post) + 1) % posts.length] : null
  const article = getArticle(href)
  const quoteAfter = article.quoteAfter ?? 0

  return (
    <>
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/blog" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Blog
          </Link>
          <p className="hidden sm:block font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">{post.category}</p>
        </nav>

        <article className="pt-20 pb-24 px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
          <motion.header
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex justify-between items-center gap-4 border-y border-ink/15 py-2.5 mb-6 md:mb-8">
              <p className={`${kicker} text-accent`}>{post.category}</p>
              <p className={`${kicker} text-ink/45 shrink-0`}>{post.date} · {post.readTime} read</p>
            </div>
            <div className="max-w-3xl">
              <h1 className="font-display font-light text-ink leading-[1.02] tracking-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.75rem)' }}>
                {post.title}
              </h1>
              <p className="mt-5 md:mt-6 font-display font-light text-ink/75 text-[1.35rem] md:text-[1.65rem] leading-[1.3]!">
                {post.excerpt}
              </p>
            </div>
          </motion.header>

          <div className="max-w-2xl">
            {article.sections.map((s, si) => (
              <Fragment key={si}>
                <motion.section className="mb-12 md:mb-14" {...reveal}>
                  {s.heading && (
                    <div className="flex items-baseline gap-4 border-t border-ink/15 pt-5 mb-4">
                      <span className="font-display font-light lining-nums text-accent text-3xl md:text-4xl leading-none shrink-0">
                        {String(si + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-display font-light text-ink text-[1.6rem] md:text-[2rem] leading-[1.1] tracking-tight">{s.heading}</h2>
                    </div>
                  )}
                  <div className="space-y-5">
                    {s.blocks.map((b, bi) => <Block key={bi} b={b} />)}
                  </div>
                </motion.section>

                {article.quote && si === quoteAfter && (
                  <motion.blockquote className="mb-12 md:mb-14 md:-mr-40" {...reveal}>
                    <span className="block font-display text-accent text-7xl leading-[0.6] h-8">“</span>
                    <p className="font-display font-light text-ink text-[1.9rem] md:text-[2.75rem] leading-[1.15]! tracking-tight">
                      {article.quote}
                    </p>
                    <div className="mt-5 w-12 h-px bg-accent" />
                  </motion.blockquote>
                )}
              </Fragment>
            ))}
          </div>

          <div className="mt-16 md:mt-20 border-t-2 border-ink pt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <Link href="/blog" className="inline-flex items-center gap-3 font-sans text-sm text-ink/50 hover:text-ink transition-colors">
              <span className="w-6 h-px bg-current" />
              All posts
            </Link>
            {next && next.href && next.href !== href && (
              <Link href={next.href} className="group md:text-right max-w-xl">
                <span className={`block ${kicker} text-accent mb-2`}>Next post →</span>
                <span className="font-display font-light text-ink text-3xl md:text-4xl leading-tight group-hover:text-accent transition-colors">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </article>
      </div>
    </>
  )
}
