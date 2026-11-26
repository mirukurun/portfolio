'use client'

import { usePathname } from 'next/navigation'
import { SOCIAL_LINKS } from '@/lib/cvData'

// Site-wide footer for scrolling pages. The home page is a single fixed screen
// and shows the same links inside its own layout instead.
export function SiteFooter() {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <footer className="bg-bg text-ink">
      <div className="px-7 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
        <div className="border-t border-ink/15 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-ink/40">
            Diana Horbyk · Stockholm
          </p>
          <nav aria-label="Social links" className="flex items-center gap-8">
            {SOCIAL_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent hover:text-ink transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
