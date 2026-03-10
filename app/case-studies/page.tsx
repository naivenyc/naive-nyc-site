import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how teams use Naive AI to achieve WCAG compliance, reduce ADA lawsuit risk, and build more accessible products.',
}

export default function CaseStudiesPage() {
  return (
    <div className="py-16">
      <div className="container max-w-5xl">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Customer stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            See how teams across industries use Naive AI to achieve WCAG compliance, reduce legal risk, and build for everyone.
          </p>
        </div>

        {/* Case study cards */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Brand color sidebar */}
                <div
                  className="md:w-2 shrink-0"
                  style={{ backgroundColor: study.brandColor }}
                  aria-hidden="true"
                />

                <div className="flex flex-col md:flex-row flex-1 gap-6 p-8">
                  {/* Logo */}
                  <div className="flex items-start md:items-center shrink-0">
                    <div className="w-24 h-16 relative flex items-center">
                      <Image
                        src={study.logoUrl}
                        alt={study.logoAlt}
                        width={96}
                        height={48}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {study.industry}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:underline underline-offset-4">
                      {study.company}
                    </h2>
                    <p className="text-muted-foreground mb-4">{study.tagline}</p>

                    {/* Key metrics */}
                    <div className="flex flex-wrap gap-6">
                      {study.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <div className="text-lg font-bold">{m.after}</div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center shrink-0">
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-xl bg-muted/50 border p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Want to be our next case study?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start your free scan today and see your accessibility score in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://ai.naive.nyc/signup"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get started free →
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-md border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
