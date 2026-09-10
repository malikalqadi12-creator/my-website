'use client'

import { useState } from 'react'
import { Check, Copy, Star, TriangleAlert } from 'lucide-react'
import type { Command, Platform } from '@/lib/commands'
import { useLanguage } from '@/lib/i18n'
import { useFavorites } from '@/components/favorites-provider'
import { cn } from '@/lib/utils'

const platformStyles: Record<Platform, string> = {
  Windows: 'text-[oklch(0.72_0.14_220)] ring-[oklch(0.72_0.14_220)]/40 bg-[oklch(0.72_0.14_220)]/10',
  Linux: 'text-primary ring-primary/40 bg-primary/10',
  Kali: 'text-[oklch(0.7_0.16_60)] ring-[oklch(0.7_0.16_60)]/40 bg-[oklch(0.7_0.16_60)]/10',
  PowerShell:
    'text-[oklch(0.72_0.14_260)] ring-[oklch(0.72_0.14_260)]/40 bg-[oklch(0.72_0.14_260)]/10',
  Wireshark:
    'text-[oklch(0.75_0.13_190)] ring-[oklch(0.75_0.13_190)]/40 bg-[oklch(0.75_0.13_190)]/10',
}

export function CommandCard({ command }: { command: Command }) {
  const { t, tr } = useLanguage()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [copied, setCopied] = useState(false)

  const favorite = isFavorite(command.id)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command.command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card transition-colors hover:border-primary/40">
      {/* Header: platform + favorite */}
      <div className="flex items-center justify-between gap-2 border-b border-border/70 px-4 py-2.5">
        <span
          className={cn(
            'inline-flex items-center rounded px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ring-1',
            platformStyles[command.platform],
          )}
        >
          {command.platform}
        </span>
        <button
          type="button"
          onClick={() => toggleFavorite(command.id)}
          aria-pressed={favorite}
          aria-label={favorite ? t('removeFavorite') : t('addFavorite')}
          title={favorite ? t('removeFavorite') : t('addFavorite')}
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
            favorite
              ? 'text-[oklch(0.8_0.15_85)]'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          <Star className={cn('h-4 w-4', favorite && 'fill-current')} />
        </button>
      </div>

      {/* Command terminal line — always LTR, never translated */}
      <div className="px-4 pt-4">
        <div
          dir="ltr"
          className="flex items-center gap-2 rounded-md border border-border bg-[oklch(0.12_0.012_250)] px-3 py-2.5"
        >
          <span aria-hidden className="select-none font-mono text-sm text-primary">
            $
          </span>
          <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm text-foreground">
            {command.command}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? t('copied') : t('copy')}
            title={copied ? t('copied') : t('copy')}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 px-4 py-4">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {t('description')}
          </p>
          <p className="text-sm leading-relaxed text-card-foreground">
            {tr(command.description)}
          </p>
        </div>

        {command.usage && (
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {t('usage')}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tr(command.usage)}
            </p>
          </div>
        )}

        {command.example && (
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {t('example')}
            </p>
            <code
              dir="ltr"
              className="block overflow-x-auto rounded border border-border/70 bg-muted/40 px-2.5 py-1.5 font-mono text-xs text-accent"
            >
              {command.example}
            </code>
          </div>
        )}

        {command.warning && (
          <div className="mt-auto flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            <p className="text-xs leading-relaxed text-destructive">
              {tr(command.warning)}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
