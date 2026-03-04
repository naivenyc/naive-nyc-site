import { redirect } from 'next/navigation'

// Redirect /docs → /docs/getting-started
export default function DocsPage() {
  redirect('/docs/getting-started')
}
