import {
  Home,
  Network,
  Radio,
  Radar,
  Waves,
  Globe,
  Activity,
  Terminal,
  Shield,
  BookOpen,
  Star,
  type LucideIcon,
} from 'lucide-react'
import type { CategoryId } from './commands'

export type ViewId =
  | 'home'
  | CategoryId
  | 'securityTools'
  | 'resources'
  | 'favorites'

export interface NavItem {
  id: ViewId
  /** translation key in the i18n dictionary */
  key:
    | 'home'
    | 'network'
    | 'ping'
    | 'nmap'
    | 'wireshark'
    | 'dns'
    | 'diagnostics'
    | 'linux'
    | 'securityTools'
    | 'resources'
    | 'favorites'
  icon: LucideIcon
  /** group heading key, used to divide the sidebar */
  group: 'main' | 'commands' | 'reference'
}

export const navItems: NavItem[] = [
  { id: 'home', key: 'home', icon: Home, group: 'main' },
  { id: 'network', key: 'network', icon: Network, group: 'commands' },
  { id: 'ping', key: 'ping', icon: Radio, group: 'commands' },
  { id: 'nmap', key: 'nmap', icon: Radar, group: 'commands' },
  { id: 'wireshark', key: 'wireshark', icon: Waves, group: 'commands' },
  { id: 'dns', key: 'dns', icon: Globe, group: 'commands' },
  { id: 'diagnostics', key: 'diagnostics', icon: Activity, group: 'commands' },
  { id: 'linux', key: 'linux', icon: Terminal, group: 'commands' },
  { id: 'securityTools', key: 'securityTools', icon: Shield, group: 'reference' },
  { id: 'resources', key: 'resources', icon: BookOpen, group: 'reference' },
  { id: 'favorites', key: 'favorites', icon: Star, group: 'reference' },
]
