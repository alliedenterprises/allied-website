// /biotime-time-attendance-system-qatar/ copy: kept from the old WordPress page of the same URL (requested).
// Changes: the old page described "BioTime 8.5" (and "the previous version 7.0"), but the home page now
// shows BioTime 9.5, so the copy names no version; the two feature lists (the first was a subset of the
// second) merged into one; "Bio metric" / "FUnction" typos fixed; the old support number +974 3002 9868
// replaced with the numbers in company.ts. No pictures (requested).
// VERIFY: every feature below is in the BioTime version Allied sells today (the list came from 8.5).
import { company } from './company'
import type { ContentBlock } from './types'

export const biotimeHero = {
  eyebrow: 'ZKTeco attendance software',
  heading: 'BioTime Time Attendance System in Qatar',
  lead: 'BioTime is a web-based, multi-location, centralized time management solution from ZKTeco.',
  text: [
    'BioTime is a powerful time attendance software that provides stable communication with up to thousands of time and attendance devices, which can be managed remotely from anywhere by opening the software in a web browser.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco agent in Qatar',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export const biotimeFeatures = {
  heading: 'Main functions and features of ZKTeco BioTime',
  items: [
    'Web-based time attendance software',
    'Attendance calculation & reports',
    'Payroll management and WPS report',
    'Roster and overtime management',
    'Flexible shift scheduling and auto-shift',
    'Multi-level approvals and automatic e-mail alerts',
    'WhatsApp notifications',
    'Employee self-service',
    'Mobile application',
    'Geofencing mobile punches',
    'Auto-sync of palm, finger-vein, face, fingerprint and card templates',
    'Real-time data transmission',
    'Integration with API',
    'Embedded HR integration',
    'Database migration',
    'BioPhoto function',
    'Simple access control module',
    'Multiple admin privilege',
    'Multi-language',
  ],
}

export const biotimeAbout = {
  heading: 'Why BioTime',
  text: [
    'BioTime is equipped with competitive functions such as roster and overtime management, which simplifies the entire scheduling process for employees, a built-in API to connect to the client’s third-party software, database migration, BioPhoto, and geofencing mobile punches.',
    'BioTime also features a dashboard where users can easily monitor the attendance summary, device status, request approvals that are approved, rejected and pending, and real-time punches.',
    'BioTime gives the user full access and control in managing timetables and shift schedules, generating attendance reports, and more.',
    `You may contact our support team on ${company.phone.display}, WhatsApp ${company.helpline.display} or ${company.email}.`,
  ] as ContentBlock[],
  links: [
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'Payroll integration', href: '/payroll-integration-qatar/' },
    { label: 'HRMS & payroll', href: '/hrms-payroll-management-qatar/' },
  ],
}
