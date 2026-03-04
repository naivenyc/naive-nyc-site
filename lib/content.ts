import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface PostFrontmatter {
  title: string
  date: string
  description: string
  author?: string
  readTime?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export interface DocFrontmatter {
  title: string
  description?: string
  order?: number
}

export interface Doc {
  slug: string[]
  frontmatter: DocFrontmatter
  content: string
}

// Blog

export function getAllPosts(): Omit<Post, 'content'>[] {
  const blogDir = path.join(CONTENT_DIR, 'blog')
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8')
      const { data } = matter(raw)
      return { slug, frontmatter: data as PostFrontmatter }
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, 'blog', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, frontmatter: data as PostFrontmatter, content }
}

// Docs

const DOC_SLUGS = ['getting-started', 'scanner', 'widget', 'api']

export function getAllDocs(): Omit<Doc, 'content'>[] {
  const docsDir = path.join(CONTENT_DIR, 'docs')
  const files = fs.readdirSync(docsDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((file) => {
      const slug = [file.replace(/\.mdx$/, '')]
      const raw = fs.readFileSync(path.join(docsDir, file), 'utf-8')
      const { data } = matter(raw)
      return { slug, frontmatter: data as DocFrontmatter }
    })
    .sort((a, b) => {
      const ai = DOC_SLUGS.indexOf(a.slug[0])
      const bi = DOC_SLUGS.indexOf(b.slug[0])
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
    })
}

export function getDoc(slugParts: string[]): Doc | null {
  const slug = slugParts.join('/')
  const filePath = path.join(CONTENT_DIR, 'docs', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug: slugParts, frontmatter: data as DocFrontmatter, content }
}
