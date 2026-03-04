import { ScanSearch, Wand2, Radio, GitBranch, LayoutGrid, FileCheck } from 'lucide-react'

const features = [
  {
    icon: ScanSearch,
    title: 'AI Scanner',
    description:
      'Comprehensive WCAG 2.2 AA scanning powered by AI. Detects 200+ accessibility issues across your entire site automatically.',
  },
  {
    icon: Wand2,
    title: 'Auto-Remediation',
    description:
      'One-click fixes for common issues. Our AI suggests and applies alt text, ARIA labels, color contrast fixes, and more.',
  },
  {
    icon: Radio,
    title: 'Compliance Widget',
    description:
      'Embed a lightweight accessibility widget that lets users customize their experience — font size, contrast, motion, and more.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Integration',
    description:
      'Shift accessibility left. Block PRs that introduce new issues with our GitHub Actions, GitLab CI, and Jenkins integrations.',
  },
  {
    icon: LayoutGrid,
    title: 'Multi-site Console',
    description:
      'Manage accessibility across your entire portfolio from one dashboard. RBAC, consolidated reporting, and org-level insights.',
  },
  {
    icon: FileCheck,
    title: 'VPAT Generator',
    description:
      'Generate Voluntary Product Accessibility Templates (VPATs) and ACR documents for Section 508 and WCAG compliance audits.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need for accessibility compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial scanning to ongoing monitoring, Naive AI covers the full accessibility lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
