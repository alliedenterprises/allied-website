// /zkteco-qatar/ copy: new page (no old WordPress equivalent; see docs/seo-audit.md P2). Original text built
// only from facts already confirmed elsewhere on the site:
// - "authorized ZKTeco distributor in Qatar": the company's ZKTeco Co., Ltd. 2026 certificate (shown on this page
//   and the home page) names Allied Enterprises "Authorized Distributor" for the territory of Qatar. The wording
//   was changed from "agent/dealer" to "distributor" sitewide on 2026-11-09 (SEO audit). "Dealer" is kept as a
//   search term. VERIFY each January that the certificate was renewed.
// - 10000+ installations as of 2026, stock and support staff in Qatar, consultation → no-obligation quote →
//   site visit if required → installation → software demonstration (time-attendance.ts).
// - Product families and models already named on the home banners and the gate barrier page.
// FAQ structured data is intentionally not added (Google limits FAQ rich results to a few site types).
import { company } from './company'
import type { FaqItem } from './types'

export const zktecoHero = {
  heading: 'Authorized ZKTeco Distributor & Dealer in Qatar',
  lead: 'Allied Enterprises is the authorized ZKTeco distributor and dealer in Qatar, supplying a wide range of ZKTeco products and solutions to businesses across Doha and the rest of the country.',
  text: [
    'From a single fingerprint terminal for a small office to multi-site attendance, access control and entrance control, we supply the hardware, install it, set up the software and support it from our two offices in Doha.',
  ],
  image: {
    src: '/images/banners/zkteco-face-palm-attendance-terminals.webp',
    width: 1600,
    height: 777,
    alt: 'ZKTeco face recognition and palm verification time attendance terminals',
  },
  badge: 'Authorized ZKTeco distributor in Qatar',
  // recognition methods of the terminals we supply (see zktecoProducts below)
  methods: ['Face', 'Palm', 'Fingerprint', 'Card'],
  // facts already confirmed elsewhere on the site (home.ts companyStats, time-attendance.ts, company.ts)
  stats: [
    { value: '10,000+', label: 'Installations as of 2026' },
    { value: '10+', label: 'Years in business' },
    { value: '2', label: 'Offices in Doha' },
    { value: 'End-to-end', label: 'Supply, install & support' },
  ],
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export type ProductFamily = {
  title: string
  text: string
  image: { src: string; width: number; height: number; alt: string }
  /** Official ZKTeco Middle East (zkteco.me) product page (opens in a new tab) */
  href: string
}

export const zktecoProducts = {
  heading: 'ZKTeco Products and Solutions in Qatar',
  intro:
    'As the authorized ZKTeco distributor and dealer, we supply the main ZKTeco product families and help you choose the right models for your staff numbers, doors and sites.',
  // Images: product shots supplied by the company (from zkteco.com).
  // Links: ZKTeco Middle East (zkteco.me) pages, checked as loading (HTTP 200) on 2026-11-09.
  items: [
    {
      title: 'Time attendance terminals',
      text: 'Attendance terminals with face, palm, fingerprint and card recognition, for accurate attendance records in offices, factories, schools and construction sites.',
      image: {
        src: '/images/zkteco/zkteco-fingerprint-time-attendance-terminal.webp',
        width: 369,
        height: 403,
        alt: 'ZKTeco fingerprint time attendance terminal with keypad',
      },
      href: 'https://www.zkteco.me/Time-Attendance',
    },
    {
      title: 'Attendance software',
      text: 'BioTime 9.5 web-based attendance software for one or many locations, and BioTime Cloud for managing attendance from any device, with ERP, HR and payroll integration.',
      image: {
        src: '/images/zkteco/zkteco-biotime-cloud-software.webp',
        width: 445,
        height: 261,
        alt: 'ZKBioTime Cloud attendance software sign-in screen',
      },
      href: 'https://www.zkteco.me/biotime-95',
    },
    {
      title: 'Face recognition and access control',
      text: 'SpeedFace series face recognition terminals and biometric and card access control for doors and secure areas, with audit trail reports of who entered and when.',
      image: {
        src: '/images/zkteco/zkteco-speedface-face-recognition-terminal.webp',
        width: 220,
        height: 439,
        alt: 'ZKTeco SpeedFace series face recognition terminal',
      },
      // zkteco.me has no SpeedFace series page; its face access control page lists the SpeedFace models
      href: 'https://www.zkteco.me/face-access-control',
    },
    {
      title: 'Turnstiles, flap and swing barriers',
      text: 'Entrance control for lobbies and secure areas, including Comet series and Saturn-S2000 series swing barriers, FBL series flap barriers and TS series tripod turnstiles.',
      image: {
        src: '/images/zkteco/zkteco-comet-series-swing-barrier.webp',
        width: 327,
        height: 411,
        alt: 'ZKTeco Comet series swing barrier',
      },
      // turnstile / pedestrian page: covers tripod turnstiles, flap and swing barriers, including the Comet series
      href: 'https://www.zkteco.me/pedestrian-product',
    },
    {
      title: 'Vehicle and parking control',
      text: 'Parking barriers such as the BGM1000, plus LPR cameras, UHF readers, parking ticket machines and parking locks for car parks, compounds and gated entrances.',
      image: {
        src: '/images/zkteco/zkteco-bgm1000-parking-barrier.webp',
        width: 304,
        height: 214,
        alt: 'ZKTeco BGM1000 parking barrier gate',
      },
      // vehicle control page: BGM1000 and other parking barriers, LPR and UHF products
      href: 'https://www.zkteco.me/vehicle-control',
    },
  ] as ProductFamily[],
  links: [
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'BioTime attendance software', href: '/biotime-time-attendance-system-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
    { label: 'Turnstiles and gate barriers', href: '/zkteco-qatar-gate-barrier-system/' },
  ],
}

// Same certificate as the home page (home.ts whyAllied.certificate).
// VERIFY: valid 1 Jan – 31 Dec 2026 only. Replace with the renewed certificate in January 2027.
export const zktecoCertificate = {
  heading: 'Certified by ZKTeco for Qatar',
  text: [
    'ZKTeco Co., Ltd. has issued Allied Enterprises its Authorized Distributor certificate for the territory of Qatar, valid from 1 January to 31 December 2026.',
    'Buying through the authorized distributor means genuine ZKTeco products supplied through the official channel, with installation, configuration and support from our team in Doha.',
  ],
  links: [
    {
      label: 'View the full certificate',
      href: '/images/certifications/zkteco-authorized-distributor-qatar-2026.webp',
    },
  ],
  image: {
    src: '/images/certifications/zkteco-authorized-distributor-qatar-2026.webp',
    width: 1360,
    height: 1785,
    alt: 'ZKTeco 2026 Authorized Distributor certificate issued to Allied Enterprises for the territory of Qatar',
  },
}

// Same award as the home page banner (home.ts bannerSlides, "ZKTeco Award 2025"). Facts from the company's
// trophy and certificate photos only: trophy "Distinguished Project Leadership Award 2025"; certificate from
// ZKTeco Co., Ltd. to Allied Enterprises, "Distinguished Project Leadership", "Certificate of 2024 Achievement",
// "In honor of your outstanding excellence". Do not add a ranking or "best dealer" claim the award doesn't make.
export const zktecoAward = {
  heading: 'ZKTeco Distinguished Project Leadership Award',
  text: [
    'ZKTeco Co., Ltd. has honoured Allied Enterprises with its Distinguished Project Leadership Award 2025, presented with a Certificate of 2024 Achievement in recognition of our outstanding excellence in ZKTeco projects.',
    {
      list: [
        'Award: Distinguished Project Leadership Award 2025',
        'Certificate: Certificate of 2024 Achievement',
        'Presented by: ZKTeco Co., Ltd.',
        'Presented to: Allied Enterprises, Doha, Qatar',
      ],
    },
    'Together with our Authorized Distributor certificate, it means that when you look for a ZKTeco dealer in Qatar, you work with a partner recognised by ZKTeco itself. Our team handles each project from start to finish: choosing the right attendance terminals, access control and entrance control for your site, installation and configuration, BioTime software setup and after-sales support from Doha.',
  ],
  links: [{ label: 'Discuss your ZKTeco project with us', href: '/contact-us/' }],
  image: {
    src: '/images/banners/zkteco-leadership-award-level.webp',
    width: 1400,
    height: 960,
    alt: 'ZKTeco Distinguished Project Leadership Award 2025 trophy and ZKTeco certificate presented to Allied Enterprises',
  },
}

export const zktecoWhy = {
  heading: 'Why buy ZKTeco from Allied Enterprises',
  items: [
    'Authorized ZKTeco distributor in Qatar',
    'ZKTeco Distinguished Project Leadership Award 2025',
    'More than 10000 installations as of 2026',
    'Product stock and support staff in Qatar',
    'Advice on the right models for your site',
    'Installation and configuration by our technicians',
    'BioTime software installation and setup',
    'Payroll and HRMS integration',
    'Two offices in Doha for local support',
  ],
  links: [
    { label: 'Payroll integration', href: '/payroll-integration-qatar/' },
    { label: 'HRMS and payroll management', href: '/hrms-payroll-management-qatar/' },
    { label: 'About Allied Enterprises', href: '/about-us/' },
  ],
}

export type ProcessStep = {
  title: string
  text: string
  icon: 'brief' | 'quote' | 'install' | 'support'
}

export const zktecoProcess = {
  heading: 'How to Buy ZKTeco in Qatar',
  intro:
    'From your first message to after-sales support, buying ZKTeco through Allied Enterprises takes four simple steps.',
  steps: [
    {
      title: 'Tell us what you need',
      text: 'Share your number of employees, doors or entrances, and sites, and how you track attendance today.',
      icon: 'brief',
    },
    {
      title: 'Consultation and quotation',
      text: 'We recommend suitable ZKTeco devices and software and send a no-obligation quotation, with a site visit if required.',
      icon: 'quote',
    },
    {
      title: 'Installation and setup',
      text: 'Our team installs the devices, sets up the attendance or access control software and enrols your users.',
      icon: 'install',
    },
    {
      title: 'Demonstration and support',
      text: 'We show your team how to use the software and support you after installation from our offices in Doha.',
      icon: 'support',
    },
  ] as ProcessStep[],
  contact: {
    heading: 'Ready for a quotation?',
    text: 'Call, WhatsApp or email our team in Doha.',
    primary: { label: 'Request a Quote', href: '/contact-us/' },
  },
}

export const zktecoFaq = {
  heading: 'ZKTeco Qatar: frequently asked questions',
  items: [
    {
      question: 'Is Allied Enterprises an authorized ZKTeco distributor in Qatar?',
      answer: [
        'Yes. ZKTeco Co., Ltd. has certified Allied Enterprises WLL as its authorized distributor for the territory of Qatar (2026 certificate shown on this page). We supply ZKTeco time attendance, access control and entrance control products as a distributor and dealer, and have completed more than 10000 installations as of 2026. ZKTeco also presented us with its Distinguished Project Leadership Award 2025.',
      ],
    },
    {
      question: 'Which ZKTeco products can I buy from you?',
      answer: ['We supply the main ZKTeco product families in Qatar, including:'],
      list: [
        'Face, palm, fingerprint and card attendance terminals',
        'BioTime 9.5 and BioTime Cloud attendance software',
        'Biometric and card access control',
        'Tripod turnstiles, flap barriers and swing barriers',
        'Parking barriers, LPR cameras and other vehicle control products',
      ],
    },
    {
      question: 'Do you install and configure ZKTeco devices?',
      answer: [
        'Yes. We supply, install and configure ZKTeco devices, and install and set up the attendance software, followed by a demonstration for your team.',
      ],
    },
    {
      question: 'Can ZKTeco attendance data connect to our payroll?',
      answer: [
        'Yes. ZKTeco BioTime supports integration with third-party ERP, HR and payroll software, and we also offer HRMS and payroll solutions. Tell us which system you use and we will advise on the best way to connect it.',
      ],
    },
    {
      question: 'How much does a ZKTeco attendance system cost in Qatar?',
      answer: [
        'The price depends on the type of device (face, palm, fingerprint or card), the number of users, doors and sites, the software (BioTime on-premise or BioTime Cloud) and installation. Contact us with your requirements for a no-obligation quotation.',
      ],
    },
    {
      question: 'Where are your offices in Doha?',
      answer: [
        `We have two offices in Doha: ${company.offices.map((o) => o.streetAddress).join(' and ')}. We are open Sunday to Thursday, 8:00 AM to 5:30 PM, and Saturday, 8:00 AM to 1:00 PM.`,
      ],
    },
  ] as FaqItem[],
}
