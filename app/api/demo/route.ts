import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await request.json()
  const { name, email, company, teamSize, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Naive AI <noreply@naive.nyc>',
      to: 'hello@naive.nyc',
      replyTo: email,
      subject: `Demo request from ${name}${company ? ` at ${company}` : ''}`,
      html: `
        <h2>New demo request</h2>
        <table>
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          ${company ? `<tr><td><strong>Company</strong></td><td>${company}</td></tr>` : ''}
          ${teamSize ? `<tr><td><strong>Team size</strong></td><td>${teamSize}</td></tr>` : ''}
          ${message ? `<tr><td><strong>Message</strong></td><td>${message}</td></tr>` : ''}
        </table>
      `,
    })

    // Confirmation to the requester
    await resend.emails.send({
      from: 'Naive AI <noreply@naive.nyc>',
      to: email,
      subject: "We'll be in touch — Naive AI demo request",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for requesting a demo of Naive AI. We'll reach out within one business day to schedule a time.</p>
        <p>In the meantime, you can <a href="https://ai.naive.nyc/signup">start a free account</a> and run your first scan.</p>
        <p>— The Naive AI team</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Demo email error:', err)
    return NextResponse.json({ error: 'Failed to send. Please email hello@naive.nyc directly.' }, { status: 500 })
  }
}
