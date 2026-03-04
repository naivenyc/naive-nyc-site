import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
  description: 'Naive AI is on a mission to make the web accessible for the 1.3 billion people living with disabilities.',
}

const team = [
  {
    name: 'Nataliya Hanchych',
    role: 'Founder & CEO',
    bio: 'Building accessible software since 2024. Doing accessibility testing since 2020.',
  },
]

const values = [
  {
    title: 'Accessibility is a right, not a feature',
    body: 'Over 1 billion people live with a disability that affects how they use the web. We believe every person deserves equal access to information and services online — full stop.',
  },
  {
    title: 'Automation serves humans',
    body: 'Our AI handles the tedious, repetitive parts of accessibility auditing so developers can focus on the edge cases and nuances that actually require human judgment.',
  },
  {
    title: 'Compliance without complexity',
    body: 'WCAG is a 200-page spec. We translate it into plain-English issue reports, actionable fixes, and scores anyone on your team can understand.',
  },
  {
    title: 'Proactive over reactive',
    body: 'The best time to fix an accessibility issue is before your product ships — not after a lawsuit. We shift accessibility left, into design and development workflows.',
  },
]

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container max-w-3xl">

        {/* Mission */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The web should work for everyone.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Naive AI is on a mission to make the web accessible for the 1.3 billion people
            living with disabilities. We build AI-powered tools that help teams find, fix,
            and prevent accessibility issues — automatically.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We started because we were tired of seeing the same WCAG violations on the same
            websites year after year. Accessibility tooling hadn't kept up with how teams
            actually build software. We set out to change that.
          </p>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">What we believe</h2>
          <div className="space-y-8">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Team</h2>
          <div className="grid gap-6">
            {team.map((member) => (
              <div key={member.name} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold shrink-0">
                  {member.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-lg border bg-muted/40 p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
          <p className="text-muted-foreground mb-6">
            Questions, partnerships, press inquiries, or just want to say hi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <a href="mailto:hello@naive.nyc">hello@naive.nyc</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">Read the docs</Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  )
}
