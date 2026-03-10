import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Quote } from 'lucide-react'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `${study.company} Case Study`,
    description: study.tagline,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <div>
      {/* Hero */}
      <div
        className="py-20 text-white"
        style={{ backgroundColor: study.brandColor }}
      >
        <div className="container max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All case studies
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white rounded-xl p-3 inline-flex">
              <Image
                src={study.logoUrl}
                alt={study.logoAlt}
                width={120}
                height={48}
                className="object-contain h-10 w-auto"
                unoptimized
              />
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">
            {study.industry}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {study.tagline}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{study.description}</p>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="border-b bg-muted/30">
        <div className="container max-w-4xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  {m.before !== '—' && (
                    <span className="text-sm text-muted-foreground line-through">{m.before}</span>
                  )}
                  <span className="text-2xl font-bold" style={{ color: study.brandColor }}>
                    {m.after}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container max-w-3xl py-16">
        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold mb-4">The challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{study.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The solution</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{study.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The results</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{study.results}</p>
          </section>

          {/* Quote */}
          <blockquote className="rounded-xl border-l-4 pl-6 py-2" style={{ borderColor: study.brandColor }}>
            <Quote className="h-6 w-6 mb-3 text-muted-foreground" aria-hidden="true" />
            <p className="text-xl font-medium leading-relaxed mb-4">&ldquo;{study.quote}&rdquo;</p>
            <footer>
              <p className="font-semibold">{study.quoteName}</p>
              <p className="text-sm text-muted-foreground">{study.quoteTitle}</p>
            </footer>
          </blockquote>

        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All case studies
          </Link>
          <a
            href="https://ai.naive.nyc/signup"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get started free →
          </a>
        </div>
      </div>
    </div>
  )
}
