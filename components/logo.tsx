import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  iconOnly?: boolean
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      {/* Icon mark: stylised eye / scan circle */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Outer ring */}
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
        {/* Inner filled circle */}
        <circle cx="16" cy="16" r="5" fill="currentColor" />
        {/* Scan line top-left to bottom-right */}
        <line
          x1="6"
          y1="6"
          x2="12"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="20"
          x2="26"
          y2="26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {!iconOnly && (
        <span className="font-bold text-xl tracking-tight leading-none">
          Naive AI
        </span>
      )}
    </span>
  )
}
