type Bilingual = { en: string; ar: string }

export interface SecurityTool {
  id: string
  name: string
  tag: Bilingual
  description: Bilingual
  legalUse: Bilingual
}

export const securityTools: SecurityTool[] = [
  {
    id: 'nmap',
    name: 'Nmap',
    tag: { en: 'Network scanning', ar: 'فحص الشبكات' },
    description: {
      en: 'A powerful open-source scanner for host discovery, port scanning, and service/OS detection.',
      ar: 'ماسح مفتوح المصدر قوي لاكتشاف المضيفين وفحص المنافذ واكتشاف الخدمات ونظام التشغيل.',
    },
    legalUse: {
      en: 'Map devices and open ports on networks you own or are authorized to audit.',
      ar: 'رسم خريطة للأجهزة والمنافذ المفتوحة على الشبكات التي تملكها أو صُرّح لك بتدقيقها.',
    },
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    tag: { en: 'Packet analysis', ar: 'تحليل الحزم' },
    description: {
      en: 'The de-facto network protocol analyzer for capturing and inspecting live traffic.',
      ar: 'محلّل بروتوكولات الشبكة الأشهر لالتقاط حركة المرور الحيّة وفحصها.',
    },
    legalUse: {
      en: 'Analyze traffic on your own network to learn protocols and troubleshoot issues.',
      ar: 'تحليل حركة المرور على شبكتك الخاصة لتعلّم البروتوكولات وتشخيص المشكلات.',
    },
  },
  {
    id: 'burp',
    name: 'Burp Suite',
    tag: { en: 'Web app testing', ar: 'اختبار تطبيقات الويب' },
    description: {
      en: 'An integrated platform for testing the security of web applications via an intercepting proxy.',
      ar: 'منصة متكاملة لاختبار أمان تطبيقات الويب عبر بروكسي اعتراضي.',
    },
    legalUse: {
      en: 'Test web apps you own or have written authorization to assess.',
      ar: 'اختبار تطبيقات الويب التي تملكها أو لديك تصريح مكتوب لتقييمها.',
    },
  },
  {
    id: 'zap',
    name: 'OWASP ZAP',
    tag: { en: 'Web app scanner', ar: 'ماسح تطبيقات الويب' },
    description: {
      en: 'A free, open-source web application security scanner maintained by OWASP.',
      ar: 'ماسح أمان لتطبيقات الويب مجاني ومفتوح المصدر تديره منظمة OWASP.',
    },
    legalUse: {
      en: 'Scan applications in your own lab or with explicit permission.',
      ar: 'فحص التطبيقات في مختبرك الخاص أو بإذن صريح.',
    },
  },
  {
    id: 'nikto',
    name: 'Nikto',
    tag: { en: 'Web server scanner', ar: 'ماسح خوادم الويب' },
    description: {
      en: 'Scans web servers for known vulnerabilities, outdated software, and misconfigurations.',
      ar: 'يفحص خوادم الويب بحثًا عن الثغرات المعروفة والبرامج القديمة والإعدادات الخاطئة.',
    },
    legalUse: {
      en: 'Audit servers you administer or are contracted to test.',
      ar: 'تدقيق الخوادم التي تديرها أو المتعاقد على اختبارها.',
    },
  },
  {
    id: 'john',
    name: 'John the Ripper',
    tag: { en: 'Password auditing', ar: 'تدقيق كلمات المرور' },
    description: {
      en: 'A fast password-strength auditing and recovery tool for many hash types.',
      ar: 'أداة سريعة لتدقيق قوة كلمات المرور واستعادتها لأنواع عديدة من الهاشات.',
    },
    legalUse: {
      en: 'Assess password strength on accounts and hashes you are authorized to test.',
      ar: 'تقييم قوة كلمات المرور على الحسابات والهاشات المصرّح لك باختبارها.',
    },
  },
  {
    id: 'hydra',
    name: 'Hydra',
    tag: { en: 'Login auditing', ar: 'تدقيق تسجيل الدخول' },
    description: {
      en: 'A parallelized login auditing tool supporting many network protocols.',
      ar: 'أداة تدقيق تسجيل دخول متوازية تدعم العديد من بروتوكولات الشبكة.',
    },
    legalUse: {
      en: 'Test authentication resilience only on systems you own or are permitted to assess.',
      ar: 'اختبار متانة المصادقة فقط على الأنظمة التي تملكها أو يُسمح لك بتقييمها.',
    },
  },
  {
    id: 'metasploit',
    name: 'Metasploit Framework',
    tag: { en: 'Exploitation framework', ar: 'إطار اختبار الاختراق' },
    description: {
      en: 'A framework for developing, testing, and running security assessments in controlled labs.',
      ar: 'إطار عمل لتطوير واختبار وتشغيل تقييمات الأمان في مختبرات محكومة.',
    },
    legalUse: {
      en: 'Practice in isolated lab environments or authorized penetration tests.',
      ar: 'التدرّب في بيئات مختبرية معزولة أو اختبارات اختراق مصرّح بها.',
    },
  },
  {
    id: 'nessus',
    name: 'Nessus',
    tag: { en: 'Vulnerability scanner', ar: 'ماسح الثغرات' },
    description: {
      en: 'A widely used commercial vulnerability scanner for identifying known weaknesses.',
      ar: 'ماسح ثغرات تجاري واسع الاستخدام لتحديد نقاط الضعف المعروفة.',
    },
    legalUse: {
      en: 'Scan assets within your organization or engagement scope.',
      ar: 'فحص الأصول ضمن مؤسستك أو نطاق المهمة المتفق عليه.',
    },
  },
  {
    id: 'openvas',
    name: 'OpenVAS / Greenbone',
    tag: { en: 'Vulnerability scanner', ar: 'ماسح الثغرات' },
    description: {
      en: 'An open-source vulnerability management and scanning solution.',
      ar: 'حل مفتوح المصدر لإدارة الثغرات وفحصها.',
    },
    legalUse: {
      en: 'Assess vulnerabilities on authorized targets and internal labs.',
      ar: 'تقييم الثغرات على الأهداف المصرّح بها والمختبرات الداخلية.',
    },
  },
  {
    id: 'netcat',
    name: 'Netcat',
    tag: { en: 'Networking utility', ar: 'أداة شبكات' },
    description: {
      en: 'The “Swiss-army knife” for reading and writing data across TCP/UDP connections.',
      ar: '«سكين الجيش السويسري» لقراءة وكتابة البيانات عبر اتصالات TCP/UDP.',
    },
    legalUse: {
      en: 'Debug services, transfer files, and learn networking in your own environment.',
      ar: 'تصحيح الخدمات ونقل الملفات وتعلّم الشبكات في بيئتك الخاصة.',
    },
  },
]
