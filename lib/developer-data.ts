export type SkillGroup = {
  id: string
  icon: string
  title: { en: string; ar: string }
  skills: { en: string; ar: string }[]
}

export type Experience = {
  id: string
  icon: string
  title: { en: string; ar: string }
  level: 'BTEC Level 2' | 'BTEC Level 3' | 'Personal'
  period: { en: string; ar: string }
  description: { en: string; ar: string }
  tags: { en: string; ar: string }[]
}

export const developer = {
  name: {
    en: 'Malik Abdulrahman Abdullah Alqadi',
    ar: 'مالك عبد الرحمن عبدالله القاضي',
  },
  title: {
    en: 'IT Student · BTEC Level 3',
    ar: 'طالب تكنولوجيا معلومات · BTEC Level 3',
  },
  location: {
    en: 'Amman, Jordan',
    ar: 'عمّان، الأردن',
  },
  email: 'malikalqadi12@gmail.com',
  github: 'https://GithubIcon.com/malikalqadi12-creator',
  githubHandle: 'malikalqadi12-creator',
  bio: {
    en: 'Information Technology student at BTEC Level 3, passionate about cybersecurity, networking, and software development. I built CyberSec Command Center as a bilingual reference for security professionals and students. Always learning, always building.',
    ar: 'طالب تكنولوجيا معلومات في BTEC المستوى الثالث، شغوف بالأمن السيبراني والشبكات وتطوير البرمجيات. بنيت CyberSec Command Center كمرجع ثنائي اللغة لمتخصصي الأمن السيبراني والطلاب. دائماً أتعلم، ودائماً أبني.',
  },
}

export const education = {
  degree: {
    en: 'Pearson BTEC Level 3 National Extended Diploma in Information Technology',
    ar: 'دبلوم بيرسون BTEC الوطني المستوى الثالث الموسّع في تكنولوجيا المعلومات',
  },
  institution: {
    en: 'BTEC · Pearson',
    ar: 'BTEC · بيرسون',
  },
  period: {
    en: '2025 – 2027 (Expected)',
    ar: '2025 – 2027 (متوقع)',
  },
  location: {
    en: 'Amman, Jordan',
    ar: 'عمّان، الأردن',
  },
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai-data',
    icon: 'Brain',
    title: { en: 'AI & Data Analysis', ar: 'الذكاء الاصطناعي وتحليل البيانات' },
    skills: [
      { en: 'Artificial Intelligence Fundamentals', ar: 'أساسيات الذكاء الاصطناعي' },
      { en: 'Data Analysis & Visualization', ar: 'تحليل البيانات والتصور' },
      { en: 'Machine Learning Basics', ar: 'أساسيات تعلم الآلة' },
      { en: 'Big Data Concepts', ar: 'مفاهيم البيانات الضخمة' },
    ],
  },
  {
    id: 'marketing',
    icon: 'Megaphone',
    title: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
    skills: [
      { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
      { en: 'Social Media Marketing', ar: 'التسويق عبر وسائل التواصل' },
      { en: 'SEO Basics', ar: 'أساسيات SEO' },
      { en: 'Content Strategy', ar: 'استراتيجية المحتوى' },
      { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
    ],
  },
  {
    id: 'web',
    icon: 'Globe',
    title: { en: 'Web Development', ar: 'تطوير الويب' },
    skills: [
      { en: 'HTML & CSS', ar: 'HTML و CSS' },
      { en: 'JavaScript', ar: 'JavaScript' },
      { en: 'React & Next.js', ar: 'React و Next.js' },
      { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
      { en: 'Web Hosting & Deployment', ar: 'استضافة ونشر المواقع' },
    ],
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: { en: 'Mobile App Development', ar: 'تطوير تطبيقات الهواتف' },
    skills: [
      { en: 'Mobile App Development', ar: 'تطوير تطبيقات الجوال' },
      { en: 'Cross-platform Development', ar: 'التطوير متعدد المنصات' },
      { en: 'UI/UX for Mobile', ar: 'واجهات وتجربة المستخدم للجوال' },
    ],
  },
  {
    id: 'support',
    icon: 'Headset',
    title: { en: 'IT Support & Infrastructure', ar: 'الدعم الفني والبنية التحتية' },
    skills: [
      { en: 'IT Technical Support', ar: 'الدعم الفني' },
      { en: 'Hardware & Troubleshooting', ar: 'الهاردوير وحل المشاكل' },
      { en: 'Windows & Linux', ar: 'ويندوز ولينكس' },
      { en: 'Help Desk Operations', ar: 'عمليات مكتب المساعدة' },
      { en: 'Virtualization (VirtualBox)', ar: 'الأنظمة الوهمية' },
    ],
  },
  {
    id: 'network',
    icon: 'Network',
    title: { en: 'Networking', ar: 'الشبكات' },
    skills: [
      { en: 'TCP/IP, DNS, DHCP', ar: 'TCP/IP و DNS و DHCP' },
      { en: 'Routing & Switching', ar: 'التوجيه والتحويل' },
      { en: 'Subnetting & IP Addressing', ar: 'التقسيم الفرعي وعناوين IP' },
      { en: 'Cisco Packet Tracer', ar: 'Cisco Packet Tracer' },
      { en: 'Wireless Networks', ar: 'الشبكات اللاسلكية' },
    ],
  },
  {
    id: 'security',
    icon: 'Shield',
    title: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
    skills: [
      { en: 'Network Security', ar: 'أمن الشبكات' },
      { en: 'Firewalls & Antivirus', ar: 'الجدران النارية ومكافح الفيروسات' },
      { en: 'Encryption & Cryptography', ar: 'التشفير' },
      { en: 'Ethical Hacking Basics', ar: 'أساسيات الاختراق الأخلاقي' },
      { en: 'Wireshark & Nmap', ar: 'Wireshark و Nmap' },
      { en: 'Kali Linux', ar: 'Kali Linux' },
    ],
  },
  {
    id: 'games',
    icon: 'Gamepad2',
    title: { en: 'Game Design & Development', ar: 'تصميم وتطوير الألعاب' },
    skills: [
      { en: 'Game Design Fundamentals', ar: 'أساسيات تصميم الألعاب' },
      { en: 'Game Development Basics', ar: 'أساسيات تطوير الألعاب' },
      { en: '2D/3D Assets', ar: 'عناصر ثنائية وثلاثية الأبعاد' },
      { en: 'Level Design', ar: 'تصميم المراحل' },
    ],
  },
  {
    id: 'programming',
    icon: 'Code2',
    title: { en: 'Programming', ar: 'البرمجة' },
    skills: [
      { en: 'Python', ar: 'Python' },
      { en: 'JavaScript', ar: 'JavaScript' },
      { en: 'SQL', ar: 'SQL' },
      { en: 'Object-Oriented Programming', ar: 'البرمجة الكائنية' },
      { en: 'Algorithms & Data Structures', ar: 'الخوارزميات وهياكل البيانات' },
      { en: 'Git & GitHub', ar: 'Git و GitHub' },
    ],
  },
  {
    id: 'pm',
    icon: 'ClipboardList',
    title: { en: 'Project Management', ar: 'إدارة المشاريع' },
    skills: [
      { en: 'Agile & Scrum', ar: 'Agile و Scrum' },
      { en: 'SDLC', ar: 'دورة حياة تطوير البرمجيات' },
      { en: 'Documentation & Reporting', ar: 'التوثيق والتقارير' },
      { en: 'Team Collaboration', ar: 'العمل الجماعي' },
      { en: 'Time Management', ar: 'إدارة الوقت' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: 'lan',
    icon: 'Network',
    level: 'BTEC Level 2',
    title: { en: 'LAN Network Design & Setup', ar: 'تصميم وإعداد شبكة محلية' },
    period: { en: 'BTEC Level 2', ar: 'BTEC المستوى الثاني' },
    description: {
      en: 'Designed and built a small LAN using Cisco Packet Tracer, configured IP addressing, subnetting, and connected multiple devices with routers and switches.',
      ar: 'صممت وبنيت شبكة محلية صغيرة باستخدام Cisco Packet Tracer، وأعددت عناوين IP والتقسيم الفرعي، وربطت أجهزة متعددة عبر الراوترات والسويتشات.',
    },
    tags: [
      { en: 'Packet Tracer', ar: 'Packet Tracer' },
      { en: 'TCP/IP', ar: 'TCP/IP' },
      { en: 'Subnetting', ar: 'التقسيم الفرعي' },
    ],
  },
  {
    id: 'pc-build',
    icon: 'Wrench',
    level: 'BTEC Level 2',
    title: { en: 'PC Assembly & Maintenance', ar: 'تجميع وصيانة أجهزة الكمبيوتر' },
    period: { en: 'BTEC Level 2', ar: 'BTEC المستوى الثاني' },
    description: {
      en: 'Built a PC from scratch, installed Windows and Linux, and diagnosed hardware/software issues through systematic troubleshooting.',
      ar: 'جمّعت حاسوباً من الصفر، وثبّتت ويندوز ولينكس، وشخّصت مشاكل الهاردوير والسوفتوير من خلال استكشاف منهجي للأعطال.',
    },
    tags: [
      { en: 'Hardware', ar: 'الهاردوير' },
      { en: 'Windows', ar: 'ويندوز' },
      { en: 'Linux', ar: 'لينكس' },
    ],
  },
  {
    id: 'netsec',
    icon: 'ShieldCheck',
    level: 'BTEC Level 3',
    title: { en: 'Network Security Project', ar: 'مشروع أمن الشبكات' },
    period: { en: 'BTEC Level 3', ar: 'BTEC المستوى الثالث' },
    description: {
      en: 'Analyzed vulnerabilities in a lab network using Nmap and Wireshark, configured firewalls, and applied security policies aligned with the CIA Triad.',
      ar: 'حلّلت ثغرات شبكة تجريبية باستخدام Nmap و Wireshark، وأعددت جدران حماية، وطبّقت سياسات أمنية متوافقة مع ثالوث CIA.',
    },
    tags: [
      { en: 'Nmap', ar: 'Nmap' },
      { en: 'Wireshark', ar: 'Wireshark' },
      { en: 'Firewalls', ar: 'الجدران النارية' },
    ],
  },
  {
    id: 'python-app',
    icon: 'Code2',
    level: 'BTEC Level 3',
    title: { en: 'Python Automation Tool', ar: 'أداة أتمتة بلغة Python' },
    period: { en: 'BTEC Level 3', ar: 'BTEC المستوى الثالث' },
    description: {
      en: 'Built a command-line Python application to automate routine IT tasks, using Git for version control and following clean code practices.',
      ar: 'بنيت تطبيق سطر أوامر بلغة Python لأتمتة مهام IT الروتينية، باستخدام Git للتحكم بالإصدارات واتباع ممارسات الكود النظيف.',
    },
    tags: [
      { en: 'Python', ar: 'Python' },
      { en: 'Git', ar: 'Git' },
      { en: 'Automation', ar: 'الأتمتة' },
    ],
  },
  {
    id: 'cybersec-cc',
    icon: 'Terminal',
    level: 'Personal',
    title: {
      en: 'CyberSec Command Center (This Website)',
      ar: 'CyberSec Command Center (هذا الموقع)',
    },
    period: { en: 'Personal Project · 2025', ar: 'مشروع شخصي · 2025' },
    description: {
      en: 'Designed and built a bilingual (Arabic / English) cybersecurity command reference. Developed with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui. Deployed on Vercel with CI/CD via GitHub.',
      ar: 'صممت وبنيت منصة مرجعية ثنائية اللغة (عربي / إنجليزي) لأوامر الأمن السيبراني. طُوّرت باستخدام Next.js 16 و TypeScript و Tailwind CSS و shadcn/ui. منشورة على Vercel مع نشر تلقائي عبر GitHub.',
    },
    tags: [
      { en: 'Next.js', ar: 'Next.js' },
      { en: 'TypeScript', ar: 'TypeScript' },
      { en: 'Tailwind', ar: 'Tailwind' },
      { en: 'Vercel', ar: 'Vercel' },
    ],
  },
]