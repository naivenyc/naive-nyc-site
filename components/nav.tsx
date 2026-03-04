'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center font-bold text-xl tracking-tight">
          Naive AI
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 ml-auto">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://ai.naive.nyc/login">Sign in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://ai.naive.nyc/signup">Get started</a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="ml-auto md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div className={cn('md:hidden border-t', open ? 'block' : 'hidden')}>
        <nav className="container flex flex-col gap-4 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t">
            <Button variant="ghost" size="sm" asChild className="justify-start">
              <a href="https://ai.naive.nyc/login">Sign in</a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://ai.naive.nyc/signup">Get started</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
