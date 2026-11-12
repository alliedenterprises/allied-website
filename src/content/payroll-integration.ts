// /payroll-integration-qatar/ copy: kept from the old WordPress page of the same URL (requested).
// Changes: "Biotime" → "BioTime"; "any of the listed payroll platforms" → "supported payroll
// platforms" (the old page never listed them); the benefits list got a heading. No pictures (requested).
// 2026-11-12: added the integration options, WPS, process and FAQ sections (the Google Business Profile lists
// "Payroll Integration Service Qatar" and "Wage Protection Systems Integration"; the page had no WPS content).
// Confirmed by the company: both options are offered: (1) its own payroll software (Sunbird Payroll, or the
// company's own ERP/payroll, which has no public product name, so none is used) generates the WPS SIF file;
// (2) attendance data is exported to the customer's payroll: Excel/CSV, or a direct link to the customer's
// ERP. Integration methods (API or database) are not promised per system. Qatar WPS rules are explained on
// /hrms-payroll-management-qatar/ (checked against Ministerial Decision No. 4 of 2015); this page only links
// there, to keep the two pages from competing.
import type { ContentBlock, FaqItem } from './types'

export const piHero = {
  heading: 'Payroll & WPS Integration in Qatar',
  lead: 'Investing in an automated enterprise solution is a big decision, one that can impact aspects of your operations well beyond its immediate function. A payroll solution can affect processes in HR, Finance, IT and even Sales. As you consider your options, it becomes clear that a key to unlocking the full potential of any system is integrating it with your existing solutions.',
  text: [
    'Sunbird Payroll Integrator lets you connect to supported payroll platforms allowing you to import and synchronise your data between the two systems to easily manage your business. Once imported, any data that you update in BioTime or Sunbird Software will automatically be reflected in your payroll system.',
    'Integrating your payroll system with our employee time and attendance software can reduce payroll errors as you can track exactly how many hours have been worked and use the built-in calculations to work out overtime, vacation and sick pay.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Authorized ZKTeco distributor in Qatar',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const piOptions = {
  heading: 'Two ways to connect attendance to payroll',
  text: [
    'Every company runs payroll differently, so we offer two approaches. We recommend one after looking at your current payroll, your number of employees and how you pay salaries.',
    { subheading: '1. Our payroll software, with the WPS file built in' },
    'Attendance from your ZKTeco devices flows straight into our payroll software (Sunbird Payroll, or our own ERP and payroll system). Payroll calculates basic salary, overtime, absences, leave and deductions, then produces the WPS Salary Information File (SIF) for you to upload to your bank. This suits companies that want attendance, payroll and WPS in one place.',
    { subheading: '2. Export to the payroll you already use' },
    'Keep your current payroll or ERP. We set up BioTime or Sunbird to send it the attendance data it needs:',
    {
      list: [
        'Excel or CSV export, in the column layout your payroll imports',
        'A direct connection to your ERP or payroll system, so attendance is transferred without manual steps',
      ],
    },
    'Your payroll then makes the WPS file as it does today, with attendance figures you no longer need to type in.',
  ] as ContentBlock[],
}

export const piProcess = {
  heading: 'From the attendance machine to the WPS salary file',
  text: [
    {
      list: [
        'Clock-in: employees clock in and out on ZKTeco fingerprint, face, palm or card terminals at each site.',
        'Attendance rules: BioTime or Sunbird applies your shifts, overtime rules, late arrivals, absences and leave.',
        'Approval: HR reviews the monthly attendance summary and corrects any missed punches.',
        'Payroll: approved hours go to payroll, either our software or yours.',
        'WPS: payroll produces the SIF salary file, which you upload to your bank.',
      ],
    },
    'Because the figures come straight from the attendance machines, nobody retypes hours, and the salary file matches what employees actually worked.',
  ] as ContentBlock[],
  links: [
    { label: 'WPS rules in Qatar (HRMS & payroll)', href: '/hrms-payroll-management-qatar/' },
    { label: 'Attendance machines', href: '/time-attendance-system-qatar/' },
  ],
}

export const piBenefits = {
  heading: 'Benefits of payroll integration',
  items: [
    'Eliminate payroll errors',
    'Achieve simplicity for employees',
    'Get quicker reporting',
    'Get accurate cost analysis',
    'Find records quicker',
    'Lighten administration',
  ],
  links: [
    { label: 'Time attendance systems', href: '/time-attendance-system-qatar/' },
    { label: 'BioTime software', href: '/biotime-time-attendance-system-qatar/' },
    { label: 'Sunbird Time & Attendance', href: '/sunbirdtime-time-management-system-qatar/' },
  ],
}

export const piFaq = {
  heading: 'Payroll integration questions',
  items: [
    {
      question: 'Do we have to change our payroll software?',
      answer: [
        'No. We can export attendance to Excel or CSV in the layout your payroll imports, or connect directly to your ERP or payroll system. If you would rather move to one system, our own payroll software handles attendance, salaries and the WPS file together.',
      ],
    },
    {
      question: 'Can you produce the WPS SIF file?',
      answer: [
        'Yes. Our payroll software generates the Salary Information File (SIF) that you upload to your bank each month. If you keep your own payroll, we provide the attendance data it needs to make the file.',
      ],
    },
    {
      question: 'What attendance data is sent to payroll?',
      answer: [
        'Normally worked days and hours, overtime, late arrivals, early departures, absences and leave for each employee and pay period. We agree the exact fields with you during setup.',
      ],
    },
    {
      question: 'Does it work with several sites or branches?',
      answer: [
        'Yes. Terminals at each site report to the same BioTime or Sunbird system, so payroll receives one combined, approved attendance file for the whole company.',
      ],
    },
    {
      question: 'Which attendance software does the integration use?',
      answer: [
        'ZKTeco BioTime or Sunbird Time & Attendance, both installed and supported by our team in Doha.',
      ],
    },
  ] as FaqItem[],
}
