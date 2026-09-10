'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

export type Lang = 'en' | 'ar'

type Dict = Record<string, { en: string; ar: string }>

const dict: Dict = {
  appName: { en: 'CyberSec Command Center', ar: 'مركز أوامر الأمن السيبراني' },
  tagline: {
    en: 'Command reference for ethical hackers',
    ar: 'مرجع أوامر للهاكرز الأخلاقيين',
  },

  // Navigation / sections
  home: { en: 'Home', ar: 'الرئيسية' },
  network: { en: 'Network Information', ar: 'معلومات الشبكة' },
  ping: { en: 'Ping & Connectivity', ar: 'الاتصال والفحص' },
  nmap: { en: 'Nmap', ar: 'Nmap' },
  wireshark: { en: 'Wireshark', ar: 'Wireshark' },
  dns: { en: 'DNS Tools', ar: 'أدوات DNS' },
  diagnostics: { en: 'Network Diagnostics', ar: 'تشخيص الشبكة' },
  linux: { en: 'Linux / Kali Basics', ar: 'أساسيات لينكس / كالي' },
  securityTools: { en: 'Security Tools', ar: 'أدوات الأمن السيبراني' },
  resources: { en: 'Resources', ar: 'المصادر والمراجع' },
  favorites: { en: 'Favorites', ar: 'المفضلة' },
  commands: { en: 'Commands', ar: 'الأوامر' },
  reference: { en: 'Reference', ar: 'المراجع' },

  // UI
  search: { en: 'Search commands...', ar: 'ابحث عن أمر...' },
  searchResults: { en: 'Search results', ar: 'نتائج البحث' },
  noResults: { en: 'No commands found.', ar: 'لم يتم العثور على أوامر.' },
  copy: { en: 'Copy', ar: 'نسخ' },
  copied: { en: 'Copied!', ar: 'تم النسخ!' },
  description: { en: 'Description', ar: 'الوصف' },
  usage: { en: 'Usage', ar: 'الاستخدام' },
  example: { en: 'Example', ar: 'مثال' },
  platform: { en: 'Platform', ar: 'المنصة' },
  warning: { en: 'Warning', ar: 'تحذير' },
  addFavorite: { en: 'Add to favorites', ar: 'أضف إلى المفضلة' },
  removeFavorite: { en: 'Remove from favorites', ar: 'إزالة من المفضلة' },
  noFavorites: {
    en: 'No favorites yet. Tap the star on any command to save it here.',
    ar: 'لا توجد مفضلات بعد. اضغط على النجمة بجانب أي أمر لحفظه هنا.',
  },
  legalUse: { en: 'Legal use', ar: 'الاستخدام القانوني' },
  category: { en: 'Category', ar: 'التصنيف' },
  menu: { en: 'Menu', ar: 'القائمة' },
  commandCount: { en: 'commands', ar: 'أمر' },

  // Hero
  heroTitle: { en: 'Learn Cybersecurity Commands Safely', ar: 'تعلّم أوامر الأمن السيبراني بأمان' },
  heroSubtitle: {
    en: 'Your organized reference for networking, security tools, Nmap, Wireshark, Linux and Windows commands.',
    ar: 'مرجعك المنظّم للشبكات وأدوات الأمن السيبراني وأوامر Nmap و Wireshark و Linux و Windows.',
  },
  exploreCommands: { en: 'Explore Commands', ar: 'استكشف الأوامر' },
  browseSecurityTools: { en: 'Security Tools', ar: 'أدوات الأمن' },
  quickCategories: { en: 'Quick categories', ar: 'تصنيفات سريعة' },

  // Disclaimer
  disclaimerTitle: { en: 'Legal Disclaimer', ar: 'تنويه قانوني' },
  disclaimer: {
    en: 'This platform is designed for educational purposes and authorized security testing only. Never scan, intercept, attack, or test systems without explicit permission.',
    ar: 'هذه المنصة مخصّصة للأغراض التعليمية واختبارات الأمان المصرّح بها فقط. لا تقم أبدًا بفحص أو اعتراض أو مهاجمة أو اختبار أي أنظمة دون إذن صريح.',
  },
  nmapWarning: {
    en: 'Do not scan any IP, website, or network without explicit permission from its owner.',
    ar: 'لا تقم بفحص أي عنوان IP أو موقع أو شبكة دون تصريح صريح من مالكها.',
  },

  // Resources
  resourcesIntro: {
    en: 'Official documentation and trusted references for further learning.',
    ar: 'وثائق رسمية ومراجع موثوقة لمزيد من التعلّم.',
  },
  visitResource: { en: 'Open', ar: 'فتح' },

  // Security tools
  securityToolsIntro: {
    en: 'Legal, educational overview of common security tools. Use only in labs, CTFs, and on systems you own or are authorized to test.',
    ar: 'نظرة عامة قانونية وتعليمية على أدوات الأمن الشائعة. استخدمها فقط في المختبرات ومسابقات CTF وعلى الأنظمة التي تملكها أو صُرّح لك باختبارها.',
  },

  footer: {
    en: 'For educational purposes and authorized security testing only.',
    ar: 'للأغراض التعليمية واختبارات الأمان المصرّح بها فقط.',
  },

  // Section intros
  intro_network: {
    en: 'Discover IP configuration, MAC addresses, routing, and open sockets on Windows and Linux hosts.',
    ar: 'اكتشف إعدادات IP وعناوين MAC والتوجيه والمقابس المفتوحة على أجهزة Windows و Linux.',
  },
  intro_ping: {
    en: 'Test reachability and measure latency, packet loss, and TTL. Trace the route packets take to a destination.',
    ar: 'اختبر إمكانية الوصول وقِس زمن الاستجابة وفقد الحزم وقيمة TTL، وتتبّع المسار الذي تسلكه الحزم إلى الوجهة.',
  },
  intro_nmap: {
    en: 'Host discovery, port scanning, service and OS detection. Use only on networks you own or are authorized to test.',
    ar: 'اكتشاف المضيفين وفحص المنافذ واكتشاف الخدمات ونظام التشغيل. استخدمها فقط على الشبكات التي تملكها أو صُرّح لك باختبارها.',
  },
  intro_wireshark: {
    en: 'Common display filters for inspecting captured traffic by IP, protocol (TCP, UDP, DNS, HTTP), and port.',
    ar: 'فلاتر عرض شائعة لفحص حركة المرور الملتقطة حسب IP والبروتوكول (TCP، UDP، DNS، HTTP) والمنفذ.',
  },
  intro_dns: {
    en: 'Resolve domain names to IP addresses and inspect or clear the DNS cache on Windows and Linux.',
    ar: 'حوّل أسماء النطاقات إلى عناوين IP وافحص أو امسح ذاكرة DNS على Windows و Linux.',
  },
  intro_diagnostics: {
    en: 'Inspect connections, processes, adapters, and routing to troubleshoot network issues.',
    ar: 'افحص الاتصالات والعمليات والبطاقات والتوجيه لتشخيص مشكلات الشبكة.',
  },
  intro_linux: {
    en: 'Essential Linux and Kali command-line basics for navigating the filesystem and inspecting the system.',
    ar: 'أساسيات سطر أوامر Linux و Kali الضرورية للتنقّل في نظام الملفات وفحص النظام.',
  },
}

type LanguageContextValue = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (key: keyof typeof dict) => string
  /** pick the value for the current language from a bilingual field */
  tr: (field: { en: string; ar: string }) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'cybersec-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // Load persisted language on mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored === 'en' || stored === 'ar') {
      setLangState(stored)
    }
  }, [])

  // Keep <html> lang/dir in sync and persist the choice.
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'en' ? 'ar' : 'en')),
    [],
  )

  const t = useCallback(
    (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key),
    [lang],
  )
  const tr = useCallback(
    (field: { en: string; ar: string }) => field[lang],
    [lang],
  )

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir: lang === 'ar' ? 'rtl' : 'ltr',
        setLang,
        toggleLang,
        t,
        tr,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
