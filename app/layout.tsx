import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Noto_Sans_Arabic } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n'
import { FavoritesProvider } from '@/components/favorites-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
})

export const metadata: Metadata = {
  title: 'CyberSec Command Center — Cybersecurity Command Reference',
  description:
    'An organized, bilingual (English / العربية) reference for networking, Nmap, Wireshark, DNS, Linux and Windows security commands. For education and authorized testing only.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0f0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoArabic.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
