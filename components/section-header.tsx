'use client'

import type { LucideIcon } from 'lucide-react'

export function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  count,
  countLabel,
}: {
  icon: LucideIcon
  title: string
  subtitle?: string
  count?: number
  countLabel?: string
}) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
          <Icon className="h-5 w-5" />
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
          {title}
        </h1>
        {typeof count === 'number' && (
          <span className="rounded-md bg-muted/60 px-2 py-0.5 font-mono text-xs text-muted-foreground">
            {count} {countLabel}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  )
}
