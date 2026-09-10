'use client'

import { useLanguage, type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const options: { value: Lang; flag: string; label: string }[] = [
  { value: 'en', flag: '🇺🇸', label: 'English' },
  { value: 'ar', flag: '🇯🇴', label: 'العربية' },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/40 p-1"
    >
      {options.map((opt) => {
        const active = lang === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            className={cn(
              'flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-medium transition-colors',
              active
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <span aria-hidden className="text-sm leading-none">
              {opt.flag}
            </span>
            <span className={opt.value === 'ar' ? 'font-sans' : ''}>{opt.label}</span>
          </button>
        )
      })}
    </div>
  )
}
