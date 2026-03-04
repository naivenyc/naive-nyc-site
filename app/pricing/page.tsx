import type { Metadata } from 'next'
import React from 'react'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { tiers } from '@/components/sections/pricing'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for web accessibility. Start free, scale as you grow.',
}

const comparisonFeatures = [
  {
    category: 'Scanning',
    features: [
      { name: 'Websites', values: ['1', '3', '10', '50', 'Unlimited'] },
      { name: 'Pages per scan', values: ['50', '500', 'Unlimited', 'Unlimited', 'Unlimited'] },
      { name: 'Scan frequency', values: ['Monthly', 'Weekly', 'Daily', 'Real-time', 'Real-time'] },
      { name: 'WCAG 2.2 AA', values: [true, true, true, true, true] },
      { name: 'JavaScript rendering', values: [true, true, true, true, true] },
      { name: 'Authenticated scanning', values: [false, false, true, true, true] },
    ],
  },
  {
    category: 'Remediation',
    features: [
      { name: 'Basic WCAG report', values: [true, true, true, true, true] },
      { name: 'Auto-remediation hints', values: [false, true, true, true, true] },
      { name: 'Code fix suggestions', values: [false, true, true, true, true] },
      { name: 'AI alt text generation', values: [false, false, true, true, true] },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Compliance widget', values: [false, false, true, true, true] },
      { name: 'CI/CD integration', values: [false, false, true, true, true] },
      { name: 'Slack alerts', values: [false, false, true, true, true] },
      { name: 'API access', values: [false, false, false, true, true] },
      { name: 'Webhooks', values: [false, false, false, true, true] },
    ],
  },
  {
    category: 'Reporting & Compliance',
    features: [
      { name: 'PDF reports', values: [false, false, true, true, true] },
      { name: 'VPAT generator', values: [false, false, true, true, true] },
      { name: 'Multi-site console', values: [false, false, false, true, true] },
      { name: 'Litigation support', values: [false, false, false, false, true] },
      { name: 'Audit trail', values: [false, false, false, false, true] },
    ],
  },
  {
    category: 'Team & Security',
    features: [
      { name: 'Team members', values: ['1', '3', '10', '50', 'Unlimited'] },
      { name: 'RBAC', values: [false, false, false, true, true] },
      { name: 'SSO / SAML', values: [false, false, false, false, true] },
      { name: 'White-label', values: [false, false, false, false, true] },
      { name: 'On-prem option', values: [false, false, false, false, true] },
    ],
  },
]

function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-4 w-4 text-primary mx-auto" aria-label="Included" />
    ) : (
      <X className="h-4 w-4 text-muted-foreground/40 mx-auto" aria-label="Not included" />
    )
  }
  return <span className="text-sm">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Start free. No credit card required. Save 20% with annual billing.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start mb-24">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'rounded-lg border bg-card p-6 flex flex-col gap-4',
                tier.popular && 'ring-2 ring-primary relative'
              )}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-3">
                  Most Popular
                </Badge>
              )}
              <div>
                <h2 className="font-semibold text-lg">{tier.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                )}
              </div>
              <Button
                size="sm"
                variant={tier.popular ? 'default' : 'outline'}
                asChild
                className="w-full"
              >
                <a
                  href={
                    tier.name === 'Enterprise'
                      ? 'mailto:hello@naive.nyc'
                      : 'https://ai.naive.nyc/signup'
                  }
                >
                  {tier.cta}
                </a>
              </Button>
              <ul className="space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Full feature comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" aria-label="Feature comparison by plan">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 pr-4 font-medium w-48">Feature</th>
                  {tiers.map((t) => (
                    <th key={t.name} className="text-center py-3 px-4 font-medium">
                      {t.name}
                      {t.popular && (
                        <Badge className="ml-2 text-xs" variant="default">
                          Popular
                        </Badge>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((section) => (
                  <React.Fragment key={section.category}>
                    <tr className="bg-muted/50">
                      <td
                        colSpan={6}
                        className="py-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="py-3 pr-4 text-muted-foreground">{feature.name}</td>
                        {feature.values.map((val, i) => (
                          <td key={i} className="py-3 px-4 text-center">
                            <FeatureValue value={val} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-24 text-center">
          <p className="text-muted-foreground">
            Questions?{' '}
            <a href="mailto:hello@naive.nyc" className="underline underline-offset-4 hover:text-foreground">
              Email us
            </a>{' '}
            or{' '}
            <a href="/#faq" className="underline underline-offset-4 hover:text-foreground">
              read our FAQ
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
