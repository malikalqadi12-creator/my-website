'use client'

import type { Command } from '@/lib/commands'
import { CommandCard } from '@/components/command-card'

export function CommandGrid({ commands }: { commands: Command[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {commands.map((command) => (
        <CommandCard key={command.id} command={command} />
      ))}
    </div>
  )
}
