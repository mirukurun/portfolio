import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Space_Grotesk } from 'next/font/google'
import './globals.css'

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

export const viewport: Viewport = {
  colorScheme: 'only light',
}

export const metadata: Metadata = {
  title: 'Diana Horbyk — UX/UI Designer & Growth Marketer',
  description: 'Portfolio of Diana Horbyk — UX/UI Designer, Web Designer & Growth Marketer based in Stockholm.',
  openGraph: {
    title: 'Diana Horbyk — UX/UI Designer & Growth Marketer',
    description: 'Portfolio of Diana Horbyk — UX/UI Designer, Web Designer & Growth Marketer based in Stockholm.',
    url: 'https://diportfolio-self.vercel.app',
    siteName: 'Diana Horbyk',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
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
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable}`} style={{ colorScheme: 'only light' }}>
      <head>
        <style>{`html,body{color-scheme:only light!important;background-color:#F4F0EB!important;}`}</style>
      </head>
      <body className="font-sans antialiased bg-bg text-ink">
        {children}
      </body>
    </html>
  )
}
