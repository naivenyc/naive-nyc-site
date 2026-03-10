'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="mr-8 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          aria-label="Naive AI — home"
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 ml-auto">
          <Button variant="ghost" asChild>
            <a href="https://ai.naive.nyc/login">Sign in</a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/demo">Book a demo</Link>
          </Button>
          <Button asChild>
            <a href="https://ai.naive.nyc/signup">Get started</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="ml-auto md:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={cn('md:hidden border-t', open ? 'block' : 'hidden')}
      >
        <nav className="container flex flex-col gap-4 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t">
            <Button variant="ghost" asChild className="justify-start">
              <a href="https://ai.naive.nyc/login">Sign in</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/demo" onClick={() => setOpen(false)}>Book a demo</Link>
            </Button>
            <Button asChild>
              <a href="https://ai.naive.nyc/signup">Get started</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
