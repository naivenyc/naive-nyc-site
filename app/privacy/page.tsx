import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Naive AI collects, uses, and protects your data.',
}

const EFFECTIVE_DATE = 'March 1, 2026'
const CONTACT_EMAIL = 'privacy@naive.nyc'

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose">

          <p>
            Naive AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the
            naive.nyc website and the ai.naive.nyc platform (the &ldquo;Service&rdquo;). This
            policy explains what data we collect, how we use it, and your rights.
          </p>

          <h2>1. Information we collect</h2>

          <h3>Account data</h3>
          <p>
            When you create an account we collect your email address, name, and a hashed
            password (or OAuth tokens if you sign in with Google). We use this to authenticate
            you and send you product-related emails.
          </p>

          <h3>Website and scan data</h3>
          <p>
            To perform accessibility scans you provide us with URLs. Our crawler visits those
            URLs, renders the pages in a headless browser, and stores the resulting accessibility
            report. We do not store full page HTML; we store structured issue data derived from
            the page.
          </p>

          <h3>Usage data</h3>
          <p>
            We collect standard server logs (IP address, browser, pages visited, timestamps)
            and product analytics (feature usage, scan counts). We use this to improve the
            Service and detect abuse. We do not sell this data.
          </p>

          <h3>Payment data</h3>
          <p>
            Billing is handled by Stripe. We store your Stripe customer ID and subscription
            status, but never your full card number. Stripe&apos;s privacy policy applies to
            payment data.
          </p>

          <h3>Cookies</h3>
          <p>
            We use a session cookie to keep you logged in. We use no third-party advertising
            cookies. We may use a first-party analytics cookie (e.g., Plausible or PostHog) to
            understand aggregate product usage.
          </p>

          <h2>2. How we use your data</h2>
          <ul>
            <li>Provide, operate, and improve the Service</li>
            <li>Send transactional emails (scan results, billing receipts, security alerts)</li>
            <li>Send product update emails — you can unsubscribe at any time</li>
            <li>Detect and prevent fraud, abuse, and security incidents</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not sell your personal data to third parties.</p>

          <h2>3. Data retention</h2>
          <p>
            We retain account data for as long as your account is active. Scan reports are
            retained for 12 months on the Free plan and indefinitely on paid plans. You can
            delete your account and all associated data at any time from Settings.
          </p>

          <h2>4. Data sharing</h2>
          <p>We share data only with:</p>
          <ul>
            <li><strong>Service providers</strong> — Supabase (database), Vercel (hosting), Stripe (billing), Resend (email). Each is bound by a data processing agreement.</li>
            <li><strong>Legal authorities</strong> — when required by law or to protect our rights.</li>
          </ul>

          <h2>5. Security</h2>
          <p>
            We encrypt data in transit (TLS 1.2+) and at rest (AES-256). We use
            row-level security in our database. Access to production systems is restricted
            to authorized personnel and protected by multi-factor authentication.
          </p>

          <h2>6. Your rights</h2>
          <p>
            Depending on your jurisdiction you may have the right to access, correct, delete,
            or export your personal data, and to object to or restrict certain processing.
            To exercise these rights email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within
            30 days.
          </p>
          <p>
            If you are in the EU/EEA, you also have the right to lodge a complaint with your
            local data protection authority.
          </p>

          <h2>7. Children</h2>
          <p>
            The Service is not directed to children under 13. We do not knowingly collect
            personal data from children. If you believe we have done so, contact us and we
            will delete it promptly.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. We will notify you by email and
            update the effective date above. Continued use of the Service after changes
            constitutes acceptance of the new policy.
          </p>

          <h2>9. Contact</h2>
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
