'use client'

import { BookOpen, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { resources } from '@/lib/resources'
import { SectionHeader } from '@/components/section-header'

export function ResourcesView() {
  const { t, tr } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        icon={BookOpen}
        title={t('resources')}
        subtitle={t('resourcesIntro')}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {resources.map((res) => (
          <a
            key={res.id}
            href={res.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-base font-semibold text-foreground">
                {res.name}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {tr(res.description)}
              </span>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted/60 text-muted-foreground transition-colors group-hover:bg-primary/15 group-hover:text-primary">
              <ExternalLink className="h-4 w-4 cs-flip" />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
