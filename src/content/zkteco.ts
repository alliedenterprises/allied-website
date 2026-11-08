// /zkteco-qatar/ copy: new page (no old WordPress equivalent; see docs/seo-audit.md P2). Original text built
// only from facts already confirmed elsewhere on the site:
// - "authorized ZKTeco agent in Qatar" (confirmed by the company, see about.ts / home.ts); the About page's old
//   copy also says "authorized dealer". It does NOT say "distributor" (a different role), so that word is
//   not used.
// - 3000+ installations as of 2026, stock and support staff in Qatar, consultation → no-obligation quote →
//   site visit if required → installation → software demonstration (time-attendance.ts).
// - Product families and models already named on the home banners and the gate barrier page.
// FAQ structured data is intentionally not added (Google limits FAQ rich results to a few site types).
import { company } from './company'
import type { FaqItem } from './types'

export const zktecoHero = {
  heading: 'Authorized ZKTeco Dealer in Qatar',
  lead: 'Allied Enterprises is the authorized ZKTeco agent and dealer in Qatar, supplying a wide range of ZKTeco products and solutions to businesses across Doha and the rest of the country.',
  text: [
    'From a single fingerprint terminal for a small office to multi-site attendance, access control and entrance control, we supply the hardware, install it, set up the software and support it from our two offices in Doha.',
  ],
  image: {
    src: '/images/banners/zkteco-face-palm-attendance-terminals.webp',
    width: 1600,
    height: 777,
    alt: 'ZKTeco face recognition and palm verification time attendance terminals',
  },
  badge: 'Authorized ZKTeco agent in Qatar',
  // recognition methods of the terminals we supply (see zktecoProducts below)
  methods: ['Face', 'Palm', 'Fingerprint', 'Card'],
  // facts already confirmed elsewhere on the site (home.ts companyStats, time-attendance.ts, company.ts)
  stats: [
    { value: '3000+', label: 'Installations as of 2026' },
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
  /** Official ZKTeco product page (opens in a new tab) */
  href: string
}

export const zktecoProducts = {
  heading: 'ZKTeco Products and Solutions in Qatar',
  intro:
    'As an authorized ZKTeco dealer, we supply the main ZKTeco product families and help you choose the right models for your staff numbers, doors and sites.',
  // Images: product shots supplied by the company (from zkteco.com); links: official zkteco.com pages.
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
      href: 'https://www.zkteco.com/en/TimeAttendanceTerminal',
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
      href: 'https://www.zkteco.com/en/ZKBioTimeCloud/ZKBio_Time_Cloud',
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
      href: 'https://www.zkteco.com/en/SpeedFaceSeries',
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
      href: 'https://www.zkteco.com/en/CometSeries',
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
      href: 'https://www.zkteco.com/en/BGM1000',
    },
  ] as ProductFamily[],
  links: [
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'BioTime attendance software', href: '/biotime-time-attendance-system-qatar/' },
    { label: 'Access control systems', href: '/access-control-system-qatar/' },
    { label: 'Turnstiles and gate barriers', href: '/zkteco-qatar-gate-barrier-system/' },
  ],
}

export const zktecoWhy = {
  heading: 'Why buy ZKTeco from Allied Enterprises',
  items: [
    'Authorized ZKTeco agent in Qatar',
    'More than 3000 installations as of 2026',
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
  ],
}

export type ProcessStep = {
  title: string
  text: string
  icon: 'brief' | 'quote' | 'install' | 'support'
}

export const zktecoProcess = {
  heading: 'How to Buy ZKTeco in Qatar',
  intro: 'From your first message to after-sales support, buying ZKTeco through Allied Enterprises takes four simple steps.',
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
      question: 'Is Allied Enterprises an authorized ZKTeco dealer in Qatar?',
      answer: [
        'Yes. Allied Enterprises WLL is the authorized ZKTeco agent in Qatar, supplying ZKTeco time attendance, access control and entrance control products, and has completed more than 3000 installations as of 2026.',
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
