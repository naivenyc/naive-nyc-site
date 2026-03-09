import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  iconOnly?: boolean
  size?: number
}

export function Logo({ className, iconOnly = false, size = 32 }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="16" cy="16" r="15" fill="currentColor" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="inherit"
          fontWeight="700"
          fontSize="18"
          fill="white"
          style={{ userSelect: 'none' }}
        >
          N
        </text>
      </svg>

      {!iconOnly && (
        <span className="font-bold text-xl tracking-tight leading-none">
          Naive AI
        </span>
      )}
    </span>
  )
}
