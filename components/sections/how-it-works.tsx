const steps = [
  {
    number: '01',
    title: 'Scan',
    description:
      'Add your website URL and let our AI crawler scan every page. We detect WCAG 2.2 AA violations, color contrast issues, missing ARIA attributes, keyboard traps, and more — in minutes.',
  },
  {
    number: '02',
    title: 'Review & Fix',
    description:
      'Get a prioritized issue list with clear explanations and one-click remediation suggestions. Our AI generates alt text, fixes markup, and provides code snippets for developer handoff.',
  },
  {
    number: '03',
    title: 'Monitor Continuously',
    description:
      'Schedule recurring scans, integrate with CI/CD to catch regressions, and track your accessibility score over time. Get instant alerts when new issues are introduced.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Get from zero to accessible in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-border" aria-hidden="true" />

          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-4">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
