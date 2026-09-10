type Bilingual = { en: string; ar: string }

export interface Resource {
  id: string
  name: string
  url: string
  description: Bilingual
}

export const resources: Resource[] = [
  {
    id: 'nmap',
    name: 'Nmap Documentation',
    url: 'https://nmap.org/docs.html',
    description: {
      en: 'Official reference guide and man pages for the Nmap scanner.',
      ar: 'الدليل المرجعي الرسمي وصفحات الدليل لأداة Nmap.',
    },
  },
  {
    id: 'wireshark',
    name: 'Wireshark Documentation',
    url: 'https://www.wireshark.org/docs/',
    description: {
      en: 'User guide, display filter reference, and protocol documentation.',
      ar: 'دليل المستخدم ومرجع فلاتر العرض ووثائق البروتوكولات.',
    },
  },
  {
    id: 'kali',
    name: 'Kali Linux Documentation',
    url: 'https://www.kali.org/docs/',
    description: {
      en: 'Installation, tools, and usage guides for the Kali Linux distribution.',
      ar: 'أدلة التثبيت والأدوات والاستخدام لتوزيعة Kali Linux.',
    },
  },
  {
    id: 'owasp',
    name: 'OWASP',
    url: 'https://owasp.org/',
    description: {
      en: 'The Open Worldwide Application Security Project — web security standards and guides.',
      ar: 'مشروع أمان تطبيقات الويب المفتوح عالميًا — معايير وأدلة أمان الويب.',
    },
  },
  {
    id: 'mitre',
    name: 'MITRE ATT&CK',
    url: 'https://attack.mitre.org/',
    description: {
      en: 'A curated knowledge base of adversary tactics and techniques.',
      ar: 'قاعدة معرفة منظّمة لتكتيكات وتقنيات الخصوم.',
    },
  },
]
