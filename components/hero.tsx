'use client'

import { ArrowRight, Shield, Terminal } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { navItems, type ViewId } from '@/lib/navigation'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { commands } from '@/lib/commands'

const terminalLines = [
  { prompt: 'nmap -sV', arg: '192.168.1.10' },
  { prompt: 'ip addr', arg: '' },
  { prompt: 'ping -c 4', arg: '8.8.8.8' },
  { prompt: 'ss -tuln', arg: '' },
]

export function Hero({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  const { t } = useLanguage()

  const quick = navItems.filter((i) => i.group === 'commands')

  return (
    <div className="flex flex-col gap-10">
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <Shield className="h-3.5 w-3.5" />
            {t('tagline')}
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-5xl">
            {t('heroTitle')}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('network')}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t('exploreCommands')}
              <ArrowRight className="h-4 w-4 cs-flip" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('securityTools')}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              <Shield className="h-4 w-4" />
              {t('browseSecurityTools')}
            </button>
          </div>
        </div>

        {/* Terminal mockup */}
        <div className="overflow-hidden rounded-xl border border-border bg-[oklch(0.12_0.012_250)] shadow-xl">
          <div className="flex items-center gap-2 border-b border-border/70 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.15_85)]/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="ms-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" />
              cybersec@lab: ~
            </span>
          </div>
          <div dir="ltr" className="flex flex-col gap-2 p-5 font-mono text-sm">
            {terminalLines.map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-foreground">{line.prompt}</span>
                {line.arg && <span className="text-accent">{line.arg}</span>}
              </div>
            ))}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-primary">$</span>
              <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick categories */}
      <section>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {t('quickCategories')}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {quick.map((item) => {
            const Icon = item.icon
            const count = commands.filter((c) => c.category === item.id).length
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 text-start transition-colors hover:border-primary/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/60 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{t(item.key)}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {count} {t('commandCount')}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <DisclaimerBanner />
    </div>
  )
}
