'use client'

interface DocNavItem {
  slug: string
  label: string
}

interface Props {
  items: DocNavItem[]
  current: string
}

export function DocsMobileNav({ items, current }: Props) {
  return (
    <div className="md:hidden mb-6">
      <label htmlFor="doc-select" className="text-sm text-muted-foreground block mb-1">
        Navigate docs
      </label>
      <select
        id="doc-select"
        className="w-full border rounded-md px-3 py-2 text-sm bg-background"
        defaultValue={current}
        onChange={(e) => {
          window.location.href = `/docs/${e.target.value}`
        }}
      >
        {items.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}
