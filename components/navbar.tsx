'use client'

import { Menu, Search } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { LanguageSwitcher } from '@/components/language-switcher'

export function Navbar({
  query,
  onQueryChange,
  onOpenMenu,
}: {
  query: string
  onQueryChange: (value: string) => void
  onOpenMenu: () => void
}) {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label={t('menu')}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="relative flex-1 max-w-xl">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder={t('search')}
            aria-label={t('search')}
            className="w-full rounded-md border border-border bg-muted/40 py-2 ps-9 pe-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
          />
        </div>

        <div className="ms-auto">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
