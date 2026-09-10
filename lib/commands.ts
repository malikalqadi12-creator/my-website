export type CategoryId =
  | 'network'
  | 'ping'
  | 'nmap'
  | 'wireshark'
  | 'dns'
  | 'diagnostics'
  | 'linux'

export type Platform =
  | 'Windows'
  | 'Linux'
  | 'Kali'
  | 'PowerShell'
  | 'Wireshark'

type Bilingual = { en: string; ar: string }

export interface Command {
  id: string
  category: CategoryId
  platform: Platform
  command: string
  description: Bilingual
  usage?: Bilingual
  example?: string
  warning?: Bilingual
}

const nmapWarning: Bilingual = {
  en: 'Only run against hosts and networks you own or are explicitly authorized to test.',
  ar: 'شغّلها فقط على الأجهزة والشبكات التي تملكها أو صُرّح لك صراحةً باختبارها.',
}

export const commands: Command[] = [
  // ── Network Information · Windows ────────────────────────────
  {
    id: 'ipconfig',
    category: 'network',
    platform: 'Windows',
    command: 'ipconfig',
    description: {
      en: 'Displays the basic IP configuration (IPv4, subnet mask, default gateway) for each network adapter.',
      ar: 'يعرض إعدادات IP الأساسية (IPv4 وقناع الشبكة والبوابة الافتراضية) لكل بطاقة شبكة.',
    },
    example: 'ipconfig',
  },
  {
    id: 'ipconfig-all',
    category: 'network',
    platform: 'Windows',
    command: 'ipconfig /all',
    description: {
      en: 'Shows the full network configuration including MAC address, DHCP, and DNS servers.',
      ar: 'يعرض إعدادات الشبكة الكاملة بما في ذلك عنوان MAC و DHCP وخوادم DNS.',
    },
    example: 'ipconfig /all',
  },
  {
    id: 'ipconfig-release',
    category: 'network',
    platform: 'Windows',
    command: 'ipconfig /release',
    description: {
      en: 'Releases the current DHCP-assigned IPv4 address for the adapter.',
      ar: 'يحرّر عنوان IPv4 الحالي المخصّص عبر DHCP للبطاقة.',
    },
  },
  {
    id: 'ipconfig-renew',
    category: 'network',
    platform: 'Windows',
    command: 'ipconfig /renew',
    description: {
      en: 'Requests a new IPv4 address from the DHCP server.',
      ar: 'يطلب عنوان IPv4 جديدًا من خادم DHCP.',
    },
  },
  {
    id: 'ipconfig-flushdns',
    category: 'network',
    platform: 'Windows',
    command: 'ipconfig /flushdns',
    description: {
      en: 'Clears the local DNS resolver cache.',
      ar: 'يمسح ذاكرة التخزين المؤقت لمحلّل DNS المحلي.',
    },
  },
  {
    id: 'hostname-win',
    category: 'network',
    platform: 'Windows',
    command: 'hostname',
    description: {
      en: 'Prints the name of the current machine.',
      ar: 'يطبع اسم الجهاز الحالي.',
    },
  },
  {
    id: 'getmac',
    category: 'network',
    platform: 'Windows',
    command: 'getmac',
    description: {
      en: 'Lists the MAC (physical) addresses of the network adapters.',
      ar: 'يعرض عناوين MAC (الفيزيائية) لبطاقات الشبكة.',
    },
  },
  {
    id: 'arp-a-win',
    category: 'network',
    platform: 'Windows',
    command: 'arp -a',
    description: {
      en: 'Displays the ARP table mapping IP addresses to MAC addresses on the local network.',
      ar: 'يعرض جدول ARP الذي يربط عناوين IP بعناوين MAC على الشبكة المحلية.',
    },
  },
  {
    id: 'netstat-ano-win',
    category: 'network',
    platform: 'Windows',
    command: 'netstat -ano',
    description: {
      en: 'Shows all active connections and listening ports with the owning process ID (PID).',
      ar: 'يعرض جميع الاتصالات النشطة والمنافذ المستمعة مع معرّف العملية (PID) المالكة.',
    },
  },
  // ── Network Information · Linux ──────────────────────────────
  {
    id: 'ip-addr',
    category: 'network',
    platform: 'Linux',
    command: 'ip addr',
    description: {
      en: 'Displays IP addresses and details for all network interfaces (modern replacement for ifconfig).',
      ar: 'يعرض عناوين IP وتفاصيل جميع واجهات الشبكة (البديل الحديث لأمر ifconfig).',
    },
  },
  {
    id: 'ifconfig',
    category: 'network',
    platform: 'Linux',
    command: 'ifconfig',
    description: {
      en: 'Shows interface configuration and IP addresses (legacy tool, from net-tools).',
      ar: 'يعرض إعدادات الواجهات وعناوين IP (أداة قديمة من حزمة net-tools).',
    },
  },
  {
    id: 'hostname-linux',
    category: 'network',
    platform: 'Linux',
    command: 'hostname',
    description: {
      en: 'Prints the system hostname.',
      ar: 'يطبع اسم مضيف النظام.',
    },
  },
  {
    id: 'hostname-i',
    category: 'network',
    platform: 'Linux',
    command: 'hostname -I',
    description: {
      en: 'Prints all IP addresses assigned to the host.',
      ar: 'يطبع جميع عناوين IP المخصّصة للمضيف.',
    },
  },
  {
    id: 'ip-route',
    category: 'network',
    platform: 'Linux',
    command: 'ip route',
    description: {
      en: 'Displays the kernel routing table, including the default gateway.',
      ar: 'يعرض جدول التوجيه في النواة بما في ذلك البوابة الافتراضية.',
    },
  },
  {
    id: 'arp-a-linux',
    category: 'network',
    platform: 'Linux',
    command: 'arp -a',
    description: {
      en: 'Displays the ARP cache mapping IP addresses to MAC addresses.',
      ar: 'يعرض ذاكرة ARP التي تربط عناوين IP بعناوين MAC.',
    },
  },
  {
    id: 'ss-tuln',
    category: 'network',
    platform: 'Linux',
    command: 'ss -tuln',
    description: {
      en: 'Lists listening TCP and UDP sockets without resolving names (fast, modern netstat).',
      ar: 'يعرض مقابس TCP و UDP المستمعة دون تحويل الأسماء (بديل حديث وسريع لأمر netstat).',
    },
  },
  {
    id: 'netstat-tuln',
    category: 'network',
    platform: 'Linux',
    command: 'netstat -tuln',
    description: {
      en: 'Lists listening TCP/UDP ports numerically (legacy net-tools).',
      ar: 'يعرض منافذ TCP/UDP المستمعة بشكل رقمي (أداة net-tools القديمة).',
    },
  },

  // ── Ping & Connectivity · Windows ───────────────────────────
  {
    id: 'ping-google-win',
    category: 'ping',
    platform: 'Windows',
    command: 'ping google.com',
    description: {
      en: 'Sends ICMP echo requests to a hostname to test reachability and measure latency.',
      ar: 'يرسل طلبات ICMP echo إلى اسم مضيف لاختبار إمكانية الوصول وقياس زمن الاستجابة.',
    },
    usage: {
      en: 'Latency is the round-trip time; packet loss indicates connectivity problems; TTL hints at the number of hops.',
      ar: 'زمن الاستجابة هو زمن الذهاب والإياب؛ وفقد الحزم يدل على مشكلات في الاتصال؛ وقيمة TTL تشير إلى عدد القفزات.',
    },
  },
  {
    id: 'ping-8888-win',
    category: 'ping',
    platform: 'Windows',
    command: 'ping 8.8.8.8',
    description: {
      en: 'Pings an IP address directly to test connectivity without relying on DNS.',
      ar: 'يفحص عنوان IP مباشرة لاختبار الاتصال دون الاعتماد على DNS.',
    },
  },
  {
    id: 'ping-n4-win',
    category: 'ping',
    platform: 'Windows',
    command: 'ping -n 4 8.8.8.8',
    description: {
      en: 'Sends exactly 4 echo requests instead of the default 4 (continuous on some systems).',
      ar: 'يرسل 4 طلبات echo بالضبط بدلاً من الوضع الافتراضي.',
    },
  },
  {
    id: 'tracert-win',
    category: 'ping',
    platform: 'Windows',
    command: 'tracert google.com',
    description: {
      en: 'Traces the network path (each router hop) between your device and the destination.',
      ar: 'يتتبّع مسار الشبكة (كل قفزة موجّه) بين جهازك والوجهة.',
    },
  },
  {
    id: 'pathping-win',
    category: 'ping',
    platform: 'Windows',
    command: 'pathping google.com',
    description: {
      en: 'Combines ping and tracert, reporting per-hop packet loss over time.',
      ar: 'يجمع بين ping و tracert ويعرض فقد الحزم عند كل قفزة عبر الزمن.',
    },
  },
  // ── Ping & Connectivity · Linux ─────────────────────────────
  {
    id: 'ping-8888-linux',
    category: 'ping',
    platform: 'Linux',
    command: 'ping 8.8.8.8',
    description: {
      en: 'Continuously pings an IP address until interrupted with Ctrl+C.',
      ar: 'يفحص عنوان IP بشكل مستمر حتى يتم إيقافه بالضغط على Ctrl+C.',
    },
  },
  {
    id: 'ping-c4-linux',
    category: 'ping',
    platform: 'Linux',
    command: 'ping -c 4 8.8.8.8',
    description: {
      en: 'Sends exactly 4 echo requests then stops.',
      ar: 'يرسل 4 طلبات echo بالضبط ثم يتوقف.',
    },
  },
  {
    id: 'traceroute-linux',
    category: 'ping',
    platform: 'Linux',
    command: 'traceroute google.com',
    description: {
      en: 'Traces each router hop along the path to the destination host.',
      ar: 'يتتبّع كل قفزة موجّه على المسار إلى المضيف الوجهة.',
    },
  },

  // ── Nmap ────────────────────────────────────────────────────
  {
    id: 'nmap-basic',
    category: 'nmap',
    platform: 'Kali',
    command: 'nmap <target>',
    description: {
      en: 'Runs a default scan of the most common 1000 TCP ports on the target.',
      ar: 'يشغّل فحصًا افتراضيًا لأكثر 1000 منفذ TCP شيوعًا على الهدف.',
    },
    example: 'nmap 192.168.1.10',
    warning: nmapWarning,
  },
  {
    id: 'nmap-sn',
    category: 'nmap',
    platform: 'Kali',
    command: 'nmap -sn <authorized-network>',
    description: {
      en: 'Host discovery (ping scan) only — finds live hosts without scanning ports.',
      ar: 'اكتشاف المضيفين (فحص ping) فقط — يعثر على الأجهزة الحيّة دون فحص المنافذ.',
    },
    usage: {
      en: '-sn disables port scanning and performs only host discovery.',
      ar: 'الخيار ‎-sn‎ يعطّل فحص المنافذ ويكتفي باكتشاف المضيفين.',
    },
    example: 'nmap -sn 192.168.1.0/24',
    warning: nmapWarning,
  },
  {
    id: 'nmap-sv',
    category: 'nmap',
    platform: 'Kali',
    command: 'nmap -sV <target>',
    description: {
      en: 'Detects the service and version running on each open port.',
      ar: 'يكتشف الخدمة والإصدار الذي يعمل على كل منفذ مفتوح.',
    },
    usage: {
      en: '-sV enables service/version detection via banner probing.',
      ar: 'الخيار ‎-sV‎ يفعّل اكتشاف الخدمة/الإصدار عبر فحص اللافتات (banners).',
    },
    example: 'nmap -sV 192.168.1.10',
    warning: nmapWarning,
  },
  {
    id: 'nmap-o',
    category: 'nmap',
    platform: 'Kali',
    command: 'nmap -O <target>',
    description: {
      en: 'Attempts to identify the target operating system via TCP/IP fingerprinting.',
      ar: 'يحاول تحديد نظام تشغيل الهدف عبر بصمة TCP/IP.',
    },
    usage: {
      en: '-O enables OS detection and usually requires root privileges.',
      ar: 'الخيار ‎-O‎ يفعّل اكتشاف نظام التشغيل ويتطلب عادةً صلاحيات الجذر (root).',
    },
    example: 'nmap -O 192.168.1.10',
    warning: nmapWarning,
  },
  {
    id: 'nmap-p',
    category: 'nmap',
    platform: 'Kali',
    command: 'nmap -p 80,443 <target>',
    description: {
      en: 'Scans only the specified ports (here HTTP 80 and HTTPS 443).',
      ar: 'يفحص المنافذ المحددة فقط (هنا HTTP 80 و HTTPS 443).',
    },
    usage: {
      en: '-p selects specific ports or ranges to scan.',
      ar: 'الخيار ‎-p‎ يحدّد منافذ أو نطاقات محددة للفحص.',
    },
    example: 'nmap -p 80,443 192.168.1.10',
    warning: nmapWarning,
  },
  {
    id: 'nmap-pall',
    category: 'nmap',
    platform: 'Kali',
    command: 'nmap -p- <target>',
    description: {
      en: 'Scans all 65,535 TCP ports (slower but thorough).',
      ar: 'يفحص جميع منافذ TCP الـ 65,535 (أبطأ لكنه شامل).',
    },
    usage: {
      en: '-p- expands the scan to the full port range 1-65535.',
      ar: 'الخيار ‎-p-‎ يوسّع الفحص إلى نطاق المنافذ الكامل 1-65535.',
    },
    example: 'nmap -p- 192.168.1.10',
    warning: nmapWarning,
  },
  {
    id: 'nmap-a',
    category: 'nmap',
    platform: 'Kali',
    command: 'nmap -A <target>',
    description: {
      en: 'Aggressive scan combining OS detection, version detection, script scanning, and traceroute.',
      ar: 'فحص شامل يجمع بين اكتشاف نظام التشغيل واكتشاف الإصدار وفحص السكربتات وتتبّع المسار.',
    },
    usage: {
      en: '-A is noisy and easily detected — use only in labs or authorized engagements.',
      ar: 'الخيار ‎-A‎ صاخب ويسهل اكتشافه — استخدمه فقط في المختبرات أو المهام المصرّح بها.',
    },
    example: 'nmap -A 192.168.1.10',
    warning: nmapWarning,
  },

  // ── Wireshark display filters ───────────────────────────────
  {
    id: 'ws-ipaddr',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'ip.addr == 192.168.1.10',
    description: {
      en: 'Shows only packets to or from the specified IP address.',
      ar: 'يعرض فقط الحزم المتّجهة من أو إلى عنوان IP المحدّد.',
    },
  },
  {
    id: 'ws-tcp',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'tcp',
    description: {
      en: 'Displays all TCP traffic.',
      ar: 'يعرض جميع حركة مرور TCP.',
    },
  },
  {
    id: 'ws-udp',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'udp',
    description: {
      en: 'Displays all UDP traffic.',
      ar: 'يعرض جميع حركة مرور UDP.',
    },
  },
  {
    id: 'ws-dns',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'dns',
    description: {
      en: 'Displays only DNS queries and responses.',
      ar: 'يعرض فقط استعلامات وردود DNS.',
    },
  },
  {
    id: 'ws-http',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'http',
    description: {
      en: 'Displays unencrypted HTTP traffic.',
      ar: 'يعرض حركة مرور HTTP غير المشفّرة.',
    },
  },
  {
    id: 'ws-tcp80',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'tcp.port == 80',
    description: {
      en: 'Filters traffic on TCP port 80 (HTTP).',
      ar: 'يصفّي حركة المرور على منفذ TCP رقم 80 (HTTP).',
    },
  },
  {
    id: 'ws-tcp443',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'tcp.port == 443',
    description: {
      en: 'Filters traffic on TCP port 443 (HTTPS/TLS).',
      ar: 'يصفّي حركة المرور على منفذ TCP رقم 443 (HTTPS/TLS).',
    },
  },
  {
    id: 'ws-icmp',
    category: 'wireshark',
    platform: 'Wireshark',
    command: 'icmp',
    description: {
      en: 'Displays ICMP packets such as ping requests and replies.',
      ar: 'يعرض حزم ICMP مثل طلبات وردود ping.',
    },
  },

  // ── DNS Tools · Windows ─────────────────────────────────────
  {
    id: 'nslookup-win',
    category: 'dns',
    platform: 'Windows',
    command: 'nslookup google.com',
    description: {
      en: 'Resolves a domain name to its IP address using the configured DNS server.',
      ar: 'يحوّل اسم النطاق إلى عنوان IP الخاص به باستخدام خادم DNS المُعَد.',
    },
  },
  {
    id: 'ipconfig-displaydns',
    category: 'dns',
    platform: 'Windows',
    command: 'ipconfig /displaydns',
    description: {
      en: 'Displays the contents of the local DNS resolver cache.',
      ar: 'يعرض محتوى ذاكرة التخزين المؤقت لمحلّل DNS المحلي.',
    },
  },
  {
    id: 'ipconfig-flushdns-dns',
    category: 'dns',
    platform: 'Windows',
    command: 'ipconfig /flushdns',
    description: {
      en: 'Clears cached DNS records, forcing fresh lookups.',
      ar: 'يمسح سجلات DNS المخزّنة مؤقتًا، مما يفرض استعلامات جديدة.',
    },
  },
  // ── DNS Tools · Linux ───────────────────────────────────────
  {
    id: 'nslookup-linux',
    category: 'dns',
    platform: 'Linux',
    command: 'nslookup google.com',
    description: {
      en: 'Queries DNS to resolve a domain to an IP address.',
      ar: 'يستعلم DNS لتحويل نطاق إلى عنوان IP.',
    },
  },
  {
    id: 'dig',
    category: 'dns',
    platform: 'Linux',
    command: 'dig google.com',
    description: {
      en: 'Detailed DNS lookup showing record types, TTLs, and the answer section.',
      ar: 'استعلام DNS مفصّل يعرض أنواع السجلات وقيم TTL وقسم الإجابة.',
    },
  },
  {
    id: 'host',
    category: 'dns',
    platform: 'Linux',
    command: 'host google.com',
    description: {
      en: 'Simple utility to look up A, AAAA, and MX records for a domain.',
      ar: 'أداة بسيطة للبحث عن سجلات A و AAAA و MX لنطاق ما.',
    },
  },

  // ── Network Diagnostics · Windows ───────────────────────────
  {
    id: 'netstat-ano-diag',
    category: 'diagnostics',
    platform: 'Windows',
    command: 'netstat -ano',
    description: {
      en: 'Lists all connections and listening ports with process IDs for troubleshooting.',
      ar: 'يعرض جميع الاتصالات والمنافذ المستمعة مع معرّفات العمليات لتشخيص المشكلات.',
    },
  },
  {
    id: 'netstat-an-diag',
    category: 'diagnostics',
    platform: 'Windows',
    command: 'netstat -an',
    description: {
      en: 'Shows active connections and ports numerically without process IDs.',
      ar: 'يعرض الاتصالات والمنافذ النشطة بشكل رقمي دون معرّفات العمليات.',
    },
  },
  {
    id: 'tasklist',
    category: 'diagnostics',
    platform: 'Windows',
    command: 'tasklist',
    description: {
      en: 'Lists all running processes with their PIDs and memory usage.',
      ar: 'يعرض جميع العمليات قيد التشغيل مع معرّفاتها واستهلاكها للذاكرة.',
    },
  },
  {
    id: 'tasklist-svc',
    category: 'diagnostics',
    platform: 'Windows',
    command: 'tasklist /svc',
    description: {
      en: 'Lists processes together with the services hosted by each one.',
      ar: 'يعرض العمليات مع الخدمات التي تستضيفها كل عملية.',
    },
  },
  // ── Network Diagnostics · PowerShell ────────────────────────
  {
    id: 'get-netipaddress',
    category: 'diagnostics',
    platform: 'PowerShell',
    command: 'Get-NetIPAddress',
    description: {
      en: 'Returns detailed IP address configuration objects for all interfaces.',
      ar: 'يعيد كائنات مفصّلة لإعدادات عناوين IP لجميع الواجهات.',
    },
  },
  {
    id: 'get-nettcpconnection',
    category: 'diagnostics',
    platform: 'PowerShell',
    command: 'Get-NetTCPConnection',
    description: {
      en: 'Lists current TCP connections with local/remote endpoints and state.',
      ar: 'يعرض اتصالات TCP الحالية مع النقاط المحلية/البعيدة وحالتها.',
    },
  },
  {
    id: 'test-netconnection',
    category: 'diagnostics',
    platform: 'PowerShell',
    command: 'Test-NetConnection google.com',
    description: {
      en: 'Tests connectivity to a host, including ping, route, and optional port checks.',
      ar: 'يختبر الاتصال بمضيف، بما في ذلك ping والمسار وفحص المنافذ اختياريًا.',
    },
  },
  {
    id: 'get-netadapter',
    category: 'diagnostics',
    platform: 'PowerShell',
    command: 'Get-NetAdapter',
    description: {
      en: 'Lists network adapters with their status, speed, and MAC address.',
      ar: 'يعرض بطاقات الشبكة مع حالتها وسرعتها وعنوان MAC.',
    },
  },
  // ── Network Diagnostics · Linux ─────────────────────────────
  {
    id: 'ss-tulnp',
    category: 'diagnostics',
    platform: 'Linux',
    command: 'ss -tulnp',
    description: {
      en: 'Lists listening TCP/UDP sockets with the owning process (requires privileges).',
      ar: 'يعرض مقابس TCP/UDP المستمعة مع العملية المالكة (يتطلب صلاحيات).',
    },
  },
  {
    id: 'ip-route-diag',
    category: 'diagnostics',
    platform: 'Linux',
    command: 'ip route',
    description: {
      en: 'Displays the routing table to diagnose gateway and path issues.',
      ar: 'يعرض جدول التوجيه لتشخيص مشكلات البوابة والمسار.',
    },
  },

  // ── Linux / Kali Basics ─────────────────────────────────────
  {
    id: 'pwd',
    category: 'linux',
    platform: 'Linux',
    command: 'pwd',
    description: {
      en: 'Prints the current working directory.',
      ar: 'يطبع مسار المجلد الحالي.',
    },
  },
  {
    id: 'ls',
    category: 'linux',
    platform: 'Linux',
    command: 'ls',
    description: {
      en: 'Lists files and directories in the current location.',
      ar: 'يعرض الملفات والمجلدات في الموقع الحالي.',
    },
  },
  {
    id: 'ls-la',
    category: 'linux',
    platform: 'Linux',
    command: 'ls -la',
    description: {
      en: 'Lists all entries (including hidden) in long format with permissions and owners.',
      ar: 'يعرض جميع العناصر (بما في ذلك المخفية) بصيغة طويلة مع الصلاحيات والمالكين.',
    },
  },
  {
    id: 'cd',
    category: 'linux',
    platform: 'Linux',
    command: 'cd',
    description: {
      en: 'Changes the current directory to the given path.',
      ar: 'يغيّر المجلد الحالي إلى المسار المحدّد.',
    },
    example: 'cd /var/log',
  },
  {
    id: 'mkdir',
    category: 'linux',
    platform: 'Linux',
    command: 'mkdir',
    description: {
      en: 'Creates a new directory.',
      ar: 'ينشئ مجلدًا جديدًا.',
    },
    example: 'mkdir lab-notes',
  },
  {
    id: 'touch',
    category: 'linux',
    platform: 'Linux',
    command: 'touch',
    description: {
      en: 'Creates an empty file or updates a file’s timestamp.',
      ar: 'ينشئ ملفًا فارغًا أو يحدّث الطابع الزمني لملف موجود.',
    },
    example: 'touch report.txt',
  },
  {
    id: 'cp',
    category: 'linux',
    platform: 'Linux',
    command: 'cp',
    description: {
      en: 'Copies files or directories from a source to a destination.',
      ar: 'ينسخ الملفات أو المجلدات من مصدر إلى وجهة.',
    },
    example: 'cp notes.txt backup.txt',
  },
  {
    id: 'mv',
    category: 'linux',
    platform: 'Linux',
    command: 'mv',
    description: {
      en: 'Moves or renames files and directories.',
      ar: 'ينقل أو يعيد تسمية الملفات والمجلدات.',
    },
    example: 'mv old.txt new.txt',
  },
  {
    id: 'rm',
    category: 'linux',
    platform: 'Linux',
    command: 'rm',
    description: {
      en: 'Removes files. Use with caution — deletion is permanent.',
      ar: 'يحذف الملفات. استخدمه بحذر — الحذف نهائي.',
    },
    example: 'rm temp.txt',
    warning: {
      en: 'rm permanently deletes files. Double-check the path before running.',
      ar: 'الأمر rm يحذف الملفات نهائيًا. تأكّد من المسار قبل التنفيذ.',
    },
  },
  {
    id: 'cat',
    category: 'linux',
    platform: 'Linux',
    command: 'cat',
    description: {
      en: 'Prints the contents of a file to the terminal.',
      ar: 'يطبع محتوى ملف على الطرفية.',
    },
    example: 'cat /etc/hosts',
  },
  {
    id: 'less',
    category: 'linux',
    platform: 'Linux',
    command: 'less',
    description: {
      en: 'Views file contents one screen at a time with scrolling and search.',
      ar: 'يعرض محتوى الملف شاشة تلو الأخرى مع إمكانية التمرير والبحث.',
    },
    example: 'less /var/log/syslog',
  },
  {
    id: 'whoami',
    category: 'linux',
    platform: 'Linux',
    command: 'whoami',
    description: {
      en: 'Prints the username of the current user.',
      ar: 'يطبع اسم المستخدم الحالي.',
    },
  },
  {
    id: 'id',
    category: 'linux',
    platform: 'Linux',
    command: 'id',
    description: {
      en: 'Shows the current user’s UID, GID, and group memberships.',
      ar: 'يعرض معرّف المستخدم UID ومعرّف المجموعة GID والمجموعات التي ينتمي إليها.',
    },
  },
  {
    id: 'uname-a',
    category: 'linux',
    platform: 'Linux',
    command: 'uname -a',
    description: {
      en: 'Prints kernel name, version, and system architecture.',
      ar: 'يطبع اسم النواة وإصدارها وبنية النظام.',
    },
  },
]

export function commandsByCategory(category: CategoryId): Command[] {
  return commands.filter((c) => c.category === category)
}
