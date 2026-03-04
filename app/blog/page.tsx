import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/content'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Accessibility insights, WCAG updates, and compliance guides from the Naive AI team.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Accessibility insights, WCAG updates, and compliance guides.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet.</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="transition-shadow group-hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">Accessibility</Badge>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(post.frontmatter.date)}
                      </span>
                      {post.frontmatter.readTime && (
                        <span className="text-sm text-muted-foreground">
                          · {post.frontmatter.readTime}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:underline underline-offset-4">
                      {post.frontmatter.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {post.frontmatter.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium flex items-center gap-1 text-primary">
                      Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
