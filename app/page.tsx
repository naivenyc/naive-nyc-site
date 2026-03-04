import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Pricing } from '@/components/sections/pricing'
import { Faq } from '@/components/sections/faq'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faq />

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to get compliant?
          </h2>
          <p className="text-lg opacity-80 max-w-xl">
            Join thousands of teams using Naive AI to build accessible websites. Start free, no credit card required.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://ai.naive.nyc/signup">Get started free →</a>
          </Button>
        </div>
      </section>
    </>
  )
}
