import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllDocs, getDoc } from '@/lib/content'
import { DocsMobileNav } from '@/components/docs-mobile-nav'
import { cn } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  return getAllDocs().map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const doc = getDoc(slug)
  if (!doc) return {}
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  }
}

const docNav = [
  { slug: 'getting-started', label: 'Getting Started' },
  { slug: 'scanner', label: 'Scanner' },
  { slug: 'widget', label: 'Accessibility Widget' },
  { slug: 'api', label: 'API Reference' },
]

export default async function DocPage({ params }: Props) {
  const { slug } = await params
  const doc = getDoc(slug)
  if (!doc) notFound()

  const currentSlug = slug[slug.length - 1]

  return (
    <div className="container py-12">
      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 shrink-0" aria-label="Documentation navigation">
          <div className="sticky top-20">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Documentation
            </p>
            <nav>
              <ul className="space-y-1">
                {docNav.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/docs/${item.slug}`}
                      aria-current={currentSlug === item.slug ? 'page' : undefined}
                      className={cn(
                        'block text-sm px-3 py-2 rounded-md transition-colors',
                        currentSlug === item.slug
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Mobile nav */}
        <DocsMobileNav items={docNav} current={currentSlug} />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <article className="prose max-w-none">
            <MDXRemote source={doc.content} />
          </article>

          {/* Prev / Next */}
          <div className="mt-12 pt-8 border-t flex justify-between text-sm">
            {(() => {
              const idx = docNav.findIndex((d) => d.slug === currentSlug)
              const prev = idx > 0 ? docNav[idx - 1] : null
              const next = idx < docNav.length - 1 ? docNav[idx + 1] : null
              return (
                <>
                  <div>
                    {prev && (
                      <Link
                        href={`/docs/${prev.slug}`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        ← {prev.label}
                      </Link>
                    )}
                  </div>
                  <div>
                    {next && (
                      <Link
                        href={`/docs/${next.slug}`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {next.label} →
                      </Link>
                    )}
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}
