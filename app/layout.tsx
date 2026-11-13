import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { JsonLd, personJsonLd } from '@/lib/jsonLd'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// Light only. Chrome / Firefox / Safari respect this. Samsung Internet's forced
// dark mode ignores every site-side setting (tested 2026-11-09: only light,
// light dark, dark, only dark, JS counter-filter) — nothing a site can do.
export const viewport: Viewport = {
  colorScheme: 'only light',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dianahorbyk.eu'),
  title: {
    default: 'Diana Horbyk — UX/UI Designer & Growth Marketer',
    template: '%s — Diana Horbyk',
  },
  description: 'Portfolio of Diana Horbyk — UX/UI Designer, Web Designer & Growth Marketer based in Stockholm.',
  alternates: { canonical: '/' },
  authors: [{ name: 'Diana Horbyk', url: 'https://dianahorbyk.eu' }],
  openGraph: {
    title: 'Diana Horbyk — UX/UI Designer & Growth Marketer',
    description: 'Portfolio of Diana Horbyk — UX/UI Designer, Web Designer & Growth Marketer based in Stockholm.',
    url: 'https://dianahorbyk.eu',
    siteName: 'Diana Horbyk',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diana Horbyk — UX/UI Designer & Growth Marketer',
    description: 'Portfolio of Diana Horbyk — UX/UI Designer, Web Designer & Growth Marketer based in Stockholm.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="color-scheme" content="only light" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable profile" />
        <JsonLd data={personJsonLd} />
        <style>{`:root,html,body{background-color:#F4F0EB!important;color:#2f2f2b!important;}`}</style>
      </head>
      <body className="font-sans antialiased bg-bg text-ink">
        {children}
      </body>
    </html>
  )
}
