import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is WCAG and why does it matter?',
    answer:
      'WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility. Following WCAG 2.2 AA helps ensure your website is usable by people with disabilities and protects you from ADA, Section 508, and European Accessibility Act lawsuits. Over 1 billion people worldwide have a disability that affects how they use the web.',
  },
  {
    question: 'How accurate is the AI scanner?',
    answer:
      'Our scanner detects over 95% of automatically-detectable WCAG violations. We combine rule-based checks with AI vision models to catch issues that traditional tools miss — like complex image descriptions, logical reading order, and context-aware color contrast. Manual testing guidance is included for the ~20% of criteria that require human judgment.',
  },
  {
    question: 'Can I try it before subscribing?',
    answer:
      'Yes! The Free plan lets you scan 1 website (up to 50 pages) once a month with no credit card required. You\'ll get a full WCAG report and can experience the platform before committing.',
  },
  {
    question: 'How does CI/CD integration work?',
    answer:
      'On Pro and above plans, we provide GitHub Actions, GitLab CI, Jenkins, and CircleCI configurations. You can set thresholds (e.g., block merges with Critical issues) and the scanner runs on every pull request, posting results as PR comments and blocking if configured.',
  },
  {
    question: 'What happens if I get an ADA lawsuit?',
    answer:
      'Enterprise plans include our Litigation Support package: tamper-proof audit trails, court-ready compliance reports, a $25,000 legal defense pledge, and access to our network of accessibility attorneys. Proactive compliance is always cheaper than reactive defense.',
  },
]

export function Faq() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have another question?{' '}
            <a href="mailto:hello@naive.nyc" className="underline underline-offset-4 hover:text-foreground">
              Email us
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
