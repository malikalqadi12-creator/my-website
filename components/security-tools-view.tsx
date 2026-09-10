'use client'

import { Shield, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { securityTools } from '@/lib/security-tools'
import { SectionHeader } from '@/components/section-header'
import { DisclaimerBanner } from '@/components/disclaimer-banner'

export function SecurityToolsView() {
  const { t, tr } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        icon={Shield}
        title={t('securityTools')}
        subtitle={t('securityToolsIntro')}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {securityTools.map((tool) => (
          <article
            key={tool.id}
            className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-mono text-base font-semibold text-foreground">
                {tool.name}
              </h2>
              <span className="rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary ring-1 ring-primary/30">
                {tr(tool.tag)}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-card-foreground">
              {tr(tool.description)}
            </p>
            <div className="mt-auto flex items-start gap-2 rounded-md border border-primary/25 bg-primary/5 px-3 py-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {t('legalUse')}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {tr(tool.legalUse)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <DisclaimerBanner />
    </div>
  )
}
