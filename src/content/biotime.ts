// /biotime-time-attendance-system-qatar/ copy. Based on the old WordPress page of the same URL, expanded on
// 2026-11-09 (SEO audit: the page was thin, about 290 words, for the "ZKTeco BioTime software Qatar" query).
// Version, deployment, database/OS requirements, features and BioTime Cloud facts are from ZKTeco Middle East's
// official pages (zkteco.me/biotime-95, /product-details/biotime-95, /biotime-cloud), read 2026-11-09.
// Deliberately left out because ZKTeco's own two pages disagree: maximum device count ("500 per server" vs
// "thousands") and the ISO certificate versions. No prices (none published).
// VERIFY: Allied supplies BioTime 9.5 and BioTime Cloud, and installs/configures them as described.
import { company } from './company'
import type { ContentBlock, FaqItem } from './types'

export const biotimeHero = {
  eyebrow: 'ZKTeco attendance software',
  heading: 'BioTime Time Attendance System in Qatar',
  lead: 'BioTime 9.5 is ZKTeco’s web-based, multi-location time attendance software. It collects punches from your ZKTeco devices at every site and turns them into attendance, overtime and payroll reports.',
  text: [
    'As the authorized ZKTeco distributor in Qatar, we install BioTime on your server, connect your devices, set up shifts and rules, and train your team. Prefer not to run a server? BioTime Cloud gives you the same core attendance features as a hosted subscription.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco distributor in Qatar',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export const biotimeFeatures = {
  heading: 'Main functions and features of ZKTeco BioTime',
  items: [
    'Web-based time attendance software',
    'Attendance calculation & reports',
    'Basic payroll management and WPS report',
    'Roster and overtime management',
    'Flexible shift scheduling and auto-shift',
    'Leave balance management',
    'Multi-level approvals and automatic e-mail alerts',
    'WhatsApp notifications',
    'Employee self-service',
    'Mobile application',
    'Geofencing mobile punches',
    'Auto-sync of palm, face, fingerprint and card templates',
    'Real-time data transmission',
    'Built-in API for third-party HR, payroll and ERP software',
    'Visitor and meeting management',
    'Simple access control module',
    'Database backup and restore',
    'Multiple admin privileges',
    'Multi-language',
  ],
}

export const biotimeAbout = {
  heading: 'Why BioTime',
  text: [
    'BioTime brings every device, site and employee into one system. Rosters and overtime rules are set once and applied automatically, so supervisors no longer calculate hours by hand, and the built-in API passes approved attendance to your payroll or ERP software.',
    'A dashboard shows the attendance summary, device status, pending, approved and rejected requests, and live punches as they happen.',
    'Employees use the ZKBioTime mobile app or a web browser to check their timetable, submit leave and correction requests, and punch in from approved locations using geofencing.',
    `You may contact our support team on ${company.phone.display}, WhatsApp ${company.helpline.display} or ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'ZKTeco products in Qatar', href: '/zkteco-qatar/' },
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'Payroll integration', href: '/payroll-integration-qatar/' },
    { label: 'HRMS & payroll', href: '/hrms-payroll-management-qatar/' },
  ],
}

export const biotimeVersions = {
  heading: 'BioTime 9.5 or BioTime Cloud?',
  text: [
    { subheading: 'BioTime 9.5 (on-premise)' },
    'Installed on your own Windows server or PC and opened in a web browser from any site. Your attendance data stays on your network, and it suits companies with an IT team, several branches or strict data policies. The current release is BioTime 9.5.6.',
    { subheading: 'BioTime Cloud (hosted)' },
    'Runs on ZKTeco’s cloud (AWS), so there is no server to buy or maintain. It is a subscription that includes time attendance, simple access control, the mobile app and updates, and ZKTeco offers a 90-day free trial.',
    'Not sure which fits? Tell us how many employees, devices and sites you have, and we will recommend one.',
  ] as ContentBlock[],
  links: [{ label: 'Ask which version suits you', href: '/contact-us/' }],
}

export const biotimeRequirements = {
  heading: 'BioTime 9.5 server requirements',
  items: [
    'Windows Server 2016, 2019 or 2022, or Windows 10 / 11',
    'PostgreSQL (default), SQL Server 2019 / 2022, MySQL 8.0 or Oracle 19c',
    'Dual-core 2.4 GHz processor or faster',
    '4 GB RAM or more',
    '100 GB free disk space or more (NTFS)',
    'ZKTeco devices with the PUSH protocol, over Ethernet, Wi-Fi, 3G or 4G',
  ],
}

export const biotimeFaq = {
  heading: 'BioTime in Qatar: frequently asked questions',
  items: [
    {
      question: 'Which ZKTeco devices work with BioTime?',
      answer: [
        'BioTime works with ZKTeco standalone attendance devices that use the PUSH communication protocol, including face, palm, fingerprint and card terminals. Tell us the models you have, or plan to buy, and we will confirm compatibility before you order.',
      ],
    },
    {
      question: 'Can BioTime manage several sites or branches?',
      answer: [
        'Yes. BioTime is multi-location: devices at every site send punches to one central server over the network, and you manage all of them from a web browser.',
      ],
    },
    {
      question: 'Does BioTime work with our payroll or ERP software?',
      answer: [
        'BioTime has a built-in API and can export attendance reports automatically, so approved hours can be passed to third-party HR, payroll and ERP systems. It also includes basic payroll and a WPS report. See our payroll integration page or tell us which system you use.',
      ],
    },
    {
      question: 'Is there a mobile app?',
      answer: [
        'Yes. With the ZKBioTime mobile app, employees can punch in from approved locations (geofencing), see their schedule and submit requests, and managers can approve requests and view reports.',
      ],
    },
    {
      question: 'Do you install and support BioTime?',
      answer: [
        'Yes. We install the software, connect your devices, set up shifts, overtime and leave rules, enrol employees and train your team, then support you from our offices in Doha.',
      ],
    },
  ] as FaqItem[],
}
