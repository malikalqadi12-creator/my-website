'use client'

import { ShieldAlert } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function DisclaimerBanner() {
  const { t } = useLanguage()
  return (
    <div className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3">
      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-destructive">
          {t('disclaimerTitle')}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-destructive/90">
          {t('disclaimer')}
        </p>
      </div>
    </div>
  )
}
