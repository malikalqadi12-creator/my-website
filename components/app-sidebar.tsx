'use client'

import { Shield, User, X } from 'lucide-react'
import { navItems, type ViewId } from '@/lib/navigation'
import { useLanguage } from '@/lib/i18n'
import { commandsByCategory, type CategoryId } from '@/lib/commands'
import { useFavorites } from '@/components/favorites-provider'
import { cn } from '@/lib/utils'

const categoryIds: CategoryId[] = [
  'network',
  'ping',
  'nmap',
  'wireshark',
  'dns',
  'diagnostics',
  'linux',
]

function countFor(id: ViewId, favoritesCount: number): number | null {
  if (id === 'favorites') return favoritesCount
  if ((categoryIds as string[]).includes(id)) {
    return commandsByCategory(id as CategoryId).length
  }
  return null
}

export function AppSidebar({
  activeView,
  onNavigate,
  mobileOpen,
  onCloseMobile,
}: {
  activeView: ViewId
  onNavigate: (view: ViewId) => void
  mobileOpen: boolean
  onCloseMobile: () => void
}) {
  const { t } = useLanguage()
  const { favorites } = useFavorites()

  const groups: { key: 'main' | 'commands' | 'reference'; label?: string }[] = [
    { key: 'main' },
    { key: 'commands', label: t('commands') },
    { key: 'reference', label: t('reference') },
  ]

  const nav = (
    <nav className="flex h-full flex-col gap-6 p-4">
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-start"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
          <Shield className="h-5 w-5" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            CyberSec
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            Command Center
          </span>
        </span>
      </button>

      <div className="flex flex-col gap-5 overflow-y-auto">
        {groups.map((group) => {
          const items = navItems.filter((i) => i.group === group.key)
          return (
            <div key={group.key} className="flex flex-col gap-1">
              {group.label && (
                <p className="px-3 pb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </p>
              )}
              {items.map((item) => {
                const Icon = item.icon
                const active = activeView === item.id
                const count = countFor(item.id, favorites.length)
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'bg-sidebar-accent text-foreground ring-1 ring-primary/40'
                        : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-4 w-4 shrink-0',
                        active
                          ? 'text-primary'
                          : 'text-muted-foreground group-hover:text-foreground',
                      )}
                    />
                    <span className="flex-1 truncate text-start">{t(item.key)}</span>
                    {count !== null && (
                      <span
                        className={cn(
                          'rounded px-1.5 py-0.5 font-mono text-[10px]',
                          active
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted/60 text-muted-foreground',
                        )}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          )
        })}

        {/* Developer page link */}
        <div className="flex flex-col gap-1">
          <p className="px-3 pb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {t('about')}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('developer')}
            aria-current={activeView === 'developer' ? 'page' : undefined}
            className={cn(
              'group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              activeView === 'developer'
                ? 'bg-sidebar-accent text-foreground ring-1 ring-primary/40'
                : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground',
            )}
          >
            <User
              className={cn(
                'h-4 w-4 shrink-0',
                activeView === 'developer'
                  ? 'text-primary'
                  : 'text-muted-foreground group-hover:text-foreground',
              )}
            />
            <span className="flex-1 truncate text-start">{t('developer')}</span>
          </button>
        </div>
      </div>
    </nav>
  )

  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-e border-sidebar-border bg-sidebar lg:block">
        {nav}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onCloseMobile}
            aria-hidden
          />
          <div className="absolute inset-y-0 start-0 w-72 max-w-[85%] border-e border-sidebar-border bg-sidebar shadow-2xl">
            <button
              type="button"
              onClick={onCloseMobile}
              aria-label="Close menu"
              className="absolute end-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            {nav}
          </div>
        </div>
      )}
    </>
  )
}