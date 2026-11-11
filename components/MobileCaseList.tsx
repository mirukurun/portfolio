'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export type CaseItem = {
  id: string
  title: string
  category: string
  year: string
  description: string
  company?: string
  href?: string
  site?: string
  thumb?: string
  stat?: string
}

/**
 * Mobile-only (< md) compact accordion for case lists.
 * Each case is one short row; tapping it reveals the description and links.
 */
export function MobileCaseList({ items }: { items: CaseItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <ul className="md:hidden border-t border-ink/15">
      {items.map((item) => {
        const isOpen = openId === item.id
        const isExternal = item.href?.startsWith('http')
        return (
          <li key={item.id} className="border-b border-ink/15">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-4 py-4 text-left active:opacity-60"
            >
              <span aria-hidden="true" className="shrink-0 mt-1 w-[76px] aspect-[16/10] overflow-hidden bg-ink/[0.06] flex items-center justify-center">
                {item.thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.thumb} alt="" loading="lazy" className="w-full h-full object-cover" />
                ) : item.stat ? (
                  <span
                    className="font-display font-light text-accent leading-none px-1 text-center"
                    style={{ fontSize: item.stat.length <= 3 ? '1.6rem' : '0.95rem' }}
                  >
                    {item.stat}
                  </span>
                ) : (
                  <span className="font-sans text-[11px] tracking-[0.12em] text-ink/60">{item.id}</span>
                )}
              </span>
              <span className="flex-1 min-w-0">
                <span className={`block font-display text-[1.45rem] font-medium leading-tight ${isOpen ? 'text-accent' : 'text-ink'}`}>
                  {item.title}
                </span>
                <span className="block mt-1 font-sans text-[10px] tracking-[0.12em] uppercase text-accent/90 leading-snug">
                  {item.category}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 pt-1 font-sans text-xl leading-none text-ink/60 transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-5">
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink/50 mb-3">
                      {item.id} · {item.company ? `${item.company} · ` : ''}{item.year}
                    </p>
                    <p className="font-sans text-[15px] text-ink/90 leading-relaxed">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                      {item.href && (
                        isExternal ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-accent">
                            <span className="w-4 h-px bg-current" /> View Project ↗
                          </a>
                        ) : (
                          <Link href={item.href}
                            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-accent">
                            <span className="w-4 h-px bg-current" /> View Project →
                          </Link>
                        )
                      )}
                      {item.site && (
                        <a href={item.site} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-ink/70">
                          {item.site.replace('https://', '')} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
