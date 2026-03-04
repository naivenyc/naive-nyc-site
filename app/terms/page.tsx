import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Naive AI platform.',
}

const EFFECTIVE_DATE = 'March 1, 2026'
const CONTACT_EMAIL = 'legal@naive.nyc'

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose">

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the naive.nyc
            website and the ai.naive.nyc platform (together, the &ldquo;Service&rdquo;)
            operated by Naive AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing or using
            the Service you agree to these Terms.
          </p>

          <h2>1. Accounts</h2>
          <p>
            You must be at least 13 years old to create an account. You are responsible for
            maintaining the security of your account credentials and for all activity under
            your account. Notify us immediately at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you suspect
            unauthorized access.
          </p>

          <h2>2. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service to scan websites you do not own or have explicit permission to test</li>
            <li>Attempt to circumvent rate limits, access controls, or security measures</li>
            <li>Use automated means to create accounts or access the Service beyond its intended API</li>
            <li>Resell or sublicense access to the Service without our written consent (except as permitted by the White-Label plan)</li>
            <li>Use the Service for any unlawful purpose or in violation of any third party&apos;s rights</li>
          </ul>

          <h2>3. Subscriptions and billing</h2>
          <p>
            Paid plans are billed monthly or annually in advance via Stripe. You authorize us
            to charge your payment method on a recurring basis. You may cancel your subscription
            at any time from Settings; cancellation takes effect at the end of the current
            billing period.
          </p>
          <p>
            We reserve the right to change our pricing with 30 days&apos; notice. Price changes
            will not apply to the current billing period.
          </p>
          <p>
            Refunds are provided at our discretion. If you believe you were charged in error,
            contact <a href="mailto:billing@naive.nyc">billing@naive.nyc</a> within 30 days.
          </p>

          <h2>4. Free plan limits</h2>
          <p>
            The Free plan is provided as-is with no SLA. We reserve the right to modify Free
            plan limits, features, or availability at any time with reasonable notice.
          </p>

          <h2>5. Your content</h2>
          <p>
            You retain ownership of your websites and any data you submit. By using the
            Service you grant us a limited license to access and process that data solely to
            provide the Service. We do not use your scan data to train machine learning models
            without your consent.
          </p>

          <h2>6. Our intellectual property</h2>
          <p>
            The Service, including its software, design, and documentation, is owned by Naive AI
            and protected by copyright, trademark, and other laws. You may not copy, modify,
            or distribute any part of the Service without our written permission.
          </p>

          <h2>7. Compliance disclaimers</h2>
          <p>
            Our scan results are provided for informational purposes. A passing scan score does
            not constitute a legal certification of accessibility compliance. We recommend
            combining automated scanning with manual testing and user research. We are not
            liable for legal claims arising from your website&apos;s accessibility.
          </p>
          <p>
            The Litigation Support package (Enterprise plan) provides documentation and
            referrals only. Nothing in the Service constitutes legal advice. Consult a
            qualified attorney for legal matters.
          </p>

          <h2>8. Warranty disclaimer</h2>
          <p>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
            THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
          </p>

          <h2>9. Limitation of liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NAIVE AI SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
            OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH
            THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU
            PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Naive AI and its officers, directors,
            employees, and agents from any claims, damages, or expenses (including reasonable
            attorney&apos;s fees) arising from your use of the Service, your content, or
            your violation of these Terms.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your account for violation of these Terms, non-payment,
            or for any other reason with reasonable notice. You may terminate your account at
            any time from Settings. Upon termination, your right to use the Service ends and
            we will delete your data per our retention policy.
          </p>

          <h2>12. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of New York, without regard to
            conflict of law principles. Any disputes shall be resolved in the state or federal
            courts located in New York County, New York.
          </p>

          <h2>13. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you by email and post
            the new Terms with an updated effective date. Continued use after changes
            constitutes acceptance.
          </p>

          <h2>14. Contact</h2>
          <p>
            Naive AI<br />
            New York, NY<br />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>

        </div>
      </div>
    </div>
  )
}
