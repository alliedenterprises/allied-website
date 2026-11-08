// /sunbirdtime-time-management-system-qatar/ copy: new, written for this site (the old WordPress page had a
// title only). Product facts are limited to what the site already says about Sunbird: the Sunbird Time &
// Attendance module (time-attendance.ts, taCloud) and the Sunbird Payroll Integrator
// (payroll-integration.ts). No public product information about Sunbird could be found to add more.
// No pictures (requested).
// VERIFY: that the cloud hosting options (your server or ours, with updates and backups) and GPS mobile
// clocking described in taCloud apply to Sunbird; adding Sunbird's real modules and screens would help.
import { company } from './company'
import type { ContentBlock, FaqItem } from './types'

export const sunbirdHero = {
  eyebrow: 'Cloud-based time management',
  heading: 'Sunbird Time Management System in Qatar',
  lead: 'Sunbird Time & Attendance takes the manual, error-prone work out of tracking employee time, so managers get accurate attendance data without chasing timesheets.',
  text: [
    'It applies even complex working policies with accuracy and gives managers real-time data, along with the tools to control human resources costs and improve productivity.',
    'Allied Enterprises supplies, sets up and supports Sunbird for companies in Qatar, alongside ZKTeco attendance devices and payroll integration.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'Setup and support in Doha',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export const sunbirdHelps = {
  heading: 'What Sunbird helps you manage',
  items: [
    'Employee attendance in real time',
    'Complex working policies and shifts',
    'Hours, overtime and absences',
    'Mobile staff with GPS phone clocking',
    'Human resources costs',
    'Attendance data for payroll',
  ],
}

export const sunbirdHosting = {
  heading: 'Hosted on your server or ours',
  text: [
    'Sunbird is a cloud-based system, so you choose where it runs:',
    {
      list: [
        'On your own server, if you prefer to keep the data in-house.',
        'On our servers, where we maintain the application and the servers, including software updates and data backups.',
      ],
    },
    'When we host it, your infrastructure requirements are minimal. GPS-located mobile phone clocking makes it a good fit for companies with staff working at client sites, on the road or across several locations in Qatar.',
  ] as ContentBlock[],
}

export const sunbirdPayroll = {
  heading: 'From attendance to payroll',
  text: [
    'Attendance recorded in Sunbird can flow straight into payroll. The Sunbird Payroll Integrator connects to supported payroll platforms and synchronises the data between the two systems, so any update you make in Sunbird is reflected in payroll automatically.',
    'That means fewer payroll errors: hours worked are tracked exactly, and overtime, vacation and sick pay are worked out with built-in calculations instead of by hand.',
  ] as ContentBlock[],
  links: [
    { label: 'Payroll integration', href: '/payroll-integration-qatar/' },
    { label: 'HRMS & payroll', href: '/hrms-payroll-management-qatar/' },
    { label: 'BioTime software', href: '/biotime-time-attendance-system-qatar/' },
  ],
}

export const sunbirdFaq = {
  heading: 'Sunbird questions',
  items: [
    {
      question: 'Is Sunbird cloud-based?',
      answer: [
        'Yes. It can be hosted on your own server or on ours. If we host it, we take care of the application, the servers, software updates and data backups.',
      ],
    },
    {
      question: 'Can employees clock in from their phones?',
      answer: [
        'Yes. GPS-located mobile phone clocking records where each punch was made, which suits teams that work away from the office.',
      ],
    },
    {
      question: 'Does Sunbird connect to our payroll system?',
      answer: [
        'Through the Sunbird Payroll Integrator, attendance data is imported and synchronised with supported payroll platforms. Tell us which payroll system you use and we will confirm.',
      ],
    },
    {
      question: 'How do I get a demo or a quote?',
      answer: [
        `Call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email} with the number of employees and sites you have.`,
      ],
    },
  ] as FaqItem[],
}
