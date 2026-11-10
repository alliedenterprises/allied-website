// /hrms-payroll-management-qatar/ copy: new, written for this site (the old WordPress page had a
// title only). Product facts are limited to what the site already states: ZKTeco attendance devices,
// BioTime, Sunbird and the Sunbird Payroll Integrator (see payroll-integration.ts), and consultation,
// quotation, site visit, installation and demonstration (see time-attendance.ts). No pictures (requested).
// Qatar rules checked 2026-11-03 against Ministerial Decision No. 4 of 2015 (WPS, as amended) and
// Labour Law No. 14 of 2004 summaries; overtime rates left out because they could not be confirmed.
// VERIFY: the HRMS/payroll software Allied offers covers every item in hrmsCovers; remove any it does not.
import { company } from './company'
import type { ContentBlock, FaqItem } from './types'

export const hrmsHero = {
  eyebrow: 'HR and payroll for companies in Qatar',
  heading: 'HRMS & Payroll Management in Qatar',
  lead: 'Pay every employee for the hours they actually worked. An HRMS and payroll system keeps employee records, leave and monthly salaries in one place, and takes working hours straight from your attendance devices instead of manual timesheets.',
  text: [
    'Allied Enterprises supplies and installs ZKTeco time attendance systems in Qatar and connects the attendance data to payroll through BioTime and the Sunbird Payroll Integrator. We help you plan an HR and payroll setup that fits your shifts, your leave rules and your monthly salary run.',
    'Tell us how many employees and sites you have and how you pay salaries today, and we will suggest a setup and arrange a demonstration.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco distributor in Qatar',
  primary: { label: 'Request a Demo', href: '/contact-us/' },
}

export const hrmsCovers = {
  heading: 'What an HRMS & payroll system manages',
  items: [
    'Employee records and documents',
    'Shifts, rosters and working hours',
    'Leave, absence and overtime',
    'Monthly payroll and payslips',
    'WPS salary files for your bank',
    'End-of-service gratuity and reports',
  ],
}

export const hrmsQatarRules = {
  heading: 'Payroll in Qatar: what your system needs to handle',
  text: [
    'Qatar’s Wage Protection System (WPS) requires companies to pay salaries through a bank in Qatar, normally within seven days of the due date. Each month the company sends a Salary Information File (SIF) through its bank, so salary payments can be monitored by the Ministry of Labour.',
    'Payroll also has to follow the Labour Law, for example:',
    {
      list: [
        'Ordinary working hours of up to 8 hours a day and 48 hours a week, reduced to 6 and 36 during Ramadan.',
        'Annual leave of at least three weeks, rising to four weeks after five years of service.',
        'End-of-service gratuity of at least three weeks’ basic wage for each year of service, once an employee completes one year.',
      ],
    },
    'A payroll system that already holds each employee’s hours, leave and service dates makes these calculations far less error-prone. Rules change from time to time, so confirm current requirements with the Ministry of Labour or your legal adviser.',
  ] as ContentBlock[],
}

export const hrmsFlow = {
  heading: 'From attendance to payslip',
  text: [
    'Many payroll mistakes start with the hours recorded. Connecting your attendance system to payroll takes manual timesheets out of the process:',
    {
      list: [
        'Employees clock in and out on ZKTeco fingerprint, face or card devices.',
        'BioTime or Sunbird works out hours, overtime and absences against each employee’s shift.',
        'The Sunbird Payroll Integrator imports and synchronises the data with your payroll system.',
        'Payroll calculates salaries, overtime, vacation and sick pay, ready for your monthly WPS salary run.',
      ],
    },
    'Because the data is synchronised, any change you make in BioTime or Sunbird is reflected in payroll, so HR and finance work from the same figures.',
  ] as ContentBlock[],
  links: [
    { label: 'Payroll integration', href: '/payroll-integration-qatar/' },
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'BioTime software', href: '/biotime-time-attendance-system-qatar/' },
  ],
}

export const hrmsFaq = {
  heading: 'HRMS & payroll questions',
  items: [
    {
      question: 'What is an HRMS?',
      answer: [
        'An HRMS (human resource management system) is software that keeps employee information and HR processes in one place: personal and job details, documents, shifts, leave and attendance. Combined with payroll, it uses that information to calculate salaries each month.',
      ],
    },
    {
      question: 'Does payroll in Qatar need to support WPS?',
      answer: [
        'Companies covered by the Labour Law must pay salaries through the Wage Protection System, so your payroll process needs to produce the salary file your bank accepts. Ask us how your attendance and payroll data can feed into it.',
      ],
    },
    {
      question: 'Can attendance from ZKTeco devices go straight into payroll?',
      answer: [
        'Yes. Attendance from ZKTeco devices is collected in BioTime or Sunbird software, and the Sunbird Payroll Integrator imports and synchronises it with supported payroll platforms, so updates flow through automatically.',
      ],
    },
    {
      question: 'Do you install the system and show our team how to use it?',
      answer: [
        'Yes. We start with a consultation and a no obligation quotation, visit your site if required, install the system and give a demonstration of the software.',
      ],
    },
    {
      question: 'How do I get a quote or a demo?',
      answer: [
        `Call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email} with the number of employees and sites, and how you run payroll today.`,
      ],
    },
  ] as FaqItem[],
}
