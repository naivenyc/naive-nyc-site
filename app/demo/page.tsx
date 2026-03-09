'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Clock, Users, Shield } from 'lucide-react'

const perks = [
  { icon: Clock, text: '30-minute personalised walkthrough' },
  { icon: Users, text: 'Tailored to your team size and stack' },
  { icon: Shield, text: 'Live scan of your actual website' },
  { icon: Check, text: 'Q&A with an accessibility expert' },
]

const teamSizes = [
  'Just me',
  '2–10',
  '11–50',
  '51–200',
  '201+',
]

export default function DemoPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      teamSize: (form.elements.namedItem('teamSize') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setStatus('success')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <div className="py-16">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — value prop */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              See Naive AI in action
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Book a free 30-minute demo and we&apos;ll run a live accessibility scan on your website, walk you through the results, and show you how to fix the most critical issues.
            </p>

            <ul className="space-y-4 mb-10">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                    <perk.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <span>{perk.text}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-lg border bg-muted/40 p-5 text-sm text-muted-foreground">
              Prefer to explore on your own?{' '}
              <a
                href="https://ai.naive.nyc/signup"
                className="text-foreground font-medium underline underline-offset-4 hover:opacity-80"
              >
                Start free — no credit card required.
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            {status === 'success' ? (
              <div className="text-center py-8" role="status" aria-live="polite">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Request received!</h2>
                <p className="text-muted-foreground mb-6">
                  We&apos;ll email you within one business day to schedule your demo.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/">Back to home</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Book a demo">
                <h2 className="text-xl font-semibold mb-6">Book your free demo</h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="demo-email" className="text-sm font-medium">
                        Work email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="demo-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Inc."
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="teamSize" className="text-sm font-medium">
                      Team size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select…</option>
                      {teamSizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium">
                      Anything you&apos;d like us to know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="e.g. We have 5 sites and are facing an ADA complaint…"
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-destructive">
                      {errorMsg}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Request demo'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting you agree to our{' '}
                    <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
