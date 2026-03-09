import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Scale, AlertCircle } from 'lucide-react'

const stats = [
  {
    icon: AlertCircle,
    value: '97%',
    label: 'of websites are non-compliant with WCAG',
  },
  {
    icon: TrendingUp,
    value: '400%',
    label: 'rise in ADA web lawsuits since 2018',
  },
  {
    icon: Scale,
    value: '$20k+',
    label: 'average ADA lawsuit settlement cost',
  },
]

export function Hero() {
  return (
    <section className="container flex flex-col items-center text-center py-24 md:py-32 gap-8">
      <Badge variant="secondary" className="px-4 py-1.5 text-sm">
        WCAG 2.2 AA Compliance Made Simple
      </Badge>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
        Make Your Website Accessible —{' '}
        <span className="text-muted-foreground">Automatically.</span>
      </h1>

      <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
        AI-powered WCAG scanning, auto-remediation, and compliance monitoring for teams of any size.
        Stop worrying about lawsuits. Start building for everyone.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button size="lg" asChild className="gap-2">
          <a href="https://ai.naive.nyc/signup">
            Get started free <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/demo">Book a demo</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6"
          >
            <stat.icon className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
            <span className="text-3xl font-bold">{stat.value}</span>
            <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
