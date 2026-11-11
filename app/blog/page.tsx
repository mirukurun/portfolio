'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { TextureOverlay } from '@/components/TextureOverlay'
import { BLOG_POSTS as POSTS } from '@/lib/blogPosts'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function BlogPage() {
  return (
    <>
      <TextureOverlay />
      <div className="min-h-screen bg-bg text-ink">
        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-7 pt-6 pb-4 bg-bg/90 backdrop-blur-sm">
          <Link href="/" className="font-display font-light text-ink/60 hover:text-ink transition-colors text-lg tracking-wide">
            ← Diana Horbyk
          </Link>
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35">Blog</p>
        </nav>

        <div className="pt-20 pb-20 px-7 md:px-12 lg:px-20 max-w-screen-lg mx-auto">
          {/* Header */}
          <motion.div
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-accent mb-6">Writing · Thoughts</p>
            <h1 className="font-display font-light text-ink leading-none tracking-tight"
              style={{ fontSize: 'clamp(4rem, 11vw, 13rem)' }}>
              Blog
            </h1>
            <div className="mt-6 w-12 h-px bg-accent" />
            <div className="mt-6 flex items-start justify-between gap-8 max-w-2xl">
              <p className="font-sans text-base text-ink/90 max-w-sm leading-relaxed">
                Notes on design, marketing automation, AI tools, and working across languages and borders.
              </p>
              <a
                href="https://www.linkedin.com/in/diana-h-133a68336/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 font-sans text-sm text-ink/50 hover:text-accent transition-colors duration-300"
              >
                <div className="w-5 h-px bg-current" />
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Post list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-0 divide-y divide-ink/8"
          >
            {POSTS.map((post) => {
              const hasArticle = !post.draft && 'href' in post && post.href
              const inner = (
                <>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-ink/60">{post.id}</span>
                      <span className="font-sans text-[11px] tracking-[0.08em] uppercase text-accent/70">{post.category}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] font-sans tracking-[0.12em] uppercase text-ink/60">
                      <span>{post.date}</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>

                  <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-tight mb-3 ${hasArticle ? 'group-hover:text-accent' : ''} transition-colors duration-300`}>
                    {post.title}
                  </h2>
                  <p className="font-sans text-base text-ink/90 leading-relaxed max-w-2xl">{post.excerpt}</p>

                  {hasArticle && (
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-px bg-accent group-hover:w-8 transition-all duration-300" />
                        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent/60 group-hover:text-accent transition-colors duration-300">Read</span>
                      </div>
                    </div>
                  )}
                </>
              )

              return (
                <motion.article key={post.id} variants={itemVariants}>
                  {hasArticle ? (
                    <Link
                      href={(post as typeof post & { href: string }).href}
                      className="group block py-8 md:py-10 -mx-4 px-4 rounded-sm hover:bg-ink/[0.025] transition-colors duration-300"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className={`group py-8 md:py-10 ${post.draft ? 'opacity-45' : ''}`}>
                      {inner}
                    </div>
                  )}
                </motion.article>
              )
            })}
          </motion.div>

          {/* Footer note */}
          <motion.p
            className="mt-16 font-sans text-[9px] tracking-[0.4em] uppercase text-ink/25 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            More posts coming
          </motion.p>
        </div>
      </div>
    </>
  )
}
