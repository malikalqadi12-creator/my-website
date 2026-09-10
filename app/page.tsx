'use client'

import { useMemo, useState } from 'react'
import { Search as SearchIcon, Star } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { commands, type CategoryId, type Command } from '@/lib/commands'
import { navItems, type ViewId } from '@/lib/navigation'
import { useFavorites } from '@/components/favorites-provider'
import { Navbar } from '@/components/navbar'
import { AppSidebar } from '@/components/app-sidebar'
import { Hero } from '@/components/hero'
import { SectionHeader } from '@/components/section-header'
import { CommandGrid } from '@/components/command-grid'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { SecurityToolsView } from '@/components/security-tools-view'
import { ResourcesView } from '@/components/resources-view'

const categoryIds: CategoryId[] = [
  'network',
  'ping',
  'nmap',
  'wireshark',
  'dns',
  'diagnostics',
  'linux',
]

function matches(command: Command, q: string): boolean {
  const haystack = [
    command.command,
    command.platform,
    command.category,
    command.description.en,
    command.description.ar,
    command.usage?.en ?? '',
    command.usage?.ar ?? '',
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(q)
}

export default function Page() {
  const { t } = useLanguage()
  const { favorites } = useFavorites()
  const [activeView, setActiveView] = useState<ViewId>('home')
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const trimmed = query.trim().toLowerCase()
  const searching = trimmed.length > 0

  const searchResults = useMemo(
    () => (searching ? commands.filter((c) => matches(c, trimmed)) : []),
    [searching, trimmed],
  )

  function navigate(view: ViewId) {
    setActiveView(view)
    setQuery('')
    setMobileOpen(false)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const favoriteCommands = commands.filter((c) => favorites.includes(c.id))

  function renderContent() {
    if (searching) {
      return (
        <div className="flex flex-col gap-6">
          <SectionHeader
            icon={SearchIcon}
            title={t('searchResults')}
            count={searchResults.length}
            countLabel={t('commandCount')}
          />
          {searchResults.length > 0 ? (
            <CommandGrid commands={searchResults} />
          ) : (
            <EmptyState message={t('noResults')} />
          )}
        </div>
      )
    }

    if (activeView === 'home') return <Hero onNavigate={navigate} />
    if (activeView === 'securityTools') return <SecurityToolsView />
    if (activeView === 'resources') return <ResourcesView />

    if (activeView === 'favorites') {
      return (
        <div className="flex flex-col gap-6">
          <SectionHeader
            icon={Star}
            title={t('favorites')}
            count={favoriteCommands.length}
            countLabel={t('commandCount')}
          />
          {favoriteCommands.length > 0 ? (
            <CommandGrid commands={favoriteCommands} />
          ) : (
            <EmptyState message={t('noFavorites')} />
          )}
        </div>
      )
    }

    // Command category views
    if ((categoryIds as string[]).includes(activeView)) {
      const cat = activeView as CategoryId
      const item = navItems.find((i) => i.id === cat)!
      const list = commands.filter((c) => c.category === cat)
      return (
        <div className="flex flex-col gap-6">
          <SectionHeader
            icon={item.icon}
            title={t(item.key)}
            subtitle={t(`intro_${cat}` as never)}
            count={list.length}
            countLabel={t('commandCount')}
          />
          {(cat === 'nmap' || cat === 'wireshark') && <DisclaimerBanner />}
          <CommandGrid commands={list} />
        </div>
      )
    }

    return null
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar
        activeView={activeView}
        onNavigate={navigate}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar
          query={query}
          onQueryChange={setQuery}
          onOpenMenu={() => setMobileOpen(true)}
        />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6 lg:px-8">
          {renderContent()}
        </main>

        <footer className="border-t border-border px-4 py-6 md:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              CyberSec Command Center
            </p>
            <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
              {t('footer')}
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-card/40 px-6 py-16 text-center">
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
        {message}
      </p>
    </div>
  )
}
