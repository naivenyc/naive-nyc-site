import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For individuals exploring accessibility.',
    features: [
      '1 website',
      '50 pages/scan',
      '1 scan/month',
      'Basic WCAG report',
      'Email support',
    ],
    cta: 'Get started free',
    popular: false,
  },
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    description: 'For freelancers and small sites.',
    features: [
      '3 websites',
      '500 pages/scan',
      'Weekly scans',
      'Full WCAG 2.2 report',
      'Auto-remediation hints',
      'Priority email support',
    ],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$59',
    period: '/mo',
    description: 'For growing teams and agencies.',
    features: [
      '10 websites',
      'Unlimited pages',
      'Daily scans',
      'Compliance widget',
      'CI/CD integration',
      'VPAT generator',
      'Slack alerts',
      'Chat support',
    ],
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Business',
    price: '$199',
    period: '/mo',
    description: 'For organizations with multiple properties.',
    features: [
      '50 websites',
      'Unlimited pages',
      'Real-time monitoring',
      'Multi-site console',
      'RBAC & team management',
      'API access',
      'PDF/VPAT exports',
      'Dedicated support',
    ],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large enterprises with custom needs.',
    features: [
      'Unlimited websites',
      'SSO / SAML',
      'White-label option',
      'Litigation support',
      'SLA guarantee',
      'Custom integrations',
      'Dedicated CSM',
      'On-prem option',
    ],
    cta: 'Contact us',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free. Scale as you grow. Save 20% with annual billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
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
                <h3 className="font-semibold text-lg">{tier.name}</h3>
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
                <a href={tier.name === 'Enterprise' ? 'mailto:hello@naive.nyc' : 'https://ai.naive.nyc/signup'}>
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
      </div>
    </section>
  )
}
