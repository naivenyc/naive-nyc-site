import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Naive AI — Web Accessibility Platform',
    template: '%s | Naive AI',
  },
  description:
    'AI-powered WCAG scanning, auto-remediation, and compliance monitoring. Make your website accessible automatically.',
  keywords: ['web accessibility', 'WCAG', 'ADA compliance', 'accessibility testing', 'screen reader'],
  openGraph: {
    type: 'website',
    siteName: 'Naive AI',
    title: 'Naive AI — Web Accessibility Platform',
    description:
      'AI-powered WCAG scanning, auto-remediation, and compliance monitoring.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
